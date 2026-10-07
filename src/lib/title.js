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
 * @param {string} base Filename without extension.
 * @returns {{ordinal: string|null, slug: string, lang: string}}
 */
function splitName(base) {
  let rest = base;
  let lang = '';

  const langMatch = rest.match(/[-_](eng|beng)$/i);
  if (langMatch) {
    lang = langMatch[1].toLowerCase() === 'eng' ? 'Eng' : 'Beng';
    rest = rest.slice(0, -langMatch[0].length);
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

  const isPracticePapers = parts.includes('practice-papers');
  const isPractical = parts.includes('practical');
  const inMisc = parts.includes('miscellaneous');

  // Practice papers -----------------------------------------------------------
  if (isPracticePapers) {
    // A descriptive slug wins: it names the topic, not the document type.
    if (slug && !/^practice[-_]?paper$/i.test(slug)) {
      const topic = titleCase(slug.replace(/[-_]saq$/i, ''));
      const kind = /[-_]saq$/i.test(slug) ? ' — SAQ' : '';
      return `${topic}${kind}${langSuffix}`;
    }

    // Numbering restarts in each unit folder, so "Practice Paper 05" would be
    // ambiguous across units. Include the unit to keep titles unique — the
    // build rejects duplicate titles.
    const unit = parts.find((p) => /^unit[-_]?\d+/.test(p));
    const unitLabel = unit ? `${formatName(unit)} ` : '';
    const num = ordinal ? String(Number(ordinal)).padStart(2, '0') : '';
    const kind = inMisc ? 'Misc Practice Paper' : 'Practice Paper';

    return `${kind} ${unitLabel}${num}${langSuffix}`.replace(/\s+/g, ' ').trim();
  }

  // Practical -----------------------------------------------------------------
  if (isPractical) {
    if (slug && !/practical/i.test(slug)) return `${titleCase(slug)}${langSuffix}`;
    const unit = parts.find((p) => /^unit[-_]?\d+/.test(p));
    const unitLabel = unit ? `${formatName(unit)} ` : '';
    return `${unitLabel}Practical${langSuffix}`.trim();
  }

  // Study notes ---------------------------------------------------------------
  if (slug) {
    return `${titleCase(slug)}${langSuffix}`;
  }

  // Bare number inside a unit folder: the folder supplies the only context,
  // so fall back to a predictable label rather than inventing a topic.
  const unit = segments[segments.length - 1];
  const num = ordinal ? String(Number(ordinal)).padStart(2, '0') : '';
  return `${formatName(unit || '')} ${num}`.trim();
}

module.exports = { deriveTitle, splitName, titleCase, STRUCTURAL };
