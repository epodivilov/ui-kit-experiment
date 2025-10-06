import {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  type ReactNode,
} from 'react';
import { lightTheme, darkTheme } from '../../tokens/generated';

/**
 * Available theme values
 */
export type Theme = 'light' | 'dark';

/**
 * Theme context value
 */
export interface ThemeContextValue {
  /**
   * Current active theme
   */
  theme: Theme;
  /**
   * Function to switch between themes
   */
  setTheme: (theme: Theme) => void;
}

/**
 * ThemeProvider Props
 */
export interface ThemeProviderProps {
  /**
   * Child components to be wrapped with theme context
   */
  children: ReactNode;
  /**
   * Initial theme to use
   * @default 'light'
   */
  defaultTheme?: Theme;
  /**
   * Storage key for persisting theme preference in localStorage
   * If not provided, theme will not be persisted
   */
  storageKey?: string;
}

/**
 * Theme Context
 */
const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

/**
 * ThemeProvider Component
 *
 * Manages theme state and applies theme-specific CSS classes.
 * Provides theme context to all child components.
 *
 * @example
 * ```tsx
 * <ThemeProvider defaultTheme="light" storageKey="app-theme">
 *   <App />
 * </ThemeProvider>
 * ```
 *
 * @example
 * ```tsx
 * // Use theme in components
 * const { theme, setTheme } = useTheme();
 *
 * <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
 *   Toggle Theme
 * </button>
 * ```
 */
export const ThemeProvider = ({
  children,
  defaultTheme = 'light',
  storageKey,
}: ThemeProviderProps) => {
  // Initialize theme from localStorage or use default
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === 'undefined') {
      return defaultTheme;
    }

    if (storageKey) {
      try {
        const stored = localStorage.getItem(storageKey);
        if (stored === 'light' || stored === 'dark') {
          return stored;
        }
      } catch (error) {
        console.warn('Failed to read theme from localStorage:', error);
      }
    }

    return defaultTheme;
  });

  // Persist theme to localStorage when it changes
  useEffect(() => {
    if (typeof window === 'undefined' || !storageKey) {
      return;
    }

    try {
      localStorage.setItem(storageKey, theme);
    } catch (error) {
      console.warn('Failed to save theme to localStorage:', error);
    }
  }, [theme, storageKey]);

  // Apply theme class to document root
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const root = document.documentElement;
    const themeClass = theme === 'light' ? lightTheme : darkTheme;

    // Remove previous theme classes
    root.classList.remove(lightTheme, darkTheme);
    // Add current theme class
    root.classList.add(themeClass);

    return () => {
      root.classList.remove(themeClass);
    };
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme: setThemeState,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.displayName = 'ThemeProvider';

/**
 * useTheme Hook
 *
 * Access theme context from any component within ThemeProvider.
 *
 * @throws Error if used outside of ThemeProvider
 *
 * @example
 * ```tsx
 * const { theme, setTheme } = useTheme();
 *
 * return (
 *   <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
 *     Current theme: {theme}
 *   </button>
 * );
 * ```
 */
export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
