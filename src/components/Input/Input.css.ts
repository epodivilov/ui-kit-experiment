import { recipe } from '@vanilla-extract/recipes';
import { style, keyframes, globalStyle } from '@vanilla-extract/css';
import { themeContract } from '../../themes/contracts/theme.css';

/**
 * Loading spinner keyframes
 */
const spinKeyframes = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

/**
 * Input container styles
 */
export const inputContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: themeContract.spacing[1],
});

/**
 * Input label styles
 */
export const inputLabel = style({
  fontSize: themeContract.typography.fontSize.sm,
  fontWeight: themeContract.typography.fontWeight.medium,
  color: themeContract.color.semantic.text.default,
  lineHeight: themeContract.typography.lineHeight.normal,
  fontFamily: themeContract.typography.fontFamily.sans,

  selectors: {
    '&[data-required="true"]::after': {
      content: ' *',
      color: themeContract.color.semantic.text.error,
    },
  },
});

/**
 * Input wrapper for positioning icons and loading state
 */
export const inputWrapper = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
});

/**
 * Input field recipe with theme integration
 */
export const inputRecipe = recipe({
  base: {
    width: '100%',
    border: `${themeContract.border.width.default} solid ${themeContract.color.semantic.border.default}`,
    borderRadius: themeContract.border.radius.default,
    backgroundColor: themeContract.color.semantic.surface.default,
    fontSize: themeContract.typography.fontSize.base,
    lineHeight: themeContract.typography.lineHeight.normal,
    color: themeContract.color.semantic.text.default,
    fontFamily: themeContract.typography.fontFamily.sans,
    transition: 'all 0.15s ease-in-out',
    outline: 'none',

    '::placeholder': {
      color: themeContract.color.semantic.text.muted,
    },

    ':focus': {
      borderColor: themeContract.color.semantic.border.accent,
      boxShadow: `0 0 0 3px ${themeContract.color.core.primary[100]}`,
    },

    ':disabled': {
      backgroundColor: themeContract.color.semantic.surface.muted,
      color: themeContract.color.semantic.text.muted,
      cursor: 'not-allowed',
      borderColor: themeContract.color.semantic.border.muted,
    },

    selectors: {
      '&:where([data-loading="true"])': {
        pointerEvents: 'none',
      },
    },
  },

  variants: {
    size: {
      small: {
        height: '32px',
        padding: `0 ${themeContract.spacing[2]}`,
        fontSize: themeContract.typography.fontSize.sm,
      },
      medium: {
        height: '40px',
        padding: `0 ${themeContract.spacing[3]}`,
        fontSize: themeContract.typography.fontSize.base,
      },
      large: {
        height: '48px',
        padding: `0 ${themeContract.spacing[4]}`,
        fontSize: themeContract.typography.fontSize.lg,
      },
    },

    validationState: {
      default: {},
      success: {
        borderColor: themeContract.color.semantic.border.success,

        ':focus': {
          borderColor: themeContract.color.semantic.border.success,
          boxShadow: `0 0 0 3px ${themeContract.color.core.success[100]}`,
        },
      },
      warning: {
        borderColor: themeContract.color.semantic.border.warning,

        ':focus': {
          borderColor: themeContract.color.semantic.border.warning,
          boxShadow: `0 0 0 3px ${themeContract.color.core.warning[100]}`,
        },
      },
      error: {
        borderColor: themeContract.color.semantic.border.error,

        ':focus': {
          borderColor: themeContract.color.semantic.border.error,
          boxShadow: `0 0 0 3px ${themeContract.color.core.error[100]}`,
        },
      },
    },

    fullWidth: {
      true: {
        width: '100%',
      },
    },

    hasStartIcon: {
      true: {},
    },

    hasEndIcon: {
      true: {},
    },

    loading: {
      true: {
        paddingRight: '40px', // Make room for loading spinner
      },
    },
  },

  compoundVariants: [
    // Start icon padding adjustments by size
    {
      variants: { size: 'small', hasStartIcon: true },
      style: { paddingLeft: '32px' },
    },
    {
      variants: { size: 'medium', hasStartIcon: true },
      style: { paddingLeft: '40px' },
    },
    {
      variants: { size: 'large', hasStartIcon: true },
      style: { paddingLeft: '48px' },
    },
    // End icon padding adjustments by size
    {
      variants: { size: 'small', hasEndIcon: true },
      style: { paddingRight: '32px' },
    },
    {
      variants: { size: 'medium', hasEndIcon: true },
      style: { paddingRight: '40px' },
    },
    {
      variants: { size: 'large', hasEndIcon: true },
      style: { paddingRight: '48px' },
    },
    // Loading state with end icon
    {
      variants: { hasEndIcon: true, loading: true },
      style: { paddingRight: '64px' },
    },
  ],

  defaultVariants: {
    size: 'medium',
    validationState: 'default',
    fullWidth: false,
    hasStartIcon: false,
    hasEndIcon: false,
    loading: false,
  },
});

/**
 * Icon positioning styles
 */
export const inputIcon = style({
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: themeContract.color.semantic.text.muted,
  pointerEvents: 'none',
  zIndex: 1,
});

export const inputStartIcon = style([
  inputIcon,
  {
    left: themeContract.spacing[3],
  },
]);

export const inputEndIcon = style([
  inputIcon,
  {
    right: themeContract.spacing[3],
  },
]);

/**
 * Loading spinner styles
 */
export const inputSpinner = style([
  inputIcon,
  {
    right: themeContract.spacing[3],
    width: '16px',
    height: '16px',
    border: `2px solid ${themeContract.color.semantic.text.muted}`,
    borderTopColor: 'transparent',
    borderRadius: '50%',
    animation: `${spinKeyframes} 1s linear infinite`,
  },
]);

/**
 * Message styles for help text, success, warning, error
 */
export const messageBase = style({
  fontSize: themeContract.typography.fontSize.xs,
  lineHeight: themeContract.typography.lineHeight.normal,
  fontFamily: themeContract.typography.fontFamily.sans,
  marginTop: themeContract.spacing[1],
});

export const inputHelpText = style([
  messageBase,
  {
    color: themeContract.color.semantic.text.muted,
  },
]);

export const inputSuccessText = style([
  messageBase,
  {
    color: themeContract.color.semantic.text.success,
  },
]);

export const inputWarningText = style([
  messageBase,
  {
    color: themeContract.color.semantic.text.warning,
  },
]);

export const inputErrorText = style([
  messageBase,
  {
    color: themeContract.color.semantic.text.error,
  },
]);

/**
 * Full width container modifier
 */
export const inputContainerFullWidth = style({
  width: '100%',
});

// Global styles for better icon positioning with loading state
globalStyle(`${inputWrapper}[data-loading="true"] ${inputEndIcon}`, {
  right: '44px', // Move end icon further right when loading
});

// Ensure start icons have proper size constraints
globalStyle(`${inputStartIcon} > *`, {
  width: '16px',
  height: '16px',
  flexShrink: 0,
});

globalStyle(`${inputEndIcon} > *`, {
  width: '16px',
  height: '16px',
  flexShrink: 0,
});