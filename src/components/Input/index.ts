/**
 * Input Component
 *
 * A flexible input field component with support for validation states,
 * accessibility features, and theme integration.
 *
 * @example
 * ```tsx
 * import { Input } from 'ui-kit';
 *
 * <Input
 *   label="Email"
 *   placeholder="Enter your email"
 *   required
 *   validationState="error"
 *   error="Please enter a valid email address"
 * />
 * ```
 */

export { Input } from './Input';
export type { InputProps, ValidationState } from './Input.types';