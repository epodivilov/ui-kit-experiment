---
id: task-029
title: Fix hardcoded values in component tokens
status: Done
assignee:
  - '@developer'
created_date: '2025-10-01 22:01'
updated_date: '2025-10-01 22:20'
labels:
  - tokens
  - components
  - refactor
dependencies: []
---

## Description

Replace hardcoded values with semantic token references in component tokens:
- checkbox.json: border-width "2px" should reference semantic border token
- input.json: border-width "1px" should reference semantic border token
- toast.json: min-width "320px" should reference semantic sizing token
- toast.json: max-width "480px" should reference semantic sizing token

All component tokens must reference semantic or primitive tokens, never contain hardcoded values.

## Implementation Notes

Added semantic tokens for border-width and sizing.container to replace hardcoded values in component tokens. Updated primitives to include necessary sizing tokens (025, 05, 075, 80, 120). Updated checkbox, input, and toast component tokens to reference semantic layer instead of hardcoded values. Fixed math preprocessor to skip non-numeric expressions like font-family.
