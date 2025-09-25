// Types entry point
// This file exports all TypeScript types and interfaces

// Common types
export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Theme types
export interface Theme {
  colors: Record<string, string>;
  spacing: Record<string, string>;
  typography: Record<string, any>;
}

// More types will be added as components are developed