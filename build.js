const fs = require('fs').promises;
const path = require('path');
const { marked } = require('marked');
const matter = require('gray-matter');
const Handlebars = require('handlebars');

// ---------- CONFIG ----------
const BASE_DIR = 'D:/obsidian-vault';
const OUTPUT_DIR = './dist';
const STYLE_FILE = './style.css';
const TEMPLATE_FILE = './template.html';
const INDEX_TEMPLATE_FILE = './index-template.html';
const ERROR_404_TEMPLATE_FILE = './404-template.html';

// ---------- STRIP EXTENSION ----------
function stripExtension(filename) {
    return filename.replace(/\.md$/i, '');
}

// ---------- OBSIDIAN [[LINKS]] ----------
function resolveInternalLinks(markdownContent) {
    return markdownContent.replace(/\[\[(.*?)\]\]/g, (match, title) => {
        const cleanTitle = title.trim();
        return `[${cleanTitle}](${cleanTitle}.html)`;
    });
}

// ---------- MCQ LINE BREAKS ----------
function preprocessMarkdown(content) {
    let processed = resolveInternalLinks(content);
    const lines = processed.split('\n');
    const newLines = [];
    let inMCQ = false;
    let mcqOptions = [];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const trimmed = line.trim();
        if (/^[A-D]\)\s/.test(trimmed)) {
            if (!inMCQ) {
                inMCQ = true;
                mcqOptions = [];
            }
            const optionLine = line.endsWith('  ') ? line : line + '  ';
            mcqOptions.push(optionLine);
            continue;
        }
        if (inMCQ) {
            const optionsHtml = mcqOptions
                .map(opt => `<span class="option">${opt.trim()}</span>`)
                .join('\n');
            newLines.push(`<div class="question-options">${optionsHtml}</div>`);
            inMCQ = false;
            mcqOptions = [];
        }
        newLines.push(line);
    }
    if (inMCQ) {
        const optionsHtml = mcqOptions
            .map(opt => `<span class="option">${opt.trim()}</span>`)
            .join('\n');
        newLines.push(`<div class="question-options">${optionsHtml}</div>`);
    }
    return newLines.join('\n');
}

// ---------- CUSTOM RENDERER (only for code blocks) ----------
function escapeHtml(text) {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

const renderer = new marked.Renderer();

// Code blocks (mermaid & syntax highlighting)
renderer.code = function (token) {
    const code = (typeof token === 'string') ? token : (token.text || '');
    const lang = (typeof token === 'string') ? arguments[1] : (token.lang || '');

    if (lang === 'mermaid') {
        return `<pre class="mermaid">${escapeHtml(code)}</pre>`;
    }
    const escaped = escapeHtml(code);
    const langClass = lang ? ` class="language-${lang}"` : '';
    return `<pre><code${langClass}>${escaped}</code></pre>`;
};

// ---------- TABLE WRAPPER (post-processing) ----------
function wrapTables(html) {
    // Wrap every <table> in a <div class="table-wrapper">
    return html.replace(/<table/g, '<div class="table-wrapper"><table')
        .replace(/<\/table>/g, '</table></div>');
}

// ---------- UTILITY ----------
async function getFiles(dir) {
    const dirents = await fs.readdir(dir, { withFileTypes: true });
    const files = await Promise.all(dirents.map(async (dirent) => {
        const res = path.resolve(dir, dirent.name);
        if (dirent.isDirectory()) {
            return getFiles(res);
        } else {
            return res;
        }
    }));
    return files.flat();
}

// ---------- BUILD HOMEPAGE CARDS ----------
function buildHomepageCards(indexFiles) {
    if (!indexFiles.length) {
        return `<p>No index pages found. Create notes with <code>tags: index</code> and <code>coma</code> or <code>coms</code>.</p>`;
    }
    let cards = '';
    for (const file of indexFiles) {
        const title = file.data.title || path.basename(file.path, '.md');
        const description = file.data.description || '';
        const link = `${stripExtension(path.basename(file.path))}.html`;
        cards += `
            <div class="home-card">
                <a href="${link}">
                    <h3>${escapeHtml(title)}</h3>
                    ${description ? `<p>${escapeHtml(description)}</p>` : ''}
                </a>
            </div>
        `;
    }
    return `<div class="home-grid">${cards}</div>`;
}

// ---------- MAIN ----------
async function build() {
    try {
        // 1. Clean dist
        await fs.rm(OUTPUT_DIR, { recursive: true, force: true });
        await fs.mkdir(OUTPUT_DIR, { recursive: true });
        console.log('🧹 Cleaned dist/');

        // 2. Copy style.css
        try {
            await fs.copyFile(STYLE_FILE, path.join(OUTPUT_DIR, 'style.css'));
            console.log('📁 Copied style.css to dist/');
        } catch (err) {
            console.warn('⚠️  No style.css found in root.');
        }

        // 3. Load templates
        let templateSource;
        try {
            templateSource = await fs.readFile(TEMPLATE_FILE, 'utf-8');
            console.log('📄 Loaded template.html');
        } catch (err) {
            console.error('❌ template.html not found.');
            return;
        }
        const mainTemplate = Handlebars.compile(templateSource);

        let indexTemplate;
        try {
            const indexSource = await fs.readFile(INDEX_TEMPLATE_FILE, 'utf-8');
            indexTemplate = Handlebars.compile(indexSource);
            console.log('📄 Loaded index-template.html');
        } catch {
            console.warn('⚠️  index-template.html not found, falling back to main template.');
            indexTemplate = mainTemplate;
        }

        let error404Template;
        try {
            const errorSource = await fs.readFile(ERROR_404_TEMPLATE_FILE, 'utf-8');
            error404Template = Handlebars.compile(errorSource);
            console.log('📄 Loaded 404-template.html');
        } catch {
            console.warn('⚠️  404-template.html not found, using hardcoded fallback.');
            error404Template = null;
        }

        // 4. Scan source
        console.log(`📂 Building from vault: ${BASE_DIR}`);
        const allFiles = await getFiles(BASE_DIR);
        const mdFiles = allFiles.filter(f => f.endsWith('.md') || f.endsWith('.markdown'));

        if (mdFiles.length === 0) {
            console.log('⚠️  No Markdown files found.');
            return;
        }

        console.log(`📄 Found ${mdFiles.length} Markdown files. Filtering...`);

        let processedCount = 0;
        let skippedCount = 0;
        let custom404Found = false;
        const indexFiles = [];

        for (const filePath of mdFiles) {
            const fileContent = await fs.readFile(filePath, 'utf-8');
            const { data, content } = matter(fileContent);

            if (data.publish !== 1) {
                skippedCount++;
                console.log(`⏭️  Skipped ${path.basename(filePath)} (publish !== 1)`);
                continue;
            }

            let tags = data.tags;
            if (!tags) {
                skippedCount++;
                console.log(`⏭️  Skipped ${path.basename(filePath)} (no tags)`);
                continue;
            }

            if (typeof tags === 'string') {
                tags = tags.split(',').map(s => s.trim());
            } else if (!Array.isArray(tags)) {
                skippedCount++;
                console.log(`⏭️  Skipped ${path.basename(filePath)} (invalid tags)`);
                continue;
            }

            const hasComaOrComs = tags.some(t => t.toLowerCase() === 'coma' || t.toLowerCase() === 'coms');
            if (!hasComaOrComs) {
                skippedCount++;
                console.log(`⏭️  Skipped ${path.basename(filePath)} (tags don't include coma/coms)`);
                continue;
            }

            const hasIndex = tags.some(t => t.toLowerCase() === 'index');
            if (hasIndex) {
                indexFiles.push({ path: filePath, data });
            }

            // Build page
            const processedContent = preprocessMarkdown(content);
            let htmlContent = marked.parse(processedContent, { renderer });
            // Wrap tables for horizontal scrolling
            htmlContent = wrapTables(htmlContent);

            const baseName = path.basename(filePath, '.md');

            const pageData = {
                title: data.title || '',
                filename: baseName,
                date: data.date || '',
                description: data.description || '',
                tags: tags,
                content: htmlContent
            };
            const fullHtml = mainTemplate(pageData);

            const relativePath = path.relative(BASE_DIR, filePath);
            const dir = path.dirname(relativePath);

            let outputFileName;
            let outputDir = dir;

            if (baseName.toLowerCase() === '404') {
                outputFileName = '404.html';
                outputDir = '.';
                custom404Found = true;
                console.log(`⚠️  ${baseName}.md → 404.html (custom error page)`);
            } else {
                outputFileName = `${stripExtension(baseName)}.html`;
            }

            const outputPath = path.join(OUTPUT_DIR, outputDir, outputFileName);
            await fs.mkdir(path.dirname(outputPath), { recursive: true });
            await fs.writeFile(outputPath, fullHtml, 'utf-8');
            console.log(`✅ ${baseName} → ${outputFileName}`);
            processedCount++;
        }

        // ---------- HOMEPAGE ----------
        const cardsHtml = buildHomepageCards(indexFiles);
        const homepageData = {
            title: 'Home – Notes',
            description: 'Index of all COMA/COMS notes',
            cardsHtml: cardsHtml,
        };
        const homepageHtml = indexTemplate(homepageData);
        const homepagePath = path.join(OUTPUT_DIR, 'index.html');
        await fs.writeFile(homepagePath, homepageHtml, 'utf-8');
        console.log(`🏠 Generated homepage (index.html) with ${indexFiles.length} index cards`);

        // ---------- DEFAULT 404 ----------
        if (!custom404Found) {
            const default404Path = path.join(OUTPUT_DIR, '404.html');
            try {
                await fs.access(default404Path);
            } catch {
                if (error404Template) {
                    const errorData = {
                        title: '404 – Page Not Found',
                        message: 'The page you\'re looking for doesn\'t exist.'
                    };
                    await fs.writeFile(default404Path, error404Template(errorData), 'utf-8');
                    console.log('📄 Generated 404.html from template');
                } else {
                    const defaultContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404 - Page Not Found</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>404 – Page Not Found</h1>
    <p>The page you're looking for doesn't exist.</p>
    <p><a href="/">Go back home</a></p>
</body>
</html>`;
                    await fs.writeFile(default404Path, defaultContent, 'utf-8');
                    console.log('📄 Generated default 404.html (fallback)');
                }
            }
        }

        console.log(`\n🎉 Build complete! Processed ${processedCount} file(s), skipped ${skippedCount} file(s).`);
        console.log(`👉 To preview, run: npx serve dist`);

    } catch (error) {
        console.error('❌ Build failed:', error);
        process.exit(1);
    }
}

build();