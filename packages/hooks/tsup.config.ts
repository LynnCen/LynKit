import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  sourcemap: true,
  outDir: 'lib',
  external: ['react', 'react-dom'],
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    };
  },
});
