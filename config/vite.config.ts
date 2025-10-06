/// <reference types="vitest/config" />
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

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
        index: path.resolve(rootDir, 'src/index.ts'),
        'components/index': path.resolve(rootDir, 'src/components/index.ts'),
        'themes/index': path.resolve(rootDir, 'src/themes/index.ts'),
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
          react: 'React',
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
      '@': path.resolve(rootDir, './src'),
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
    projects: [
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          storybookTest({
            configDir: path.join(rootDir, '.storybook'),
          }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: 'playwright',
            instances: [
              {
                browser: 'chromium',
              },
            ],
          },
          setupFiles: ['.storybook/vitest.setup.ts'],
        },
      },
    ],
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
  },
});
