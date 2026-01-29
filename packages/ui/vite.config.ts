import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
import { readdirSync, statSync } from 'fs';

// 获取 src 目录下的所有组件入口
function getComponentEntries() {
  const srcDir = resolve(__dirname, 'src');
  const entries: Record<string, string> = {
    index: resolve(srcDir, 'index.ts'),
  };

  // 需要排除的目录
  const excludeDirs = ['styles', 'interfaces'];

  const items = readdirSync(srcDir);
  for (const item of items) {
    const itemPath = resolve(srcDir, item);
    if (statSync(itemPath).isDirectory() && !excludeDirs.includes(item)) {
      // 检查是否存在 index.tsx 或 index.ts
      const indexTsx = resolve(itemPath, 'index.tsx');
      const indexTs = resolve(itemPath, 'index.ts');

      if (statSync(indexTsx, { throwIfNoEntry: false })?.isFile()) {
        entries[`${item.toLowerCase()}/index`] = indexTsx;
      } else if (statSync(indexTs, { throwIfNoEntry: false })?.isFile()) {
        entries[`${item.toLowerCase()}/index`] = indexTs;
      }
    }
  }

  return entries;
}

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src/**/*'],
      exclude: ['src/**/*.test.*', 'src/**/demo/*', 'src/**/__tests__/*'],
      outDir: 'es',
      copyDtsFiles: true,
      // 同时生成到 lib 目录
      afterBuild: async () => {
        const { copyFileSync, mkdirSync, readdirSync, statSync } = await import('fs');
        const { resolve } = await import('path');

        function copyDir(src: string, dest: string) {
          mkdirSync(dest, { recursive: true });
          const items = readdirSync(src);
          for (const item of items) {
            const srcPath = resolve(src, item);
            const destPath = resolve(dest, item);
            if (statSync(srcPath).isDirectory()) {
              copyDir(srcPath, destPath);
            } else {
              copyFileSync(srcPath, destPath);
            }
          }
        }

        const esDir = resolve(__dirname, 'es');
        const libDir = resolve(__dirname, 'lib');
        copyDir(esDir, libDir);
      },
    }),
  ],
  build: {
    lib: {
      entry: getComponentEntries(),
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', 'classnames'],
      output: [
        {
          format: 'es',
          dir: 'es',
          entryFileNames: '[name].js',
          chunkFileNames: '[name].js',
          assetFileNames: (assetInfo) => {
            if (assetInfo.name?.endsWith('.css')) {
              return 'style.css';
            }
            return '[name][extname]';
          },
          preserveModules: true,
          preserveModulesRoot: 'src',
        },
        {
          format: 'cjs',
          dir: 'lib',
          entryFileNames: '[name].js',
          chunkFileNames: '[name].js',
          assetFileNames: (assetInfo) => {
            if (assetInfo.name?.endsWith('.css')) {
              return 'style.css';
            }
            return '[name][extname]';
          },
          preserveModules: true,
          preserveModulesRoot: 'src',
        },
      ],
    },
    cssCodeSplit: false, // 统一 CSS 文件
    sourcemap: true,
    minify: false, // 库模式不压缩，方便调试
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});
