'use strict';

/**
 * Read note sources and derive the metadata the templates need.
 *
 * All metadata is derived from the folder layout plus the file's own text —
 * there is no frontmatter in this project. The expected shape is
 * `<notesDir>/<class>/<subject>/<semester>/<category>/[<unit>/]<file>.md`.
 */

const fs = require('fs').promises;
const path = require('path');

const { formatName, formatTitle, stripExtension } = require('./text');

/**
 * Split a note's path (relative to the notes root) into manifest coordinates.
 *
 * The trailing filename is ignored, so a note sitting at the notes root gets
 * the "General" fallbacks rather than having its filename mistaken for a
 * class name.
 *
 * @param {string} relativePath POSIX-style path relative to the notes root,
 *   including the filename.
 * @param {object} [options]
 * @param {Record<string,string>} [options.subjectLabels] Folder name
 *   (lower-cased) -> display label. Unmapped folders are upper-cased.
 * @returns {{className: string, subject: string, semester: string,
 *            category: string, unit: string|null, segments: string[]}}
 */
function describeLocation(relativePath, options = {}) {
  const { subjectLabels = {} } = options;

  // Drop the filename; only directories carry grouping meaning.
  const segments = relativePath.split('/').slice(0, -1);

  const className = segments[0] ? formatName(segments[0]) : 'General';

  const subjectFolder = segments[1];
  const subject = subjectFolder
    ? subjectLabels[subjectFolder.toLowerCase()] || subjectFolder.toUpperCase()
    : 'General';

  const semester = segments[2] ? formatName(segments[2]) : 'General';
  const category = segments[3] ? formatName(segments[3]) : 'General';
  const unitRaw = segments[4];
  const unit = unitRaw && /^unit/i.test(unitRaw) ? formatName(unitRaw) : null;

  return { className, subject, semester, category, unit, segments };
}

/**
 * First meaningful line of a note, used as its one-line description.
 * Skips blanks and ATX headings.
 */
function extractDescription(content) {
  const line = content
    .split('\n')
    .find((candidate) => candidate.trim() !== '' && !candidate.startsWith('#'));

  return line ? line.trim() : '';
}

/** Format a date the way the site has always displayed it: "4 Mar 2026". */
function formatDate(date) {
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

/**
 * Read and describe a single note.
 *
 * @param {string} filePath Absolute path to the note.
 * @param {string} notesDir Absolute notes root.
 * @param {object} [options] Forwarded to describeLocation (e.g. subjectLabels).
 * @returns {Promise<object>} Note record consumed by the renderer and manifest.
 */
async function readNote(filePath, notesDir, options = {}) {
  const [content, stats] = await Promise.all([
    fs.readFile(filePath, 'utf-8'),
    fs.stat(filePath),
  ]);

  const relativePath = path.relative(notesDir, filePath).split(path.sep).join('/');
  const baseName = stripExtension(path.basename(filePath));
  const location = describeLocation(relativePath, options);

  return {
    /** Absolute source path. */
    filePath,
    /** POSIX path relative to the notes root, including extension. */
    relativePath,
    /** Path segments above the file — used for tag badges. */
    segments: location.segments,
    /** Tags are simply the folder names, title-cased. */
    tags: location.segments.map(formatName),
    /** Derived display metadata. */
    baseName,
    title: formatTitle(baseName),
    description: extractDescription(content),
    date: formatDate(stats.mtime),
    content,
    ...location,
  };
}

/**
 * Read every note under the notes root.
 *
 * @param {string[]} filePaths
 * @param {string} notesDir
 * @param {object} [options] Forwarded to readNote.
 * @returns {Promise<object[]>}
 */
async function readNotes(filePaths, notesDir, options = {}) {
  return Promise.all(filePaths.map((filePath) => readNote(filePath, notesDir, options)));
}

module.exports = {
  describeLocation,
  extractDescription,
  formatDate,
  readNote,
  readNotes,
};
