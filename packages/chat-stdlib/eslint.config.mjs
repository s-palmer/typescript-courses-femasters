import globals from 'globals'
import typescriptPlugin from '@typescript-eslint/eslint-plugin' // TypeScript ESLint plugin
import typescriptParser from '@typescript-eslint/parser' // TypeScript parser

export default [
  // Configuration for JavaScript and TypeScript files
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'], // Include relevant file types
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: typescriptParser,
      parserOptions: {
        project: './tsconfig.json', // Ensure TypeScript checks are performed according to tsconfig.json
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin, // Load the TypeScript ESLint plugin
    },
    ignores: ['dist/**'], // Ignore dist and config files
    rules: {
      ...typescriptPlugin.configs.recommended.rules,
      ...typescriptPlugin.configs[
        'recommended-requiring-type-checking'
      ].rules,

      'prefer-const': 'error', // Prefer const over let where possible
      '@typescript-eslint/no-unused-vars': 'off', // Disable no-unused-vars rule
      '@typescript-eslint/no-unused-params': 'off', // Disable no-unused-params rule
    },
  },
  {
    files: ['tests/**/*.ts'],
    env: {
      node: true,
      jest: true,
    },
  },
  // Override for .eslintrc.js file itself
  {
    files: ['.eslintrc.js'],
    extends: ['plugin:@typescript-eslint/disable-type-checked'],
    rules: {
      '@typescript-eslint/no-unsafe-assignment': 'off',
    },
  },
]
