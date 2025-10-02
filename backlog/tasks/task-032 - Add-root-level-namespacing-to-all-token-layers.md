# Task 32: Add Root-Level Namespacing to All Token Layers

**Status:** To Do  
**Priority:** High  
**Type:** Bug Fix / Refactoring  
**Assignee:** Developer

## Description

Add required root-level namespace fields to all token layers according to the updated token system architecture. This ensures clear token origin identification in components.

## Problem

Current token structure lacks root-level namespacing:
- Layer 1 (Core): Tokens start directly with `color`, `size`, etc.
- Layer 2 (Semantic): Tokens start directly with `background`, `interactive`, etc.
- Layer 3 (Themes): Tokens start directly with semantic token names

This causes ambiguity - components can't clearly identify token origin.

## Solution

Wrap all tokens in appropriate root-level namespace:

### Layer 1 (Core) - All files in `tokens/1-core/`
Root field: `"core"`

**Example:** `tokens/1-core/colors.json`
```json
{
  "core": {
    "color": {
      "blue": {
        "600": {
          "value": "#2563eb",
          "type": "color"
        }
      }
    }
  }
}
```

Apply to:
- `tokens/1-core/colors.json`
- `tokens/1-core/dimensions.json`
- `tokens/1-core/typography.json`
- `tokens/1-core/opacity.json`

### Layer 2 (Semantic) - `tokens/2-semantic/contract.json`
Root field: `"semantic"`

**Example:**
```json
{
  "semantic": {
    "background": {
      "default": {
        "value": "{DO-NOT-USE}",
        "type": "color"
      }
    }
  }
}
```

### Layer 3 (Themes) - All theme files
Root field: `"semantic"` (themes implement semantic contract)

**Example:** `tokens/3-themes/base.json`, `tokens/3-themes/light/theme.json`, `tokens/3-themes/dark/theme.json`
```json
{
  "semantic": {
    "typography": {
      "heading-xl": {
        "value": {
          "font-family": "{core.font-family.sans}",
          "font-weight": "{core.font-weight.400}",
          "font-size": "{core.font-size.900}",
          "line-height": "{core.line-height.100}"
        },
        "type": "typography"
      }
    }
  }
}
```

### Layer 4 (Components) - Update references
Component tokens must reference with full path: `{semantic.token.path}`

**Example:** `tokens/4-components/button.json`
```json
{
  "button": {
    "primary": {
      "background-color": {
        "default": {
          "value": "{semantic.interactive.primary.default.background}",
          "type": "color"
        }
      }
    },
    "global": {
      "border-radius": {
        "value": "{semantic.border-radius.md}",
        "type": "borderRadius"
      }
    }
  }
}
```

## Acceptance Criteria

- [ ] All core tokens wrapped in `"core"` root field
- [ ] Semantic contract wrapped in `"semantic"` root field
- [ ] All theme files wrapped in `"semantic"` root field
- [ ] Theme files reference core tokens with `{core.*}` syntax
- [ ] Component files reference semantic tokens with `{semantic.*}` syntax
- [ ] `$themes.json` updated if needed
- [ ] Token build completes successfully: `pnpm run tokens:build`
- [ ] Generated files contain correct namespace prefixes
- [ ] No broken references in build output

## Files to Modify

### Core Layer (4 files)
- `tokens/1-core/colors.json`
- `tokens/1-core/dimensions.json`
- `tokens/1-core/typography.json`
- `tokens/1-core/opacity.json`

### Semantic Layer (1 file)
- `tokens/2-semantic/contract.json`

### Theme Layer (3 files)
- `tokens/3-themes/base.json`
- `tokens/3-themes/light/theme.json`
- `tokens/3-themes/dark/theme.json`

### Component Layer (4 files)
- `tokens/4-components/button.json`
- `tokens/4-components/checkbox.json`
- `tokens/4-components/input.json`
- `tokens/4-components/toast.json`

### Configuration (if needed)
- `tokens/$themes.json`

## Testing

1. Build tokens: `pnpm run tokens:build`
2. Verify no broken references
3. Check generated contract has `semantic` namespace
4. Check generated themes reference tokens correctly
5. Verify TypeScript types are correct

## Dependencies

- None

## Notes

- This is a breaking change for token structure
- All token references must be updated to include namespace prefixes
- Follow updated `/tokens/CLAUDE.md` documentation
- Namespace provides clarity: `semantic.radius.md` vs ambiguous `radius.md`

## Related Tasks

- Task 33: Complete Interactive State Definitions
