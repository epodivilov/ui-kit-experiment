import { forwardRef, useId, useMemo } from 'react';
import { clsx } from 'clsx';
import type { InputProps, ValidationState } from './Input.types';
import {
  inputContainer,
  inputContainerFullWidth,
  inputLabel,
  inputWrapper,
  inputRecipe,
  inputStartIcon,
  inputEndIcon,
  inputSpinner,
  inputHelpText,
  inputSuccessText,
  inputWarningText,
  inputErrorText,
} from './Input.css';

/**
 * Input Component
 *
 * A flexible input field component with support for labels, validation states,
 * help text, icons, and loading states with full theme integration.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helpText,
      error,
      success,
      warning,
      validationState: providedValidationState,
      size = 'medium',
      fullWidth = false,
      startIcon,
      endIcon,
      required = false,
      loading = false,
      disabled,
      className,
      id: providedId,
      'aria-describedby': ariaDescribedBy,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const id = providedId || generatedId;
    const helpTextId = `${id}-help`;
    const successId = `${id}-success`;
    const warningId = `${id}-warning`;
    const errorId = `${id}-error`;

    // Determine validation state from props or explicit state
    const validationState: ValidationState = useMemo(() => {
      if (providedValidationState) return providedValidationState;
      if (error) return 'error';
      if (warning) return 'warning';
      if (success) return 'success';
      return 'default';
    }, [providedValidationState, error, warning, success]);

    // Determine which message to show (priority: error > warning > success > helpText)
    const messageInfo = useMemo(() => {
      if (error) {
        return { text: error, id: errorId, className: inputErrorText, role: 'alert' };
      }
      if (warning) {
        return { text: warning, id: warningId, className: inputWarningText, role: 'status' };
      }
      if (success) {
        return { text: success, id: successId, className: inputSuccessText, role: 'status' };
      }
      if (helpText) {
        return { text: helpText, id: helpTextId, className: inputHelpText };
      }
      return null;
    }, [error, warning, success, helpText, errorId, warningId, successId, helpTextId]);

    const describedBy = [
      ariaDescribedBy,
      messageInfo?.id,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={clsx(
        inputContainer,
        fullWidth && inputContainerFullWidth
      )}>
        {label && (
          <label
            htmlFor={id}
            className={inputLabel}
            data-required={required}
          >
            {label}
          </label>
        )}

        <div
          className={inputWrapper}
          data-loading={loading}
        >
          {startIcon && (
            <span className={inputStartIcon} aria-hidden="true">
              {startIcon}
            </span>
          )}

          <input
            ref={ref}
            id={id}
            className={clsx(
              inputRecipe({
                size,
                validationState,
                fullWidth,
                hasStartIcon: !!startIcon,
                hasEndIcon: !!endIcon || loading,
                loading,
              }),
              className
            )}
            disabled={disabled || loading}
            aria-invalid={validationState === 'error'}
            aria-describedby={describedBy || undefined}
            aria-required={required}
            data-loading={loading}
            {...props}
          />

          {loading && (
            <span className={inputSpinner} aria-label="Loading" />
          )}

          {!loading && endIcon && (
            <span className={inputEndIcon} aria-hidden="true">
              {endIcon}
            </span>
          )}
        </div>

        {messageInfo && (
          <span
            id={messageInfo.id}
            className={messageInfo.className}
            role={messageInfo.role}
          >
            {messageInfo.text}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';