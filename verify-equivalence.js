// Final semantic equivalence check.
//
// Normalizes the formatting differences introduced by the refactor and applies
// the two deliberate markup changes, then verifies every generated page matches
// the pre-refactor baseline. Any remaining difference is a real regression.
const fs = require('fs');
const path = require('path');

const [baselineDir, currentDir] = process.argv.slice(2);

function walk(dir, base = dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, base, acc);
    else acc.push(path.relative(base, full).split(path.sep).join('/'));
  }
  return acc;
}

// Deliberate change 1: nav inline styles -> class.
const NAV_OLD = '<nav style="margin-bottom: 2em; padding-bottom: 0.8em; border-bottom: 1px solid #333;">';
const NAV_NEW = '<nav class="page-nav">';
const NAV_LINK_OLD = '<a href="/" style="font-size: 0.95em; color: #6cacf0; text-decoration: none;">';
const NAV_LINK_NEW = '<a href="/">';

// Deliberate change 3: index separators -> classes.
const SEP_OLD = '<span style="color: #666;">';
const SEP_NEW = '<span class="group-sep">';
const SEMESTER_OLD = '<span style="color: #ccc;">';
const SEMESTER_NEW = '<span class="group-semester">';

// Deliberate change 4: the index's <style> block moved into style.css, and a
// stray HTML comment was dropped.
const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// Deliberate change 2: the 404 page now uses the shared head partial, so it
// gains the notranslate meta and the font link (the old standalone 404 had
// neither). Strip those from the new 404 before comparing.
function canon(html, is404) {
  let out = html
    .replace(/\r\n/g, '\n')
    .replace(new RegExp(escapeRe(NAV_OLD), 'g'), NAV_NEW)
    .replace(new RegExp(escapeRe(NAV_LINK_OLD), 'g'), NAV_LINK_NEW)
    .replace(new RegExp(escapeRe(SEP_OLD), 'g'), SEP_NEW)
    .replace(new RegExp(escapeRe(SEMESTER_OLD), 'g'), SEMESTER_NEW)
    .replace(/<!--.*?-->/g, '');

  if (is404) {
    out = out
      .replace(/<meta name="google" content="notranslate">/, '')
      .replace(/<link href="https:\/\/fonts\.googleapis\.com[^>]*>/, '');
  }

  return out
    .replace(/\s+/g, ' ')
    .replace(/>\s+</g, '><')
    .trim();
}

const files = walk(baselineDir).sort();
const diffs = [];

for (const rel of files) {
  const cur = path.join(currentDir, rel);
  if (!fs.existsSync(cur)) { diffs.push([rel, 'MISSING']); continue; }

  const is404 = path.basename(rel) === '404.html';
  const a = canon(fs.readFileSync(path.join(baselineDir, rel), 'utf8'), is404);
  const b = canon(fs.readFileSync(cur, 'utf8'), is404);

  if (a !== b) {
    let i = 0;
    while (i < a.length && i < b.length && a[i] === b[i]) i++;
    diffs.push([rel, `@${i}: ${JSON.stringify(a.slice(i, i + 80))}\n        vs ${JSON.stringify(b.slice(i, i + 80))}`]);
  }
}

console.log(`files compared            : ${files.length}`);
console.log(`equivalent after refactor : ${files.length - diffs.length}`);
console.log(`unexpected differences    : ${diffs.length}`);
for (const [rel, why] of diffs.slice(0, 8)) console.log(`  ${rel} ${why}`);
process.exitCode = diffs.length === 0 ? 0 : 1;
