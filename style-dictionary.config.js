/**
 * Style Dictionary Configuration
 *
 * Transforms design tokens from Token Studio 4-tier hierarchy into CSS and JS outputs
 * Architecture: Core (Layer 1) → Semantic (Layer 2) → Themes (Layer 3) → Components (Layer 4)
 */

export default {
  // Source files for Light theme
  // Note: 2-semantic/contract.json is excluded - it's only a contract, themes provide implementations
  source: [
    'tokens/1-core/**/*.json',
    'tokens/3-themes/base.json',
    'tokens/3-themes/light/**/*.json',
    'tokens/4-components/**/*.json'
  ],

  // Define different platforms/outputs
  platforms: {
    // CSS Custom Properties
    css: {
      transforms: [
        'attribute/cti',
        'name/kebab',
        'color/css'
      ],
      buildPath: 'src/tokens/generated/css/',
      files: [
        {
          destination: 'tokens-light.css',
          format: 'css/variables',
          options: {
            outputReferences: true,
            selector: ':root, [data-theme="light"]'
          }
        }
      ]
    },

    // JavaScript/TypeScript exports
    js: {
      transforms: [
        'attribute/cti',
        'name/pascal',
        'color/hex'
      ],
      buildPath: 'src/tokens/generated/js/',
      files: [
        {
          destination: 'tokens-light.ts',
          format: 'javascript/es6',
          options: {
            outputReferences: false
          }
        }
      ]
    },

    // JSON for debugging
    json: {
      transforms: [
        'attribute/cti',
        'name/pascal'
      ],
      buildPath: 'src/tokens/generated/json/',
      files: [
        {
          destination: 'tokens-light.json',
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
