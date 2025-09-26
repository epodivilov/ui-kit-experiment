/**
 * Main Theme Contract
 *
 * This defines the structure of all themes using Vanilla-Extract's
 * createThemeContract. This ensures type safety and consistency
 * across all theme implementations.
 */

import { createThemeContract } from '@vanilla-extract/css';

export const themeContract = createThemeContract({
  // Color system
  color: {
    // Core semantic colors
    core: {
      neutral: {
        0: null,
        50: null,
        100: null,
        200: null,
        300: null,
        400: null,
        500: null,
        600: null,
        700: null,
        800: null,
        900: null,
        950: null,
      },
      primary: {
        50: null,
        100: null,
        200: null,
        300: null,
        400: null,
        500: null,
        600: null,
        700: null,
        800: null,
        900: null,
        950: null,
      },
      success: {
        50: null,
        100: null,
        200: null,
        300: null,
        400: null,
        500: null,
        600: null,
        700: null,
        800: null,
        900: null,
        950: null,
      },
      warning: {
        50: null,
        100: null,
        200: null,
        300: null,
        400: null,
        500: null,
        600: null,
        700: null,
        800: null,
        900: null,
        950: null,
      },
      error: {
        50: null,
        100: null,
        200: null,
        300: null,
        400: null,
        500: null,
        600: null,
        700: null,
        800: null,
        900: null,
        950: null,
      },
    },
    // Semantic colors for UI elements
    semantic: {
      background: {
        default: null,
        subtle: null,
        muted: null,
        emphasis: null,
        inverse: null,
      },
      text: {
        default: null,
        subtle: null,
        muted: null,
        inverse: null,
        accent: null,
        success: null,
        warning: null,
        error: null,
      },
      border: {
        default: null,
        subtle: null,
        muted: null,
        emphasis: null,
        accent: null,
        success: null,
        warning: null,
        error: null,
      },
      surface: {
        default: null,
        subtle: null,
        muted: null,
        emphasis: null,
        inverse: null,
      },
    },
  },

  // Typography system
  typography: {
    fontFamily: {
      sans: null,
      mono: null,
    },
    fontSize: {
      xs: null,
      sm: null,
      base: null,
      lg: null,
      xl: null,
      '2xl': null,
      '3xl': null,
      '4xl': null,
      '5xl': null,
      '6xl': null,
      '7xl': null,
      '8xl': null,
      '9xl': null,
    },
    fontWeight: {
      thin: null,
      extralight: null,
      light: null,
      normal: null,
      medium: null,
      semibold: null,
      bold: null,
      extrabold: null,
      black: null,
    },
    lineHeight: {
      none: null,
      tight: null,
      snug: null,
      normal: null,
      relaxed: null,
      loose: null,
    },
  },

  // Spacing system
  spacing: {
    0: null,
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    9: null,
    10: null,
    11: null,
    12: null,
    14: null,
    16: null,
    20: null,
    24: null,
    28: null,
    32: null,
    36: null,
    40: null,
    44: null,
    48: null,
    52: null,
    56: null,
    60: null,
    64: null,
    72: null,
    80: null,
    96: null,
  },

  // Border system
  border: {
    radius: {
      none: null,
      sm: null,
      default: null,
      md: null,
      lg: null,
      xl: null,
      '2xl': null,
      '3xl': null,
      full: null,
    },
    width: {
      0: null,
      default: null,
      2: null,
      4: null,
      8: null,
    },
  },

  // Shadow system
  shadow: {
    xs: null,
    sm: null,
    default: null,
    md: null,
    lg: null,
    xl: null,
    '2xl': null,
    inner: null,
    none: null,
  },

  // Animation system
  animation: {
    duration: {
      fast: null,
      normal: null,
      slow: null,
    },
    easing: {
      linear: null,
      easeIn: null,
      easeOut: null,
      easeInOut: null,
    },
  },
});

export type ThemeContract = typeof themeContract;