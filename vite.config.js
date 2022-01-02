import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
import {viteMockServe} from 'vite-plugin-mock';
import vueJsx from '@vitejs/plugin-vue-jsx';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    // css: {},
    // esbuild: {},
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'comps': path.resolve(__dirname, 'src/components'),
      'apis': path.resolve(__dirname, 'src/apis'),
      'views': path.resolve(__dirname, 'src/views'),
      'utils': path.resolve(__dirname, 'src/utils'),
      'routes': path.resolve(__dirname, 'src/routes'),
      'styles': path.resolve(__dirname, 'src/styles'),
      "plugins": path.resolve(__dirname, 'src/plugins'),
    }
  },
  plugins: [vue(), vueJsx(),viteMockServe({supportTs: false})]
})
