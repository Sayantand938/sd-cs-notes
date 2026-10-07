'use strict';

/** Filesystem discovery: find note sources and copy static assets. */

const fs = require('fs').promises;
const path = require('path');

/**
 * Recursively collect every file beneath `dir`.
 *
 * Traversal is breadth-first over directories and reads each directory's
 * entries in one pass, which is markedly faster than resolving every entry
 * through `Promise.all` on large trees.
 *
 * @param {string} dir
 * @returns {Promise<string[]>} Absolute file paths.
 */
async function walk(dir) {
  const files = [];
  const queue = [dir];

  while (queue.length > 0) {
    const current = queue.shift();
    const entries = await fs.readdir(current, { withFileTypes: true });

    for (const entry of entries) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        queue.push(full);
      } else if (entry.isFile()) {
        files.push(full);
      }
      // Symlinks and other special entries are intentionally skipped.
    }
  }

  return files;
}

/**
 * Collect Markdown sources beneath `dir`.
 *
 * @param {string} dir
 * @param {string[]} extensions Lower-case extensions including the dot.
 * @returns {Promise<string[]>} Sorted absolute paths.
 */
async function findMarkdownFiles(dir, extensions) {
  const all = await walk(dir);
  const wanted = new Set(extensions.map((e) => e.toLowerCase()));

  return all
    .filter((file) => wanted.has(path.extname(file).toLowerCase()))
    .sort();
}

/**
 * Copy configured static assets into the output directory.
 *
 * @param {Array<{from: string, to: string}>} assets
 * @param {string} outputDir
 * @returns {Promise<string[]>} Destination paths, relative to `outputDir`.
 */
async function copyAssets(assets, outputDir) {
  const copied = [];
  for (const asset of assets) {
    const dest = path.join(outputDir, asset.to);
    await fs.mkdir(path.dirname(dest), { recursive: true });
    await fs.copyFile(asset.from, dest);
    copied.push(asset.to);
  }
  return copied;
}

/** Empty a directory, creating it if absent. */
async function resetDir(dir) {
  await fs.rm(dir, { recursive: true, force: true });
  await fs.mkdir(dir, { recursive: true });
}

/** True when `target` exists and is a directory. */
async function isDirectory(target) {
  try {
    return (await fs.stat(target)).isDirectory();
  } catch {
    return false;
  }
}

module.exports = {
  walk,
  findMarkdownFiles,
  copyAssets,
  resetDir,
  isDirectory,
};
