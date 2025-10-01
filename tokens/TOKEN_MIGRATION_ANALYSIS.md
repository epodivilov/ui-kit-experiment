# Token System Migration Analysis: Current → TokenStudio Format

## Executive Summary

Our current token system needs to be migrated to TokenStudio-compatible format. This document outlines all differences and provides a migration strategy.

## 1. Primitives Layer Differences

### 1.1 Missing `type` Field
**Current:**
```json
{
  "primitives": {
    "color": {
      "neutral": {
        "50": { "value": "#FAFAFA" }
      }
    }
  }
}
```

**TokenStudio:**
```json
{
  "primitives": {
    "color": {
      "neutral": {
        "50": {
          "value": "#FAFAFA",
          "type": "color"
        }
      }
    }
  }
}
```

**Action:** Add `"type"` field to all primitive tokens.

### 1.2 Size → Sizing with Base + Math

**Current:**
```json
{
  "primitives": {
    "size": {
      "1": { "value": "4px" },
      "2": { "value": "8px" }
    }
  }
}
```

**TokenStudio:**
```json
{
  "primitives": {
    "sizing": {
      "base": { "value": "4px", "type": "sizing" },
      "1": { "value": "{primitives.sizing.base}", "type": "sizing" },
      "2": { "value": "{primitives.sizing.base} * 2", "type": "sizing" }
    }
  }
}
```

**Action:**
- Rename `size` → `sizing`
- Add `base` token
- Use math expressions referencing base

### 1.3 Typography Type Fields

**Current:**
```json
{
  "primitives": {
    "typography": {
      "font-family": {
        "sans": { "value": "Inter, sans-serif" }
      },
      "font-size": {
        "100": { "value": "12px" }
      }
    }
  }
}
```

**TokenStudio:**
```json
{
  "primitives": {
    "typography": {
      "font-family": {
        "sans": {
          "value": "Inter, sans-serif",
          "type": "fontFamilies"
        }
      },
      "font-size": {
        "100": {
          "value": "12px",
          "type": "fontSizes"
        }
      },
      "font-weight": {
        "regular": {
          "value": "400",
          "type": "fontWeights"
        }
      },
      "line-height": {
        "100": {
          "value": "1",
          "type": "lineHeights"
        }
      }
    }
  }
}
```

**Action:** Add proper type fields:
- `fontFamilies` for font-family
- `fontSizes` for font-size
- `fontWeights` for font-weight
- `lineHeights` for line-height

### 1.4 Shadow Structure

**Current:**
```json
{
  "primitives": {
    "shadow": {
      "1": {
        "value": "0px 2px 4px rgba(23, 23, 23, 0.1)"
      }
    }
  }
}
```

**TokenStudio:**
```json
{
  "primitives": {
    "shadow": {
      "1": {
        "value": {
          "x": "0",
          "y": "1",
          "blur": "2",
          "spread": "0",
          "color": "rgba({primitives.color.neutral.1000}, {primitives.opacity.10})",
          "type": "innerShadow"
        },
        "type": "boxShadow"
      },
      "2": {
        "value": [
          { "x": "0", "y": "1", "blur": "3", ... },
          { "x": "0", "y": "1", "blur": "2", ... }
        ],
        "type": "boxShadow"
      }
    }
  }
}
```

**Action:**
- Change from string to object/array structure
- Separate x, y, blur, spread, color, type properties
- Support multiple shadows (array)
- Reference color and opacity tokens

### 1.5 Border Radius References

**Current:**
```json
{
  "primitives": {
    "border-radius": {
      "sm": { "value": "4px" }
    }
  }
}
```

**TokenStudio:**
```json
{
  "primitives": {
    "border-radius": {
      "sm": {
        "value": "{primitives.sizing.1}",
        "type": "borderRadius"
      }
    }
  }
}
```

**Action:** Reference sizing tokens + add type field

### 1.6 Opacity Type

**Current:**
```json
{
  "primitives": {
    "opacity": {
      "10": { "value": "0.1" }
    }
  }
}
```

**TokenStudio:**
```json
{
  "primitives": {
    "opacity": {
      "10": {
        "value": "0.1",
        "type": "opacity"
      }
    }
  }
}
```

**Action:** Add type field

## 2. Semantic Layer Differences

### 2.1 Structure Mismatch

**Current:**
```json
{
  "semantic": {
    "color": {
      "background": {
        "default": { "value": "{DO-NOT-USE}" }
      },
      "foreground": {
        "default": { "value": "{DO-NOT-USE}" }
      },
      "border": {
        "default": { "value": "{DO-NOT-USE}" }
      }
    }
  }
}
```

**TokenStudio:**
```json
{
  "semantic": {
    "background": {
      "neutral": {
        "default": { "value": "{DO-NOT-USE}", "type": "color" }
      }
    },
    "foreground": {
      "on-neutral": {
        "default": { "value": "{DO-NOT-USE}", "type": "color" }
      }
    },
    "border-color": {
      "neutral": {
        "default": { "value": "{DO-NOT-USE}", "type": "color" }
      }
    }
  }
}
```

**Key Differences:**
- No `color` parent group
- Three separate top-level groups: `background`, `foreground`, `border-color`
- Variant-based organization (neutral/primary/secondary/danger)
- `border` → `border-color`
- `foreground` uses `on-{variant}` naming

### 2.2 Typography Structure

**Current:**
```json
{
  "semantic": {
    "typography": {
      "body": {
        "md": {
          "font-family": { "value": "{DO-NOT-USE}" },
          "font-size": { "value": "{DO-NOT-USE}" }
        }
      }
    }
  }
}
```

**TokenStudio:**
```json
{
  "semantic": {
    "typography": {
      "body": {
        "md": {
          "value": "{DO-NOT-USE}",
          "type": "typography"
        }
      }
    }
  }
}
```

**Key Differences:**
- TokenStudio uses composite `typography` type (single token)
- Current splits into individual properties (font-family, font-size, etc)

### 2.3 Sizing vs Spacing/Sizing

**Current:**
```json
{
  "semantic": {
    "spacing": { ... },
    "size": { ... }
  }
}
```

**TokenStudio:**
```json
{
  "semantic": {
    "spacing": {
      "block": { ... },
      "inline": { ... }
    },
    "sizing": {
      "block": { ... },
      "inline": { ... }
    }
  }
}
```

**Key Differences:**
- `size` → `sizing`
- Both have `block` and `inline` subdivisions
- Types: `spacing` uses `"type": "spacing"`, sizing uses `"type": "dimension"`

## 3. Components Layer

**Current:** ✅ Already correct! Components reference semantic tokens only.

Example:
```json
{
  "button": {
    "_base": {
      "border-radius": {
        "value": "{semantic.border-radius.full}",
        "type": "borderRadius"
      }
    }
  }
}
```

This matches TokenStudio format.

## 4. Migration Strategy

### Phase 1: Primitives Migration
1. Add `type` field to all tokens
2. Rename `size` → `sizing` + add `base` + math expressions
3. Update `border-radius` to reference `sizing`
4. Restructure `shadow` from string to object/array
5. Add proper typography types (`fontFamilies`, `fontSizes`, etc)
6. Add `type` to `opacity` and `duration`

### Phase 2: Semantic Migration
1. Restructure from `color.background` to top-level `background`
2. Split into `background`, `foreground`, `border-color`
3. Rename `border` → `border-color`
4. Update foreground to use `on-{variant}` naming
5. Change `size` → `sizing` with `dimension` type
6. Update `typography` to use composite type (needs style-dictionary transform)

### Phase 3: Style Dictionary Config
1. Update parsers to handle math expressions (`{base} * 2`)
2. Add transforms for new shadow object format
3. Add transforms for composite typography type
4. Update output format to handle new structures
5. Test generation pipeline

### Phase 4: Theme Files
1. Update `light.json` and `dark.json` to match new semantic structure
2. Update references from old paths to new paths

## 5. Breaking Changes

### For Developers
- Import paths will change:
  - `primitives.size.*` → `primitives.sizing.*`
  - `semantic.color.background.*` → `semantic.background.*`
  - `semantic.color.border.*` → `semantic.borderColor.*`

### For Theme Builder
- `theme.css.ts` will need updates to new semantic structure

### For Components
- Component tokens already use semantic tokens only ✅
- No changes needed once semantic layer is fixed

## 6. Implementation Order

1. ✅ **DONE:** Fix component primitive references (task-critical.01)
2. **TODO:** Migrate primitives layer (task-high.01 - current)
3. **TODO:** Update style-dictionary config (task-high.02)
4. **TODO:** Migrate semantic layer
5. **TODO:** Update theme files
6. **TODO:** Update theme.css.ts
7. **TODO:** Regenerate all tokens
8. **TODO:** Test components with new tokens

## 7. Risk Assessment

### Low Risk
- Adding `type` fields (backward compatible)
- Renaming `size` → `sizing` (isolated change)

### Medium Risk
- Shadow object format (style-dictionary needs new transform)
- Math expressions in sizing (style-dictionary needs parser)

### High Risk
- Semantic structure change (affects theme builder, all references)
- Composite typography type (complex transform needed)

## Next Steps

1. Start with low-risk primitives changes (type fields, sizing rename)
2. Create backup of current tokens
3. Test style-dictionary after each change
4. Update components incrementally
