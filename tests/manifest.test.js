'use strict';

/** Tests for manifest grouping, sorting and shape. */

const test = require('node:test');
const assert = require('node:assert/strict');

const { buildManifest } = require('../src/lib/manifest');

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
