/**
 * Checkbox Component Styles with Component Tokens
 */

import { style, keyframes } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import * as componentTokens from '../../tokens/generated/js/components';

const checkAnimation = keyframes({
  '0%': { transform: 'scale(0)' },
  '100%': { transform: 'scale(1)' },
});

export const checkboxRecipe = recipe({
  base: {
    appearance: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: componentTokens.ComponentsCheckboxBaseSize,
    height: componentTokens.ComponentsCheckboxBaseSize,
    borderRadius: componentTokens.ComponentsCheckboxBaseBorderRadius,
    borderWidth: componentTokens.ComponentsCheckboxBaseBorderWidth,
    borderStyle: 'solid',
    transition: `all ${componentTokens.ComponentsCheckboxBaseTransitionDuration} ease-in-out`,
    cursor: 'pointer',
    flexShrink: 0,
    backgroundColor: componentTokens.ComponentsCheckboxDefaultBackgroundColorDefault,
    borderColor: componentTokens.ComponentsCheckboxDefaultBorderColorDefault,

    ':hover:not(:disabled)': {
      borderColor: componentTokens.ComponentsCheckboxDefaultBorderColorHover,
    },

    ':focus-visible': {
      outline: `2px solid ${componentTokens.ComponentsCheckboxDefaultBorderColorFocus}`,
      outlineOffset: '2px',
    },

    ':checked': {
      backgroundColor: componentTokens.ComponentsCheckboxDefaultBackgroundColorChecked,
      borderColor: componentTokens.ComponentsCheckboxDefaultBorderColorChecked,
    },

    ':checked:hover:not(:disabled)': {
      backgroundColor: componentTokens.ComponentsCheckboxDefaultBackgroundColorCheckedHover,
      borderColor: componentTokens.ComponentsCheckboxDefaultBorderColorCheckedHover,
    },

    ':disabled': {
      backgroundColor: componentTokens.ComponentsCheckboxDefaultBackgroundColorDisabled,
      borderColor: componentTokens.ComponentsCheckboxDefaultBorderColorDisabled,
      cursor: 'not-allowed',
      opacity: 0.6,
    },

    // Checkmark indicator
    '::after': {
      content: '""',
      display: 'block',
      width: '10px',
      height: '10px',
      color: componentTokens.ComponentsCheckboxDefaultIndicatorForegroundColorDefault,
      opacity: 0,
      transform: 'scale(0)',
      transition: 'all 0.15s ease-in-out',
    },

    ':checked::after': {
      opacity: 1,
      animation: `${checkAnimation} 0.15s ease-in-out`,
      transform: 'scale(1)',
    },
  },

  variants: {
    variant: {
      default: {},
      error: {
        borderColor: componentTokens.ComponentsCheckboxErrorBorderColorDefault,

        ':hover:not(:disabled)': {
          borderColor: componentTokens.ComponentsCheckboxErrorBorderColorHover,
        },

        ':focus-visible': {
          outline: `2px solid ${componentTokens.ComponentsCheckboxErrorBorderColorFocus}`,
        },

        ':checked': {
          backgroundColor: componentTokens.ComponentsCheckboxErrorBackgroundColorChecked,
          borderColor: componentTokens.ComponentsCheckboxErrorBorderColorChecked,
        },

        ':checked:hover:not(:disabled)': {
          backgroundColor: componentTokens.ComponentsCheckboxErrorBackgroundColorCheckedHover,
          borderColor: componentTokens.ComponentsCheckboxErrorBorderColorCheckedHover,
        },
      },
    },
  },

  defaultVariants: {
    variant: 'default',
  },
});
