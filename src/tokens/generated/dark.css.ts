/**
 * Vanilla-Extract Theme: dark
 * Auto-generated from design tokens - DO NOT EDIT
 */
import { createTheme } from '@vanilla-extract/css';

import { tokens } from './contract.css';

export const darkTheme = createTheme(tokens, {
  'typography': {
    'heading-xl': `{ fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", fontWeight: "700", fontSize: "3rem", lineHeight: "120%" }`,
    'heading-l': `{ fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", fontWeight: "700", fontSize: "2.25rem", lineHeight: "120%" }`,
    'heading-m': `{ fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", fontWeight: "600", fontSize: "1.5rem", lineHeight: "120%" }`,
    'heading-s': `{ fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", fontWeight: "600", fontSize: "1.25rem", lineHeight: "150%" }`,
    'body-l': `{ fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", fontWeight: "400", fontSize: "1.125rem", lineHeight: "150%" }`,
    'body-m': `{ fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", fontWeight: "400", fontSize: "1rem", lineHeight: "150%" }`,
    'body-s': `{ fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", fontWeight: "400", fontSize: "0.875rem", lineHeight: "150%" }`,
    'caption': `{ fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", fontWeight: "500", fontSize: "0.75rem", lineHeight: "150%" }`
  },
  'sizing': {
    'xs': '0.5rem',
    'sm': '1rem',
    'md': '1.5rem',
    'lg': '2rem',
    'xl': '3rem'
  },
  'spacing': {
    'xs': '0.25rem',
    'sm': '0.5rem',
    'md': '1rem',
    'lg': '1.5rem',
    'xl': '2rem'
  },
  'border-radius': {
    'sm': '0.25rem',
    'md': '0.5rem',
    'lg': '0.75rem',
    'full': '9999px'
  },
  'border-width': {
    'thin': '1px',
    'default': '2px',
    'thick': '3px'
  },
  'background': {
    'default': '#171717',
    'surface': '#262626',
    'elevated': '#404040',
    'disabled': '#262626'
  },
  'foreground': {
    'default': '#fafafa',
    'subtle': '#a3a3a3',
    'disabled': '#525252',
    'on-interactive': '#ffffff',
    'on-danger': '#ffffff',
    'on-success': '#ffffff',
    'on-warning': '#171717'
  },
  'interactive': {
    'primary': {
      'default': {
        'background': '#3b82f6',
        'foreground': '#ffffff'
      },
      'hover': {
        'background': '#60a5fa',
        'foreground': '#ffffff'
      },
      'active': {
        'background': '#93c5fd',
        'foreground': '#ffffff'
      },
      'focus': {
        'background': '#3b82f6',
        'foreground': '#ffffff'
      },
      'disabled': {
        'background': '#262626',
        'foreground': '#525252'
      }
    },
    'secondary': {
      'default': {
        'background': '#404040',
        'foreground': '#fafafa'
      },
      'hover': {
        'background': '#525252',
        'foreground': '#fafafa'
      },
      'active': {
        'background': '#737373',
        'foreground': '#fafafa'
      },
      'focus': {
        'background': '#404040',
        'foreground': '#fafafa'
      },
      'disabled': {
        'background': '#262626',
        'foreground': '#525252'
      }
    },
    'danger': {
      'default': {
        'background': '#ef4444',
        'foreground': '#ffffff'
      },
      'hover': {
        'background': '#f87171',
        'foreground': '#ffffff'
      },
      'active': {
        'background': '#fca5a5',
        'foreground': '#ffffff'
      },
      'focus': {
        'background': '#ef4444',
        'foreground': '#ffffff'
      },
      'disabled': {
        'background': '#262626',
        'foreground': '#525252'
      }
    },
    'success': {
      'default': {
        'background': '#22c55e',
        'foreground': '#ffffff'
      },
      'hover': {
        'background': '#4ade80',
        'foreground': '#ffffff'
      },
      'active': {
        'background': '#86efac',
        'foreground': '#ffffff'
      },
      'focus': {
        'background': '#22c55e',
        'foreground': '#ffffff'
      },
      'disabled': {
        'background': '#262626',
        'foreground': '#525252'
      }
    },
    'warning': {
      'default': {
        'background': '#eab308',
        'foreground': '#171717'
      },
      'hover': {
        'background': '#facc15',
        'foreground': '#171717'
      },
      'active': {
        'background': '#fde047',
        'foreground': '#171717'
      },
      'focus': {
        'background': '#eab308',
        'foreground': '#171717'
      },
      'disabled': {
        'background': '#262626',
        'foreground': '#525252'
      }
    }
  },
  'border': {
    'default': '#404040',
    'hover': '#525252',
    'focus': '#60a5fa',
    'disabled': '#262626'
  }
});

export const darkClass = darkTheme;
