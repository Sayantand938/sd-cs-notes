'use strict';

/** Command-line entry point. */

const path = require('path');

const defaultConfig = require('./config');
const { build } = require('./build');

const USAGE = `
Usage: node src/cli.js [options]

Options:
  -n, --notes-dir <path>   Markdown source directory (default: notes/)
  -o, --out-dir <path>     Output directory (default: dist/)
  -q, --quiet              Only print errors and the final summary
  -h, --help               Show this message

Examples:
  node src/cli.js
  node src/cli.js --notes-dir ./content --out-dir ./public
`.trim();

/**
 * Minimal argument parser.
 *
 * Hand-rolled rather than pulling in a dependency, since the surface is tiny.
 *
 * @param {string[]} argv
 * @returns {{config: object, quiet: boolean, help: boolean}}
 */
function parseArgs(argv) {
  const config = {};
  let quiet = false;
  let help = false;

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    const next = () => {
      const value = argv[++i];
      if (value === undefined) throw new Error(`Missing value for ${arg}`);
      return value;
    };

    switch (arg) {
      case '-n':
      case '--notes-dir':
        config.notesDir = path.resolve(next());
        break;
      case '-o':
      case '--out-dir':
        config.outputDir = path.resolve(next());
        break;
      case '-q':
      case '--quiet':
        quiet = true;
        break;
      case '-h':
      case '--help':
        help = true;
        break;
      default:
        throw new Error(`Unknown option: ${arg}`);
    }
  }

  return { config, quiet, help };
}

/** Run the CLI. Returns the process exit code. */
async function main(argv = process.argv.slice(2)) {
  let parsed;
  try {
    parsed = parseArgs(argv);
  } catch (error) {
    console.error(`❌ ${error.message}\n\n${USAGE}`);
    return 1;
  }

  if (parsed.help) {
    console.log(USAGE);
    return 0;
  }

  try {
    const result = await build({ config: parsed.config, quiet: parsed.quiet });
    if (result.notes === 0) {
      console.log('⚠️  Nothing to build.');
      return 0;
    }
    console.log(`\n🎉 Build complete! Processed ${result.notes} file(s).`);
    console.log(`👉 To preview, run: npm run preview`);
    return 0;
  } catch (error) {
    console.error(`❌ Build failed: ${error.message}`);
    if (process.env.DEBUG) console.error(error.stack);
    return 1;
  }
}

if (require.main === module) {
  main().then((code) => process.exit(code));
}

module.exports = { main, parseArgs, USAGE, defaultConfig };
