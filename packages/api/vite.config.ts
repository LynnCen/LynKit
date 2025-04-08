import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@lynkit/api',
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'umd']
    },
    outDir: 'lib',
    sourcemap: true
  },
  plugins: [
    dts({
      outDir: 'lib/types',
      include: ['src']
    })
  ]
}); 