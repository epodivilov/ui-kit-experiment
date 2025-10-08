# Component Development Guidelines

> **⚠️ CRITICAL**: This document defines non-negotiable rules for component development. Read completely before implementing any component.

## Philosophy

Components in this UI Kit are designed to be **used as-is** with **zero custom styling options**. This is intentional and enforced to ensure:

- **Design consistency** - All applications look uniform
- **Simplified maintenance** - No CSS escape hatches to support
- **Predictable behavior** - Components work exactly as designed
- **Tree-shakable** - Smaller bundle sizes through strict variants
- **Type safety** - Design tokens enforce valid combinations

**Core Principle**: Users consume predefined variants, not style primitives.

---

## Technology Stack

- **Base UI** (`@base-ui-components/react`) - Headless, accessible component primitives
- **Vanilla-Extract** - Type-safe CSS-in-JS with zero runtime cost
- **Design Tokens** - Generated from Layer 4 component tokens (see `/tokens/CLAUDE.md`)
- **Storybook** - Development, testing, and documentation
- **TypeScript** - Full type safety across props and variants

---

## Non-Negotiable Rules

### 1. NO Custom Styling Props

**❌ FORBIDDEN - These props MUST NOT exist:**
```typescript
interface ComponentProps {
  className?: string;        // ❌ NO
  style?: CSSProperties;     // ❌ NO
  sx?: any;                  // ❌ NO
  css?: any;                 // ❌ NO
  color?: string;            // ❌ NO individual CSS props
  margin?: string;           // ❌ NO individual CSS props
  padding?: string;          // ❌ NO individual CSS props
}
```

**✅ CORRECT - Only design system variants:**
```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  // Only variants defined in design tokens
}
```

**Why?** Custom styling props break design consistency and create maintenance burden.

---

### 2. ONLY Predefined Variants

**✅ DO:**
- Define variants using `@vanilla-extract/recipes`
- Match variants exactly with Layer 4 component tokens
- Each variant must exist in `/tokens/4-components/[component].json`
- Use `RecipeVariants` type for TypeScript inference

**❌ DON'T:**
- Add variants not in design tokens
- Create "convenience" variants on the fly
- Allow arbitrary variant combinations

**Example - Variant Definition:**
```typescript
// Component tokens define variants
// tokens/4-components/button.json
{
  "button": {
    "variants": {
      "variant": {
        "primary": { /* styles */ },
        "secondary": { /* styles */ }
      },
      "size": {
        "sm": { /* styles */ },
        "md": { /* styles */ }
      }
    }
  }
}

// TypeScript component matches exactly
import { type RecipeVariants } from '@vanilla-extract/recipes';
import * as styles from './Button.css';

type ButtonVariants = RecipeVariants<typeof styles.button>;

interface ButtonProps extends ButtonVariants {
  // variant, size are inferred from recipe
}
```

---

### 3. Base UI First, Semantic HTML Second

**✅ DO - Check Base UI availability:**
```typescript
// Use Base UI when available
import { Checkbox as BaseCheckbox } from '@base-ui-components/react/checkbox';

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ variant, size, ...props }, ref) => {
    return (
      <BaseCheckbox.Root
        ref={ref}
        className={styles.checkbox({ variant, size })}
        {...props}
      >
        <BaseCheckbox.Indicator className={styles.indicator()}>
          <CheckIcon />
        </BaseCheckbox.Indicator>
      </BaseCheckbox.Root>
    );
  }
);
```

**✅ DO - Use semantic HTML if Base UI unavailable:**
```typescript
// Semantic HTML with proper ARIA
export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant, children, ...props }, ref) => {
    return (
      <article
        ref={ref}
        className={styles.card({ variant })}
        {...props}
      >
        {children}
      </article>
    );
  }
);
```

**❌ DON'T - Add unnecessary wrappers:**
```typescript
// Bad - extra div for no reason
return (
  <div className={wrapperClass}>
    <button className={styles.button()}>
      {children}
    </button>
  </div>
);

// Good - minimal DOM
return (
  <button className={styles.button()}>
    {children}
  </button>
);
```

**Why?** Base UI provides accessibility out-of-the-box. Minimal DOM = better performance.

---

### 4. NO Feature Creep

**❌ FORBIDDEN - Do NOT add these unless explicitly in design system:**
```typescript
interface ButtonProps {
  loading?: boolean;          // ❌ NO (unless design tokens define it)
  startIcon?: ReactNode;      // ❌ NO icon slots
  endIcon?: ReactNode;        // ❌ NO icon slots
  as?: ElementType;           // ❌ NO polymorphic components
  renderContent?: () => ReactNode;  // ❌ NO render props
  leftSlot?: ReactNode;       // ❌ NO content slots
  rightSlot?: ReactNode;      // ❌ NO content slots
}
```

**✅ ALLOWED - Only standard HTML attributes and design system variants:**
```typescript
interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>,
    ButtonVariants {
  children: ReactNode;
  // onClick, disabled, type, etc. inherited from ButtonHTMLAttributes
}
```

**Why?** Feature creep creates inconsistent APIs and maintenance burden. Stick to design system scope.

---

### 5. Design Tokens ONLY (No Hardcoded Values)

**✅ CORRECT - Generated tokens:**
```typescript
import { tokens } from '../../tokens/generated';

export const button = recipe({
  base: {
    padding: tokens.spacing.md,
    borderRadius: tokens.borderRadius.md,
    fontSize: tokens.typography.body.m.fontSize,
    backgroundColor: tokens.interactive.primary.default.background,
    color: tokens.interactive.primary.default.foreground,
  },
});
```

**❌ WRONG - Hardcoded values:**
```typescript
export const button = recipe({
  base: {
    padding: '12px 24px',           // ❌ NO hardcoded spacing
    borderRadius: '8px',            // ❌ NO hardcoded radius
    fontSize: '16px',               // ❌ NO hardcoded font size
    backgroundColor: '#3b82f6',     // ❌ NO hardcoded colors
    color: '#ffffff',               // ❌ NO hardcoded colors
  },
});
```

**Why?** Design tokens ensure themability, consistency, and type safety.

---

### 6. Vanilla-Extract Pseudo-Selector Rules

**CRITICAL PATTERN - Different syntax in `base` vs `variants`:**

#### In `base` block - Direct pseudo-selectors (NO `&`):
```typescript
export const button = recipe({
  base: {
    all: 'unset',
    cursor: 'pointer',

    // ✅ Direct pseudo-selectors
    ':hover': {
      transform: 'scale(1.02)',
    },

    ':disabled': {
      cursor: 'not-allowed',
      opacity: 0.5,
    },

    ':focus-visible': {
      outline: `2px solid ${tokens.border.focus}`,
      outlineOffset: '2px',
    },
  },
});
```

#### In `variants` block - Use `selectors` object with `&`:
```typescript
export const button = recipe({
  base: { /* ... */ },

  variants: {
    variant: {
      primary: {
        backgroundColor: tokens.interactive.primary.default.background,
        color: tokens.interactive.primary.default.foreground,

        // ✅ Use selectors object with & prefix
        selectors: {
          '&:hover:not(:disabled)': {
            backgroundColor: tokens.interactive.primary.hover.background,
          },

          '&:active:not(:disabled)': {
            backgroundColor: tokens.interactive.primary.active.background,
          },

          '&:focus-visible': {
            backgroundColor: tokens.interactive.primary.focus.background,
          },

          '&:disabled': {
            backgroundColor: tokens.interactive.primary.disabled.background,
            color: tokens.interactive.primary.disabled.foreground,
          },
        },
      },

      secondary: {
        // Same pattern for other variants
      },
    },

    size: {
      sm: {
        padding: tokens.spacing.sm,
        fontSize: tokens.typography.body.s.fontSize,
      },
      md: {
        padding: tokens.spacing.md,
        fontSize: tokens.typography.body.m.fontSize,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});
```

**Rule Summary:**
- `base` block → Direct pseudo-selectors (`:hover`, `:disabled`)
- `variants` block → `selectors` object with `&` prefix (`&:hover:not(:disabled)`)

**Why?** This is how Vanilla-Extract recipes work. Mixing patterns causes bugs.

---

## Component File Structure

**Required files for each component:**
```
ComponentName/
├── ComponentName.tsx         # Component logic
├── ComponentName.css.ts      # Vanilla-Extract recipes
├── ComponentName.stories.tsx # Storybook stories (all variants)
└── index.ts                  # Exports
```

**Export pattern:**
```typescript
// index.ts
export { ComponentName } from './ComponentName';
export type { ComponentNameProps } from './ComponentName';
```

**Register in main index:**
```typescript
// src/components/index.ts
export { ComponentName } from './ComponentName';
export type { ComponentNameProps } from './ComponentName';
```

---

## TypeScript Patterns

### Component Props Interface

```typescript
import { type ComponentPropsWithoutRef, forwardRef } from 'react';
import { type RecipeVariants } from '@vanilla-extract/recipes';
import * as styles from './Component.css';

// Extract variant types from recipe
type ComponentVariants = RecipeVariants<typeof styles.component>;

// Props interface - NO className, extends HTML attributes
export interface ComponentProps
  extends Omit<ComponentPropsWithoutRef<'button'>, 'className'>,
    ComponentVariants {
  children: ReactNode;
  // Only design system variants and standard HTML props
}

// Component with forwardRef
export const Component = forwardRef<HTMLButtonElement, ComponentProps>(
  ({ children, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={styles.component({ variant, size })}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Component.displayName = 'Component';
```

---

## Accessibility Requirements

**MUST implement:**
- ✅ ARIA attributes where needed (`aria-label`, `aria-checked`, `aria-disabled`)
- ✅ Keyboard navigation (`onKeyDown`, `tabIndex`)
- ✅ Focus management (`:focus-visible` styles)
- ✅ Screen reader announcements (`aria-live`, `role`)
- ✅ Semantic HTML (use `<button>` not `<div>` for clickable elements)

**Base UI helps with most of this automatically.**

---

## Storybook Stories

**Required stories for each component:**

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { Component } from './Component';

const meta: Meta<typeof Component> = {
  title: 'Components/Component',
  component: Component,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Component>;

// 1. Default story
export const Default: Story = {
  args: {
    children: 'Component',
  },
};

// 2. All variants demonstrated
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Component variant="primary">Primary</Component>
      <Component variant="secondary">Secondary</Component>
      <Component variant="danger">Danger</Component>
    </div>
  ),
};

// 3. All sizes demonstrated
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Component size="sm">Small</Component>
      <Component size="md">Medium</Component>
      <Component size="lg">Large</Component>
    </div>
  ),
};

// 4. States demonstrated
export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Component>Default</Component>
      <Component disabled>Disabled</Component>
    </div>
  ),
};

// 5. Interactive example
export const Interactive: Story = {
  args: {
    children: 'Click me',
    onClick: () => alert('Clicked!'),
  },
};
```

---

## Reference Components

Study these implementations as patterns:

1. **Checkbox** (`src/components/Checkbox/`) - Base UI integration, complex state
2. **Input** (`src/components/Input/`) - Form component pattern
3. **Toast** (`src/components/Toast/`) - Complex component with multiple sub-components

---

## When to Add Features

**Add a feature ONLY if:**
1. ✅ Explicitly defined in design system tokens (`/tokens/4-components/[component].json`)
2. ✅ Required for accessibility (ARIA attributes, keyboard navigation)
3. ✅ Standard HTML attribute (onClick, disabled, type, etc.)

**Decision flowchart:**
```
Feature requested?
├─ In design tokens? → YES → Add it
├─ Required for a11y? → YES → Add it
├─ Standard HTML attr? → YES → Add it
└─ Otherwise → NO → Don't add it
```

---

## Pre-Implementation Checklist

Before starting component implementation:

- [ ] Read this document completely
- [ ] Check `/tokens/CLAUDE.md` for token system
- [ ] Verify component tokens exist in `/tokens/4-components/[component].json`
- [ ] Research Base UI docs: `mcp__context7__resolve-library-id` + `mcp__context7__get-library-docs`
- [ ] Study reference components (Checkbox, Input, Toast)
- [ ] Understand Vanilla-Extract pseudo-selector rules (base vs variants)

---

## Pre-Completion Checklist

Before signaling completion:

- [ ] Component uses Base UI (if available)
- [ ] Styling uses Vanilla-Extract recipes
- [ ] Design tokens imported from `src/tokens/generated/`
- [ ] **NO** `className`, `style`, or `sx` props
- [ ] **NO** feature creep (loading, icons, polymorphic)
- [ ] Pseudo-selectors follow base/variants rules
- [ ] Storybook stories created for all variants
- [ ] TypeScript types properly defined with `RecipeVariants`
- [ ] Component exported from `src/components/index.ts`
- [ ] Accessibility attributes present (ARIA, keyboard nav)
- [ ] `pnpm typecheck` passes without errors
- [ ] Follows pattern from Checkbox/Input/Toast

---

## Common Mistakes to Avoid

| ❌ Wrong | ✅ Correct |
|----------|-----------|
| `className` prop exposed | Props interface omits `className` |
| Hardcoded `padding: '16px'` | `padding: tokens.spacing.md` |
| `loading` prop without design tokens | Only variants defined in tokens |
| `&:hover` in base block | `:hover` in base (no `&`) |
| `:hover` in variants block | `selectors: { '&:hover': {...} }` in variants |
| Extra wrapper `<div>` | Minimal DOM structure |
| `as` prop for polymorphism | Single semantic HTML element |
| Custom color prop | Only design system variants |

---

## Questions?

**If unsure whether to add a feature, ask:**
1. Is this in `/tokens/4-components/[component].json`?
2. Does this affect visual consistency across apps?
3. Can users work around this limitation in their app code?
4. Would this create a maintenance burden?

**When in doubt → DON'T ADD IT.**

**Escalation:** If truly needed, the feature should be added to design tokens first by @agent-designer, then implemented by @agent-developer.

---

## Philosophy Recap

This UI Kit enforces **strict design system compliance** over **developer convenience**. This trade-off is intentional:

- **Consistency** > Flexibility
- **Maintainability** > Customization
- **Predictability** > Power

Users who need custom styling should build their own components using the design tokens as primitives.

**Our components are building blocks, not LEGO bricks.**
