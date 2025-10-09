import { Radio as BaseRadio } from '@base-ui-components/react/radio';
import { RadioGroup as BaseRadioGroup } from '@base-ui-components/react/radio-group';
import { forwardRef } from 'react';

import * as styles from './Radio.css';

import type { RecipeVariants } from '@vanilla-extract/recipes';

// Extract variant types from recipes
type RadioVariants = NonNullable<RecipeVariants<typeof styles.radioRoot>>;

/**
 * RadioGroup Props Interface
 *
 * Container for grouping radio buttons together.
 * NO className or style props - use predefined variants only.
 */
export interface RadioGroupProps {
  name?: string;
  value?: unknown;
  defaultValue?: unknown;
  onValueChange?: (
    value: unknown,
    eventDetails: {
      reason: 'none';
      event: Event;
      cancel: () => void;
      allowPropagation: () => void;
      isCanceled: boolean;
      isPropagationAllowed: boolean;
    }
  ) => void;
  disabled?: boolean;
  children: React.ReactNode;
  orientation?: 'vertical' | 'horizontal';
}

/**
 * Radio Props Interface
 *
 * Individual radio button component.
 * NO className or style props - use predefined variants only.
 */
export interface RadioProps extends RadioVariants {
  value: string;
  disabled?: boolean;
  inputRef?: React.Ref<HTMLInputElement>;
  children?: React.ReactNode;
}

/**
 * RadioIndicator Props Interface
 *
 * Visual indicator for the selected radio state.
 * NO className or style props - use predefined variants only.
 */
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface RadioIndicatorProps extends RadioVariants {
  // No additional props - inherits variant from context
}

/**
 * RadioGroup Component
 *
 * Groups radio buttons together with shared state management.
 * Uses Base UI RadioGroup for accessibility and keyboard navigation.
 * No customization allowed - use as is with predefined variants.
 */
export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ orientation, children, ...props }, ref) => (
    <BaseRadioGroup ref={ref} className={styles.radioGroup({ orientation })} {...props}>
      {children}
    </BaseRadioGroup>
  )
);

RadioGroup.displayName = 'RadioGroup';

/**
 * Radio Component
 *
 * Accessible radio button component with theme system integration.
 * Uses Base UI Radio for accessibility and keyboard navigation.
 * No customization allowed - use as is with predefined variants.
 */
export const Radio = forwardRef<HTMLButtonElement, RadioProps>(
  ({ variant, children, ...props }, ref) => (
    <BaseRadio.Root ref={ref} className={styles.radioRoot({ variant })} {...props}>
      {children}
    </BaseRadio.Root>
  )
);

Radio.displayName = 'Radio';

/**
 * RadioIndicator Component
 *
 * Visual indicator that displays when a radio button is selected.
 * Automatically shows/hides based on radio state.
 * No customization allowed - use as is with predefined variants.
 */
export const RadioIndicator = forwardRef<HTMLSpanElement, RadioIndicatorProps>(
  ({ variant }, ref) => (
    <BaseRadio.Indicator ref={ref} className={styles.radioIndicator({ variant })} />
  )
);

RadioIndicator.displayName = 'RadioIndicator';
