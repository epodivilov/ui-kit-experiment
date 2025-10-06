# Task 33: Complete Interactive State Definitions

**Status:** To Do  
**Priority:** High  
**Type:** Bug Fix  
**Assignee:** Developer

## Description

Ensure ALL interactive color tokens define ALL required states (default/hover/active/focus/disabled) across all token layers. No partial state definitions are allowed.

## Problem

Current interactive tokens have incomplete state definitions:
- Some have only `default`, `hover`, `active`
- Missing `focus` state
- Some missing `disabled` state
- Inconsistent state coverage across interactive token groups

## Required States

Every interactive token group MUST have exactly 5 states:

1. **`default`** - Default/resting state
2. **`hover`** - Mouse hover state
3. **`active`** - Active/pressed state
4. **`focus`** - Keyboard focus state
5. **`disabled`** - Disabled state

## Solution

### Layer 2: Semantic Contract (`tokens/2-semantic/contract.json`)

Ensure ALL interactive groups define all 5 states:

```json
{
  "semantic": {
    "interactive": {
      "primary": {
        "default": {
          "background": { "value": "{DO-NOT-USE}", "type": "color" },
          "foreground": { "value": "{DO-NOT-USE}", "type": "color" }
        },
        "hover": {
          "background": { "value": "{DO-NOT-USE}", "type": "color" },
          "foreground": { "value": "{DO-NOT-USE}", "type": "color" }
        },
        "active": {
          "background": { "value": "{DO-NOT-USE}", "type": "color" },
          "foreground": { "value": "{DO-NOT-USE}", "type": "color" }
        },
        "focus": {
          "background": { "value": "{DO-NOT-USE}", "type": "color" },
          "foreground": { "value": "{DO-NOT-USE}", "type": "color" }
        },
        "disabled": {
          "background": { "value": "{DO-NOT-USE}", "type": "color" },
          "foreground": { "value": "{DO-NOT-USE}", "type": "color" }
        }
      }
    }
  }
}
```

Apply to all interactive groups:
- `interactive.primary`
- `interactive.secondary`
- `interactive.danger`
- `interactive.success`
- `interactive.warning`

### Layer 3: Theme Implementations

All theme files must implement all 5 states:

**`tokens/3-themes/light/theme.json`:**
```json
{
  "semantic": {
    "interactive": {
      "primary": {
        "default": {
          "background": { "value": "{core.color.blue.600}", "type": "color" }
        },
        "hover": {
          "background": { "value": "{core.color.blue.700}", "type": "color" }
        },
        "active": {
          "background": { "value": "{core.color.blue.800}", "type": "color" }
        },
        "focus": {
          "background": { "value": "{core.color.blue.600}", "type": "color" }
        },
        "disabled": {
          "background": { "value": "{core.color.neutral.100}", "type": "color" }
        }
      }
    }
  }
}
```

**`tokens/3-themes/dark/theme.json`:**
```json
{
  "semantic": {
    "interactive": {
      "primary": {
        "default": {
          "background": { "value": "{core.color.blue.500}", "type": "color" }
        },
        "hover": {
          "background": { "value": "{core.color.blue.400}", "type": "color" }
        },
        "active": {
          "background": { "value": "{core.color.blue.300}", "type": "color" }
        },
        "focus": {
          "background": { "value": "{core.color.blue.500}", "type": "color" }
        },
        "disabled": {
          "background": { "value": "{core.color.neutral.700}", "type": "color" }
        }
      }
    }
  }
}
```

### Layer 4: Component Tokens

Component tokens must reference all 5 states within `base/variants` structure:

**`tokens/4-components/button.json`:**
```json
{
  "button": {
    "base": {
      "border-radius": { "value": "{semantic.border-radius.md}", "type": "borderRadius" }
    },
    "variants": {
      "variant": {
        "primary": {
          "background-color": {
            "default": { "value": "{semantic.interactive.primary.default.background}", "type": "color" },
            "hover": { "value": "{semantic.interactive.primary.hover.background}", "type": "color" },
            "active": { "value": "{semantic.interactive.primary.active.background}", "type": "color" },
            "focus": { "value": "{semantic.interactive.primary.focus.background}", "type": "color" },
            "disabled": { "value": "{semantic.interactive.primary.disabled.background}", "type": "color" }
          }
        }
      }
    },
    "defaultVariants": {
      "variant": "primary"
    }
  }
}
```

**Note**: All component tokens already migrated to `base/variants/defaultVariants` structure.

## Acceptance Criteria

### Semantic Contract
- [ ] `interactive.primary` has all 5 states (default/hover/active/focus/disabled)
- [ ] `interactive.secondary` has all 5 states
- [ ] `interactive.danger` has all 5 states
- [ ] `interactive.success` has all 5 states
- [ ] `interactive.warning` has all 5 states
- [ ] Each state has both `background` and `foreground` where applicable

### Theme Implementations
- [ ] `light/theme.json` implements all 5 states for all interactive groups
- [ ] `dark/theme.json` implements all 5 states for all interactive groups
- [ ] Focus state colors are defined (can be same as default or distinct)
- [ ] Disabled state colors are defined with appropriate visual distinction

### Component Tokens
- [ ] All component variants reference all 5 interactive states
- [ ] No missing state references
- [ ] Consistent state coverage across all component variants

### Build & Validation
- [ ] Token build succeeds: `pnpm run tokens:build`
- [ ] No broken references in build output
- [ ] Generated themes include all 5 states
- [ ] TypeScript types include all 5 states

## Files to Modify

- `tokens/2-semantic/contract.json`
- `tokens/3-themes/light/theme.json`
- `tokens/3-themes/dark/theme.json`
- `tokens/4-components/button.json`
- `tokens/4-components/checkbox.json`
- `tokens/4-components/input.json`
- Any other component files with interactive states

## Common Focus State Patterns

### Same as Default
```json
"focus": {
  "background": { "value": "{core.color.blue.600}", "type": "color" }
}
```

### With Focus Ring
```json
"focus": {
  "background": { "value": "{core.color.blue.600}", "type": "color" },
  "outline": { "value": "{core.color.blue.400}", "type": "color" }
}
```

### Distinct Focus Color
```json
"focus": {
  "background": { "value": "{core.color.blue.500}", "type": "color" }
}
```

## Testing

1. Build tokens: `pnpm run tokens:build`
2. Check contract.css.ts has all 5 states
3. Check light.css.ts has all 5 states implemented
4. Check dark.css.ts has all 5 states implemented
5. Verify no `undefined` states in generated files
6. Test with components to ensure all states render correctly

## Dependencies

- Should be done after Task 32 (root-level namespacing)

## Notes

- Focus state is critical for keyboard accessibility (a11y)
- Disabled state should have reduced contrast/opacity
- Active state is typically darker/lighter than hover
- Hover state should be visually distinct from default
- All states should be defined even if some have same values

## Related Tasks

- Task 32: Add Root-Level Namespacing
