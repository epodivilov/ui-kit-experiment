import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import type { InputProps } from './Input.types';

const meta: Meta<InputProps> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible input field component with support for labels, help text, error states, and icons.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the input field',
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Makes input take full width of container',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disables the input field',
    },
    label: {
      control: { type: 'text' },
      description: 'Label text for the input',
    },
    helpText: {
      control: { type: 'text' },
      description: 'Help text displayed below the input',
    },
    error: {
      control: { type: 'text' },
      description: 'Error message (overrides helpText)',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text',
    },
  },
  args: {
    placeholder: 'Enter text...',
    size: 'medium',
    fullWidth: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<InputProps>;

/**
 * Default input field
 */
export const Default: Story = {};

/**
 * Input with label
 */
export const WithLabel: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
  },
};

/**
 * Input with help text
 */
export const WithHelpText: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    helpText: 'Must be at least 8 characters long',
    type: 'password',
  },
};

/**
 * Input with error state
 */
export const WithError: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    error: 'Please enter a valid email address',
    value: 'invalid-email',
  },
};

/**
 * All input sizes
 */
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Input {...args} size="small" label="Small Input" />
      <Input {...args} size="medium" label="Medium Input" />
      <Input {...args} size="large" label="Large Input" />
    </div>
  ),
};

/**
 * Input with icons
 */
export const WithIcons: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Input
        {...args}
        label="Search"
        placeholder="Search..."
        startIcon="🔍"
      />
      <Input
        {...args}
        label="Email"
        placeholder="Enter your email"
        endIcon="📧"
      />
      <Input
        {...args}
        label="Password"
        placeholder="Enter password"
        type="password"
        endIcon="👁️"
      />
    </div>
  ),
};

/**
 * Disabled state
 */
export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    disabled: true,
    value: 'Cannot edit this',
  },
};

/**
 * Full width input
 */
export const FullWidth: Story = {
  args: {
    label: 'Full Width Input',
    placeholder: 'This input spans the full width',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};

/**
 * Interactive playground for testing different combinations
 */
export const Playground: Story = {
  args: {
    label: 'Playground Input',
    placeholder: 'Test different configurations',
  },
};