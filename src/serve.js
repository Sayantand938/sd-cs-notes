'use strict';

/**
 * Minimal static file server for previewing the built site.
 *
 * Exists so `pnpm serve` needs no downloads and works offline. It is a
 * preview convenience only — production hosting is handled by Vercel, which
 * serves dist/ directly.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const CONTENT_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
};

/**
 * Resolve a request path to a file inside `root`.
 *
 * Returns null when the path escapes `root` (path traversal) or is not a
 * servable file. Directories resolve to their `index.html`.
 */
function resolveRequest(root, urlPath) {
  let decoded;
  try {
    decoded = decodeURIComponent(urlPath.split('?')[0]);
  } catch {
    return null; // malformed percent-encoding
  }

  const target = path.join(root, decoded);

  // Contain the resolved path within root.
  const relative = path.relative(root, target);
  if (relative.startsWith('..') || path.isAbsolute(relative)) return null;

  if (fs.existsSync(target) && fs.statSync(target).isDirectory()) {
    const index = path.join(target, 'index.html');
    return fs.existsSync(index) ? index : null;
  }

  return fs.existsSync(target) ? target : null;
}

/**
 * Start the preview server.
 *
 * @param {object} options
 * @param {string} options.dir Directory to serve.
 * @param {number} options.port
 * @param {string} options.host
 * @param {(url: string) => void} [options.onListen]
 * @returns {import('http').Server}
 */
function createServer({ dir, port, host, onListen }) {
  const root = path.resolve(dir);

  const server = http.createServer((req, res) => {
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      res.writeHead(405, { 'Content-Type': 'text/plain' });
      res.end('Method Not Allowed');
      return;
    }

    const file = resolveRequest(root, req.url);

    if (!file) {
      // Fall back to the generated 404 page when one exists.
      const notFound = path.join(root, '404.html');
      if (fs.existsSync(notFound)) {
        res.writeHead(404, { 'Content-Type': CONTENT_TYPES['.html'] });
        res.end(fs.readFileSync(notFound));
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
      }
      return;
    }

    const type = CONTENT_TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream';

    if (req.method === 'HEAD') {
      res.writeHead(200, { 'Content-Type': type });
      res.end();
      return;
    }

    res.writeHead(200, { 'Content-Type': type });
    fs.createReadStream(file)
      .on('error', () => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      })
      .pipe(res);
  });

  server.listen(port, host, () => {
    if (onListen) onListen(`http://${host}:${port}/`);
  });

  return server;
}

/** CLI entry: serve dist/ on the first free port from the base. */
function main(argv = process.argv.slice(2)) {
  const projectRoot = path.resolve(__dirname, '..');
  const dir = argv[0] ? path.resolve(argv[0]) : path.join(projectRoot, 'dist');

  if (!fs.existsSync(dir)) {
    console.error(`❌ Nothing to serve: ${dir} does not exist. Run \`pnpm build\` first.`);
    return 1;
  }

  const basePort = Number(process.env.PORT) || 3000;
  const host = process.env.HOST || '127.0.0.1';

  const start = (port, attemptsLeft) => {
    const server = createServer({
      dir,
      port,
      host,
      onListen: (url) => {
        console.log(`\n👀 Serving ${path.relative(projectRoot, dir) || '.'} at ${url}`);
        console.log('   Press Ctrl+C to stop.\n');
      },
    });

    server.on('error', (error) => {
      if (error.code === 'EADDRINUSE' && attemptsLeft > 0) {
        start(port + 1, attemptsLeft - 1);
      } else {
        console.error(`❌ Could not start server: ${error.message}`);
        process.exitCode = 1;
      }
    });
  };

  start(basePort, 10);
  return 0;
}

if (require.main === module) {
  // Deliberately not process.exit(): listen() is asynchronous, and exiting
  // here would tear the server down before it ever binds the port.
  process.exitCode = main();
}

module.exports = { createServer, resolveRequest, main };
