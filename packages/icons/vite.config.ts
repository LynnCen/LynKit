import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
import { readdirSync } from 'fs';

/**
 * 获取所有入口文件
 */
function getEntries() {
  const srcDir = resolve(__dirname, 'src');
  const iconsDir = resolve(srcDir, 'icons');

  const entries: Record<string, string> = {
    index: resolve(srcDir, 'index.ts'),
    types: resolve(srcDir, 'types.ts'),
  };

  // 添加所有图标入口
  try {
    const iconFiles = readdirSync(iconsDir).filter((f) => f.endsWith('.tsx'));
    iconFiles.forEach((file) => {
      const name = file.replace('.tsx', '');
      entries[`icons/${name}`] = resolve(iconsDir, file);
    });
  } catch {
    console.warn('Icons directory not found, skipping icon entries');
  }

  return entries;
}

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src/**/*'],
      exclude: ['src/**/*.test.*'],
      outDir: 'es',
      afterBuild: async () => {
        // 复制 es 到 lib
        const { cp } = await import('fs/promises');
        await cp('es', 'lib', { recursive: true });
      },
    }),
  ],
  build: {
    lib: {
      entry: getEntries(),
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: [
        {
          format: 'es',
          dir: 'es',
          entryFileNames: '[name].js',
          preserveModules: true,
          preserveModulesRoot: 'src',
        },
        {
          format: 'cjs',
          dir: 'lib',
          entryFileNames: '[name].js',
          preserveModules: true,
          preserveModulesRoot: 'src',
        },
      ],
    },
    sourcemap: true,
    minify: false,
  },
});
