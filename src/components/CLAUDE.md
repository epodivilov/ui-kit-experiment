# Component Development Guidelines

## Philosophy

Components in this UI Kit are designed to be **used as-is** with minimal customization options. This ensures:
- Consistent design across all applications
- Simplified maintenance
- Predictable behavior
- Smaller bundle sizes

## Rules

### 1. No Custom Styling Props
❌ **DO NOT** add props for custom styling:
- No `className` prop
- No `style` prop
- No `sx` or similar styling props
- No individual style properties (color, margin, etc.)

### 2. Limited Variant System
✅ **DO** provide only predefined variants:
- Use `@vanilla-extract/recipes` for variant definitions
- Only add variants that are part of the design system
- Variants must be defined in design tokens (Layer 4)

### 3. Semantic HTML Only
✅ **DO** use Base UI components when available:
- Check Base UI documentation first
- Use Base UI for accessibility features
- If Base UI doesn't have the component, use semantic HTML

❌ **DO NOT** add unnecessary wrappers:
- Avoid extra `<div>` or `<span>` elements
- Keep DOM structure minimal

### 4. No "Feature Creep"
❌ **DO NOT** add features like:
- Loading states (unless specified in design system)
- Icon slots (startIcon, endIcon)
- Custom content rendering
- Polymorphic components (as prop)
- Render props or similar patterns

### 5. Design Token Usage
✅ **DO** use tokens from generated files:
```typescript
import { tokens } from '../../tokens/generated';

// Use tokens in recipes
padding: tokens.spacing.md,
color: tokens.interactive.primary.default.foreground,
```

❌ **DO NOT** use hardcoded values:
```typescript
// Bad
padding: '16px',
color: '#3b82f6',

// Good
padding: tokens.spacing.md,
color: tokens.interactive.primary.default.background,
```

### 6. Vanilla Extract Pseudo-Selectors

**In `base` block:** Use simple pseudo-selectors without `&`:
```typescript
base: {
  cursor: 'pointer',

  ':disabled': {
    cursor: 'not-allowed',
  },

  ':focus-visible': {
    outline: `2px solid ${tokens.border.focus}`,
  },
}
```

**In `variants` block:** Use `selectors` object with `&` prefix:
```typescript
variant: {
  primary: {
    backgroundColor: tokens.interactive.primary.default.background,
    color: tokens.interactive.primary.default.foreground,

    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: tokens.interactive.primary.hover.background,
      },

      '&:active:not(:disabled)': {
        backgroundColor: tokens.interactive.primary.active.background,
      },

      '&:disabled': {
        backgroundColor: tokens.interactive.primary.disabled.background,
        color: tokens.interactive.primary.disabled.foreground,
      },
    },
  },
}
```

**Rule:**
- `base` = direct pseudo-selectors (`:hover`, `:disabled`)
- `variants` = `selectors` object with `&` prefix (`&:hover:not(:disabled)`)

## Example: Button Component

### ✅ Correct Implementation
```typescript
export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>,
    ButtonVariants {
  children: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, size, fullWidth, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={styles.button({ variant, size, fullWidth })}
        {...props}
      >
        {children}
      </button>
    );
  }
);
```

### ❌ Incorrect Implementation
```typescript
// Too many customization options!
export interface ButtonProps {
  children: ReactNode;
  className?: string; // ❌
  style?: CSSProperties; // ❌
  loading?: boolean; // ❌ (unless in design system)
  startIcon?: ReactNode; // ❌
  endIcon?: ReactNode; // ❌
  as?: ElementType; // ❌
}
```

## When to Add Features

Only add features if:
1. They are explicitly defined in the design system
2. They are present in design tokens (Layer 4)
3. They are required for accessibility (ARIA attributes)
4. They are standard HTML attributes (onClick, disabled, etc.)

## Questions?

If you're unsure whether to add a feature, ask yourself:
- Is this in the design system?
- Does this affect visual consistency?
- Can users work around this limitation?

When in doubt, **don't add it**.
