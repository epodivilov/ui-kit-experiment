import { forwardRef, type ReactNode } from 'react';

import * as styles from './Button.css';

import type { RecipeVariants } from '@vanilla-extract/recipes';


type ButtonVariants = NonNullable<RecipeVariants<typeof styles.button>>;

export interface ButtonProps extends ButtonVariants {
  children: ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

/**
 * Button Component
 *
 * Simple button component with theme system integration.
 * No customization allowed - use as is with predefined variants.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, size, fullWidth, ...props }, ref) => (
    <button
      ref={ref}
      className={styles.button({ variant, size, fullWidth })}
      {...props}
    >
      {children}
    </button>
  )
);

Button.displayName = 'Button';
