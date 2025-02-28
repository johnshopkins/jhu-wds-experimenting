import { coverageConfigDefaults, defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {      
    coverage: {
      // see: https://storybook.js.org/docs/writing-tests/test-coverage#set-up
      // coverage.exclude cannot be set in vitest.workspace.js
      exclude: [
        ...coverageConfigDefaults.exclude,
        '**/.storybook/**',
        '**/*.stories.*',
        '**/storybook-static/**',
        '**/scripts/**',
        '**/tests/**',
      ], 
    }
  },
})
