/**
 * UI Kit Library
 *
 * A modern, type-safe UI Kit built with Base UI, Vanilla-Extract,
 * and design tokens for building consistent user interfaces.
 *
 * ## Import Examples
 *
 * ### Full import (all components and utilities)
 * ```tsx
 * import { Button, Input, ThemeProvider, lightTheme } from 'ui-kit';
 * ```
 *
 * ### Tree-shaking friendly imports (recommended)
 * ```tsx
 * import { Button } from 'ui-kit/components';
 * import { ThemeProvider, lightTheme } from 'ui-kit/themes';
 * import { cn } from 'ui-kit/utils';
 * ```
 *
 * ### Category imports
 * ```tsx
 * import * as Components from 'ui-kit/components';
 * import * as Themes from 'ui-kit/themes';
 * ```
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

// =============================================================================
// CORE COMPONENTS
// =============================================================================
// All UI components (Button, Input, Card, etc.)
// For tree-shaking: import { Button } from 'ui-kit/components'
export * from './components';

// =============================================================================
// THEME SYSTEM
// =============================================================================
// Theme providers, contracts, and pre-built themes
// For tree-shaking: import { ThemeProvider } from 'ui-kit/themes'
export * from './themes';

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================
// Helper functions for styling, accessibility, etc.
// For tree-shaking: import { cn } from 'ui-kit/utils'
export * from './utils';

// =============================================================================
// REACT HOOKS
// =============================================================================
// Custom React hooks for common UI patterns
// For tree-shaking: import { useToggle } from 'ui-kit/hooks'
export * from './hooks';

// =============================================================================
// DESIGN TOKENS & CONSTANTS
// =============================================================================
// Breakpoints, z-index values, animation durations, etc.
// For tree-shaking: import { BREAKPOINTS } from 'ui-kit/constants'
export * from './constants';

// =============================================================================
// TYPESCRIPT TYPES
// =============================================================================
// All public TypeScript interfaces and types
export type * from './types';

// =============================================================================
// LIBRARY METADATA
// =============================================================================
/**
 * Current version of the UI Kit library
 * @example
 * ```tsx
 * import { VERSION } from 'ui-kit';
 * console.log(`UI Kit version: ${VERSION}`);
 * ```
 */
export const VERSION = '0.1.0' as const;
