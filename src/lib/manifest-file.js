'use strict';

/**
 * Load and validate the note manifest.
 *
 * The manifest is the single source of truth for page titles. It is a strict
 * index, not a second opinion: if a file exists without an entry, or an entry
 * points at a missing file, the build FAILS with the exact list of mismatches.
 *
 * That strictness is deliberate. The failure mode of a manifest is silent
 * drift — someone renames a file, forgets the entry, and a page quietly
 * disappears or a link breaks. Failing loudly converts that into a one-line
 * fix. Duplicate titles are rejected too, since two pages sharing a title makes
 * the index ambiguous.
 */

const fs = require('fs').promises;
const path = require('path');

/** Where the manifest lives, relative to the project root. */
const MANIFEST_FILENAME = 'notes.manifest.json';

/**
 * Load the manifest file.
 *
 * @param {string} notesDir Absolute path to the notes root.
 * @returns {Promise<{entries: Map<string, object>, filePath: string}>}
 */
async function loadManifest(notesDir) {
  const filePath = path.join(notesDir, MANIFEST_FILENAME);

  let raw;
  try {
    raw = await fs.readFile(filePath, 'utf-8');
  } catch {
    throw new Error(
      `Manifest not found: ${MANIFEST_FILENAME}\n` +
        'Create it, or run `node src/cli.js --write-manifest` to generate one from the notes tree.',
    );
  }

  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (error) {
    throw new Error(`Manifest is not valid JSON (${MANIFEST_FILENAME}): ${error.message}`);
  }

  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
    throw new Error(`Manifest must be a JSON object (${MANIFEST_FILENAME})`);
  }

  const entries = new Map();
  for (const [key, value] of Object.entries(parsed)) {
    if (key === '$schema' || key.startsWith('//')) continue; // comments/meta

    const entry = typeof value === 'string' ? { title: value } : value;

    if (!entry || typeof entry !== 'object') {
      throw new Error(`Manifest entry "${key}" must be a string or an object`);
    }
    if (typeof entry.title !== 'string' || entry.title.trim() === '') {
      throw new Error(`Manifest entry "${key}" needs a non-empty "title"`);
    }

    // Normalise the key to POSIX separators so Windows and CI agree.
    entries.set(key.split(path.sep).join('/'), {
      ...entry,
      title: entry.title.trim(),
    });
  }

  return { entries, filePath };
}

/**
 * Check the manifest against the files actually on disk.
 *
 * @param {Map<string, object>} entries
 * @param {string[]} relativePaths POSIX paths of every note file.
 * @returns {{missingTitles: string[], orphanTitles: string[], duplicates: object[]}}
 */
function validateManifest(entries, relativePaths) {
  const onDisk = new Set(relativePaths);

  // Files with no manifest entry.
  const missingTitles = relativePaths.filter((rel) => !entries.has(rel));

  // Manifest entries pointing at files that do not exist.
  const orphanTitles = [...entries.keys()].filter((key) => !onDisk.has(key));

  // Two files sharing a title makes the index ambiguous.
  const byTitle = new Map();
  for (const [rel, entry] of entries) {
    if (!onDisk.has(rel)) continue; // reported above instead
    const key = entry.title.toLowerCase();
    if (!byTitle.has(key)) byTitle.set(key, []);
    byTitle.get(key).push(rel);
  }

  const duplicates = [...byTitle.entries()]
    .filter(([, paths]) => paths.length > 1)
    .map(([title, paths]) => ({ title, paths }));

  return { missingTitles, orphanTitles, duplicates };
}

/**
 * Turn validation results into a single error, or null when everything is fine.
 *
 * @param {object} result
 * @returns {Error|null}
 */
function manifestError(result) {
  const { missingTitles, orphanTitles, duplicates } = result;
  if (!missingTitles.length && !orphanTitles.length && !duplicates.length) return null;

  const lines = [`Manifest is out of sync with the notes tree (${MANIFEST_FILENAME}):`];

  if (missingTitles.length) {
    lines.push('', `  ${missingTitles.length} file(s) with no manifest entry:`);
    for (const rel of missingTitles.slice(0, 15)) lines.push(`    + ${rel}`);
    if (missingTitles.length > 15) lines.push(`    ... and ${missingTitles.length - 15} more`);
  }

  if (orphanTitles.length) {
    lines.push('', `  ${orphanTitles.length} manifest entr(ies) with no file:`);
    for (const rel of orphanTitles.slice(0, 15)) lines.push(`    - ${rel}`);
    if (orphanTitles.length > 15) lines.push(`    ... and ${orphanTitles.length - 15} more`);
  }

  if (duplicates.length) {
    lines.push('', `  ${duplicates.length} duplicated title(s):`);
    for (const { title, paths } of duplicates.slice(0, 10)) {
      lines.push(`    "${title}"`);
      for (const p of paths) lines.push(`        ${p}`);
    }
  }

  lines.push('', 'Run `node src/cli.js --write-manifest` to regenerate.');
  return new Error(lines.join('\n'));
}

/**
 * Build a manifest from the notes tree, deriving a title for each file.
 *
 * Used by `--write-manifest` to bootstrap or repair the manifest. Existing
 * titles are preserved for files that still exist, so a regeneration never
 * discards hand-written titles.
 *
 * @param {string[]} relativePaths POSIX paths of every note file.
 * @param {Map<string, object>} [existing] Entries to preserve.
 * @param {(rel: string) => string} deriveTitle Fallback title builder.
 * @returns {object} Plain object ready to serialise.
 */
function buildManifestObject(relativePaths, existing, deriveTitle) {
  const out = {};
  for (const rel of [...relativePaths].sort()) {
    const kept = existing && existing.get(rel);
    out[rel] = { title: kept ? kept.title : deriveTitle(rel) };
  }
  return out;
}

module.exports = {
  MANIFEST_FILENAME,
  loadManifest,
  validateManifest,
  manifestError,
  buildManifestObject,
};
