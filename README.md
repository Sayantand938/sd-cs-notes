# SD CS Notes – Static Site Generator

A lightweight static site generator that turns Obsidian Markdown notes (with frontmatter) into a clean, dark‑theme HTML site. Built with Node.js, Handlebars, and Marked.

## ✨ Features

- 📄 **Builds from Obsidian vault** – uses `D:/obsidian-vault` by default (customisable)
- 🏷️ **Frontmatter filtering** – only files with `publish: 1` and tags containing `coma` or `coms` are included
- 🏠 **Auto‑generated homepage** – lists all notes with `index` tag + `coma/coms` as cards
- 📋 **Compact MCQ formatting** – options are wrapped and styled without extra spacing
- 📊 **Scrollable tables** – horizontally scroll on mobile devices
- 🎨 **Metadata box** – displays filename, date, description, and tag badges at the top of each note
- 🖨️ **Print‑friendly styles** – clean light theme for printing
- 📱 **Responsive** – works well on all screen sizes

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/Sayantand938/sd-cs-notes.git
cd sd-cs-notes
```

### 2. Install dependencies

```bash
npm install
```

### 3. Prepare your content

- Place your Markdown notes in `D:/obsidian-vault` (or change `BASE_DIR` in `build.js`).
- Each note must have frontmatter like:

```yaml
---
title: Boolean Algebra
tags:
  - coms
  - unit-01
  - index
publish: 1
---
```

### 4. Build the site

```bash
npm run build
```

This generates the `dist/` folder with all HTML files, `style.css`, and assets.

### 5. Preview locally

```bash
npm run preview
```

Or serve the `dist/` folder manually:

```bash
npx serve dist
```

## 🧩 How it works

- `build.js` scans the vault, filters files by frontmatter, and renders them using `marked`.
- `template.html` is the Handlebars layout for every page.
- `style.css` provides the dark theme, responsive layout, MCQ styles, and scrollable tables.

## 🚢 Deployment

You can deploy the `dist/` folder to any static hosting service (Vercel, Netlify, GitHub Pages).

### Deploy to Vercel

1. Push the repository to GitHub.
2. Import the project on Vercel.
3. Set **Build Command** to `""` (empty) and **Output Directory** to `dist`.
4. Commit the `dist/` folder to your repo – Vercel will serve it directly.

Alternatively, keep the default build command and let Vercel run `npm run build` – just ensure the vault path is accessible (or use a fallback to `./src`).

## 🛠️ Customisation

- Change `VAULT_DIR` in `build.js` to point to your Obsidian vault.
- Adjust tags, headings, or styling in `style.css` and `template.html`.

## 📄 License

ISC – feel free to use and modify.

---

Made with ❤️ by Sayantan
