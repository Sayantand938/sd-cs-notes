'use strict';

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

test('mock tests are derived as clean titles', () => {
  assert.equal(
    deriveTitle('class-11/coms/sem-1/mock-tests/01-mock-test.en.md'),
    'Mock Test 01 (EN)',
  );
});

test('acronyms like OSI are kept uppercase', () => {
  assert.equal(
    deriveTitle('class-11/coms/sem-2/unit-02-networking/notes/06-osi-reference-model.en.md'),
    'OSI Reference Model (EN)',
  );
});

test('a Bengali file is tagged BN', () => {
  assert.equal(
    deriveTitle('class-11/coms/sem-2/unit-02-networking/notes/02-transmission-media.bn.md'),
    'Transmission Media (BN)',
  );
});