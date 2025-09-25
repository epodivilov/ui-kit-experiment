import type { ComponentProps } from 'react';

/**
 * Input component props
 */
export interface InputProps extends Omit<ComponentProps<'input'>, 'className' | 'size'> {
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
}