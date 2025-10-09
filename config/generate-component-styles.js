/**
 * Component Styles Generator
 * Generates Vanilla Extract styles from component tokens
 *
 * Input: tokens/4-components/*.json
 * Output: src/tokens/generated/components/*.generated.css.ts
 */

import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'fs';
import { join, dirname, basename } from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

const COMPONENTS_TOKENS_DIR = join(rootDir, 'tokens/4-components');
const OUTPUT_DIR = join(rootDir, 'src/tokens/generated/components');

// Ensure output directory exists
mkdirSync(OUTPUT_DIR, { recursive: true });

/**
 * Convert kebab-case to camelCase
 */
function toCamelCase(str) {
  return str.replace(/-([a-z])/g, g => g[1].toUpperCase());
}

/**
 * Convert kebab-case to PascalCase
 */
function toPascalCase(str) {
  const camel = toCamelCase(str);
  return camel.charAt(0).toUpperCase() + camel.slice(1);
}

/**
 * Get CSS property name from token property
 * Special case: foreground-color -> color
 */
function getCSSProperty(tokenProp) {
  if (tokenProp === 'foreground-color') return 'color';
  return toCamelCase(tokenProp);
}

/**
 * Resolve token reference
 * {semantic.spacing.md} -> tokens.spacing.md
 */
function resolveTokenReference(value) {
  if (typeof value !== 'string' || !value.startsWith('{') || !value.endsWith('}')) {
    return `'${value}'`;
  }

  const path = value.slice(1, -1); // Remove { }
  const parts = path.split('.');

  if (parts[0] === 'semantic') {
    // {semantic.spacing.md} -> tokens.spacing.md
    const tokenPath = parts
      .slice(1)
      .map(part => (part.includes('-') ? `['${part}']` : `.${part}`))
      .join('');
    return `tokens${tokenPath}`;
  }

  return `'${value}'`;
}

/**
 * Generate base styles object
 */
function generateBaseStyles(base, componentName) {
  if (!base || Object.keys(base).length === 0) {
    return null;
  }

  const styles = [];

  for (const [propName, tokenDef] of Object.entries(base)) {
    const cssProp = getCSSProperty(propName);
    const value = tokenDef.$value;
    const type = tokenDef.$type;

    if (type === 'typography') {
      // Typography is spread
      const tokenRef = resolveTokenReference(value);
      styles.push(`  ...${tokenRef}`);
    } else {
      const tokenRef = resolveTokenReference(value);
      styles.push(`  ${cssProp}: ${tokenRef}`);
    }
  }

  // Convert kebab-case to camelCase for variable names
  const varName = toCamelCase(componentName);

  return `export const ${varName}BaseStyles = {
${styles.join(',\n')}
};`;
}

/**
 * Generate variant option styles
 */
function generateVariantOption(optionData) {
  const defaultStyles = [];
  const selectorsMap = {
    hover: {},
    active: {},
    focus: {},
    disabled: {},
  };

  for (const [propName, value] of Object.entries(optionData)) {
    const cssProp = getCSSProperty(propName);

    // Check if value has states (default, hover, etc.)
    if (value && typeof value === 'object' && !value.$value) {
      // Has states
      const states = value;

      // Default state
      if (states.default) {
        const tokenRef = resolveTokenReference(states.default.$value);
        defaultStyles.push(`    ${cssProp}: ${tokenRef}`);
      }

      // Collect selectors
      if (states.hover) {
        selectorsMap.hover[cssProp] = resolveTokenReference(states.hover.$value);
      }
      if (states.active) {
        selectorsMap.active[cssProp] = resolveTokenReference(states.active.$value);
      }
      if (states.focus && propName !== 'background-color') {
        selectorsMap.focus[cssProp] = resolveTokenReference(states.focus.$value);
      }
      if (states.disabled) {
        selectorsMap.disabled[cssProp] = resolveTokenReference(states.disabled.$value);
      }
    } else if (value && value.$value !== undefined) {
      // Simple property
      const type = value.$type;

      if (type === 'typography') {
        const tokenRef = resolveTokenReference(value.$value);
        defaultStyles.push(`    ...${tokenRef}`);
      } else {
        const tokenRef = resolveTokenReference(value.$value);
        defaultStyles.push(`    ${cssProp}: ${tokenRef}`);
      }
    }
  }

  // Build selectors object
  const selectorLines = [];

  if (Object.keys(selectorsMap.hover).length > 0) {
    const props = Object.entries(selectorsMap.hover)
      .map(([prop, val]) => `        ${prop}: ${val}`)
      .join(',\n');
    selectorLines.push(`      '&:hover:not(:disabled)': {\n${props}\n      }`);
  }

  if (Object.keys(selectorsMap.active).length > 0) {
    const props = Object.entries(selectorsMap.active)
      .map(([prop, val]) => `        ${prop}: ${val}`)
      .join(',\n');
    selectorLines.push(`      '&:active:not(:disabled)': {\n${props}\n      }`);
  }

  if (Object.keys(selectorsMap.focus).length > 0) {
    const props = Object.entries(selectorsMap.focus)
      .map(([prop, val]) => `        ${prop}: ${val}`)
      .join(',\n');
    selectorLines.push(`      '&:focus': {\n${props}\n      }`);
  }

  if (Object.keys(selectorsMap.disabled).length > 0) {
    const props = Object.entries(selectorsMap.disabled)
      .map(([prop, val]) => `        ${prop}: ${val}`)
      .join(',\n');
    selectorLines.push(`      '&:disabled': {\n${props}\n      }`);
  }

  const allLines = [...defaultStyles];

  if (selectorLines.length > 0) {
    allLines.push(`    selectors: {\n${selectorLines.join(',\n')}\n    }`);
  }

  return `  {
${allLines.join(',\n')}
  }`;
}

/**
 * Generate variants object
 */
function generateVariants(variants, componentName) {
  if (!variants || Object.keys(variants).length === 0) {
    return null;
  }

  const variantGroups = [];

  for (const [groupName, options] of Object.entries(variants)) {
    const variantOptions = [];

    for (const [optionName, optionData] of Object.entries(options)) {
      const optionStyles = generateVariantOption(optionData);
      variantOptions.push(`    '${optionName}': ${optionStyles}`);
    }

    variantGroups.push(`  '${groupName}': {
${variantOptions.join(',\n')}
  }`);
  }

  // Convert kebab-case to camelCase for variable names
  const varName = toCamelCase(componentName);

  return `export const ${varName}Variants = {
${variantGroups.join(',\n')}
};`;
}

/**
 * Generate complete component styles file
 */
function generateComponentStyles(componentData, componentName) {
  const { base, variants } = componentData;

  const baseStyles = generateBaseStyles(base, componentName);
  const variantsStyles = generateVariants(variants, componentName);

  const parts = [
    `/**`,
    ` * ${toPascalCase(componentName)} Component Styles`,
    ` * Auto-generated from design tokens - DO NOT EDIT`,
    ` */`,
    `import { tokens } from '../index';`,
    ``,
  ];

  if (baseStyles) {
    parts.push(baseStyles);
    parts.push('');
  }

  if (variantsStyles) {
    parts.push(variantsStyles);
    parts.push('');
  }

  return parts.join('\n');
}

function formatFile(outputPath) {
  exec(`pnpm exec prettier --write ${outputPath}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`❌ Prettier error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`❌ Prettier stderr: ${stderr}`);
      return;
    }
    console.log(`   🎨 Formatted ${basename(outputPath)} with Prettier`);
  });
}

/**
 * Detect if a token object is a component definition (has base/variants)
 * or a container for multiple components
 */
function isComponentDefinition(obj) {
  return obj && typeof obj === 'object' && ('base' in obj || 'variants' in obj);
}

/**
 * Process a single component token file
 * Supports both single-root and multi-root component token files
 */
function processComponentFile(filepath) {
  const content = readFileSync(filepath, 'utf8');
  const tokens = JSON.parse(content);

  const rootKeys = Object.keys(tokens);

  if (rootKeys.length === 0) {
    console.warn(`⚠️  Empty token file: ${basename(filepath)}`);
    return;
  }

  // Detect multi-root vs single-root structure:
  // Single-root: { "component-name": { base: {}, variants: {} } }  -> 1 root key
  // Multi-root: { "comp-1": { base: {} }, "comp-2": { base: {} } } -> multiple root keys with component definitions

  // If we have multiple root keys AND they're all component definitions, it's multi-root
  const isMultiRoot = rootKeys.length > 1 && rootKeys.every(key => isComponentDefinition(tokens[key]));

  if (isMultiRoot) {
    // Multi-root: file contains multiple components
    console.log(`📦 Processing multi-root file: ${basename(filepath)}`);

    const allStyles = [];
    const componentNames = [];

    for (const componentName of rootKeys) {
      const componentData = tokens[componentName];

      if (!isComponentDefinition(componentData)) {
        console.warn(`   ⚠️  Skipping non-component root: ${componentName}`);
        continue;
      }

      console.log(`   📝 Generating styles for: ${componentName}`);
      componentNames.push(componentName);

      const componentStyles = generateComponentStyles(componentData, componentName);
      allStyles.push(componentStyles);
    }

    // Combine all component styles with headers
    const filename = basename(filepath, '.json');
    const combinedStyles = [
      `/**`,
      ` * ${toPascalCase(filename)} Component Styles`,
      ` * Auto-generated from design tokens - DO NOT EDIT`,
      ` * `,
      ` * This file contains styles for:`,
      ...componentNames.map(name => ` * - ${name}`),
      ` */`,
      `import { tokens } from '../index';`,
      ``,
      ...allStyles.map(s => {
        // Remove individual file headers and imports
        const lines = s.split('\n');
        const startIndex = lines.findIndex(line => line.startsWith('export'));
        return lines.slice(startIndex).join('\n');
      })
    ].join('\n');

    const outputPath = join(OUTPUT_DIR, `${filename}.generated.css.ts`);
    writeFileSync(outputPath, combinedStyles, 'utf8');

    console.log(`   ✅ Generated ${basename(outputPath)} with ${componentNames.length} component(s)`);
    formatFile(outputPath);

  } else {
    // Single-root: file contains one component (legacy behavior)
    const componentName = rootKeys[0];
    const componentData = tokens[componentName];

    console.log(`📦 Processing ${componentName}...`);

    const styles = generateComponentStyles(componentData, componentName);

    const outputPath = join(OUTPUT_DIR, `${componentName}.generated.css.ts`);
    writeFileSync(outputPath, styles, 'utf8');

    console.log(`   ✅ Generated ${basename(outputPath)}`);
    formatFile(outputPath);
  }
}

/**
 * Main execution
 */
function main() {
  console.log('🎨 Generating component styles from tokens...\n');

  // Find all component token files
  const files = readdirSync(COMPONENTS_TOKENS_DIR)
    .filter(file => file.endsWith('.json'))
    .map(file => join(COMPONENTS_TOKENS_DIR, file));

  if (files.length === 0) {
    console.log('⚠️  No component token files found.');
    return;
  }

  console.log(`Found ${files.length} component(s) to process:\n`);

  files.forEach(processComponentFile);

  console.log('\n✨ Component styles generation complete!');
  console.log(`📁 Output: ${OUTPUT_DIR}\n`);
}

main();
