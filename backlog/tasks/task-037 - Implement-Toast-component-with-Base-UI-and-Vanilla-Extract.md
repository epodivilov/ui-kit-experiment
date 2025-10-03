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


## Acceptance Criteria
- [ ] Create Toast component using @base-ui-components/react Toast
- [ ] Implement styles using Vanilla-Extract recipes
- [ ] Map toast tokens to component styles (default, success, error, warning variants)
- [ ] Support positioning (top/bottom, left/right/center)
- [ ] Support auto-dismiss with configurable duration
- [ ] Create Storybook stories with all variants
- [ ] Ensure accessibility (ARIA live regions, announcements)
- [ ] Export component from components/index.ts
- [ ] Add TypeScript types for props

## Technical Details
- Tokens location: tokens/4-components/toast.json
- Variants: default, success, error, warning
- Border radius: semantic.border-radius.lg
- Padding: inline (md), block (sm)
- Typography: semantic.typography.body-s
- Width: min ({core.size.80}), max ({core.size.120})

## Reference
Follow Button component implementation pattern in src/components/Button/
Toast requires ToastProvider wrapper in application root
