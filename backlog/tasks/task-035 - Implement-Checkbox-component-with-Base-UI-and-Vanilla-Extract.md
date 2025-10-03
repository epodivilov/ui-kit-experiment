---
id: task-035
title: Implement Checkbox component with Base UI and Vanilla-Extract
status: To Do
assignee:
  - '@developer'
created_date: '2025-10-03 09:43'
labels: []
dependencies: []
---

## Description


## Acceptance Criteria
- [ ] Create Checkbox component using @base-ui-components/react Checkbox
- [ ] Implement styles using Vanilla-Extract recipes
- [ ] Map checkbox tokens to component styles (default and error variants)
- [ ] Support all states: default, hover, checked, checked-hover, focus, disabled
- [ ] Create Storybook stories with all variants and states
- [ ] Ensure accessibility (ARIA, keyboard navigation)
- [ ] Export component from components/index.ts
- [ ] Add TypeScript types for props

## Technical Details
- Tokens location: tokens/4-components/checkbox.json
- Variants: default, error
- States: default, hover, checked, checked-hover, focus, disabled
- Size: use semantic.sizing.md
- Border radius: semantic.border-radius.sm

## Reference
Follow Button component implementation pattern in src/components/Button/
