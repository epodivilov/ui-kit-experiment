/**
 * Theme System
 *
 * Themes are applied automatically via CSS using [data-theme] attribute.
 * Use ThemeProvider component to manage theme switching.
 *
 * @example
 * ```tsx
 * import { ThemeProvider } from 'ui-kit';
 * import 'ui-kit/styles'; // Import CSS with themes
 *
 * <ThemeProvider defaultTheme="light">
 *   <App />
 * </ThemeProvider>
 * ```
 */

// Import theme CSS to register global styles
import '../tokens/generated/light.css';
import '../tokens/generated/dark.css';
