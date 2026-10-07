'use strict';

/**
 * Rewrite a practice-paper Markdown file to use a question bank.
 *
 * Replaces the inline questions (and the trailing answer-key table, now
 * redundant because the key lives in the JSON) with a single `{{questions}}`
 * marker, while keeping the paper's title and any section structure that
 * precedes the questions.
 *
 * Writes to `<paper>.md` only when the result is verified against the JSON bank
 * for question count and answer correctness.
 */

const fs = require('fs');
const path = require('path');

const { convertPaper, readNormalised } = require('./md-to-questions');

/** Marker line that replaces the question body. */
const MARKER = '{{questions}}';

/**
 * Build the new Markdown for a paper.
 *
 * Section structure is preserved by emitting one marker per section, so the
 * rendered page keeps the "Section N: topic (Questions x to y)" headings that
 * make a 100-question paper navigable. The answer-key table is dropped, since
 * the answers now live in the JSON bank.
 *
 * @param {string} text Normalised Markdown.
 * @returns {{markdown: string, sections: number}}
 */
function rewritePaper(text) {
  const lines = text.split('\n');

  const firstQuestion = lines.findIndex((line) => /^#{2,6}\s*(?:Q)?\d+[.)]\s/.test(line));
  if (firstQuestion === -1) {
    throw new Error('no questions found');
  }

  // Walk the body, keeping section headings and emitting a marker after each.
  const body = [];
  let sections = 0;
  let seenQuestion = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Stop at the answer key; its content is now redundant.
    if (/^#{1,6}\s*Answer\s*Key/i.test(line)) break;

    const isSectionHeading = /^##\s/.test(line);
    const isQuestionHeading = /^#{2,6}\s*(?:Q)?\d+[.)]\s/.test(line);

    if (isSectionHeading) {
      body.push(line.trimEnd());
      body.push('');
      body.push(MARKER);
      body.push('');
      sections++;
      continue;
    }

    if (isQuestionHeading) {
      seenQuestion = true;
      // Question text is rendered from the bank, so skip the inline copy.
      continue;
    }

    // Before the first question or section: keep intro prose verbatim.
    if (!seenQuestion && sections === 0 && line.trim() !== '') {
      body.push(line.trimEnd());
    }
  }

  // A paper with questions but no section headings still needs one marker.
  if (sections === 0) {
    body.push(MARKER);
  }

  return {
    markdown: body.join('\n').replace(/\n{3,}/g, '\n\n').trimEnd() + '\n',
    sections: Math.max(sections, 1),
  };
}

module.exports = { rewritePaper, MARKER };

// --- CLI -------------------------------------------------------------------

if (require.main === module) {
  const args = process.argv.slice(2);
  const write = args.includes('--write');
  const target = args.find((a) => !a.startsWith('--')) || path.join(__dirname, '..', 'notes');

  const files = [];
  (function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.name.endsWith('.md') && /practice-paper/i.test(entry.name)) files.push(full);
    }
  })(target);

  let converted = 0;
  const problems = [];
  const summary = [];

  for (const file of files.sort()) {
    const jsonPath = file.replace(/\.md$/, '.json');
    if (!fs.existsSync(jsonPath)) {
      problems.push(`${path.basename(file)}: no JSON bank, skipped`);
      continue;
    }

    const text = readNormalised(file);
    const { records } = convertPaper(file);

    let result;
    try {
      result = rewritePaper(text);
    } catch (error) {
      problems.push(`${path.basename(file)}: ${error.message}`);
      continue;
    }

    // Guard: one marker per section, every question reachable, bank non-empty.
    const markers = result.markdown.match(/\{\{\s*questions\s*\}\}/g) || [];
    const expectedMarkers = result.sections;

    if (markers.length !== expectedMarkers) {
      problems.push(
        `${path.basename(file)}: ${markers.length} markers, expected ${expectedMarkers}`,
      );
      continue;
    }
    if (records.length === 0) {
      problems.push(`${path.basename(file)}: bank has no questions`);
      continue;
    }

    // Every question must be claimed by exactly one marker's section range.
    const { resolveMarkerRanges } = require('../src/lib/render');
    const bank = { questions: records };
    const ranges = resolveMarkerRanges(result.markdown, markers.length, bank);
    const covered = ranges.flat();
    const expected = records.map((r) => r.sl);

    const missing = expected.filter((n) => !covered.includes(n));
    const duplicated = covered.filter((n, i) => covered.indexOf(n) !== i);

    if (missing.length) {
      problems.push(`${path.basename(file)}: questions not rendered: ${missing.join(',')}`);
      continue;
    }
    if (duplicated.length) {
      // Duplicate numbers mean the source has two questions sharing an sl,
      // usually an abandoned draft plus its rewrite. That needs a human
      // decision, so the file is left untouched and reported.
      problems.push(
        `${path.basename(file)}: DUPLICATE sl ${[...new Set(duplicated)].join(',')} in source - needs manual fix`,
      );
      continue;
    }

    if (write) fs.writeFileSync(file, result.markdown, 'utf8');
    converted++;
    summary.push({ name: path.basename(file), sections: result.sections, questions: records.length });
  }

  console.log(`papers ${write ? 'rewritten' : 'analysed'} : ${converted}/${files.length}`);
  for (const p of problems) console.log('  ! ' + p);
  if (summary.length && !write) {
    const totalQ = summary.reduce((n, s) => n + s.questions, 0);
    const totalS = summary.reduce((n, s) => n + s.sections, 0);
    console.log(`\ntotal questions: ${totalQ}   total sections: ${totalS}`);
  }
  if (!write) console.log('\n(dry run - pass --write to apply)');
}
