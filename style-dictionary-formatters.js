/**
 * Custom Style Dictionary formatters for Vanilla-Extract theme generation
 */

/**
 * Formats tokens as a Vanilla-Extract contract
 * Generates a TypeScript contract definition from semantic tokens
 */
export const vanillaExtractContract = ({ dictionary }) => {
  const buildContract = (obj, depth = 1) => {
    const indent = '  '.repeat(depth);
    const entries = Object.entries(obj);

    return entries.map(([key, value]) => {
      // If value has nested properties (not a token), recurse
      if (value && typeof value === 'object' && !value.value) {
        const nested = buildContract(value, depth + 1);
        return `${indent}'${key}': {\n${nested}\n${indent}}`;
      }
      // If it's a token, output null (contract placeholder)
      return `${indent}'${key}': null`;
    }).join(',\n');
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
 * Formats tokens as a Vanilla-Extract theme implementation
 * Generates theme-specific values that implement the contract
 */
export const vanillaExtractTheme = ({ dictionary, options }) => {
  const themeName = options.themeName || 'theme';
  const selector = options.selector || `.${themeName}`;

  const buildThemeObject = (obj, depth = 1) => {
    const indent = '  '.repeat(depth);
    const entries = Object.entries(obj);

    return entries.map(([key, value]) => {
      // If value has nested properties (not a token), recurse
      if (value && typeof value === 'object' && !value.value) {
        const nested = buildThemeObject(value, depth + 1);
        return `${indent}'${key}': {\n${nested}\n${indent}}`;
      }
      // If it's a token, output its resolved value
      if (value && value.value !== undefined) {
        const val = value.value;
        // Handle different token types
        if (typeof val === 'object') {
          // Typography composite tokens
          const props = Object.entries(val)
            .map(([k, v]) => `${k}: '${v}'`)
            .join(', ');
          return `${indent}'${key}': '{ ${props} }'`;
        }
        return `${indent}'${key}': '${val}'`;
      }
      return `${indent}'${key}': ''`;
    }).join(',\n');
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
 * Formats tokens as TypeScript type definitions for the theme
 */
export const vanillaExtractTypes = ({ dictionary }) => {
  const buildTypes = (obj, depth = 1) => {
    const indent = '  '.repeat(depth);
    const entries = Object.entries(obj);

    return entries.map(([key, value]) => {
      // If value has nested properties (not a token), recurse
      if (value && typeof value === 'object' && !value.value) {
        const nested = buildTypes(value, depth + 1);
        return `${indent}${key}: {\n${nested}\n${indent}}`;
      }
      // If it's a token, output string type
      return `${indent}${key}: string`;
    }).join(';\n');
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
