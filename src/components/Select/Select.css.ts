import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { themeContract } from '../../themes/contracts/theme.css';

/**
 * Select container recipe
 */
export const selectContainer = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: themeContract.spacing[1],
    fontFamily: themeContract.typography.fontFamily.sans,
  },

  variants: {
    size: {
      small: {
        fontSize: themeContract.typography.fontSize.sm,
      },
      medium: {
        fontSize: themeContract.typography.fontSize.base,
      },
      large: {
        fontSize: themeContract.typography.fontSize.lg,
      },
    },
  },

  defaultVariants: {
    size: 'medium',
  },
});

/**
 * Select trigger recipe
 */
export const selectTrigger = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    borderRadius: themeContract.border.radius.md,
    border: `${themeContract.border.width.default} solid ${themeContract.color.semantic.border.default}`,
    backgroundColor: themeContract.color.semantic.surface.default,
    color: themeContract.color.semantic.text.default,
    fontFamily: 'inherit',
    fontSize: 'inherit',
    lineHeight: themeContract.typography.lineHeight.normal,
    cursor: 'pointer',
    transition: 'all 0.15s ease-in-out',

    ':focus-visible': {
      outline: `2px solid ${themeContract.color.semantic.border.accent}`,
      outlineOffset: '2px',
    },

    selectors: {
      '&:where([data-state="open"])': {
        borderColor: themeContract.color.semantic.border.accent,
      },
      '&:where([data-disabled="true"])': {
        opacity: 0.6,
        cursor: 'not-allowed',
        backgroundColor: themeContract.color.semantic.surface.muted,
      },
      '&:hover:not([data-disabled="true"])': {
        borderColor: themeContract.color.semantic.border.emphasis,
      },
    },
  },

  variants: {
    size: {
      small: {
        padding: `${themeContract.spacing[2]} ${themeContract.spacing[3]}`,
        minHeight: '32px',
        gap: themeContract.spacing[2],
      },
      medium: {
        padding: `${themeContract.spacing[3]} ${themeContract.spacing[4]}`,
        minHeight: '40px',
        gap: themeContract.spacing[2],
      },
      large: {
        padding: `${themeContract.spacing[4]} ${themeContract.spacing[5]}`,
        minHeight: '48px',
        gap: themeContract.spacing[3],
      },
    },

    validationState: {
      default: {},
      success: {
        borderColor: themeContract.color.semantic.border.success,
        selectors: {
          '&:where([data-state="open"])': {
            borderColor: themeContract.color.core.success[500],
          },
        },
      },
      warning: {
        borderColor: themeContract.color.semantic.border.warning,
        selectors: {
          '&:where([data-state="open"])': {
            borderColor: themeContract.color.core.warning[500],
          },
        },
      },
      error: {
        borderColor: themeContract.color.semantic.border.error,
        selectors: {
          '&:where([data-state="open"])': {
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
 * Select value styles
 */
export const selectValue = style({
  flex: 1,
  textAlign: 'left',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',

  selectors: {
    '&:where([data-placeholder])': {
      color: themeContract.color.semantic.text.muted,
    },
  },
});

/**
 * Select icon styles
 */
export const selectIcon = style({
  flexShrink: 0,
  color: themeContract.color.semantic.text.muted,
  transition: 'transform 0.15s ease-in-out',

  selectors: {
    '[data-state="open"] &': {
      transform: 'rotate(180deg)',
    },
  },
});

/**
 * Select popup recipe
 */
export const selectPopup = recipe({
  base: {
    backgroundColor: themeContract.color.semantic.surface.default,
    borderRadius: themeContract.border.radius.md,
    border: `${themeContract.border.width.default} solid ${themeContract.color.semantic.border.default}`,
    boxShadow: themeContract.shadow.lg,
    zIndex: 1000,
    maxHeight: '200px',
    overflow: 'auto',
    padding: themeContract.spacing[1],
  },

  variants: {
    size: {
      small: {
        minWidth: '160px',
      },
      medium: {
        minWidth: '200px',
      },
      large: {
        minWidth: '240px',
      },
    },
  },

  defaultVariants: {
    size: 'medium',
  },
});

/**
 * Select item recipe
 */
export const selectItem = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    borderRadius: themeContract.border.radius.sm,
    color: themeContract.color.semantic.text.default,
    cursor: 'pointer',
    fontSize: 'inherit',
    lineHeight: themeContract.typography.lineHeight.normal,
    transition: 'all 0.15s ease-in-out',
    border: 'none',
    backgroundColor: 'transparent',
    fontFamily: 'inherit',

    ':focus-visible': {
      outline: `2px solid ${themeContract.color.semantic.border.accent}`,
      outlineOffset: '-2px',
    },

    selectors: {
      '&:where([data-selected="true"])': {
        backgroundColor: themeContract.color.core.primary[50],
        color: themeContract.color.core.primary[700],
      },
      '&:where([data-disabled="true"])': {
        opacity: 0.6,
        cursor: 'not-allowed',
      },
      '&:hover:not([data-disabled="true"])': {
        backgroundColor: themeContract.color.semantic.surface.subtle,
      },
    },
  },

  variants: {
    size: {
      small: {
        padding: `${themeContract.spacing[1]} ${themeContract.spacing[2]}`,
        gap: themeContract.spacing[2],
      },
      medium: {
        padding: `${themeContract.spacing[2]} ${themeContract.spacing[3]}`,
        gap: themeContract.spacing[2],
      },
      large: {
        padding: `${themeContract.spacing[3]} ${themeContract.spacing[4]}`,
        gap: themeContract.spacing[3],
      },
    },
  },

  defaultVariants: {
    size: 'medium',
  },
});

/**
 * Select item text styles
 */
export const selectItemText = style({
  flex: 1,
  textAlign: 'left',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

/**
 * Select item indicator styles
 */
export const selectItemIndicator = style({
  flexShrink: 0,
  color: themeContract.color.core.primary[500],
  opacity: 0,
  transform: 'scale(0.8)',
  transition: 'all 0.15s ease-in-out',

  selectors: {
    '[data-selected="true"] &': {
      opacity: 1,
      transform: 'scale(1)',
    },
  },
});

/**
 * Select label styles
 */
export const selectLabel = style({
  fontSize: themeContract.typography.fontSize.sm,
  fontWeight: themeContract.typography.fontWeight.medium,
  color: themeContract.color.semantic.text.default,
  lineHeight: themeContract.typography.lineHeight.tight,
});

/**
 * Select helper text styles
 */
export const selectHelperText = style({
  fontSize: themeContract.typography.fontSize.sm,
  color: themeContract.color.semantic.text.muted,
  lineHeight: themeContract.typography.lineHeight.tight,
});

/**
 * Select error text styles
 */
export const selectErrorText = style({
  fontSize: themeContract.typography.fontSize.sm,
  color: themeContract.color.semantic.text.error,
  lineHeight: themeContract.typography.lineHeight.tight,
});

/**
 * Select backdrop styles
 */
export const selectBackdrop = style({
  position: 'fixed',
  inset: 0,
  zIndex: 999,
});