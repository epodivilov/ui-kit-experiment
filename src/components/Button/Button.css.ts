import { style, styleVariants } from '@vanilla-extract/css';

/**
 * Base button styles
 */
export const buttonBase = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  border: 'none',
  borderRadius: '6px',
  fontFamily: 'inherit',
  fontWeight: 500,
  lineHeight: 1,
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  textDecoration: 'none',
  outline: 'none',

  ':focus-visible': {
    outline: '2px solid currentColor',
    outlineOffset: '2px',
  },

  ':disabled': {
    cursor: 'not-allowed',
    opacity: 0.6,
  },
});

/**
 * Button size variants
 */
export const buttonSizes = styleVariants({
  small: {
    height: '32px',
    padding: '0 12px',
    fontSize: '14px',
  },
  medium: {
    height: '40px',
    padding: '0 16px',
    fontSize: '16px',
  },
  large: {
    height: '48px',
    padding: '0 20px',
    fontSize: '18px',
  },
});

/**
 * Button variant styles
 * These will be connected to theme contracts later
 */
export const buttonVariants = styleVariants({
  primary: {
    backgroundColor: '#007bff',
    color: '#ffffff',

    ':hover:not(:disabled)': {
      backgroundColor: '#0056b3',
    },

    ':active:not(:disabled)': {
      backgroundColor: '#004085',
    },
  },
  secondary: {
    backgroundColor: '#6c757d',
    color: '#ffffff',

    ':hover:not(:disabled)': {
      backgroundColor: '#545b62',
    },

    ':active:not(:disabled)': {
      backgroundColor: '#3d4147',
    },
  },
  ghost: {
    backgroundColor: 'transparent',
    color: '#007bff',
    border: '1px solid #007bff',

    ':hover:not(:disabled)': {
      backgroundColor: '#007bff',
      color: '#ffffff',
    },

    ':active:not(:disabled)': {
      backgroundColor: '#0056b3',
    },
  },
  danger: {
    backgroundColor: '#dc3545',
    color: '#ffffff',

    ':hover:not(:disabled)': {
      backgroundColor: '#c82333',
    },

    ':active:not(:disabled)': {
      backgroundColor: '#a71e2a',
    },
  },
});

/**
 * Full width button modifier
 */
export const buttonFullWidth = style({
  width: '100%',
});

/**
 * Loading state styles
 */
export const buttonLoading = style({
  position: 'relative',
  color: 'transparent',

  '::after': {
    content: '',
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '16px',
    height: '16px',
    margin: 'auto',
    border: '2px solid currentColor',
    borderTop: '2px solid transparent',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
});

// Add keyframes for loading spinner
// Note: This will be moved to a global styles file later
const spinKeyframes = '@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }';

// Inject keyframes into document head
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = spinKeyframes;
  document.head.appendChild(style);
}