/**
 * UI Kit - Design System Components
 *
 * A modern, type-safe UI Kit built with Vanilla Extract and design tokens.
 */

// Components
export { Button } from './components/Button';
export type { ButtonProps } from './components/Button';

export { Checkbox } from './components/Checkbox';
export type { CheckboxProps } from './components/Checkbox';

export { Input } from './components/Input';
export type { InputProps } from './components/Input';

export {
  Toast,
  ToastProvider,
  ToastViewport,
  ToastRenderer,
  useToastManager,
} from './components/Toast';
export type { ToastProps, ToastProviderProps } from './components/Toast';

export { ThemeProvider, useTheme } from './components/ThemeProvider';
export type { ThemeProviderProps, Theme, ThemeContextValue } from './components/ThemeProvider';

// Design Tokens
export { tokens, lightTheme, darkTheme, lightClass, darkClass } from './tokens/generated';
export type { ThemeTokens } from './tokens/generated';
