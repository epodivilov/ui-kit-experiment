---
id: task-036
title: Implement Input component with Base UI and Vanilla-Extract
status: To Do
assignee:
  - '@developer'
created_date: '2025-10-03 09:43'
labels: []
dependencies: []
---

## Description
Implement Input component with Base UI and Vanilla-Extract styling. Component tokens have already been generated and are ready to use.

## Acceptance Criteria
- [ ] Verify component tokens are generated correctly (`src/tokens/generated/components/input.generated.css.ts`)
- [ ] Create Input component using @base-ui-components/react Input/TextField
- [ ] Implement styles using Vanilla-Extract recipes, importing generated tokens
- [ ] Use `inputBaseStyles` and `inputVariants` from generated tokens
- [ ] Merge generated tokens with component-specific CSS implementation (display, cursor, etc.)
- [ ] Support all states: default, hover, focus, disabled
- [ ] Handle placeholder and disabled text colors
- [ ] Create Storybook stories with all variants and states
- [ ] Ensure accessibility (ARIA, labels, error messages)
- [ ] Export component from components/index.ts
- [ ] Add TypeScript types for props

## Technical Details
- **Component tokens**: `tokens/4-components/input.json` (already using base/variants structure)
- **Generated styles**: `src/tokens/generated/components/input.generated.css.ts`
- **Variants**: default, error
- **States**: default, hover, focus, disabled
- **Typography**: semantic.typography.body-m
- **Border radius**: semantic.border-radius.md
- **Padding**: inline (md), block (sm)

## Implementation Pattern
```typescript
import { inputBaseStyles, inputVariants } from '../../tokens/generated/components/input.generated.css';

export const input = recipe({
  base: {
    all: 'unset',              // CSS reset
    display: 'inline-flex',    // CSS implementation
    boxSizing: 'border-box',   // CSS implementation
    ...inputBaseStyles,        // From generated tokens
  },
  variants: inputVariants,     // From generated tokens
});
```

## Reference
Follow Checkbox component implementation pattern in `src/components/Checkbox/`
