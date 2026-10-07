'use strict';

/**
 * Static site generator.
 *
 * Pipeline: discover -> read/describe -> render -> write -> index.
 *
 * Each stage lives in its own module under `lib/` so it can be tested in
 * isolation; this file is only orchestration.
 */

const path = require('path');

const defaultConfig = require('./config');
const fsUtils = require('./lib/fs-utils');
const notes = require('./lib/notes');
const { renderMarkdown } = require('./lib/render');
const { buildManifest, shouldOpenByDefault } = require('./lib/manifest');
const templates = require('./lib/templates');
const writer = require('./lib/writer');

/**
 * Run a full build.
 *
 * @param {object} [options]
 * @param {object} [options.config] Override any key from config.js.
 * @param {boolean} [options.quiet] Suppress per-file progress output.
 * @param {(message: string) => void} [options.log] Sink for progress messages.
 * @returns {Promise<{pages: string[], groups: number, notes: number, assets: string[]}>}
 */
async function build(options = {}) {
  const config = { ...defaultConfig, ...(options.config || {}) };
  const log = options.quiet ? () => {} : options.log || ((message) => console.log(message));

  if (!(await fsUtils.isDirectory(config.notesDir))) {
    throw new Error(
      `Notes directory not found: ${config.notesDir}\n` +
        'Create it and add Markdown notes, or point --notes-dir at an existing folder.',
    );
  }

  // 1. Fresh output directory + static assets.
  await fsUtils.resetDir(config.outputDir);
  log('🧹 Cleaned output directory');

  const assets = await fsUtils.copyAssets(config.assets, config.outputDir);
  if (assets.length > 0) log(`📁 Copied ${assets.length} asset(s)`);

  // 2. Templates and partials.
  const partialNames = await templates.registerPartials(config.templates.partials);
  log(`🧩 Registered ${partialNames.length} partial(s)`);

  const [pageTemplate, indexTemplate, notFoundTemplate] = await Promise.all([
    templates.compileTemplate(config.templates.page),
    templates.compileTemplate(config.templates.index),
    templates.compileTemplate(config.templates.notFound),
  ]);

  // Note pages need KaTeX/Mermaid/highlight.js; the index page does not.
  // Split around style.css to match the original templates' element order.
  const pageHeadBeforeStyle = templates.renderPartial('vendor-scripts');
  const pageHeadAfterStyle = templates.renderPartial('vendor-init');

  // 3. Discover and describe notes.
  const files = await fsUtils.findMarkdownFiles(config.notesDir, config.markdownExtensions);
  if (files.length === 0) {
    log(`⚠️  No Markdown files found in ${path.relative(config.root, config.notesDir)}`);
    return { pages: [], groups: 0, notes: 0, assets };
  }

  const allNotes = await notes.readNotes(files, config.notesDir, {
    subjectLabels: config.subjectLabels,
  });
  log(`📄 Processing ${allNotes.length} file(s)...`);

  // 4. Render each note, separating out a custom 404 if one is present.
  const notFoundNotes = allNotes.filter((note) =>
    writer.isNotFoundNote(note, config.notFoundBasename),
  );
  const contentNotes = allNotes.filter(
    (note) => !writer.isNotFoundNote(note, config.notFoundBasename),
  );

  const rendered = contentNotes.map((note) => ({
    note,
    html: pageTemplate({
      title: note.title,
      headBeforeStyle: pageHeadBeforeStyle,
      headAfterStyle: pageHeadAfterStyle,
      content: renderMarkdown(note.content, { questionBank: note.questionBank }),
    }),
  }));

  const pages = await Promise.all(
    rendered.map(async ({ note, html }) => {
      const relativePath = writer.outputPathFor(note);
      await writer.writePage(config.outputDir, relativePath, html);
      log(`✅ ${note.relativePath}`);
      return relativePath;
    }),
  );

  // 5. Manifest-driven index page.
  const manifest = buildManifest(contentNotes);

  // Decide which groups start expanded (see config.indexCollapse).
  const { defaultExpanded, openPrimaryThreshold, bulkCategories } = config.indexCollapse;
  const groups = manifest.map((group) => ({
    ...group,
    openByDefault: shouldOpenByDefault(group, {
      mode: defaultExpanded,
      threshold: openPrimaryThreshold,
      bulkCategories,
    }),
  }));

  const indexHtml = indexTemplate({
    title: config.indexPage.title,
    description: config.indexPage.description,
    manifest: groups,
    totalNotes: contentNotes.length,
  });
  await writer.writePage(config.outputDir, 'index.html', indexHtml);
  log(`🏠 Generated index.html (${manifest.length} group(s))`);

  // 6. 404 page: the custom note wins, otherwise the built-in template.
  if (notFoundNotes.length > 0) {
    const note = notFoundNotes[0];
    const html = pageTemplate({
      title: '404 – Page Not Found',
      headBeforeStyle: pageHeadBeforeStyle,
      headAfterStyle: pageHeadAfterStyle,
      content: '<p><a href="/">Go back home</a></p>',
    });
    await writer.writePage(config.outputDir, '404.html', html);
    log('🚫 Generated 404.html from custom note');
  } else {
    const html = notFoundTemplate({
      title: '404 – Page Not Found',
      message: "The page you're looking for doesn't exist.",
    });
    await writer.writePage(config.outputDir, '404.html', html);
    log('🚫 Generated default 404.html');
  }

  return {
    pages: [...pages, 'index.html', '404.html'],
    groups: manifest.length,
    notes: contentNotes.length,
    assets,
  };
}

module.exports = { build };
