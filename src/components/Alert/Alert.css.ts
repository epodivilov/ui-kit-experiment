import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { themeContract } from '../../themes/contracts/theme.css';

/**
 * Alert recipe
 */
export const alertRecipe = recipe({
  base: {
    display: 'flex',
    alignItems: 'flex-start',
    borderRadius: themeContract.border.radius.md,
    border: `${themeContract.border.width.default} solid`,
    fontFamily: themeContract.typography.fontFamily.sans,
    position: 'relative',
    overflow: 'hidden',
  },

  variants: {
    variant: {
      info: {
        backgroundColor: themeContract.color.core.primary[50],
        borderColor: themeContract.color.core.primary[200],
        color: themeContract.color.core.primary[800],
      },
      success: {
        backgroundColor: themeContract.color.core.success[50],
        borderColor: themeContract.color.core.success[200],
        color: themeContract.color.core.success[800],
      },
      warning: {
        backgroundColor: themeContract.color.core.warning[50],
        borderColor: themeContract.color.core.warning[200],
        color: themeContract.color.core.warning[800],
      },
      error: {
        backgroundColor: themeContract.color.core.error[50],
        borderColor: themeContract.color.core.error[200],
        color: themeContract.color.core.error[800],
      },
    },

    size: {
      small: {
        padding: themeContract.spacing[3],
        gap: themeContract.spacing[2],
        fontSize: themeContract.typography.fontSize.sm,
        lineHeight: themeContract.typography.lineHeight.tight,
      },
      medium: {
        padding: themeContract.spacing[4],
        gap: themeContract.spacing[3],
        fontSize: themeContract.typography.fontSize.base,
        lineHeight: themeContract.typography.lineHeight.normal,
      },
      large: {
        padding: themeContract.spacing[5],
        gap: themeContract.spacing[4],
        fontSize: themeContract.typography.fontSize.lg,
        lineHeight: themeContract.typography.lineHeight.normal,
      },
    },
  },

  defaultVariants: {
    variant: 'info',
    size: 'medium',
  },
});

/**
 * Alert icon styles
 */
export const alertIcon = recipe({
  base: {
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  variants: {
    variant: {
      info: {
        color: themeContract.color.core.primary[600],
      },
      success: {
        color: themeContract.color.core.success[600],
      },
      warning: {
        color: themeContract.color.core.warning[600],
      },
      error: {
        color: themeContract.color.core.error[600],
      },
    },

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
  },

  defaultVariants: {
    variant: 'info',
    size: 'medium',
  },
});

/**
 * Alert content wrapper
 */
export const alertContent = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: themeContract.spacing[1],
  minWidth: 0, // Allow content to shrink
});

/**
 * Alert title styles
 */
export const alertTitle = recipe({
  base: {
    fontWeight: themeContract.typography.fontWeight.semibold,
    margin: 0,
    lineHeight: themeContract.typography.lineHeight.tight,
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
 * Alert message styles
 */
export const alertMessage = style({
  margin: 0,
  lineHeight: 'inherit',
});

/**
 * Alert actions wrapper
 */
export const alertActions = style({
  display: 'flex',
  alignItems: 'center',
  gap: themeContract.spacing[2],
  marginTop: themeContract.spacing[2],
});

/**
 * Alert dismiss button
 */
export const alertDismissButton = recipe({
  base: {
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    borderRadius: themeContract.border.radius.sm,
    transition: 'all 0.15s ease-in-out',
    padding: themeContract.spacing[1],

    ':hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },

    ':focus-visible': {
      outline: `2px solid`,
      outlineOffset: '2px',
    },
  },

  variants: {
    variant: {
      info: {
        color: themeContract.color.core.primary[600],
        selectors: {
          '&:focus-visible': {
            outlineColor: themeContract.color.core.primary[600],
          },
        },
      },
      success: {
        color: themeContract.color.core.success[600],
        selectors: {
          '&:focus-visible': {
            outlineColor: themeContract.color.core.success[600],
          },
        },
      },
      warning: {
        color: themeContract.color.core.warning[600],
        selectors: {
          '&:focus-visible': {
            outlineColor: themeContract.color.core.warning[600],
          },
        },
      },
      error: {
        color: themeContract.color.core.error[600],
        selectors: {
          '&:focus-visible': {
            outlineColor: themeContract.color.core.error[600],
          },
        },
      },
    },

    size: {
      small: {
        width: '20px',
        height: '20px',
      },
      medium: {
        width: '24px',
        height: '24px',
      },
      large: {
        width: '28px',
        height: '28px',
      },
    },
  },

  defaultVariants: {
    variant: 'info',
    size: 'medium',
  },
});