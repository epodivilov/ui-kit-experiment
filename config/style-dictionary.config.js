/**
 * Style Dictionary Configuration for Vanilla-Extract Theme Generation
 * Generates contract and theme implementations from Token Studio format
 */

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

// Read theme configuration from $themes.json
const themesConfig = JSON.parse(readFileSync(join(rootDir, 'tokens/$themes.json'), 'utf8'));

// Read semantic contract to know which tokens to include in themes
const semanticContractRaw = JSON.parse(
  readFileSync(join(rootDir, 'tokens/2-semantic/contract.json'), 'utf8')
);
// Extract semantic layer (skip root 'semantic' wrapper)
const semanticContract = semanticContractRaw.semantic || semanticContractRaw;

/**
 * Get all token paths from contract (to filter themes)
 */
const getContractPaths = (obj, prefix = '') => {
  const paths = [];
  for (const [key, value] of Object.entries(obj)) {
    const currentPath = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === 'object' && value.value !== undefined) {
      paths.push(currentPath);
    } else if (value && typeof value === 'object') {
      paths.push(...getContractPaths(value, currentPath));
    }
  }
  return paths;
};

const contractTokenPaths = new Set(getContractPaths(semanticContract));

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
        // Check if this is a typography token - generate object contract instead of null
        if (value && value.type === 'typography') {
          return `${indent}'${key}': {\n${indent}  'font-family': null,\n${indent}  'font-weight': null,\n${indent}  'font-size': null,\n${indent}  'line-height': null\n${indent}}`;
        }
        return `${indent}'${key}': null`;
      })
      .join(',\n');
  };

  // Extract semantic tokens (skip root "semantic" wrapper if present)
  const tokensToProcess = dictionary.tokens.semantic || dictionary.tokens;
  const contractBody = buildContract(tokensToProcess);

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
 * Only includes tokens that exist in the semantic contract
 */
const vanillaExtractTheme = ({ dictionary, options }) => {
  const themeName = options.themeName || 'theme';

  const buildThemeObject = (obj, depth = 1, pathPrefix = '') => {
    const indent = '  '.repeat(depth);
    const entries = Object.entries(obj);

    const filteredEntries = entries
      .map(([key, value]) => {
        const currentPath = pathPrefix ? `${pathPrefix}.${key}` : key;

        if (value && typeof value === 'object' && !value.value) {
          const nested = buildThemeObject(value, depth + 1, currentPath);
          // Only include if nested has content
          if (nested.trim()) {
            return `${indent}'${key}': {\n${nested}\n${indent}}`;
          }
          return null;
        }

        // Check if this token path exists in contract
        if (!contractTokenPaths.has(currentPath)) {
          return null;
        }

        if (value && value.value !== undefined) {
          const val = value.value;

          // Handle composite tokens (like typography objects)
          if (typeof val === 'object' && value.type === 'typography') {
            // Convert camelCase to kebab-case for CSS properties
            const toCSSProperty = (key) => key.replace(/([A-Z])/g, '-$1').toLowerCase();

            const cssProps = Object.entries(val)
              .map(([k, v]) => {
                const cssProp = toCSSProperty(k);
                // Escape single quotes in values
                const escapedV = typeof v === 'string' ? v.replace(/'/g, "\\'") : v;
                return `'${cssProp}': '${escapedV}'`;
              })
              .join(',\n' + indent + '  ');

            return `${indent}'${key}': {\n${indent}  ${cssProps}\n${indent}}`;
          }

          // Handle other composite tokens (non-typography)
          if (typeof val === 'object') {
            const props = Object.entries(val)
              .map(([k, v]) => `${k}: "${v.replace(/"/g, '\\"')}"`)
              .join(', ');
            return `${indent}'${key}': \`{ ${props} }\``;
          }

          // Handle simple string values
          // Escape single quotes in values (e.g., font-family strings)
          const escapedVal = val.replace(/'/g, "\\'");
          return `${indent}'${key}': '${escapedVal}'`;
        }
        return null;
      })
      .filter(entry => entry !== null);

    return filteredEntries.join(',\n');
  };

  // Extract semantic tokens (skip root "semantic" wrapper if present)
  const tokensToProcess = dictionary.tokens.semantic || dictionary.tokens;
  const themeBody = buildThemeObject(tokensToProcess);

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
 * Custom formatter: Index file for re-exports
 */
const vanillaExtractIndex = () => {
  const themeNames = themesConfig.$themes.map(t => t.id);

  const themeExports = themeNames
    .map(name => `export { ${name}Theme, ${name}Class } from './${name}.css';`)
    .join('\n');

  return `/**
 * Design Tokens - Vanilla-Extract Themes
 * Auto-generated from design tokens - DO NOT EDIT
 */

export { tokens } from './contract.css';
export type { ThemeTokens } from './types';

${themeExports}
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
        // Quote keys if they contain special characters (kebab-case)
        const quotedKey = key.includes('-') ? `'${key}'` : key;

        if (value && typeof value === 'object' && !value.value) {
          const nested = buildTypes(value, depth + 1);
          return `${indent}${quotedKey}: {\n${nested}\n${indent}}`;
        }
        // Check if this is a typography token - generate object type
        if (value && value.type === 'typography') {
          return `${indent}${quotedKey}: {\n${indent}  'font-family': string;\n${indent}  'font-weight': string;\n${indent}  'font-size': string;\n${indent}  'line-height': string;\n${indent}}`;
        }
        return `${indent}${quotedKey}: string`;
      })
      .join(';\n');
  };

  // Extract semantic tokens (skip root "semantic" wrapper if present)
  const tokensToProcess = dictionary.tokens.semantic || dictionary.tokens;
  const typesBody = buildTypes(tokensToProcess);

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
const getSourcesForTheme = theme => {
  const sources = [];
  const sets = theme.selectedTokenSets;

  // Add core tokens (Layer 1) as sources for reference resolution
  for (const [setName, status] of Object.entries(sets)) {
    if (setName.startsWith('1-core/') && status === 'source') {
      sources.push(`tokens/${setName}.json`);
    }
  }

  // Add base theme tokens first (shared across all themes)
  for (const [setName, status] of Object.entries(sets)) {
    if (setName === '3-themes/base' && status === 'enabled') {
      sources.push(`tokens/${setName}.json`);
    }
  }

  // Add theme-specific files (Layer 3) that implement the contract
  for (const [setName, status] of Object.entries(sets)) {
    if (setName.startsWith('3-themes/') && setName !== '3-themes/base' && status === 'enabled') {
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
        brokenReferences: 'disabled', // Contract has {DO-NOT-USE} placeholders
      },
    },
    platforms: {
      contract: {
        buildPath: 'src/tokens/generated/',
        transforms: ['attribute/cti', 'name/kebab'],
        files: [
          {
            destination: 'contract.css.ts',
            format: 'vanilla-extract/contract',
          },
          {
            destination: 'types.ts',
            format: 'vanilla-extract/types',
          },
          {
            destination: 'index.ts',
            format: 'vanilla-extract/index',
          },
        ],
      },
    },
  });

  // 2. Theme configurations (one for each theme in $themes.json)
  for (const theme of themesConfig.$themes) {
    configs.push({
      source: getSourcesForTheme(theme),
      platforms: {
        [theme.id]: {
          buildPath: 'src/tokens/generated/',
          transforms: ['attribute/cti', 'name/kebab'],
          files: [
            {
              destination: `${theme.id}.css.ts`,
              format: 'vanilla-extract/theme',
              options: {
                themeName: theme.id,
              },
            },
          ],
        },
      },
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
      'vanilla-extract/types': vanillaExtractTypes,
      'vanilla-extract/index': vanillaExtractIndex,
    },
  },
  // Export all configurations for multi-config build
  __configs: generateConfigs(),
};
