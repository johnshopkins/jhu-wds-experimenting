import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint2';
import stylelint from 'vite-plugin-stylelint';

export default defineConfig({
  build: {
    target: 'es2020',
    emptyOutDir: false,
    rollupOptions: {
      input: resolve(__dirname, 'src/scripts.js'),
      output: {
        entryFileNames: 'main.js',
        assetFileNames: 'main.[ext]',
      }
    },
  },
  plugins: [
    react(),
    eslint({ lintOnStart: true }),
    // stylelint({
    //   lintInWorker: true,
    //   lintOnStart: true,
    // }),
  ],
  publicDir: 'static',
})
