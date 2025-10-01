/**
 * Style Dictionary Configuration
 *
 * This configuration transforms design tokens from JSON into usable formats
 * for both CSS and Vanilla-Extract styling systems.
 */

/**
 * Preprocessor: Evaluate math expressions in token values
 * Handles expressions like "{primitives.sizing.base} * 2" → "8px"
 */
function mathPreprocessor(dictionary) {
  // Helper to get token value by path
  function getTokenValue(path, tokens) {
    const parts = path.split('.');
    let current = tokens;

    for (const part of parts) {
      current = current?.[part];
    }

    return current?.value;
  }

  // Helper to evaluate math expressions
  function evaluateMath(value, tokens) {
    if (typeof value !== 'string') return value;

    // Check if it contains math operators
    if (!value.includes('*') && !value.includes('+') && !value.includes('-') && !value.includes('/')) {
      return value;
    }

    try {
      // Replace token references first
      let resolved = value;
      const refRegex = /\{([^}]+)\}/g;
      let match;

      while ((match = refRegex.exec(value)) !== null) {
        const refValue = getTokenValue(match[1], tokens);
        if (refValue) {
          resolved = resolved.replace(match[0], refValue);
        }
      }

      // Now evaluate math if still contains operators
      if (resolved.includes('*') || resolved.includes('+') || resolved.includes('-') || resolved.includes('/')) {
        // Extract unit
        const unit = resolved.match(/(px|rem|em|%)/)?.[0] || '';
        // Remove units for calculation
        const numericExpr = resolved.replace(/px|rem|em|%/g, '').trim();
        // Evaluate
        const result = eval(numericExpr);
        return result + unit;
      }

      return resolved;
    } catch (e) {
      console.warn(`Failed to evaluate math: ${value}`, e.message);
      return value;
    }
  }

  // Recursively process all tokens
  function processTokens(obj) {
    for (const key in obj) {
      if (obj[key] && typeof obj[key] === 'object') {
        if (obj[key].value !== undefined) {
          obj[key].value = evaluateMath(obj[key].value, dictionary);
        } else {
          processTokens(obj[key]);
        }
      }
    }
  }

  processTokens(dictionary);
  return dictionary;
}

/**
 * Transform: Convert shadow objects to CSS shadow strings
 * Works for both CSS and JS/TS outputs (CSS-in-JS needs strings)
 * Note: This must run AFTER color transforms to get resolved color values
 */
const shadowToCssTransform = {
  type: 'value',
  transitive: false,  // Run after other transforms
  name: 'shadow/css',
  matcher: (token) => token.type === 'boxShadow',
  transformer: (token) => {
    const value = token.value;

    // Helper to convert single shadow object to CSS string
    function shadowToString(shadow) {
      // If already a string, return it
      if (typeof shadow === 'string') return shadow;

      const { x, y, blur, spread, color } = shadow;
      return `${x}px ${y}px ${blur}px ${spread}px ${color}`;
    }

    // If already a string, return it
    if (typeof value === 'string') return value;

    // Handle single shadow object
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      return shadowToString(value);
    }

    // Handle array of shadow objects
    if (Array.isArray(value)) {
      return value.map(shadowToString).join(', ');
    }

    return value;
  }
};

export default {
  // Register custom hooks
  hooks: {
    preprocessors: {
      'math-evaluator': mathPreprocessor
    },
    transforms: {
      'shadow/css': shadowToCssTransform
    }
  },

  // Use math preprocessor
  preprocessors: ['math-evaluator'],

  // Source files containing design tokens
  // Note: We exclude semantic/contract.json to avoid collisions - themes override it
  source: [
    'tokens/primitives/**/*.json',
    'tokens/themes/**/*.json',
    'tokens/components/**/*.json'
  ],

  // Define different platforms/outputs
  platforms: {
    // CSS Custom Properties for web applications
    css: {
      // Use CSS transform group + our custom shadow transform
      transforms: [
        'attribute/cti',
        'name/kebab',
        'time/seconds',
        'html/icon',
        'size/rem',
        'color/css',
        'shadow/css'
      ],
      buildPath: 'src/tokens/generated/css/',
      files: [
        {
          destination: 'primitives.css',
          format: 'css/variables',
          filter: (token) => token.path[0] === 'primitives',
          options: {
            outputReferences: true,
            selector: ':root'
          }
        },
        {
          destination: 'semantic-light.css',
          format: 'css/variables',
          filter: (token) => token.filePath.includes('themes/light'),
          options: {
            outputReferences: true,
            selector: '[data-theme="light"]'
          }
        },
        {
          destination: 'semantic-dark.css',
          format: 'css/variables',
          filter: (token) => token.filePath.includes('themes/dark'),
          options: {
            outputReferences: true,
            selector: '[data-theme="dark"]'
          }
        },
        {
          destination: 'components.css',
          format: 'css/variables',
          filter: (token) => token.path[0] === 'components',
          options: {
            outputReferences: true,
            selector: ':root'
          }
        }
      ]
    },

    // JavaScript/TypeScript exports for Vanilla-Extract
    js: {
      // Use JS transform group (shadows stay as CSS strings for compatibility)
      transforms: [
        'attribute/cti',
        'name/pascal',
        'size/rem',
        'color/hex',
        'shadow/css'  // Convert to strings for CSS-in-JS compatibility
      ],
      buildPath: 'src/tokens/generated/js/',
      files: [
        {
          destination: 'primitives.ts',
          format: 'javascript/es6',
          filter: (token) => token.path[0] === 'primitives',
          options: {
            outputReferences: false
          }
        },
        {
          destination: 'semantic-light.ts',
          format: 'javascript/es6',
          filter: (token) => token.filePath.includes('themes/light'),
          options: {
            outputReferences: false
          }
        },
        {
          destination: 'semantic-dark.ts',
          format: 'javascript/es6',
          filter: (token) => token.filePath.includes('themes/dark'),
          options: {
            outputReferences: false
          }
        },
        {
          destination: 'components.ts',
          format: 'javascript/es6',
          filter: (token) => token.path[0] === 'components',
          options: {
            outputReferences: false
          }
        }
      ]
    },

    // JSON for documentation and debugging
    json: {
      transforms: [
        'attribute/cti',
        'name/pascal',
        'shadow/css'
      ],
      buildPath: 'src/tokens/generated/json/',
      files: [
        {
          destination: 'all-tokens.json',
          format: 'json/nested'
        }
      ]
    }
  },

  // Logging configuration
  log: {
    warnings: 'warn',
    verbosity: 'default',
    errors: {
      brokenReferences: 'throw'
    }
  }
};
