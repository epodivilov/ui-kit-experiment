import { Select as BaseSelect } from '@base-ui-components/react/select';
import { clsx } from 'clsx';
import { forwardRef } from 'react';

import {
  selectContainer,
  selectTrigger,
  selectValue,
  selectIcon,
  selectPopup,
  selectItem,
  selectItemText,
  selectItemIndicator,
  selectLabel,
  selectHelperText,
  selectErrorText,
  selectBackdrop,
} from './Select.css';

import type { SelectProps } from './Select.types';

/**
 * Select Component
 *
 * A select component built with Base UI for accessibility and theme support.
 * Supports different sizes, validation states, single and multiple selection.
 */
export const Select = forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      size = 'medium',
      validationState = 'default',
      disabled = false,
      required = false,
      multiple = false,
      value,
      defaultValue,
      options,
      placeholder = 'Select an option',
      label,
      helperText,
      errorText,
      onValueChange,
      onOpenChange,
      className,
      ...props
    },
    ref
  ) => {
    const displayText = validationState === 'error' && errorText ? errorText : helperText;

    // Transform options to the format expected by Base UI
    const items = options.reduce((acc, option) => {
      acc[option.value] = option.label;
      return acc;
    }, {} as Record<string | number, string>);

    const handleOpenChange = (open: boolean) => {
      onOpenChange?.(open);
    };

    // Build props object conditionally to handle undefined values
    const selectRootProps = {
      items,
      disabled,
      required,
      multiple,
      onOpenChange: handleOpenChange,
      ...(value !== undefined && { value }),
      ...(defaultValue !== undefined && { defaultValue }),
      ...(onValueChange && { onValueChange }),
    };

    return (
      <div
        ref={ref}
        className={clsx(selectContainer({ size }), className)}
        {...props}
      >
        {label && (
          <label className={selectLabel}>
            {label}
            {required && (
              <span style={{ color: 'var(--color-error)' }} aria-label="required">
                {' '}*
              </span>
            )}
          </label>
        )}

        <BaseSelect.Root {...selectRootProps}>
          <BaseSelect.Trigger
            className={selectTrigger({ size, validationState })}
            data-disabled={disabled}
          >
            <BaseSelect.Value className={selectValue}>
              {(selectedValue) => selectedValue || placeholder}
            </BaseSelect.Value>
            <BaseSelect.Icon className={selectIcon}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M4 6L8 10L12 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </BaseSelect.Icon>
          </BaseSelect.Trigger>

          <BaseSelect.Portal>
            <BaseSelect.Backdrop className={selectBackdrop} />
            <BaseSelect.Positioner>
              <BaseSelect.Popup className={selectPopup({ size })}>
                {options.map((option) => (
                  <BaseSelect.Item
                    key={option.value}
                    value={option.value}
                    disabled={option.disabled ?? false}
                    className={selectItem({ size })}
                  >
                    <BaseSelect.ItemText className={selectItemText}>
                      {option.label}
                    </BaseSelect.ItemText>
                    <BaseSelect.ItemIndicator className={selectItemIndicator}>
                      <svg
                        width="16"
                        height="16"
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
                        />
                      </svg>
                    </BaseSelect.ItemIndicator>
                  </BaseSelect.Item>
                ))}
              </BaseSelect.Popup>
            </BaseSelect.Positioner>
          </BaseSelect.Portal>
        </BaseSelect.Root>

        {displayText && (
          <span
            className={validationState === 'error' ? selectErrorText : selectHelperText}
          >
            {displayText}
          </span>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';