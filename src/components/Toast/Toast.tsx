import { Toast as BaseToast } from '@base-ui-components/react/toast';
import { forwardRef } from 'react';

import * as styles from './Toast.css';

import type { RecipeVariants } from '@vanilla-extract/recipes';
import type { ReactNode } from 'react';

type ToastVariants = NonNullable<RecipeVariants<typeof styles.toastRoot>>;

/**
 * Base Toast Object interface from Base UI
 */
export interface ToastObjectBase {
  /**
   * The unique identifier for the toast.
   */
  id: string;
  /**
   * The title of the toast.
   */
  title?: string;
  /**
   * The type of the toast. Used to conditionally style the toast.
   */
  type?: 'default' | 'success' | 'error' | 'warning';
  /**
   * The description of the toast.
   */
  description?: string;
  /**
   * The amount of time (in ms) before the toast is auto dismissed.
   */
  timeout?: number;
  /**
   * The priority of the toast.
   */
  priority?: 'low' | 'high';
  /**
   * Custom data for the toast.
   */
  data?: unknown;
  /**
   * Callback function to be called when the toast is closed.
   */
  onClose?: () => void;
}

/**
 * Toast Provider Props
 */
export interface ToastProviderProps {
  children: ReactNode;
  /**
   * Maximum number of toasts displayed simultaneously
   * @default 3
   */
  limit?: number;
  /**
   * Auto-dismiss time in milliseconds (0 prevents auto-dismiss)
   * @default 5000
   */
  timeout?: number;
}

/**
 * Toast Props
 */
export interface ToastProps extends ToastVariants {
  /**
   * Toast object from useToastManager
   */
  toast: ToastObjectBase;
  /**
   * Swipe directions for dismissal
   * @default ['down', 'right']
   */
  swipeDirection?: 'up' | 'down' | 'left' | 'right' | Array<'up' | 'down' | 'left' | 'right'>;
  /**
   * Whether to show a close button
   * @default true
   */
  showClose?: boolean;
  /**
   * aria-label for close button
   * @default "Close notification"
   */
  closeLabel?: string;
}

/**
 * Toast Provider Component
 *
 * Wraps the application to manage toast notifications.
 * Must wrap ToastViewport and any components using useToastManager.
 */
export const ToastProvider = ({ children, limit = 3, timeout = 5000 }: ToastProviderProps) => (
  <BaseToast.Provider limit={limit} timeout={timeout}>
    {children}
  </BaseToast.Provider>
);

ToastProvider.displayName = 'ToastProvider';

/**
 * Toast Viewport Props
 */
export interface ToastViewportProps {
  children?: ReactNode;
  /**
   * Position of the toast viewport
   * @default 'bottom-right'
   */
  position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
}

/**
 * Toast Viewport Component
 *
 * Container for toast notifications. Should be placed once in your app,
 * typically near the root component.
 */
export const ToastViewport = forwardRef<HTMLDivElement, ToastViewportProps>(({ position = 'bottom-right', ...props }, ref) => (
  <BaseToast.Viewport ref={ref} className={styles.toastViewport({ position })} {...props} />
));

ToastViewport.displayName = 'ToastViewport';

/**
 * Toast Component
 *
 * Accessible toast notification component with theme system integration.
 * Uses Base UI for accessibility and keyboard navigation.
 * No customization allowed - use as is with predefined variants.
 *
 * @example
 * ```tsx
 * const { addToast } = BaseToast.useToastManager();
 *
 * <button onClick={() => addToast({ title: 'Success!', description: 'Your changes have been saved.' })}>
 *   Show Toast
 * </button>
 *
 * <ToastRenderer />
 * ```
 */
export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  ({ toast, variant, swipeDirection = ['down', 'right'], showClose = true, closeLabel = 'Close notification', ...props }, ref) => (
    <BaseToast.Root
      ref={ref}
      toast={toast}
      swipeDirection={swipeDirection}
      className={styles.toastRoot({ variant })}
      {...props}
    >
      <div className={styles.toastContent}>
        {toast.title && (
          <BaseToast.Title className={styles.toastTitle}>
            {toast.title}
          </BaseToast.Title>
        )}
        {toast.description && (
          <BaseToast.Description className={styles.toastDescription}>
            {toast.description}
          </BaseToast.Description>
        )}
      </div>
      {showClose && (
        <BaseToast.Close className={styles.toastClose} aria-label={closeLabel}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M12 4L4 12M4 4L12 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </BaseToast.Close>
      )}
    </BaseToast.Root>
  )
);

Toast.displayName = 'Toast';

/**
 * Toast Renderer Props
 */
export interface ToastRendererProps {
  /**
   * Position of the toast viewport
   * @default 'bottom-right'
   */
  position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
}

/**
 * Toast Renderer Component
 *
 * Renders all active toasts. Use this component once in your app,
 * typically near the root component inside ToastProvider.
 *
 * @example
 * ```tsx
 * <ToastProvider>
 *   <App />
 *   <ToastRenderer position="top-right" />
 * </ToastProvider>
 * ```
 */
export const ToastRenderer = ({ position = 'bottom-right' }: ToastRendererProps = {}) => {
  const { toasts } = BaseToast.useToastManager();

  return (
    <ToastViewport position={position}>
      {toasts.map((toast) => {
        const variantMap: Record<string, 'default' | 'success' | 'error' | 'warning'> = {
          default: 'default',
          success: 'success',
          error: 'error',
          warning: 'warning',
        };
        const variant = variantMap[toast.type || 'default'] || 'default';
        return <Toast key={toast.id} toast={toast as ToastObjectBase} variant={variant} />;
      })}
    </ToastViewport>
  );
};

ToastRenderer.displayName = 'ToastRenderer';

/**
 * Re-export Base UI hook for convenience
 */
export const useToastManager = BaseToast.useToastManager;
