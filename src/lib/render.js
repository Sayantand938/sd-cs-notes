'use strict';

/** Markdown -> HTML rendering, including mermaid, MCQ options and tables. */

const { marked } = require('marked');

const { escapeHtml } = require('./text');
const { wrapTables } = require('./html');
const { renderQuestionBank } = require('./questions');
const { parseQuestions } = require('./question-markdown');

/**
 * Matches the start of a multiple-choice option line:
 *   "A) text"   "a) text"   "B. text"   "(C) text"   "D: text"
 *
 * Deliberately anchored and narrow so ordinary prose that happens to contain
 * a letter and a bracket is not mistaken for an option.
 */
const OPTION_LINE = /^\s*[(\[]?([A-Da-d])[)\].:]\s+\S/;

/**
 * True when a line looks like an MCQ option.
 * @param {string} line
 */
function isOptionLine(line) {
  return OPTION_LINE.test(line);
}

/**
 * Split a block of consecutive option lines into individual lines.
 *
 * Markdown joins consecutive non-blank lines into a single paragraph, so a
 * list of options written as
 *
 *     A) Central Processing Unit
 *     B) Computer Personal Unit
 *
 * renders as one run-together sentence. Returning the options as separate
 * entries lets the renderer emit them as distinct lines, which is how they
 * read in the source.
 *
 * A trailing "answer" line (e.g. "Answer: B") is kept as its own entry too.
 *
 * @param {string} text Paragraph text, possibly containing newlines.
 * @returns {string[]|null} One entry per option, or null when the paragraph
 *   is not an option block (fewer than two options).
 */
function splitOptionBlock(text) {
  const lines = text.split('\n').map((line) => line.trim());
  const options = lines.filter(isOptionLine);

  // One stray "A)" in prose is not an option block.
  if (options.length < 2) return null;

  // Require that most meaningful lines are options, so a paragraph that merely
  // mentions an option is left alone.
  const meaningful = lines.filter((line) => line !== '');
  if (options.length < meaningful.length * 0.6) return null;

  return lines.filter((line) => line !== '');
}

/**
 * Rewrite option paragraphs into HTML lists, leaving every other token alone.
 *
 * Operates on lexer tokens rather than the rendered HTML so that code blocks,
 * tables and inline markup are never touched.
 *
 * @param {object[]} tokens Marked lexer tokens.
 * @returns {object[]} Tokens with option paragraphs replaced.
 */
function transformOptionParagraphs(tokens) {
  return tokens.map((token) => {
    if (token.type !== 'paragraph' || typeof token.text !== 'string') return token;

    const options = splitOptionBlock(token.text);
    if (!options) return token;

    return {
      type: 'html',
      raw: token.raw,
      // block: true keeps marked from wrapping this in a paragraph.
      block: true,
      text:
        '<div class="question-options">' +
        options
          .map((option) => `<span class="option">${escapeHtml(option)}</span>`)
          .join('') +
        '</div>',
    };
  });
}

/**
 * Renderer that emits `mermaid` code fences as mermaid containers and
 * everything else as a plain `<pre><code>` block.
 *
 * Marked calls renderers with a single token object in v5+; older versions
 * passed positional arguments. Both are handled so a dependency bump cannot
 * silently break code blocks.
 */
function createRenderer() {
  const renderer = new marked.Renderer();

  renderer.code = function code(token, legacyLang) {
    const isToken = typeof token === 'object' && token !== null;
    const source = isToken ? token.text || '' : token || '';
    const lang = isToken ? token.lang || '' : legacyLang || '';

    if (lang === 'mermaid') {
      return `<pre class="mermaid">${escapeHtml(source)}</pre>`;
    }

    const langClass = lang ? ` class="language-${lang}"` : '';
    return `<pre><code${langClass}>${escapeHtml(source)}</code></pre>`;
  };

  return renderer;
}

/**
 * Render note Markdown to the HTML fragment that goes inside `<main>`.
 *
 * Question blocks are written directly in the note using the format parsed by
 * lib/question-markdown, so a paper is a single Markdown file holding both its
 * prose and its questions (MCQ and SAQ together). They are rendered with the
 * question styling rather than as ordinary headings and lists.
 *
 * @param {string} markdown
 * @returns {string}
 */
function renderMarkdown(markdown) {
  // Single source of truth: lib/question-markdown parses every question block.
  // Parsing is done once here, then each block is rendered in place so that
  // section headings, prose, code fences and tables flow normally around it.
  const { questions } = parseQuestions(markdown);

  if (questions.length === 0) {
    return wrapTables(renderProse(markdown));
  }

  const lines = markdown.split('\n');
  const parts = [];
  let buffer = [];

  const flushProse = () => {
    const text = buffer.join('\n');
    buffer = [];
    if (text.trim() !== '') parts.push(renderProse(text));
  };

  // Locate each block's line span, then pair the spans with the questions the
  // parser produced (same order), so parsing lives in exactly one place.
  const spans = locateQuestionSpans(lines);

  let cursor = 0;
  spans.forEach((span, index) => {
    const question = questions[index];
    if (!question) return; // defensive: span without a parsed question

    buffer.push(...lines.slice(cursor, span.start));
    flushProse();
    parts.push(renderQuestionBank({ questions: [question] }, { bare: true }));
    cursor = span.end;
  });

  buffer.push(...lines.slice(cursor));
  flushProse();

  return wrapTables(parts.join('\n'));
}

/**
 * Render a run of non-question Markdown.
 *
 * @param {string} markdown
 * @returns {string}
 */
function renderProse(markdown) {
  const tokens = marked.lexer(markdown);
  return marked.parser(transformOptionParagraphs(tokens), {
    renderer: createRenderer(),
  });
}

/**
 * Find the line span of every question block in a document.
 *
 * Only boundaries are computed here; the content of each block is parsed by
 * lib/question-markdown, so there is a single parser and the two cannot drift.
 * The spans come back in document order, matching the parser's output order.
 *
 * @param {string[]} lines
 * @returns {Array<{start: number, end: number}>}
 */
function locateQuestionSpans(lines) {
  const spans = [];
  let start = -1;

  const close = (end) => {
    if (start !== -1) spans.push({ start, end });
    start = -1;
  };

  lines.forEach((line, index) => {
    const heading = line.match(/^#{2,6}\s*(?:Q)?(\d+)\s*(?:[.):])?\s*(.*)$/);
    const isQuestionHeading = heading && !/^#{1,6}\s*Answer/i.test(line);

    if (isQuestionHeading) {
      close(index);
      start = index;
      return;
    }

    if (/^#{1,6}\s/.test(line)) close(index);
  });

  close(lines.length);
  return spans;
}

module.exports = {
  createRenderer,
  wrapTables,
  renderMarkdown,
  renderProse,
  splitOptionBlock,
  isOptionLine,
  transformOptionParagraphs,
  locateQuestionSpans,
};
