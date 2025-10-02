# Design Tokens System

This project uses a **4-tier hierarchical token architecture** managed through Token Studio for Figma. All design tokens are stored in the `tokens/` directory as separate JSON files.

## Token Files Structure

```
tokens/
├── $themes.json                  # Theme configurations (Token Studio service file)
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
  "color": {
    "blue": {
      "700": {
        "value": "#4d88ff",
        "type": "color"
      }
    }
  },
  "size": {
    "4": {
      "value": "1rem",
      "type": "sizing"
    }
  }
}
```

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
  "background": {
    "primary": {
      "value": "{DO-NOT-USE}",
      "type": "color"
    },
    "secondary": {
      "value": "{DO-NOT-USE}",
      "type": "color"
    }
  },
  "interactive": {
    "primary": {
      "default": {
        "background": {
          "value": "{DO-NOT-USE}",
          "type": "color"
        }
      }
    }
  }
}
```

## Layer 3: Theme Tokens (`3-themes/`)

**Purpose**: Concrete theme implementations and shared theme-level tokens.

### Files
- **base.json**: Shared tokens across ALL themes (typography compositions, sizing scale)
- **light/theme.json**: Light theme implementation
- **dark/theme.json**: Dark theme implementation
- **[custom]/theme.json**: Additional custom theme implementations

### Rules for `base.json`
- ✅ Reference Layer 1 core tokens using `{token.path}` syntax
- ✅ Create composite tokens (e.g., typography objects)
- ✅ Define theme-independent values
- ❌ NO color implementations (colors are theme-specific)

### Rules for Theme Implementations (`light/`, `dark/`, etc.)
- ✅ MUST implement ALL tokens from Layer 2 semantic contract
- ✅ Reference Layer 1 tokens or create compositions using `{token}` syntax
- ✅ Use `rgba()` with opacity references for transparent colors: `"rgba({color.blue.700}, {opacity.20})"`
- ✅ Token paths MUST match exactly with Layer 2 contract paths
- ❌ NO placeholder `{DO-NOT-USE}` values - all must be resolved to actual values

### Example Structure

**base.json**:
```json
{
  "typography": {
    "heading-l": {
      "value": {
        "fontFamily": "{typography.font-family.ui}",
        "fontWeight": "{font-weight.semibold}",
        "fontSize": "{font-size.600}",
        "lineHeight": "{line-height.tight}"
      },
      "type": "typography"
    }
  }
}
```

**light/theme.json**:
```json
{
  "background": {
    "primary": {
      "value": "{color.neutral.900}",
      "type": "color"
    },
    "secondary": {
      "value": "rgba({color.neutral.901}, {opacity.50})",
      "type": "color"
    }
  }
}
```

## Layer 4: Component Tokens (`4-components/`)

**Purpose**: Component-specific tokens providing customization for individual UI components.

### Rules
- ✅ Reference Layer 2 semantic tokens using `{semantic.token.path}` syntax
- ✅ Can reference Layer 3 theme tokens when needed
- ✅ Organize by component variant (e.g., `button.primary`, `button.danger`)
- ✅ Include a `global` section for shared component properties
- ❌ NEVER reference Layer 1 core tokens directly (always go through semantic layer)
- ❌ NEVER use absolute values

### Example Structure
```json
{
  "button": {
    "primary": {
      "background-color": {
        "default": {
          "value": "{interactive.primary.default.background}",
          "type": "color"
        },
        "hover": {
          "value": "{interactive.primary.hover.background}",
          "type": "color"
        },
        "disabled": {
          "value": "{background.disabled}",
          "type": "color"
        }
      }
    },
    "global": {
      "border-radius": {
        "value": "{borderRadius.2}",
        "type": "borderRadius"
      },
      "padding-inline": {
        "value": "{sizing.md}",
        "type": "spacing"
      }
    }
  }
}
```

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
  "value": "{color.blue.700}",                              // Reference core color
  "value": "{background.primary}",                          // Reference semantic token
  "value": "{size.4}",                                      // Reference dimension
  "value": "rgba({color.red.450}, {opacity.20})",          // Composition with opacity
  "value": "{size.4} * 2"                                   // Math calculation
}
```

## Critical Rules Summary

### Never Skip Layers
The token resolution path MUST follow this hierarchy:
```
Components (Layer 4) → Semantic (Layer 2) → Themes (Layer 3) → Core (Layer 1)
```
❌ NEVER jump directly from Layer 4 to Layer 1
❌ NEVER jump directly from Layer 4 to Layer 3

### Token Type Requirements
Always specify the `"type"` field for every token:
- Colors: `"type": "color"`
- Spacing/Sizing: `"type": "spacing"` or `"type": "sizing"`
- Typography: `"type": "typography"`
- Border Radius: `"type": "borderRadius"`
- Border Width: `"type": "borderWidth"`
- Opacity: `"type": "opacity"`
- Font Families: `"type": "fontFamilies"`
- Font Weights: `"type": "fontWeights"`
- Font Sizes: `"type": "fontSizes"`
- Line Heights: `"type": "lineHeights"`

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
2. Reference only Layer 2 semantic tokens or Layer 3 theme tokens
3. Organize by component variants
4. Include `global` section for shared properties
5. Add to `selectedTokenSets` in `$themes.json`

## Common Mistakes to Avoid

❌ **Skipping layers**: Component referencing core color directly
❌ **Missing contract implementation**: Theme not implementing all semantic tokens
❌ **Using absolute values**: Component token with `"value": "#4d88ff"`
❌ **Semantic names in core**: Core token named `color.primary` instead of `color.blue.700`
❌ **Actual values in contract**: Semantic contract with `"value": "{color.blue.700}"` instead of `"{DO-NOT-USE}"`
❌ **Missing type field**: Token without `"type"` property
❌ **Inconsistent theme implementations**: Light theme has tokens that Dark theme doesn't

## Token Studio Specifics

### Token Studio Auto-Sync
Token Studio automatically syncs token files with Figma. Changes in Figma update JSON files, and vice versa.

### Import/Export
- **Export**: Token Studio → JSON files (automatic)
- **Import**: JSON files → Token Studio (manual or automatic)

### Math Expressions
Token Studio supports math in token values:
```json
{
  "value": "{size.4} * 2"    // Evaluates to 2rem if size.4 is 1rem
}
```

### Color Compositions
Use `rgba()` for transparent colors:
```json
{
  "value": "rgba({color.blue.700}, {opacity.20})"
}
```

## Getting Help

When working with tokens:
1. Always reference this documentation
2. Check existing token files for patterns
3. Verify layer hierarchy is maintained
4. Ensure `$themes.json` is properly configured
5. Test tokens in both Light and Dark themes