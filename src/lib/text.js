'use strict';

/**
 * Pure string helpers for turning file paths into human-readable labels.
 *
 * These are deliberately dependency-free and side-effect-free so they can be
 * unit-tested directly (see tests/naming.test.js).
 */

/** Remove a trailing `.md` / `.markdown` extension. */
function stripExtension(filename) {
  return filename.replace(/\.(md|markdown)$/i, '');
}

/** "unit-01" -> "Unit 01" */
function formatName(str) {
  return String(str)
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Turn a note's basename into a display title.
 *
 * Recognises an optional numeric prefix and an optional language suffix:
 *   "01-computer-system-and-organization-eng"
 *     -> "01 Computer System And Organization (Eng)"
 *   "7-pointers" -> "07 Pointers"
 *
 * @param {string} filename Basename, with or without extension.
 * @returns {string}
 */
function formatTitle(filename) {
  let name = stripExtension(filename);

  // 1. Numeric prefix, normalised to two digits ("01-", "1-", "03_").
  let numberPrefix = '';
  const numberMatch = name.match(/^(\d+)[\s-_]+/);
  if (numberMatch) {
    numberPrefix = `${numberMatch[1].padStart(2, '0')} `;
    name = name.slice(numberMatch[0].length);
  }

  // 2. Language suffix (eng / beng).
  let langSuffix = '';
  if (/[-_\s]eng$/i.test(name)) {
    langSuffix = ' (Eng)';
    name = name.replace(/[-_\s]eng$/i, '');
  } else if (/[-_\s]beng$/i.test(name)) {
    langSuffix = ' (Beng)';
    name = name.replace(/[-_\s]beng$/i, '');
  }

  // 3. Title-case the remaining words.
  const words = formatName(name);

  return `${numberPrefix}${words}${langSuffix}`.trim();
}

/**
 * True when a path segment names a unit folder ("unit-01", "Unit 3").
 * @param {string} segment
 */
function isUnitSegment(segment) {
  return /^unit[\s-_]?\d+/i.test(segment);
}

/** Escape the five HTML-significant characters. */
function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

module.exports = {
  stripExtension,
  formatName,
  formatTitle,
  isUnitSegment,
  escapeHtml,
};
