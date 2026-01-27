import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8888,
    host: true,
  },
  resolve: {
    alias: {
      // 开发模式：直接使用源代码，实现真正的热重载
      '@lynkit/ui': resolve(__dirname, '../../packages/ui/src'),
      '@lynkit/hooks': resolve(__dirname, '../../packages/hooks/src'),
      '@lynkit/icons': resolve(__dirname, '../../packages/icons/src'),
      '@lynkit/api': resolve(__dirname, '../../packages/api/src'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});
