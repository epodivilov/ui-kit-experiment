---
id: task-044
title: Add workflow to prepublish Storybook from main branch to gh-pages
status: Done
assignee: []
created_date: '2025-10-08 12:32'
updated_date: '2025-10-08 12:36'
labels:
  - deployment
  - github-actions
  - ci-cd
dependencies: []
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
After merge to main branch, automatically build and publish Storybook from main to gh-pages. This ensures the production/stable version of Storybook is always available at the root or main path.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Create GitHub Actions workflow that triggers on push to main branch
- [ ] #2 Workflow builds Storybook from main branch
- [ ] #3 Workflow deploys to gh-pages at root path or /main/ path
- [ ] #4 Workflow updates index page if needed
- [ ] #5 Workflow file created at .github/workflows/prepublish-storybook.yml
<!-- AC:END -->
