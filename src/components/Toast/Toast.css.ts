import { style, keyframes } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { tokens } from '../../tokens/generated';
import { toastBaseStyles, toastVariants } from '../../tokens/generated/components/toast.generated.css';

/**
 * Toast Animations
 */
const slideIn = keyframes({
  from: { transform: 'translateY(100%)', opacity: 0 },
  to: { transform: 'translateY(0)', opacity: 1 },
});

const slideOut = keyframes({
  from: { transform: 'translateY(0)', opacity: 1 },
  to: { transform: 'translateY(100%)', opacity: 0 },
});

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--toast-swipe-movement-x, 0))' },
  to: { transform: 'translateX(100%)' },
});

/**
 * Toast Root Recipe
 * Composed from toast tokens
 */
export const toastRoot = recipe({
  base: {
    // CSS implementation details
    all: 'unset',
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacing.sm,
    minWidth: '320px',
    maxWidth: '480px',
    boxSizing: 'border-box',
    position: 'relative',
    borderWidth: tokens['border-width'].default,
    borderStyle: 'solid',
    boxShadow: `0 4px 12px rgba(0, 0, 0, 0.1)`,
    willChange: 'transform, opacity',

    // From toast tokens (base styles)
    ...toastBaseStyles,

    // Animation on mount
    selectors: {
      '&[data-starting-style]': {
        animation: `${slideIn} 200ms ease-out`,
      },

      '&[data-ending-style]': {
        animation: `${slideOut} 150ms ease-in forwards`,
      },

      '&[data-swiping]': {
        transform: 'translateX(var(--toast-swipe-movement-x, 0))',
        transition: 'none',
      },

      '&[data-swipe-direction="right"][data-ending-style]': {
        animation: `${swipeOut} 100ms ease-out forwards`,
      },
    },
  },

  variants: toastVariants,

  defaultVariants: {
    variant: 'default',
  },
});

/**
 * Toast Content Container
 */
export const toastContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: tokens.spacing.xs,
  flex: 1,
  minWidth: 0,
});

/**
 * Toast Title
 */
export const toastTitle = style({
  ...tokens.typography['body-m'],
  fontWeight: '600',
  margin: 0,
});

/**
 * Toast Description
 */
export const toastDescription = style({
  ...tokens.typography['body-s'],
  margin: 0,
  opacity: 0.9,
});

/**
 * Toast Close Button
 */
export const toastClose = style({
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: tokens.sizing.md,
  height: tokens.sizing.md,
  cursor: 'pointer',
  borderRadius: tokens['border-radius'].sm,
  flexShrink: 0,
  transition: 'background-color 150ms, opacity 150ms',
  opacity: 0.7,

  ':hover': {
    opacity: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },

  ':focus-visible': {
    outline: `2px solid ${tokens.border.focus}`,
    outlineOffset: '2px',
  },
});

/**
 * Toast Viewport Recipe with positioning support
 */
export const toastViewport = recipe({
  base: {
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacing.sm,
    padding: tokens.spacing.lg,
    maxWidth: '100vw',
    margin: 0,
    listStyle: 'none',
    zIndex: 9999,
    outline: 'none',
  },

  variants: {
    position: {
      'top-left': {
        top: 0,
        left: 0,
      },
      'top-center': {
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
      },
      'top-right': {
        top: 0,
        right: 0,
      },
      'bottom-left': {
        bottom: 0,
        left: 0,
      },
      'bottom-center': {
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
      },
      'bottom-right': {
        bottom: 0,
        right: 0,
      },
    },
  },

  defaultVariants: {
    position: 'bottom-right',
  },
});
