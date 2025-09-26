import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';

import type { SelectProps } from './Select.types';

const sampleOptions = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'date', label: 'Date' },
  { value: 'elderberry', label: 'Elderberry' },
  { value: 'fig', label: 'Fig' },
  { value: 'grape', label: 'Grape' },
];

const colorOptions = [
  { value: 'red', label: 'Red' },
  { value: 'green', label: 'Green' },
  { value: 'blue', label: 'Blue' },
  { value: 'yellow', label: 'Yellow', disabled: true },
  { value: 'purple', label: 'Purple' },
];

const meta = {
  title: 'Components/Form/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A flexible select component built with Base UI for accessibility. Supports different sizes, validation states, single and multiple selection.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the select',
    },
    validationState: {
      control: { type: 'select' },
      options: ['default', 'success', 'warning', 'error'],
      description: 'Validation state of the select',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the select is disabled',
    },
    required: {
      control: { type: 'boolean' },
      description: 'Whether the select is required',
    },
    multiple: {
      control: { type: 'boolean' },
      description: 'Whether the select allows multiple selections',
    },
    label: {
      control: { type: 'text' },
      description: 'Label for the select',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text',
    },
    helperText: {
      control: { type: 'text' },
      description: 'Helper text displayed below the select',
    },
    errorText: {
      control: { type: 'text' },
      description: 'Error text displayed when validation state is error',
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<SelectProps>;

/**
 * Default select with options
 */
export const Default: Story = {
  args: {
    options: sampleOptions,
    label: 'Choose a fruit',
    placeholder: 'Select a fruit',
  },
};

/**
 * Different sizes of selects
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', minWidth: '300px' }}>
      <Select
        size="small"
        label="Small select"
        options={colorOptions}
        placeholder="Choose a color"
      />
      <Select
        size="medium"
        label="Medium select"
        options={colorOptions}
        placeholder="Choose a color"
      />
      <Select
        size="large"
        label="Large select"
        options={colorOptions}
        placeholder="Choose a color"
      />
    </div>
  ),
};

/**
 * Different validation states
 */
export const ValidationStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', minWidth: '300px' }}>
      <Select
        validationState="default"
        label="Default state"
        options={colorOptions}
        placeholder="Choose a color"
        helperText="This is helper text"
      />
      <Select
        validationState="success"
        label="Success state"
        options={colorOptions}
        placeholder="Choose a color"
        helperText="Successfully validated"
        defaultValue="green"
      />
      <Select
        validationState="warning"
        label="Warning state"
        options={colorOptions}
        placeholder="Choose a color"
        helperText="Please review this selection"
      />
      <Select
        validationState="error"
        label="Error state"
        options={colorOptions}
        placeholder="Choose a color"
        errorText="This field is required"
      />
    </div>
  ),
};

/**
 * Disabled select
 */
export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', minWidth: '300px' }}>
      <Select
        label="Disabled select (no value)"
        options={colorOptions}
        placeholder="Choose a color"
        disabled
      />
      <Select
        label="Disabled select (with value)"
        options={colorOptions}
        defaultValue="blue"
        disabled
      />
    </div>
  ),
};

/**
 * Required select with helper text
 */
export const Required: Story = {
  args: {
    options: sampleOptions,
    label: 'Choose your favorite fruit',
    required: true,
    placeholder: 'Select a fruit',
    helperText: 'This field is required',
  },
};

/**
 * Select with disabled options
 */
export const WithDisabledOptions: Story = {
  args: {
    options: [
      { value: 'available1', label: 'Available Option 1' },
      { value: 'disabled1', label: 'Disabled Option 1', disabled: true },
      { value: 'available2', label: 'Available Option 2' },
      { value: 'disabled2', label: 'Disabled Option 2', disabled: true },
      { value: 'available3', label: 'Available Option 3' },
    ],
    label: 'Options with disabled items',
    placeholder: 'Select an option',
    helperText: 'Some options are disabled',
  },
};

/**
 * Multiple selection
 */
export const Multiple: Story = {
  args: {
    options: sampleOptions,
    label: 'Choose multiple fruits',
    multiple: true,
    placeholder: 'Select fruits',
    helperText: 'You can select multiple options',
  },
};

/**
 * Interactive example with state management
 */
export const Interactive: Story = {
  render: () => {
    const [value, setValue] = React.useState<string>('');
    const [multiValue, setMultiValue] = React.useState<(string | number)[]>([]);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', minWidth: '300px' }}>
        <Select
          label="Single selection"
          options={colorOptions}
          value={value}
          onValueChange={(newValue) => setValue(newValue as string)}
          placeholder="Choose a color"
          helperText={value ? `Selected: ${value}` : 'No selection'}
        />

        <Select
          label="Multiple selection"
          options={sampleOptions}
          multiple
          value={multiValue}
          onValueChange={(newValue) => setMultiValue(newValue as (string | number)[])}
          placeholder="Choose fruits"
          helperText={
            multiValue.length > 0
              ? `Selected: ${multiValue.join(', ')}`
              : 'No selections'
          }
        />
      </div>
    );
  },
};

/**
 * Long list of options with scrolling
 */
export const LongList: Story = {
  args: {
    options: Array.from({ length: 50 }, (_, i) => ({
      value: `option-${i + 1}`,
      label: `Option ${i + 1}`,
    })),
    label: 'Long list of options',
    placeholder: 'Select from many options',
    helperText: 'This list will scroll when opened',
  },
};