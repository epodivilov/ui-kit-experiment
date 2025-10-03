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


## Acceptance Criteria
- [ ] Create Input component using @base-ui-components/react Input/TextField
- [ ] Implement styles using Vanilla-Extract recipes
- [ ] Map input tokens to component styles (default and error variants)
- [ ] Support all states: default, hover, focus, disabled
- [ ] Handle placeholder and disabled text colors
- [ ] Create Storybook stories with all variants and states
- [ ] Ensure accessibility (ARIA, labels, error messages)
- [ ] Export component from components/index.ts
- [ ] Add TypeScript types for props

## Technical Details
- Tokens location: tokens/4-components/input.json
- Variants: default, error
- States: default, hover, focus, disabled
- Typography: semantic.typography.body-m
- Border radius: semantic.border-radius.md
- Padding: inline (md), block (sm)

## Reference
Follow Button component implementation pattern in src/components/Button/
