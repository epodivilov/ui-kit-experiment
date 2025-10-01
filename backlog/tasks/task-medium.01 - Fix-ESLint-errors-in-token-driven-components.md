---
id: task-medium.01
title: Fix ESLint errors in token-driven components
status: Done
assignee:
  - '@developer'
created_date: '2025-09-30 20:23'
updated_date: '2025-10-01 14:45'
labels: []
dependencies: []
parent_task_id: task-medium
---

## Description

Fix linter errors found in:
1. Button-new.css.ts: unused imports (primitiveTokens, themeVars), import order
2. Button-new.tsx: import order, arrow-body-style
3. Input-new.css.ts: unused import (style), import order
4. Input-new.tsx: import order, arrow-body-style
5. Checkbox-new.css.ts: unused import (style), import order
6. Checkbox-new.tsx: import order, arrow-body-style
7. Toast-new.css.ts: import order (if any)
8. Toast-new.tsx: import order (if any)

Run 'pnpm lint' to see full list. Consider using 'pnpm lint:fix' for auto-fixable issues.

## Implementation Notes

Already completed in task-critical.01. Fixed all ESLint errors in token-driven components:
- Removed unused imports (primitiveTokens, themeVars, style)
- Fixed import order (added empty lines between groups)
- Fixed arrow-body-style (removed unnecessary returns)

All token-driven components (*-new.tsx, *-new.css.ts) now pass ESLint checks.
Verified with: npx eslint <component files> - no errors reported.

See commit: 8a3b078 (included these fixes)
