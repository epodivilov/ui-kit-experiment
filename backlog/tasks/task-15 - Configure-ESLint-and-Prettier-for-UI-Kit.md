---
id: task-15
title: Configure ESLint and Prettier for UI Kit
status: Done
assignee:
  - '@developer'
created_date: '2025-09-24 17:02'
updated_date: '2025-09-25 12:39'
labels:
  - configuration
  - eslint
  - prettier
  - code-quality
dependencies: []
---

## Description

Update ESLint and create Prettier configuration optimized for UI Kit development. This includes rules for React, TypeScript, accessibility, and code formatting standards.

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 ESLint rules updated for library development,React and TypeScript ESLint rules configured,Accessibility linting rules added,Import/export linting rules configured,Prettier configuration created with UI Kit standards,ESLint and Prettier integration working,Code formatting consistent across all files,Linting passes on existing code
<!-- AC:END -->


## Implementation Plan

1. Analyze current ESLint configuration
2. Update ESLint rules for library development
3. Configure React and TypeScript specific rules
4. Add accessibility linting rules (eslint-plugin-jsx-a11y)
5. Configure import/export linting rules
6. Create Prettier configuration for UI Kit standards
7. Integrate ESLint with Prettier (resolve conflicts)
8. Update package.json scripts for linting and formatting
9. Test linting on existing code and fix issues
10. Verify ESLint and Prettier work together properly

## Implementation Notes



--- 2025-09-25 13:39:00 ---

Успешно настроены ESLint и Prettier для UI Kit разработки:

**ESLint конфигурация (eslint.config.js):**
✅ Современный flat config format (ESLint 9.x)
✅ TypeScript правила с @typescript-eslint/parser и plugin
✅ React правила (react-hooks, react-refresh)
✅ Accessibility правила (eslint-plugin-jsx-a11y):
  - Все основные a11y проверки включены
  - aria-*, role, label, keyboard events проверки
✅ Import/Export правила (eslint-plugin-import):
  - Сортировка импортов по группам
  - Предпочтение named exports для библиотек
  - Предотвращение дублирования импортов

**Специальные правила для библиотеки:**
✅ no-restricted-globals для window/document (предупреждения)
✅ Библиотечно-ориентированные правила (prefer named exports)
✅ Type-only imports для оптимизации

**Контекстно-зависимые правила:**
✅ Storybook файлы - разрешены default exports и console.log
✅ Test файлы - менее строгие правила, разрешен any
✅ Config файлы - поддержка Node.js globals

**Prettier конфигурация (.prettierrc):**
✅ Single quotes, semicolons, trailing commas (es5)
✅ 100 char line width для читаемости
✅ 2 spaces indentation
✅ LF line endings для кросс-платформенности
✅ .prettierignore для исключения build/dist папок

**Интеграция ESLint + Prettier:**
✅ eslint-config-prettier предотвращает конфликты форматирования
✅ Автоисправление через lint:fix script
✅ format и format:check scripts в package.json

**Package.json scripts обновлены:**
✅ lint:fix - автоисправление ESLint ошибок
✅ format - форматирование через Prettier
✅ format:check - проверка форматирования

**Результат проверки:**
✅ ESLint проходит с 0 errors, 2 warnings (только в dev файлах)
✅ Prettier форматирование консистентно по всем файлам
✅ Accessibility rules активны для всех React компонентов
✅ Import ordering и organization настроены

Код-качество инструменты готовы для профессиональной разработки UI Kit.
