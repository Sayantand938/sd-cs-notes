'use strict';

/**
 * Convert practice-paper Markdown into a JSON question bank.
 *
 * Source of truth for the answer is the trailing answer-key table, because the
 * ✅ marks are known to contain self-corrected mistakes (the author marked an
 * option, then wrote a correction beneath it). Where no key exists, the tick
 * marks are used instead.
 *
 * Emits one `.json` per paper alongside it, and reports every question whose
 * answer is missing or conflicting rather than guessing.
 */

const fs = require('fs');
const path = require('path');

/** Read a file with line endings normalised to \n. */
function readNormalised(file) {
  return fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
}

/**
 * Parse the trailing answer-key table.
 *
 * Rows look like: | 1 | A | 26 | B | 51 | A | 76 | C |
 * so each row carries four question/answer pairs.
 *
 * @param {string} text
 * @returns {Map<number, string>} question number -> option letter
 */
function parseAnswerKey(text) {
  const key = new Map();
  const rows = text.match(/^\|\s*\d+\s*\|.*$/gm) || [];

  for (const row of rows) {
    const cells = row.split('|').map((cell) => cell.trim());
    for (let i = 1; i + 1 < cells.length; i += 2) {
      const num = Number(cells[i]);
      const ans = cells[i + 1];
      if (Number.isInteger(num) && /^[A-Da-d]$/.test(ans)) {
        key.set(num, ans.toUpperCase());
      }
    }
  }
  return key;
}

/** Strip a trailing "✅" and any parenthetical authoring note after it. */
function cleanOptionText(text) {
  return text
    .replace(/✅.*$/, '')
    .replace(/\s{2,}$/, '')
    .trim();
}

/**
 * Split a paper into questions.
 *
 * Captures the question text, its options, any prose between the question and
 * its options (usually a code block), and the ticked option letters.
 *
 * @param {string} text
 * @returns {object[]}
 */
function parseQuestions(text) {
  const lines = text.split('\n');
  const questions = [];
  let current = null;

  const startQuestion = (num) => {
    current = {
      sl: num,
      question: '',
      preamble: [],   // lines between the question and its options
      options: [],
      ticks: [],
    };
    questions.push(current);
  };

  for (const line of lines) {
    const heading = line.match(/^#{2,6}\s*(?:Q)?(\d+)[.)]\s*(.*)$/);
    if (heading) {
      startQuestion(Number(heading[1]));
      current.question = heading[2].trim();
      continue;
    }

    if (!current) continue;

    const option = line.match(/^\s*[(\[]?([A-Da-d])[)\].:]\s+(.*)$/);
    if (option) {
      const letter = option[1].toUpperCase();
      const raw = option[2];
      if (raw.includes('✅')) current.ticks.push(letter);
      current.options.push({ letter, text: cleanOptionText(raw) });
      continue;
    }

    // Between the question and its first option: keep code blocks and prose.
    if (current.options.length === 0) {
      current.preamble.push(line);
    }
  }

  for (const q of questions) {
    while (q.preamble.length && q.preamble[0].trim() === '') q.preamble.shift();
    while (q.preamble.length && q.preamble[q.preamble.length - 1].trim() === '') q.preamble.pop();
  }

  return questions;
}

/**
 * Convert one paper.
 *
 * @param {string} file Absolute path to the .md
 * @returns {{records: object[], issues: object[]}}
 */
function convertPaper(file) {
  const text = readNormalised(file);
  const key = parseAnswerKey(text);
  const questions = parseQuestions(text);
  const usesKey = key.size > 0;

  const records = [];
  const issues = [];

  for (const q of questions) {
    const ticked = [...new Set(q.ticks)];
    const fromKey = key.get(q.sl);

    let answer = null;
    let source = null;

    if (usesKey) {
      answer = fromKey ?? null;
      source = 'key';
    } else {
      answer = ticked.length === 1 ? ticked[0] : null;
      source = 'tick';
    }

    // Report anything a human should look at.
    if (answer === null) {
      issues.push({
        sl: q.sl,
        kind: fromKey === undefined && usesKey ? 'missing-key' : 'no-answer',
        detail: ticked.length ? `ticks=[${ticked.join(',')}]` : 'no tick',
      });
    } else if (ticked.length && !ticked.includes(answer)) {
      issues.push({
        sl: q.sl,
        kind: 'conflict',
        detail: `key=${answer} ticks=[${ticked.join(',')}]`,
      });
    } else if (ticked.length > 1) {
      issues.push({
        sl: q.sl,
        kind: 'multiple-ticks',
        detail: `key=${answer} ticks=[${ticked.join(',')}]`,
      });
    }

    if (q.options.length !== 4 && q.options.length > 0) {
      issues.push({
        sl: q.sl,
        kind: 'option-count',
        detail: `${q.options.length} options`,
      });
    }

    records.push({
      sl: q.sl,
      type: 'mcq',
      question: q.question,
      prefix: q.preamble.length ? q.preamble.join('\n') : undefined,
      options: q.options.map((o) => o.text),
      answer: answer === null ? null : answer.charCodeAt(0) - 64,
      answerLetter: answer,
      answerSource: answer === null ? null : source,
    });
  }

  return { records, issues };
}

module.exports = {
  convertPaper,
  parseAnswerKey,
  parseQuestions,
  cleanOptionText,
  readNormalised,
};

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

  let totalRecords = 0;
  let totalIssues = 0;
  const allIssues = [];
  const counts = {};

  for (const file of files.sort()) {
    const { records, issues } = convertPaper(file);
    totalRecords += records.length;
    totalIssues += issues.length;
    counts[path.basename(file)] = { records: records.length, issues: issues.length };
    for (const issue of issues) allIssues.push({ file: path.basename(file), ...issue });

    if (write) {
      const out = file.replace(/\.md$/, '.json');
      fs.writeFileSync(out, JSON.stringify({
        paper: path.basename(file, '.md'),
        questions: records,
      }, null, 2) + '\n', 'utf8');
    }
  }

  console.log(`papers processed : ${files.length}`);
  console.log(`questions        : ${totalRecords}`);
  console.log(`issues           : ${totalIssues}`);
  console.log('\nper paper:');
  for (const [name, c] of Object.entries(counts)) {
    const flag = c.issues > 0 ? `  <-- ${c.issues} issue(s)` : '';
    console.log(`  ${name.padEnd(38)} ${String(c.records).padStart(3)} questions${flag}`);
  }

  const byKind = {};
  for (const issue of allIssues) byKind[issue.kind] = (byKind[issue.kind] || 0) + 1;
  console.log('\nissues by kind:');
  for (const [kind, n] of Object.entries(byKind)) console.log(`  ${kind.padEnd(16)} ${n}`);

  if (write) console.log('\nwrote .json files alongside each paper');
  else console.log('\n(dry run - pass --write to emit .json)');
}
