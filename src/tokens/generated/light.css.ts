/**
 * Vanilla-Extract Theme: light
 * Auto-generated from design tokens - DO NOT EDIT
 */
import { globalStyle, assignVars } from '@vanilla-extract/css';
import { tokens } from './contract.css';

// Apply theme via data-theme attribute
globalStyle('[data-theme="light"]', {
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
    'focus': '#2563eb',
    'hover': '#a3a3a3',
    'default': '#d4d4d4',
    'disabled': '#e5e5e5'
  },
  'background': {
    'default': '#ffffff',
    'surface': '#fafafa',
    'disabled': '#f5f5f5',
    'elevated': '#ffffff'
  },
  'foreground': {
    'subtle': '#525252',
    'default': '#171717',
    'disabled': '#a3a3a3',
    'on-danger': '#ffffff',
    'on-success': '#ffffff',
    'on-warning': '#171717',
    'on-interactive': '#ffffff'
  },
  'interactive': {
    'danger': {
      'focus': {
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
      'default': {
        'background': '#dc2626',
        'foreground': '#ffffff'
      },
      'disabled': {
        'background': '#f5f5f5',
        'foreground': '#a3a3a3'
      }
    },
    'primary': {
      'focus': {
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
      'default': {
        'background': '#16a34a',
        'foreground': '#ffffff'
      },
      'disabled': {
        'background': '#f5f5f5',
        'foreground': '#a3a3a3'
      }
    },
    'success': {
      'focus': {
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
      'default': {
        'background': '#16a34a',
        'foreground': '#ffffff'
      },
      'disabled': {
        'background': '#f5f5f5',
        'foreground': '#a3a3a3'
      }
    },
    'warning': {
      'focus': {
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
      'default': {
        'background': '#eab308',
        'foreground': '#171717'
      },
      'disabled': {
        'background': '#f5f5f5',
        'foreground': '#a3a3a3'
      }
    },
    'secondary': {
      'focus': {
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
      'default': {
        'background': '#f5f5f5',
        'foreground': '#171717'
      },
      'disabled': {
        'background': '#f5f5f5',
        'foreground': '#a3a3a3'
      }
    }
  }
  })
});
