'use strict';

/**
 * Build configuration.
 *
 * All paths are resolved relative to the project root, so the build can be
 * invoked from any working directory. Override any of these without editing
 * this file by passing a CLI flag (see src/cli.js) or an environment variable.
 */

const path = require('path');

const ROOT = path.resolve(__dirname, '..');

module.exports = {
  /** Project root — everything else is derived from this. */
  root: ROOT,

  /** Where the Markdown notes live. */
  notesDir: path.join(ROOT, 'notes'),

  /** Where the generated site is written. Wiped on every build. */
  outputDir: path.join(ROOT, 'dist'),

  /** Static assets copied verbatim into the output directory. */
  assets: [
    { from: path.join(ROOT, 'src', 'styles', 'style.css'), to: 'style.css' },
  ],

  /** Handlebars template files. */
  templates: {
    page: path.join(ROOT, 'src', 'templates', 'page.html'),
    index: path.join(ROOT, 'src', 'templates', 'index.html'),
    notFound: path.join(ROOT, 'src', 'templates', '404.html'),
    partials: path.join(ROOT, 'src', 'templates', 'partials'),
  },

  /** Extensions treated as note sources. */
  markdownExtensions: ['.md', '.markdown'],

  /**
   * A note whose basename matches this (case-insensitive) becomes the site's
   * 404 page instead of a normal page.
   */
  notFoundBasename: '404',

  /** Directory names that are only grouping metadata, never content. */
  indexPage: {
    title: 'CS Notes Manifest',
    description: 'Complete structured index of all study materials.',
  },

  /**
   * Display labels for subject folders.
   *
   * Keys are folder names (lower-cased); values are what the index shows.
   * Without an entry the folder name is upper-cased, so `coma/` would render
   * as "COMA". Add entries here to control presentation without renaming
   * folders on disk.
   */
  subjectLabels: {
    'computer-science': 'COMS',
    coma: 'COMA',
    coms: 'COMS',
  },
};
