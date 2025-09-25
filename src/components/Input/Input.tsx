import { forwardRef, useId } from 'react';
import { clsx } from 'clsx';
import type { InputProps } from './Input.types';
import {
  inputContainer,
  inputLabel,
  inputWrapper,
  inputBase,
  inputSizes,
  inputWithStartIcon,
  inputWithEndIcon,
  inputStartIcon,
  inputEndIcon,
  inputError,
  inputHelpText,
  inputErrorText,
  inputFullWidth,
} from './Input.css';

/**
 * Input Component
 *
 * A flexible input field component with support for labels,
 * help text, error states, and icons.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helpText,
      error,
      size = 'medium',
      fullWidth = false,
      startIcon,
      endIcon,
      disabled,
      id: providedId,
      'aria-describedby': ariaDescribedBy,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const id = providedId || generatedId;
    const helpTextId = `${id}-help`;
    const errorId = `${id}-error`;

    const describedBy = [
      ariaDescribedBy,
      error ? errorId : helpText ? helpTextId : undefined,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={clsx(inputContainer, fullWidth && inputFullWidth)}>
        {label && (
          <label htmlFor={id} className={inputLabel}>
            {label}
          </label>
        )}

        <div className={inputWrapper}>
          {startIcon && (
            <span className={inputStartIcon} aria-hidden="true">
              {startIcon}
            </span>
          )}

          <input
            ref={ref}
            id={id}
            className={clsx(
              inputBase,
              inputSizes[size],
              startIcon && inputWithStartIcon[size],
              endIcon && inputWithEndIcon[size],
              error && inputError
            )}
            disabled={disabled}
            aria-invalid={!!error}
            aria-describedby={describedBy || undefined}
            {...props}
          />

          {endIcon && (
            <span className={inputEndIcon} aria-hidden="true">
              {endIcon}
            </span>
          )}
        </div>

        {error ? (
          <span id={errorId} className={inputErrorText} role="alert">
            {error}
          </span>
        ) : helpText ? (
          <span id={helpTextId} className={inputHelpText}>
            {helpText}
          </span>
        ) : null}
      </div>
    );
  }
);

Input.displayName = 'Input';