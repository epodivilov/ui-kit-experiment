/**
 * Theme Builder for UI Kit
 *
 * Creates Vanilla-Extract themes from style-dictionary generated tokens.
 * This is the bridge between our design tokens and Vanilla-Extract styling.
 */

import { createThemeContract, createTheme } from '@vanilla-extract/css';

// Import generated tokens
import * as semantic from '../tokens/generated/js/semantic-light';
import { shadowToString } from '../tokens/helpers';

/**
 * Theme contract defines the structure of all themes
 */
export const themeVars = createThemeContract({
  color: {
    // Semantic colors
    background: {
      default: null,
      surface: null,
      surfaceElevated: null,
      primary: {
        default: null,
        hover: null,
        active: null,
      },
      secondary: {
        default: null,
        hover: null,
        active: null,
      },
      danger: {
        default: null,
        hover: null,
        active: null,
      },
      success: {
        default: null,
        hover: null,
        active: null,
      },
      warning: {
        default: null,
        hover: null,
        active: null,
      },
      disabled: null,
    },
    foreground: {
      default: null,
      subtle: null,
      accent: null,
      onPrimary: null,
      onSecondary: null,
      onDanger: null,
      onSuccess: null,
      onWarning: null,
      disabled: null,
    },
    border: {
      default: null,
      hover: null,
      focus: null,
      disabled: null,
    },
  },
  spacing: {
    block: {
      xs: null,
      sm: null,
      md: null,
      lg: null,
      xl: null,
    },
    inline: {
      xs: null,
      sm: null,
      md: null,
      lg: null,
      xl: null,
    },
    inset: {
      xs: null,
      sm: null,
      md: null,
      lg: null,
      xl: null,
    },
  },
  size: {
    icon: {
      sm: null,
      md: null,
      lg: null,
    },
    target: {
      sm: null,
      md: null,
      lg: null,
    },
  },
  borderRadius: {
    sm: null,
    md: null,
    lg: null,
    full: null,
  },
  shadow: {
    elevation1: null,
    elevation2: null,
    elevation3: null,
    elevation4: null,
  },
});

/**
 * Light theme implementation
 */
export const lightTheme = createTheme(themeVars, {
  color: {
    background: {
      default: semantic.SemanticColorBackgroundDefault,
      surface: semantic.SemanticColorBackgroundSurface,
      surfaceElevated: semantic.SemanticColorBackgroundSurfaceElevated,
      primary: {
        default: semantic.SemanticColorBackgroundPrimaryDefault,
        hover: semantic.SemanticColorBackgroundPrimaryHover,
        active: semantic.SemanticColorBackgroundPrimaryActive,
      },
      secondary: {
        default: semantic.SemanticColorBackgroundSecondaryDefault,
        hover: semantic.SemanticColorBackgroundSecondaryHover,
        active: semantic.SemanticColorBackgroundSecondaryActive,
      },
      danger: {
        default: semantic.SemanticColorBackgroundDangerDefault,
        hover: semantic.SemanticColorBackgroundDangerHover,
        active: semantic.SemanticColorBackgroundDangerActive,
      },
      success: {
        default: semantic.SemanticColorBackgroundSuccessDefault,
        hover: semantic.SemanticColorBackgroundSuccessHover,
        active: semantic.SemanticColorBackgroundSuccessActive,
      },
      warning: {
        default: semantic.SemanticColorBackgroundWarningDefault,
        hover: semantic.SemanticColorBackgroundWarningHover,
        active: semantic.SemanticColorBackgroundWarningActive,
      },
      disabled: semantic.SemanticColorBackgroundDisabled,
    },
    foreground: {
      default: semantic.SemanticColorForegroundDefault,
      subtle: semantic.SemanticColorForegroundSubtle,
      accent: semantic.SemanticColorForegroundAccent,
      onPrimary: semantic.SemanticColorForegroundOnPrimary,
      onSecondary: semantic.SemanticColorForegroundOnSecondary,
      onDanger: semantic.SemanticColorForegroundOnDanger,
      onSuccess: semantic.SemanticColorForegroundOnSuccess,
      onWarning: semantic.SemanticColorForegroundOnWarning,
      disabled: semantic.SemanticColorForegroundDisabled,
    },
    border: {
      default: semantic.SemanticColorBorderDefault,
      hover: semantic.SemanticColorBorderHover,
      focus: semantic.SemanticColorBorderFocus,
      disabled: semantic.SemanticColorBorderDisabled,
    },
  },
  spacing: {
    block: {
      xs: semantic.SemanticSpacingBlockXs,
      sm: semantic.SemanticSpacingBlockSm,
      md: semantic.SemanticSpacingBlockMd,
      lg: semantic.SemanticSpacingBlockLg,
      xl: semantic.SemanticSpacingBlockXl,
    },
    inline: {
      xs: semantic.SemanticSpacingInlineXs,
      sm: semantic.SemanticSpacingInlineSm,
      md: semantic.SemanticSpacingInlineMd,
      lg: semantic.SemanticSpacingInlineLg,
      xl: semantic.SemanticSpacingInlineXl,
    },
    inset: {
      xs: semantic.SemanticSpacingInsetXs,
      sm: semantic.SemanticSpacingInsetSm,
      md: semantic.SemanticSpacingInsetMd,
      lg: semantic.SemanticSpacingInsetLg,
      xl: semantic.SemanticSpacingInsetXl,
    },
  },
  size: {
    icon: {
      sm: semantic.SemanticSizeIconSm,
      md: semantic.SemanticSizeIconMd,
      lg: semantic.SemanticSizeIconLg,
    },
    target: {
      sm: semantic.SemanticSizeTargetSm,
      md: semantic.SemanticSizeTargetMd,
      lg: semantic.SemanticSizeTargetLg,
    },
  },
  borderRadius: {
    sm: semantic.SemanticBorderRadiusSm,
    md: semantic.SemanticBorderRadiusMd,
    lg: semantic.SemanticBorderRadiusLg,
    full: semantic.SemanticBorderRadiusFull,
  },
  shadow: {
    elevation1: shadowToString(semantic.SemanticShadowElevation1),
    elevation2: shadowToString(semantic.SemanticShadowElevation2),
    elevation3: shadowToString(semantic.SemanticShadowElevation3),
    elevation4: shadowToString(semantic.SemanticShadowElevation4),
  },
});

export type ThemeVars = typeof themeVars;
