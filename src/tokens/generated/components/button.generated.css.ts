/**
 * Button Component Styles
 * Auto-generated from design tokens - DO NOT EDIT
 */
import { tokens } from '../index';

export const buttonBaseStyles = {
  borderRadius: tokens['border-radius'].md,
};

export const buttonVariants = {
  size: {
    large: {
      minHeight: tokens.sizing.lg,
      ...tokens.typography['body-l'],
      paddingBlock: tokens.spacing.md,
      paddingInline: tokens.spacing.lg,
    },
    small: {
      minHeight: tokens.sizing.sm,
      ...tokens.typography['body-s'],
      paddingBlock: tokens.spacing.xs,
      paddingInline: tokens.spacing.sm,
    },
    medium: {
      minHeight: tokens.sizing.md,
      ...tokens.typography['body-m'],
      paddingBlock: tokens.spacing.sm,
      paddingInline: tokens.spacing.md,
    },
  },
  variant: {
    danger: {
      borderColor: tokens.interactive.danger.default.background,
      backgroundColor: tokens.interactive.danger.default.background,
      color: tokens.interactive.danger.default.foreground,
      selectors: {
        '&:hover:not(:disabled)': {
          borderColor: tokens.interactive.danger.hover.background,
          backgroundColor: tokens.interactive.danger.hover.background,
          color: tokens.interactive.danger.hover.foreground,
        },
        '&:active:not(:disabled)': {
          borderColor: tokens.interactive.danger.active.background,
          backgroundColor: tokens.interactive.danger.active.background,
          color: tokens.interactive.danger.active.foreground,
        },
        '&:focus': {
          borderColor: tokens.border.focus,
          color: tokens.interactive.danger.focus.foreground,
        },
        '&:disabled': {
          borderColor: tokens.interactive.danger.disabled.background,
          backgroundColor: tokens.interactive.danger.disabled.background,
          color: tokens.interactive.danger.disabled.foreground,
        },
      },
    },
    primary: {
      borderColor: tokens.interactive.primary.default.background,
      backgroundColor: tokens.interactive.primary.default.background,
      color: tokens.interactive.primary.default.foreground,
      selectors: {
        '&:hover:not(:disabled)': {
          borderColor: tokens.interactive.primary.hover.background,
          backgroundColor: tokens.interactive.primary.hover.background,
          color: tokens.interactive.primary.hover.foreground,
        },
        '&:active:not(:disabled)': {
          borderColor: tokens.interactive.primary.active.background,
          backgroundColor: tokens.interactive.primary.active.background,
          color: tokens.interactive.primary.active.foreground,
        },
        '&:focus': {
          borderColor: tokens.border.focus,
          color: tokens.interactive.primary.focus.foreground,
        },
        '&:disabled': {
          borderColor: tokens.interactive.primary.disabled.background,
          backgroundColor: tokens.interactive.primary.disabled.background,
          color: tokens.interactive.primary.disabled.foreground,
        },
      },
    },
    secondary: {
      borderColor: tokens.border.default,
      borderWidth: '1px',
      backgroundColor: tokens.interactive.secondary.default.background,
      color: tokens.interactive.secondary.default.foreground,
      selectors: {
        '&:hover:not(:disabled)': {
          borderColor: tokens.border.hover,
          backgroundColor: tokens.interactive.secondary.hover.background,
          color: tokens.interactive.secondary.hover.foreground,
        },
        '&:active:not(:disabled)': {
          borderColor: tokens.border.default,
          backgroundColor: tokens.interactive.secondary.active.background,
          color: tokens.interactive.secondary.active.foreground,
        },
        '&:focus': {
          borderColor: tokens.border.focus,
          color: tokens.interactive.secondary.focus.foreground,
        },
        '&:disabled': {
          borderColor: tokens.border.disabled,
          backgroundColor: tokens.interactive.secondary.disabled.background,
          color: tokens.interactive.secondary.disabled.foreground,
        },
      },
    },
  },
  fullWidth: {
    true: {
      width: '100%',
    },
  },
};
