/**
 * Vanilla-Extract Theme: light
 * Auto-generated from design tokens - DO NOT EDIT
 */
import { createTheme } from '@vanilla-extract/css';
import { tokens } from './contract.css';

export const lightTheme = createTheme(tokens, {
  'typography': {
    'heading-xl': '{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif', fontWeight: '700', fontSize: '3rem', lineHeight: '120%' }',
    'heading-l': '{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif', fontWeight: '700', fontSize: '2.25rem', lineHeight: '120%' }',
    'heading-m': '{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif', fontWeight: '600', fontSize: '1.5rem', lineHeight: '120%' }',
    'heading-s': '{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif', fontWeight: '600', fontSize: '1.25rem', lineHeight: '150%' }',
    'body-l': '{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif', fontWeight: '400', fontSize: '1.125rem', lineHeight: '150%' }',
    'body-m': '{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif', fontWeight: '400', fontSize: '1rem', lineHeight: '150%' }',
    'body-s': '{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif', fontWeight: '400', fontSize: '0.875rem', lineHeight: '150%' }',
    'caption': '{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif', fontWeight: '500', fontSize: '0.75rem', lineHeight: '150%' }'
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
