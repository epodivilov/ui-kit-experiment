import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { tokens } from '../../tokens/generated';

/**
 * Checkbox Root Recipe
 * Composed from checkbox tokens
 */
export const checkboxRoot = recipe({
  base: {
    // CSS implementation details
    all: 'unset',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    userSelect: 'none',
    boxSizing: 'border-box',
    flexShrink: 0,

    // From checkbox tokens (global)
    borderRadius: tokens['border-radius'].sm,
    borderWidth: tokens['border-width'].default,
    borderStyle: 'solid',
    width: tokens.sizing.md,
    height: tokens.sizing.md,

    ':disabled': {
      cursor: 'not-allowed',
    },

    ':focus-visible': {
      outline: `2px solid ${tokens.border.focus}`,
      outlineOffset: '2px',
    },

    selectors: {
      '&[data-indeterminate]:not(:disabled)': {
        backgroundColor: tokens.interactive.primary.default.background,
        borderColor: tokens.interactive.primary.default.background,
      },

      '&[data-indeterminate]:hover:not(:disabled)': {
        backgroundColor: tokens.interactive.primary.hover.background,
        borderColor: tokens.interactive.primary.hover.background,
      },
    },
  },

  variants: {
    variant: {
      default: {
        // Default/unchecked state
        backgroundColor: tokens.background.surface,
        borderColor: tokens.border.default,

        selectors: {
          '&:hover:not(:disabled):not([data-checked])': {
            borderColor: tokens.border.hover,
          },

          '&:focus:not(:disabled)': {
            borderColor: tokens.border.focus,
          },

          '&[data-checked]:not(:disabled)': {
            backgroundColor: tokens.interactive.primary.default.background,
            borderColor: tokens.interactive.primary.default.background,
          },

          '&[data-checked]:hover:not(:disabled)': {
            backgroundColor: tokens.interactive.primary.hover.background,
            borderColor: tokens.interactive.primary.hover.background,
          },

          '&:disabled': {
            backgroundColor: tokens.background.disabled,
            borderColor: tokens.border.disabled,
          },
        },
      },

      error: {
        // Error/unchecked state
        backgroundColor: tokens.background.surface,
        borderColor: tokens.interactive.danger.default.background,

        selectors: {
          '&:hover:not(:disabled):not([data-checked])': {
            borderColor: tokens.interactive.danger.hover.background,
          },

          '&:focus:not(:disabled)': {
            borderColor: tokens.interactive.danger.default.background,
          },

          '&[data-checked]:not(:disabled)': {
            backgroundColor: tokens.interactive.danger.default.background,
            borderColor: tokens.interactive.danger.default.background,
          },

          '&[data-checked]:hover:not(:disabled)': {
            backgroundColor: tokens.interactive.danger.hover.background,
            borderColor: tokens.interactive.danger.hover.background,
          },

          '&:disabled': {
            backgroundColor: tokens.background.disabled,
            borderColor: tokens.border.disabled,
          },
        },
      },
    },
  },

  defaultVariants: {
    variant: 'default',
  },
});

/**
 * Checkbox Indicator Styles
 */
export const checkboxIndicator = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',

  selectors: {
    '[data-checked] &': {
      color: tokens.foreground['on-interactive'],
    },
    '[data-indeterminate] &': {
      color: tokens.foreground['on-interactive'],
    },
    '[data-disabled] &': {
      color: tokens.foreground.disabled,
    },
  },
});

/**
 * Indicator SVG (checkmark icon)
 */
export const checkmarkIcon = style({
  width: '80%',
  height: '80%',
});
