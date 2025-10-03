/**
 * Toast Component Styles
 * Auto-generated from design tokens - DO NOT EDIT
 */
import { tokens } from '../index';

export const toastBaseStyles = {
  borderRadius: tokens['border-radius'].lg,
  paddingInline: tokens.spacing.md,
  paddingBlock: tokens.spacing.sm,
  ...tokens.typography['body-s']
};

export const toastVariants = {
  'variant': {
    'default':   {
    backgroundColor: tokens.background.elevated,
    color: tokens.foreground.default,
    borderColor: tokens.border.default
  },
    'success':   {
    backgroundColor: tokens.interactive.success.default.background,
    color: tokens.foreground['on-success']
  },
    'error':   {
    backgroundColor: tokens.interactive.danger.default.background,
    color: tokens.foreground['on-danger']
  },
    'warning':   {
    backgroundColor: tokens.interactive.warning.default.background,
    color: tokens.foreground['on-warning']
  }
  }
};
