/* eslint-disable */
const eslint = require("@eslint/js");
const ts = require("@typescript-eslint/eslint-plugin");
const JsJsxRule = require("wmc-eslint/eslint-rule-jsx.js");
const tsParser = require("@typescript-eslint/parser");
const prettier = require("eslint-config-prettier");
const pluginPrettier = require("eslint-plugin-prettier");
const globals = require("globals");
const react = require("eslint-plugin-react");
const standartTypescript = require("eslint-config-standard-with-typescript");
const reactSettings = require("wmc-eslint/react.settings.js");
const path = require("path");

const pathToTsConfig = path.resolve("./tsconfig.json");

module.exports = [
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

  // Generall rules, files wich will not be linted
  {
    ignores: ["**/*config.js", "**/*scripts/_*", "**/*.next*", "**/*App.js"],
  },

  //Generall rules for all Files
  {
    rules: {
      "eqeqeq": "error",
      "no-var": "error",
      "prefer-destructuring": ["error", { object: true, array: true }],
      "no-console": ["error", { allow: ["warn", "error"] }],
    },
  },

  //Errors if types definded in non-typescript files
  {
    files: ["**/*.js", "**/*.jsx"],
    rules: {
      "no-restricted-syntax": [
        "error",
        {
          selector: "TSTypeAnnotation",
          message: "TypeScript types are not allowed in JavaScript files.",
        },
      ],
    },
  },

  {
    files: ["**/*.js"],
    plugins: {
      JsJsxRule,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      "JsJsxRule/react-file-extension": "error",
    },
  },

  //Configurations for Typescript
  {
    files: ["**/*.ts"],
    plugins: {
      "@typescript-eslint": ts,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ...ts.configs.base.parserOptions,
        project: pathToTsConfig,
        ecmaVersion: "latest",
      },
    },
    rules: {
      ...ts.configs.recommended.rules,
      ...standartTypescript.overrides[0].rules,
      "@typescript-eslint/triple-slash-reference": [
        "error",
        { path: "always", types: "always", lib: "always" },
      ],
    },
  },

  // Configurations for React with typescript
  {
    files: ["**/*.tsx"],
    plugins: {
      react,
      "@typescript-eslint": ts,
      "standard-with-typescript": standartTypescript,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ...ts.configs.base.parserOptions,
        project: pathToTsConfig,
        ecmaVersion: "latest",
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...ts.configs.recommended.rules,
      ...standartTypescript.overrides[0].rules,
      "@typescript-eslint/explicit-function-return-type": "warn",
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/triple-slash-reference": [
        "error",
        { path: "always", types: "always", lib: "always" },
      ],
    },
  },

  // Configuration for React
  {
    files: ["**/*.jsx"],
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
      "react/react-in-jsx-scope": "off",
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
  },

  //Settings shared across ESSLint rules
  {
    //react settings from https://github.com/jsx-eslint/eslint-plugin-react#configuration
    settings: reactSettings,
  },
];
