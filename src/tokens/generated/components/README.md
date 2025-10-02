# Auto-Generated Component Styles

This directory contains automatically generated Vanilla Extract styles from component design tokens.

## ⚠️ DO NOT EDIT MANUALLY

All files in this directory are auto-generated from:
- Source: `tokens/4-components/*.json`
- Generator: `generate-component-styles.js`

Any manual edits will be overwritten on the next generation.

## Usage

Import generated styles into your component:

```typescript
import { recipe } from '@vanilla-extract/recipes';
import { buttonBaseStyles, buttonVariants } from '../../tokens/generated/components/button.generated.css';
import { tokens } from '../../tokens/generated';

export const button = recipe({
  base: {
    // CSS implementation details
    all: 'unset',
    display: 'inline-flex',
    // ...

    // From generated tokens ✨
    ...buttonBaseStyles,

    // Manual additions
    ':focus-visible': {
      outline: `2px solid ${tokens.border.focus}`,
    },
  },

  // Use generated variants ✨
  variants: buttonVariants,

  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
});
```

## Regeneration

To regenerate styles after updating component tokens:

```bash
pnpm components:generate
```

This command:
1. Reads all JSON files from `tokens/4-components/`
2. Generates `.generated.css.ts` files in this directory
3. Each component gets its own file (e.g., `button.generated.css.ts`)

## What Gets Generated

### Base Styles

From token `base` section → `{component}BaseStyles` export

```json
{
  "button": {
    "base": {
      "border-radius": { "value": "{semantic.border-radius.md}", "type": "borderRadius" }
    }
  }
}
```

Generates:

```typescript
export const buttonBaseStyles = {
  borderRadius: tokens['border-radius'].md
};
```

### Variants

From token `variants` section → `{component}Variants` export

```json
{
  "button": {
    "variants": {
      "size": {
        "small": {
          "padding-block": { "value": "{semantic.spacing.xs}", "type": "spacing" }
        }
      }
    }
  }
}
```

Generates:

```typescript
export const buttonVariants = {
  size: {
    small: {
      paddingBlock: tokens.spacing.xs
    }
  }
};
```

### Interactive States

Interactive states are automatically converted to selectors:

```json
"background-color": {
  "default": { "value": "..." },
  "hover": { "value": "..." },
  "disabled": { "value": "..." }
}
```

Generates:

```typescript
{
  backgroundColor: '...',
  selectors: {
    '&:hover:not(:disabled)': {
      backgroundColor: '...'
    },
    '&:disabled': {
      backgroundColor: '...'
    }
  }
}
```

## Integration with Build Pipeline

The generation can be integrated into the build process:

```json
{
  "scripts": {
    "tokens:build": "node build-tokens.js",
    "components:generate": "node generate-component-styles.js",
    "prebuild": "pnpm tokens:build && pnpm components:generate"
  }
}
```

## File Naming

Generated files follow the pattern: `{component-name}.generated.css.ts`

- `button.json` → `button.generated.css.ts`
- `input.json` → `input.generated.css.ts`
- `badge.json` → `badge.generated.css.ts`

## See Also

- [Component Tokens Architecture](../../../../tokens/4-components/ARCHITECTURE.md)
- [Component Tokens Proposal v2](../../../../tokens/4-components/PROPOSAL-V2.md)
