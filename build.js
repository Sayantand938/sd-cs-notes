const fs = require('fs').promises;
const path = require('path');
const { marked } = require('marked');
const Handlebars = require('handlebars');

// ---------- CONFIG ----------
const BASE_DIR = path.join(__dirname, 'notes');
const OUTPUT_DIR = './dist';
const STYLE_FILE = './style.css';
const TEMPLATE_FILE = './template.html';
const INDEX_TEMPLATE_FILE = './index-template.html';
const ERROR_404_TEMPLATE_FILE = './default-404.html';

// ---------- UTILITIES ----------
function stripExtension(filename) {
    return filename.replace(/\.md$/i, '');
}

function formatName(str) {
    return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Formats: "01-computer-system-and-organization-eng" -> "01 Computer System And Organization (Eng)"
function formatTitle(filename) {
    let name = filename.replace(/\.md$/i, '');

    // 1. Extract number prefix (e.g. "01-", "1-", "03_")
    let numberPrefix = '';
    const numberMatch = name.match(/^(\d+)[\s-_]+/);
    if (numberMatch) {
        numberPrefix = numberMatch[1].padStart(2, '0') + ' ';
        name = name.slice(numberMatch[0].length);
    }

    // 2. Extract language suffix (eng / beng)
    let langSuffix = '';
    if (/[-_\s]eng$/i.test(name)) {
        langSuffix = ' (Eng)';
        name = name.replace(/[-_\s]eng$/i, '');
    } else if (/[-_\s]beng$/i.test(name)) {
        langSuffix = ' (Beng)';
        name = name.replace(/[-_\s]beng$/i, '');
    }

    // 3. Format words
    const words = name
        .split(/[-_]+/)
        .filter(Boolean)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    return `${numberPrefix}${words}${langSuffix}`.trim();
}

// ---------- CUSTOM RENDERER ----------
function escapeHtml(text) {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

const renderer = new marked.Renderer();
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

// ---------- TABLE WRAPPER ----------
function wrapTables(html) {
    return html.replace(/<table(\s|>)/g, '<div class="table-wrapper"><table$1')
        .replace(/<\/table>/g, '</table></div>');
}

// ---------- MANIFEST BUILDER ----------
function buildManifest(validFiles, baseDir) {
    const groups = {};

    for (const file of validFiles) {
        const relativePath = path.relative(baseDir, file.path).replace(/\\/g, '/');
        const parts = relativePath.split('/');

        const className = parts[0] ? formatName(parts[0]) : 'General';
        const subject = parts[1] ? parts[1].toUpperCase() : 'General';
        const semester = parts[2] ? formatName(parts[2]) : 'General';
        const category = parts[3] ? formatName(parts[3]) : 'General';
        const unit = (parts[4] && parts[4].toLowerCase().startsWith('unit')) ? formatName(parts[4]) : null;

        const groupKey = `${className} | ${subject} | ${semester}`;

        if (!groups[groupKey]) {
            groups[groupKey] = { class: className, subject: subject, semester: semester, categories: {} };
        }

        const catKey = unit ? `${category} - ${unit}` : category;
        if (!groups[groupKey].categories[catKey]) {
            groups[groupKey].categories[catKey] = [];
        }

        groups[groupKey].categories[catKey].push({
            title: file.title,
            description: file.description,
            path: '/' + relativePath.replace(/\.md$/i, '.html'),
            tags: file.tags
        });
    }

    return Object.values(groups).map(g => ({
        ...g,
        categories: Object.entries(g.categories).map(([name, files]) => ({
            name,
            files: files.sort((a, b) => a.path.localeCompare(b.path))
        })).sort((a, b) => a.name.localeCompare(b.name))
    })).sort((a, b) => {
        if (a.class !== b.class) return a.class.localeCompare(b.class);
        if (a.subject !== b.subject) return a.subject.localeCompare(b.subject);
        return a.semester.localeCompare(b.semester);
    });
}

// ---------- FILE SCANNER ----------
async function getFiles(dir) {
    const dirents = await fs.readdir(dir, { withFileTypes: true });
    const files = await Promise.all(dirents.map(async (dirent) => {
        const res = path.resolve(dir, dirent.name);
        if (dirent.isDirectory()) return getFiles(res);
        else return res;
    }));
    return files.flat();
}

// ---------- MAIN BUILD ----------
async function build() {
    try {
        await fs.rm(OUTPUT_DIR, { recursive: true, force: true });
        await fs.mkdir(OUTPUT_DIR, { recursive: true });
        console.log('🧹 Cleaned dist/');

        await fs.copyFile(STYLE_FILE, path.join(OUTPUT_DIR, 'style.css'));
        console.log('📁 Copied style.css to dist/');

        const templateSource = await fs.readFile(TEMPLATE_FILE, 'utf-8');
        const mainTemplate = Handlebars.compile(templateSource);

        const indexSource = await fs.readFile(INDEX_TEMPLATE_FILE, 'utf-8');
        const indexTemplate = Handlebars.compile(indexSource);

        let error404Template;
        try {
            const errorSource = await fs.readFile(ERROR_404_TEMPLATE_FILE, 'utf-8');
            error404Template = Handlebars.compile(errorSource);
        } catch { error404Template = null; }

        console.log(`📂 Building from: ${BASE_DIR}`);
        const allFiles = await getFiles(BASE_DIR);
        const mdFiles = allFiles.filter(f => f.endsWith('.md') || f.endsWith('.markdown'));

        if (mdFiles.length === 0) {
            console.log('⚠️  No Markdown files found in the notes/ directory.');
            return;
        }

        const validFiles = [];
        let custom404Found = false;

        for (const filePath of mdFiles) {
            const content = await fs.readFile(filePath, 'utf-8');

            // 1. Extract and format Title using formatTitle()
            const baseName = path.basename(filePath, '.md');
            const title = formatTitle(baseName);

            // 2. Extract Tags from folder structure
            const relativePath = path.relative(BASE_DIR, filePath).replace(/\\/g, '/');
            const pathSegments = relativePath.split('/').slice(0, -1);
            const tags = pathSegments.map(seg => formatName(seg));

            // 3. Extract Description from first non-empty line
            const lines = content.split('\n');
            const description = lines.find(line => line.trim() !== '' && !line.startsWith('#')) || '';

            // 4. Extract Date
            const stats = await fs.stat(filePath);
            const date = stats.mtime.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

            validFiles.push({ path: filePath, content, title, tags, description, date });
        }

        console.log(`📄 Processing ${validFiles.length} files...`);

        for (const file of validFiles) {
            let htmlContent = marked.parse(file.content, { renderer });
            htmlContent = wrapTables(htmlContent);

            const relativePath = path.relative(BASE_DIR, file.path).replace(/\\/g, '/');
            const dir = path.dirname(relativePath);
            const baseName = path.basename(file.path, '.md');

            if (baseName.toLowerCase() === '404') {
                custom404Found = true;
                const outputPath = path.join(OUTPUT_DIR, '404.html');
                await fs.writeFile(outputPath, mainTemplate({
                    title: '404 – Page Not Found',
                    filename: '404',
                    date: '',
                    description: 'The page you are looking for does not exist.',
                    tags: [],
                    content: '<p><a href="/">Go back home</a></p>'
                }), 'utf-8');
                continue;
            }

            const outputPath = path.join(OUTPUT_DIR, dir, `${baseName}.html`);
            await fs.mkdir(path.dirname(outputPath), { recursive: true });

            await fs.writeFile(outputPath, mainTemplate({
                title: file.title,
                filename: baseName,
                date: file.date,
                description: file.description,
                tags: file.tags,
                content: htmlContent
            }), 'utf-8');

            console.log(`✅ ${relativePath}`);
        }

        // ---------- GENERATE MANIFEST INDEX ----------
        const manifest = buildManifest(validFiles, BASE_DIR);
        const homepageHtml = indexTemplate({
            title: 'CS Notes Manifest',
            description: 'Complete structured index of all study materials.',
            manifest: manifest
        });

        await fs.writeFile(path.join(OUTPUT_DIR, 'index.html'), homepageHtml, 'utf-8');
        console.log(`🏠 Generated manifest-based index.html (${manifest.length} groups)`);

        // ---------- DEFAULT 404 ----------
        if (!custom404Found) {
            const default404Path = path.join(OUTPUT_DIR, '404.html');
            if (error404Template) {
                await fs.writeFile(default404Path, error404Template({
                    title: '404 – Page Not Found',
                    message: 'The page you\'re looking for doesn\'t exist.'
                }), 'utf-8');
            } else {
                await fs.writeFile(default404Path, `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404 - Page Not Found</title>
    <link rel="stylesheet" href="/style.css">
</head>
<body>
    <div class="metadata-box"><h1>404 – Page Not Found</h1></div>
    <p>The page you're looking for doesn't exist.</p>
    <p><a href="/">Go back home</a></p>
</body>
</html>`, 'utf-8');
            }
        }

        console.log(`\n🎉 Build complete! Processed ${validFiles.length} file(s).`);
        console.log(`👉 To preview, run: npm run preview`);

    } catch (error) {
        console.error('❌ Build failed:', error);
        process.exit(1);
    }
}

build();