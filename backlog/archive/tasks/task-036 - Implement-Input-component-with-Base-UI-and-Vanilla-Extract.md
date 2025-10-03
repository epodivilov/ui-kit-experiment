---
id: task-036
title: Implement Input component with Base UI and Vanilla-Extract
status: Done
assignee:
  - '@developer'
created_date: '2025-10-03 09:43'
updated_date: '2025-10-03 14:44'
labels: []
dependencies: []
---

## Description

Implement Input component with Base UI and Vanilla-Extract styling. Component tokens have already been generated and are ready to use.

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Verify component tokens are generated correctly (`src/tokens/generated/components/input.generated.css.ts`)
- [ ] #2 Create Input component using @base-ui-components/react Input/TextField
- [ ] #3 Implement styles using Vanilla-Extract recipes, importing generated tokens
- [ ] #4 Use `inputBaseStyles` and `inputVariants` from generated tokens
- [ ] #5 Merge generated tokens with component-specific CSS implementation (display, cursor, etc.)
- [ ] #6 Support all states: default, hover, focus, disabled
- [ ] #7 Handle placeholder and disabled text colors
- [ ] #8 Create Storybook stories with all variants and states
- [ ] #9 Ensure accessibility (ARIA, labels, error messages)
- [ ] #10 Export component from components/index.ts
- [ ] #11 Add TypeScript types for props
<!-- AC:END -->


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
