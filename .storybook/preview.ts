import type { Preview } from "@storybook/react-vite";
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { ThemeProvider, lightTheme, darkTheme } from '../src/themes';
import '../src/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },

    // Viewport addon configuration
    viewport: {
      viewports: {
        small: {
          name: 'Small',
          styles: { width: '375px', height: '667px' },
        },
        medium: {
          name: 'Medium',
          styles: { width: '768px', height: '1024px' },
        },
        large: {
          name: 'Large',
          styles: { width: '1024px', height: '768px' },
        },
        xlarge: {
          name: 'Extra Large',
          styles: { width: '1440px', height: '900px' },
        },
      },
    },

    // Background colors that work with both themes
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#0f0f23' },
        { name: 'gray', value: '#f6f9fc' },
      ],
    },
  },

  decorators: [
    withThemeFromJSXProvider({
      themes: {
        light: lightTheme,
        dark: darkTheme,
      },
      defaultTheme: 'light',
      Provider: ThemeProvider,
      GlobalStyles: () => null, // We handle global styles through our theme system
    }),
  ],
};

export default preview;
