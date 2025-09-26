import type { ComponentProps } from 'react';

/**
 * Alert variant types
 */
export type AlertVariant = 'info' | 'success' | 'warning' | 'error';

/**
 * Alert size types
 */
export type AlertSize = 'small' | 'medium' | 'large';

/**
 * Alert component props
 */
export interface AlertProps extends Omit<ComponentProps<'div'>, 'title'> {
  /**
   * Visual variant of the alert
   * @default 'info'
   */
  readonly variant?: AlertVariant;

  /**
   * Size of the alert
   * @default 'medium'
   */
  readonly size?: AlertSize;

  /**
   * Whether the alert can be dismissed
   * @default false
   */
  readonly dismissible?: boolean;

  /**
   * Title of the alert
   */
  readonly title?: React.ReactNode;

  /**
   * Optional icon to display
   */
  readonly icon?: React.ReactNode;

  /**
   * Whether to show the default icon for the variant
   * @default true
   */
  readonly showIcon?: boolean;

  /**
   * Callback fired when the alert is dismissed
   */
  readonly onDismiss?: () => void;

  /**
   * Actions to display (typically buttons)
   */
  readonly actions?: React.ReactNode;
}