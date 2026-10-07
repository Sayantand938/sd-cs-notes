'use strict';

/** Markdown -> HTML rendering, including mermaid, MCQ options and tables. */

const { marked } = require('marked');

const { escapeHtml } = require('./text');

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

/**
 * Render note Markdown to the HTML fragment that goes inside `<main>`.
 *
 * @param {string} markdown
 * @returns {string}
 */
function renderMarkdown(markdown) {
  const tokens = marked.lexer(markdown);
  const html = marked.parser(transformOptionParagraphs(tokens), {
    renderer: createRenderer(),
  });
  return wrapTables(html);
}

module.exports = {
  createRenderer,
  wrapTables,
  renderMarkdown,
  splitOptionBlock,
  isOptionLine,
  transformOptionParagraphs,
};
