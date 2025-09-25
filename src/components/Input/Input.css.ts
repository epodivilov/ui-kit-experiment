import { style, styleVariants } from '@vanilla-extract/css';

/**
 * Input container wrapper
 */
export const inputContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
});

/**
 * Input label styles
 */
export const inputLabel = style({
  fontSize: '14px',
  fontWeight: 500,
  color: '#374151',
  lineHeight: 1.4,
});

/**
 * Input field wrapper for positioning icons
 */
export const inputWrapper = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
});

/**
 * Base input field styles
 */
export const inputBase = style({
  width: '100%',
  border: '1px solid #d1d5db',
  borderRadius: '6px',
  backgroundColor: '#ffffff',
  fontSize: '16px',
  lineHeight: 1.5,
  color: '#111827',
  transition: 'all 0.2s ease-in-out',
  outline: 'none',

  '::placeholder': {
    color: '#9ca3af',
  },

  ':focus': {
    borderColor: '#007bff',
    boxShadow: '0 0 0 3px rgba(0, 123, 255, 0.1)',
  },

  ':disabled': {
    backgroundColor: '#f9fafb',
    color: '#6b7280',
    cursor: 'not-allowed',
  },
});

/**
 * Input size variants
 */
export const inputSizes = styleVariants({
  small: {
    height: '32px',
    padding: '0 8px',
    fontSize: '14px',
  },
  medium: {
    height: '40px',
    padding: '0 12px',
    fontSize: '16px',
  },
  large: {
    height: '48px',
    padding: '0 16px',
    fontSize: '18px',
  },
});

/**
 * Input with start icon
 */
export const inputWithStartIcon = styleVariants({
  small: {
    paddingLeft: '32px',
  },
  medium: {
    paddingLeft: '40px',
  },
  large: {
    paddingLeft: '48px',
  },
});

/**
 * Input with end icon
 */
export const inputWithEndIcon = styleVariants({
  small: {
    paddingRight: '32px',
  },
  medium: {
    paddingRight: '40px',
  },
  large: {
    paddingRight: '48px',
  },
});

/**
 * Icon positioning styles
 */
export const inputIcon = style({
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#6b7280',
  pointerEvents: 'none',
});

export const inputStartIcon = style([
  inputIcon,
  {
    left: '12px',
  },
]);

export const inputEndIcon = style([
  inputIcon,
  {
    right: '12px',
  },
]);

/**
 * Error state styles
 */
export const inputError = style({
  borderColor: '#dc3545',

  ':focus': {
    borderColor: '#dc3545',
    boxShadow: '0 0 0 3px rgba(220, 53, 69, 0.1)',
  },
});

/**
 * Help text and error message styles
 */
export const inputHelpText = style({
  fontSize: '12px',
  color: '#6b7280',
  lineHeight: 1.4,
});

export const inputErrorText = style([
  inputHelpText,
  {
    color: '#dc3545',
  },
]);

/**
 * Full width modifier
 */
export const inputFullWidth = style({
  width: '100%',
});