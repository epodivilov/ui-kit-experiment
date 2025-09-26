/**
 * Theme Provider
 *
 * React context provider for managing themes throughout the UI Kit.
 * Provides theme switching functionality and ensures all components
 * use the correct theme styles.
 */

import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';

import { darkTheme } from '../dark.css';
import { lightTheme } from '../light.css';

export type ThemeMode = 'light' | 'dark' | 'system';

export interface ThemeContextValue {
  /** Current theme mode */
  mode: ThemeMode;
  /** Resolved theme (actual theme being used, accounting for system preference) */
  resolvedTheme: 'light' | 'dark';
  /** Theme class name to apply to components */
  themeClass: string;
  /** Switch to a specific theme */
  setTheme: (theme: ThemeMode) => void;
  /** Toggle between light and dark themes */
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export interface ThemeProviderProps {
  /** Child components */
  children: React.ReactNode;
  /** Default theme mode */
  defaultTheme?: ThemeMode;
  /** Whether to sync with system theme preference */
  enableSystem?: boolean;
  /** Custom theme class names */
  themes?: {
    light: string;
    dark: string;
  };
}

/**
 * Theme Provider component that manages theme state and provides
 * theme switching functionality to child components.
 */
export function ThemeProvider({
  children,
  defaultTheme = 'system',
  enableSystem = true,
  themes = {
    light: lightTheme,
    dark: darkTheme,
  },
}: ThemeProviderProps) {
  const [mode, setMode] = useState<ThemeMode>(defaultTheme);

  // Detect system theme preference
  const getSystemTheme = useCallback((): 'light' | 'dark' => {
    if (typeof window === 'undefined') return 'light';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }, []);

  // Resolve the actual theme based on mode and system preference
  const resolvedTheme = useMemo(() => {
    if (mode === 'system' && enableSystem) {
      return getSystemTheme();
    }
    return mode === 'dark' ? 'dark' : 'light';
  }, [mode, enableSystem, getSystemTheme]);

  // Get the appropriate theme class
  const themeClass = useMemo(() => resolvedTheme === 'dark' ? themes.dark : themes.light, [resolvedTheme, themes]);

  // Set theme mode
  const setTheme = useCallback((theme: ThemeMode) => {
    setMode(theme);
  }, []);

  // Toggle between light and dark themes
  const toggleTheme = useCallback(() => {
    if (mode === 'system') {
      // If currently system, toggle to the opposite of current system theme
      const systemTheme = getSystemTheme();
      setMode(systemTheme === 'dark' ? 'light' : 'dark');
    } else {
      // Toggle between light and dark
      setMode(current => current === 'dark' ? 'light' : 'dark');
    }
  }, [mode, getSystemTheme]);

  // Listen to system theme changes
  React.useEffect(() => {
    if (!enableSystem) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      // Only update if we're in system mode
      if (mode === 'system') {
        // Force re-render by updating the mode state
        setMode('system');
      }
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
    // Legacy browsers
    else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }

    // Return empty cleanup function for browsers that don't support either method
    return () => {};
  }, [mode, enableSystem]);

  const contextValue = useMemo<ThemeContextValue>(() => ({
    mode,
    resolvedTheme,
    themeClass,
    setTheme,
    toggleTheme,
  }), [mode, resolvedTheme, themeClass, setTheme, toggleTheme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      <div className={themeClass}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

/**
 * Hook to access the theme context.
 * Must be used within a ThemeProvider.
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}