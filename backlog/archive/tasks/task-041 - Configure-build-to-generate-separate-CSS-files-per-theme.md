---
id: task-041
title: Configure build to generate separate CSS files per theme
status: Done
assignee:
  - '@agent-developer'
created_date: '2025-10-06 09:59'
updated_date: '2025-10-06 20:25'
labels:
  - build
  - configuration
  - theme
dependencies: []
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Update the Vite build configuration to generate separate CSS files for each theme (light.css and dark.css) in the dist/themes/ directory. The main ui-kit.css should contain only base component styles without theme-specific styles. All theme tokens must be compiled into their respective CSS files to eliminate the need for consumers to install Vanilla-Extract plugins.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Vite config updated to generate separate CSS output files per theme,light.css file is generated in dist/themes/ containing all light theme tokens,dark.css file is generated in dist/themes/ containing all dark theme tokens,Main ui-kit.css contains only base component styles (no theme-specific styles),All theme tokens from style-dictionary are properly compiled into CSS files,Build process completes successfully with all CSS files generated,Generated CSS files are properly tree-shaken and optimized
<!-- AC:END -->

## Implementation Notes

<!-- SECTION:NOTES:BEGIN -->
Successfully implemented separate CSS generation for themes. Created light.ts and dark.ts theme files that import respective CSS from tokens/generated/. Updated tsup.config.ts to build themes as separate entries with tree-shaking and code splitting enabled. Build now generates dist/themes/light.css and dist/themes/dark.css with all theme-specific design tokens properly compiled.
<!-- SECTION:NOTES:END -->
