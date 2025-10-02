import { recipe } from '@vanilla-extract/recipes';

import { tokens } from '../../tokens/generated';
import {
  buttonBaseStyles,
  buttonVariants,
} from '../../tokens/generated/components/button.generated.css';

/**
 * Button Recipe
 * Composed from generated styles and manual additions
 */
export const button = recipe({
  base: {
    // CSS implementation details
    all: 'unset',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    userSelect: 'none',
    boxSizing: 'border-box',

    // From generated tokens
    ...buttonBaseStyles,

    // Manual additions for focus state
    ':disabled': {
      cursor: 'default',
    },

    ':focus-visible': {
      outline: `2px solid ${tokens.border.focus}`,
      outlineOffset: '2px',
    },
  },

  // Use generated variants
  variants: buttonVariants,

  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
});
