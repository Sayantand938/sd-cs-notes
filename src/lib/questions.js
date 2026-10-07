'use strict';

/**
 * Render a question bank (JSON) into HTML.
 *
 * Questions come from a `.json` file beside the Markdown note, because code
 * fences inside questions cannot be nested inside a Markdown fence. The note
 * carries a `{{questions}}` marker where the bank should appear.
 *
 * Answers are always visible and clearly marked, per the site's design.
 */

const { marked } = require('marked');
const { escapeHtml } = require('./text');

/** Option letters, so answer numbers map to the labels students see. */
const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

/**
 * Render question-bank Markdown fragments (code, inline code, emphasis).
 *
 * Question text and options frequently contain inline code spans, so they are
 * passed through the Markdown renderer rather than escaped wholesale.
 *
 * @param {string} text
 * @returns {string}
 */
function renderInline(text) {
  if (!text) return '';
  // A single line, so parse it as a paragraph and strip the wrapping tag.
  const html = marked.parseInline(String(text));
  return html;
}

/**
 * Render the optional preamble a question carries — usually a code block that
 * the question refers to.
 *
 * @param {string} text
 * @returns {string}
 */
function renderPreamble(text) {
  if (!text) return '';
  const html = marked.parse(text, { async: false });
  return `<div class="question-prefix">${html}</div>`;
}

/**
 * Render one MCQ question.
 *
 * @param {object} q Question record.
 * @returns {string}
 */
function renderQuestion(q) {
  const options = Array.isArray(q.options) ? q.options : [];
  const answerNumber = Number.isInteger(q.answer) ? q.answer : null;

  const items = options
    .map((text, index) => {
      const number = index + 1;
      const letter = LETTERS[index] || String(number);
      const correct = number === answerNumber;

      return (
        `<li class="option${correct ? ' option-correct' : ''}">` +
        `<span class="option-letter" aria-hidden="true">${letter}</span>` +
        `<span class="option-text">${renderInline(text)}</span>` +
        (correct
          ? '<span class="option-flag" title="Correct answer">✓</span>'
          : '') +
        '</li>'
      );
    })
    .join('');

  const answerLabel =
    answerNumber !== null && LETTERS[answerNumber - 1]
      ? `Answer: ${LETTERS[answerNumber - 1]}`
      : 'Answer: not recorded';

  return (
    '<li class="question" id="q' + escapeHtml(String(q.sl)) + '">' +
    '<p class="question-text">' +
    `<span class="question-number">${escapeHtml(String(q.sl))}.</span> ` +
    renderInline(q.question) +
    '</p>' +
    renderPreamble(q.prefix) +
    `<ul class="question-options">${items}</ul>` +
    `<p class="question-answer${answerNumber === null ? ' question-answer-missing' : ''}">${answerLabel}</p>` +
    '</li>'
  );
}

/**
 * Render a whole question bank.
 *
 * @param {object} bank Parsed JSON: {paper, questions}.
 * @param {object} [options]
 * @param {number[]} [options.only] Restrict to these question numbers, so a
 *   paper can place each section's questions under its own heading.
 * @returns {string}
 */
function renderQuestionBank(bank, options = {}) {
  const all = Array.isArray(bank && bank.questions) ? bank.questions : [];
  const { only } = options;

  const questions = only
    ? all.filter((q) => only.includes(Number(q.sl)))
    : all;

  if (questions.length === 0) return '';

  const rendered = questions.map(renderQuestion).join('');

  return (
    `<div class="question-bank" data-count="${questions.length}">` +
    `<ol class="question-list">${rendered}</ol>` +
    '</div>'
  );
}

module.exports = { renderQuestionBank, renderQuestion, renderInline, LETTERS };
