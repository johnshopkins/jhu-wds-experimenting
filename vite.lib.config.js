import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, 'src/library.js'),
      name: 'jhuwds',
      fileName: format => `main.${format}.js`
    },
  },
  plugins: [
    react()
  ],
})
