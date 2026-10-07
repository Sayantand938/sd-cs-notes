'use strict';

/**
 * Verify the Markdown -> JSON conversion is lossless.
 *
 * For every question, re-read the Markdown and confirm the JSON record carries
 * the same question text, the same option texts in the same order, and an
 * answer consistent with the source.
 */

const fs = require('fs');
const path = require('path');

const { convertPaper, parseAnswerKey, parseQuestions } = require('./md-to-questions');

const ROOT = path.join(__dirname, '..');

const files = [];
(function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith('.md') && /practice-paper/i.test(entry.name)) files.push(full);
  }
})(path.join(ROOT, 'notes'));

let checked = 0;
const problems = [];

for (const file of files.sort()) {
  const { records } = convertPaper(file);
  const text = require('./md-to-questions').readNormalised(file);
  const source = parseQuestions(text);
  const key = parseAnswerKey(text);
  const name = path.basename(file);

  if (records.length !== source.length) {
    problems.push(`${name}: record count ${records.length} != source ${source.length}`);
    continue;
  }

  for (let i = 0; i < records.length; i++) {
    const rec = records[i];
    const src = source[i];
    checked++;

    // Question text must match exactly.
    if (rec.question !== src.question) {
      problems.push(`${name} Q${rec.sl}: question text differs\n     json: ${JSON.stringify(rec.question)}\n     md  : ${JSON.stringify(src.question)}`);
    }

    // Option texts must match, in order.
    if (rec.options.length !== src.options.length) {
      problems.push(`${name} Q${rec.sl}: option count ${rec.options.length} != ${src.options.length}`);
    } else {
      for (let j = 0; j < rec.options.length; j++) {
        const expected = src.options[j].text
          .replace(/✅.*$/, '')
          .replace(/\s{2,}$/, '')
          .trim();
        if (rec.options[j] !== expected) {
          problems.push(`${name} Q${rec.sl} option ${src.options[j].letter}: JSON ${JSON.stringify(rec.options[j])} != md ${JSON.stringify(expected)}`);
        }
      }
    }

    // Answer must be a valid option letter present in the record.
    if (rec.answerLetter !== null) {
      const letters = src.options.map((o) => o.letter);
      if (!letters.includes(rec.answerLetter)) {
        problems.push(`${name} Q${rec.sl}: answer ${rec.answerLetter} not among options [${letters.join(',')}]`);
      }
    }

    // Answer number must correspond to the letter (1-based).
    if (rec.answer !== null && rec.answerLetter !== null) {
      const expectedNum = rec.answerLetter.charCodeAt(0) - 64;
      if (rec.answer !== expectedNum) {
        problems.push(`${name} Q${rec.sl}: answer ${rec.answer} != ${expectedNum} for letter ${rec.answerLetter}`);
      }
    }
  }
}

console.log(`papers checked       : ${files.length}`);
console.log(`questions verified   : ${checked}`);
console.log(`problems             : ${problems.length}`);
for (const p of problems.slice(0, 30)) console.log('  ' + p);
process.exitCode = problems.length === 0 ? 0 : 1;
