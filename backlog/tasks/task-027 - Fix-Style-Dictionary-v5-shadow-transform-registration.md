---
id: task-027
title: Fix Style Dictionary v5 shadow transform registration
status: To Do
assignee: []
created_date: '2025-10-01 21:53'
updated_date: '2025-10-01 21:53'
labels: []
dependencies: []
---



## Implementation Plan

Research Style Dictionary v5 hooks API for transform registration. Current shadow transform code exists but doesn't register properly via hooks.transforms. Options:
1. Debug SD v5 hooks API registration
2. Try alternative registration methods
3. Create custom formatter instead of transform
4. Keep current helper-based approach (acceptable)

Priority: Low (current workaround with shadowToString helper works fine)
