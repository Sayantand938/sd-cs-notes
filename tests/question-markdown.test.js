'use strict';

/**
 * Tests for question blocks written in Markdown.
 *
 * A paper is one .md file holding prose, sections, MCQ and SAQ together.
 */

const test = require('node:test');
const assert = require('node:assert/strict');

const { parseQuestions, hasQuestions } = require('../src/lib/question-markdown');
const { renderMarkdown } = require('../src/lib/render');
const { renderQuestion } = require('../src/lib/questions');

const MCQ = [
  '### Q1 (mcq)',
  '',
  'What does CPU stand for?',
  '',
  '- A) Central Processing Unit',
  '- B) Computer Personal Unit',
  '- C) Central Program Unit',
  '- D) Central Processing Utility',
  '',
  '**Answer:** A',
].join('\n');

const SAQ = [
  '### Q2 (saq)',
  '',
  'Why is serial preferred over long distances?',
  '',
  '**Answer:**',
  'Because parallel suffers **skew**.',
].join('\n');

// --- parsing --------------------------------------------------------------

test('parses an mcq question with its options and answer', () => {
  const { questions, errors } = parseQuestions(MCQ);

  assert.equal(errors.length, 0);
  assert.equal(questions.length, 1);
  assert.equal(questions[0].sl, 1);
  assert.equal(questions[0].type, 'mcq');
  assert.equal(questions[0].question, 'What does CPU stand for?');
  assert.deepEqual(questions[0].options, [
    'Central Processing Unit',
    'Computer Personal Unit',
    'Central Program Unit',
    'Central Processing Utility',
  ]);
  assert.equal(questions[0].answerLetter, 'A');
});

test('parses a saq question with a descriptive answer', () => {
  const { questions, errors } = parseQuestions(SAQ);

  assert.equal(errors.length, 0);
  assert.equal(questions[0].type, 'saq');
  // An saq has no option list at all, rather than an empty one.
  assert.equal(questions[0].options, undefined);
  assert.match(questions[0].answerText, /skew/);
});

test('mcq and saq coexist in one document', () => {
  const { questions, errors } = parseQuestions(`${MCQ}\n${SAQ}\n`);

  assert.equal(errors.length, 0);
  assert.equal(questions.length, 2);
  assert.equal(questions[0].type, 'mcq');
  assert.equal(questions[1].type, 'saq');
});

test('captures a code block between the question and its options', () => {
  const md = [
    '### Q3 (mcq)',
    '',
    'What is the output?',
    '',
    '```c',
    'int x = 5;',
    '```',
    '',
    '- A) 1',
    '- B) 5',
    '',
    '**Answer:** B',
  ].join('\n');

  const { questions, errors } = parseQuestions(md);
  assert.equal(errors.length, 0);
  assert.match(questions[0].prefix, /int x = 5;/);
  assert.deepEqual(questions[0].options, ['1', '5']);
});

test('a heading without a type marker defaults to mcq', () => {
  const md = '### Q7\nText\n\n- A) one\n- B) two\n\n**Answer:** A';
  const { questions } = parseQuestions(md);
  assert.equal(questions[0].type, 'mcq');
  assert.equal(questions[0].sl, 7);
});

test('flags a question with no answer', () => {
  const md = '### Q4 (mcq)\nText\n\n- A) one\n- B) two';
  const { errors } = parseQuestions(md);
  assert.ok(errors.some((e) => e.kind === 'missing-answer' && e.sl === 4));
});

test('flags an answer letter outside the option range', () => {
  const md = '### Q5 (mcq)\nText\n\n- A) one\n- B) two\n\n**Answer:** D';
  const { errors } = parseQuestions(md);
  assert.ok(errors.some((e) => e.kind === 'answer-out-of-range'));
});

test('flags a question with fewer than two options', () => {
  const md = '### Q6 (mcq)\nText\n\n- A) only\n\n**Answer:** A';
  const { errors } = parseQuestions(md);
  assert.ok(errors.some((e) => e.kind === 'too-few-options'));
});

test('section headings are not mistaken for questions', () => {
  const md = '## Section 1: Basics (Questions 1 to 20)\n\n' + MCQ;
  const { questions } = parseQuestions(md);
  assert.equal(questions.length, 1);
  assert.equal(questions[0].sl, 1);
});

test('a multi-paragraph saq answer is kept whole', () => {
  const md = [
    '### Q8 (saq)',
    'Explain.',
    '',
    '**Answer:**',
    'First paragraph.',
    '',
    'Second paragraph.',
    '',
    '| a | b |',
    '| - | - |',
    '| 1 | 2 |',
  ].join('\n');

  const { questions } = parseQuestions(md);
  assert.match(questions[0].answerText, /First paragraph/);
  assert.match(questions[0].answerText, /Second paragraph/);
  assert.match(questions[0].answerText, /\| a \| b \|/);
});

test('hasQuestions detects a paper and rejects plain prose', () => {
  assert.equal(hasQuestions(MCQ), true);
  assert.equal(hasQuestions('# Just a note\n\nSome text.'), false);
});

test('an HTML comment after the answer is not absorbed into it', () => {
  const md = [
    '### Q1 (mcq)',
    'What does CPU stand for?',
    '',
    '- A) Central Processing Unit',
    '- B) Other',
    '',
    '**Answer:** A',
    '',
    '<!-- authoring note: verified with the compiler -->',
  ].join('\n');

  const { questions, errors } = parseQuestions(md);
  assert.equal(errors.length, 0);
  assert.equal(questions[0].answerLetter, 'A');
});

test('an HTML comment after an saq answer is dropped', () => {
  const md = [
    '### Q2 (saq)',
    'Explain.',
    '',
    '**Answer:**',
    'Because of skew.',
    '',
    '<!-- a note to self -->',
  ].join('\n');

  const { questions } = parseQuestions(md);
  assert.match(questions[0].answerText, /skew/);
  assert.doesNotMatch(questions[0].answerText, /note to self/);
});

// --- rendering ------------------------------------------------------------

test('renderMarkdown renders question blocks, not plain headings', () => {
  const html = renderMarkdown(`${MCQ}\n`);

  assert.match(html, /<li class="question"/);
  assert.match(html, /class="option option-correct"/);
  assert.match(html, /Answer: A/);
  // The heading must not survive as a literal h3.
  assert.doesNotMatch(html, /<h3>Q1/);
});

test('renderMarkdown renders saq answers in full', () => {
  const html = renderMarkdown(`${SAQ}\n`);
  assert.match(html, /question-saq/);
  assert.match(html, /<strong>skew<\/strong>/);
});

test('renderMarkdown keeps section headings around the questions', () => {
  const html = renderMarkdown(`## Section 1: Basics (Questions 1 to 20)\n\n${MCQ}\n`);
  assert.match(html, /Section 1: Basics/);
  assert.match(html, /<li class="question"/);
});

test('renderMarkdown leaves a note with no questions untouched', () => {
  const html = renderMarkdown('# Title\n\nJust prose with a [link](/x).');
  assert.match(html, /<h1>Title<\/h1>/);
  assert.doesNotMatch(html, /question/);
});

test('a table inside an saq answer is scroll-wrapped', () => {
  const md = '### Q9 (saq)\nCompare.\n\n**Answer:**\n| a | b |\n| - | - |\n| 1 | 2 |';
  const html = renderMarkdown(md);
  assert.match(html, /table-wrapper/);
});

test('code inside an answer is preserved', () => {
  const md = '### Q10 (saq)\nExplain.\n\n**Answer:**\nUse this:\n\n```text\nbit rate = 4 x baud\n```';
  const html = renderMarkdown(md);
  assert.match(html, /<pre><code/);
  assert.match(html, /bit rate = 4 x baud/);
});

test('an unanswered question renders a visible flag', () => {
  const html = renderQuestion({ sl: 1, type: 'mcq', question: 'q', options: ['a', 'b'], answerLetter: null });
  assert.match(html, /question-answer-missing/);
  assert.match(html, /not recorded/);
});
