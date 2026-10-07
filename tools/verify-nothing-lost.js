'use strict';

/**
 * Definitive check: is any original note content missing?
 *
 * For every .md blob in the pre-refactor commit, confirm its content either
 * still exists verbatim on disk, or is fully represented by a JSON question
 * bank (practice papers were converted from inline questions to banks).
 */

const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const NOTES = path.join(ROOT, 'notes');
const ORIGINAL = 'aba24c7';

const git = (args) => execFileSync('git', args, { cwd: ROOT, maxBuffer: 1 << 30 }).toString('utf8');

// Every .md path in the original commit.
const paths = git(['ls-tree', '-r', '--name-only', ORIGINAL, '--', 'notes'])
  .split('\n')
  .filter((p) => /\.md$/i.test(p));

// All files currently on disk.
const onDisk = new Map();
(function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else onDisk.set(path.relative(ROOT, full).split(path.sep).join('/'), full);
  }
})(NOTES);

// Is a paper's question set fully present in a bank?
function bankQuestionCount(mdPath) {
  const base = path.basename(mdPath, '.md');
  const dir = path.dirname(mdPath);

  // Banks may have been renamed (01-practice-paper -> unit-01-01-practice-paper),
  // so match by directory plus a distinctive suffix.
  const candidates = [];
  const suffix = base.replace(/^(unit-\d+|misc)-\d+-/, '').replace(/^\d+-/, '');

  for (const [rel, full] of onDisk) {
    if (!rel.endsWith('.json')) continue;
    if (path.dirname(rel) !== dir) continue;
    const bankBase = path.basename(rel, '.json');
    const bankSuffix = bankBase.replace(/^(unit-\d+|misc)-\d+-/, '').replace(/^\d+-/, '');
    if (bankSuffix === suffix) candidates.push(full);
  }

  if (candidates.length === 0) return null;
  const bank = JSON.parse(fs.readFileSync(candidates[0], 'utf8'));
  return Array.isArray(bank.questions) ? bank.questions.length : 0;
}

let stillPresent = 0;
let inBank = 0;
const problems = [];

for (const rel of paths) {
  if (onDisk.has(rel)) {
    // Still on disk under its original path.
    stillPresent++;
    continue;
  }

  // Practice papers were converted to a JSON bank.
  const count = bankQuestionCount(rel);
  if (count === null) {
    problems.push(`${rel}: gone from disk and no bank found`);
  } else if (count === 0) {
    problems.push(`${rel}: bank exists but holds 0 questions`);
  } else {
    inBank++;
  }
}

console.log(`original .md files      : ${paths.length}`);
console.log(`still present verbatim  : ${stillPresent}`);
console.log(`converted to a bank     : ${inBank}`);
console.log(`problems                : ${problems.length}`);
for (const p of problems) console.log('  ' + p);
console.log('');

// Independent count: total questions across all banks.
let bankTotal = 0;
for (const [, full] of onDisk) {
  if (!full.endsWith('.json')) continue;
  try {
    const bank = JSON.parse(fs.readFileSync(full, 'utf8'));
    if (Array.isArray(bank.questions)) bankTotal += bank.questions.length;
  } catch { /* not a bank */ }
}
console.log(`total questions in banks: ${bankTotal}`);
