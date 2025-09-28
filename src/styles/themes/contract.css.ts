/**
 * Theme Contract
 *
 * Defines the structure for theming the UI Kit using Vanilla-Extract.
 * This creates the type-safe theming system that all components will use.
 *
 * The contract defines the shape of theme tokens that can be customized
 * while maintaining strict type safety.
 */

import { createThemeContract } from '@vanilla-extract/css';

export const themeContract = createThemeContract({
  colors: {
    // Core color palette
    primary: {
      50: '',
      100: '',
      200: '',
      300: '',
      400: '',
      500: '',
      600: '',
      700: '',
      800: '',
      900: '',
      950: '',
    },
    neutral: {
      0: '',
      50: '',
      100: '',
      200: '',
      300: '',
      400: '',
      500: '',
      600: '',
      700: '',
      800: '',
      900: '',
      950: '',
    },
    success: {
      50: '',
      100: '',
      200: '',
      300: '',
      400: '',
      500: '',
      600: '',
      700: '',
      800: '',
      900: '',
      950: '',
    },
    warning: {
      50: '',
      100: '',
      200: '',
      300: '',
      400: '',
      500: '',
      600: '',
      700: '',
      800: '',
      900: '',
      950: '',
    },
    error: {
      50: '',
      100: '',
      200: '',
      300: '',
      400: '',
      500: '',
      600: '',
      700: '',
      800: '',
      900: '',
      950: '',
    },

    // Semantic colors that reference core colors
    text: {
      primary: '',
      secondary: '',
      tertiary: '',
      disabled: '',
      inverse: '',
      link: '',
      linkHover: '',
    },
    background: {
      primary: '',
      secondary: '',
      tertiary: '',
      overlay: '',
    },
    border: {
      default: '',
      muted: '',
      strong: '',
      focus: '',
    },
    status: {
      success: {
        text: '',
        background: '',
        border: '',
      },
      warning: {
        text: '',
        background: '',
        border: '',
      },
      error: {
        text: '',
        background: '',
        border: '',
      },
      info: {
        text: '',
        background: '',
        border: '',
      },
    },
  },

  typography: {
    fontFamily: {
      sans: '',
      mono: '',
    },
    fontSize: {
      xs: '',
      sm: '',
      base: '',
      lg: '',
      xl: '',
      '2xl': '',
      '3xl': '',
      '4xl': '',
      '5xl': '',
      '6xl': '',
      '7xl': '',
      '8xl': '',
      '9xl': '',
    },
    fontWeight: {
      thin: '',
      extralight: '',
      light: '',
      normal: '',
      medium: '',
      semibold: '',
      bold: '',
      extrabold: '',
      black: '',
    },
    lineHeight: {
      none: '',
      tight: '',
      snug: '',
      normal: '',
      relaxed: '',
      loose: '',
    },
  },

  spacing: {
    0: '',
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: '',
    10: '',
    11: '',
    12: '',
    14: '',
    16: '',
    20: '',
    24: '',
    28: '',
    32: '',
    36: '',
    40: '',
    44: '',
    48: '',
    52: '',
    56: '',
    60: '',
    64: '',
    72: '',
    80: '',
    96: '',
  },

  borderRadius: {
    none: '',
    sm: '',
    base: '',
    md: '',
    lg: '',
    xl: '',
    '2xl': '',
    '3xl': '',
    full: '',
  },

  borderWidth: {
    0: '',
    1: '',
    2: '',
    4: '',
    8: '',
  },

  borderStyle: {
    solid: '',
    dashed: '',
    dotted: '',
  },

  shadow: {
    none: '',
    xs: '',
    sm: '',
    base: '',
    md: '',
    lg: '',
    xl: '',
    '2xl': '',
    inner: '',
    focus: {
      ring: '',
      error: '',
      success: '',
    },
  },

  animation: {
    duration: {
      instant: '',
      fast: '',
      normal: '',
      slow: '',
      slower: '',
    },
    easing: {
      linear: '',
      ease: '',
      easeIn: '',
      easeOut: '',
      easeInOut: '',
      spring: '',
      bounce: '',
    },
  },

  transition: {
    all: '',
    colors: '',
    transform: '',
    opacity: '',
  },
});

// Export individual theme contract sections for convenience
export const {
  colors,
  typography,
  spacing,
  borderRadius,
  borderWidth,
  borderStyle,
  shadow,
  animation,
  transition,
} = themeContract;