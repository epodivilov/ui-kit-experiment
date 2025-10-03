import { Checkbox as BaseCheckbox } from '@base-ui-components/react/checkbox';
import { forwardRef } from 'react';

import * as styles from './Checkbox.css';

import type { RecipeVariants } from '@vanilla-extract/recipes';

type CheckboxVariants = NonNullable<RecipeVariants<typeof styles.checkboxRoot>>;

export interface CheckboxProps extends CheckboxVariants {
  name?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  indeterminate?: boolean;
  value?: string;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  inputRef?: React.Ref<HTMLInputElement>;
}

/**
 * Checkbox Component
 *
 * Accessible checkbox component with theme system integration.
 * Uses Base UI for accessibility and keyboard navigation.
 * No customization allowed - use as is with predefined variants.
 */
export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ variant, ...props }, ref) => (
    <BaseCheckbox.Root
      ref={ref}
      className={styles.checkboxRoot({ variant })}
      {...props}
    >
      <BaseCheckbox.Indicator className={styles.checkboxIndicator}>
        <svg
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.checkmarkIcon}
          aria-hidden="true"
        >
          <path
            d="M13.3333 4L6 11.3333L2.66667 8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </BaseCheckbox.Indicator>
    </BaseCheckbox.Root>
  )
);

Checkbox.displayName = 'Checkbox';
