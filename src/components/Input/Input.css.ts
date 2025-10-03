import { recipe } from '@vanilla-extract/recipes';

import {
  inputBaseStyles,
  inputVariants,
} from '../../tokens/generated/components/input.generated.css';

/**
 * Input Recipe
 * Composed from input tokens with CSS implementation details
 */
export const input = recipe({
  base: {
    // CSS reset
    all: 'unset',

    // CSS implementation details (NOT in tokens)
    display: 'inline-flex',
    boxSizing: 'border-box',
    cursor: 'text',
    borderStyle: 'solid',

    // From generated tokens
    ...inputBaseStyles,

    // CSS-specific overrides (not theme-related)
    ':disabled': {
      cursor: 'not-allowed',
    },
    ':focus': {
      outline: 'none',
    },
    '::placeholder': {
      opacity: 0.5,
    },
  },

  // Use generated variants directly
  variants: inputVariants,

  defaultVariants: {
    variant: 'default',
  },
});
