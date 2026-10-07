# SD CS Notes

A small static site generator that turns a folder of Markdown study notes into
a searchable, printable HTML site with a dark theme.

Built on Node.js with [Marked](https://marked.js.org/) for Markdown and
[Handlebars](https://handlebarsjs.com/) for templating. No build tooling, no
bundler, two runtime dependencies.

---

## Quick start

```bash
npm install
npm run build     # writes dist/
npm run preview   # build, then serve dist/ locally
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

KaTeX, Mermaid and highlight.js load from CDN, so note pages need a network
connection for those three features. Plain text and tables work offline.

---

## Project layout

```
src/
├── config.js            All paths and options, in one place
├── cli.js               Command-line entry point (npm run build)
├── build.js             Orchestration: discover → render → write
├── lib/
│   ├── fs-utils.js      Directory walking, asset copying
│   ├── notes.js         Reading notes, deriving metadata from paths
│   ├── text.js          Pure helpers: titles, names, HTML escaping
│   ├── render.js        Markdown → HTML, mermaid, table wrapping
│   ├── manifest.js      Grouping/sorting for the index page
│   ├── templates.js     Handlebars compilation and partials
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
| `npm run build` | Generate the site into `dist/` |
| `npm run clean` | Delete `dist/` |
| `npm run preview` | Build and serve `dist/` locally |
| `npm test` | Run the test suite |

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
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
```

Because Vercel runs the build itself, **`notes/` must be committed.** The same
setup works on Netlify or GitHub Pages with an equivalent build command.

---

## Development

```bash
npm test
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
