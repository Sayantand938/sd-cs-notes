'use strict';

/** Markdown -> HTML rendering, including mermaid and table handling. */

const { marked } = require('marked');

const { escapeHtml } = require('./text');

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
  const html = marked.parse(markdown, { renderer: createRenderer() });
  return wrapTables(html);
}

module.exports = { createRenderer, wrapTables, renderMarkdown };
