import type { ComponentProps } from 'react';

/**
 * Checkbox size types
 */
export type CheckboxSize = 'small' | 'medium' | 'large';

/**
 * Checkbox validation state types
 */
export type CheckboxValidationState = 'default' | 'success' | 'warning' | 'error';

/**
 * Base checkbox component props
 */
export interface CheckboxProps extends Omit<ComponentProps<'input'>, 'size'> {
  /**
   * Size of the checkbox
   * @default 'medium'
   */
  readonly size?: CheckboxSize;

  /**
   * Validation state of the checkbox
   * @default 'default'
   */
  readonly validationState?: CheckboxValidationState;

  /**
   * Whether the checkbox is disabled
   * @default false
   */
  readonly disabled?: boolean;

  /**
   * Whether the checkbox is required
   * @default false
   */
  readonly required?: boolean;

  /**
   * Whether the checkbox is in an indeterminate state
   * @default false
   */
  readonly indeterminate?: boolean;

  /**
   * Label text for the checkbox
   */
  readonly label?: React.ReactNode;

  /**
   * Helper text displayed below the checkbox
   */
  readonly helperText?: React.ReactNode;

  /**
   * Error text displayed when validation state is 'error'
   */
  readonly errorText?: React.ReactNode;

  /**
   * Callback fired when the checked state changes
   */
  readonly onCheckedChange?: (checked: boolean) => void;
}