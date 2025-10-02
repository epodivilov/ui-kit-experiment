/**
 * Vanilla-Extract Theme: light
 * Auto-generated from design tokens - DO NOT EDIT
 */
import { createTheme } from '@vanilla-extract/css';
import { tokens } from './contract.css';

export const lightTheme = createTheme(tokens, {
  'typography': {
    'heading-xl': {
      'font-family': 'Inter, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, sans-serif',
      'font-weight': '700',
      'font-size': '3rem',
      'line-height': '120%'
    },
    'heading-l': {
      'font-family': 'Inter, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, sans-serif',
      'font-weight': '700',
      'font-size': '2.25rem',
      'line-height': '120%'
    },
    'heading-m': {
      'font-family': 'Inter, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, sans-serif',
      'font-weight': '600',
      'font-size': '1.5rem',
      'line-height': '120%'
    },
    'heading-s': {
      'font-family': 'Inter, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, sans-serif',
      'font-weight': '600',
      'font-size': '1.25rem',
      'line-height': '150%'
    },
    'body-l': {
      'font-family': 'Inter, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, sans-serif',
      'font-weight': '400',
      'font-size': '1.125rem',
      'line-height': '150%'
    },
    'body-m': {
      'font-family': 'Inter, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, sans-serif',
      'font-weight': '400',
      'font-size': '1rem',
      'line-height': '150%'
    },
    'body-s': {
      'font-family': 'Inter, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, sans-serif',
      'font-weight': '400',
      'font-size': '0.875rem',
      'line-height': '150%'
    },
    'caption': {
      'font-family': 'Inter, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, sans-serif',
      'font-weight': '500',
      'font-size': '0.75rem',
      'line-height': '150%'
    }
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
  'font-family': {
    'body': 'Inter, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, sans-serif',
    'heading': 'Inter, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, sans-serif',
    'mono': '\'JetBrains Mono\', \'Fira Code\', \'Courier New\', monospace'
  },
  'font-size': {
    'xs': '0.875rem',
    'sm': '1rem',
    'md': '1.125rem',
    'lg': '1.25rem'
  },
  'font-weight': {
    'normal': '400',
    'medium': '500',
    'semibold': '600',
    'bold': '700'
  },
  'line-height': {
    'tight': '120%',
    'normal': '150%',
    'relaxed': '175%'
  },
  'background': {
    'default': '#ffffff',
    'surface': '#fafafa',
    'elevated': '#ffffff',
    'disabled': '#f5f5f5'
  },
  'foreground': {
    'default': '#171717',
    'subtle': '#525252',
    'disabled': '#a3a3a3',
    'on-interactive': '#ffffff',
    'on-danger': '#ffffff',
    'on-success': '#ffffff',
    'on-warning': '#171717'
  },
  'interactive': {
    'primary': {
      'default': {
        'background': '#2563eb',
        'foreground': '#ffffff'
      },
      'hover': {
        'background': '#1d4ed8',
        'foreground': '#ffffff'
      },
      'active': {
        'background': '#1e40af',
        'foreground': '#ffffff'
      },
      'focus': {
        'background': '#2563eb',
        'foreground': '#ffffff'
      },
      'disabled': {
        'background': '#f5f5f5',
        'foreground': '#a3a3a3'
      }
    },
    'secondary': {
      'default': {
        'background': '#f5f5f5',
        'foreground': '#171717'
      },
      'hover': {
        'background': '#e5e5e5',
        'foreground': '#171717'
      },
      'active': {
        'background': '#d4d4d4',
        'foreground': '#171717'
      },
      'focus': {
        'background': '#f5f5f5',
        'foreground': '#171717'
      },
      'disabled': {
        'background': '#f5f5f5',
        'foreground': '#a3a3a3'
      }
    },
    'danger': {
      'default': {
        'background': '#dc2626',
        'foreground': '#ffffff'
      },
      'hover': {
        'background': '#b91c1c',
        'foreground': '#ffffff'
      },
      'active': {
        'background': '#991b1b',
        'foreground': '#ffffff'
      },
      'focus': {
        'background': '#dc2626',
        'foreground': '#ffffff'
      },
      'disabled': {
        'background': '#f5f5f5',
        'foreground': '#a3a3a3'
      }
    },
    'success': {
      'default': {
        'background': '#16a34a',
        'foreground': '#ffffff'
      },
      'hover': {
        'background': '#15803d',
        'foreground': '#ffffff'
      },
      'active': {
        'background': '#166534',
        'foreground': '#ffffff'
      },
      'focus': {
        'background': '#16a34a',
        'foreground': '#ffffff'
      },
      'disabled': {
        'background': '#f5f5f5',
        'foreground': '#a3a3a3'
      }
    },
    'warning': {
      'default': {
        'background': '#eab308',
        'foreground': '#171717'
      },
      'hover': {
        'background': '#ca8a04',
        'foreground': '#171717'
      },
      'active': {
        'background': '#a16207',
        'foreground': '#171717'
      },
      'focus': {
        'background': '#eab308',
        'foreground': '#171717'
      },
      'disabled': {
        'background': '#f5f5f5',
        'foreground': '#a3a3a3'
      }
    }
  },
  'border': {
    'default': '#d4d4d4',
    'hover': '#a3a3a3',
    'focus': '#2563eb',
    'disabled': '#e5e5e5'
  }
});

export const lightClass = lightTheme;
