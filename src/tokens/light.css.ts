/**
 * Vanilla-Extract Theme: light
 * Auto-generated from design tokens - DO NOT EDIT
 */
import { createTheme } from '@vanilla-extract/css';
import { tokens } from './contract.css';

export const lightTheme = createTheme(tokens, {
  'color': {
    'neutral': {
      '50': '#fafafa',
      '100': '#f5f5f5',
      '200': '#e5e5e5',
      '300': '#d4d4d4',
      '400': '#a3a3a3',
      '500': '#737373',
      '600': '#525252',
      '700': '#404040',
      '800': '#262626',
      '900': '#171717'
    },
    'blue': {
      '50': '#eff6ff',
      '100': '#dbeafe',
      '200': '#bfdbfe',
      '300': '#93c5fd',
      '400': '#60a5fa',
      '500': '#3b82f6',
      '600': '#2563eb',
      '700': '#1d4ed8',
      '800': '#1e40af',
      '900': '#1e3a8a'
    },
    'red': {
      '50': '#fef2f2',
      '100': '#fee2e2',
      '200': '#fecaca',
      '300': '#fca5a5',
      '400': '#f87171',
      '500': '#ef4444',
      '600': '#dc2626',
      '700': '#b91c1c',
      '800': '#991b1b',
      '900': '#7f1d1d'
    },
    'green': {
      '50': '#f0fdf4',
      '100': '#dcfce7',
      '200': '#bbf7d0',
      '300': '#86efac',
      '400': '#4ade80',
      '500': '#22c55e',
      '600': '#16a34a',
      '700': '#15803d',
      '800': '#166534',
      '900': '#14532d'
    },
    'yellow': {
      '50': '#fefce8',
      '100': '#fef9c3',
      '200': '#fef08a',
      '300': '#fde047',
      '400': '#facc15',
      '500': '#eab308',
      '600': '#ca8a04',
      '700': '#a16207',
      '800': '#854d0e',
      '900': '#713f12'
    },
    'white': '#ffffff',
    'black': '#000000'
  },
  'size': {
    '0': '0rem',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '7': '1.75rem',
    '8': '2rem',
    '9': '2.25rem',
    '10': '2.5rem',
    '12': '3rem',
    '14': '3.5rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem',
    '32': '8rem',
    '40': '10rem',
    '48': '12rem',
    '56': '14rem',
    '64': '16rem',
    '80': '20rem',
    '96': '24rem',
    '120': '30rem'
  },
  'borderWidth': {
    '0': '0px',
    '1': '1px',
    '2': '2px',
    '3': '3px',
    '4': '4px'
  },
  'borderRadius': {
    '0': '0rem',
    '1': '0.125rem',
    '2': '0.25rem',
    '3': '0.375rem',
    '4': '0.5rem',
    '6': '0.75rem',
    '8': '1rem',
    '12': '1.5rem',
    'full': '9999px'
  },
  'font-family': {
    'sans': 'Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif',
    'mono': ''JetBrains Mono', 'Fira Code', 'Courier New', monospace'
  },
  'font-size': {
    '100': '0.75rem',
    '200': '0.875rem',
    '300': '1rem',
    '400': '1.125rem',
    '500': '1.25rem',
    '600': '1.5rem',
    '700': '1.875rem',
    '800': '2.25rem',
    '900': '3rem'
  },
  'font-weight': {
    '100': '400',
    '200': '500',
    '300': '600',
    '400': '700'
  },
  'line-height': {
    '100': '120%',
    '200': '150%',
    '300': '175%'
  },
  'opacity': {
    '0': '0',
    '5': '0.05',
    '10': '0.1',
    '20': '0.2',
    '30': '0.3',
    '40': '0.4',
    '50': '0.5',
    '60': '0.6',
    '70': '0.7',
    '80': '0.8',
    '90': '0.9',
    '100': '1'
  },
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
  'radius': {
    'sm': '0.25rem',
    'md': '0.5rem',
    'lg': '0.75rem',
    'full': '9999px'
  },
  'stroke': {
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
        'background': '#1e40af'
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
        'background': '#d4d4d4'
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
        'background': '#991b1b'
      }
    },
    'success': {
      'default': {
        'background': '#16a34a',
        'foreground': '#ffffff'
      },
      'hover': {
        'background': '#15803d'
      }
    },
    'warning': {
      'default': {
        'background': '#eab308',
        'foreground': '#171717'
      },
      'hover': {
        'background': '#ca8a04'
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
