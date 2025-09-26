/**
 * Alert Component
 *
 * A flexible alert component for displaying feedback messages.
 * Supports different variants, sizes, dismissible state, and custom actions.
 *
 * @example
 * ```tsx
 * import { Alert } from 'ui-kit';
 *
 * <Alert
 *   variant="success"
 *   title="Success!"
 *   dismissible
 *   onDismiss={() => console.log('Alert dismissed')}
 * >
 *   Your changes have been saved successfully.
 * </Alert>
 * ```
 */

export { Alert } from './Alert';
export type { AlertProps, AlertVariant, AlertSize } from './Alert.types';