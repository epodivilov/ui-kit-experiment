---
id: task-critical.01
title: 'Fix component tokens: remove primitive references'
status: Done
assignee:
  - '@developer'
created_date: '2025-09-30 20:23'
updated_date: '2025-10-01 14:13'
labels: []
dependencies: []
parent_task_id: task-critical
---

## Description

Component tokens MUST reference semantic tokens only, never primitives. Current violations:
1. Button-new.css.ts: uses primitives.typography directly
2. Input-new.css.ts: uses primitives.typography directly  
3. Toast-new.css.ts: uses primitives.typography directly
4. Checkbox-new.css.ts: uses primitives tokens directly

All component files must use semantic tokens (e.g., semantic.typography.body.md) or their resolved values, not primitives.

## Implementation Notes

Fixed all primitive references in token-driven components (Button-new, Input-new, Toast-new, Checkbox-new). Removed unused imports (primitiveTokens, themeVars). Fixed TypeScript errors by moving pseudo-selectors to selectors object. Fixed ESLint import order and arrow-body-style issues. All components now use only component tokens from generated/js/components.ts. Committed with git.
