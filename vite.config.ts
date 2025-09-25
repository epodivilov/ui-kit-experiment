/// <reference types="vitest/config" />
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin({
      // Enable identifiers for better debugging
      identifiers: process.env.NODE_ENV === 'development' ? 'debug' : 'short',
    }),
  ],

  // Library build configuration
  build: {
    lib: {
      entry: {
        index: path.resolve(__dirname, 'src/index.ts'),
        styles: path.resolve(__dirname, 'src/styles/index.ts'),
        'components/index': path.resolve(__dirname, 'src/components/index.ts'),
        'themes/index': path.resolve(__dirname, 'src/themes/index.ts'),
        'utils/index': path.resolve(__dirname, 'src/utils/index.ts'),
        'hooks/index': path.resolve(__dirname, 'src/hooks/index.ts'),
        'constants/index': path.resolve(__dirname, 'src/constants/index.ts'),
      },
      name: 'UIKit',
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => {
        const extension = format === 'cjs' ? 'cjs' : 'js';
        return `${entryName}.${extension}`;
      },
    },

    rollupOptions: {
      // Externalize peer dependencies
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        // Global variables for UMD build (if needed later)
        globals: {
          'react': 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
        },
        // Ensure proper exports for tree-shaking
        exports: 'named',
        // Preserve module structure for better tree-shaking
        preserveModules: false,
      },
    },

    // Generate source maps for debugging
    sourcemap: true,

    // Clear output directory
    emptyOutDir: true,

    // Target modern browsers for optimal output
    target: 'es2020',

    // Enable minification for production
    minify: 'esbuild',

    // Optimize chunk splitting
    chunkSizeWarningLimit: 1000,
  },

  // Resolve configuration
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/styles': path.resolve(__dirname, './src/styles'),
      '@/tokens': path.resolve(__dirname, './src/tokens'),
      '@/utils': path.resolve(__dirname, './src/utils'),
    },
  },

  // CSS configuration for Vanilla-Extract
  css: {
    modules: {
      // Don't process CSS modules since we use Vanilla-Extract
      localsConvention: 'camelCase',
    },
  },

  // Development server configuration
  server: {
    port: 3000,
    open: true,
  },

  // Test configuration (Vitest integration)
  test: {
    projects: [{
      extends: true,
      plugins: [
        // The plugin will run tests for the stories defined in your Storybook config
        storybookTest({
          configDir: path.join(dirname, '.storybook')
        })
      ],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: 'playwright',
          instances: [{
            browser: 'chromium'
          }]
        },
        setupFiles: ['.storybook/vitest.setup.ts']
      }
    }],
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
  },
});