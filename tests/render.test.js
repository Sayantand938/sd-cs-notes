'use strict';

/** Tests for markdown rendering and output path mapping. */

const test = require('node:test');
const assert = require('node:assert/strict');

const { renderMarkdown, wrapTables } = require('../src/lib/render');
const { outputPathFor, isNotFoundNote } = require('../src/lib/writer');

test('renders a mermaid fence as a mermaid container, not a code block', () => {
  const html = renderMarkdown('```mermaid\ngraph TD;\n  A-->B;\n```');
  assert.match(html, /<pre class="mermaid">/);
  assert.doesNotMatch(html, /language-mermaid/);
});

test('escapes html inside mermaid blocks', () => {
  const html = renderMarkdown('```mermaid\nA[Input] --> B\n```');
  assert.match(html, /--&gt;/);
  assert.doesNotMatch(html, /-->/);
});

test('renders a normal fence as pre/code with a language class', () => {
  const html = renderMarkdown('```js\nconst a = 1;\n```');
  assert.match(html, /<pre><code class="language-js">/);
});

test('renders a fence without a language as plain pre/code', () => {
  const html = renderMarkdown('```\nplain\n```');
  assert.match(html, /<pre><code>plain/);
});

test('escapes html in regular code blocks', () => {
  const html = renderMarkdown('```\n<script>alert(1)</script>\n```');
  assert.doesNotMatch(html, /<script>/);
  assert.match(html, /&lt;script&gt;/);
});

test('wrapTables wraps each table in a scroll container', () => {
  const out = wrapTables('<table><tr><td>a</td></tr></table>');
  assert.equal(out, '<div class="table-wrapper"><table><tr><td>a</td></tr></table></div>');
});

test('wrapTables handles two tables independently', () => {
  const out = wrapTables('<table>1</table><table>2</table>');
  assert.equal((out.match(/table-wrapper/g) || []).length, 2);
});

test('renders markdown tables and lets wrapTables catch them', () => {
  const html = renderMarkdown('| a | b |\n| - | - |\n| 1 | 2 |');
  assert.match(html, /<div class="table-wrapper"><table>/);
});

test('preserves math delimiters for client-side KaTeX', () => {
  const html = renderMarkdown('Inline $A \\cdot B$ math');
  assert.match(html, /\$A \\cdot B\$/);
});

test('outputPathFor mirrors the source layout with .html', () => {
  assert.equal(
    outputPathFor({ relativePath: 'class-11/coma/semester-01/notes/unit-01/a.md' }),
    'class-11/coma/semester-01/notes/unit-01/a.html',
  );
});

test('outputPathFor handles a note at the root', () => {
  assert.equal(outputPathFor({ relativePath: 'a.md' }), 'a.html');
});

test('outputPathFor converts .markdown too', () => {
  assert.equal(outputPathFor({ relativePath: 'x/y.markdown' }), 'x/y.html');
});

test('isNotFoundNote matches case-insensitively on basename only', () => {
  assert.equal(isNotFoundNote({ baseName: '404' }, '404'), true);
  assert.equal(isNotFoundNote({ baseName: '404' }, '404'), true);
  assert.equal(isNotFoundNote({ baseName: 'page-404' }, '404'), false);
});
