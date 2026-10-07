'use strict';

/** Handlebars setup: compile the templates and register the partials. */

const fs = require('fs').promises;
const path = require('path');
const Handlebars = require('handlebars');

/**
 * Register every `.html` file in `partialsDir` as a partial named after its
 * basename (without extension), e.g. `layout.html` -> `{{> layout}}`.
 */
async function registerPartials(partialsDir) {
  let entries;
  try {
    entries = await fs.readdir(partialsDir, { withFileTypes: true });
  } catch {
    return [];
  }

  const names = [];
  const sources = await Promise.all(
    entries
      .filter((entry) => entry.isFile() && entry.name.endsWith('.html'))
      .map(async (entry) => ({
        name: path.basename(entry.name, '.html'),
        source: await fs.readFile(path.join(partialsDir, entry.name), 'utf-8'),
      })),
  );

  for (const { name, source } of sources) {
    Handlebars.registerPartial(name, source);
    names.push(name);
  }

  return names.sort();
}

/**
 * Compile a template file.
 * @param {string} filePath
 * @returns {Promise<HandlebarsTemplateDelegate>}
 */
async function compileTemplate(filePath) {
  const source = await fs.readFile(filePath, 'utf-8');
  return Handlebars.compile(source);
}

/**
 * Render a registered partial to a string.
 *
 * Partials registered from source text are stored uncompiled, so they are
 * compiled here before invocation.
 *
 * @param {string} name Partial name, e.g. "vendor-scripts".
 * @param {object} [context]
 * @returns {string}
 */
function renderPartial(name, context = {}) {
  const partial = Handlebars.partials[name];
  if (partial === undefined) {
    throw new Error(`Unknown partial: ${name}`);
  }
  const compiled = typeof partial === 'function' ? partial : Handlebars.compile(partial);
  return compiled(context);
}

module.exports = { registerPartials, compileTemplate, renderPartial, Handlebars };
