---
id: task-13
title: Configure Vite for library build
status: Done
assignee:
  - '@developer'
created_date: '2025-09-24 17:01'
updated_date: '2025-09-25 09:52'
labels:
  - configuration
  - vite
  - build
dependencies: []
---

## Description

Update Vite configuration to build the UI Kit as a library with proper entry points, externals, and build optimizations. This includes configuring for tree-shaking, multiple output formats, and Vanilla-Extract integration.

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 Vite configured in library mode with proper entry point,External dependencies configured (React, React-DOM as externals),Multiple output formats configured (ESM, CJS),Vanilla-Extract Vite plugin integrated,Build generates proper library bundles,Tree-shaking support verified,Source maps generated for debugging,Build output is optimized for production
<!-- AC:END -->


## Implementation Plan

1. Analyze current vite.config.ts structure
2. Configure Vite in library mode with proper entry points
3. Set up externals for peer dependencies (React, React-DOM)
4. Configure multiple output formats (ESM, CJS)
5. Ensure Vanilla-Extract plugin is properly integrated
6. Add build optimizations and source maps
7. Configure for tree-shaking support
8. Test build outputs and verify formats
9. Ensure build scripts work correctly

## Implementation Notes



--- 2025-09-25 10:52:28 ---

Успешно настроен Vite для сборки UI Kit библиотеки:

**Библиотечный режим:**
✅ Настроен library mode с двумя entry points:
  - src/index.ts (основной экспорт компонентов)
  - src/styles/index.ts (стили и темы)
✅ Формат сборки: ESM (.js) и CJS (.cjs)
✅ Имя библиотеки: 'UIKit'

**Externals и зависимости:**
✅ React, React-DOM, react/jsx-runtime вынесены как external
✅ Настроены globals для UMD (на будущее)
✅ Peer dependencies правильно исключены из сборки

**Vanilla-Extract интеграция:**
✅ vanillaExtractPlugin настроен
✅ debug identifiers для development
✅ short identifiers для production

**Оптимизации сборки:**
✅ Source maps включены для отладки
✅ Минификация через esbuild
✅ Target: es2020 для современных браузеров
✅ Tree-shaking поддержка через preserveModules: false

**TypeScript configuration:**
✅ Создан tsconfig.build.json для отдельной сборки типов
✅ Declaration files генерируются в dist/
✅ Declaration source maps включены
✅ Исключены dev файлы (stories, tests, App.tsx)

**Алиасы и структура:**
✅ Path aliases: @, @/components, @/styles, @/tokens, @/utils
✅ Создана базовая структура src/ папок
✅ Placeholder файлы для будущих компонентов

**Результат сборки:**
✅ Генерируются: index.js, index.cjs, styles.js, styles.cjs
✅ TypeScript declarations для всех модулей
✅ Source maps для всех выходов
✅ Размер пакетов оптимизирован (< 1KB для базовых exports)

Конфигурация готова для добавления реальных компонентов.
