import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

// 路径别名配置
const alias = {
  '@': resolve(__dirname, './demo'),
  '@lynkit/ui': resolve(__dirname, './packages/ui/src'),
  '@lynkit/icons': resolve(__dirname, './packages/icons/src'),
  '@lynkit/hooks': resolve(__dirname, './packages/hooks/src'),
  '@lynkit/api': resolve(__dirname, './packages/api/src'),
};

// 开发环境配置
const devConfig = {
  root: 'demo',
  server: {
    host: '0.0.0.0',
    port: 3001,
  },
  resolve: {
    alias
  },
  plugins: [
    react()
  ]
};

// 获取需要构建的包名
const packageName = process.env.PACKAGE_NAME;

// 导出配置
export default defineConfig(devConfig);