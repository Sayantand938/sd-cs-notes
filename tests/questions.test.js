'use strict';

/** Tests for question-bank rendering. */

const test = require('node:test');
const assert = require('node:assert/strict');

const { renderQuestionBank, renderQuestion } = require('../src/lib/questions');
const { resolveMarkerRanges, renderMarkdown } = require('../src/lib/render');

const BANK = {
  paper: 'sample',
  questions: [
    {
      sl: 1,
      type: 'mcq',
      question: 'What does CPU stand for?',
      options: ['Central Processing Unit', 'Computer Personal Unit', 'Central Program Unit', 'Central Processing Utility'],
      answer: 1,
      answerLetter: 'A',
    },
    {
      sl: 2,
      type: 'mcq',
      question: 'Which is volatile?',
      options: ['ROM', 'RAM', 'Disk', 'DVD'],
      answer: 2,
      answerLetter: 'B',
    },
    {
      sl: 3,
      type: 'mcq',
      question: 'Output of the code?',
      prefix: '```c\nint x = 5;\n```',
      options: ['1', '2', '3', '4'],
      answer: 3,
      answerLetter: 'C',
    },
  ],
};

test('renders every question with an option list', () => {
  const html = renderQuestionBank(BANK);
  assert.equal((html.match(/<li class="question"/g) || []).length, 3);
  // Count option elements, allowing for the extra "option-correct" class.
  assert.equal((html.match(/<li class="option(?: |")/g) || []).length, 12);
});

test('marks exactly one option correct per question', () => {
  const html = renderQuestionBank(BANK);
  assert.equal((html.match(/option-correct/g) || []).length, 3);
});

test('prints the answer letter for each question', () => {
  const html = renderQuestionBank(BANK);
  assert.match(html, /Answer: A/);
  assert.match(html, /Answer: B/);
  assert.match(html, /Answer: C/);
});

test('the correct option is the one matching the answer number', () => {
  const html = renderQuestion({ sl: 1, question: 'q', options: ['one', 'two'], answer: 2 });
  // Second option (B) must carry the correct class, first must not.
  const first = html.indexOf('one');
  const second = html.indexOf('two');
  assert.ok(html.indexOf('option-correct') > first, 'first option must not be correct');
  assert.ok(html.indexOf('option-correct') < second + 200);
  assert.match(html, /Answer: B/);
});

test('renders a code preamble above the options', () => {
  const html = renderQuestionBank(BANK);
  assert.match(html, /class="question-prefix"/);
  assert.match(html, /language-c/);
});

test('inline code in question text is preserved', () => {
  const html = renderQuestion({
    sl: 1, question: 'What does `printf` do?', options: ['a', 'b'], answer: 1,
  });
  assert.match(html, /<code>printf<\/code>/);
});

test('inline code in option text is preserved', () => {
  const html = renderQuestion({
    sl: 1, question: 'q', options: ['`_var`', '`2var`'], answer: 1,
  });
  assert.match(html, /<code>_var<\/code>/);
});

test('a missing answer is flagged rather than rendered as correct', () => {
  const html = renderQuestion({
    sl: 9, question: 'q', options: ['a', 'b'], answer: null, answerLetter: null,
  });
  assert.doesNotMatch(html, /option-correct/);
  assert.match(html, /not recorded/);
  assert.match(html, /question-answer-missing/);
});

test('option letters follow position', () => {
  const html = renderQuestion({ sl: 1, question: 'q', options: ['a', 'b', 'c', 'd'], answer: 1 });
  for (const letter of ['A', 'B', 'C', 'D']) {
    assert.match(html, new RegExp(`>${letter}</span>`));
  }
});

test('only renders the requested question numbers', () => {
  const html = renderQuestionBank(BANK, { only: [2] });
  assert.equal((html.match(/<li class="question"/g) || []).length, 1);
  assert.match(html, /Which is volatile/);
  assert.doesNotMatch(html, /CPU stand/);
});

test('an empty or missing bank renders nothing', () => {
  assert.equal(renderQuestionBank({ questions: [] }), '');
  assert.equal(renderQuestionBank(null), '');
  assert.equal(renderQuestionBank(undefined), '');
});

// --- marker range resolution ---------------------------------------------

const PAPER_MD = [
  '## Section 1: Basics (Questions 1 to 2)',
  '',
  '{{questions}}',
  '',
  '## Section 2: More (Questions 3 to 3)',
  '',
  '{{questions}}',
].join('\n');

test('resolves one range per marker from the section headings', () => {
  const ranges = resolveMarkerRanges(PAPER_MD, 2, BANK);
  assert.deepEqual(ranges[0], [1, 2]);
  assert.deepEqual(ranges[1], [3]);
});

test('renderMarkdown substitutes each marker with its own section', () => {
  const html = renderMarkdown(PAPER_MD, { questionBank: BANK });

  assert.equal((html.match(/<li class="question"/g) || []).length, 3);
  assert.match(html, /Section 1: Basics/);
  assert.match(html, /Section 2: More/);
  assert.doesNotMatch(html, /\{\{questions\}\}/);
});

test('a marker with no range renders the unclaimed questions', () => {
  const md = '{{questions}}';
  const ranges = resolveMarkerRanges(md, 1, BANK);
  assert.deepEqual(ranges[0], [1, 2, 3]);
});

test('questions are not duplicated across markers', () => {
  const ranges = resolveMarkerRanges(PAPER_MD, 2, BANK);
  const flat = ranges.flat();
  assert.equal(new Set(flat).size, flat.length);
});

test('without a bank the marker is left untouched', () => {
  const html = renderMarkdown('{{questions}}', {});
  assert.match(html, /\{\{questions\}\}/);
});

// --- short-answer questions ----------------------------------------------

const SAQ_BANK = {
  paper: 'sample-saq',
  questions: [
    {
      sl: 1,
      type: 'saq',
      question: 'Distinguish analogue from digital communication.',
      answer: '**Analogue** is a continuous wave.\n\n**Digital** is discrete 0s and 1s.',
    },
    {
      sl: 2,
      type: 'saq',
      question: 'Why is serial preferred over long distances?',
      answer: 'Because parallel suffers **skew**:\n\n```text\nbits arrive out of step\n```',
    },
  ],
};

test('an saq renders its question and a labelled answer', () => {
  const html = renderQuestionBank(SAQ_BANK);
  assert.equal((html.match(/question-saq/g) || []).length, 2);
  assert.equal((html.match(/class="answer-label">Answer</g) || []).length, 2);
});

test('an saq renders no option list or answer letter', () => {
  const html = renderQuestionBank(SAQ_BANK);
  assert.doesNotMatch(html, /question-options/);
  assert.doesNotMatch(html, /Answer: [A-D]/);
});

test('markdown inside an saq answer is rendered', () => {
  const html = renderQuestionBank(SAQ_BANK);
  assert.match(html, /<strong>Analogue<\/strong>/);
});

test('a code block inside an saq answer is rendered', () => {
  const html = renderQuestionBank(SAQ_BANK);
  assert.match(html, /<pre><code/);
  assert.match(html, /bits arrive out of step/);
});

test('a table inside an saq answer is rendered and scroll-wrapped', () => {
  const bank = {
    questions: [{
      sl: 1,
      type: 'saq',
      question: 'Compare the modes.',
      answer: '| Mode | Direction |\n| --- | --- |\n| Simplex | One way |',
    }],
  };
  const html = renderQuestionBank(bank);
  assert.match(html, /<table/);
  assert.match(html, /table-wrapper/);
});

test('an saq with no recorded answer is flagged', () => {
  const html = renderQuestion({
    sl: 3, type: 'saq', question: 'Unanswered?', answer: '',
  });
  assert.match(html, /question-answer-missing/);
  assert.match(html, /Not recorded/);
});

test('mcq and saq can coexist in one bank', () => {
  const bank = {
    questions: [
      { sl: 1, type: 'mcq', question: 'Pick one', options: ['a', 'b'], answer: 1 },
      { sl: 2, type: 'saq', question: 'Explain', answer: 'Because.' },
    ],
  };
  const html = renderQuestionBank(bank);
  assert.match(html, /question-options/);
  assert.match(html, /question-saq/);
  assert.match(html, /Answer: A/);
});

test('a question with no type is treated as mcq', () => {
  const html = renderQuestion({
    sl: 1, question: 'q', options: ['a', 'b'], answer: 2,
  });
  assert.match(html, /question-options/);
  assert.doesNotMatch(html, /question-saq/);
});
