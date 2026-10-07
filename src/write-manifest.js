'use strict';

/**
 * Generate `notes.manifest.json` purely from file names.
 *
 * Link text and titles are derived solely from the file name:
 *   e.g. 03-number-system.en.md -> Number System (EN)
 *        03-number-system.bn.md -> Number System (BN)
 */

const fs = require('fs').promises;
const path = require('path');

const { deriveTitle } = require('./lib/title');
const { MANIFEST_FILENAME } = require('./lib/manifest-file');

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
 * Write the manifest for a notes directory purely from file names.
 *
 * @param {string} notesDir Absolute path to the notes root.
 * @returns {Promise<{filename: string, entries: number, fromHeading: number,
 *                    derived: number, preserved: number}>}
 */
async function writeManifest(notesDir) {
  const manifestPath = path.join(notesDir, MANIFEST_FILENAME);
  const files = await listNotes(notesDir);

  const out = {};
  for (const rel of files) {
    out[rel] = { title: deriveTitle(rel) };
  }

  await fs.writeFile(manifestPath, `${JSON.stringify(out, null, 2)}\n`, 'utf-8');

  return {
    filename: MANIFEST_FILENAME,
    entries: Object.keys(out).length,
    fromHeading: 0,
    derived: Object.keys(out).length,
    preserved: 0,
  };
}

module.exports = {
  writeManifest,
  listNotes,
};