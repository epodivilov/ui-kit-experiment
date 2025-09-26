import { recipe } from '@vanilla-extract/recipes';
import { keyframes, globalStyle } from '@vanilla-extract/css';
import { themeContract } from '../../themes/contracts/theme.css';

/**
 * Spinner keyframes for loading state
 */
const spinKeyframes = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

/**
 * Button recipe using Vanilla-Extract recipes with theme integration
 */
export const buttonRecipe = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: themeContract.spacing[2],
    border: 'none',
    borderRadius: themeContract.border.radius.default,
    fontFamily: themeContract.typography.fontFamily.sans,
    fontWeight: themeContract.typography.fontWeight.medium,
    lineHeight: themeContract.typography.lineHeight.none,
    cursor: 'pointer',
    textDecoration: 'none',
    outline: 'none',
    position: 'relative',
    transition: 'all 0.15s ease-in-out',
    userSelect: 'none',

    ':focus-visible': {
      outline: `2px solid ${themeContract.color.semantic.border.accent}`,
      outlineOffset: '2px',
    },

    ':disabled': {
      cursor: 'not-allowed',
      opacity: 0.6,
    },

    // Ensure icons and text are properly aligned
    selectors: {
      '&:where([data-disabled])': {
        cursor: 'not-allowed',
        opacity: 0.6,
      },
    },
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: themeContract.color.core.primary[500],
        color: themeContract.color.semantic.text.inverse,
        border: `${themeContract.border.width.default} solid transparent`,

        ':hover:not(:disabled):not([data-disabled])': {
          backgroundColor: themeContract.color.core.primary[600],
        },

        ':active:not(:disabled):not([data-disabled])': {
          backgroundColor: themeContract.color.core.primary[700],
        },
      },
      secondary: {
        backgroundColor: themeContract.color.semantic.surface.muted,
        color: themeContract.color.semantic.text.default,
        border: `${themeContract.border.width.default} solid ${themeContract.color.semantic.border.default}`,

        ':hover:not(:disabled):not([data-disabled])': {
          backgroundColor: themeContract.color.semantic.surface.emphasis,
          borderColor: themeContract.color.semantic.border.emphasis,
        },

        ':active:not(:disabled):not([data-disabled])': {
          backgroundColor: themeContract.color.semantic.surface.emphasis,
        },
      },
      ghost: {
        backgroundColor: 'transparent',
        color: themeContract.color.semantic.text.accent,
        border: `${themeContract.border.width.default} solid transparent`,

        ':hover:not(:disabled):not([data-disabled])': {
          backgroundColor: themeContract.color.semantic.surface.subtle,
        },

        ':active:not(:disabled):not([data-disabled])': {
          backgroundColor: themeContract.color.semantic.surface.muted,
        },
      },
      danger: {
        backgroundColor: themeContract.color.core.error[500],
        color: themeContract.color.semantic.text.inverse,
        border: `${themeContract.border.width.default} solid transparent`,

        ':hover:not(:disabled):not([data-disabled])': {
          backgroundColor: themeContract.color.core.error[600],
        },

        ':active:not(:disabled):not([data-disabled])': {
          backgroundColor: themeContract.color.core.error[700],
        },
      },
    },

    size: {
      small: {
        height: '32px',
        paddingLeft: themeContract.spacing[3],
        paddingRight: themeContract.spacing[3],
        fontSize: themeContract.typography.fontSize.sm,
      },
      medium: {
        height: '40px',
        paddingLeft: themeContract.spacing[4],
        paddingRight: themeContract.spacing[4],
        fontSize: themeContract.typography.fontSize.base,
      },
      large: {
        height: '48px',
        paddingLeft: themeContract.spacing[5],
        paddingRight: themeContract.spacing[5],
        fontSize: themeContract.typography.fontSize.lg,
      },
    },

    fullWidth: {
      true: {
        width: '100%',
      },
    },

    loading: {
      true: {
        color: 'transparent',
        pointerEvents: 'none',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'medium',
    fullWidth: false,
    loading: false,
  },
});

// Global styles for button child elements
globalStyle('.button-icon', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
});

globalStyle('.button-text', {
  display: 'inline-block',
});

globalStyle('.button-spinner', {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '16px',
  height: '16px',
  border: `2px solid currentColor`,
  borderTopColor: 'transparent',
  borderRadius: '50%',
  animation: `${spinKeyframes} 1s linear infinite`,
});

// Loading state styles
globalStyle(`${buttonRecipe({ loading: true })} .button-spinner`, {
  color: 'inherit',
});

// Ensure proper spacing for icons
globalStyle(`${buttonRecipe()} .button-icon + .button-text`, {
  marginLeft: themeContract.spacing[1],
});

globalStyle(`${buttonRecipe()} .button-text + .button-icon`, {
  marginLeft: themeContract.spacing[1],
});