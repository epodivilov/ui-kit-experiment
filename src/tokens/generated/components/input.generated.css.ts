/**
 * Input Component Styles
 * Auto-generated from design tokens - DO NOT EDIT
 */
import { tokens } from '../index';

export const inputBaseStyles = {
  borderRadius: tokens['border-radius'].md,
  borderWidth: tokens['border-width'].thin,
  paddingInline: tokens.spacing.md,
  paddingBlock: tokens.spacing.sm,
  ...tokens.typography['body-m'],
  minHeight: tokens.sizing.lg
};

export const inputVariants = {
  'variant': {
    'default':   {
    backgroundColor: tokens.background.surface,
    color: tokens.foreground.default,
    borderColor: tokens.border.default,
    selectors: {
      '&:hover:not(:disabled)': {
        borderColor: tokens.border.hover
      },
      '&:focus': {
        borderColor: tokens.border.focus
      },
      '&:disabled': {
        backgroundColor: tokens.background.disabled,
        color: tokens.foreground.disabled,
        borderColor: tokens.border.disabled
      }
    }
  },
    'error':   {
    backgroundColor: tokens.background.surface,
    color: tokens.foreground.default,
    borderColor: tokens.interactive.danger.default.background,
    selectors: {
      '&:hover:not(:disabled)': {
        borderColor: tokens.interactive.danger.hover.background
      },
      '&:focus': {
        borderColor: tokens.interactive.danger.default.background
      },
      '&:disabled': {
        backgroundColor: tokens.background.disabled,
        color: tokens.foreground.disabled,
        borderColor: tokens.border.disabled
      }
    }
  }
  }
};
