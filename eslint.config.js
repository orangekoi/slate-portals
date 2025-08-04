// eslint.config.js (Flat Config for ESLint v9+)

import js from '@eslint/js';
import globals from 'globals';

export default [
  // Ignore generated + build output so ESLint doesn't waste time or error on it.
  {
    ignores: ['dist/**', 'node_modules/**'],
  },

  // Base config for all JS files in the project.
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      // Flat config: define globals explicitly instead of `env`.
      globals: {
        ...globals.browser, // window, document, console, etc.
        ...globals.node,    // process, __dirname, module, etc.
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      // Override whatever you need here:
      'no-console': 'off', // you log during build scripts
    },
  },

  // Bring in ESLint's recommended core rules.
  js.configs.recommended,
];
