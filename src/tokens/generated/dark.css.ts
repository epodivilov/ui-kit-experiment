/**
 * Vanilla-Extract Theme: dark
 * Auto-generated from design tokens - DO NOT EDIT
 */
import { globalStyle, assignVars } from '@vanilla-extract/css';
import { tokens } from './contract.css';

// Apply theme via data-theme attribute
globalStyle('[data-theme="dark"]', {
  vars: assignVars(tokens, {
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
  })
});
