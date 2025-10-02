---
id: task-026
title: 'Phase 2: Restructure semantic layer to match TokenStudio format'
status: To Do
assignee: []
created_date: '2025-10-01 21:53'
updated_date: '2025-10-01 21:53'
labels: []
dependencies: []
---



## Implementation Plan

1. Analyze current semantic structure vs TokenStudio
2. Create new semantic JSON files with TokenStudio structure:
   - background (top-level, not color.background)
   - foreground with on-{variant} naming
   - border-color (not border)
   - composite typography tokens
3. Update light.json theme to map to new semantic
4. Update dark.json theme (create if missing)
5. Update theme.css.ts contract to match new structure
6. Update all component token references
7. Regenerate all tokens with style-dictionary
8. Test all components with new token structure
9. Update documentation

Note: This is Phase 2 of TokenStudio migration - BREAKING CHANGES
