import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import type { ButtonProps } from './Button.types';

const meta: Meta<ButtonProps> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible button component with multiple variants and sizes.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'ghost', 'danger'],
      description: 'Visual style variant of the button',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the button',
    },
    isLoading: {
      control: { type: 'boolean' },
      description: 'Shows loading spinner when true',
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Makes button take full width of container',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disables the button interaction',
    },
    children: {
      control: { type: 'text' },
      description: 'Button text content',
    },
  },
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'medium',
    isLoading: false,
    fullWidth: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<ButtonProps>;

/**
 * Default button with primary variant
 */
export const Default: Story = {};

/**
 * All button variants
 */
export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Button {...args} variant="primary">
        Primary
      </Button>
      <Button {...args} variant="secondary">
        Secondary
      </Button>
      <Button {...args} variant="ghost">
        Ghost
      </Button>
      <Button {...args} variant="danger">
        Danger
      </Button>
    </div>
  ),
};

/**
 * All button sizes
 */
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button {...args} size="small">
        Small
      </Button>
      <Button {...args} size="medium">
        Medium
      </Button>
      <Button {...args} size="large">
        Large
      </Button>
    </div>
  ),
};

/**
 * Button with icons
 */
export const WithIcons: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Button {...args} startIcon="📄">
        Start Icon
      </Button>
      <Button {...args} endIcon="→">
        End Icon
      </Button>
      <Button {...args} startIcon="📄" endIcon="→">
        Both Icons
      </Button>
    </div>
  ),
};

/**
 * Loading state
 */
export const Loading: Story = {
  args: {
    isLoading: true,
    children: 'Loading...',
  },
};

/**
 * Disabled state
 */
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};

/**
 * Full width button
 */
export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: 'Full Width Button',
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
    children: 'Playground Button',
    variant: 'primary',
    size: 'medium',
  },
};