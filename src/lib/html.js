'use strict';

/** Shared HTML post-processing used by notes and question answers alike. */

/**
 * Wrap every `<table>` in a scroll container so wide tables scroll on narrow
 * screens instead of overflowing the page.
 *
 * @param {string} html
 * @returns {string}
 */
function wrapTables(html) {
  return html
    .replace(/<table(\s|>)/g, '<div class="table-wrapper"><table$1')
    .replace(/<\/table>/g, '</table></div>');
}

module.exports = { wrapTables };
