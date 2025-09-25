# UI Kit Export System

This document explains the export structure of the UI Kit library and how to optimize imports for tree-shaking and bundle size.

## Available Export Paths

### Main Entry Point
```tsx
import { Button, Input, ThemeProvider } from 'ui-kit';
```
- **Path**: `ui-kit`
- **Description**: Complete library with all components, themes, and utilities
- **Use case**: Quick prototyping, small applications
- **Bundle impact**: Imports everything (larger bundle)

### Tree-Shaking Friendly Exports (Recommended)

#### Components
```tsx
import { Button, Input } from 'ui-kit/components';
```
- **Path**: `ui-kit/components`
- **Description**: All UI components
- **Use case**: When you need multiple components
- **Bundle impact**: Only imports requested components

#### Themes
```tsx
import { ThemeProvider, lightTheme, darkTheme } from 'ui-kit/themes';
```
- **Path**: `ui-kit/themes`
- **Description**: Theme system, providers, and pre-built themes
- **Use case**: Setting up theming
- **Bundle impact**: Only theme-related code

#### Utilities
```tsx
import { cn, mergeRefs } from 'ui-kit/utils';
```
- **Path**: `ui-kit/utils`
- **Description**: Utility functions for styling and React patterns
- **Use case**: Helper functions
- **Bundle impact**: Only imported utilities

#### Hooks
```tsx
import { useToggle, useLocalStorage } from 'ui-kit/hooks';
```
- **Path**: `ui-kit/hooks`
- **Description**: Custom React hooks
- **Use case**: Reusable React logic
- **Bundle impact**: Only imported hooks

#### Constants
```tsx
import { BREAKPOINTS, Z_INDEX } from 'ui-kit/constants';
```
- **Path**: `ui-kit/constants`
- **Description**: Design tokens and constants
- **Use case**: Using design system values
- **Bundle impact**: Only imported constants

#### Styles (CSS)
```tsx
import 'ui-kit/styles';
```
- **Path**: `ui-kit/styles`
- **Description**: Global styles and CSS reset
- **Use case**: Base styling setup
- **Bundle impact**: CSS only

## Import Strategies

### Strategy 1: Full Import (Simplest)
```tsx
import { Button, Input, ThemeProvider, lightTheme } from 'ui-kit';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Button>Hello</Button>
      <Input placeholder="Type here..." />
    </ThemeProvider>
  );
}
```
**Pros**: Simple, one import statement
**Cons**: Larger bundle size, imports unused code
**Best for**: Prototypes, small apps

### Strategy 2: Category Imports (Balanced)
```tsx
import { Button, Input } from 'ui-kit/components';
import { ThemeProvider, lightTheme } from 'ui-kit/themes';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Button>Hello</Button>
      <Input placeholder="Type here..." />
    </ThemeProvider>
  );
}
```
**Pros**: Better tree-shaking, organized imports
**Cons**: More import statements
**Best for**: Most applications

### Strategy 3: Namespace Imports (Organized)
```tsx
import * as Components from 'ui-kit/components';
import * as Themes from 'ui-kit/themes';

function App() {
  return (
    <Themes.ThemeProvider theme={Themes.lightTheme}>
      <Components.Button>Hello</Components.Button>
      <Components.Input placeholder="Type here..." />
    </Themes.ThemeProvider>
  );
}
```
**Pros**: Clear namespacing, good organization
**Cons**: Longer component names
**Best for**: Large applications, avoiding name conflicts

## Bundle Analysis

### Full Import Size
- **Estimated**: ~50KB (minified + gzipped)
- **Includes**: All components, themes, utilities, hooks
- **Tree-shaking**: Limited

### Category Import Size (per category)
- **Components**: ~30KB (varies by components used)
- **Themes**: ~8KB
- **Utils**: ~3KB
- **Hooks**: ~2KB
- **Constants**: ~1KB

### Individual Export Size
- **Button**: ~5KB
- **Input**: ~4KB
- **ThemeProvider**: ~3KB
- **lightTheme**: ~2KB

## TypeScript Support

All export paths include full TypeScript support:

```tsx
import type { ButtonProps } from 'ui-kit/components';
import type { Theme } from 'ui-kit/themes';
import type { BreakpointKey } from 'ui-kit/constants';
```

## Build Output Structure

The library generates the following build artifacts:

```
dist/
├── index.js              # Main entry (ESM)
├── index.cjs             # Main entry (CommonJS)
├── index.d.ts            # Main types
├── styles.js             # Styles entry (ESM)
├── styles.cjs            # Styles entry (CommonJS)
├── styles.d.ts           # Styles types
├── components/
│   ├── index.js          # Components entry (ESM)
│   ├── index.cjs         # Components entry (CommonJS)
│   └── index.d.ts        # Components types
├── themes/
│   ├── index.js          # Themes entry (ESM)
│   ├── index.cjs         # Themes entry (CommonJS)
│   └── index.d.ts        # Themes types
└── ... (other categories)
```

## Best Practices

1. **Use category imports** for production applications
2. **Import only what you need** to minimize bundle size
3. **Use TypeScript** for better development experience
4. **Import styles separately** if you need custom CSS setup
5. **Check bundle analyzer** to verify tree-shaking is working

## Example: Optimal Setup

```tsx
// App.tsx
import { ThemeProvider } from 'ui-kit/themes';
import { lightTheme } from 'ui-kit/themes';
import 'ui-kit/styles'; // Global styles

// Pages/components import specific components
import { Button } from 'ui-kit/components';
import { Input } from 'ui-kit/components';

function LoginForm() {
  return (
    <form>
      <Input label="Email" type="email" />
      <Input label="Password" type="password" />
      <Button variant="primary" type="submit">
        Login
      </Button>
    </form>
  );
}

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <LoginForm />
    </ThemeProvider>
  );
}
```

This approach ensures minimal bundle size while maintaining good developer experience.