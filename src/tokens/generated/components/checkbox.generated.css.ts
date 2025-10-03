/**
 * Checkbox Component Styles
 * Auto-generated from design tokens - DO NOT EDIT
 */
import { tokens } from '../index';

export const checkboxBaseStyles = {
  borderRadius: tokens['border-radius'].sm,
  borderWidth: tokens['border-width'].default,
  size: tokens.sizing.md
};

export const checkboxVariants = {
  'variant': {
    'default':   {
    backgroundColor: tokens.background.surface,
    borderColor: tokens.border.default,
    indicatorColor: tokens.foreground['on-interactive'],
    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: tokens.background.surface,
        borderColor: tokens.border.hover
      },
      '&:focus': {
        borderColor: tokens.border.focus
      },
      '&:disabled': {
        backgroundColor: tokens.background.disabled,
        borderColor: tokens.border.disabled,
        indicatorColor: tokens.foreground.disabled
      }
    }
  },
    'error':   {
    backgroundColor: tokens.background.surface,
    borderColor: tokens.interactive.danger.default.background,
    indicatorColor: tokens.foreground['on-danger'],
    selectors: {
      '&:hover:not(:disabled)': {
        borderColor: tokens.interactive.danger.hover.background
      },
      '&:focus': {
        borderColor: tokens.interactive.danger.default.background
      },
      '&:disabled': {
        backgroundColor: tokens.background.disabled,
        borderColor: tokens.border.disabled
      }
    }
  }
  }
};
