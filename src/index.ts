/**
 * UI Kit Library
 *
 * A modern, type-safe UI Kit built with Base UI, Vanilla-Extract,
 * and design tokens for building consistent user interfaces.
 *
 * @example
 * ```tsx
 * import { Button, ThemeProvider, lightTheme } from 'ui-kit';
 *
 * function App() {
 *   return (
 *     <ThemeProvider theme={lightTheme}>
 *       <Button variant="primary">Click me</Button>
 *     </ThemeProvider>
 *   );
 * }
 * ```
 */

// Core Components
export * from './components';

// Utility Functions
export * from './utils';

// React Hooks
export * from './hooks';

// Theme System
export * from './themes';

// Design Tokens and Constants
export * from './constants';

// TypeScript Types
export type * from './types';

// Library Version
export const VERSION = '0.1.0' as const;
