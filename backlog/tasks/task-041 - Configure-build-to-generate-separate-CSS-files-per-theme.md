---
id: task-041
title: Configure build to generate separate CSS files per theme
status: To Do
assignee: []
created_date: '2025-10-06 09:59'
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
