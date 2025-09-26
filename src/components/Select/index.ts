/**
 * Select Component
 *
 * A flexible select component built with Base UI for accessibility.
 * Supports different sizes, validation states, single and multiple selection.
 *
 * @example
 * ```tsx
 * import { Select } from 'ui-kit';
 *
 * const options = [
 *   { value: 'option1', label: 'Option 1' },
 *   { value: 'option2', label: 'Option 2' },
 *   { value: 'option3', label: 'Option 3' },
 * ];
 *
 * <Select
 *   label="Choose an option"
 *   options={options}
 *   placeholder="Select an option"
 *   helperText="Please select one option"
 * />
 * ```
 */

export { Select } from './Select';
export type { SelectProps, SelectSize, SelectValidationState, SelectOption } from './Select.types';