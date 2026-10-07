'use strict';

/** Tests for note metadata derivation. */

const test = require('node:test');
const assert = require('node:assert/strict');

const {
  describeLocation,
  extractDescription,
  formatDate,
  formatUnit,
} = require('../src/lib/notes');

test('describeLocation maps a unit path to manifest coordinates', () => {
  const loc = describeLocation(
    'class-11/coms/sem-1/unit-01-computer-organization/notes/01-boolean-algebra.en.md',
  );

  assert.equal(loc.className, 'Class 11');
  assert.equal(loc.subject, 'COMS'); // subjects are upper-cased
  assert.equal(loc.semester, 'Sem 1');
  // The unit carries its topic, and notes/questions sit inside it.
  assert.equal(loc.unit, 'Unit 01 Computer Organization');
  assert.equal(loc.category, 'Notes');
});

test('describeLocation reads questions as a category inside the unit', () => {
  const loc = describeLocation(
    'class-11/coms/sem-1/unit-03-c-programming/questions/02-operators.en.md',
  );

  assert.equal(loc.unit, 'Unit 03 C Programming');
  assert.equal(loc.category, 'Questions');
});

test('describeLocation treats a semester-level folder as a collection', () => {
  const loc = describeLocation('class-11/coms/sem-1/mock-tests/01-practice-paper.en.md');

  assert.equal(loc.unit, null);
  assert.equal(loc.category, 'Mock Tests');
});

test('describeLocation falls back to General for missing segments', () => {
  const loc = describeLocation('orphan.md');

  assert.equal(loc.className, 'General');
  assert.equal(loc.subject, 'General');
  assert.equal(loc.semester, 'General');
  assert.equal(loc.category, 'General');
  assert.equal(loc.unit, null);
});

test('formatUnit pads the number and title-cases the topic', () => {
  assert.equal(formatUnit('unit-01-computer-organization'), 'Unit 01 Computer Organization');
  assert.equal(formatUnit('unit-02-networking'), 'Unit 02 Networking');
  assert.equal(formatUnit('unit-7'), 'Unit 07');
});

test('subject defaults to the upper-cased folder name', () => {
  const loc = describeLocation('class-11/physics/sem-1/unit-01-x/notes/a.md');
  assert.equal(loc.subject, 'PHYSICS');
});

test('subjectLabels maps folder names to display labels', () => {
  const labels = { coms: 'COMS', coma: 'COMA' };

  assert.equal(
    describeLocation('class-11/coms/sem-1/unit-01-x/notes/a.md', { subjectLabels: labels }).subject,
    'COMS',
  );

  assert.equal(
    describeLocation('class-11/coma/sem-1/unit-01-x/notes/a.md', { subjectLabels: labels }).subject,
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

test('describeLocation handles a unit folder without a topic', () => {
  const loc = describeLocation('class-11/coms/sem-1/unit-03/questions/a.md');
  assert.equal(loc.unit, 'Unit 03');
  assert.equal(loc.category, 'Questions');
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
