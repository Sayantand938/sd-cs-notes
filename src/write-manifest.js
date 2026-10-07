'use strict';

/**
 * Generate `notes.manifest.json` from the notes tree.
 *
 * The manifest is the source of truth for page titles. This writer seeds it:
 * a file's own `# Heading` is used when it has a real one near the top,
 * otherwise a title is derived from the path. Entries that already exist are
 * preserved, so hand-edited titles survive a regeneration.
 *
 * Run with `node src/cli.js --write-manifest`.
 */

const fs = require('fs').promises;
const path = require('path');

const { deriveTitle } = require('./lib/title');
const { MANIFEST_FILENAME } = require('./lib/manifest-file');

/**
 * First `# Heading` at the very top of a document, if any.
 *
 * The heading must appear within the first few lines. A `#` further down is a
 * section heading inside the content, not the document's title — one note has
 * its only H1 on line 82 of 836 ("Step 3: Coding").
 *
 * @param {string} markdown
 * @returns {string|null}
 */
function headingTitle(markdown) {
  const lines = markdown.split('\n').slice(0, 5);

  for (const line of lines) {
    const match = line.match(/^#\s+(.+?)\s*$/);
    if (match) return match[1].replace(/[*_`]/g, '').trim() || null;
    // A non-blank line before any heading means there is no title heading.
    if (line.trim() !== '' && !line.startsWith('<!--')) return null;
  }
  return null;
}

/** True when a heading reads as a real title rather than a scratch note. */
function isUsableTitle(text) {
  if (!text) return false;
  if (text.length > 90) return false;
  if (/^(untitled|todo|draft|test)\b/i.test(text)) return false;
  if (/^(step|section|part|chapter)\s*\d/i.test(text)) return false;
  return true;
}

/** Strip leading emoji, trailing "study guide" boilerplate, and extra space. */
function cleanTitle(text) {
  return text
    .replace(/^[\p{Extended_Pictographic}\uFE0F\u200D\s]+/u, '')
    .replace(/\s*[-–—]\s*(complete\s+)?study\s+guide$/i, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Reduce "Computer Networks: Transmission Media" to "Transmission Media". */
function trimPrefix(text) {
  const match = text.match(/^[^:]{3,40}:\s*(.+)$/);
  if (!match) return text;
  const rest = match[1].trim();
  return rest.length >= 3 ? rest : text;
}

/** Every `.md`/`.markdown` file under dir, as POSIX paths relative to dir. */
async function listNotes(dir) {
  const out = [];

  const walk = async (current) => {
    const entries = await fs.readdir(current, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) await walk(full);
      else if (/\.(md|markdown)$/i.test(entry.name)) {
        out.push(path.relative(dir, full).split(path.sep).join('/'));
      }
    }
  };

  await walk(dir);
  return out.sort();
}

/**
 * Write the manifest for a notes directory.
 *
 * @param {string} notesDir Absolute path to the notes root.
 * @returns {Promise<{filename: string, entries: number, fromHeading: number,
 *                    derived: number, preserved: number}>}
 */
async function writeManifest(notesDir) {
  const manifestPath = path.join(notesDir, MANIFEST_FILENAME);
  const files = await listNotes(notesDir);

  let existing = {};
  try {
    existing = JSON.parse(await fs.readFile(manifestPath, 'utf-8'));
  } catch {
    // No manifest yet, or unreadable: start fresh.
  }

  const out = {};
  let fromHeading = 0;
  let derived = 0;
  let preserved = 0;

  for (const rel of files) {
    const kept = existing[rel];
    if (kept && typeof kept === 'object' && kept.title) {
      out[rel] = { ...kept };
      preserved++;
      continue;
    }

    const text = await fs.readFile(path.join(notesDir, rel), 'utf-8');
    const heading = headingTitle(text);

    // A practice paper's own heading is often just its filename in words, so a
    // clean derived title reads better there; study notes use their heading.
    const isPractice = /practice-paper|saq/i.test(path.basename(rel));

    if (!isPractice && isUsableTitle(heading)) {
      out[rel] = { title: trimPrefix(cleanTitle(heading)) };
      fromHeading++;
    } else {
      out[rel] = { title: deriveTitle(rel) };
      derived++;
    }
  }

  await fs.writeFile(manifestPath, `${JSON.stringify(out, null, 2)}\n`, 'utf-8');

  return {
    filename: MANIFEST_FILENAME,
    entries: Object.keys(out).length,
    fromHeading,
    derived,
    preserved,
  };
}

module.exports = { writeManifest, headingTitle, isUsableTitle, cleanTitle, trimPrefix };
