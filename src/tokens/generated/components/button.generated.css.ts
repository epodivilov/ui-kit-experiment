/**
 * Button Component Styles
 * Auto-generated from design tokens - DO NOT EDIT
 */
import { tokens } from '../index';

export const buttonBaseStyles = {
  borderRadius: tokens['border-radius'].md
};

export const buttonVariants = {
  'variant': {
    'primary':   {
    backgroundColor: tokens.interactive.primary.default.background,
    color: tokens.interactive.primary.default.foreground,
    borderColor: tokens.interactive.primary.default.background,
    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: tokens.interactive.primary.hover.background,
        color: tokens.interactive.primary.hover.foreground,
        borderColor: tokens.interactive.primary.hover.background
      },
      '&:active:not(:disabled)': {
        backgroundColor: tokens.interactive.primary.active.background,
        color: tokens.interactive.primary.active.foreground,
        borderColor: tokens.interactive.primary.active.background
      },
      '&:focus': {
        color: tokens.interactive.primary.focus.foreground,
        borderColor: tokens.border.focus
      },
      '&:disabled': {
        backgroundColor: tokens.interactive.primary.disabled.background,
        color: tokens.interactive.primary.disabled.foreground,
        borderColor: tokens.interactive.primary.disabled.background
      }
    }
  },
    'secondary':   {
    backgroundColor: tokens.interactive.secondary.default.background,
    color: tokens.interactive.secondary.default.foreground,
    borderColor: tokens.border.default,
    borderWidth: '1px',
    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: tokens.interactive.secondary.hover.background,
        color: tokens.interactive.secondary.hover.foreground,
        borderColor: tokens.border.hover
      },
      '&:active:not(:disabled)': {
        backgroundColor: tokens.interactive.secondary.active.background,
        color: tokens.interactive.secondary.active.foreground,
        borderColor: tokens.border.default
      },
      '&:focus': {
        color: tokens.interactive.secondary.focus.foreground,
        borderColor: tokens.border.focus
      },
      '&:disabled': {
        backgroundColor: tokens.interactive.secondary.disabled.background,
        color: tokens.interactive.secondary.disabled.foreground,
        borderColor: tokens.border.disabled
      }
    }
  },
    'danger':   {
    backgroundColor: tokens.interactive.danger.default.background,
    color: tokens.interactive.danger.default.foreground,
    borderColor: tokens.interactive.danger.default.background,
    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: tokens.interactive.danger.hover.background,
        color: tokens.interactive.danger.hover.foreground,
        borderColor: tokens.interactive.danger.hover.background
      },
      '&:active:not(:disabled)': {
        backgroundColor: tokens.interactive.danger.active.background,
        color: tokens.interactive.danger.active.foreground,
        borderColor: tokens.interactive.danger.active.background
      },
      '&:focus': {
        color: tokens.interactive.danger.focus.foreground,
        borderColor: tokens.border.focus
      },
      '&:disabled': {
        backgroundColor: tokens.interactive.danger.disabled.background,
        color: tokens.interactive.danger.disabled.foreground,
        borderColor: tokens.interactive.danger.disabled.background
      }
    }
  }
  },
  'size': {
    'small':   {
    paddingBlock: tokens.spacing.xs,
    paddingInline: tokens.spacing.sm,
    ...tokens.typography['body-s'],
    minHeight: tokens.sizing.sm
  },
    'medium':   {
    paddingBlock: tokens.spacing.sm,
    paddingInline: tokens.spacing.md,
    ...tokens.typography['body-m'],
    minHeight: tokens.sizing.md
  },
    'large':   {
    paddingBlock: tokens.spacing.md,
    paddingInline: tokens.spacing.lg,
    ...tokens.typography['body-l'],
    minHeight: tokens.sizing.lg
  }
  },
  'fullWidth': {
    'true':   {
    width: '100%'
  }
  }
};
