import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { resolve } from 'path';

// 路径别名配置
const alias = {
  '@': resolve(__dirname, './demo'),
  '@lynkit/ui': resolve(__dirname, './packages/ui/src'),
  '@lynkit/icons': resolve(__dirname, './packages/icons/src'),
  '@lynkit/hooks': resolve(__dirname, './packages/hooks/src'),
  '@lynkit/api': resolve(__dirname, './packages/api/src'),
};
export default defineConfig({
  plugins: [react()],
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
  },
  server: {
    port: 8888,
    host: true,
  },
  resolve: {
    alias
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});