import type { ComponentProps } from 'react';

/**
 * Validation state for the input
 */
export type ValidationState = 'default' | 'success' | 'warning' | 'error';

/**
 * Input component props
 */
export interface InputProps extends Omit<ComponentProps<'input'>, 'size'> {
  /**
   * Label text for the input
   */
  readonly label?: string;

  /**
   * Help text displayed below the input
   */
  readonly helpText?: string;

  /**
   * Error message to display (overrides helpText when present)
   */
  readonly error?: string;

  /**
   * Success message to display
   */
  readonly success?: string;

  /**
   * Warning message to display
   */
  readonly warning?: string;

  /**
   * Validation state of the input
   * @default 'default'
   */
  readonly validationState?: ValidationState;

  /**
   * Size variant of the input
   * @default 'medium'
   */
  readonly size?: 'small' | 'medium' | 'large';

  /**
   * Whether the input should take full width of its container
   * @default false
   */
  readonly fullWidth?: boolean;

  /**
   * Icon to display at the start of the input
   */
  readonly startIcon?: React.ReactNode;

  /**
   * Icon to display at the end of the input
   */
  readonly endIcon?: React.ReactNode;

  /**
   * Whether the field is required
   * @default false
   */
  readonly required?: boolean;

  /**
   * Whether to show a loading state
   * @default false
   */
  readonly loading?: boolean;
}