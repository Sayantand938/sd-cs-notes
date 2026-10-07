'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

const { build } = require('../src/build');

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

test('builds a complete site and auto-generates manifest from filenames', async () => {
  const ws = makeWorkspace({
    'class-11/coma/semester-01/notes/unit-01/01-intro-eng.md': SAMPLE,
    'class-11/coma/semester-01/notes/unit-02/02-loops-eng.md': SAMPLE,
  });

  const result = await build({ config: configFor(ws), quiet: true });

  assert.equal(result.notes, 2);
  assert.equal(result.groups, 1);

  assert.ok(fs.existsSync(path.join(ws.outDir, 'class-11/coma/semester-01/notes/unit-01/01-intro-eng.html')));
  assert.ok(fs.existsSync(path.join(ws.outDir, 'class-11/coma/semester-01/notes/unit-02/02-loops-eng.html')));
  assert.ok(fs.existsSync(path.join(ws.outDir, 'index.html')));
  assert.ok(fs.existsSync(path.join(ws.outDir, '404.html')));
  assert.ok(fs.existsSync(path.join(ws.outDir, 'style.css')));
});

test('renders title derived purely from filename', async () => {
  const rel = 'class-11/coma/semester-01/notes/unit-01/01-intro.en.md';
  const ws = makeWorkspace({ [rel]: '# Heading Ignored\n\nBody' });
  await build({ config: configFor(ws), quiet: true });

  const html = fs.readFileSync(
    path.join(ws.outDir, 'class-11/coma/semester-01/notes/unit-01/01-intro.en.html'),
    'utf-8',
  );

  assert.match(html, /<title>Intro \(EN\)<\/title>/);
});

test('auto-creates manifest even if notes.manifest.json is missing', async () => {
  const ws = makeWorkspace({
    'class-11/coma/semester-01/notes/unit-01/01-intro-eng.md': SAMPLE,
  });

  const result = await build({ config: configFor(ws), quiet: true });
  assert.equal(result.notes, 1);
  assert.ok(fs.existsSync(path.join(ws.notesDir, 'notes.manifest.json')));
});

test('an empty notes tree builds without throwing', async () => {
  const ws = makeWorkspace({});
  const result = await build({ config: configFor(ws), quiet: true });
  assert.equal(result.notes, 0);
});

test('rebuilding wipes stale output', async () => {
  const ws = makeWorkspace({ 'class-11/coma/semester-01/notes/unit-01/01-intro-eng.md': SAMPLE });
  await build({ config: configFor(ws), quiet: true });

  const stale = path.join(ws.outDir, 'stale.html');
  fs.writeFileSync(stale, 'old', 'utf-8');

  await build({ config: configFor(ws), quiet: true });
  assert.equal(fs.existsSync(stale), false);
});