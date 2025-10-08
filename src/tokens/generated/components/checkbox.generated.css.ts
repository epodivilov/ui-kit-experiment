/**
 * Checkbox Component Styles
 * Auto-generated from design tokens - DO NOT EDIT
 */
import { tokens } from '../index';

export const checkboxBaseStyles = {
  size: tokens.sizing.md,
  borderWidth: tokens['border-width'].default,
  borderRadius: tokens['border-radius'].sm,
};

export const checkboxVariants = {
  variant: {
    error: {
      borderColor: tokens.interactive.danger.default.background,
      indicatorColor: tokens.foreground['on-danger'],
      backgroundColor: tokens.background.surface,
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
        },
      },
    },
    default: {
      borderColor: tokens.border.default,
      indicatorColor: tokens.foreground['on-interactive'],
      backgroundColor: tokens.background.surface,
      selectors: {
        '&:hover:not(:disabled)': {
          borderColor: tokens.border.hover,
          backgroundColor: tokens.background.surface,
        },
        '&:focus': {
          borderColor: tokens.border.focus,
        },
        '&:disabled': {
          borderColor: tokens.border.disabled,
          indicatorColor: tokens.foreground.disabled,
          backgroundColor: tokens.background.disabled,
        },
      },
    },
  },
};
