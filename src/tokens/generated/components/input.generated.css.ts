/**
 * Input Component Styles
 * Auto-generated from design tokens - DO NOT EDIT
 */
import { tokens } from '../index';

export const inputBaseStyles = {
  minHeight: tokens.sizing.lg,
  ...tokens.typography['body-m'],
  borderWidth: tokens['border-width'].thin,
  borderRadius: tokens['border-radius'].md,
  paddingBlock: tokens.spacing.sm,
  paddingInline: tokens.spacing.md,
};

export const inputVariants = {
  variant: {
    error: {
      borderColor: tokens.interactive.danger.default.background,
      backgroundColor: tokens.background.surface,
      color: tokens.foreground.default,
      selectors: {
        '&:hover:not(:disabled)': {
          borderColor: tokens.interactive.danger.hover.background,
        },
        '&:focus': {
          borderColor: tokens.interactive.danger.default.background,
        },
        '&:disabled': {
          borderColor: tokens.border.disabled,
          backgroundColor: tokens.background.disabled,
          color: tokens.foreground.disabled,
        },
      },
    },
    default: {
      borderColor: tokens.border.default,
      backgroundColor: tokens.background.surface,
      color: tokens.foreground.default,
      selectors: {
        '&:hover:not(:disabled)': {
          borderColor: tokens.border.hover,
        },
        '&:focus': {
          borderColor: tokens.border.focus,
        },
        '&:disabled': {
          borderColor: tokens.border.disabled,
          backgroundColor: tokens.background.disabled,
          color: tokens.foreground.disabled,
        },
      },
    },
  },
};
