'use strict';

/**
 * End-to-end build test.
 *
 * Creates a throwaway notes tree, runs the full build into a temp directory,
 * and asserts the resulting site. Uses only fs + os so it needs no fixtures
 * checked into the repo.
 */

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

const { build } = require('../src/build');

/** Create a temp workspace with the given files, returning its root. */
function makeWorkspace(files) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'sd-cs-notes-'));
  const notesDir = path.join(root, 'notes');

  for (const [rel, content] of Object.entries(files)) {
    const dest = path.join(notesDir, rel);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.writeFileSync(dest, content, 'utf-8');
  }

  return { root, notesDir, outDir: path.join(root, 'dist') };
}

/** Config for a temp workspace, pointing at the real templates/styles. */
function configFor(workspace) {
  const realConfig = require('../src/config');
  return {
    ...realConfig,
    root: workspace.root,
    notesDir: workspace.notesDir,
    outputDir: workspace.outDir,
  };
}

const SAMPLE = '## Heading\n\nFirst line description.\n\n| a | b |\n| - | - |\n| 1 | 2 |\n';

test('builds a complete site from a notes tree', async () => {
  const ws = makeWorkspace({
    'class-11/coma/semester-01/notes/unit-01/01-intro-eng.md': SAMPLE,
    'class-11/coma/semester-01/notes/unit-02/02-loops-eng.md': SAMPLE,
  });

  const result = await build({ config: configFor(ws), quiet: true });

  assert.equal(result.notes, 2);
  assert.equal(result.groups, 1);

  // Pages mirror the source layout, plus index and 404.
  assert.ok(fs.existsSync(path.join(ws.outDir, 'class-11/coma/semester-01/notes/unit-01/01-intro-eng.html')));
  assert.ok(fs.existsSync(path.join(ws.outDir, 'class-11/coma/semester-01/notes/unit-02/02-loops-eng.html')));
  assert.ok(fs.existsSync(path.join(ws.outDir, 'index.html')));
  assert.ok(fs.existsSync(path.join(ws.outDir, '404.html')));
  assert.ok(fs.existsSync(path.join(ws.outDir, 'style.css')));
});

test('renders the note title and content into the page', async () => {
  const ws = makeWorkspace({ 'class-11/coma/semester-01/notes/unit-01/01-intro-eng.md': SAMPLE });
  await build({ config: configFor(ws), quiet: true });

  const html = fs.readFileSync(
    path.join(ws.outDir, 'class-11/coma/semester-01/notes/unit-01/01-intro-eng.html'),
    'utf-8',
  );

  assert.match(html, /<title>01 Intro \(Eng\)<\/title>/);
  assert.match(html, /<h2>Heading<\/h2>/);
  assert.match(html, /First line description\./);
  // Tables must be wrapped for horizontal scrolling.
  assert.match(html, /<div class="table-wrapper"><table>/);
  // Local stylesheet is linked absolutely so it resolves at any depth.
  assert.match(html, /<link rel="stylesheet" href="\/style\.css">/);
});

test('index page lists notes grouped by class, subject and semester', async () => {
  const ws = makeWorkspace({
    'class-11/coma/semester-01/notes/unit-01/01-intro-eng.md': SAMPLE,
    'class-12/coms/semester-03/notes/unit-01/01-other-eng.md': SAMPLE,
  });
  await build({ config: configFor(ws), quiet: true });

  const html = fs.readFileSync(path.join(ws.outDir, 'index.html'), 'utf-8');

  assert.match(html, /Class 11/);
  assert.match(html, /COMA/);
  assert.match(html, /Class 12/);
  assert.match(html, /COMS/);
  assert.match(html, /Notes - Unit 01/);
  assert.match(html, /href="\/class-11\/coma\/semester-01\/notes\/unit-01\/01-intro-eng\.html"/);
});

test('a note named 404.md becomes the custom 404 page', async () => {
  const ws = makeWorkspace({
    'class-11/coma/semester-01/notes/unit-01/01-intro-eng.md': SAMPLE,
    '404.md': '## Custom not found\n\nNothing here.\n',
  });

  const result = await build({ config: configFor(ws), quiet: true });
  assert.equal(result.notes, 1); // the 404 note is not counted as content

  const html = fs.readFileSync(path.join(ws.outDir, '404.html'), 'utf-8');
  assert.match(html, /404 – Page Not Found/);
  assert.match(html, /Go back home/);
});

test('an empty notes tree builds without throwing', async () => {
  const ws = makeWorkspace({});
  fs.mkdirSync(ws.notesDir, { recursive: true });

  const result = await build({ config: configFor(ws), quiet: true });
  assert.equal(result.notes, 0);
});

test('a missing notes directory produces a clear error', async () => {
  const ws = makeWorkspace({});
  await assert.rejects(
    () => build({ config: configFor(ws), quiet: true }),
    /Notes directory not found/,
  );
});

test('rebuilding wipes stale output', async () => {
  const ws = makeWorkspace({ 'class-11/coma/semester-01/notes/unit-01/01-intro-eng.md': SAMPLE });
  await build({ config: configFor(ws), quiet: true });

  const stale = path.join(ws.outDir, 'stale.html');
  fs.writeFileSync(stale, 'old', 'utf-8');

  await build({ config: configFor(ws), quiet: true });
  assert.equal(fs.existsSync(stale), false);
});
