'use strict';

/**
 * Derive a display title for a note from its path.
 *
 * This is only used as a fallback: the manifest is the source of truth for
 * titles, and `--write-manifest` calls this once to seed each entry. After
 * that, titles live in the manifest and are edited there.
 *
 * The rules cover both naming schemes in use:
 *
 *   unit-01/01-boolean-algebra-eng.md        -> "Boolean Algebra (Eng)"
 *   unit-01/01.md                            -> "Boolean Algebra (Eng)" via parent
 *   practice-papers/unit-01/01.md            -> "Practice Paper 01"
 *   practice-papers/unit-02/01-introduction-to-networking-saq.md
 *                                            -> "Introduction to Networking - SAQ"
 */

const { formatTitle, formatName } = require('./text');

/** Words that are structural rather than part of a topic name. */
const STRUCTURAL = new Set(['unit', 'semester', 'practice', 'papers', 'paper', 'misc', 'miscellaneous']);

/**
 * Split a filename into an optional ordinal, a topic slug, and a language tag.
 *
 * Accepts both naming conventions in use:
 *   `01-boolean-algebra-eng.md`  (suffix word)
 *   `01-boolean-algebra.en.md`   (language before the extension)
 *
 * @param {string} base Filename without extension.
 * @returns {{ordinal: string|null, slug: string, lang: string}}
 */
function splitName(base) {
  let rest = base;
  let lang = '';

  // "01-topic.en" -> lang "EN"; also handles "-eng" written as a word.
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

/** Turn "boolean-algebra" into "Boolean Algebra", preserving known acronyms. */
function titleCase(slug) {
  return slug
    .split(/[-_]+/)
    .filter(Boolean)
    .map((word) => {
      // Keep short all-caps acronyms uppercase (C, OSI, CPU, LAN...).
      if (/^[a-z]{1,3}$/.test(word) && ['c', 'osi', 'cpu', 'lan', 'wan', 'sql'].includes(word)) {
        return word.toUpperCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

/**
 * Derive a title from a note's relative path.
 *
 * Covers the folder shapes in use:
 *
 *   .../unit-01-computer-organization/notes/04-boolean-algebra.en.md
 *       -> "Boolean Algebra (EN)"
 *   .../unit-01-computer-organization/questions/04-boolean-algebra.en.md
 *       -> "Boolean Algebra — Questions (EN)"
 *   .../unit-01-computer-organization/questions/05-practice-paper.en.md
 *       -> "Practice Paper Unit 01 05 (EN)"
 *   .../sem-1/mock-tests/03-practice-paper.en.md
 *       -> "Mock Test 03 (EN)"
 *   .../sem-1/practicals/practical.en.md
 *       -> "Practical (EN)"
 *
 * Titles must be unique across the site (the build rejects duplicates). A
 * `questions/` file shares its basename with the `notes/` file beside it, so
 * it carries a "— Questions" marker to keep the two distinguishable.
 *
 * @param {string} relativePath POSIX path relative to the notes root.
 * @returns {string}
 */
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

  // Semester-wide mock tests: the unit does not apply.
  if (isMockTests) {
    return `Mock Test ${num}${langSuffix}`.replace(/\s+/g, ' ').trim();
  }

  // Practicals: one per semester, usually.
  if (isPractical) {
    if (slug && !/^practical/i.test(slug)) return `${titleCase(slug)}${langSuffix}`;
    return `Practical${langSuffix}`;
  }

  // A standalone practice paper carrying no topic name.
  if (isQuestions && /^practice[-_]?paper$/i.test(slug)) {
    const label = [unitLabel, num].filter(Boolean).join(' ');
    return `Practice Paper ${label}${langSuffix}`.replace(/\s+/g, ' ').trim();
  }

  // Everything else is named by its topic.
  if (slug) {
    const topic = titleCase(slug);
    // A topic-named question set sits beside a note of the same name, so it
    // needs the marker to stay unique.
    const marker = isQuestions ? ' — Questions' : '';
    return `${topic}${marker}${langSuffix}`;
  }

  // Bare number with no slug: the folder is the only context available.
  const label = unitLabel || formatName(kindFolder);
  return `${label} ${num}`.replace(/\s+/g, ' ').trim();
}

/**
 * "unit-01-computer-organization" -> "Unit 01"
 *
 * Titles only need the number to stay unique; the topic is already shown by
 * the group heading the note sits under.
 *
 * @param {string} folder
 * @returns {string}
 */
function formatUnitLabel(folder) {
  const match = folder.match(/^unit[\s-_]?(\d+)/i);
  if (!match) return formatName(folder);
  return `Unit ${match[1].padStart(2, '0')}`;
}

module.exports = { deriveTitle, splitName, titleCase, formatUnitLabel, STRUCTURAL };
