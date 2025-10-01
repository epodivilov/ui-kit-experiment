/**
 * Button Component (Token-Driven)
 *
 * This component demonstrates the automatic styling pipeline:
 * Design Tokens → Style Dictionary → Component Tokens → Vanilla-Extract Recipes
 */

import { clsx } from 'clsx';
import { forwardRef } from 'react';

import { buttonRecipe, buttonIcon, buttonText } from './Button-new.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button variant from component tokens
   */
  variant?: 'primary' | 'secondary' | 'destructive';

  /**
   * Make button full width
   */
  fullWidth?: boolean;

  /**
   * Icon to display before text
   */
  startIcon?: React.ReactNode;

  /**
   * Icon to display after text
   */
  endIcon?: React.ReactNode;
}

/**
 * Button component built with Base UI and styled with Vanilla-Extract
 */
export const ButtonNew = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      fullWidth = false,
      startIcon,
      endIcon,
      className,
      disabled,
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
          fullWidth,
        }),
        className
      )}
      disabled={disabled}
      aria-disabled={disabled}
      {...props}
    >
      {startIcon && <span className={buttonIcon}>{startIcon}</span>}
      <span className={buttonText}>{children}</span>
      {endIcon && <span className={buttonIcon}>{endIcon}</span>}
    </button>
  )
);

ButtonNew.displayName = 'ButtonNew';
