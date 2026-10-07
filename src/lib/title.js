'use strict';

/**
 * Pure file-name title derivation.
 *
 * Rules:
 *   - Strips leading numbers ("03-")
 *   - Converts kebab-case to Title Case, keeping acronyms (OSI, CPU, etc.)
 *   - Converts .en / .bn extensions to (EN) / (BN)
 *   - Appends "— Questions" for files in a questions/ directory
 */

const { formatName } = require('./text');

const STRUCTURAL = new Set(['unit', 'semester', 'practice', 'papers', 'paper', 'misc', 'miscellaneous']);

function splitName(base) {
  let rest = base;
  let lang = '';

  const dotLang = rest.match(/\.(en|bn|eng|beng)$/i);
  if (dotLang) {
    const code = dotLang[1].toLowerCase();
    lang = code === 'en' || code === 'eng' ? 'EN' : 'BN';
    rest = rest.slice(0, -dotLang[0].length);
  } else {
    const wordLang = rest.match(/[-_](eng|beng)$/i);
    if (wordLang) {
      lang = wordLang[1].toLowerCase() === 'eng' ? 'EN' : 'BN';
      rest = rest.slice(0, -wordLang[0].length);
    }
  }

  let ordinal = null;
  const numMatch = rest.match(/^(\d+)[-_]/);
  if (numMatch) {
    ordinal = numMatch[1];
    rest = rest.slice(numMatch[0].length);
  }

  return { ordinal, slug: rest, lang };
}

function titleCase(slug) {
  return slug
    .split(/[-_]+/)
    .filter(Boolean)
    .map((word) => {
      if (/^[a-z]{1,4}$/.test(word) && ['c', 'osi', 'cpu', 'lan', 'wan', 'sql', 'lab'].includes(word.toLowerCase())) {
        return word.toUpperCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

function deriveTitle(relativePath) {
  const segments = relativePath.split('/');
  const filename = segments.pop();
  const base = filename.replace(/\.(md|markdown)$/i, '');
  const parts = segments.map((s) => s.toLowerCase());

  const { ordinal, slug, lang } = splitName(base);
  const langSuffix = lang ? ` (${lang})` : '';

  const kindFolder = parts[parts.length - 1] || '';
  const unitFolder = parts.find((p) => /^unit[\s-_]?\d/.test(p));
  const unitLabel = unitFolder ? formatUnitLabel(unitFolder) : '';

  const isMockTests = parts.includes('mock-tests');
  const isPractical = parts.includes('practicals') || parts.includes('practical');
  const isQuestions = kindFolder === 'questions';

  const num = ordinal ? String(Number(ordinal)).padStart(2, '0') : '';

  // Semester-wide mock tests
  if (isMockTests) {
    return `Mock Test ${num}${langSuffix}`.replace(/\s+/g, ' ').trim();
  }

  // Lab practicals
  if (isPractical) {
    if (slug && !/^practical$/i.test(slug)) return `${titleCase(slug)}${langSuffix}`;
    return `Practical${langSuffix}`;
  }

  // Unit-level standalone practice papers
  if (isQuestions && /^practice[-_]?paper$/i.test(slug)) {
    const label = [unitLabel, num].filter(Boolean).join(' ');
    return `Practice Paper ${label}${langSuffix}`.replace(/\s+/g, ' ').trim();
  }

  // Topic notes and questions
  if (slug) {
    const topic = titleCase(slug);
    const marker = isQuestions ? ' — Questions' : '';
    return `${topic}${marker}${langSuffix}`;
  }

  const label = unitLabel || formatName(kindFolder);
  return `${label} ${num}`.replace(/\s+/g, ' ').trim();
}

function formatUnitLabel(folder) {
  const match = folder.match(/^unit[\s-_]?(\d+)/i);
  if (!match) return formatName(folder);
  return `Unit ${match[1].padStart(2, '0')}`;
}

module.exports = { deriveTitle, splitName, titleCase, formatUnitLabel, STRUCTURAL };