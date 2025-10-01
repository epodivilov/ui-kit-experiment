---
id: task-high.01
title: Analyze and fix token system to match TokenStudio format
status: Done
assignee:
  - '@developer'
created_date: '2025-09-30 20:22'
updated_date: '2025-10-01 14:38'
labels: []
dependencies: []
parent_task_id: task-high
---

## Description

Current token system doesn't match TokenStudio export format. Review temp/example/* files showing TokenStudio structure and align our tokens:
1. Primitives use 'sizing' instead of 'size', include 'base' value
2. Shadow format is object/array with x/y/blur/spread/color properties
3. Typography types: fontFamilies, fontSizes, fontWeights, lineHeights
4. Semantic layer structure differs (background/foreground/border-color)
5. Components reference semantic tokens only (current issue: components use primitives directly)
## Implementation Plan

1. Analyze key differences between current format and TokenStudio:
- Primitives: missing 'type' field, 'size' vs 'sizing', no base + math expressions, shadow structure
- Typography: missing proper type fields (fontFamilies, fontSizes, fontWeights, lineHeights)
- Semantic: structure mismatch (our color.background vs TokenStudio background+foreground+border-color)
2. Document migration strategy for each layer
3. Update token JSON files to match TokenStudio format
4. Update style-dictionary config to handle new structure


## Implementation Notes

Completed primitives migration to TokenStudio format:
- Added type fields to all tokens (color, fontFamilies, fontSizes, etc)
- Renamed size→sizing with base+math expressions
- Restructured shadow to object/array format
- Updated border-radius to reference sizing
- Updated theme files with sizing references
- Created TOKEN_MIGRATION_ANALYSIS.md
- Committed changes (8a3b078)

Known issues requiring style-dictionary transforms:
- Math expressions output as strings ('4px * 2' instead of '8px')
- Shadow objects need CSS string conversion
These will be fixed in task-high.02
