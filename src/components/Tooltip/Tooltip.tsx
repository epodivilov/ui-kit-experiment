import { clsx } from 'clsx';
import { forwardRef } from 'react';
import { Tooltip as BaseTooltip } from '@base-ui-components/react/tooltip';

import {
  tooltipPopup,
  tooltipArrow,
  tooltipPositioner,
} from './Tooltip.css';

import type { TooltipProps } from './Tooltip.types';

/**
 * Tooltip Component
 *
 * A tooltip component built with Base UI for accessibility and positioning.
 * Displays helpful information when hovering over or focusing on elements.
 */
export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      content,
      placement = 'top',
      size = 'medium',
      disabled = false,
      delay = 500,
      showArrow = true,
      maxWidth = 300,
      defaultOpen = false,
      open,
      onOpenChange,
      children,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const handleOpenChange = (newOpen: boolean) => {
      onOpenChange?.(newOpen);
    };

    // Build props object conditionally to handle undefined values
    const tooltipRootProps = {
      disabled,
      delay,
      defaultOpen,
      onOpenChange: handleOpenChange,
      ...(open !== undefined && { open }),
    };

    return (
      <BaseTooltip.Root {...tooltipRootProps}>
        <BaseTooltip.Trigger>
          {children}
        </BaseTooltip.Trigger>

        <BaseTooltip.Portal>
          <BaseTooltip.Positioner
            side={placement.split('-')[0] as any}
            align={placement.includes('-') ? (placement.split('-')[1] as any) : 'center'}
            className={tooltipPositioner}
          >
            <BaseTooltip.Popup
              ref={ref}
              className={clsx(
                tooltipPopup({ size }),
                className
              )}
              style={{
                maxWidth: `${maxWidth}px`,
                ...style,
              }}
              {...props}
            >
              {content}

              {showArrow && (
                <BaseTooltip.Arrow className={tooltipArrow}>
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 0L4 4L8 0H0Z"
                      fill="currentColor"
                    />
                  </svg>
                </BaseTooltip.Arrow>
              )}
            </BaseTooltip.Popup>
          </BaseTooltip.Positioner>
        </BaseTooltip.Portal>
      </BaseTooltip.Root>
    );
  }
);

Tooltip.displayName = 'Tooltip';