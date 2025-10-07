---
id: task-036
title: Create script to generate branch index page
status: Done
assignee:
  - '@agent-developer'
created_date: '2025-10-06 08:48'
updated_date: '2025-10-07 08:40'
labels:
  - deployment
  - scripting
dependencies: []
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Write Node.js script that generates index.html with list of all deployed branches. This provides a landing page where users can discover and navigate to Storybook builds for all active branches.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Script reads all folders in gh-pages branch,Generates HTML page with links to each branch's Storybook,Includes branch name and last updated timestamp,Styled for basic readability,Located in scripts/generate-branch-index.js
- [ ] #2 Script reads all folders in gh-pages branch,Generates HTML page with links to each branch's Storybook,Includes branch name and last updated timestamp,Styled for basic readability,Located in scripts/generate-branch-index.js
<!-- AC:END -->
