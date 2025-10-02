/**
 * Style Dictionary Configuration for Vanilla-Extract Theme Generation
 *
 * Generates:
 * 1. Contract from semantic layer (2-semantic/contract.json)
 * 2. Theme implementations from $themes.json configuration
 *
 * Output: src/tokens/
 */

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import {
  vanillaExtractContract,
  vanillaExtractTheme,
  vanillaExtractTypes
} from './style-dictionary-formatters.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read theme configuration
const themesConfig = JSON.parse(
  readFileSync(join(__dirname, 'tokens/$themes.json'), 'utf8')
);

// Register custom formatters
const registerFormatters = (sd) => {
  sd.registerFormat({
    name: 'vanilla-extract/contract',
    format: vanillaExtractContract
  });

  sd.registerFormat({
    name: 'vanilla-extract/theme',
    format: vanillaExtractTheme
  });

  sd.registerFormat({
    name: 'vanilla-extract/types',
    format: vanillaExtractTypes
  });
};

/**
 * Get source files for a specific theme based on selectedTokenSets
 * Only includes theme files (Layer 3) which implement the semantic contract
 * Core tokens (Layer 1) are included as sources to resolve references
 */
const getSourcesForTheme = (theme) => {
  const sources = [];
  const sets = theme.selectedTokenSets;

  // First, add core tokens as sources (for reference resolution)
  for (const [setName, status] of Object.entries(sets)) {
    if (setName.startsWith('1-core/') && status === 'source') {
      sources.push(`tokens/${setName}.json`);
    }
  }

  // Then add theme files (Layer 3) that are enabled
  for (const [setName, status] of Object.entries(sets)) {
    if (setName.startsWith('3-themes/') && status === 'enabled') {
      sources.push(`tokens/${setName}.json`);
    }
  }

  return sources;
};

/**
 * Generate configuration for contract (semantic layer only)
 */
const contractConfig = {
  source: ['tokens/2-semantic/contract.json'],
  log: {
    errors: {
      brokenReferences: 'disabled' // Contract has placeholder values, not real references
    }
  },
  platforms: {
    contract: {
      buildPath: 'src/tokens/',
      transforms: ['attribute/cti', 'name/kebab'],
      files: [
        {
          destination: 'contract.css.ts',
          format: 'vanilla-extract/contract'
        },
        {
          destination: 'types.ts',
          format: 'vanilla-extract/types'
        }
      ]
    }
  }
};

/**
 * Generate configurations for each theme
 */
const themeConfigs = themesConfig.$themes.map((theme) => {
  const themeId = theme.id;
  const themeName = theme.name;

  return {
    source: getSourcesForTheme(theme),
    platforms: {
      [themeId]: {
        buildPath: 'src/tokens/',
        transforms: ['attribute/cti', 'name/kebab'],
        files: [
          {
            destination: `${themeId}.css.ts`,
            format: 'vanilla-extract/theme',
            options: {
              themeName: themeId,
              selector: `.theme-${themeId}`
            }
          }
        ]
      }
    }
  };
});

// Export function that builds all configurations
export default {
  hooks: {
    formats: registerFormatters
  },
  // We'll build contract first, then themes
  // Export contract config as default, themes will be built separately
  ...contractConfig,
  // Store theme configs for separate builds
  __themeConfigs: themeConfigs
};

// Also export a function to get all configs
export const getAllConfigs = () => [contractConfig, ...themeConfigs];
