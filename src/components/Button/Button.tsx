import { forwardRef } from 'react';
import { clsx } from 'clsx';
import type { ButtonProps } from './Button.types';
import {
  buttonBase,
  buttonSizes,
  buttonVariants,
  buttonFullWidth,
  buttonLoading,
} from './Button.css';

/**
 * Button Component
 *
 * A flexible button component that supports different variants,
 * sizes, and states with full accessibility support.
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
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={clsx(
          buttonBase,
          buttonSizes[size],
          buttonVariants[variant],
          fullWidth && buttonFullWidth,
          isLoading && buttonLoading
        )}
        disabled={disabled || isLoading}
        aria-disabled={disabled || isLoading}
        {...props}
      >
        {!isLoading && startIcon && (
          <span aria-hidden="true">{startIcon}</span>
        )}
        <span>{children}</span>
        {!isLoading && endIcon && (
          <span aria-hidden="true">{endIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';