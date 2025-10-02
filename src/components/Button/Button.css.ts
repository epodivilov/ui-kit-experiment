import { recipe } from '@vanilla-extract/recipes';

import { tokens } from '../../tokens/generated';

/**
 * Button Recipe
 * Uses design tokens from the generated theme contract.
 */
export const button = recipe({
  base: {
    all: 'unset',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'inherit',
    fontWeight: 500,
    lineHeight: 1,
    cursor: 'pointer',
    borderRadius: tokens['border-radius'].md,
    userSelect: 'none',
    boxSizing: 'border-box',

    ':focus-visible': {
      outline: `2px solid ${tokens.border.focus}`,
      outlineOffset: '2px',
    },
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: tokens.interactive.primary.default.background,
        color: tokens.interactive.primary.default.foreground,

        selectors: {
          '&:hover:not(:disabled)': {
            backgroundColor: tokens.interactive.primary.hover.background,
          },

          '&:active:not(:disabled)': {
            backgroundColor: tokens.interactive.primary.active.background,
          },

          '&:disabled': {
            backgroundColor: tokens.interactive.primary.disabled.background,
            color: tokens.interactive.primary.disabled.foreground,
          },
        },
      },

      secondary: {
        backgroundColor: tokens.interactive.secondary.default.background,
        color: tokens.interactive.secondary.default.foreground,
        border: `1px solid ${tokens.border.default}`,

        selectors: {
          '&:hover:not(:disabled)': {
            backgroundColor: tokens.interactive.secondary.hover.background,
            borderColor: tokens.border.hover,
          },

          '&:active:not(:disabled)': {
            backgroundColor: tokens.interactive.secondary.active.background,
          },

          '&:disabled': {
            backgroundColor: tokens.interactive.secondary.disabled.background,
            color: tokens.interactive.secondary.disabled.foreground,
            borderColor: tokens.border.disabled,
          },
        },
      },

      danger: {
        backgroundColor: tokens.interactive.danger.default.background,
        color: tokens.interactive.danger.default.foreground,

        selectors: {
          '&:hover:not(:disabled)': {
            backgroundColor: tokens.interactive.danger.hover.background,
          },

          '&:active:not(:disabled)': {
            backgroundColor: tokens.interactive.danger.active.background,
          },

          '&:disabled': {
            backgroundColor: tokens.interactive.danger.disabled.background,
            color: tokens.interactive.danger.disabled.foreground,
          },
        },
      },
    },

    size: {
      small: {
        padding: `${tokens.spacing.xs} ${tokens.spacing.sm}`,
        fontSize: tokens.typography['body-s'],
        minHeight: tokens.sizing.sm,
      },

      medium: {
        padding: `${tokens.spacing.sm} ${tokens.spacing.md}`,
        fontSize: tokens.typography['body-m'],
        minHeight: tokens.sizing.md,
      },

      large: {
        padding: `${tokens.spacing.md} ${tokens.spacing.lg}`,
        fontSize: tokens.typography['body-l'],
        minHeight: tokens.sizing.lg,
      },
    },

    fullWidth: {
      true: {
        width: '100%',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
});
