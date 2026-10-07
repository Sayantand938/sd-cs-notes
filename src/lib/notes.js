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
 * The expected shape is:
 *
 *   <class>/<subject>/<semester>/<unit-folder>/<kind>/<file>.md
 *   <class>/<subject>/<semester>/<collection>/<file>.md
 *
 * where <kind> is a folder like `notes` or `questions` inside a unit, and
 * <collection> is a semester-level folder like `mock-tests` or `practicals`.
 *
 * The unit folder carries its topic in the name (`unit-01-computer-organization`),
 * so it becomes the unit label with the number title-cased away: the index
 * groups by unit, and `notes`/`questions` sit inside it as categories.
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

  const fourth = segments[3];
  const fifth = segments[4];

  // A unit folder names a unit; anything else at this level is a collection
  // such as `mock-tests` or `practicals`.
  const isUnitFolder = Boolean(fourth && /^unit[\s-_]?\d/i.test(fourth));

  if (isUnitFolder) {
    const unit = formatUnit(fourth);

    // The folder inside the unit says what kind of material this is.
    const category = fifth ? formatName(fifth) : 'General';

    return { className, subject, semester, category, unit, segments };
  }

  // No unit level: the whole path below the semester names the category.
  const category = fourth ? formatName(fourth) : 'General';

  return { className, subject, semester, category, unit: null, segments };
}

/**
 * Turn a unit folder name into a display label.
 *
 * `unit-01-computer-organization` -> "Unit 01 Computer Organization"
 * `unit-02-networking`            -> "Unit 02 Networking"
 * `unit-3`                        -> "Unit 03"
 *
 * @param {string} folder
 * @returns {string}
 */
function formatUnit(folder) {
  const match = folder.match(/^unit[\s-_]?(\d+)[\s-_]*(.*)$/i);
  if (!match) return formatName(folder);

  const number = match[1].padStart(2, '0');
  const topic = match[2] ? formatName(match[2]) : '';

  return `Unit ${number}${topic ? ` ${topic}` : ''}`;
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

  // The manifest is authoritative for titles. `options.manifest` is a Map of
  // relative path -> { title, ... }; readNote falls back to a derived title
  // only when no manifest was supplied at all, since the build validates that
  // every file has an entry before reaching here.
  const entry = options.manifest ? options.manifest.get(relativePath) : null;

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
    title: entry ? entry.title : formatTitle(baseName),
    description: extractDescription(content),
    date: formatDate(stats.mtime),
    content,
    /** Sibling JSON question bank, when the note has one. */
    questionBank: await readQuestionBank(filePath),
    ...location,
  };
}

/**
 * Load the question bank sitting beside a note, if present.
 *
 * A malformed bank is reported rather than silently ignored, so a bad hand-edit
 * cannot quietly drop a paper's questions from the site.
 *
 * @param {string} notePath Absolute path to the `.md`.
 * @returns {Promise<object|null>}
 */
async function readQuestionBank(notePath) {
  const jsonPath = notePath.replace(/\.(md|markdown)$/i, '.json');

  let raw;
  try {
    raw = await fs.readFile(jsonPath, 'utf-8');
  } catch {
    return null; // no bank for this note
  }

  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed.questions)) {
      throw new Error('missing "questions" array');
    }
    return parsed;
  } catch (error) {
    throw new Error(
      `Invalid question bank ${path.basename(jsonPath)}: ${error.message}`,
    );
  }
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
  formatUnit,
  readNote,
  readNotes,
};
