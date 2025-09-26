import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { useTheme } from '../themes';

// Theme showcase component to test theme switching
const ThemeShowcaseComponent: React.FC = () => {
  const { mode, resolvedTheme, toggleTheme } = useTheme();

  return React.createElement(
    'div',
    {
      style: {
        padding: '2rem',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
        background: 'var(--color-semantic-background-default)',
        color: 'var(--color-semantic-text-default)',
        minHeight: '300px',
        borderRadius: '8px',
        border: '1px solid var(--color-semantic-border-default)',
      },
    },
    [
      React.createElement('h2', { key: 'title' }, 'Theme System Showcase'),
      React.createElement('div', { key: 'info', style: { marginBottom: '1rem' } }, [
        React.createElement('p', { key: 'mode' }, `Current mode: ${mode}`),
        React.createElement('p', { key: 'resolved' }, `Resolved theme: ${resolvedTheme}`),
      ]),
      React.createElement(
        'button',
        {
          key: 'toggle',
          onClick: toggleTheme,
          style: {
            padding: '0.5rem 1rem',
            background: 'var(--color-semantic-surface-emphasis)',
            color: 'var(--color-semantic-text-inverse)',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          },
        },
        'Toggle Theme'
      ),
      React.createElement('div', { key: 'samples', style: { marginTop: '2rem' } }, [
        React.createElement('h3', { key: 'colors-title' }, 'Color Samples'),
        React.createElement('div', { key: 'colors', style: { display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' } }, [
          React.createElement(
            'div',
            {
              key: 'primary',
              style: {
                width: '60px',
                height: '60px',
                background: 'var(--color-core-primary-500)',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '12px',
              },
            },
            'Primary'
          ),
          React.createElement(
            'div',
            {
              key: 'success',
              style: {
                width: '60px',
                height: '60px',
                background: 'var(--color-core-success-500)',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '12px',
              },
            },
            'Success'
          ),
          React.createElement(
            'div',
            {
              key: 'warning',
              style: {
                width: '60px',
                height: '60px',
                background: 'var(--color-core-warning-500)',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '12px',
              },
            },
            'Warning'
          ),
          React.createElement(
            'div',
            {
              key: 'error',
              style: {
                width: '60px',
                height: '60px',
                background: 'var(--color-core-error-500)',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '12px',
              },
            },
            'Error'
          ),
        ]),
      ]),
    ]
  );
};

const meta: Meta<typeof ThemeShowcaseComponent> = {
  title: 'Theme System/Theme Showcase',
  component: ThemeShowcaseComponent,
  parameters: {
    docs: {
      description: {
        component: 'A showcase of the theme system with theme switching capabilities. Use the theme toggle in the toolbar to switch between light and dark themes.',
      },
    },
  },
  argTypes: {},
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const LightTheme: Story = {
  parameters: {
    themes: {
      themeOverride: 'light',
    },
  },
};

export const DarkTheme: Story = {
  parameters: {
    themes: {
      themeOverride: 'dark',
    },
  },
};