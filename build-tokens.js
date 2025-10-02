#!/usr/bin/env node
/**
 * Build script for generating Vanilla-Extract themes from design tokens
 * Reads configuration from style-dictionary.config.js and builds all themes
 */

import StyleDictionary from 'style-dictionary';
import config from './style-dictionary.config.js';

console.log('🎨 Building design tokens for Vanilla-Extract...\n');

// Register custom formatters
for (const [name, formatter] of Object.entries(config.hooks.formats)) {
  StyleDictionary.registerFormat({ name, format: formatter });
}

// Build all configurations (contract + themes)
const configs = config.__configs;
let successCount = 0;

for (let i = 0; i < configs.length; i++) {
  const cfg = configs[i];
  const label = i === 0 ? 'Contract' : `Theme ${i}`;

  console.log(`📦 Building ${label}...`);

  try {
    const sd = new StyleDictionary(cfg);
    await sd.buildAllPlatforms();
    console.log(`✅ ${label} built successfully\n`);
    successCount++;
  } catch (error) {
    console.error(`❌ Error building ${label}:`, error.message);
    process.exit(1);
  }
}

console.log(`✨ All ${successCount} configurations built successfully!`);
