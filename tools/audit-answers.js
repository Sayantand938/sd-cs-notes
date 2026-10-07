'use strict';

// Cross-check the answer-key table against the ✅ marks in every practice paper.
// Determines which source is authoritative before building the converter.

const fs = require('fs');
const path = require('path');

const PAPERS = path.join(__dirname, '..', 'notes', 'class-11', 'computer-science',
  'semester-01', 'practice-papers');

function walk(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, acc);
    else if (e.name.endsWith('.md')) acc.push(full);
  }
  return acc;
}

/** Read a file with line endings normalised to \n. */
function readNormalised(file) {
  return fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
}

/** Parse the trailing answer key: rows of | n | X | n | X | n | X | n | X | */
function parseAnswerKey(text) {
  const key = new Map();
  const rows = text.match(/^\|\s*\d+\s*\|.*$/gm) || [];

  for (const row of rows) {
    const cells = row.split('|').map((c) => c.trim());
    // cells[0] is empty (leading pipe); then alternating number, answer.
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

/** Collect questions with their ticked option letter. */
function parseQuestions(text) {
  const questions = [];
  let current = null;

  for (const line of text.split('\n')) {
    const q = line.match(/^#{2,6}\s*Q(\d+)\.\s*(.*)$/);
    if (q) {
      current = { num: Number(q[1]), ticks: [] };
      questions.push(current);
      continue;
    }
    if (!current) continue;

    const opt = line.match(/^\s*[(\[]?([A-Da-d])[)\].:]\s+(.*)$/);
    if (opt) {
      const letter = opt[1].toUpperCase();
      current.ticks.push({ letter, text: opt[2] });
    }
  }
  return questions;
}

let totalQ = 0;
let keyMissing = 0;
let agree = 0;
const disagree = [];
const noKey = [];
const noTick = [];

for (const file of walk(PAPERS).sort()) {
  const text = readNormalised(file);
  const key = parseAnswerKey(text);
  const questions = parseQuestions(text);
  const name = path.basename(file);

  if (key.size === 0) noKey.push(name);

  for (const q of questions) {
    totalQ++;
    const ticked = q.ticks.filter((t) => t.text.includes('✅')).map((t) => t.letter);
    const fromKey = key.get(q.num);

    if (ticked.length === 0) noTick.push(`${name} Q${q.num}`);
    if (fromKey === undefined) { keyMissing++; continue; }

    if (ticked.length === 1 && ticked[0] === fromKey) agree++;
    else disagree.push(
      `${name} Q${q.num}: key=${fromKey} ticks=[${ticked.join(',') || 'none'}]`,
    );
  }
}

console.log(`questions total      : ${totalQ}`);
console.log(`key and tick agree   : ${agree}`);
console.log(`disagreements        : ${disagree.length}`);
console.log(`questions missing key: ${keyMissing}`);
console.log(`questions w/o tick   : ${noTick.length}`);
console.log(`files without a key  : ${noKey.length} ${noKey.join(', ')}`);
console.log('\n--- first 25 disagreements ---');
disagree.slice(0, 25).forEach((d) => console.log('  ' + d));
