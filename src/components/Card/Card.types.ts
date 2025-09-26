import type { ComponentProps } from 'react';

/**
 * Card variant types
 */
export type CardVariant = 'default' | 'elevated' | 'outlined' | 'filled';

/**
 * Card size types
 */
export type CardSize = 'small' | 'medium' | 'large';

/**
 * Card component props
 */
export interface CardProps extends ComponentProps<'div'> {
  /**
   * Visual variant of the card
   * @default 'default'
   */
  readonly variant?: CardVariant;

  /**
   * Size of the card
   * @default 'medium'
   */
  readonly size?: CardSize;

  /**
   * Whether the card is interactive (clickable)
   * @default false
   */
  readonly interactive?: boolean;

  /**
   * Whether the card is in a loading state
   * @default false
   */
  readonly loading?: boolean;

  /**
   * Whether the card is disabled
   * @default false
   */
  readonly disabled?: boolean;

  /**
   * Optional header content
   */
  readonly header?: React.ReactNode;

  /**
   * Optional footer content
   */
  readonly footer?: React.ReactNode;

  /**
   * Optional media content (image, video, etc.)
   */
  readonly media?: React.ReactNode;
}