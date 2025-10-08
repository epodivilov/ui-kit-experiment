/**
 * Toast Component Styles
 * Auto-generated from design tokens - DO NOT EDIT
 */
import { tokens } from '../index';

export const toastBaseStyles = {
  ...tokens.typography['body-s'],
  borderRadius: tokens['border-radius'].lg,
  paddingBlock: tokens.spacing.sm,
  paddingInline: tokens.spacing.md,
};

export const toastVariants = {
  variant: {
    error: {
      backgroundColor: tokens.interactive.danger.default.background,
      color: tokens.foreground['on-danger'],
    },
    default: {
      borderColor: tokens.border.default,
      backgroundColor: tokens.background.elevated,
      color: tokens.foreground.default,
    },
    success: {
      backgroundColor: tokens.interactive.success.default.background,
      color: tokens.foreground['on-success'],
    },
    warning: {
      backgroundColor: tokens.interactive.warning.default.background,
      color: tokens.foreground['on-warning'],
    },
  },
};
