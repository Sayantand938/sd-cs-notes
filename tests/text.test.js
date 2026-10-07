'use strict';

/** Tests for the pure path/label helpers. */

const test = require('node:test');
const assert = require('node:assert/strict');

const {
  stripExtension,
  formatName,
  formatTitle,
  isUnitSegment,
  escapeHtml,
} = require('../src/lib/text');

test('stripExtension removes md and markdown extensions', () => {
  assert.equal(stripExtension('notes.md'), 'notes');
  assert.equal(stripExtension('notes.markdown'), 'notes');
  assert.equal(stripExtension('notes.MD'), 'notes');
  assert.equal(stripExtension('notes.txt'), 'notes.txt');
});

test('formatName title-cases hyphen/underscore/space separated words', () => {
  assert.equal(formatName('computer-system'), 'Computer System');
  assert.equal(formatName('unit_01'), 'Unit 01');
  assert.equal(formatName('a b'), 'A B');
  assert.equal(formatName(''), '');
});

test('formatTitle normalises numeric prefixes to two digits', () => {
  assert.equal(formatTitle('7-pointers'), '07 Pointers');
  assert.equal(formatTitle('01-intro'), '01 Intro');
  assert.equal(formatTitle('003-deep'), '003 Deep');
});

test('formatTitle recognises language suffixes', () => {
  assert.equal(formatTitle('01-boolean-algebra-eng'), '01 Boolean Algebra (Eng)');
  assert.equal(formatTitle('02-network-types-beng'), '02 Network Types (Beng)');
  assert.equal(formatTitle('02-network-types-ENG'), '02 Network Types (Eng)');
});

test('formatTitle leaves files without a prefix or suffix intact', () => {
  assert.equal(formatTitle('boolean-algebra'), 'Boolean Algebra');
});

test('formatTitle handles the real-world sample filename', () => {
  assert.equal(
    formatTitle('01-computer-system-and-organization-eng'),
    '01 Computer System And Organization (Eng)',
  );
});

test('isUnitSegment matches unit folders only', () => {
  assert.equal(isUnitSegment('unit-01'), true);
  assert.equal(isUnitSegment('Unit 3'), true);
  assert.equal(isUnitSegment('unit4'), true);
  assert.equal(isUnitSegment('notes'), false);
  assert.equal(isUnitSegment('practice-papers'), false);
});

test('escapeHtml escapes the five significant characters', () => {
  assert.equal(
    escapeHtml('<a href="x">&\'</a>'),
    '&lt;a href=&quot;x&quot;&gt;&amp;&#39;&lt;/a&gt;',
  );
});
