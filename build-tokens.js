#!/usr/bin/env node

/**
 * Build script for generating Vanilla-Extract themes from design tokens
 *
 * This script:
 * 1. Generates the theme contract from semantic tokens
 * 2. Generates theme implementations for each theme in $themes.json
 */

import StyleDictionary from 'style-dictionary';
import { getAllConfigs } from './style-dictionary.config.js';
import {
  vanillaExtractContract,
  vanillaExtractTheme,
  vanillaExtractTypes
} from './style-dictionary-formatters.js';

// Register custom formatters
StyleDictionary.registerFormat({
  name: 'vanilla-extract/contract',
  format: vanillaExtractContract
});

StyleDictionary.registerFormat({
  name: 'vanilla-extract/theme',
  format: vanillaExtractTheme
});

StyleDictionary.registerFormat({
  name: 'vanilla-extract/types',
  format: vanillaExtractTypes
});

// Get all configurations
const configs = getAllConfigs();

console.log('🎨 Building design tokens for Vanilla-Extract...\n');

// Build each configuration
let configIndex = 0;
for (const config of configs) {
  const isContract = configIndex === 0;
  const label = isContract ? 'Contract' : `Theme ${configIndex}`;

  console.log(`📦 Building ${label}...`);

  try {
    const sd = new StyleDictionary({
      ...config,
      log: {
        ...config.log,
        verbosity: 'verbose',
        warnings: 'warn'
      }
    });
    await sd.buildAllPlatforms();
    console.log(`✅ ${label} built successfully\n`);
  } catch (error) {
    console.error(`❌ Error building ${label}:`, error);
    process.exit(1);
  }

  configIndex++;
}

console.log('✨ All tokens built successfully!');
