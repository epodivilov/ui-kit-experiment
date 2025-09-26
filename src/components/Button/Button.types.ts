import type { ComponentProps } from 'react';

/**
 * Button component props
 */
export interface ButtonProps extends ComponentProps<'button'> {
  /**
   * Visual style variant of the button
   * @default 'primary'
   */
  readonly variant?: 'primary' | 'secondary' | 'ghost' | 'danger';

  /**
   * Size of the button
   * @default 'medium'
   */
  readonly size?: 'small' | 'medium' | 'large';

  /**
   * Whether the button is in a loading state
   * @default false
   */
  readonly isLoading?: boolean;

  /**
   * Whether the button should take full width of its container
   * @default false
   */
  readonly fullWidth?: boolean;

  /**
   * Optional icon to display before the button text
   */
  readonly startIcon?: React.ReactNode;

  /**
   * Optional icon to display after the button text
   */
  readonly endIcon?: React.ReactNode;
}