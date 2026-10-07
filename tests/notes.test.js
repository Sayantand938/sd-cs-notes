'use strict';

/** Tests for note metadata derivation. */

const test = require('node:test');
const assert = require('node:assert/strict');

const {
  describeLocation,
  extractDescription,
  formatDate,
} = require('../src/lib/notes');

test('describeLocation maps a full path to manifest coordinates', () => {
  const loc = describeLocation('class-11/coma/semester-01/notes/unit-02/a.md');

  assert.equal(loc.className, 'Class 11');
  assert.equal(loc.subject, 'COMA'); // subjects are upper-cased
  assert.equal(loc.semester, 'Semester 01');
  assert.equal(loc.category, 'Notes');
  assert.equal(loc.unit, 'Unit 02');
});

test('describeLocation falls back to General for missing segments', () => {
  const loc = describeLocation('orphan.md');

  assert.equal(loc.className, 'General');
  assert.equal(loc.subject, 'General');
  assert.equal(loc.semester, 'General');
  assert.equal(loc.category, 'General');
  assert.equal(loc.unit, null);
});

test('describeLocation ignores a fifth segment that is not a unit folder', () => {
  const loc = describeLocation('class-11/coma/semester-01/notes/misc/a.md');
  assert.equal(loc.unit, null);
});

test('subject defaults to the upper-cased folder name', () => {
  const loc = describeLocation('class-11/computer-science/semester-01/notes/unit-01/a.md');
  assert.equal(loc.subject, 'COMPUTER-SCIENCE');
});

test('subjectLabels maps folder names to display labels', () => {
  const labels = { 'computer-science': 'COMS', coma: 'COMA' };

  assert.equal(
    describeLocation('class-11/computer-science/semester-01/notes/unit-01/a.md', {
      subjectLabels: labels,
    }).subject,
    'COMS',
  );

  assert.equal(
    describeLocation('class-11/coma/semester-01/notes/unit-01/a.md', {
      subjectLabels: labels,
    }).subject,
    'COMA',
  );
});

test('subjectLabels matching is case-insensitive on the folder name', () => {
  const loc = describeLocation('class-11/Computer-Science/semester-01/notes/unit-01/a.md', {
    subjectLabels: { 'computer-science': 'COMS' },
  });
  assert.equal(loc.subject, 'COMS');
});

test('an unmapped subject falls back to upper-casing', () => {
  const loc = describeLocation('class-11/physics/semester-01/notes/unit-01/a.md', {
    subjectLabels: { 'computer-science': 'COMS' },
  });
  assert.equal(loc.subject, 'PHYSICS');
});

test('describeLocation keeps nested practice-paper units', () => {
  const loc = describeLocation('class-11/coma/semester-01/practice-papers/unit-03/a.md');
  assert.equal(loc.category, 'Practice Papers');
  assert.equal(loc.unit, 'Unit 03');
});

test('extractDescription takes the first non-heading, non-blank line', () => {
  const md = '\n\n## Heading\n\nActual description here\nmore text';
  assert.equal(extractDescription(md), 'Actual description here');
});

test('extractDescription returns empty string when nothing qualifies', () => {
  assert.equal(extractDescription('# Only a heading\n\n## Another'), '');
  assert.equal(extractDescription(''), '');
});

test('formatDate renders en-GB day-month-year', () => {
  assert.equal(formatDate(new Date(2026, 2, 4)), '4 Mar 2026');
});
