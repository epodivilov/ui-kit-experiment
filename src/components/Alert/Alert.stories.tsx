import React from 'react';


import { Alert } from './Alert';

import type { AlertProps } from './Alert.types';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Feedback/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A flexible alert component for displaying feedback messages. Supports different variants, sizes, dismissible state, and custom actions.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'error'],
      description: 'Visual variant of the alert',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the alert',
    },
    dismissible: {
      control: { type: 'boolean' },
      description: 'Whether the alert can be dismissed',
    },
    showIcon: {
      control: { type: 'boolean' },
      description: 'Whether to show the default icon for the variant',
    },
    title: {
      control: { type: 'text' },
      description: 'Title of the alert',
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<AlertProps>;

/**
 * Default alert with message
 */
export const Default: Story = {
  args: {
    title: 'Information',
    children: 'This is an informational alert with some additional details.',
  },
};

/**
 * Different alert variants
 */
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
      <Alert variant="info" title="Information">
        This is an informational alert with some additional details.
      </Alert>
      <Alert variant="success" title="Success">
        Your action was completed successfully.
      </Alert>
      <Alert variant="warning" title="Warning">
        Please review this information carefully.
      </Alert>
      <Alert variant="error" title="Error">
        An error occurred while processing your request.
      </Alert>
    </div>
  ),
};

/**
 * Different alert sizes
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
      <Alert size="small" title="Small Alert">
        This is a small alert message.
      </Alert>
      <Alert size="medium" title="Medium Alert">
        This is a medium alert message.
      </Alert>
      <Alert size="large" title="Large Alert">
        This is a large alert message.
      </Alert>
    </div>
  ),
};

/**
 * Alert without icon
 */
export const WithoutIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
      <Alert variant="info" title="Information" showIcon={false}>
        This alert doesn't have an icon.
      </Alert>
      <Alert variant="success" title="Success" showIcon={false}>
        This alert doesn't have an icon.
      </Alert>
    </div>
  ),
};

/**
 * Alert with custom icon
 */
export const WithCustomIcon: Story = {
  args: {
    variant: 'info',
    title: 'Custom Icon',
    icon: (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          fill="currentColor"
        />
      </svg>
    ),
    children: 'This alert uses a custom icon instead of the default one.',
  },
};

/**
 * Dismissible alerts
 */
export const Dismissible: Story = {
  render: () => {
    const [alerts, setAlerts] = React.useState([
      { id: 1, variant: 'info' as const, title: 'Info Alert', message: 'This alert can be dismissed.' },
      { id: 2, variant: 'success' as const, title: 'Success Alert', message: 'This alert can be dismissed.' },
      { id: 3, variant: 'warning' as const, title: 'Warning Alert', message: 'This alert can be dismissed.' },
      { id: 4, variant: 'error' as const, title: 'Error Alert', message: 'This alert can be dismissed.' },
    ]);

    const dismissAlert = (id: number) => {
      setAlerts(alerts.filter(alert => alert.id !== id));
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
        {alerts.map(alert => (
          <Alert
            key={alert.id}
            variant={alert.variant}
            title={alert.title}
            dismissible
            onDismiss={() => dismissAlert(alert.id)}
          >
            {alert.message}
          </Alert>
        ))}
        {alerts.length === 0 && (
          <p>All alerts have been dismissed. Refresh the story to see them again.</p>
        )}
      </div>
    );
  },
};

/**
 * Alert with actions
 */
export const WithActions: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
      <Alert
        variant="warning"
        title="Confirm Action"
        actions={
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              style={{
                padding: '4px 12px',
                border: '1px solid #d97706',
                backgroundColor: 'transparent',
                color: '#d97706',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Cancel
            </button>
            <button
              style={{
                padding: '4px 12px',
                border: '1px solid #d97706',
                backgroundColor: '#d97706',
                color: 'white',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Confirm
            </button>
          </div>
        }
      >
        Are you sure you want to delete this item? This action cannot be undone.
      </Alert>

      <Alert
        variant="info"
        title="Update Available"
        actions={
          <button
            style={{
              padding: '4px 12px',
              border: '1px solid #2563eb',
              backgroundColor: '#2563eb',
              color: 'white',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Update Now
          </button>
        }
      >
        A new version of the application is available.
      </Alert>
    </div>
  ),
};

/**
 * Alert without title (message only)
 */
export const MessageOnly: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
      <Alert variant="success">
        Your changes have been saved successfully.
      </Alert>
      <Alert variant="error">
        Please check your internet connection and try again.
      </Alert>
    </div>
  ),
};

/**
 * Alert with long content
 */
export const LongContent: Story = {
  args: {
    variant: 'warning',
    title: 'Important Notice',
    dismissible: true,
    children: (
      <div>
        <p>This is a longer alert message that demonstrates how the component handles multiple paragraphs and longer content. The alert should expand to accommodate the content while maintaining proper spacing and readability.</p>
        <p>You can include multiple paragraphs, lists, or other content elements within the alert. The layout will adjust accordingly to ensure everything is properly displayed.</p>
        <ul style={{ margin: '8px 0', paddingLeft: '20px' }}>
          <li>First important point</li>
          <li>Second important point</li>
          <li>Third important point</li>
        </ul>
      </div>
    ),
  },
};