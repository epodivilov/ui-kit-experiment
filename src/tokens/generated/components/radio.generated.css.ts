/**
 * Radio Component Styles
 * Auto-generated from design tokens - DO NOT EDIT
 *
 * This file contains styles for:
 * - radio
 * - radio-group
 * - radio-indicator
 */
import { tokens } from '../index';

export const radioBaseStyles = {
  size: tokens.sizing.md,
  borderWidth: tokens['border-width'].default,
  borderRadius: tokens['border-radius'].full,
};

export const radioVariants = {
  variant: {
    error: {
      borderColor: tokens.interactive.danger.default.background,
      backgroundColor: tokens.background.surface,
      selectors: {
        '&:hover:not(:disabled)': {
          borderColor: tokens.interactive.danger.hover.background,
          backgroundColor: tokens.background.surface,
        },
        '&:active:not(:disabled)': {
          borderColor: tokens.interactive.danger.active.background,
          backgroundColor: tokens.background.surface,
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
      backgroundColor: tokens.background.surface,
      selectors: {
        '&:hover:not(:disabled)': {
          borderColor: tokens.border.hover,
          backgroundColor: tokens.background.surface,
        },
        '&:active:not(:disabled)': {
          borderColor: tokens.border.default,
          backgroundColor: tokens.background.surface,
        },
        '&:focus': {
          borderColor: tokens.border.focus,
        },
        '&:disabled': {
          borderColor: tokens.border.disabled,
          backgroundColor: tokens.background.disabled,
        },
      },
    },
  },
};

export const radioGroupBaseStyles = {
  gap: tokens.spacing.md,
};

export const radioGroupVariants = {
  orientation: {
    vertical: {
      flexDirection: 'column',
    },
    horizontal: {
      flexDirection: 'row',
    },
  },
};

export const radioIndicatorBaseStyles = {
  backgroundColor: tokens.interactive.primary.default.background,
  borderRadius: tokens['border-radius'].full,
  width: tokens.sizing.xs,
  height: tokens.sizing.xs,
};

export const radioIndicatorVariants = {
  variant: {
    error: {
      backgroundColor: tokens.interactive.danger.default.background,
      selectors: {
        '&:hover:not(:disabled)': {
          backgroundColor: tokens.interactive.danger.hover.background,
        },
        '&:active:not(:disabled)': {
          backgroundColor: tokens.interactive.danger.active.background,
        },
        '&:disabled': {
          backgroundColor: tokens.interactive.danger.disabled.background,
        },
      },
    },
    default: {
      backgroundColor: tokens.interactive.primary.default.background,
      selectors: {
        '&:hover:not(:disabled)': {
          backgroundColor: tokens.interactive.primary.hover.background,
        },
        '&:active:not(:disabled)': {
          backgroundColor: tokens.interactive.primary.active.background,
        },
        '&:disabled': {
          backgroundColor: tokens.interactive.primary.disabled.background,
        },
      },
    },
  },
};
