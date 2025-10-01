### **Core Directive for LLM: The `components` Design Token Layer**

**Your Role:** You are an expert assistant for our design system. When you are asked to generate, modify, or analyze design tokens, you must strictly adhere to the following architectural rules for the `4-components` layer. This layer is the final link between the abstract design system and the developers building the UI.

**Core Concept:** The `components` layer answers the question **"What are the specific styles for the `Button` component and all its variants?"**. It acts as a "style API" for each component, mapping abstract semantic roles to concrete component properties.

**The Golden Rules:**

1.  **Reference `semantic` Tokens ONLY:** This is the most critical rule. A component token's `value` **must always** be a reference to a token from the `semantic` layer (e.g., `{semantic.color.background.primary.default}`). Direct references to `primitives` are strictly forbidden as this would break the theming mechanism.
2.  **Structure is `[component]-[_variant]-[property]-[state]`:** All tokens must follow this hierarchy to ensure predictability and alignment with modern styling tools.
3.  **Use `_base` for Shared Styles:** Properties that are common across all variants of a component must be placed in a special `_base` group to avoid duplication.
4.  **Always Use a Variant:** Every component **must** have at least one variant. If a component has only one style, it must be defined under the `default` variant.

---

### **Detailed Structure and Naming Convention**

#### 1. **The `_base` Group**

- **Purpose:** To define styles that are shared across all variants of a component. This follows the DRY (Don't Repeat Yourself) principle.
- **Naming:** The group must be named `_base`. The underscore `_` signals that this is a special, foundational group, not a public-facing variant.
- **Content:** Typically includes `border-radius`, base `typography`, and structural `padding`.

#### 2. **Variants (`primary`, `secondary`, `default`)**

- **Purpose:** To define the different visual styles of a component.
- **CRITICAL RULE:** Every component must have its styles organized into variants. If there's only one style (like for an `Input` field), it **must** be placed within a `default` variant.
- **Rationale:** This creates a consistent and predictable structure. If a new variant is added later (e.g., an `error` state for the `Input`), the existing structure does not need to be refactored.

#### 3. **Properties and States**

- **Structure:** The states (`default`, `hover`, `active`, `focus`, `disabled`) are nested inside the CSS properties (`background-color`, `foreground-color`).
- **Rationale:** This structure is more intuitive for developers, as it groups all states related to a single CSS property together. It aligns perfectly with the API of tools like Vanilla Extract's `recipes`.

#### 4. **`type` Attribute**

- **Purpose:** To provide metadata for tools like Tokens Studio and Style Dictionary, enabling them to correctly parse, validate, and transform the tokens.
- **CRITICAL RULE:** Every token with a `value` field **must** also have a corresponding `type` field (e.g., `"type": "color"`, `"type": "spacing"`).

---

### **Full Example: `components` Layer**

Here is a complete and correct example of the `components` layer, incorporating all the rules above.

```json
{
  "components": {
    "button": {
      "_base": {
        "border-radius": { "value": "{semantic.border-radius.full}", "type": "borderRadius" },
        "typography": { "value": "{semantic.typography.body.md}", "type": "typography" },
        "padding-inline": { "value": "{semantic.spacing.inline.md}", "type": "spacing" },
        "padding-block": { "value": "{semantic.spacing.block.sm}", "type": "spacing" }
      },
      "primary": {
        "background-color": {
          "default": { "value": "{semantic.color.background.primary.default}", "type": "color" },
          "hover": { "value": "{semantic.color.background.primary.hover}", "type": "color" },
          "active": { "value": "{semantic.color.background.primary.active}", "type": "color" }
        },
        "foreground-color": {
          "default": { "value": "{semantic.color.foreground.on-primary}", "type": "color" }
        },
        "border-color": {
          "focus": { "value": "{semantic.color.border.focus}", "type": "color" }
        }
      },
      "secondary": {
        "background-color": {
          "default": { "value": "{semantic.color.background.secondary.default}", "type": "color" },
          "hover": { "value": "{semantic.color.background.secondary.hover}", "type": "color" },
          "active": { "value": "{semantic.color.background.secondary.active}", "type": "color" }
        },
        "foreground-color": {
          "default": { "value": "{semantic.color.foreground.accent}", "type": "color" }
        },
        "border-color": {
          "default": { "value": "{semantic.color.border.default}", "type": "color" },
          "focus": { "value": "{semantic.color.border.focus}", "type": "color" }
        }
      },
      "destructive": {
        "background-color": {
          "default": { "value": "{semantic.color.background.danger.default}", "type": "color" },
          "hover": { "value": "{semantic.color.background.danger.hover}", "type": "color" },
          "active": { "value": "{semantic.color.background.danger.active}", "type": "color" }
        },
        "foreground-color": {
          "default": { "value": "{semantic.color.foreground.on-danger}", "type": "color" }
        }
      }
    },
    "input": {
      "_base": {
        "border-radius": { "value": "{semantic.border-radius.md}", "type": "borderRadius" },
        "typography": { "value": "{semantic.typography.body.md}", "type": "typography" },
        "padding-inline": { "value": "{semantic.spacing.inline.sm}", "type": "spacing" },
        "padding-block": { "value": "{semantic.spacing.block.sm}", "type": "spacing" }
      },
      "default": {
        "background-color": {
          "default": { "value": "{semantic.color.background.surface}", "type": "color" },
          "disabled": { "value": "{semantic.color.background.disabled}", "type": "color" }
        },
        "foreground-color": {
          "default": { "value": "{semantic.color.foreground.default}", "type": "color" },
          "placeholder": { "value": "{semantic.color.foreground.subtle}", "type": "color" },
          "disabled": { "value": "{semantic.color.foreground.disabled}", "type": "color" }
        },
        "border-color": {
          "default": { "value": "{semantic.color.border.default}", "type": "color" },
          "hover": { "value": "{semantic.color.foreground.accent}", "type": "color" },
          "focus": { "value": "{semantic.color.border.focus}", "type": "color" },
          "disabled": { "value": "{semantic.color.border.disabled}", "type": "color" }
        }
      }
    }
  }
}
```

### **Core Directive for LLM: The `components` Design Token Layer (Addendum)**

#### **Handling Component Parts and Sub-Components**

You must follow these rules when defining tokens for elements within a component (e.g., a placeholder, an icon).

**Rule 1: For Simple, Intrinsic Parts (e.g., `placeholder`)**

- If a part is a simple, built-in feature of a base component, create a new property within the component's variant using the part's name as a prefix.
- **Example:** To style the placeholder text of an `input`, add a `placeholder-foreground-color` property alongside the standard `foreground-color`.

  ```json
  "input": {
    "default": {
      "foreground-color": { /* For the input's text */ },
      "placeholder-foreground-color": { /* For the placeholder's text */ }
    }
  }
  ```

**Rule 2: For Complex or Optional Parts (e.g., icons, clear buttons)**

- If a part adds significant structural complexity or represents a distinct use case (like a search input), you **must** define it as a **new composite component**. Do not add it as a variant to the base component.
- **Rationale:** This follows the "Composition over Inheritance" principle, keeping base components simple and reusable.
- **Implementation:**
  1.  Create a new top-level entry in the `components` layer (e.g., `search-input`).
  2.  This new component should **reuse** tokens from the base component (e.g., `input`) for shared styles like `border-radius` or `typography` to maintain consistency.
  3.  Define new, specific tokens for the unique parts (e.g., an `icon` group to define its `foreground-color` and `size`).

  ```json
  "search-input": {
    "_base": {
      "typography": { "value": "{components.input._base.typography}", "type": "typography" }
    },
    "default": {
      "icon": {
        "foreground-color": { "value": "{semantic.color.foreground.subtle}", "type": "color" }
      }
    }
  }
  ```

---

### **Summary of Constraints for the `components` Layer**

- **DO** reference tokens from the `semantic` layer exclusively.
- **DO** structure tokens using the `[component]-[_variant]-[property]-[state]` hierarchy.
- **DO** use the `_base` group for styles shared across all variants of a component.
- **DO** ensure every component has at least a `default` variant.
- **DO** include the `"type"` attribute for every token that has a `"value"`.
- **DO NOT** reference `primitives` directly. This is the most common and critical error.
- **DO NOT** define states (`hover`, `focus`) at the same level as variants (`primary`). States are always nested within properties.
