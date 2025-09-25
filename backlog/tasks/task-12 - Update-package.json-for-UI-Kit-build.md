---
id: task-12
title: Update package.json for UI Kit build
status: Done
assignee:
  - '@developer'
created_date: '2025-09-24 17:01'
updated_date: '2025-09-25 09:18'
labels:
  - configuration
  - package-json
  - build
dependencies: []
---

## Description

Update package.json with proper scripts, metadata, and configuration for building a UI Kit library. This includes build scripts, dev scripts, library metadata, and export configurations.

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 Package.json name and description updated for UI Kit,Library-specific scripts added (build:lib, build:types),Export fields configured for ESM and CJS compatibility,Main and module fields properly set,Files field configured to include only necessary build output,Keywords and metadata appropriate for UI Kit library,Peer dependencies properly configured,Private field removed for publishable library
<!-- AC:END -->


## Implementation Plan

1. Analyze current package.json structure
2. Update package name, version, and description for UI Kit
3. Configure library build scripts (build:lib, build:types, etc.)
4. Set up proper exports, main, and module fields
5. Configure files field for build output
6. Set up peer dependencies for React ecosystem
7. Add appropriate keywords and metadata
8. Remove private field to make publishable
9. Test that configuration is valid

## Implementation Notes



--- 2025-09-25 10:18:31 ---

Успешно обновлен package.json для UI Kit библиотеки:

**Метаданные и идентификация:**
✅ Название изменено на '@gitkraken/ui-kit'
✅ Версия установлена в '0.1.0' (готова для первого релиза)
✅ Добавлено подробное описание библиотеки
✅ Удалено поле 'private' для публикации
✅ Добавлены keywords для поиска в npm
✅ Настроены repository, bugs, homepage ссылки

**Экспорты и совместимость:**
✅ Настроены exports для ESM/CJS совместимости
✅ Main/module поля указывают на dist/index.js
✅ Types поля настроены для TypeScript
✅ Дополнительный экспорт './styles' для стилей

**Скрипты сборки:**
✅ build:lib - сборка библиотеки через Vite
✅ build:types - генерация TypeScript деклараций
✅ build - полный пайплайн сборки
✅ clean - очистка dist папки
✅ format/lint скрипты для качества кода
✅ tokens:build - сборка design tokens

**Зависимости:**
✅ React/React-DOM перенесены в peerDependencies (>=18.0.0)
✅ Основные зависимости: Base UI, Vanilla-Extract
✅ Dev dependencies: все инструменты разработки

**Files конфигурация:**
✅ Только dist/, README.md, LICENSE в пакете

Пакет готов для настройки сборки в Vite и TypeScript.
