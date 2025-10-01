/**
 * Toast Component Styles with Component Tokens
 */

import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import * as componentTokens from '../../tokens/generated/js/components';
import { shadowToString } from '../../tokens/helpers';

export const toastRecipe = recipe({
  base: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    borderRadius: componentTokens.ComponentsToastBaseBorderRadius,
    fontFamily: componentTokens.ComponentsToastBaseFontFamily,
    fontSize: componentTokens.ComponentsToastBaseFontSize,
    fontWeight: componentTokens.ComponentsToastBaseFontWeight,
    lineHeight: componentTokens.ComponentsToastBaseLineHeight,
    paddingInline: componentTokens.ComponentsToastBasePaddingInline,
    paddingBlock: componentTokens.ComponentsToastBasePaddingBlock,
    boxShadow: shadowToString(componentTokens.ComponentsToastBaseShadow),
    minWidth: componentTokens.ComponentsToastBaseMinWidth,
    maxWidth: componentTokens.ComponentsToastBaseMaxWidth,
    position: 'relative',
  },

  variants: {
    variant: {
      default: {
        backgroundColor: componentTokens.ComponentsToastDefaultBackgroundColorDefault,
        color: componentTokens.ComponentsToastDefaultForegroundColorDefault,
        border: `1px solid ${componentTokens.ComponentsToastDefaultBorderColorDefault}`,
      },
      success: {
        backgroundColor: componentTokens.ComponentsToastSuccessBackgroundColorDefault,
        color: componentTokens.ComponentsToastSuccessForegroundColorDefault,
      },
      error: {
        backgroundColor: componentTokens.ComponentsToastErrorBackgroundColorDefault,
        color: componentTokens.ComponentsToastErrorForegroundColorDefault,
      },
      warning: {
        backgroundColor: componentTokens.ComponentsToastWarningBackgroundColorDefault,
        color: componentTokens.ComponentsToastWarningForegroundColorDefault,
      },
      info: {
        backgroundColor: componentTokens.ComponentsToastInfoBackgroundColorDefault,
        color: componentTokens.ComponentsToastInfoForegroundColorDefault,
      },
    },
  },

  defaultVariants: {
    variant: 'default',
  },
});

export const toastIcon = style({
  flexShrink: 0,
  width: '20px',
  height: '20px',
});

export const toastContent = style({
  flex: 1,
});
