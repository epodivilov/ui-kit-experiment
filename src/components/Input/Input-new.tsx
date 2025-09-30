/**
 * Input Component (Token-Driven)
 */

import { forwardRef } from 'react';
import { clsx } from 'clsx';
import { inputRecipe } from './Input-new.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'error';
}

export const InputNew = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={clsx(inputRecipe({ variant }), className)}
        {...props}
      />
    );
  }
);

InputNew.displayName = 'InputNew';
