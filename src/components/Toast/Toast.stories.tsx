import { Toast, ToastProvider, ToastRenderer, useToastManager } from './Toast';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
        <ToastRenderer />
      </ToastProvider>
    ),
  ],
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Demo component for triggering toasts
 */
const ToastDemo = ({ variant, title, description }: { variant?: 'default' | 'success' | 'error' | 'warning'; title: string; description?: string }) => {
  const { add } = useToastManager();

  const handleClick = () => {
    add({
      title,
      description,
      type: variant,
    });
  };

  return (
    <button
      onClick={handleClick}
      style={{
        padding: '0.75rem 1.5rem',
        border: '1px solid #ccc',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '14px',
        backgroundColor: '#fff',
        transition: 'all 150ms',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#f3f4f6';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#fff';
      }}
    >
      Show {variant || 'default'} toast
    </button>
  );
};

/**
 * Default variant - neutral background
 */
export const Default: Story = {
  render: () => (
    <ToastDemo
      variant="default"
      title="Notification"
      description="This is a default toast notification."
    />
  ),
};

/**
 * Success variant - for successful operations
 */
export const Success: Story = {
  render: () => (
    <ToastDemo
      variant="success"
      title="Success!"
      description="Your changes have been saved successfully."
    />
  ),
};

/**
 * Error variant - for error messages
 */
export const Error: Story = {
  render: () => (
    <ToastDemo
      variant="error"
      title="Error"
      description="Something went wrong. Please try again."
    />
  ),
};

/**
 * Warning variant - for warning messages
 */
export const Warning: Story = {
  render: () => (
    <ToastDemo
      variant="warning"
      title="Warning"
      description="Please review your changes before continuing."
    />
  ),
};

/**
 * Title only - minimal toast
 */
export const TitleOnly: Story = {
  render: () => (
    <ToastDemo
      variant="default"
      title="Simple notification"
    />
  ),
};

/**
 * Long content - test text wrapping
 */
export const LongContent: Story = {
  render: () => (
    <ToastDemo
      variant="default"
      title="Important Update Available"
      description="A new version of the application is available with important security updates and new features. Please update to continue using the application."
    />
  ),
};

/**
 * All variants demo
 */
export const AllVariants: Story = {
  render: () => {
    const { add } = useToastManager();

    const showAllToasts = () => {
      add({
        title: 'Default notification',
        description: 'This is a default toast.',
        type: 'default',
      });

      setTimeout(() => {
        add({
          title: 'Success!',
          description: 'Operation completed successfully.',
          type: 'success',
        });
      }, 200);

      setTimeout(() => {
        add({
          title: 'Warning',
          description: 'Please review your input.',
          type: 'warning',
        });
      }, 400);

      setTimeout(() => {
        add({
          title: 'Error',
          description: 'Something went wrong.',
          type: 'error',
        });
      }, 600);
    };

    return (
      <button
        onClick={showAllToasts}
        style={{
          padding: '0.75rem 1.5rem',
          border: '1px solid #ccc',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '14px',
          backgroundColor: '#fff',
        }}
      >
        Show all variants
      </button>
    );
  },
};

/**
 * Auto-dismiss demo
 */
export const AutoDismiss: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
        Toasts automatically dismiss after 5 seconds
      </p>
      <ToastDemo
        variant="success"
        title="Auto-dismiss enabled"
        description="This toast will disappear in 5 seconds."
      />
    </div>
  ),
};

/**
 * No auto-dismiss demo
 */
export const NoAutoDismiss: Story = {
  render: () => {
    const { add } = useToastManager();

    const showPersistentToast = () => {
      add({
        title: 'Important message',
        description: 'This toast will not auto-dismiss. Click the X to close.',
        type: 'default',
      });
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
          Note: Configure timeout via ToastProvider to disable auto-dismiss
        </p>
        <button
          onClick={showPersistentToast}
          style={{
            padding: '0.75rem 1.5rem',
            border: '1px solid #ccc',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '14px',
            backgroundColor: '#fff',
          }}
        >
          Show persistent toast
        </button>
      </div>
    );
  },
  decorators: [
    (Story) => (
      <ToastProvider timeout={0}>
        <Story />
        <ToastRenderer />
      </ToastProvider>
    ),
  ],
};

/**
 * Multiple toasts demo
 */
export const MultipleToasts: Story = {
  render: () => {
    const { add } = useToastManager();
    let counter = 0;

    const addMultipleToasts = () => {
      const types: Array<'default' | 'success' | 'warning' | 'error'> = ['default', 'success', 'warning', 'error'];
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          counter++;
          add({
            title: `Toast #${counter}`,
            description: `This is toast number ${counter}`,
            type: types[Math.floor(Math.random() * 4)],
          });
        }, i * 300);
      }
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
          Maximum 3 toasts displayed at once (configurable via limit prop)
        </p>
        <button
          onClick={addMultipleToasts}
          style={{
            padding: '0.75rem 1.5rem',
            border: '1px solid #ccc',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '14px',
            backgroundColor: '#fff',
          }}
        >
          Add 5 toasts
        </button>
      </div>
    );
  },
};

/**
 * Interactive demo with real-world use case
 */
export const InteractiveDemo: Story = {
  render: () => {
    const { add } = useToastManager();

    const handleSave = () => {
      add({
        title: 'Changes saved',
        description: 'Your profile has been updated successfully.',
        type: 'success',
      });
    };

    const handleDelete = () => {
      add({
        title: 'Item deleted',
        description: 'The item has been permanently removed.',
        type: 'default',
      });
    };

    const handleError = () => {
      add({
        title: 'Failed to upload',
        description: 'File size exceeds the maximum limit of 10MB.',
        type: 'error',
      });
    };

    const handleWarning = () => {
      add({
        title: 'Connection unstable',
        description: 'Your internet connection is slow. Some features may not work.',
        type: 'warning',
      });
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', minWidth: '300px' }}>
        <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 600 }}>
          Common Actions
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <button
            onClick={handleSave}
            style={{
              padding: '0.5rem 1rem',
              border: '1px solid #10b981',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px',
              backgroundColor: '#10b981',
              color: '#fff',
            }}
          >
            Save Changes
          </button>
          <button
            onClick={handleDelete}
            style={{
              padding: '0.5rem 1rem',
              border: '1px solid #ccc',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px',
              backgroundColor: '#fff',
            }}
          >
            Delete Item
          </button>
          <button
            onClick={handleError}
            style={{
              padding: '0.5rem 1rem',
              border: '1px solid #ef4444',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px',
              backgroundColor: '#ef4444',
              color: '#fff',
            }}
          >
            Upload File (Error)
          </button>
          <button
            onClick={handleWarning}
            style={{
              padding: '0.5rem 1rem',
              border: '1px solid #f59e0b',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px',
              backgroundColor: '#f59e0b',
              color: '#fff',
            }}
          >
            Check Connection
          </button>
        </div>
      </div>
    );
  },
};
