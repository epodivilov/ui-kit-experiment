# Task 34: Ensure kebab-case Naming in All Tokens

**Status:** To Do  
**Priority:** Medium  
**Type:** Bug Fix / Refactoring  
**Assignee:** Developer

## Description

Audit all token files and ensure 100% compliance with kebab-case naming convention. Convert any camelCase names to kebab-case.

## Problem

Inconsistent naming convention across token files:
- Some tokens use camelCase (e.g., `fontFamily`, `borderRadius`)
- Some use kebab-case (e.g., `font-family`, `border-radius`)
- This causes confusion and potential TypeScript errors

## Solution

**ALWAYS use kebab-case** for all token names at all levels:

### Correct (kebab-case)
```json
{
  "font-family": { ... },
  "font-size": { ... },
  "font-weight": { ... },
  "line-height": { ... },
  "border-radius": { ... },
  "border-width": { ... },
  "on-interactive": { ... },
  "background-color": { ... }
}
```

### Incorrect (camelCase)
```json
{
  "fontFamily": { ... },
  "fontSize": { ... },
  "fontWeight": { ... },
  "lineHeight": { ... },
  "borderRadius": { ... },
  "borderWidth": { ... },
  "onInteractive": { ... },
  "backgroundColor": { ... }
}
```

## Common Conversions Needed

| camelCase | kebab-case |
|-----------|------------|
| `fontFamily` | `font-family` |
| `fontSize` | `font-size` |
| `fontWeight` | `font-weight` |
| `lineHeight` | `line-height` |
| `borderRadius` | `border-radius` |
| `borderWidth` | `border-width` |
| `backgroundColor` | `background-color` |
| `foregroundColor` | `foreground-color` |
| `paddingInline` | `padding-inline` |
| `paddingBlock` | `padding-block` |
| `onInteractive` | `on-interactive` |
| `onDanger` | `on-danger` |
| `onSuccess` | `on-success` |
| `onWarning` | `on-warning` |

## Acceptance Criteria

### All Layers Compliant
- [ ] Layer 1 (Core): All tokens use kebab-case
- [ ] Layer 2 (Semantic): All tokens use kebab-case
- [ ] Layer 3 (Themes): All tokens use kebab-case
- [ ] Layer 4 (Components): All tokens use kebab-case

### Specific Files Audited
- [ ] `tokens/1-core/typography.json` - check `font-*`, `line-height`
- [ ] `tokens/1-core/dimensions.json` - check `border-*`
- [ ] `tokens/2-semantic/contract.json` - check all multi-word tokens
- [ ] `tokens/3-themes/base.json` - check typography compositions
- [ ] `tokens/3-themes/light/theme.json` - check all token names
- [ ] `tokens/3-themes/dark/theme.json` - check all token names
- [ ] All component files - check multi-word properties

### Token References Updated
- [ ] All token references updated to kebab-case (e.g., `{core.font-family.sans}`)
- [ ] No broken references due to naming changes
- [ ] Token build succeeds

### Generated Files Correct
- [ ] `contract.css.ts` has kebab-case keys in quotes
- [ ] `types.ts` has kebab-case keys in quotes (e.g., `'on-interactive'`)
- [ ] Theme files have kebab-case keys

## Files to Audit & Modify

### High Priority (Known Issues)
- `tokens/1-core/typography.json`
- `tokens/1-core/dimensions.json`
- `tokens/2-semantic/contract.json`

### Medium Priority
- `tokens/3-themes/base.json`
- `tokens/3-themes/light/theme.json`
- `tokens/3-themes/dark/theme.json`

### Low Priority (Verify Compliance)
- `tokens/1-core/colors.json`
- `tokens/1-core/opacity.json`
- All files in `tokens/4-components/`

## Examples of Correct kebab-case Structure

### Typography
```json
{
  "core": {
    "font-family": {
      "sans": { "value": "Inter, sans-serif", "type": "fontFamilies" }
    },
    "font-size": {
      "400": { "value": "1rem", "type": "fontSizes" }
    },
    "font-weight": {
      "400": { "value": "700", "type": "fontWeights" }
    },
    "line-height": {
      "100": { "value": "120%", "type": "lineHeights" }
    }
  }
}
```

### Dimensions
```json
{
  "core": {
    "border-radius": {
      "4": { "value": "0.5rem", "type": "borderRadius" }
    },
    "border-width": {
      "1": { "value": "1px", "type": "borderWidth" }
    }
  }
}
```

### Semantic
```json
{
  "semantic": {
    "foreground": {
      "on-interactive": { "value": "{DO-NOT-USE}", "type": "color" },
      "on-danger": { "value": "{DO-NOT-USE}", "type": "color" }
    }
  }
}
```

### Components
```json
{
  "button": {
    "global": {
      "border-radius": { "value": "{semantic.border-radius.md}", "type": "borderRadius" },
      "padding-inline": { "value": "{semantic.spacing.md}", "type": "spacing" },
      "padding-block": { "value": "{semantic.spacing.sm}", "type": "spacing" }
    }
  }
}
```

## Testing

1. Run find to detect camelCase:
   ```bash
   grep -r "fontFamily\|fontSize\|fontWeight\|lineHeight\|borderRadius\|borderWidth\|backgroundColor\|onInteractive" tokens/
   ```

2. Build tokens: `pnpm run tokens:build`

3. Check generated files for proper quoting:
   ```bash
   grep "'on-interactive'\|'font-family'\|'border-radius'" src/tokens/generated/types.ts
   ```

4. Verify no broken references in build output

## Dependencies

- Can be done independently or alongside Task 32

## Notes

- kebab-case is standard in CSS and CSS-in-JS
- TypeScript requires quotes for keys with hyphens: `'on-interactive': string`
- Our formatter automatically adds quotes for kebab-case keys
- Consistency improves maintainability and prevents errors

## Related Tasks

- Task 32: Add Root-Level Namespacing
- Task 33: Complete Interactive State Definitions
