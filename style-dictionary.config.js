/**
 * Style Dictionary Configuration for Vanilla-Extract Theme Generation
 * Generates contract and theme implementations from Token Studio format
 */

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read theme configuration from $themes.json
const themesConfig = JSON.parse(
  readFileSync(join(__dirname, 'tokens/$themes.json'), 'utf8')
);

/**
 * Custom formatter: Vanilla-Extract contract
 * Generates TypeScript contract definition from semantic tokens
 */
const vanillaExtractContract = ({ dictionary }) => {
  const buildContract = (obj, depth = 1) => {
    const indent = '  '.repeat(depth);
    const entries = Object.entries(obj);

    return entries
      .map(([key, value]) => {
        if (value && typeof value === 'object' && !value.value) {
          const nested = buildContract(value, depth + 1);
          return `${indent}'${key}': {\n${nested}\n${indent}}`;
        }
        return `${indent}'${key}': null`;
      })
      .join(',\n');
  };

  const contractBody = buildContract(dictionary.tokens);

  return `/**
 * Vanilla-Extract Theme Contract
 * Auto-generated from design tokens - DO NOT EDIT
 */
import { createThemeContract } from '@vanilla-extract/css';

export const tokens = createThemeContract({
${contractBody}
});
`;
};

/**
 * Custom formatter: Vanilla-Extract theme implementation
 * Generates theme-specific values that implement the contract
 */
const vanillaExtractTheme = ({ dictionary, options }) => {
  const themeName = options.themeName || 'theme';

  const buildThemeObject = (obj, depth = 1) => {
    const indent = '  '.repeat(depth);
    const entries = Object.entries(obj);

    return entries
      .map(([key, value]) => {
        if (value && typeof value === 'object' && !value.value) {
          const nested = buildThemeObject(value, depth + 1);
          return `${indent}'${key}': {\n${nested}\n${indent}}`;
        }
        if (value && value.value !== undefined) {
          const val = value.value;
          if (typeof val === 'object') {
            const props = Object.entries(val)
              .map(([k, v]) => `${k}: '${v}'`)
              .join(', ');
            return `${indent}'${key}': '{ ${props} }'`;
          }
          return `${indent}'${key}': '${val}'`;
        }
        return `${indent}'${key}': ''`;
      })
      .join(',\n');
  };

  const themeBody = buildThemeObject(dictionary.tokens);

  return `/**
 * Vanilla-Extract Theme: ${themeName}
 * Auto-generated from design tokens - DO NOT EDIT
 */
import { createTheme } from '@vanilla-extract/css';
import { tokens } from './contract.css';

export const ${themeName}Theme = createTheme(tokens, {
${themeBody}
});

export const ${themeName}Class = ${themeName}Theme;
`;
};

/**
 * Custom formatter: TypeScript type definitions
 */
const vanillaExtractTypes = ({ dictionary }) => {
  const buildTypes = (obj, depth = 1) => {
    const indent = '  '.repeat(depth);
    const entries = Object.entries(obj);

    return entries
      .map(([key, value]) => {
        if (value && typeof value === 'object' && !value.value) {
          const nested = buildTypes(value, depth + 1);
          return `${indent}${key}: {\n${nested}\n${indent}}`;
        }
        return `${indent}${key}: string`;
      })
      .join(';\n');
  };

  const typesBody = buildTypes(dictionary.tokens);

  return `/**
 * Vanilla-Extract Theme Types
 * Auto-generated from design tokens - DO NOT EDIT
 */

export interface ThemeTokens {
${typesBody};
}
`;
};

/**
 * Get source files for a theme based on $themes.json configuration
 */
const getSourcesForTheme = (theme) => {
  const sources = [];
  const sets = theme.selectedTokenSets;

  // Add core tokens (Layer 1) as sources for reference resolution
  for (const [setName, status] of Object.entries(sets)) {
    if (setName.startsWith('1-core/') && status === 'source') {
      sources.push(`tokens/${setName}.json`);
    }
  }

  // Add theme files (Layer 3) that implement the contract
  for (const [setName, status] of Object.entries(sets)) {
    if (setName.startsWith('3-themes/') && status === 'enabled') {
      sources.push(`tokens/${setName}.json`);
    }
  }

  return sources;
};

/**
 * Generate Style Dictionary configurations for all themes
 */
const generateConfigs = () => {
  const configs = [];

  // 1. Contract configuration (from semantic layer)
  configs.push({
    source: ['tokens/2-semantic/contract.json'],
    log: {
      verbosity: 'default',
      warnings: 'disabled', // Disable warnings for contract placeholders
      errors: {
        brokenReferences: 'disabled' // Contract has {DO-NOT-USE} placeholders
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
  });

  // 2. Theme configurations (one for each theme in $themes.json)
  for (const theme of themesConfig.$themes) {
    configs.push({
      source: getSourcesForTheme(theme),
      platforms: {
        [theme.id]: {
          buildPath: 'src/tokens/',
          transforms: ['attribute/cti', 'name/kebab'],
          files: [
            {
              destination: `${theme.id}.css.ts`,
              format: 'vanilla-extract/theme',
              options: {
                themeName: theme.id
              }
            }
          ]
        }
      }
    });
  }

  return configs;
};

// Register custom formatters and export configurations
export default {
  // Register custom formatters
  hooks: {
    formats: {
      'vanilla-extract/contract': vanillaExtractContract,
      'vanilla-extract/theme': vanillaExtractTheme,
      'vanilla-extract/types': vanillaExtractTypes
    }
  },
  // Export all configurations for multi-config build
  __configs: generateConfigs()
};
