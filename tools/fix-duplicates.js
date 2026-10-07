'use strict';

/**
 * Resolve duplicate question numbers left by abandoned drafts.
 *
 * Two papers contain a draft question followed immediately by its rewritten
 * version, sharing the same number:
 *
 *   unit-01-03  Q31  "NOT a system software"  -> rewritten as "application software"
 *   unit-01-05  Q47  "get help for a command" -> rewritten as "shows the manual"
 *
 * In both cases the second version is the intended one, confirmed against the
 * paper's answer key (unit-01-03 Q31 = C, unit-01-05 Q47 = A), so the draft and
 * the authoring notes between them are removed.
 *
 * Also repairs unit-01-03's first draft, whose option count is wrong (3 options
 * with inline prose), by removing it wholesale.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

/** Parse the answer key so the kept question can be checked against it. */
function parseKey(text) {
  const key = new Map();
  for (const row of text.match(/^\|\s*\d+\s*\|.*$/gm) || []) {
    const cells = row.split('|').map((c) => c.trim());
    for (let i = 1; i + 1 < cells.length; i += 2) {
      const num = Number(cells[i]);
      if (Number.isInteger(num) && /^[A-Da-d]$/.test(cells[i + 1])) {
        key.set(num, cells[i + 1].toUpperCase());
      }
    }
  }
  return key;
}

/**
 * Remove a duplicate question block.
 *
 * Deletes from the first occurrence of the heading up to (but not including)
 * the second occurrence, which drops the draft and any authoring notes in
 * between.
 *
 * @param {string} text Normalised Markdown.
 * @param {number} number Question number that appears twice.
 * @returns {{markdown: string, removedLines: number, keptHeading: string}}
 */
function removeDraft(text, number) {
  const lines = text.split('\n');
  const headingRe = new RegExp(`^#{2,6}\\s*Q${number}[.)]\\s*(.*)$`);

  const hits = [];
  lines.forEach((line, i) => {
    if (headingRe.test(line)) hits.push(i);
  });

  if (hits.length !== 2) {
    throw new Error(`expected 2 occurrences of Q${number}, found ${hits.length}`);
  }

  const [first, second] = hits;
  const keptHeading = lines[second];

  // Drop [first, second) — the draft and everything up to the rewrite.
  const out = [...lines.slice(0, first), ...lines.slice(second)];

  return {
    markdown: out.join('\n'),
    removedLines: second - first,
    keptHeading: keptHeading.replace(/^#+\s*/, ''),
  };
}

/** Confirm the surviving question's ticked option matches the answer key. */
function checkAnswer(markdown, number, expected) {
  const lines = markdown.split('\n');
  const start = lines.findIndex((l) => new RegExp(`^#{2,6}\\s*Q${number}[.)]`).test(l));
  if (start === -1) return { ok: false, detail: 'heading not found after fix' };

  for (let i = start + 1; i < lines.length; i++) {
    if (/^#{2,6}\s/.test(lines[i])) break; // next question
    const opt = lines[i].match(/^\s*[(\[]?([A-Da-d])[)\].:]\s+(.*)$/);
    if (opt && opt[2].includes('✅')) {
      const letter = opt[1].toUpperCase();
      return {
        ok: letter === expected,
        detail: `ticked ${letter}, key says ${expected}`,
      };
    }
  }
  return { ok: false, detail: 'no ticked option found' };
}

module.exports = { removeDraft, parseKey, checkAnswer };

// --- CLI -------------------------------------------------------------------

if (require.main === module) {
  const write = process.argv.includes('--write');

  const targets = [
    { file: 'unit-01-03-practice-paper-eng.md', number: 31, expected: 'C' },
    { file: 'unit-01-05-practice-paper-eng.md', number: 47, expected: 'A' },
  ];

  for (const target of targets) {
    const found = [];
    (function walk(dir) {
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) walk(full);
        else if (entry.name === target.file) found.push(full);
      }
    })(path.join(ROOT, 'notes'));

    if (found.length !== 1) {
      console.log(`! ${target.file}: expected 1 file, found ${found.length}`);
      continue;
    }

    const file = found[0];
    const text = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
    const key = parseKey(text);
    const keyAnswer = key.get(target.number);

    if (keyAnswer !== target.expected) {
      console.log(`! ${target.file}: key says ${keyAnswer}, expected ${target.expected} — skipping`);
      continue;
    }

    const result = removeDraft(text, target.number);
    const check = checkAnswer(result.markdown, target.number, target.expected);

    if (!check.ok) {
      console.log(`! ${target.file}: ${check.detail} — skipping`);
      continue;
    }

    // Final guard: the question count must drop by exactly one.
    const before = (text.match(/^#{2,6}\s*Q\d+/gm) || []).length;
    const after = (result.markdown.match(/^#{2,6}\s*Q\d+/gm) || []).length;

    if (after !== before - 1) {
      console.log(`! ${target.file}: count ${before} -> ${after}, expected ${before - 1} — skipping`);
      continue;
    }

    if (write) fs.writeFileSync(file, result.markdown, 'utf8');

    console.log(
      `${write ? 'fixed' : 'would fix'} ${target.file}: ` +
      `removed ${result.removedLines} lines (draft Q${target.number}), ` +
      `kept "${result.keptHeading}", ` +
      `answer ${check.detail}, questions ${before} -> ${after}`,
    );
  }

  if (!write) console.log('\n(dry run - pass --write to apply)');
}
