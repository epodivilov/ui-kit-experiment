import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider, useTheme } from './ThemeProvider';
import { Button } from '../Button';

/**
 * ThemeProvider manages theme state and applies theme-specific CSS classes.
 *
 * ## Features
 * - Light and dark theme support
 * - React Context API for theme state
 * - Optional localStorage persistence
 * - Automatic CSS class application
 * - SSR-safe implementation
 *
 * ## Usage
 * Wrap your application with ThemeProvider at the root level:
 *
 * ```tsx
 * <ThemeProvider defaultTheme="light" storageKey="app-theme">
 *   <App />
 * </ThemeProvider>
 * ```
 *
 * Access theme in any component using the useTheme hook:
 *
 * ```tsx
 * const { theme, setTheme } = useTheme();
 * ```
 */
const meta: Meta<typeof ThemeProvider> = {
  title: 'Components/ThemeProvider',
  component: ThemeProvider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ThemeProvider>;

/**
 * Demo component that uses the theme context
 */
const ThemeDemo = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div
      style={{
        padding: '2rem',
        borderRadius: '8px',
        backgroundColor: theme === 'light' ? '#f5f5f5' : '#262626',
        color: theme === 'light' ? '#171717' : '#fafafa',
        minWidth: '400px',
      }}
    >
      <h2 style={{ marginTop: 0 }}>Theme Demo</h2>
      <p>Current theme: <strong>{theme}</strong></p>

      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        <Button
          variant="primary"
          size="md"
          onClick={() => setTheme('light')}
          disabled={theme === 'light'}
        >
          Light Theme
        </Button>
        <Button
          variant="primary"
          size="md"
          onClick={() => setTheme('dark')}
          disabled={theme === 'dark'}
        >
          Dark Theme
        </Button>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3>Component Examples</h3>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1rem' }}>
          <Button variant="primary" size="sm">Primary</Button>
          <Button variant="secondary" size="sm">Secondary</Button>
          <Button variant="danger" size="sm">Danger</Button>
          <Button variant="success" size="sm">Success</Button>
          <Button variant="warning" size="sm">Warning</Button>
        </div>
      </div>
    </div>
  );
};

/**
 * Default story with light theme
 */
export const Default: Story = {
  args: {
    defaultTheme: 'light',
  },
  render: (args) => (
    <ThemeProvider {...args}>
      <ThemeDemo />
    </ThemeProvider>
  ),
};

/**
 * Theme provider with dark theme as default
 */
export const DarkTheme: Story = {
  args: {
    defaultTheme: 'dark',
  },
  render: (args) => (
    <ThemeProvider {...args}>
      <ThemeDemo />
    </ThemeProvider>
  ),
};

/**
 * Theme provider with localStorage persistence
 */
export const WithPersistence: Story = {
  args: {
    defaultTheme: 'light',
    storageKey: 'storybook-theme',
  },
  render: (args) => (
    <ThemeProvider {...args}>
      <ThemeDemo />
    </ThemeProvider>
  ),
};

/**
 * Multiple theme switches demonstration
 */
export const ThemeSwitching: Story = {
  args: {
    defaultTheme: 'light',
  },
  render: (args) => (
    <ThemeProvider {...args}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <ThemeDemo />
        <div style={{ textAlign: 'center', fontSize: '0.875rem', color: '#737373' }}>
          Try switching themes to see all components update automatically
        </div>
      </div>
    </ThemeProvider>
  ),
};
