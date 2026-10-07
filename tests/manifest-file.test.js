'use strict';

/** Tests for manifest loading, strict validation and title derivation. */

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

const {
  loadManifest,
  validateManifest,
  manifestError,
  MANIFEST_FILENAME,
} = require('../src/lib/manifest-file');
const { deriveTitle } = require('../src/lib/title');
const { headingTitle, isUsableTitle, cleanTitle, trimPrefix } = require('../src/write-manifest');

/** Create a temp notes dir containing a manifest and optional files. */
function workspace(manifest, files = []) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'sd-manifest-'));
  for (const rel of files) {
    const dest = path.join(root, rel);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.writeFileSync(dest, '# x\n', 'utf-8');
  }
  if (manifest !== null) {
    fs.writeFileSync(
      path.join(root, MANIFEST_FILENAME),
      typeof manifest === 'string' ? manifest : JSON.stringify(manifest),
      'utf-8',
    );
  }
  return root;
}

// --- loading --------------------------------------------------------------

test('loads a manifest of plain string titles', async () => {
  const root = workspace({ 'a.md': 'Title A' });
  const { entries } = await loadManifest(root);

  assert.equal(entries.size, 1);
  assert.equal(entries.get('a.md').title, 'Title A');
});

test('loads a manifest of object entries and keeps extra fields', async () => {
  const root = workspace({ 'a.md': { title: 'Title A', order: 2 } });
  const { entries } = await loadManifest(root);

  assert.equal(entries.get('a.md').title, 'Title A');
  assert.equal(entries.get('a.md').order, 2);
});

test('ignores $schema and // comment keys', async () => {
  const root = workspace({ $schema: 'x', '// note': 'hi', 'a.md': 'T' });
  const { entries } = await loadManifest(root);

  assert.equal(entries.size, 1);
});

test('a missing manifest produces a helpful error', async () => {
  const root = workspace(null);
  await assert.rejects(() => loadManifest(root), /Manifest not found/);
});

test('invalid JSON is reported clearly', async () => {
  const root = workspace('{ not json');
  await assert.rejects(() => loadManifest(root), /not valid JSON/);
});

test('an entry with no title is rejected', async () => {
  const root = workspace({ 'a.md': { order: 1 } });
  await assert.rejects(() => loadManifest(root), /needs a non-empty "title"/);
});

test('an empty title is rejected', async () => {
  const root = workspace({ 'a.md': '   ' });
  await assert.rejects(() => loadManifest(root), /non-empty/);
});

// --- validation -----------------------------------------------------------

test('a matching manifest produces no errors', () => {
  const entries = new Map([['a.md', { title: 'A' }]]);
  const result = validateManifest(entries, ['a.md']);

  assert.equal(manifestError(result), null);
});

test('a file with no entry is reported', () => {
  const entries = new Map();
  const result = validateManifest(entries, ['a.md']);

  assert.deepEqual(result.missingTitles, ['a.md']);
  assert.match(manifestError(result).message, /no manifest entry/);
});

test('an entry with no file is reported', () => {
  const entries = new Map([['ghost.md', { title: 'Ghost' }]]);
  const result = validateManifest(entries, []);

  assert.deepEqual(result.orphanTitles, ['ghost.md']);
  assert.match(manifestError(result).message, /no file/);
});

test('duplicate titles are reported', () => {
  const entries = new Map([
    ['a.md', { title: 'Same' }],
    ['b.md', { title: 'same' }],
  ]);
  const result = validateManifest(entries, ['a.md', 'b.md']);

  assert.equal(result.duplicates.length, 1);
  assert.match(manifestError(result).message, /duplicated title/);
});

test('the error lists every problem category at once', () => {
  const entries = new Map([
    ['ghost.md', { title: 'Ghost' }],
    ['b.md', { title: 'Same' }],
    ['c.md', { title: 'Same' }],
  ]);
  const result = validateManifest(entries, ['b.md', 'c.md', 'new.md']);
  const message = manifestError(result).message;

  assert.match(message, /no manifest entry/);
  assert.match(message, /no file/);
  assert.match(message, /duplicated title/);
});

// --- title derivation -----------------------------------------------------

test('derives a title from a unit notes file', () => {
  assert.equal(
    deriveTitle('class-11/coms/sem-1/unit-01-computer-organization/notes/04-boolean-algebra.en.md'),
    'Boolean Algebra (EN)',
  );
});

test('a questions file is marked to stay distinct from its note', () => {
  const note = deriveTitle('class-11/coms/sem-1/unit-01-x/notes/04-boolean-algebra.en.md');
  const questions = deriveTitle('class-11/coms/sem-1/unit-01-x/questions/04-boolean-algebra.en.md');

  assert.equal(note, 'Boolean Algebra (EN)');
  assert.equal(questions, 'Boolean Algebra — Questions (EN)');
  assert.notEqual(note, questions);
});

test('a numbered practice paper inside a unit carries its unit', () => {
  const a = deriveTitle('class-11/coms/sem-1/unit-01-x/questions/05-practice-paper.en.md');
  const b = deriveTitle('class-11/coms/sem-1/unit-02-y/questions/05-practice-paper.en.md');

  assert.equal(a, 'Practice Paper Unit 01 05 (EN)');
  assert.notEqual(a, b);
});

test('mock tests are named as semester-wide papers', () => {
  assert.equal(
    deriveTitle('class-11/coms/sem-1/mock-tests/03-practice-paper.en.md'),
    'Mock Test 03 (EN)',
  );
});

test('a practical is named by its kind, not its filename', () => {
  assert.equal(
    deriveTitle('class-11/coms/sem-1/practicals/practical.en.md'),
    'Practical (EN)',
  );
});

test('a Bengali file is tagged BN', () => {
  assert.equal(
    deriveTitle('class-11/coms/sem-2/unit-02-networking/notes/02-transmission-media.bn.md'),
    'Transmission Media (BN)',
  );
});

test('the older -eng suffix is still understood', () => {
  assert.equal(deriveTitle('unit-01/04-boolean-algebra-eng.md'), 'Boolean Algebra (EN)');
});

// --- heading extraction ---------------------------------------------------

test('reads a title heading at the top of a file', () => {
  assert.equal(headingTitle('# The OSI Reference Model\n\nText'), 'The OSI Reference Model');
  assert.equal(headingTitle('\n# Spaced Title\n'), 'Spaced Title');
});

test('ignores a heading that appears deep in the document', () => {
  const deep = `${'## section\n\n'.repeat(20)}# Step 3: Coding\n`;
  assert.equal(headingTitle(deep), null);
});

test('a file starting with prose has no title heading', () => {
  assert.equal(headingTitle('## 1. Introduction\n\n# Later\n'), null);
});

test('rejects placeholder and step headings as titles', () => {
  assert.equal(isUsableTitle('Step 3: Coding'), false);
  assert.equal(isUsableTitle('Section 2'), false);
  assert.equal(isUsableTitle('TODO'), false);
  assert.equal(isUsableTitle('The OSI Reference Model'), true);
});

test('cleanTitle strips emoji and study-guide boilerplate', () => {
  assert.equal(cleanTitle('📚 Computer Networks: Transmission Media'), 'Computer Networks: Transmission Media');
  assert.equal(cleanTitle('Boolean Algebra – Complete Study Guide'), 'Boolean Algebra');
});

test('trimPrefix removes a redundant document prefix', () => {
  assert.equal(trimPrefix('Computer Networks: Network Protocols'), 'Network Protocols');
  // A short remainder is left alone rather than producing a useless title.
  assert.equal(trimPrefix('A: B'), 'A: B');
});
