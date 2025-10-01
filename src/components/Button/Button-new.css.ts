/**
 * Button Component Styles
 *
 * Built with Vanilla-Extract recipes using component tokens from style-dictionary.
 * This demonstrates the automatic token-to-component pipeline.
 */

import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import * as componentTokens from '../../tokens/generated/js/components';

/**
 * Base button styles shared across all variants
 */
const baseStyles = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: componentTokens.ComponentsButtonBaseMinHeight,
  border: 'none',
  borderRadius: componentTokens.ComponentsButtonBaseBorderRadius,
  fontFamily: componentTokens.ComponentsButtonBaseFontFamily,
  fontSize: componentTokens.ComponentsButtonBaseFontSize,
  fontWeight: componentTokens.ComponentsButtonBaseFontWeight,
  lineHeight: componentTokens.ComponentsButtonBaseLineHeight,
  paddingInline: componentTokens.ComponentsButtonBasePaddingInline,
  paddingBlock: componentTokens.ComponentsButtonBasePaddingBlock,
  minHeight: componentTokens.ComponentsButtonBaseMinHeight,
  cursor: 'pointer',
  textDecoration: 'none',
  outline: 'none',
  position: 'relative',
  transition: `all ${componentTokens.ComponentsButtonBaseTransitionDuration} ease-in-out`,
  userSelect: 'none',

  ':disabled': {
    cursor: 'not-allowed',
    opacity: 0.6,
  },
});

/**
 * Button recipe with variants matching component tokens
 */
export const buttonRecipe = recipe({
  base: baseStyles,

  variants: {
    variant: {
      primary: {
        backgroundColor: componentTokens.ComponentsButtonPrimaryBackgroundColorDefault,
        color: componentTokens.ComponentsButtonPrimaryForegroundColorDefault,

        ':hover:not(:disabled)': {
          backgroundColor: componentTokens.ComponentsButtonPrimaryBackgroundColorHover,
        },

        ':active:not(:disabled)': {
          backgroundColor: componentTokens.ComponentsButtonPrimaryBackgroundColorActive,
        },

        ':focus-visible': {
          outline: `2px solid ${componentTokens.ComponentsButtonPrimaryBorderColorFocus}`,
          outlineOffset: '2px',
        },

        ':disabled': {
          backgroundColor: componentTokens.ComponentsButtonPrimaryBackgroundColorDisabled,
          color: componentTokens.ComponentsButtonPrimaryForegroundColorDisabled,
        },
      },

      secondary: {
        backgroundColor: componentTokens.ComponentsButtonSecondaryBackgroundColorDefault,
        color: componentTokens.ComponentsButtonSecondaryForegroundColorDefault,
        border: `1px solid ${componentTokens.ComponentsButtonSecondaryBorderColorDefault}`,

        ':hover:not(:disabled)': {
          backgroundColor: componentTokens.ComponentsButtonSecondaryBackgroundColorHover,
          borderColor: componentTokens.ComponentsButtonSecondaryBorderColorHover,
        },

        ':active:not(:disabled)': {
          backgroundColor: componentTokens.ComponentsButtonSecondaryBackgroundColorActive,
        },

        ':focus-visible': {
          outline: `2px solid ${componentTokens.ComponentsButtonSecondaryBorderColorFocus}`,
          outlineOffset: '2px',
        },

        ':disabled': {
          backgroundColor: componentTokens.ComponentsButtonSecondaryBackgroundColorDisabled,
          color: componentTokens.ComponentsButtonSecondaryForegroundColorDisabled,
          borderColor: componentTokens.ComponentsButtonSecondaryBorderColorDisabled,
        },
      },

      destructive: {
        backgroundColor: componentTokens.ComponentsButtonDestructiveBackgroundColorDefault,
        color: componentTokens.ComponentsButtonDestructiveForegroundColorDefault,

        ':hover:not(:disabled)': {
          backgroundColor: componentTokens.ComponentsButtonDestructiveBackgroundColorHover,
        },

        ':active:not(:disabled)': {
          backgroundColor: componentTokens.ComponentsButtonDestructiveBackgroundColorActive,
        },

        ':focus-visible': {
          outline: `2px solid ${componentTokens.ComponentsButtonDestructiveBorderColorFocus}`,
          outlineOffset: '2px',
        },

        ':disabled': {
          backgroundColor: componentTokens.ComponentsButtonDestructiveBackgroundColorDisabled,
          color: componentTokens.ComponentsButtonDestructiveForegroundColorDisabled,
        },
      },
    },

    fullWidth: {
      true: {
        width: '100%',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    fullWidth: false,
  },
});

/**
 * Icon wrapper styles
 */
export const buttonIcon = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
});

/**
 * Text wrapper styles
 */
export const buttonText = style({
  display: 'inline-block',
});
