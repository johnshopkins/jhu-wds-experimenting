import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import globals from 'globals';

const globalIgnores = {
  // acts as a global ignores:
  // https://eslint.org/docs/latest/use/configure/ignore#ignoring-files
  ignores: ['src/shared/js/vendor/*']
}

const config = {
  files: ['src/**/*.{js,jsx}'],
  plugins: {
    react: reactPlugin
  },
  languageOptions: {
    ...reactPlugin.configs.flat.recommended.languageOptions,
    ecmaVersion: 2020,
    globals: globals.browser,
    parserOptions: {
      ...reactPlugin.configs['jsx-runtime'].parserOptions,
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  rules: {
    ...js.configs.recommended.rules,
    ...reactPlugin.configs.flat.recommended.rules,
    ...reactPlugin.configs['jsx-runtime'].rules,

    // 0 = off, 1 = warning, 2 = error
    'no-unused-vars': 1,
    'react/display-name': 0,
    'react/prop-types': 0,
    'react/jsx-uses-react': 2,
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
}

const testConfig = {
  ...config,
  files: ['**/*.test.{js,jsx}'],
  languageOptions: {
    ...config.languageOptions,
    globals: {
      ...globals.browser,
    }
  },
}

export default [globalIgnores, config, testConfig];
