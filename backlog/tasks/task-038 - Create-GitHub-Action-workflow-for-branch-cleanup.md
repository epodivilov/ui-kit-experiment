---
id: task-038
title: Create GitHub Action workflow for branch cleanup
status: To Do
assignee: []
created_date: '2025-10-06 08:48'
updated_date: '2025-10-06 08:48'
labels:
  - deployment
  - github-actions
  - ci-cd
dependencies: []
---

## Description

Implement workflow that removes branch folder when PR is closed or branch deleted. This prevents the gh-pages branch from accumulating stale deployments and keeps the index page clean.

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Triggers on pull_request (closed) and delete (branch),Removes corresponding folder from gh-pages branch,Updates root index.html to remove deleted branch,Workflow file: .github/workflows/cleanup-storybook.yml
- [ ] #2 Triggers on pull_request closed and delete branch events,Removes corresponding folder from gh-pages branch,Updates root index.html to remove deleted branch,Workflow file created at .github/workflows/cleanup-storybook.yml
<!-- AC:END -->
