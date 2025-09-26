import { clsx } from 'clsx';
import { forwardRef } from 'react';

// Base UI doesn't export a Button component, using HTML button element
import { buttonRecipe } from './Button.css';

import type { ButtonProps } from './Button.types';


/**
 * Button Component
 *
 * A flexible button component built on Base UI with theme system integration.
 * Supports different variants, sizes, and states with full accessibility support.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'medium',
      isLoading = false,
      fullWidth = false,
      startIcon,
      endIcon,
      disabled,
      className,
      ...props
    },
    ref
  ) => (
      <button
        ref={ref}
        type="button"
        className={clsx(
          buttonRecipe({
            variant,
            size,
            fullWidth,
            loading: isLoading,
          }),
          className
        )}
        disabled={disabled || isLoading}
        aria-disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <span className="button-spinner" aria-label="Loading" />
        ) : (
          <>
            {startIcon && (
              <span className="button-icon" aria-hidden="true">
                {startIcon}
              </span>
            )}
            <span className="button-text">{children}</span>
            {endIcon && (
              <span className="button-icon" aria-hidden="true">
                {endIcon}
              </span>
            )}
          </>
        )}
      </button>
    )
);

Button.displayName = 'Button';