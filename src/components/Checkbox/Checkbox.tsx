import { Checkbox as BaseCheckbox } from '@base-ui-components/react/checkbox';
import { clsx } from 'clsx';
import { forwardRef, useEffect, useRef } from 'react';

import {
  checkboxRecipe,
  checkboxControl,
  checkboxIndicator,
  checkboxContent,
  checkboxLabel,
  checkboxHelperText,
  checkboxErrorText,
  checkmarkIcon,
  indeterminateIcon,
} from './Checkbox.css';

import type { CheckboxProps } from './Checkbox.types';

/**
 * Checkbox Component
 *
 * A checkbox component built with Base UI for accessibility and theme support.
 * Supports different sizes, validation states, and indeterminate state.
 */
export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  (
    {
      size = 'medium',
      validationState = 'default',
      disabled = false,
      required = false,
      indeterminate = false,
      label,
      helperText,
      errorText,
      onCheckedChange,
      className,
      checked,
      defaultChecked
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);

    // Handle indeterminate state
    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    const displayText = validationState === 'error' && errorText ? errorText : helperText;

    const handleCheckedChange = (newChecked: boolean) => {
      onCheckedChange?.(newChecked);
    };

    return (
      <label
        className={clsx(
          checkboxRecipe({ size }),
          className
        )}
        data-disabled={disabled}
      >
        <BaseCheckbox.Root
          ref={ref}
          checked={indeterminate ? false : checked ?? false}
          defaultChecked={defaultChecked ?? false}
          disabled={disabled}
          required={required}
          onCheckedChange={handleCheckedChange}
          className={checkboxControl({ size, validationState })}
          data-state={indeterminate ? 'indeterminate' : checked ? 'checked' : 'unchecked'}
        >
          <BaseCheckbox.Indicator className={checkboxIndicator}>
            {indeterminate ? (
              <div
                className={indeterminateIcon}
                data-state={indeterminate ? 'indeterminate' : 'unchecked'}
              />
            ) : (
              <svg
                width={size === 'small' ? '12' : size === 'medium' ? '14' : '16'}
                height={size === 'small' ? '12' : size === 'medium' ? '14' : '16'}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M13.5 4.5L6 12L2.5 8.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={checkmarkIcon}
                  data-state={checked ? 'checked' : 'unchecked'}
                />
              </svg>
            )}
          </BaseCheckbox.Indicator>
          {/* Hidden input for form integration */}
          <input
            ref={inputRef}
            type="checkbox"
            checked={checked}
            defaultChecked={defaultChecked}
            disabled={disabled}
            required={required}
            tabIndex={-1}
            style={{
              position: 'absolute',
              opacity: 0,
              pointerEvents: 'none',
              margin: 0,
              width: 0,
              height: 0,
            }}
            aria-hidden="true"
          />
        </BaseCheckbox.Root>

        {(label || displayText) && (
          <div className={checkboxContent}>
            {label && (
              <span className={checkboxLabel}>
                {label}
                {required && (
                  <span style={{ color: 'var(--color-error)' }} aria-label="required">
                    {' '}*
                  </span>
                )}
              </span>
            )}
            {displayText && (
              <span
                className={validationState === 'error' ? checkboxErrorText : checkboxHelperText}
              >
                {displayText}
              </span>
            )}
          </div>
        )}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';