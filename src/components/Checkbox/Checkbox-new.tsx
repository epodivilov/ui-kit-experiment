/**
 * Checkbox Component (Token-Driven)
 */

import { clsx } from 'clsx';
import { forwardRef } from 'react';

import { checkboxRecipe } from './Checkbox-new.css';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'error';
}

export const CheckboxNew = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, variant = 'default', ...props }, ref) => (
    <input
      ref={ref}
      type="checkbox"
      className={clsx(checkboxRecipe({ variant }), className)}
      {...props}
    />
  )
);

CheckboxNew.displayName = 'CheckboxNew';
