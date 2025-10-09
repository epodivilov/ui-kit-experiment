# Design Tokens System

This project uses a **4-tier hierarchical token architecture** following the [DTCG (Design Tokens Community Group)](https://tr.designtokens.org/format/) specification. All design tokens are stored in the `tokens/` directory as separate JSON files.

## Quick Start for Agents

**Before modifying any tokens, remember:**

1. ✅ **ALWAYS use DTCG format**: `"$type"` and `"$value"` (with `$` prefix)
2. ✅ **Never skip layers**: Components → Semantic → Themes → Core
3. ✅ **Use kebab-case**: `border-radius`, not `borderRadius` (except inside typography composite values)
4. ✅ **Reference with full path**: `{core.color.blue.700}`, `{semantic.background.default}`
5. ✅ **All interactive states**: default, hover, active, focus, disabled (all 5 required)
6. ❌ **DO NOT modify**: `$themes.json` and `$metadata.json` (managed by Token Studio)

## Token Format

All tokens follow the DTCG standard:

```json
{
  "token-name": {
    "$type": "color",
    "$value": "#ffffff"
  }
}
```

**Key format rules:**

- `$type` - Token type (color, sizing, spacing, etc.)
- `$value` - Token value (hex, rem, reference, etc.)
- Token names use **kebab-case** (e.g., `font-size`, `border-radius`)

## Critical Rules

### Root-Level Namespacing

**REQUIRED**: Each layer must have a root-level namespace:

- **Layer 1 (Core)**: Root field MUST be `"core"`
- **Layer 2 (Semantic)**: Root field MUST be `"semantic"`
- **Layer 3 (Themes)**: Root field MUST be `"semantic"` (themes override semantic contract)
- **Layer 4 (Components)**: Component name as root (e.g., `"button"`, `"input"`)

**Purpose**: Clear token origin and prevents naming conflicts

### Interactive States

**REQUIRED** for interactive components - define ALL 5 states:

- `default` - default state
- `hover` - hover state
- `active` - active/pressed state
- `focus` - focus state
- `disabled` - disabled state

❌ **NO partial state definitions**

## Token Files Structure

```
tokens/
├── $themes.json                  # Theme configurations (DO NOT MODIFY)
├── $metadata.json                # Token set order (DO NOT MODIFY)
├── 1-core/
│   ├── colors.json              # Primitive color values
│   ├── dimensions.json          # Sizing, border radius, border width
│   ├── opacity.json             # Opacity values
│   └── typography.json          # Font families, weights, sizes, line heights
├── 2-semantic/
│   └── contract.json            # Theme-agnostic semantic contract
├── 3-themes/
│   ├── base.json               # Shared tokens across all themes
│   ├── light/
│   │   └── theme.json          # Light theme implementation
│   └── dark/
│       └── theme.json          # Dark theme implementation
└── 4-components/
    ├── button.json             # Button component tokens
    ├── input.json              # Input component tokens
    └── [component-name].json  # Other component tokens
```

**⚠️ IMPORTANT**: `$themes.json` and `$metadata.json` are managed by Token Studio. Modify them only when adding new token sets or themes.

## Layer 1: Core Tokens (`1-core/`)

**Purpose**: Foundation layer with primitive, absolute values.

### Rules

- ✅ Use ONLY absolute values (hex colors, rem/px units, numeric values)
- ✅ Names must be generic and value-descriptive (e.g., `color.blue.700`, `size.4`)
- ❌ NEVER reference other tokens
- ❌ NEVER use semantic naming (avoid "primary", "danger", "background")

### File Types

- **colors.json**: Raw color values in hex format
- **dimensions.json**: Size scale, border radius, border width
- **opacity.json**: Opacity percentage values (0-1)
- **typography.json**: Font families, weights, sizes, line heights

### Example Structure

```json
{
  "core": {
    "color": {
      "blue": {
        "700": {
          "$type": "color",
          "$value": "#1d4ed8"
        }
      }
    },
    "size": {
      "4": {
        "$type": "sizing",
        "$value": "1rem"
      }
    }
  }
}
```

**Note**: All core tokens MUST be nested under `"core"` root field and use DTCG format (`$type`, `$value`).

## Layer 2: Semantic Contract (`2-semantic/contract.json`)

**Purpose**: Theme-agnostic interface that acts as a contract between themes and components.

### Rules

- ✅ Use semantic, purpose-driven names (e.g., `background.primary`, `foreground.on-interactive`)
- ✅ ALL values MUST be `"{DO-NOT-USE}"` - this is a contract, not implementation
- ✅ Define all semantic tokens that components will consume
- ❌ NEVER reference Layer 1 tokens directly
- ❌ NEVER use actual values - only placeholder `"{DO-NOT-USE}"`

### Purpose

This layer defines the vocabulary that:

- Components expect to consume
- Themes must implement
- Ensures consistency across all themes

### Example Structure

```json
{
  "semantic": {
    "background": {
      "default": {
        "$type": "color",
        "$value": "{DO-NOT-USE}"
      },
      "surface": {
        "$type": "color",
        "$value": "{DO-NOT-USE}"
      }
    },
    "interactive": {
      "primary": {
        "default": {
          "background": {
            "$type": "color",
            "$value": "{DO-NOT-USE}"
          }
        },
        "hover": {
          "background": {
            "$type": "color",
            "$value": "{DO-NOT-USE}"
          }
        },
        "active": {
          "background": {
            "$type": "color",
            "$value": "{DO-NOT-USE}"
          }
        },
        "focus": {
          "background": {
            "$type": "color",
            "$value": "{DO-NOT-USE}"
          }
        },
        "disabled": {
          "background": {
            "$type": "color",
            "$value": "{DO-NOT-USE}"
          }
        }
      }
    }
  }
}
```

**Note**: All semantic tokens MUST be nested under `"semantic"` root field and use DTCG format. Interactive tokens MUST have all 5 states.

## Layer 3: Theme Tokens (`3-themes/`)

**Purpose**: Concrete theme implementations and shared theme-level tokens.

### Files

- **base.json**: Shared tokens across ALL themes (typography compositions, sizing scale)
- **light/theme.json**: Light theme implementation
- **dark/theme.json**: Dark theme implementation
- **[custom]/theme.json**: Additional custom theme implementations

### Rules for `base.json`

- ✅ Reference Layer 1 core tokens using `{core.token.path}` syntax
- ✅ Create composite tokens (typography, shadows, etc.)
- ✅ Define theme-independent values
- ❌ NO color implementations (colors are theme-specific)
- ❌ NO absolute values - always reference core tokens

### Rules for Theme Implementations (`light/`, `dark/`, etc.)

- ✅ MUST implement ALL tokens from Layer 2 semantic contract
- ✅ Reference Layer 1 tokens with `{core.*}` syntax
- ✅ Use `rgba()` with opacity references for transparent colors: `"rgba({core.color.blue.700}, {core.opacity.20})"`
- ✅ Token paths MUST match exactly with Layer 2 contract paths
- ❌ NO placeholder `{DO-NOT-USE}` values - all must be resolved to actual values
- ❌ NO absolute values - always reference core tokens

### Example Structure

**base.json**:

```json
{
  "semantic": {
    "typography": {
      "body-l": {
        "$type": "typography",
        "$value": {
          "fontFamily": "{core.font-family.sans}",
          "fontWeight": "{core.font-weight.400}",
          "fontSize": "{core.font-size.lg}",
          "lineHeight": "{core.line-height.normal}"
        }
      }
    }
  }
}
```

**light/theme.json**:

```json
{
  "semantic": {
    "background": {
      "default": {
        "$type": "color",
        "$value": "{core.color.white}"
      },
      "surface": {
        "$type": "color",
        "$value": "{core.color.neutral.50}"
      }
    },
    "interactive": {
      "primary": {
        "default": {
          "background": {
            "$type": "color",
            "$value": "{core.color.blue.600}"
          }
        },
        "hover": {
          "background": {
            "$type": "color",
            "$value": "{core.color.blue.700}"
          }
        },
        "active": {
          "background": {
            "$type": "color",
            "$value": "{core.color.blue.800}"
          }
        },
        "focus": {
          "background": {
            "$type": "color",
            "$value": "{core.color.blue.600}"
          }
        },
        "disabled": {
          "background": {
            "$type": "color",
            "$value": "{core.color.neutral.100}"
          }
        }
      }
    }
  }
}
```

**Note**: Themes MUST wrap all tokens in `"semantic"` root field, use DTCG format, and reference core tokens with `{core.*}` syntax. ALL interactive states must be defined.

## Layer 4: Component Tokens (`4-components/`)

**Purpose**: Component-specific tokens providing customization for individual UI components.

### Rules

- ✅ Reference Layer 2 semantic tokens using `{semantic.token.path}` syntax
- ✅ Can reference Layer 3 theme tokens when needed
- ✅ **MUST use** `base` and `variants` structure for compatibility with code generation
- ✅ Organize variants by groups (e.g., `variant`, `size`) with options inside
- ✅ **Root element only**: Component tokens define styles for the root/container element only
- ✅ **Child element styling**: Style child elements (indicators, icons, etc.) directly in component CSS using semantic tokens
- ✅ **Multi-root support**: Single file can contain multiple related components (e.g., `radio`, `radio-group`, `radio-indicator`)
- ✅ **CSS-compatible properties**: Within `component.variant.state` paths, use ONLY CSS-compatible property names (e.g., `color`, `background-color`, `width`, `height`, `border-color`) - NOT semantic names like `foreground`, `size`, or `background`
- ❌ NEVER reference Layer 1 core tokens directly (always go through semantic layer)
- ❌ NEVER use absolute values
- ❌ NEVER use `global` - always use `base` instead

### Required Structure

Component token files follow a **flexible multi-root structure** where each file can contain one or more related components:

```json
{
  "component-name": {
    "base": {
      "css-property": {
        "$type": "tokenType",
        "$value": "{semantic.token}"
      }
    },
    "variants": {
      "variant-group": {
        "option": {
          "css-property": {
            "state": {
              "$type": "tokenType",
              "$value": "{semantic.token}"
            }
          }
        }
      }
    },
    "defaultVariants": {
      "variant-group": {
        "$type": "other",
        "$value": "default-option"
      }
    }
  },
  "related-component": {
    "base": { /* ... */ },
    "variants": { /* ... */ },
    "defaultVariants": { /* ... */ }
  }
}
```

**Key Points**:

- **Single file, multiple components**: One file can define one component (single-root) or multiple related components (multi-root)
- **Component grouping**: Group related components together (e.g., `input`, `input-group`, `input-label` in one file)
- **Naming conventions**:
  - Component names: kebab-case (e.g., `text-field`, `icon-button`)
  - Generated exports: camelCase (e.g., `textFieldBaseStyles`, `iconButtonVariants`)
- **Code generation**: Each component root generates separate exports with `{componentName}BaseStyles` and `{componentName}Variants`

### Example Structures

#### Example 1: Single Component with Interactive States

```json
{
  "interactive-element": {
    "base": {
      "border-radius": {
        "$type": "borderRadius",
        "$value": "{semantic.border-radius.md}"
      },
      "padding-inline": {
        "$type": "spacing",
        "$value": "{semantic.spacing.md}"
      }
    },
    "variants": {
      "variant": {
        "primary": {
          "background-color": {
            "default": {
              "$type": "color",
              "$value": "{semantic.interactive.primary.default.background}"
            },
            "hover": {
              "$type": "color",
              "$value": "{semantic.interactive.primary.hover.background}"
            },
            "active": {
              "$type": "color",
              "$value": "{semantic.interactive.primary.active.background}"
            },
            "focus": {
              "$type": "color",
              "$value": "{semantic.interactive.primary.focus.background}"
            },
            "disabled": {
              "$type": "color",
              "$value": "{semantic.interactive.primary.disabled.background}"
            }
          },
          "color": {
            "default": {
              "$type": "color",
              "$value": "{semantic.interactive.primary.default.foreground}"
            },
            "hover": {
              "$type": "color",
              "$value": "{semantic.interactive.primary.hover.foreground}"
            },
            "active": {
              "$type": "color",
              "$value": "{semantic.interactive.primary.active.foreground}"
            },
            "focus": {
              "$type": "color",
              "$value": "{semantic.interactive.primary.focus.foreground}"
            },
            "disabled": {
              "$type": "color",
              "$value": "{semantic.interactive.primary.disabled.foreground}"
            }
          }
        },
        "secondary": {
          "border-color": {
            "default": {
              "$type": "color",
              "$value": "{semantic.border.default}"
            },
            "hover": {
              "$type": "color",
              "$value": "{semantic.border.hover}"
            },
            "active": {
              "$type": "color",
              "$value": "{semantic.border.active}"
            },
            "focus": {
              "$type": "color",
              "$value": "{semantic.border.focus}"
            },
            "disabled": {
              "$type": "color",
              "$value": "{semantic.border.disabled}"
            }
          }
        }
      },
      "size": {
        "small": {
          "padding-block": {
            "$type": "spacing",
            "$value": "{semantic.spacing.xs}"
          },
          "font-size": {
            "$type": "fontSizes",
            "$value": "{semantic.font-size.sm}"
          }
        },
        "large": {
          "padding-block": {
            "$type": "spacing",
            "$value": "{semantic.spacing.lg}"
          },
          "font-size": {
            "$type": "fontSizes",
            "$value": "{semantic.font-size.lg}"
          }
        }
      }
    },
    "defaultVariants": {
      "variant": {
        "$type": "other",
        "$value": "primary"
      },
      "size": {
        "$type": "other",
        "$value": "medium"
      }
    }
  }
}
```

#### Example 2: Component Family (Multi-Root)

```json
{
  "control": {
    "base": {
      "border-radius": {
        "$type": "borderRadius",
        "$value": "{semantic.border-radius.sm}"
      },
      "width": {
        "$type": "sizing",
        "$value": "{semantic.sizing.md}"
      },
      "height": {
        "$type": "sizing",
        "$value": "{semantic.sizing.md}"
      }
    },
    "variants": {
      "size": {
        "small": {
          "width": {
            "$type": "sizing",
            "$value": "{semantic.sizing.sm}"
          },
          "height": {
            "$type": "sizing",
            "$value": "{semantic.sizing.sm}"
          }
        },
        "large": {
          "width": {
            "$type": "sizing",
            "$value": "{semantic.sizing.lg}"
          },
          "height": {
            "$type": "sizing",
            "$value": "{semantic.sizing.lg}"
          }
        }
      }
    },
    "defaultVariants": {
      "size": {
        "$type": "other",
        "$value": "medium"
      }
    }
  },
  "control-group": {
    "base": {
      "gap": {
        "$type": "spacing",
        "$value": "{semantic.spacing.md}"
      }
    },
    "variants": {
      "orientation": {
        "vertical": {
          "flex-direction": {
            "$type": "other",
            "$value": "column"
          }
        },
        "horizontal": {
          "flex-direction": {
            "$type": "other",
            "$value": "row"
          }
        }
      }
    },
    "defaultVariants": {
      "orientation": {
        "$type": "other",
        "$value": "vertical"
      }
    }
  },
  "control-indicator": {
    "base": {
      "background-color": {
        "$type": "color",
        "$value": "{semantic.interactive.primary.default.background}"
      },
      "border-radius": {
        "$type": "borderRadius",
        "$value": "{semantic.border-radius.full}"
      }
    },
    "variants": {
      "size": {
        "small": {
          "width": {
            "$type": "sizing",
            "$value": "{semantic.sizing.xs}"
          },
          "height": {
            "$type": "sizing",
            "$value": "{semantic.sizing.xs}"
          }
        },
        "large": {
          "width": {
            "$type": "sizing",
            "$value": "{semantic.sizing.sm}"
          },
          "height": {
            "$type": "sizing",
            "$value": "{semantic.sizing.sm}"
          }
        }
      }
    },
    "defaultVariants": {
      "size": {
        "$type": "other",
        "$value": "medium"
      }
    }
  }
}
```

**Generated output** (`control.generated.css.ts`):

```typescript
import { tokens } from '../index';

// Control component
export const controlBaseStyles = {
  /* ... */
};
export const controlVariants = {
  /* ... */
};

// Control group component
export const controlGroupBaseStyles = {
  /* ... */
};
export const controlGroupVariants = {
  /* ... */
};

// Control indicator component
export const controlIndicatorBaseStyles = {
  /* ... */
};
export const controlIndicatorVariants = {
  /* ... */
};
```

**Critical Notes**:

- ✅ Components MUST use DTCG format (`$type`, `$value`)
- ✅ Reference semantic tokens with full path `{semantic.*}`
- ✅ Use **CSS property names** within variant states: `color`, `background-color`, `width`, `height`, `border-color`, etc.
- ✅ ALL interactive states must be defined (default, hover, active, focus, disabled)
- ❌ NEVER use semantic property names like `foreground`, `size`, or `background` within `component.variant.state` paths

## Token Studio Configuration (`$themes.json`)

**Purpose**: Defines theme configurations and controls which token sets are active for each theme.

### Structure

```json
{
  "$themes": [
    {
      "name": "Light",
      "selectedTokenSets": {
        "1-core/colors": "source",
        "1-core/dimensions": "source",
        "1-core/opacity": "source",
        "1-core/typography": "source",
        "2-semantic/contract": "enabled",
        "3-themes/base": "enabled",
        "3-themes/light/theme": "enabled",
        "4-components/button": "enabled",
        "4-components/input": "enabled"
      }
    },
    {
      "name": "Dark",
      "selectedTokenSets": {
        "1-core/colors": "source",
        "1-core/dimensions": "source",
        "1-core/opacity": "source",
        "1-core/typography": "source",
        "2-semantic/contract": "enabled",
        "3-themes/base": "enabled",
        "3-themes/dark/theme": "enabled",
        "4-components/button": "enabled",
        "4-components/input": "enabled"
      }
    }
  ]
}
```

### Token Set Statuses

- **`"source"`**: Core tokens available as reference but not directly used (Layer 1)
- **`"enabled"`**: Tokens that are active and resolved for this theme
- **`"disabled"`**: Tokens not included in this theme

### Rules for `$themes`

- ✅ Each theme MUST have a unique `name`
- ✅ Layer 1 core tokens should always be `"source"`
- ✅ Layer 2 semantic contract must be `"enabled"`
- ✅ Only ONE theme implementation from Layer 3 should be `"enabled"` per theme
- ✅ Layer 3 `/base` should be `"enabled"` for all themes
- ✅ Layer 4 component tokens are typically `"enabled"`

## Multi-Dimensional Themes

Token Studio supports **multi-dimensional theming** for combining multiple independent theme dimensions (e.g., Light/Dark × Brand A/Brand B × Mobile/Desktop).

### File Organization for Multi-Dimensional

```
3-themes/
├── base/                    # Shared across all combinations
├── color-mode/
│   ├── light/              # Color dimension
│   └── dark/
├── brand/
│   ├── brand-a/            # Brand dimension
│   └── brand-b/
└── platform/
    ├── mobile/             # Platform dimension
    └── desktop/
```

### Multi-Dimensional `$themes` Configuration

```json
{
  "$themes": [
    {
      "name": "Light / Brand A / Mobile",
      "selectedTokenSets": {
        "1-core/colors": "source",
        "2-semantic/contract": "enabled",
        "3-themes/base": "enabled",
        "3-themes/color-mode/light": "enabled",
        "3-themes/brand/brand-a": "enabled",
        "3-themes/platform/mobile": "enabled",
        "4-components/button": "enabled"
      }
    }
  ]
}
```

### Rules for Multi-Dimensional Themes

- ✅ Each dimension should modify different token subsets
- ✅ Later enabled sets override earlier ones (order matters)
- ✅ Use clear naming: `dimension-name/variant-name`
- ❌ Avoid conflicts - don't define same token path in multiple dimensions unless intentional override

## Token Reference Syntax

Reference tokens using curly braces: `{path.to.token}`

### Examples

```json
{
  "$value": "{core.color.blue.700}", // Reference core color
  "$value": "{semantic.background.default}", // Reference semantic token
  "$value": "{core.size.4}", // Reference dimension
  "$value": "rgba({core.color.red.500}, {core.opacity.20})", // Composition with opacity
  "$value": "{core.size.4} * 2" // Math calculation
}
```

**⚠️ IMPORTANT**: Always use `"$value"` (not `"value"`) when referencing tokens - DTCG format required.

### Composite Tokens (Typography)

Typography tokens use composite values with specific property names:

```json
{
  "typography": {
    "body-l": {
      "$type": "typography",
      "$value": {
        "fontFamily": "{core.font-family.sans}",
        "fontWeight": "{core.font-weight.400}",
        "fontSize": "{core.font-size.500}",
        "lineHeight": "{core.line-height.200}"
      }
    }
  }
}
```

**Note**: Property names inside typography `$value` use camelCase (fontFamily, fontSize, lineHeight, fontWeight).

## Critical Rules Summary

### DTCG Format (MOST IMPORTANT)

**ALL tokens MUST use DTCG format:**

```json
{
  "token-name": {
    "$type": "color", // NOT "type"
    "$value": "#ffffff" // NOT "value"
  }
}
```

✅ Use `$type` and `$value` (with dollar sign)
❌ NEVER use `type` and `value` (without dollar sign)

### Never Skip Layers

The token resolution path MUST follow this hierarchy:

```
Components (Layer 4) → Semantic (Layer 2) → Themes (Layer 3) → Core (Layer 1)
```

❌ NEVER jump directly from Layer 4 to Layer 1
❌ NEVER jump directly from Layer 4 to Layer 3

### Token Type Requirements

Always specify the `"$type"` field for every token (DTCG format):

- Colors: `"$type": "color"`
- Spacing: `"$type": "spacing"`
- Sizing: `"$type": "sizing"`
- Typography: `"$type": "typography"`
- Border Radius: `"$type": "borderRadius"`
- Border Width: `"$type": "borderWidth"`
- Opacity: `"$type": "opacity"`
- Font Families: `"$type": "fontFamilies"`
- Font Weights: `"$type": "fontWeights"`
- Font Sizes: `"$type": "fontSizes"`
- Line Heights: `"$type": "lineHeights"`

### Theme Parity

All theme implementations MUST provide the same token paths to maintain consistency.

### Naming Conventions

- **Layer 1**: Generic, value-descriptive (`color.blue.700`, `size.4`)
- **Layer 2**: Semantic, purpose-driven (`background.primary`, `interactive.danger.hover.background`)
- **Layer 3**: Theme-specific or shared (`typography.heading-l`, `background.primary`)
- **Layer 4**: Component and variant-specific (`button.primary.background-color.hover`)

## Working with Token Files

### When Adding New Tokens

1. Identify the appropriate layer
2. Add to the correct JSON file in `tokens/`
3. Follow naming conventions for that layer
4. Ensure proper token references (no layer skipping)
5. Add to `$themes.json` if creating new token sets

### When Creating New Themes

1. Create new directory under `3-themes/[theme-name]/`
2. Create `theme.json` file
3. Implement ALL tokens from `2-semantic/contract.json`
4. Add theme configuration to `$themes.json`
5. Test theme has no `{DO-NOT-USE}` values

### When Adding New Components

1. Create new file `4-components/[component-name].json`
2. Decide component grouping:
   - **Single component**: One root (e.g., `"button"` in `button.json`)
   - **Component family**: Multiple related roots (e.g., `"input"`, `"input-group"`, `"input-label"` in `input.json`)
3. Reference only Layer 2 semantic tokens with `{semantic.*}` syntax
4. **REQUIRED**: Each component MUST have `base`, `variants`, `defaultVariants` structure
5. **CSS properties only**: Within variant states, use CSS-compatible property names (`color`, `background-color`, `width`, `height`) - NOT semantic names (`foreground`, `size`)
6. Add to `selectedTokenSets` in `$themes.json` (if needed)
7. Run `pnpm build:components` to generate Vanilla Extract styles from tokens

#### Component Token Structure

```json
{
  "component-name": {
    "base": {
      "border-radius": {
        "$type": "borderRadius",
        "$value": "{semantic.border-radius.md}"
      },
      "padding-inline": {
        "$type": "spacing",
        "$value": "{semantic.spacing.md}"
      }
    },
    "variants": {
      "variant": {
        "primary": {
          "background-color": {
            "default": {
              "$type": "color",
              "$value": "{semantic.interactive.primary.default.background}"
            },
            "hover": {
              "$type": "color",
              "$value": "{semantic.interactive.primary.hover.background}"
            },
            "active": {
              "$type": "color",
              "$value": "{semantic.interactive.primary.active.background}"
            },
            "focus": {
              "$type": "color",
              "$value": "{semantic.interactive.primary.focus.background}"
            },
            "disabled": {
              "$type": "color",
              "$value": "{semantic.interactive.primary.disabled.background}"
            }
          }
        }
      },
      "size": {
        "small": {
          "padding-block": {
            "$type": "spacing",
            "$value": "{semantic.spacing.xs}"
          },
          "font-size": {
            "$type": "fontSizes",
            "$value": "{semantic.font-size.sm}"
          }
        }
      }
    },
    "defaultVariants": {
      "variant": {
        "$type": "other",
        "$value": "primary"
      },
      "size": {
        "$type": "other",
        "$value": "medium"
      }
    }
  }
}
```

#### Component Variants

- **`base`**: Styles applied to all instances (only design tokens, no CSS implementation details)
- **`variants`**: Groups of options
  - `variant`: Visual styles (primary, secondary, danger, etc.)
  - `size`: Sizing variations (small, medium, large, etc.)
  - `orientation`, `alignment`, etc.: Other variant dimensions
  - Boolean variants: Separate groups with `"true"` key (e.g., `full-width`)
- **Interactive states**: Use `default`, `hover`, `active`, `focus`, `disabled` within CSS properties
- **CSS-compatible properties**: Within variant states, use ONLY valid CSS property names:
  - ✅ Use: `color`, `background-color`, `border-color`, `width`, `height`, `padding-inline`, `font-size`
  - ❌ NEVER: `foreground`, `background`, `size`, or other semantic names
- **NO CSS implementation details**: No `display`, `cursor`, `box-sizing`, `position` in tokens (handle in component CSS)

#### Code Generation

Component tokens automatically generate Vanilla Extract styles:

```bash
pnpm build:components
```

Output: `src/tokens/generated/components/{component}.generated.css.ts`

**Usage in component**:

```typescript
import {
  componentBaseStyles,
  componentVariants,
} from '../../tokens/generated/components/component.generated.css';

export const componentRecipe = recipe({
  base: {
    // CSS implementation details (NOT in tokens)
    all: 'unset',
    display: 'inline-flex',
    cursor: 'pointer',
    boxSizing: 'border-box',

    // Design tokens (FROM tokens)
    ...componentBaseStyles,
  },
  variants: componentVariants, // From tokens
});
```

**Separation of concerns**:
- **Tokens**: Visual design (colors, spacing, sizing, typography)
- **Component CSS**: Implementation details (display, position, cursor, box-sizing)

## Common Mistakes to Avoid

❌ **Wrong format**: Using `"type"` and `"value"` instead of `"$type"` and `"$value"` (DTCG format required)
❌ **Skipping layers**: Component referencing core color directly
❌ **Missing contract implementation**: Theme not implementing all semantic tokens
❌ **Using absolute values**: Component token with `"$value": "#4d88ff"`
❌ **Semantic names in core**: Core token named `color.primary` instead of `color.blue.700`
❌ **Actual values in contract**: Semantic contract with `"$value": "{core.color.blue.700}"` instead of `"{DO-NOT-USE}"`
❌ **Missing type field**: Token without `"$type"` property
❌ **Inconsistent theme implementations**: Light theme has tokens that Dark theme doesn't
❌ **Modifying service files**: Manually editing `$themes.json` or `$metadata.json` without proper structure

## Token Studio Integration

This project uses **Token Studio for Figma** to manage design tokens. Token Studio exports tokens in DTCG format.

### Service Files (DO NOT MODIFY MANUALLY)

- `$themes.json` - Theme configurations (Light, Dark, etc.)
- `$metadata.json` - Token set order for resolution

**⚠️ Important**: These files are managed by Token Studio. Only modify them when:

- Adding new token sets (new files in tokens/)
- Creating new themes
- Changing theme configurations

### Token Studio Features

**Math expressions** - Calculate values dynamically:

```json
{
  "$value": "{core.size.4} * 2"
}
```

**Color with opacity** - Compose colors with alpha:

```json
{
  "$value": "rgba({core.color.blue.700}, {core.opacity.20})"
}
```

## Troubleshooting

### Common Issues

**Issue**: Tokens not resolving

- ✅ Check `$metadata.json` has correct tokenSetOrder
- ✅ Verify token references use correct layer prefix (`{core.*}`, `{semantic.*}`)
- ✅ Ensure all tokens use DTCG format (`$type`, `$value`)

**Issue**: Theme not working correctly

- ✅ Verify all semantic contract tokens are implemented
- ✅ Check `$themes.json` has correct selectedTokenSets
- ✅ Ensure no `{DO-NOT-USE}` placeholders in theme files

**Issue**: Component tokens not applying

- ✅ Confirm component references semantic tokens (not core)
- ✅ Verify component file has `base` and `variants` structure
- ✅ Check all interactive states are defined (default, hover, active, focus, disabled)

### Validation Checklist

Before committing token changes:

1. ✅ All tokens use DTCG format (`$type`, `$value`)
2. ✅ Layer hierarchy respected (no layer skipping)
3. ✅ All interactive tokens have 5 states
4. ✅ Both Light and Dark themes work correctly
5. ✅ No `{DO-NOT-USE}` in theme implementations
6. ✅ Service files (`$themes.json`, `$metadata.json`) unchanged (unless intentional)

---

## Quick Reference

| Task                  | Layer                     | Root Namespace | Value Type          | Reference Pattern |
| --------------------- | ------------------------- | -------------- | ------------------- | ----------------- |
| Add color scale       | 1-core/colors.json        | `"core"`       | Absolute (hex)      | N/A               |
| Add size/spacing      | 1-core/dimensions.json    | `"core"`       | Absolute (rem/px)   | N/A               |
| Define semantic token | 2-semantic/contract.json  | `"semantic"`   | `{DO-NOT-USE}`      | N/A               |
| Implement theme color | 3-themes/light/theme.json | `"semantic"`   | Reference           | `{core.color.*}`  |
| Define typography     | 3-themes/base.json        | `"semantic"`   | Composite reference | `{core.font-*}`   |
| Add component style   | 4-components/button.json  | Component name | Reference           | `{semantic.*}`    |

### Layer Decision Tree

```
Need to add a token? Ask yourself:

├─ Is it a primitive value (hex, rem, px)?
│  └─ YES → Layer 1 (core)
│
├─ Is it defining the semantic contract?
│  └─ YES → Layer 2 (semantic/contract.json) - use {DO-NOT-USE}
│
├─ Is it implementing a theme-specific value?
│  └─ YES → Layer 3 (themes/)
│     ├─ Color? → light/theme.json or dark/theme.json
│     └─ Typography/Shared? → base.json
│
└─ Is it for a specific UI component?
   └─ YES → Layer 4 (components/) - reference semantic only
```
