---
id: task-037
title: Implement Toast component with Base UI and Vanilla-Extract
status: Done
assignee:
  - '@developer'
created_date: '2025-10-03 09:43'
updated_date: '2025-10-03 16:29'
labels: []
dependencies: []
---

## Description

Implement Toast component with Base UI and Vanilla-Extract styling. Component tokens have already been generated and are ready to use.

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Verify component tokens are generated correctly (`src/tokens/generated/components/toast.generated.css.ts`)
- [ ] #2 Create Toast component using @base-ui-components/react Toast
- [ ] #3 Implement styles using Vanilla-Extract recipes, importing generated tokens
- [ ] #4 Use `toastBaseStyles` and `toastVariants` from generated tokens
- [ ] #5 Merge generated tokens with component-specific CSS implementation (display, position, etc.)
- [ ] #6 Map toast tokens to component styles (default, success, error, warning variants)
- [ ] #7 Support positioning (top/bottom, left/right/center)
- [ ] #8 Support auto-dismiss with configurable duration
- [ ] #9 Create Storybook stories with all variants
- [ ] #10 Ensure accessibility (ARIA live regions, announcements)
- [ ] #11 Export component from components/index.ts
- [ ] #12 Add TypeScript types for props
<!-- AC:END -->


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
