import {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  type ReactNode,
} from 'react';

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
}

/**
 * Theme Context
 */
const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

/**
 * ThemeProvider Component
 *
 * Manages theme state and applies `data-theme` attribute to document root.
 * Provides theme context to all child components.
 *
 * @example
 * ```tsx
 * <ThemeProvider defaultTheme="light">
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
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  // Apply theme attribute to document root
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    document.documentElement.setAttribute('data-theme', theme);

    return () => {
      document.documentElement.removeAttribute('data-theme');
    };
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
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
