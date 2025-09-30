/**
 * Input Component Styles with Component Tokens
 */

import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import * as componentTokens from '../../tokens/generated/js/components';

export const inputRecipe = recipe({
  base: {
    display: 'block',
    width: '100%',
    borderRadius: componentTokens.ComponentsInputBaseBorderRadius,
    fontFamily: componentTokens.ComponentsInputBaseFontFamily,
    fontSize: componentTokens.ComponentsInputBaseFontSize,
    fontWeight: componentTokens.ComponentsInputBaseFontWeight,
    lineHeight: componentTokens.ComponentsInputBaseLineHeight,
    paddingInline: componentTokens.ComponentsInputBasePaddingInline,
    paddingBlock: componentTokens.ComponentsInputBasePaddingBlock,
    minHeight: componentTokens.ComponentsInputBaseMinHeight,
    borderWidth: componentTokens.ComponentsInputBaseBorderWidth,
    borderStyle: 'solid',
    transition: `all ${componentTokens.ComponentsInputBaseTransitionDuration} ease-in-out`,
    outline: 'none',
    backgroundColor: componentTokens.ComponentsInputDefaultBackgroundColorDefault,
    color: componentTokens.ComponentsInputDefaultForegroundColorDefault,
    borderColor: componentTokens.ComponentsInputDefaultBorderColorDefault,

    '::placeholder': {
      color: componentTokens.ComponentsInputDefaultPlaceholderForegroundColorDefault,
    },

    ':hover:not(:disabled)': {
      borderColor: componentTokens.ComponentsInputDefaultBorderColorHover,
    },

    ':focus': {
      borderColor: componentTokens.ComponentsInputDefaultBorderColorFocus,
    },

    ':disabled': {
      backgroundColor: componentTokens.ComponentsInputDefaultBackgroundColorDisabled,
      color: componentTokens.ComponentsInputDefaultForegroundColorDisabled,
      borderColor: componentTokens.ComponentsInputDefaultBorderColorDisabled,
      cursor: 'not-allowed',
    },
  },

  variants: {
    variant: {
      default: {},
      error: {
        borderColor: componentTokens.ComponentsInputErrorBorderColorDefault,

        ':hover:not(:disabled)': {
          borderColor: componentTokens.ComponentsInputErrorBorderColorHover,
        },

        ':focus': {
          borderColor: componentTokens.ComponentsInputErrorBorderColorFocus,
        },
      },
    },
  },

  defaultVariants: {
    variant: 'default',
  },
});
