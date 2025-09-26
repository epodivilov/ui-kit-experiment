# Design Tokens

This directory contains the design tokens that form the foundation of the UI Kit's design system. Tokens are managed using [Style Dictionary](https://amzn.github.io/style-dictionary/) and are organized into three main categories.

## Token Categories

### 1. Core Tokens (`/core`)
**Purpose**: Foundation tokens that define raw values
**Examples**: Colors, spacing scales, typography scales, border radii, shadows
**Usage**: Referenced by semantic and component tokens

```json
{
  "color": {
    "core": {
      "primary": {
        "500": {
          "value": "#3b82f6",
          "type": "color"
        }
      }
    }
  }
}
```

### 2. Semantic Tokens (`/semantic`)
**Purpose**: Contextual tokens that reference core tokens
**Examples**: Text colors, background colors, border colors, status colors
**Usage**: Used by components and application styles

```json
{
  "color": {
    "text": {
      "primary": {
        "value": "{color.core.neutral.900}",
        "type": "color"
      }
    }
  }
}
```

### 3. Component Tokens (`/component`)
**Purpose**: Component-specific tokens
**Examples**: Button heights, input padding, component-specific colors
**Usage**: Used directly by component implementations

```json
{
  "component": {
    "button": {
      "height": {
        "medium": {
          "value": "{spacing.core.10}",
          "type": "dimension"
        }
      }
    }
  }
}
```

## Token Structure

Each token file follows this structure:

```json
{
  "category": {
    "subcategory": {
      "token-name": {
        "value": "#ffffff",
        "type": "color",
        "comment": "Description of the token"
      }
    }
  }
}
```

**Properties:**
- `value`: The actual token value (can reference other tokens using `{path.to.token}`)
- `type`: Token type for validation and transforms
- `comment`: Human-readable description

## Generated Files

Style Dictionary processes these tokens and generates:

### CSS Custom Properties
**Location**: `src/styles/tokens/variables.css`
**Usage**: Import in your CSS or use with CSS-in-JS

```css
:root {
  --color-core-primary-500: #3b82f6;
  --spacing-core-4: 16px;
}
```

### JavaScript/TypeScript Exports
**Location**: `src/tokens/generated/tokens.js` & `tokens.d.ts`
**Usage**: Import individual tokens in components

```typescript
import { ColorCorePrimary500, SpacingCore4 } from 'ui-kit/tokens';

const buttonStyle = {
  backgroundColor: ColorCorePrimary500,
  padding: SpacingCore4,
};
```

### JSON Format
**Location**: `src/tokens/generated/tokens.json`
**Usage**: For documentation tools and external integrations

### Vanilla-Extract Format
**Location**: `src/tokens/generated/vanilla-extract.ts`
**Usage**: Optimized for CSS-in-JS with Vanilla-Extract

## Token Naming Convention

Tokens follow a predictable naming pattern:

### CSS Variables (kebab-case)
```css
--{category}-{subcategory}-{name}-{variant}
--color-core-primary-500
--component-button-height-medium
```

### JavaScript Variables (PascalCase)
```javascript
{Category}{Subcategory}{Name}{Variant}
ColorCorePrimary500
ComponentButtonHeightMedium
```

## Building Tokens

Run the Style Dictionary build process:

```bash
# Build all token formats
pnpm tokens:build

# This generates:
# - CSS custom properties
# - JavaScript exports
# - TypeScript definitions
# - JSON format
# - Vanilla-Extract format
```

## Using Tokens

### In CSS
```css
.button {
  background-color: var(--color-core-primary-500);
  padding: var(--spacing-core-4);
  border-radius: var(--border-radius-md);
}
```

### In JavaScript/TypeScript
```typescript
import {
  ColorCorePrimary500,
  SpacingCore4,
  BorderRadiusMd
} from 'ui-kit/tokens';

const buttonStyles = {
  backgroundColor: ColorCorePrimary500,
  padding: SpacingCore4,
  borderRadius: BorderRadiusMd,
};
```

### In Vanilla-Extract
```typescript
import { style } from '@vanilla-extract/css';
import {
  ColorCorePrimary500,
  SpacingCore4
} from 'ui-kit/tokens/generated/vanilla-extract';

export const buttonStyle = style({
  backgroundColor: ColorCorePrimary500,
  padding: SpacingCore4,
});
```

## Token Reference

### Colors
- **Core Colors**: Base color palette with 50-950 scales
- **Semantic Colors**: Text, background, border, status colors
- **Component Colors**: Component-specific color variations

### Spacing
- **Scale**: 0-96 with consistent 4px increments
- **Usage**: Padding, margins, gaps, sizes

### Typography
- **Font Families**: Sans-serif and monospace stacks
- **Font Sizes**: xs (12px) to 9xl (128px)
- **Font Weights**: 100-900
- **Line Heights**: Relative values for different text types

### Borders
- **Radius**: none to full (pill shape)
- **Width**: 0px to 8px
- **Styles**: solid, dashed, dotted

### Shadows
- **Elevation**: xs to 2xl
- **Focus**: Ring shadows for interactive elements
- **Special**: Inner shadows for inputs

### Animations
- **Durations**: 150ms to 750ms
- **Easings**: Linear, ease variants, custom curves
- **Transitions**: Pre-configured for common properties

## Best Practices

1. **Use semantic tokens** when possible instead of core tokens
2. **Reference existing tokens** rather than hardcoding values
3. **Follow naming conventions** for consistency
4. **Document new tokens** with clear comments
5. **Test token changes** across all components
6. **Keep token files organized** by category and purpose

## Adding New Tokens

1. Add token to appropriate category file (core/semantic/component)
2. Follow the JSON structure with value, type, and comment
3. Run `pnpm tokens:build` to regenerate files
4. Update component implementations to use new tokens
5. Document usage examples

## Token Types

Style Dictionary supports these token types:
- `color`: Hex, RGB, HSL color values
- `dimension`: Size values (px, rem, em)
- `fontFamily`: Font stack arrays
- `fontWeight`: Numeric font weights
- `duration`: Time values for animations
- `cubicBezier`: Easing functions
- `boxShadow`: Shadow definitions
- `number`: Unitless numeric values