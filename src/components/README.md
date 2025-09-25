# Component Directory Structure

This document outlines the standardized directory structure and file organization pattern for all UI Kit components.

## Directory Pattern

Each component should follow this consistent structure:

```
src/components/ComponentName/
├── index.ts                 # Main export file
├── ComponentName.tsx        # Main component implementation
├── ComponentName.types.ts   # TypeScript type definitions
├── ComponentName.css.ts     # Vanilla-Extract styles
├── ComponentName.stories.tsx # Storybook stories
└── README.md               # Component documentation (optional)
```

## File Responsibilities

### `index.ts`
- **Purpose**: Main export point for the component
- **Exports**: Component and its types
- **Documentation**: Brief JSDoc with usage example

### `ComponentName.tsx`
- **Purpose**: Main React component implementation
- **Features**:
  - Uses `forwardRef` for ref forwarding
  - Implements accessibility best practices
  - Handles all component logic and state
  - Imports and applies styles from `.css.ts`

### `ComponentName.types.ts`
- **Purpose**: TypeScript type definitions
- **Contains**:
  - Main component props interface
  - Supporting types and enums
  - Proper JSDoc documentation for all props
  - Readonly modifiers where appropriate

### `ComponentName.css.ts`
- **Purpose**: Vanilla-Extract CSS-in-JS styles
- **Features**:
  - Uses `style()` for base styles
  - Uses `styleVariants()` for variants (size, color, etc.)
  - Includes responsive design patterns
  - Follows accessibility guidelines
  - Will integrate with theme contracts

### `ComponentName.stories.tsx`
- **Purpose**: Storybook stories for development and testing
- **Includes**:
  - Default story
  - Variant demonstrations
  - Size demonstrations
  - State demonstrations (loading, disabled, etc.)
  - Interactive playground story
  - Proper controls and documentation

## Example Implementation

See the `Button` component as a reference implementation that demonstrates:

- ✅ Complete TypeScript support with proper types
- ✅ Accessibility features (ARIA labels, focus management)
- ✅ Vanilla-Extract styling with variants
- ✅ Comprehensive Storybook stories
- ✅ Icon support with proper positioning
- ✅ Loading and disabled states
- ✅ Responsive design considerations

## Naming Conventions

- **Components**: PascalCase (e.g., `Button`, `InputField`, `DropdownMenu`)
- **Files**: Match component name exactly
- **Props Interface**: `ComponentNameProps`
- **CSS Classes**: camelCase with component prefix (e.g., `buttonBase`, `buttonVariants`)

## Key Guidelines

1. **Accessibility First**: All components must meet WCAG 2.1 AA standards
2. **TypeScript Strict**: Use strict typing with proper JSDoc documentation
3. **Performance**: Leverage `forwardRef`, `memo` when appropriate
4. **Testing**: Include comprehensive Storybook stories
5. **Consistency**: Follow the established patterns exactly
6. **Documentation**: Include clear examples and prop descriptions

## Integration with Main Export

All components are automatically exported through the main components index:

```typescript
// src/components/index.ts
export * from './Button';
export * from './Input';
// ... other components
```

This enables clean imports for consumers:

```typescript
import { Button, Input } from 'ui-kit';
```

## Future Enhancements

As the library grows, this structure will support:
- Theme integration via Vanilla-Extract contracts
- Advanced accessibility features
- Automated testing patterns
- Design token integration
- Performance optimizations