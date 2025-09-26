import type { ComponentProps } from 'react';

/**
 * Tooltip placement types
 */
export type TooltipPlacement =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-start'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-end'
  | 'left-start'
  | 'left-end'
  | 'right-start'
  | 'right-end';

/**
 * Tooltip size types
 */
export type TooltipSize = 'small' | 'medium' | 'large';

/**
 * Tooltip component props
 */
export interface TooltipProps extends Omit<ComponentProps<'div'>, 'content'> {
  /**
   * Content to display in the tooltip
   */
  readonly content: React.ReactNode;

  /**
   * Placement of the tooltip relative to its trigger
   * @default 'top'
   */
  readonly placement?: TooltipPlacement;

  /**
   * Size of the tooltip
   * @default 'medium'
   */
  readonly size?: TooltipSize;

  /**
   * Whether the tooltip is disabled
   * @default false
   */
  readonly disabled?: boolean;

  /**
   * Delay before showing the tooltip (in milliseconds)
   * @default 500
   */
  readonly delay?: number;

  /**
   * Whether to show an arrow pointing to the trigger
   * @default true
   */
  readonly showArrow?: boolean;

  /**
   * Maximum width of the tooltip
   * @default 300
   */
  readonly maxWidth?: number;

  /**
   * Whether the tooltip should be open by default
   * @default false
   */
  readonly defaultOpen?: boolean;

  /**
   * Whether the tooltip is open (controlled)
   */
  readonly open?: boolean;

  /**
   * Callback fired when the open state changes
   */
  readonly onOpenChange?: (open: boolean) => void;

  /**
   * Element that triggers the tooltip
   */
  readonly children: React.ReactElement;
}