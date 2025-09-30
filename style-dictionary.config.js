/**
 * Style Dictionary Configuration
 *
 * This configuration transforms design tokens from JSON into usable formats
 * for both CSS and Vanilla-Extract styling systems.
 */

export default {
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
      transformGroup: 'css',
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
      transformGroup: 'js',
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
      transformGroup: 'js',
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
