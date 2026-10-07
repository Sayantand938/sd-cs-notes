'use strict';

/**
 * Build the nested structure that drives the index page.
 *
 * Shape: group (class + subject + semester) -> category (with optional unit)
 * -> files. Groups, categories and files are all sorted deterministically so
 * the generated index is stable across builds.
 */

/**
 * @typedef {object} ManifestFile
 * @property {string} title
 * @property {string} description
 * @property {string} path  Site-absolute URL path, e.g. "/class-11/.../x.html"
 * @property {string[]} tags
 */

/**
 * @param {object[]} notes Note records from lib/notes.
 * @param {object} [options]
 * @param {(note: object) => string} [options.hrefFor] Custom URL builder.
 * @returns {Array<{class: string, subject: string, semester: string,
 *                  categories: Array<{name: string, files: ManifestFile[]}>}>}
 */
function buildManifest(notes, options = {}) {
  const hrefFor =
    options.hrefFor ||
    ((note) => `/${note.relativePath.replace(/\.(md|markdown)$/i, '.html')}`);

  /** @type {Map<string, {class: string, subject: string, semester: string, categories: Map<string, ManifestFile[]>}>} */
  const groups = new Map();

  for (const note of notes) {
    const groupKey = `${note.className} | ${note.subject} | ${note.semester}`;

    if (!groups.has(groupKey)) {
      groups.set(groupKey, {
        class: note.className,
        subject: note.subject,
        semester: note.semester,
        categories: new Map(),
      });
    }

    const group = groups.get(groupKey);
    const categoryKey = note.unit ? `${note.category} - ${note.unit}` : note.category;

    if (!group.categories.has(categoryKey)) {
      group.categories.set(categoryKey, []);
    }

    group.categories.get(categoryKey).push({
      title: note.title,
      description: note.description,
      path: hrefFor(note),
      tags: note.tags,
    });
  }

  return [...groups.values()]
    .map((group) => {
      const categories = [...group.categories.entries()]
        .map(([name, files]) => ({
          name,
          files: [...files].sort((a, b) => a.path.localeCompare(b.path)),
        }))
        .sort((a, b) => a.name.localeCompare(b.name));

      return {
        class: group.class,
        subject: group.subject,
        semester: group.semester,
        categories,
        // Used by the template to label the disclosure and to decide whether
        // the group should start collapsed.
        noteCount: categories.reduce((total, category) => total + category.files.length, 0),
      };
    })
    .sort((a, b) => {
      if (a.class !== b.class) return a.class.localeCompare(b.class);
      if (a.subject !== b.subject) return a.subject.localeCompare(b.subject);
      return a.semester.localeCompare(b.semester);
    });
}

/**
 * Decide whether a group should start expanded.
 *
 * Counting every note would collapse a semester simply because it holds many
 * practice papers, which is not a browsing problem — practice papers are
 * reference material you look up, not material you read front to back. So the
 * decision is based on the primary categories only (everything not listed in
 * `bulkCategories`).
 *
 * @param {object} group Manifest group with `categories`.
 * @param {object} [options]
 * @param {number} [options.threshold] Max primary notes for an open group.
 * @param {string[]} [options.bulkCategories] Category names to exclude.
 * @returns {boolean}
 */
function shouldOpenByDefault(group, options = {}) {
  const { threshold = 15, bulkCategories = [] } = options;
  const bulk = new Set(bulkCategories.map((name) => name.toLowerCase()));

  const primaryNotes = group.categories
    .filter((category) => {
      // Category names may carry a " - Unit NN" suffix; compare the base name.
      const base = category.name.split(' - ')[0].toLowerCase();
      return !bulk.has(base);
    })
    .reduce((total, category) => total + category.files.length, 0);

  return primaryNotes <= threshold;
}

module.exports = { buildManifest, shouldOpenByDefault };
