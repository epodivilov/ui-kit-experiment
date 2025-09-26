import { style, keyframes } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { themeContract } from '../../themes/contracts/theme.css';

/**
 * Check mark animation
 */
const checkmarkKeyframes = keyframes({
  '0%': {
    strokeDashoffset: '16px',
    opacity: 0,
  },
  '50%': {
    opacity: 1,
  },
  '100%': {
    strokeDashoffset: '0px',
    opacity: 1,
  },
});

/**
 * Checkbox root recipe
 */
export const checkboxRecipe = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'flex-start',
    gap: themeContract.spacing[2],
    fontFamily: themeContract.typography.fontFamily.sans,
    cursor: 'pointer',
    userSelect: 'none',

    selectors: {
      '&:where([data-disabled="true"])': {
        opacity: 0.6,
        cursor: 'not-allowed',
      },
    },
  },

  variants: {
    size: {
      small: {
        fontSize: themeContract.typography.fontSize.sm,
        lineHeight: themeContract.typography.lineHeight.tight,
      },
      medium: {
        fontSize: themeContract.typography.fontSize.base,
        lineHeight: themeContract.typography.lineHeight.normal,
      },
      large: {
        fontSize: themeContract.typography.fontSize.lg,
        lineHeight: themeContract.typography.lineHeight.normal,
      },
    },
  },

  defaultVariants: {
    size: 'medium',
  },
});

/**
 * Checkbox control recipe
 */
export const checkboxControl = recipe({
  base: {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    borderRadius: themeContract.border.radius.sm,
    border: `${themeContract.border.width[2]} solid ${themeContract.color.semantic.border.default}`,
    backgroundColor: themeContract.color.semantic.surface.default,
    transition: 'all 0.15s ease-in-out',

    ':focus-visible': {
      outline: `2px solid ${themeContract.color.semantic.border.accent}`,
      outlineOffset: '2px',
    },

    selectors: {
      '&:where([data-state="checked"])': {
        backgroundColor: themeContract.color.core.primary[500],
        borderColor: themeContract.color.core.primary[500],
      },
      '&:where([data-state="indeterminate"])': {
        backgroundColor: themeContract.color.core.primary[500],
        borderColor: themeContract.color.core.primary[500],
      },
      '&:hover:not([data-disabled="true"])': {
        borderColor: themeContract.color.semantic.border.emphasis,
      },
      '&:where([data-state="checked"]):hover:not([data-disabled="true"])': {
        backgroundColor: themeContract.color.core.primary[600],
      },
      '&:where([data-disabled="true"])': {
        backgroundColor: themeContract.color.semantic.surface.muted,
        borderColor: themeContract.color.semantic.border.muted,
      },
    },
  },

  variants: {
    size: {
      small: {
        width: '16px',
        height: '16px',
      },
      medium: {
        width: '20px',
        height: '20px',
      },
      large: {
        width: '24px',
        height: '24px',
      },
    },

    validationState: {
      default: {},
      success: {
        borderColor: themeContract.color.semantic.border.success,
        selectors: {
          '&:where([data-state="checked"])': {
            backgroundColor: themeContract.color.core.success[500],
            borderColor: themeContract.color.core.success[500],
          },
        },
      },
      warning: {
        borderColor: themeContract.color.semantic.border.warning,
        selectors: {
          '&:where([data-state="checked"])': {
            backgroundColor: themeContract.color.core.warning[500],
            borderColor: themeContract.color.core.warning[500],
          },
        },
      },
      error: {
        borderColor: themeContract.color.semantic.border.error,
        selectors: {
          '&:where([data-state="checked"])': {
            backgroundColor: themeContract.color.core.error[500],
            borderColor: themeContract.color.core.error[500],
          },
        },
      },
    },
  },

  defaultVariants: {
    size: 'medium',
    validationState: 'default',
  },
});

/**
 * Checkbox indicator (checkmark)
 */
export const checkboxIndicator = style({
  color: themeContract.color.semantic.text.inverse,
  opacity: 0,
  transform: 'scale(0.8)',
  transition: 'all 0.15s ease-in-out',

  selectors: {
    '&:where([data-state="checked"])': {
      opacity: 1,
      transform: 'scale(1)',
    },
    '&:where([data-state="indeterminate"])': {
      opacity: 1,
      transform: 'scale(1)',
    },
  },
});

/**
 * Checkbox content wrapper
 */
export const checkboxContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: themeContract.spacing[1],
  flex: 1,
});

/**
 * Checkbox label
 */
export const checkboxLabel = style({
  color: themeContract.color.semantic.text.default,
  fontWeight: themeContract.typography.fontWeight.medium,
  cursor: 'pointer',

  selectors: {
    '[data-disabled="true"] &': {
      cursor: 'not-allowed',
    },
  },
});

/**
 * Checkbox helper text
 */
export const checkboxHelperText = style({
  fontSize: themeContract.typography.fontSize.sm,
  color: themeContract.color.semantic.text.muted,
  lineHeight: themeContract.typography.lineHeight.tight,
});

/**
 * Checkbox error text
 */
export const checkboxErrorText = style({
  fontSize: themeContract.typography.fontSize.sm,
  color: themeContract.color.semantic.text.error,
  lineHeight: themeContract.typography.lineHeight.tight,
});

/**
 * Checkmark SVG styles
 */
export const checkmarkIcon = style({
  strokeDasharray: '16px',
  strokeDashoffset: '16px',

  selectors: {
    '&:where([data-state="checked"])': {
      animation: `${checkmarkKeyframes} 0.2s ease-in-out forwards`,
    },
  },
});

/**
 * Indeterminate indicator (line)
 */
export const indeterminateIcon = style({
  width: '8px',
  height: '2px',
  backgroundColor: 'currentColor',
  borderRadius: themeContract.border.radius.sm,
  opacity: 0,
  transition: 'opacity 0.15s ease-in-out',

  selectors: {
    '&:where([data-state="indeterminate"])': {
      opacity: 1,
    },
  },
});