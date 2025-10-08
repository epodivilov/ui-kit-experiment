/**
 * Vanilla-Extract Theme: dark
 * Auto-generated from design tokens - DO NOT EDIT
 */
import { globalStyle, assignVars } from '@vanilla-extract/css';
import { tokens } from './contract.css';

// Apply theme via data-theme attribute
globalStyle('[data-theme="dark"]', {
  vars: assignVars(tokens, {
  'sizing': {
    'lg': '2rem',
    'md': '1.5rem',
    'sm': '1rem',
    'xl': '3rem',
    'xs': '0.5rem'
  },
  'spacing': {
    'lg': '1.5rem',
    'md': '1rem',
    'sm': '0.5rem',
    'xl': '2rem',
    'xs': '0.25rem'
  },
  'font-size': {
    'lg': '1.25rem',
    'md': '1.125rem',
    'sm': '1rem',
    'xs': '0.875rem'
  },
  'typography': {
    'body-l': {
      'font-size': '1.125rem',
      'font-family': 'Inter, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, sans-serif',
      'font-weight': '400',
      'line-height': '150%'
    },
    'body-m': {
      'font-size': '1rem',
      'font-family': 'Inter, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, sans-serif',
      'font-weight': '400',
      'line-height': '150%'
    },
    'body-s': {
      'font-size': '0.875rem',
      'font-family': 'Inter, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, sans-serif',
      'font-weight': '400',
      'line-height': '150%'
    },
    'caption': {
      'font-size': '0.75rem',
      'font-family': 'Inter, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, sans-serif',
      'font-weight': '500',
      'line-height': '150%'
    },
    'heading-l': {
      'font-size': '2.25rem',
      'font-family': 'Inter, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, sans-serif',
      'font-weight': '700',
      'line-height': '120%'
    },
    'heading-m': {
      'font-size': '1.5rem',
      'font-family': 'Inter, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, sans-serif',
      'font-weight': '600',
      'line-height': '120%'
    },
    'heading-s': {
      'font-size': '1.25rem',
      'font-family': 'Inter, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, sans-serif',
      'font-weight': '600',
      'line-height': '150%'
    },
    'heading-xl': {
      'font-size': '3rem',
      'font-family': 'Inter, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, sans-serif',
      'font-weight': '700',
      'line-height': '120%'
    }
  },
  'font-family': {
    'body': 'Inter, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, sans-serif',
    'mono': '\'JetBrains Mono\', \'Fira Code\', \'Courier New\', monospace',
    'heading': 'Inter, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, sans-serif'
  },
  'font-weight': {
    'bold': '700',
    'medium': '500',
    'normal': '400',
    'semibold': '600'
  },
  'line-height': {
    'tight': '120%',
    'normal': '150%',
    'relaxed': '175%'
  },
  'border-width': {
    'thin': '1px',
    'thick': '3px',
    'default': '2px'
  },
  'border-radius': {
    'lg': '0.75rem',
    'md': '0.5rem',
    'sm': '0.25rem',
    'full': '9999px'
  },
  'border': {
    'focus': '#60a5fa',
    'hover': '#525252',
    'default': '#404040',
    'disabled': '#262626'
  },
  'background': {
    'default': '#171717',
    'surface': '#262626',
    'disabled': '#262626',
    'elevated': '#404040'
  },
  'foreground': {
    'subtle': '#a3a3a3',
    'default': '#fafafa',
    'disabled': '#525252',
    'on-danger': '#ffffff',
    'on-success': '#ffffff',
    'on-warning': '#171717',
    'on-interactive': '#ffffff'
  },
  'interactive': {
    'danger': {
      'focus': {
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
      'default': {
        'background': '#ef4444',
        'foreground': '#ffffff'
      },
      'disabled': {
        'background': '#262626',
        'foreground': '#525252'
      }
    },
    'primary': {
      'focus': {
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
      'default': {
        'background': '#3b82f6',
        'foreground': '#ffffff'
      },
      'disabled': {
        'background': '#262626',
        'foreground': '#525252'
      }
    },
    'success': {
      'focus': {
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
      'default': {
        'background': '#22c55e',
        'foreground': '#ffffff'
      },
      'disabled': {
        'background': '#262626',
        'foreground': '#525252'
      }
    },
    'warning': {
      'focus': {
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
      'default': {
        'background': '#eab308',
        'foreground': '#171717'
      },
      'disabled': {
        'background': '#262626',
        'foreground': '#525252'
      }
    },
    'secondary': {
      'focus': {
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
      'default': {
        'background': '#404040',
        'foreground': '#fafafa'
      },
      'disabled': {
        'background': '#262626',
        'foreground': '#525252'
      }
    }
  }
  })
});
