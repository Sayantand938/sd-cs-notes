'use strict';

/** Markdown -> HTML rendering, including mermaid, MCQ options and tables. */

const { marked } = require('marked');

const { escapeHtml } = require('./text');
const { renderQuestionBank } = require('./questions');

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
 * Wrap every `<table>` in a scroll container so wide tables scroll on narrow
 * screens instead of overflowing the page.
 */
function wrapTables(html) {
  return html
    .replace(/<table(\s|>)/g, '<div class="table-wrapper"><table$1')
    .replace(/<\/table>/g, '</table></div>');
}

/** Marker a note uses to place its question bank. */
const QUESTIONS_MARKER = /\{\{\s*questions\s*\}\}/g;

/**
 * Work out which question numbers each marker should render.
 *
 * A paper places one marker per section, and the section heading states the
 * range — "Section 3: Concepts of Software (Questions 31 to 55)". Reading that
 * range keeps the JSON bank flat while letting the page group questions under
 * their original headings.
 *
 * A marker with no preceding range (or an unparseable one) renders every
 * question not already claimed by another marker.
 *
 * @param {string} markdown
 * @param {number} markerCount
 * @param {object} bank
 * @returns {Array<number[]|null>} Question numbers per marker, or null for "all".
 */
function resolveMarkerRanges(markdown, markerCount, bank) {
  const allNumbers = (bank.questions || []).map((q) => Number(q.sl));

  // Find each marker's position and the heading range that precedes it.
  const ranges = [];
  const markerRe = /\{\{\s*questions\s*\}\}/g;
  let match;

  while ((match = markerRe.exec(markdown)) !== null) {
    const before = markdown.slice(0, match.index);

    // The nearest "Questions X to Y" (or "Question X") before this marker.
    const found = [...before.matchAll(/Questions?\s+(\d+)\s*(?:to|-|–)\s*(\d+)/gi)].pop();
    const single = [...before.matchAll(/Questions?\s+(\d+)\s*[^\d\s]/gi)].pop();

    if (found) {
      const from = Number(found[1]);
      const to = Number(found[2]);
      ranges.push(allNumbers.filter((n) => n >= from && n <= to));
    } else if (single) {
      const n = Number(single[1]);
      ranges.push([n]);
    } else {
      ranges.push(null);
    }
  }

  // Fill any "all" slots with whatever no other marker claimed.
  const claimed = new Set(ranges.filter(Boolean).flat());
  return ranges.map((range) =>
    range === null ? allNumbers.filter((n) => !claimed.has(n)) : range,
  );
}

/**
 * Render note Markdown to the HTML fragment that goes inside `<main>`.
 *
 * A `{{questions}}` marker is replaced with the rendered question bank, if one
 * was supplied. The bank arrives separately because questions can contain code
 * fences, which cannot be nested inside a Markdown fence.
 *
 * @param {string} markdown
 * @param {object} [options]
 * @param {object} [options.questionBank] Parsed JSON question bank.
 * @returns {string}
 */
function renderMarkdown(markdown, options = {}) {
  const { questionBank } = options;

  const tokens = marked.lexer(markdown);
  const html = marked.parser(transformOptionParagraphs(tokens), {
    renderer: createRenderer(),
  });
  const withTables = wrapTables(html);

  if (!questionBank) return withTables;

  const count = (markdown.match(QUESTIONS_MARKER) || []).length;
  if (count === 0) return withTables;

  const ranges = resolveMarkerRanges(markdown, count, questionBank);
  let index = 0;

  return withTables.replace(QUESTIONS_MARKER, () => {
    const only = ranges[index++] ?? null;
    return renderQuestionBank(questionBank, only ? { only } : {});
  });
}

module.exports = {
  createRenderer,
  wrapTables,
  renderMarkdown,
  splitOptionBlock,
  isOptionLine,
  transformOptionParagraphs,
  resolveMarkerRanges,
  QUESTIONS_MARKER,
};
