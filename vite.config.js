import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  // root: resolve(__dirname, 'src'),
  build: {
    outDir: resolve(__dirname, 'dist'),
    lib: {
      entry: resolve(__dirname, 'main.js'),
      name: 'jhuds',
      fileName: 'main',
    },
    target: 'es2018',
  }
});
