import { defineConfig } from 'tsup';
import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin';

export default defineConfig({
  entry: [
    'src/index.ts',
    'src/components/*/index.ts', // Каждый компонент отдельно
    'src/themes/*.ts',
  ],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  sourcemap: false,
  splitting: true, // Включаем code splitting
  treeshake: true,
  minify: false,
  esbuildPlugins: [
    vanillaExtractPlugin({
      identifiers: 'short',
    }),
  ],
  external: ['react', 'react-dom', 'react/jsx-runtime'],
  outDir: 'dist',
});
