import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@lynkit/hooks',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        dir: 'lib',
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    },
    outDir: 'lib',
    sourcemap: true,
  },
  plugins: [
    dts({
      outputDir: 'lib/types',
      tsConfigFilePath: resolve(__dirname, 'tsconfig.json'),
    }),
  ],
}); 