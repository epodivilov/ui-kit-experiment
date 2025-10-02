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

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const COMPONENTS_TOKENS_DIR = join(__dirname, 'tokens/4-components');
const OUTPUT_DIR = join(__dirname, 'src/tokens/generated/components');

// Ensure output directory exists
mkdirSync(OUTPUT_DIR, { recursive: true });

/**
 * Convert kebab-case to camelCase
 */
function toCamelCase(str) {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
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
    const tokenPath = parts.slice(1).map(part =>
      part.includes('-') ? `['${part}']` : `.${part}`
    ).join('');
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
    const value = tokenDef.value;
    const type = tokenDef.type;

    if (type === 'typography') {
      // Typography is spread
      const tokenRef = resolveTokenReference(value);
      styles.push(`  ...${tokenRef}`);
    } else {
      const tokenRef = resolveTokenReference(value);
      styles.push(`  ${cssProp}: ${tokenRef}`);
    }
  }

  return `export const ${componentName}BaseStyles = {
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
    disabled: {}
  };

  for (const [propName, value] of Object.entries(optionData)) {
    const cssProp = getCSSProperty(propName);

    // Check if value has states (default, hover, etc.)
    if (value && typeof value === 'object' && !value.value) {
      // Has states
      const states = value;

      // Default state
      if (states.default) {
        const tokenRef = resolveTokenReference(states.default.value);
        defaultStyles.push(`    ${cssProp}: ${tokenRef}`);
      }

      // Collect selectors
      if (states.hover) {
        selectorsMap.hover[cssProp] = resolveTokenReference(states.hover.value);
      }
      if (states.active) {
        selectorsMap.active[cssProp] = resolveTokenReference(states.active.value);
      }
      if (states.focus && propName !== 'background-color') {
        selectorsMap.focus[cssProp] = resolveTokenReference(states.focus.value);
      }
      if (states.disabled) {
        selectorsMap.disabled[cssProp] = resolveTokenReference(states.disabled.value);
      }
    } else if (value && value.value !== undefined) {
      // Simple property
      const type = value.type;

      if (type === 'typography') {
        const tokenRef = resolveTokenReference(value.value);
        defaultStyles.push(`    ...${tokenRef}`);
      } else {
        const tokenRef = resolveTokenReference(value.value);
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

  return `export const ${componentName}Variants = {
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

/**
 * Process a single component token file
 */
function processComponentFile(filepath) {
  const content = readFileSync(filepath, 'utf8');
  const tokens = JSON.parse(content);

  // Get component name from tokens (first key)
  const componentName = Object.keys(tokens)[0];
  const componentData = tokens[componentName];

  console.log(`📦 Processing ${componentName}...`);

  const styles = generateComponentStyles(componentData, componentName);

  const outputPath = join(OUTPUT_DIR, `${componentName}.generated.css.ts`);
  writeFileSync(outputPath, styles, 'utf8');

  console.log(`   ✅ Generated ${basename(outputPath)}`);
}

/**
 * Main execution
 */
function main() {
  console.log('🎨 Generating component styles from tokens...\n');

  // Find all component token files
  const files = readdirSync(COMPONENTS_TOKENS_DIR)
    .filter(file => file.endsWith('.json'))
    .filter(file => !file.startsWith('ARCHITECTURE') && !file.startsWith('PROPOSAL'))
    .filter(file => file !== 'button.json') // Skip old button.json for now
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
