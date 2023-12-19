import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  define: {
    'process.env.NODE_ENV': '"production"'
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib.jsx'),
      formats: ['es'],
      name: 'SmartPathGame',
      fileName: 'smartpath-game',
    }
  },
  plugins: [react(), cssInjectedByJsPlugin()],
});
