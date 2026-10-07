'use strict';

/** Write rendered pages to the output directory. */

const fs = require('fs').promises;
const path = require('path');

const { stripExtension } = require('./text');

/**
 * Compute a note's output path, relative to the output directory.
 *
 * Mirrors the source layout with an `.html` extension:
 *   `unit-01-x/notes/boolean-algebra.md`     -> `unit-01-x/notes/boolean-algebra.html`
 *   `unit-01-x/notes/boolean-algebra.en.md`  -> `unit-01-x/notes/boolean-algebra.en.html`
 *
 * The `.en` / `.bn` language marker is kept, because the two language versions
 * of a note coexist in the same folder and would otherwise overwrite each
 * other.
 *
 * @param {object} note
 * @returns {string} POSIX-style relative path.
 */
function outputPathFor(note) {
  const dir = path.posix.dirname(note.relativePath);
  const filename = `${stripExtension(path.posix.basename(note.relativePath))}.html`;
  return dir === '.' ? filename : `${dir}/${filename}`;
}

/** True when this note is the site's 404 page rather than a normal page. */
function isNotFoundNote(note, notFoundBasename) {
  return note.baseName.toLowerCase() === String(notFoundBasename).toLowerCase();
}

/**
 * Write one rendered page, creating parent directories as needed.
 *
 * @param {string} outputDir
 * @param {string} relativePath
 * @param {string} html
 */
async function writePage(outputDir, relativePath, html) {
  const dest = path.join(outputDir, relativePath);
  await fs.mkdir(path.dirname(dest), { recursive: true });
  await fs.writeFile(dest, html, 'utf-8');
  return relativePath;
}

module.exports = { outputPathFor, isNotFoundNote, writePage };
