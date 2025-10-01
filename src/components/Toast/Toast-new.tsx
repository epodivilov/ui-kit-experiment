/**
 * Toast Component (Token-Driven)
 */

import { clsx } from 'clsx';
import { forwardRef } from 'react';

import { toastRecipe, toastIcon, toastContent } from './Toast-new.css';

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'success' | 'error' | 'warning' | 'info';
  icon?: React.ReactNode;
}

export const ToastNew = forwardRef<HTMLDivElement, ToastProps>(
  ({ className, variant = 'default', icon, children, ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={clsx(toastRecipe({ variant }), className)}
      {...props}
    >
      {icon && <div className={toastIcon}>{icon}</div>}
      <div className={toastContent}>{children}</div>
    </div>
  )
);

ToastNew.displayName = 'ToastNew';
