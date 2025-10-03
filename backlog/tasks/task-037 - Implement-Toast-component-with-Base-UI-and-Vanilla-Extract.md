---
id: task-037
title: Implement Toast component with Base UI and Vanilla-Extract
status: To Do
assignee:
  - '@developer'
created_date: '2025-10-03 09:43'
labels: []
dependencies: []
---

## Description
Implement Toast component with Base UI and Vanilla-Extract styling. Component tokens have already been generated and are ready to use.

## Acceptance Criteria
- [ ] Verify component tokens are generated correctly (`src/tokens/generated/components/toast.generated.css.ts`)
- [ ] Create Toast component using @base-ui-components/react Toast
- [ ] Implement styles using Vanilla-Extract recipes, importing generated tokens
- [ ] Use `toastBaseStyles` and `toastVariants` from generated tokens
- [ ] Merge generated tokens with component-specific CSS implementation (display, position, etc.)
- [ ] Map toast tokens to component styles (default, success, error, warning variants)
- [ ] Support positioning (top/bottom, left/right/center)
- [ ] Support auto-dismiss with configurable duration
- [ ] Create Storybook stories with all variants
- [ ] Ensure accessibility (ARIA live regions, announcements)
- [ ] Export component from components/index.ts
- [ ] Add TypeScript types for props

## Technical Details
- **Component tokens**: `tokens/4-components/toast.json` (already using base/variants structure)
- **Generated styles**: `src/tokens/generated/components/toast.generated.css.ts`
- **Variants**: default, success, error, warning
- **Border radius**: semantic.border-radius.lg
- **Padding**: inline (md), block (sm)
- **Typography**: semantic.typography.body-s
- **Note**: Width constraints removed from tokens (were incorrectly referencing core tokens)

## Implementation Pattern
```typescript
import { toastBaseStyles, toastVariants } from '../../tokens/generated/components/toast.generated.css';

export const toast = recipe({
  base: {
    all: 'unset',              // CSS reset
    display: 'flex',           // CSS implementation
    minWidth: '320px',         // CSS implementation
    maxWidth: '480px',         // CSS implementation
    ...toastBaseStyles,        // From generated tokens
  },
  variants: toastVariants,     // From generated tokens
});
```

## Reference
Follow Checkbox component implementation pattern in `src/components/Checkbox/`
Toast requires ToastProvider wrapper in application root
