import { recipe } from '@vanilla-extract/recipes';

import {
  radioBaseStyles,
  radioGroupBaseStyles,
  radioIndicatorBaseStyles,
  radioIndicatorVariants,
  radioVariants,
} from '../../tokens/generated/components/radio.generated.css';

/**
 * Radio Root Recipe
 * Composed from radio tokens
 */
export const radioRoot = recipe({
  base: {
    // CSS reset
    all: 'unset',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    userSelect: 'none',
    boxSizing: 'border-box',
    flexShrink: 0,
    position: 'relative',

    // From radio tokens
    width: radioBaseStyles.size,
    height: radioBaseStyles.size,
    borderRadius: radioBaseStyles.borderRadius,
    borderWidth: radioBaseStyles.borderWidth,
    borderStyle: 'solid',

    // Direct pseudo-selectors in base block
    ':disabled': {
      cursor: 'not-allowed',
    },

    ':focus-visible': {
      outline: '2px solid',
      outlineOffset: '2px',
    },
  },

  variants: radioVariants,

  defaultVariants: {
    variant: 'default',
  },
});

/**
 * RadioGroup Recipe
 * Composed from radio-group tokens
 */
export const radioGroup = recipe({
  base: {
    // CSS reset
    all: 'unset',
    display: 'flex',
    boxSizing: 'border-box',

    // From radio-group tokens
    gap: radioGroupBaseStyles.gap,
  },

  variants: {
    orientation: {
      vertical: {
        flexDirection: 'column' as const,
      },
      horizontal: {
        flexDirection: 'row' as const,
      },
    },
  },

  defaultVariants: {
    orientation: 'vertical',
  },
});

/**
 * RadioIndicator Recipe
 * Composed from radio-indicator tokens
 */
export const radioIndicator = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: radioIndicatorBaseStyles.width,
    height: radioIndicatorBaseStyles.height,
    borderRadius: radioIndicatorBaseStyles.borderRadius,
    pointerEvents: 'none',

    // Hide indicator when not checked
    opacity: 0,
    transform: 'scale(0)',
    transition: 'all 0.15s ease',

    // Show indicator when checked
    selectors: {
      '[data-checked] &': {
        opacity: 1,
        transform: 'scale(1)',
      },
    },
  },

  variants: radioIndicatorVariants,

  defaultVariants: {
    variant: 'default',
  },
});
