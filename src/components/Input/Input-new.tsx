/**
 * Input Component (Token-Driven)
 */

import { clsx } from 'clsx';
import { forwardRef } from 'react';

import { inputRecipe } from './Input-new.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'error';
}

export const InputNew = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant = 'default', ...props }, ref) => (
    <input
      ref={ref}
      className={clsx(inputRecipe({ variant }), className)}
      {...props}
    />
  )
);

InputNew.displayName = 'InputNew';
