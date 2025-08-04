import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { watchAndRun } from 'vite-plugin-watch-and-run';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import fs from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig(({ command }) => {
  const isBuild = command === 'build';

  // Dynamically create copy targets to avoid errors
  const copyTargets = [{ src: 'assets/img/**/*', dest: 'img' }];
  if (fs.existsSync(resolve(__dirname, 'assets/js'))) {
    copyTargets.push({ src: 'assets/js/**/*', dest: 'js' });
  }

  // Disable watchAndRun in build mode
  const watchPlugins = !isBuild
    ? [
        watchAndRun([
          {
            name: 'styles',
            watchKind: ['add', 'change', 'unlink'],
            watch: resolve(__dirname, 'src/**/*.css'),
            run: 'npm run build',
            delay: 200,
          },
        ]),
      ]
    : [];

  return {
    root: '.',

    plugins: [
      checker({
        eslint: {
          lintCommand: 'eslint "src/**/*.{js,jsx,ts,tsx}"'
        },
        stylelint: {
          lintCommand: 'stylelint "src/**/*.css" --allow-empty-input || true'
        },
        overlay: { // disable overlay for stylelint
          initialIsOpen: false
        }
      }),
      viteStaticCopy({ targets: copyTargets }),
      ...watchPlugins,
      {
      name: 'debug-plugin',
      buildStart() {
        console.log('🚀 Build started');
      },
      generateBundle() {
        console.log('📦 Generating bundle...');
      },
      writeBundle() {
        console.log('✅ Bundle written to disk');
      },
      closeBundle() {
        console.log('🔒 Build closed');
      },
    }
    ],

    build: {
      outDir: resolve(__dirname, 'dist'),
      emptyOutDir: true,
      sourcemap: true,
      rollupOptions: {
        input: resolve(__dirname, 'src/main.js'),
        output: {
          entryFileNames: 'js/[name].js',
          assetFileNames: (info) =>
            info.name?.endsWith('.css') ? 'css/style.css' : 'assets/[name][extname]',
        },
      },
    },

    css: {
  // allows PostCSS warnings and errors without failing build
  devSourcemap: true,
  postcss: resolve(__dirname, 'postcss.config.cjs'),
  postcssOptions: {
    // disable strict mode or error throwing if applicable
  }
},

    publicDir: false,
  };
});
