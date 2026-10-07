'use strict';

/** Tests for markdown rendering and output path mapping. */

const test = require('node:test');
const assert = require('node:assert/strict');

const { renderMarkdown, wrapTables, splitOptionBlock, isOptionLine } = require('../src/lib/render');
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

// --- multiple-choice option handling -------------------------------------

const OPTIONS_MD = [
  '#### Q1. What does CPU stand for?',
  '',
  'A) Central Processing Unit',
  'B) Computer Personal Unit',
  'C) Central Program Unit',
  'D) Central Processing Utility',
].join('\n');

test('isOptionLine recognises the common option forms', () => {
  assert.equal(isOptionLine('A) text'), true);
  assert.equal(isOptionLine('b) text'), true);
  assert.equal(isOptionLine('C. text'), true);
  assert.equal(isOptionLine('(D) text'), true);
  assert.equal(isOptionLine('Answer: B'), false);
  assert.equal(isOptionLine('This is prose'), false);
});

test('legacy bare-option questions still render their options', () => {
  // Papers written before the question-block format used bare "A) text" lines
  // with no **Answer:** field. They must still render, not silently lose their
  // options.
  const html = renderMarkdown(OPTIONS_MD);
  assert.equal((html.match(/class="option"/g) || []).length, 4);
  assert.match(html, /Central Processing Unit/);
});

test('options are not run together into one paragraph', () => {
  const html = renderMarkdown(OPTIONS_MD);
  assert.doesNotMatch(html, /Unit B\) Computer/);
});

test('splitOptionBlock returns one entry per option line', () => {
  const lines = splitOptionBlock('A) one\nB) two\nC) three');
  assert.deepEqual(lines, ['A) one', 'B) two', 'C) three']);
});

test('splitOptionBlock ignores ordinary prose', () => {
  assert.equal(splitOptionBlock('Just a normal sentence about A) things.'), null);
  assert.equal(splitOptionBlock('One line only'), null);
});

test('a single stray option marker does not trigger rewriting', () => {
  const html = renderMarkdown('See option A) for details, then continue reading here.');
  assert.doesNotMatch(html, /question-options/);
});

test('options inside a fenced code block are left alone', () => {
  const md = '```\nA) one\nB) two\nC) three\n```';
  const html = renderMarkdown(md);

  assert.doesNotMatch(html, /question-options/);
  // Content preserved literally inside the code block.
  assert.match(html, /A\) one/);
});

test('options inside a table cell are left alone', () => {
  const md = '| Col |\n| --- |\n| A) one |';
  const html = renderMarkdown(md);

  assert.doesNotMatch(html, /question-options/);
  assert.match(html, /<table/);
});

test('option text is html-escaped', () => {
  const html = renderMarkdown('A) <script>alert(1)</script>\nB) plain');
  assert.doesNotMatch(html, /<script>/);
  assert.match(html, /&lt;script&gt;/);
});

test('a correct-answer tick survives rendering', () => {
  const html = renderMarkdown('A) Central Processing Unit ✅\nB) Other');
  assert.match(html, /✅/);
});

test('option blocks do not leak into following headings', () => {
  const md = 'A) one\nB) two\n\n#### Next heading';
  const html = renderMarkdown(md);
  assert.match(html, /<h4>Next heading<\/h4>/);
  assert.doesNotMatch(html, /Next heading<\/span>/);
});
