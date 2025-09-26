import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './Checkbox';

import type { CheckboxProps } from './Checkbox.types';

const meta = {
  title: 'Components/Form/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A flexible checkbox component built with Base UI for accessibility. Supports different sizes, validation states, and indeterminate state.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the checkbox',
    },
    validationState: {
      control: { type: 'select' },
      options: ['default', 'success', 'warning', 'error'],
      description: 'Validation state of the checkbox',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the checkbox is disabled',
    },
    required: {
      control: { type: 'boolean' },
      description: 'Whether the checkbox is required',
    },
    indeterminate: {
      control: { type: 'boolean' },
      description: 'Whether the checkbox is in an indeterminate state',
    },
    label: {
      control: { type: 'text' },
      description: 'Label text for the checkbox',
    },
    helperText: {
      control: { type: 'text' },
      description: 'Helper text displayed below the checkbox',
    },
    errorText: {
      control: { type: 'text' },
      description: 'Error text displayed when validation state is error',
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<CheckboxProps>;

/**
 * Default checkbox with label
 */
export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
  },
};

/**
 * Different sizes of checkboxes
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Checkbox size="small" label="Small checkbox" />
      <Checkbox size="medium" label="Medium checkbox" />
      <Checkbox size="large" label="Large checkbox" />
    </div>
  ),
};

/**
 * Different validation states
 */
export const ValidationStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Checkbox
        validationState="default"
        label="Default state"
        helperText="This is helper text"
      />
      <Checkbox
        validationState="success"
        label="Success state"
        helperText="Successfully validated"
        defaultChecked
      />
      <Checkbox
        validationState="warning"
        label="Warning state"
        helperText="Please review this option"
      />
      <Checkbox
        validationState="error"
        label="Error state"
        errorText="This field is required"
      />
    </div>
  ),
};

/**
 * Checkbox states (unchecked, checked, indeterminate)
 */
export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Checkbox label="Unchecked" />
      <Checkbox label="Checked" defaultChecked />
      <Checkbox label="Indeterminate" indeterminate />
    </div>
  ),
};

/**
 * Disabled checkboxes
 */
export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Checkbox label="Disabled unchecked" disabled />
      <Checkbox label="Disabled checked" disabled defaultChecked />
      <Checkbox label="Disabled indeterminate" disabled indeterminate />
    </div>
  ),
};

/**
 * Required checkbox with helper text
 */
export const Required: Story = {
  args: {
    label: 'I agree to the terms and conditions',
    required: true,
    helperText: 'You must accept the terms to continue',
  },
};

/**
 * Checkbox without label (standalone)
 */
export const Standalone: Story = {
  args: {},
};

/**
 * Interactive example with state management
 */
export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false);
    const [indeterminate, setIndeterminate] = React.useState(false);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Checkbox
          label="Select all"
          checked={checked}
          indeterminate={indeterminate}
          onCheckedChange={(newChecked) => {
            setChecked(newChecked);
            setIndeterminate(false);
          }}
        />
        <div style={{ marginLeft: '24px' }}>
          <Checkbox
            label="Option 1"
            onCheckedChange={() => setIndeterminate(true)}
          />
          <Checkbox
            label="Option 2"
            onCheckedChange={() => setIndeterminate(true)}
          />
        </div>
      </div>
    );
  },
};