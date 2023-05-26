import eslint from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';
import globals from 'globals';
import react from 'eslint-plugin-react';
import standartTypescript from 'eslint-config-standard-with-typescript';
import reactSettings from './react.settings.js';

export default [
  //Default rules for all file fron ESLint
  eslint.configs.recommended,

  // Activate some globals to ignore them while linting
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  // Generall files wich dont to be linted
  { ignores: ['*config.js'] },

  {
    files: ['*.js', '*.jsx'],
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          selector: 'TSTypeAnnotation',
          message: 'TypeScript types are not allowed in JavaScript files.',
        },
      ],
    },
  },

  //Generall rules for all Files
  {
    rules: {
      eqeqeq: 'error',
      'no-var': 'error',
      'prefer-destructuring': ['error', { object: true, array: true }],
      'no-console': ['error', { allow: ['warn', 'error'] }],
    },
  },

  //Configurations for Typescript
  {
    files: ['*.ts'],
    plugins: {
      '@typescript-eslint': ts,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ...ts.configs.base.parserOptions,
        project: 'eslint.ts.json',
        ecmaVersion: 'latest',
      },
    },
    rules: { ...ts.configs.recommended.rules, ...standartTypescript.overrides[0].rules },
  },

  // Configurations for React with typescript
  {
    files: ['*.tsx'],
    plugins: {
      react,
      '@typescript-eslint': ts,
      'standard-with-typescript': standartTypescript,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ...ts.configs.base.parserOptions,
        project: 'eslint.tsx.json',
        ecmaVersion: 'latest',
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...ts.configs.recommended.rules,
      ...standartTypescript.overrides[0].rules,
    },
  },

  // Configuration for React
  {
    files: ['*.jsx'],
    plugins: {
      react,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ...react.configs.recommended.parserOptions,
      },
    },
    rules: {
      ...react.configs.recommended.rules,
    },
  },

  // prettier Plugin to deactivate conflicts with predifined ESLint Rules
  prettier,

  // Second Prettier Plugin to use rules defined within .prettierrc.json as rules in linter
  {
    plugins: {
      pluginPrettier,
    },
    languageOptions: {},
    // rules: { 'pluginPrettier/prettier': 'error' },
  },

  //Settings shared across ESSLint rules
  {
    //react settings from https://github.com/jsx-eslint/eslint-plugin-react#configuration
    settings: reactSettings,
  },
];
