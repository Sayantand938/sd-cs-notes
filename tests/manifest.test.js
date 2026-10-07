'use strict';

/** Tests for manifest grouping, sorting and shape. */

const test = require('node:test');
const assert = require('node:assert/strict');

const { buildManifest, shouldOpenByDefault } = require('../src/lib/manifest');

/** Build a minimal note record. */
function note(overrides = {}) {
  return {
    relativePath: 'class-11/coma/semester-01/notes/unit-01/a.md',
    className: 'Class 11',
    subject: 'COMA',
    semester: 'Semester 01',
    category: 'Notes',
    unit: 'Unit 01',
    title: 'A',
    description: '',
    tags: ['Class 11'],
    ...overrides,
  };
}

test('groups notes by class, subject and semester', () => {
  const manifest = buildManifest([
    note({ title: 'A' }),
    note({ title: 'B', relativePath: 'class-11/coma/semester-01/notes/unit-01/b.md' }),
    note({
      title: 'C',
      relativePath: 'class-12/coms/semester-03/notes/unit-01/c.md',
      className: 'Class 12',
      subject: 'COMS',
      semester: 'Semester 03',
    }),
  ]);

  assert.equal(manifest.length, 2);
  assert.equal(manifest[0].class, 'Class 11');
  assert.equal(manifest[1].class, 'Class 12');
});

test('appends the unit to the category name when present', () => {
  const manifest = buildManifest([note({ unit: 'Unit 02' })]);
  assert.equal(manifest[0].categories[0].name, 'Notes - Unit 02');
});

test('omits the unit suffix when the note has no unit folder', () => {
  const manifest = buildManifest([note({ unit: null })]);
  assert.equal(manifest[0].categories[0].name, 'Notes');
});

test('maps source paths to site-absolute html paths', () => {
  const manifest = buildManifest([note()]);
  assert.equal(manifest[0].categories[0].files[0].path, '/class-11/coma/semester-01/notes/unit-01/a.html');
});

test('sorts files, categories and groups deterministically', () => {
  const manifest = buildManifest([
    note({ title: 'Z', relativePath: 'class-11/coma/semester-01/notes/unit-02/z.md', unit: 'Unit 02' }),
    note({ title: 'A', relativePath: 'class-11/coma/semester-01/notes/unit-01/a.md', unit: 'Unit 01' }),
  ]);

  const names = manifest[0].categories.map((c) => c.name);
  assert.deepEqual(names, ['Notes - Unit 01', 'Notes - Unit 02']);
});

test('accepts a custom href builder', () => {
  const manifest = buildManifest([note()], { hrefFor: () => '/custom.html' });
  assert.equal(manifest[0].categories[0].files[0].path, '/custom.html');
});

test('returns an empty array for no notes', () => {
  assert.deepEqual(buildManifest([]), []);
});

test('reports a note count per group', () => {
  const manifest = buildManifest([
    note({ title: 'A' }),
    note({ title: 'B', relativePath: 'class-11/coma/semester-01/notes/unit-01/b.md' }),
  ]);
  assert.equal(manifest[0].noteCount, 2);
});

// --- shouldOpenByDefault -------------------------------------------------

/** Build a group with the given counts of unit notes and practice papers. */
function group(counts) {
  return {
    categories: Object.entries(counts).map(([name, count]) => ({
      name,
      files: Array.from({ length: count }, (_, i) => ({ path: `/${name}/${i}` })),
    })),
  };
}

const OPTS = { threshold: 15, bulkCategories: ['Practice Papers'] };

test('opens a group whose primary notes are within the threshold', () => {
  assert.equal(shouldOpenByDefault(group({ 'Notes - Unit 01': 10 }), OPTS), true);
});

test('collapses a group whose primary notes exceed the threshold', () => {
  assert.equal(shouldOpenByDefault(group({ 'Notes - Unit 01': 30 }), OPTS), false);
});

test('bulk practice papers do not force a group closed', () => {
  // 14 real notes + 20 papers: still browsable, so it stays open.
  assert.equal(
    shouldOpenByDefault(
      group({ 'Notes - Unit 01': 14, 'Practice Papers': 20 }),
      OPTS,
    ),
    true,
  );
});

test('a papers-only group stays open', () => {
  assert.equal(shouldOpenByDefault(group({ 'Practice Papers': 40 }), OPTS), true);
});

test('bulk matching ignores a " - Unit NN" suffix', () => {
  assert.equal(
    shouldOpenByDefault(group({ 'Notes - Unit 01': 5, 'Practice Papers - Unit 03': 30 }), OPTS),
    true,
  );
});

test('an open group at exactly the threshold is inclusive', () => {
  assert.equal(shouldOpenByDefault(group({ 'Notes': 15 }), OPTS), true);
});
