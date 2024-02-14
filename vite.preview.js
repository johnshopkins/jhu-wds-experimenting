// see: https://github.com/vitejs/vite/issues/7009#issuecomment-1536241380

import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: resolve(__dirname, 'src'),
  build: {
    outDir: resolve(__dirname, 'preview'),
    target: 'es2018',
  },
});
