# SD CS Notes

A small static site generator that turns a folder of Markdown study notes into
a searchable, printable HTML site with a dark theme.

Built on Node.js with [Marked](https://marked.js.org/) for Markdown and
[Handlebars](https://handlebarsjs.com/) for templating. No build tooling, no
bundler, two runtime dependencies.

Managed with **pnpm** (`packageManager` is pinned in `package.json`).

---

## Quick start

```bash
pnpm install
pnpm build     # writes dist/
pnpm preview   # build, then serve dist/ locally
```

---

## How notes are organised

**Metadata comes from the folder path — there is no frontmatter.**

A note's location under `notes/` determines the class, subject, semester,
category and unit it is grouped under on the index page:

```
notes/
└── class-11/                        → Class 11
    └── computer-science/            → COMS         (see subjectLabels below)
        └── semester-01/             → Semester 01
            ├── notes/               → Notes
            │   └── unit-01/         → Unit 01       (any folder starting "unit")
            │       └── 01-computer-system-and-organization-eng.md
            └── practice-papers/     → Practice Papers
                └── unit-03/
                    └── unit-03-01-practice-paper-eng.md
```

Anything beyond the fifth level still renders; it just doesn't affect grouping.
Missing levels fall back to `General`.

### Subject display names

A subject folder is shown upper-cased by default, so `computer-science/` would
render as `COMPUTER-SCIENCE`. Map it to a nicer label in
[`src/config.js`](src/config.js):

```js
subjectLabels: {
  'computer-science': 'COMS',
  coma: 'COMA',
}
```

This keeps folder names readable on disk while the index shows course codes.
Unmapped folders just fall back to upper-casing.

---

## Titles: the manifest

Page titles live in **`notes/notes.manifest.json`**, keyed by path:

```json
{
  "class-11/computer-science/semester-01/notes/unit-01/04-boolean-algebra-eng.md": {
    "title": "Boolean Algebra (Eng)"
  }
}
```

This means **filenames never affect what a reader sees**, so files can be named
for convenience — short, sortable, easy to type — while the site shows proper
titles. It also lets two files share a name in different folders.

### The manifest is strict, on purpose

The build **fails** if the manifest and the notes tree disagree in any way:

| Problem | Result |
| --- | --- |
| A `.md` file with no manifest entry | Build fails, file listed |
| A manifest entry with no matching file | Build fails, entry listed |
| Two entries with the same title | Build fails, both listed |

A manifest's natural failure mode is *silent drift* — you rename a file, forget
the entry, and a page quietly disappears. Failing loudly turns that into a
one-line fix. To repair after adding or renaming notes:

```bash
node src/cli.js --write-manifest
```

That regenerates entries for new files while **preserving every existing
title**, so hand-written titles are never lost.

### How titles are seeded

`--write-manifest` uses, in order:

1. The file's own `# Heading`, if it appears in the first few lines and reads
   like a title. A `#` further down is a section heading, not a title.
2. Otherwise a title derived from the path.

Emoji and "study guide" boilerplate are stripped, and a `Computer Networks:`
style prefix is removed where the remainder still reads as a title.

Once written, titles are **yours** — edit the manifest directly and the build
will use them verbatim.

### File naming

The filename becomes the page title:

| Filename | Title |
| --- | --- |
| `01-computer-system-and-organization-eng.md` | 01 Computer System And Organization (Eng) |
| `7-pointers.md` | 07 Pointers |
| `02-network-types-beng.md` | 02 Network Types (Beng) |

- A leading number is normalised to two digits (`7-` → `07`).
- A trailing `-eng` / `-beng` becomes a `(Eng)` / `(Beng)` suffix.
- Remaining words are title-cased.

Filenames must be unique within the site, since the index shows the title only.
Where the same paper exists for several units, prefix the unit
(`unit-03-01-practice-paper-eng.md`) so the titles stay distinguishable.

The first non-blank, non-heading line of the note becomes its description on
the index page. The file's modification time supplies the date.

### Special files

- **`404.md`** anywhere in the tree becomes the site's 404 page. If absent, a
  built-in 404 template is used.

### Markdown support

- **Math** — `$inline$` and `$$display$$` via KaTeX.
- **Diagrams** — fenced ` ```mermaid ` blocks render as diagrams.
- **Tables** — automatically wrapped so wide tables scroll on mobile.
- **Code** — syntax-highlighted via highlight.js.
- **MCQ options** — option lines written without blank lines between them
  (`A) …`, `B) …`) are rendered on separate lines. Markdown would otherwise
  join them into one paragraph, since consecutive lines form a single
  paragraph. Fenced code blocks and tables are left untouched.

---

## Writing questions

Practice papers are a **single Markdown file** holding prose, section headings,
and questions — MCQ and SAQ together. There is no separate data file.

```markdown
## Section 1: Basic Computer Organisation (Questions 1 to 20)

### Q1 (mcq)

What does CPU stand for?

- A) Central Processing Unit
- B) Computer Personal Unit
- C) Central Program Unit
- D) Central Processing Utility

**Answer:** A

### Q2 (saq)

Why is serial communication preferred over long distances?

**Answer:**
Because parallel links suffer **skew** — bits sent together along separate
wires arrive at slightly different times, so the receiver reads them out of
order over a long cable.
```

### The rules

| Element | How to write it |
| --- | --- |
| Question heading | `### Q12 (mcq)` or `### Q12 (saq)`. Type defaults to `mcq`. |
| Question text | The first non-blank line after the heading. |
| Code the question refers to | A normal fenced block between the question and its options. |
| Options | A Markdown list: `- A) text`. Two to four is typical. |
| Answer (MCQ) | `**Answer:** A` — the option letter. |
| Answer (SAQ) | `**Answer:**` on its own line, then the prose answer. |
| Section grouping | A `##` heading before the questions it covers. |

SAQ answers accept full Markdown: paragraphs, lists, tables (scroll-wrapped
like note tables), and fenced code blocks.

**Answers are always visible.** For MCQ the correct option is highlighted and
an `Answer: A` line closes the question; for SAQ the answer is printed in full
under an "Answer" label. A question with no answer is rendered with a visible
"Answer: not recorded" flag, so nothing is silently published as answered.

### Why options are list items

Writing options as `- A) text` rather than bare `A) text` means a paragraph
that happens to contain `A)` — for example *"see option A) for details"* — can
never be mistaken for an option. The parser still accepts bare `A)` lines, so
older papers keep working.

### Why the answer is a field

An explicit `**Answer:**` line means exactly one answer per question, which the
build can validate. The earlier convention marked the answer with a `✅` inside
the option text, and it drifted: an audit found 15 disagreements with the
answer keys, including an answer that had been marked and then corrected in a
note underneath. A structured field cannot drift that way.

### Checking a paper

The build reports nothing at runtime, but the format is validated by tests:

```bash
pnpm test
```

`tests/question-markdown.test.js` covers the parser, including missing answers,
answer letters outside the option range, and questions with too few options.
`parseQuestions()` returns an `errors` array listing any such problems, which
is the hook for adding a build-time report later.

KaTeX, Mermaid and highlight.js load from CDN, so note pages need a network
connection for those three features. Plain text and tables work offline.

---

## The index page

Notes are grouped by class, subject and semester. Each group is a collapsible
`<details>` element, so it works with no JavaScript and stays keyboard
accessible. You also get a live filter box and an expand/collapse-all toggle.

**Groups start folded**, so the index opens as a short table of contents you
click into. Note content stays in the page either way, so the filter box and
the browser's own Ctrl+F still find notes inside folded groups — searching
force-opens whichever group holds the match.

To change the default, edit
[`src/config.js`](src/config.js):

```js
indexCollapse: {
  defaultExpanded: 'none',   // 'none' | 'all' | 'small'
  openPrimaryThreshold: 15,  // used by 'small'
  bulkCategories: ['Practice Papers'],
},
```

- `'none'` — every group folded (the default)
- `'all'` — every group expanded, as one long page
- `'small'` — only groups whose *unit notes* fit the threshold stay expanded.
  Practice papers are excluded from that count, since a semester with twenty
  papers is not harder to browse than one with five.

---

## Project layout

```
src/
├── config.js            All paths and options, in one place
├── cli.js               Command-line entry point (pnpm build)
├── build.js             Orchestration: discover → render → write
├── write-manifest.js    Generates notes.manifest.json
├── lib/
│   ├── fs-utils.js      Directory walking, asset copying
│   ├── notes.js         Reading notes, deriving metadata from paths
│   ├── text.js          Pure helpers: titles, names, HTML escaping
│   ├── title.js         Derives a title when the manifest has none
│   ├── manifest-file.js Loads and strictly validates the title manifest
│   ├── render.js        Markdown → HTML, mermaid, MCQ options, tables
│   ├── question-markdown.js  Parses question blocks (MCQ + SAQ)
│   ├── questions.js     Renders parsed questions to HTML
│   ├── manifest.js      Grouping/sorting for the index page
│   ├── templates.js     Handlebars compilation and partials
│   ├── html.js          Shared HTML post-processing (table wrapping)
│   └── writer.js        Output path mapping and file writing
├── templates/
│   ├── page.html        A single note
│   ├── index.html       The manifest index
│   ├── 404.html         Fallback 404
│   └── partials/        Shared head, layout, vendor scripts, filter script
└── styles/
    └── style.css        The single stylesheet

notes/                   Your Markdown (source of truth)
tests/                   Unit + end-to-end tests
dist/                    Generated output (git-ignored)
```

Each `lib/` module is independent and unit-tested, so a change in one place
can't quietly break another.

---

## Commands

| Command | What it does |
| --- | --- |
| `pnpm build` | Generate the site into `dist/` |
| `pnpm serve` | Serve an existing `dist/` (no rebuild) |
| `pnpm clean` | Delete `dist/` |
| `pnpm preview` | Build, then serve `dist/` |
| `pnpm test` | Run the test suite |

To regenerate the title manifest after adding or renaming notes:

```bash
node src/cli.js --write-manifest
```

The preview server is built in (`src/serve.js`) and uses only Node's standard
library, so it needs no downloads and works offline. It serves on
`http://127.0.0.1:3000`, falling back to the next free port if that one is
taken, and it renders the generated 404 page for unknown paths.

`preview` builds and serves in a single Node process rather than chaining two
shell commands, so it behaves identically in PowerShell, cmd, and bash
(`&&` is not valid in Windows PowerShell 5.1).

Override the port or host with environment variables:

```bash
PORT=8080 pnpm serve
```

On Windows PowerShell 5.1, set them with `$env:` instead:

```powershell
$env:PORT=8080; pnpm serve
```

### Build options

```bash
node src/cli.js --help

  -n, --notes-dir <path>   Markdown source directory (default: notes/)
  -o, --out-dir <path>     Output directory (default: dist/)
  -q, --quiet              Only print errors and the final summary
  -h, --help               Show this message
```

Paths and behaviour can also be changed in [`src/config.js`](src/config.js);
CLI flags override the file.

---

## Deployment

Vercel builds the site from source on every push, so `dist/` is never
committed and the live site cannot drift from your notes.

`vercel.json`:

```json
{
  "buildCommand": "pnpm build",
  "outputDirectory": "dist",
  "installCommand": "pnpm install --frozen-lockfile"
}
```

Because Vercel runs the build itself, **`notes/` must be committed.** The same
setup works on Netlify or GitHub Pages with an equivalent build command.

---

## Development

```bash
pnpm test
```

The suite covers the pure helpers, manifest grouping, metadata derivation,
Markdown rendering (including mermaid and table handling), and a full
end-to-end build against a temporary notes tree.

[`verify-equivalence.js`](verify-equivalence.js) compares a build against a
reference output tree, normalising formatting and the known intentional markup
changes. It was used to confirm this refactor changed no note content.

---

## License

ISC
