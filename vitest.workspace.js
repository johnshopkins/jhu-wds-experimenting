import { defineWorkspace } from 'vitest/config';
import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin';
import commonjs from 'vite-plugin-commonjs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

export default defineWorkspace([
  {
    extends: 'vitest.config.js',
    plugins: [storybookTest({ configDir: path.join(dirname, '.storybook') })],
    test: {
      name: 'storybook',
      browser: {
        enabled: true,
        headless: true,
        provider: 'playwright',
        instances: [
          { browser: 'chromium' },
        ],
      },
      setupFiles: ['.storybook/vitest.setup.js'],
    },
  },
  {
    extends: 'vitest.config.js',
    test: {
      name: 'unit',
      include: ['**/src/**/*.test.{js,jsx}'],
      environment: 'jsdom',
      globals: true,
    },
  },
  {
    extends: 'vitest.config.js',
    plugins: [commonjs()],
    test: {
      name: 'dist',
      include: ['**/tests/*.test.jsx'],
      environment: 'jsdom',
      globals: true,
      browser: {
        enabled: true,
        headless: true,
        provider: 'playwright',
        instances: [
          { browser: 'chromium' },
        ],
      },
    },
  },
]);
