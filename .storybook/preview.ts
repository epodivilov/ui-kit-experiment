import type { Preview, Decorator } from '@storybook/react';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { useEffect } from 'react';

// Import theme styles
import '../src/tokens/generated/light.css';
import '../src/tokens/generated/dark.css';

// Sync background with theme changes for both Stories and Docs
const withThemeBackground: Decorator = (Story, context) => {
  const themeName = context.globals.theme || 'light';
  const backgroundColor = themeName === 'dark' ? '#171717' : '#ffffff';

  useEffect(() => {
    // Update document background
    document.body.style.backgroundColor = backgroundColor;

    // Update all Storybook containers
    const selectors = ['#storybook-root', '.sb-show-main', '#storybook-docs', '.docs-story'];

    selectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      if (elements.length === 0) return;

      for (const element of elements) {
        (element as HTMLElement).style.backgroundColor = backgroundColor;
      }
    });
  }, [themeName, backgroundColor]);

  return Story();
};

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
      test: 'todo',
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

    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#171717' },
      ],
    },

    docs: {
      story: {
        inline: true,
      },
    },
  },

  decorators: [
    withThemeByDataAttribute({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
      attributeName: 'data-theme',
    }),
    withThemeBackground,
  ],
};

export default preview;
