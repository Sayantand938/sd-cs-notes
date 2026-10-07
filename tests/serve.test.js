'use strict';

/** Tests for the preview server's path resolution. */

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

const { resolveRequest } = require('../src/serve');

/** Build a small directory tree to resolve against. */
function makeRoot(files) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'sd-serve-'));
  for (const [rel, content] of Object.entries(files)) {
    const dest = path.join(root, rel);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.writeFileSync(dest, content, 'utf-8');
  }
  return root;
}

test('resolves the root to index.html', () => {
  const root = makeRoot({ 'index.html': '<h1>hi</h1>' });
  assert.equal(resolveRequest(root, '/'), path.join(root, 'index.html'));
});

test('resolves a nested page', () => {
  const root = makeRoot({ 'a/b/page.html': 'x' });
  assert.equal(resolveRequest(root, '/a/b/page.html'), path.join(root, 'a/b/page.html'));
});

test('ignores the query string', () => {
  const root = makeRoot({ 'index.html': 'x' });
  assert.equal(resolveRequest(root, '/?q=1'), path.join(root, 'index.html'));
});

test('decodes percent-encoded paths', () => {
  const root = makeRoot({ 'a b.html': 'x' });
  assert.equal(resolveRequest(root, '/a%20b.html'), path.join(root, 'a b.html'));
});

test('a directory resolves to its index.html', () => {
  const root = makeRoot({ 'docs/index.html': 'x' });
  assert.equal(resolveRequest(root, '/docs'), path.join(root, 'docs/index.html'));
});

test('blocks path traversal out of the root', () => {
  const root = makeRoot({ 'index.html': 'x' });
  assert.equal(resolveRequest(root, '/../secret.txt'), null);
  assert.equal(resolveRequest(root, '/a/../../secret.txt'), null);
});

test('blocks encoded traversal', () => {
  const root = makeRoot({ 'index.html': 'x' });
  assert.equal(resolveRequest(root, '/%2e%2e/secret.txt'), null);
});

test('returns null for a missing file', () => {
  const root = makeRoot({ 'index.html': 'x' });
  assert.equal(resolveRequest(root, '/nope.html'), null);
});

test('returns null for malformed percent-encoding', () => {
  const root = makeRoot({ 'index.html': 'x' });
  assert.equal(resolveRequest(root, '/%E0%A4%A'), null);
});

test('returns null for a directory without index.html', () => {
  const root = makeRoot({ 'empty/.keep': '' });
  assert.equal(resolveRequest(root, '/empty'), null);
});

test('main serves without building when --build is absent', async () => {
  const root = makeRoot({ 'index.html': 'x' });
  const { main } = require('../src/serve');

  // Falls through to the "nothing to serve" branch for a missing dir,
  // which proves it did not attempt a build first.
  const code = await Promise.resolve(main([path.join(root, 'missing')]));
  assert.equal(code, 1);
});
