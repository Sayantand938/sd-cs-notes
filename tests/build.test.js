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
const { MANIFEST_FILENAME } = require('../src/lib/manifest-file');
const { deriveTitle } = require('../src/lib/title');

/**
 * Create a temp workspace with the given files, returning its root.
 *
 * A manifest is written automatically, since the build requires one and treats
 * any mismatch as a failure. Pass `noManifest` to test that failure.
 */
function makeWorkspace(files, options = {}) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'sd-cs-notes-'));
  const notesDir = path.join(root, 'notes');

  for (const [rel, content] of Object.entries(files)) {
    const dest = path.join(notesDir, rel);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.writeFileSync(dest, content, 'utf-8');
  }

  if (!options.noManifest) {
    const manifest = {};
    for (const rel of Object.keys(files)) {
      manifest[rel] = { title: options.titles?.[rel] || deriveTitle(rel) };
    }
    fs.mkdirSync(notesDir, { recursive: true });
    fs.writeFileSync(
      path.join(notesDir, MANIFEST_FILENAME),
      JSON.stringify(manifest, null, 2),
      'utf-8',
    );
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

test('renders the title from the manifest, not the filename', async () => {
  const rel = 'class-11/coma/semester-01/notes/unit-01/01-intro-eng.md';
  const ws = makeWorkspace({ [rel]: SAMPLE }, { titles: { [rel]: 'Custom Manifest Title' } });
  await build({ config: configFor(ws), quiet: true });

  const html = fs.readFileSync(
    path.join(ws.outDir, 'class-11/coma/semester-01/notes/unit-01/01-intro-eng.html'),
    'utf-8',
  );

  assert.match(html, /<title>Custom Manifest Title<\/title>/);
  assert.match(html, /<h2>Heading<\/h2>/);
  assert.match(html, /First line description\./);
  // Tables must be wrapped for horizontal scrolling.
  assert.match(html, /<div class="table-wrapper"><table>/);
  // Local stylesheet is linked absolutely so it resolves at any depth.
  assert.match(html, /<link rel="stylesheet" href="\/style\.css">/);
});

test('a file with no manifest entry fails the build', async () => {
  const ws = makeWorkspace({ 'class-11/coma/semester-01/notes/unit-01/01-intro-eng.md': SAMPLE });

  // Add a file the manifest does not know about.
  const extra = path.join(ws.notesDir, 'class-11/coma/semester-01/notes/unit-01/02-extra-eng.md');
  fs.writeFileSync(extra, SAMPLE, 'utf-8');

  await assert.rejects(
    () => build({ config: configFor(ws), quiet: true }),
    /no manifest entry/,
  );
});

test('a manifest entry with no file fails the build', async () => {
  const ws = makeWorkspace({ 'class-11/coma/semester-01/notes/unit-01/01-intro-eng.md': SAMPLE });

  const manifestPath = path.join(ws.notesDir, MANIFEST_FILENAME);
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
  manifest['class-11/coma/semester-01/notes/unit-01/ghost.md'] = { title: 'Ghost' };
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf-8');

  await assert.rejects(
    () => build({ config: configFor(ws), quiet: true }),
    /no file/,
  );
});

test('duplicate manifest titles fail the build', async () => {
  const a = 'class-11/coma/semester-01/notes/unit-01/01-intro-eng.md';
  const b = 'class-11/coma/semester-01/notes/unit-02/02-loops-eng.md';
  const ws = makeWorkspace({ [a]: SAMPLE, [b]: SAMPLE }, { titles: { [a]: 'Same', [b]: 'Same' } });

  await assert.rejects(
    () => build({ config: configFor(ws), quiet: true }),
    /duplicated title/,
  );
});

test('a missing manifest fails with regeneration advice', async () => {
  const ws = makeWorkspace(
    { 'class-11/coma/semester-01/notes/unit-01/01-intro-eng.md': SAMPLE },
    { noManifest: true },
  );

  await assert.rejects(
    () => build({ config: configFor(ws), quiet: true }),
    /Manifest not found/,
  );
});

test('index page groups by class, subject, semester, unit and kind', async () => {
  const ws = makeWorkspace({
    'class-11/coms/sem-1/unit-01-computer-organization/notes/01-intro.en.md': SAMPLE,
    'class-11/coms/sem-1/unit-01-computer-organization/questions/01-intro.en.md': SAMPLE,
    'class-12/coms/sem-3/unit-01-other/notes/01-other.en.md': SAMPLE,
  });
  await build({ config: configFor(ws), quiet: true });

  const html = fs.readFileSync(path.join(ws.outDir, 'index.html'), 'utf-8');

  assert.match(html, /Class 11/);
  assert.match(html, /COMS/);
  assert.match(html, /Sem 1/);
  assert.match(html, /Class 12/);
  // The unit carries its topic, and notes/questions sit inside it.
  assert.match(html, /Notes - Unit 01 Computer Organization/);
  assert.match(html, /Questions - Unit 01 Computer Organization/);
  assert.match(
    html,
    /href="\/class-11\/coms\/sem-1\/unit-01-computer-organization\/notes\/01-intro\.en\.html"/,
  );
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
  // Build a workspace, then remove the notes directory entirely.
  const ws = makeWorkspace({ 'class-11/coma/semester-01/notes/unit-01/01-intro-eng.md': SAMPLE });
  fs.rmSync(ws.notesDir, { recursive: true, force: true });

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
