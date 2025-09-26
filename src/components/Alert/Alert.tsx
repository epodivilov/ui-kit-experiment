import { clsx } from 'clsx';
import { forwardRef } from 'react';

import {
  alertRecipe,
  alertIcon,
  alertContent,
  alertTitle,
  alertMessage,
  alertActions,
  alertDismissButton,
} from './Alert.css';

import type { AlertProps } from './Alert.types';

/**
 * Default icons for each alert variant
 */
const defaultIcons = {
  info: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
        fill="currentColor"
      />
    </svg>
  ),
  success: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        fill="currentColor"
      />
    </svg>
  ),
  warning: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
        fill="currentColor"
      />
    </svg>
  ),
  error: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
        fill="currentColor"
      />
    </svg>
  ),
};

/**
 * Alert Component
 *
 * A flexible alert component for displaying feedback messages.
 * Supports different variants, sizes, dismissible state, and custom actions.
 */
export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      variant = 'info',
      size = 'medium',
      dismissible = false,
      title,
      icon,
      showIcon = true,
      onDismiss,
      actions,
      children,
      className,
      role = 'alert',
      ...props
    },
    ref
  ) => {
    const displayIcon = icon || (showIcon ? defaultIcons[variant] : null);

    return (
      <div
        ref={ref}
        role={role}
        className={clsx(alertRecipe({ variant, size }), className)}
        {...props}
      >
        {displayIcon && (
          <div className={alertIcon({ variant, size })}>
            {displayIcon}
          </div>
        )}

        <div className={alertContent}>
          {title && (
            <div className={alertTitle({ size })}>
              {title}
            </div>
          )}

          {children && (
            <div className={alertMessage}>
              {children}
            </div>
          )}

          {actions && (
            <div className={alertActions}>
              {actions}
            </div>
          )}
        </div>

        {dismissible && onDismiss && (
          <button
            type="button"
            className={alertDismissButton({ variant, size })}
            onClick={onDismiss}
            aria-label="Dismiss alert"
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                fill="currentColor"
              />
            </svg>
          </button>
        )}
      </div>
    );
  }
);

Alert.displayName = 'Alert';