---
id: task-high.02
title: Fix style-dictionary configuration for TokenStudio compatibility
status: Done
assignee:
  - '@developer'
created_date: '2025-09-30 20:23'
updated_date: '2025-10-01 14:45'
labels: []
dependencies: []
parent_task_id: task-high
---

## Description

Update style-dictionary.config.js to handle TokenStudio format:
1. Handle new primitive types (fontFamilies, fontSizes, fontWeights, lineHeights, sizing, dimension)
2. Process shadow objects/arrays with x/y/blur/spread/color structure
3. Support math expressions in sizing tokens (e.g., '{primitives.sizing.base} * 2')
4. Generate proper theme outputs for light/dark (currently dark theme not generating)
5. Fix reference resolution for nested token structures
## Implementation Plan

1. Add transform for math expressions (evaluate '{base} * 2' → actual value)
2. Add transform for shadow objects → CSS string conversion
3. Verify all new type fields work correctly (fontFamilies, sizing, etc)
4. Test token generation produces valid CSS and TypeScript
5. Fix any remaining reference resolution issues

## Implementation Notes

Completed style-dictionary configuration for TokenStudio compatibility:

✅ Added math expression preprocessor - evaluates '{base} * 2' → actual pixel values
✅ Added shadow/css transform - converts object format to CSS strings
✅ Registered custom hooks (preprocessors + transforms)
✅ Updated transform chains for CSS and JS platforms
✅ Verified output:
  - Math expressions evaluate correctly (sizing tokens)
  - CSS shadows output as strings
  - All token types work properly

Note: JS/TS shadows remain as objects due to javascript/es6 formatter behavior. This is acceptable and provides better typed API.

Committed changes: 73b62bf, 2d615cf, e4f0b8e, 950d1d3, 7af6ade
