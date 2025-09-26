import type { ComponentProps } from 'react';

/**
 * Select size types
 */
export type SelectSize = 'small' | 'medium' | 'large';

/**
 * Select validation state types
 */
export type SelectValidationState = 'default' | 'success' | 'warning' | 'error';

/**
 * Select option type
 */
export interface SelectOption {
  readonly value: string | number;
  readonly label: string;
  readonly disabled?: boolean;
}

/**
 * Select component props
 */
export interface SelectProps extends Omit<ComponentProps<'div'>, 'onChange' | 'defaultValue'> {
  /**
   * Size of the select
   * @default 'medium'
   */
  readonly size?: SelectSize;

  /**
   * Validation state of the select
   * @default 'default'
   */
  readonly validationState?: SelectValidationState;

  /**
   * Whether the select is disabled
   * @default false
   */
  readonly disabled?: boolean;

  /**
   * Whether the select is required
   * @default false
   */
  readonly required?: boolean;

  /**
   * Whether the select allows multiple selections
   * @default false
   */
  readonly multiple?: boolean;

  /**
   * Selected value(s)
   */
  readonly value?: string | number | (string | number)[];

  /**
   * Default selected value(s)
   */
  readonly defaultValue?: string | number | (string | number)[];

  /**
   * Options for the select
   */
  readonly options: SelectOption[];

  /**
   * Placeholder text
   */
  readonly placeholder?: string;

  /**
   * Label for the select
   */
  readonly label?: React.ReactNode;

  /**
   * Helper text displayed below the select
   */
  readonly helperText?: React.ReactNode;

  /**
   * Error text displayed when validation state is 'error'
   */
  readonly errorText?: React.ReactNode;

  /**
   * Callback fired when the value changes
   */
  readonly onValueChange?: (value: string | number | (string | number)[]) => void;

  /**
   * Callback fired when the open state changes
   */
  readonly onOpenChange?: (open: boolean) => void;
}