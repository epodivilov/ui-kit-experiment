// Types entry point
// This file exports all TypeScript types and interfaces

import type { ReactNode } from 'react';

// Common component props
export interface ComponentProps {
  readonly className?: string;
  readonly children?: ReactNode;
}

// Base component props with HTML attributes
export interface BaseComponentProps<T = HTMLElement> extends ComponentProps {
  readonly id?: string;
  readonly 'data-testid'?: string;
  readonly 'aria-label'?: string;
  readonly 'aria-labelledby'?: string;
  readonly 'aria-describedby'?: string;
  readonly role?: string;
  readonly tabIndex?: number;
  readonly onClick?: (event: React.MouseEvent<T>) => void;
  readonly onKeyDown?: (event: React.KeyboardEvent<T>) => void;
  readonly onFocus?: (event: React.FocusEvent<T>) => void;
  readonly onBlur?: (event: React.FocusEvent<T>) => void;
}

// Theme system types
export interface ColorTokens {
  readonly primary: string;
  readonly secondary: string;
  readonly success: string;
  readonly warning: string;
  readonly danger: string;
  readonly info: string;
  readonly background: string;
  readonly surface: string;
  readonly text: string;
  readonly border: string;
}

export interface SpacingTokens {
  readonly xs: string;
  readonly sm: string;
  readonly md: string;
  readonly lg: string;
  readonly xl: string;
  readonly xxl: string;
}

export interface TypographyTokens {
  readonly fontFamily: {
    readonly sans: string;
    readonly serif: string;
    readonly mono: string;
  };
  readonly fontSize: {
    readonly xs: string;
    readonly sm: string;
    readonly base: string;
    readonly lg: string;
    readonly xl: string;
    readonly xxl: string;
  };
  readonly fontWeight: {
    readonly light: number;
    readonly normal: number;
    readonly medium: number;
    readonly semibold: number;
    readonly bold: number;
  };
  readonly lineHeight: {
    readonly tight: number;
    readonly normal: number;
    readonly relaxed: number;
  };
}

export interface Theme {
  readonly colors: ColorTokens;
  readonly spacing: SpacingTokens;
  readonly typography: TypographyTokens;
  readonly breakpoints: {
    readonly sm: string;
    readonly md: string;
    readonly lg: string;
    readonly xl: string;
  };
  readonly borderRadius: {
    readonly none: string;
    readonly sm: string;
    readonly md: string;
    readonly lg: string;
    readonly full: string;
  };
  readonly shadows: {
    readonly sm: string;
    readonly md: string;
    readonly lg: string;
    readonly xl: string;
  };
}

// Component variant types
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
export type Color = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';

// Utility types
export type As<T = any> = React.ElementType<T>;
export type PropsOf<T extends As> = React.ComponentPropsWithoutRef<T>;

// Polymorphic component props
export type PolymorphicProps<T extends As = 'div'> = {
  readonly as?: T;
} & PropsOf<T> & ComponentProps;

// More types will be added as components are developed