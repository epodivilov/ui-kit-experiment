import { Input as BaseInput } from '@base-ui-components/react/input';
import { forwardRef } from 'react';

import * as styles from './Input.css';

import type { RecipeVariants } from '@vanilla-extract/recipes';
import type { InputHTMLAttributes } from 'react';

type InputVariants = NonNullable<RecipeVariants<typeof styles.input>>;

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'>,
    InputVariants {
  /**
   * Input name attribute
   */
  name?: string;

  /**
   * Input type attribute
   */
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'search' | 'number';

  /**
   * Input value (controlled)
   */
  value?: string;

  /**
   * Default value (uncontrolled)
   */
  defaultValue?: string;

  /**
   * Callback fired when value changes (Base UI event)
   * @param value - The new input value
   * @param eventDetails - Base UI event details with reason, event, and control methods
   */
  onValueChange?: BaseInput.Props['onValueChange'];

  /**
   * Placeholder text
   */
  placeholder?: string;

  /**
   * Whether the input is disabled
   */
  disabled?: boolean;

  /**
   * Whether the input is required
   */
  required?: boolean;

  /**
   * Whether the input is read-only
   */
  readOnly?: boolean;

  /**
   * aria-label for accessibility
   * @example
   * <Input aria-label="Email address" />
   */
  'aria-label'?: string;

  /**
   * aria-labelledby for accessibility
   * @example
   * <label id="email-label">Email</label>
   * <Input aria-labelledby="email-label" />
   */
  'aria-labelledby'?: string;

  /**
   * aria-describedby for accessibility
   * Use with error messages or helper text
   * @example
   * <Input aria-describedby="email-error" aria-invalid={true} variant="error" />
   * <span id="email-error">Please enter a valid email address</span>
   */
  'aria-describedby'?: string;

  /**
   * aria-invalid for error state
   * Indicates the input has a validation error
   * @example
   * <Input aria-invalid={true} variant="error" aria-describedby="email-error" />
   */
  'aria-invalid'?: boolean;
}

/**
 * Input Component
 *
 * Accessible input component with theme system integration.
 * Uses Base UI for accessibility and form integration.
 * No customization allowed - use as is with predefined variants.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ variant, type = 'text', ...props }, ref) => (
    <BaseInput
      ref={ref}
      type={type}
      className={styles.input({ variant })}
      {...props}
    />
  )
);

Input.displayName = 'Input';
