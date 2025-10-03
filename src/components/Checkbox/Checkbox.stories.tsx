import { useState } from 'react';
import { Checkbox } from './Checkbox';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'error'],
    },
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    readOnly: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
    indeterminate: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
};

export const DefaultChecked: Story = {
  args: {
    variant: 'default',
    defaultChecked: true,
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
  },
};

export const ErrorChecked: Story = {
  args: {
    variant: 'error',
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Checkbox variant="default" disabled />
      <Checkbox variant="default" disabled defaultChecked />
      <Checkbox variant="error" disabled />
      <Checkbox variant="error" disabled defaultChecked />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Checkbox variant="default" />
      <Checkbox variant="default" defaultChecked />
      <Checkbox variant="error" />
      <Checkbox variant="error" defaultChecked />
    </div>
  ),
};

export const WithLabels: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
        <Checkbox variant="default" name="terms" />
        <span>I agree to the terms and conditions</span>
      </label>
      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
        <Checkbox variant="default" name="newsletter" defaultChecked />
        <span>Subscribe to newsletter</span>
      </label>
      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
        <Checkbox variant="error" name="error-field" />
        <span style={{ color: '#dc2626' }}>This field has an error</span>
      </label>
      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'not-allowed', opacity: 0.6 }}>
        <Checkbox variant="default" name="disabled" disabled />
        <span>Disabled option</span>
      </label>
    </div>
  ),
};

export const Controlled: Story = {
  render: function ControlledCheckbox() {
    const [checked, setChecked] = useState(false);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
          <Checkbox
            variant="default"
            checked={checked}
            onCheckedChange={setChecked}
          />
          <span>Controlled checkbox (click me!)</span>
        </label>
        <div style={{ fontSize: '0.875rem', color: '#666' }}>
          Status: {checked ? 'Checked' : 'Unchecked'}
        </div>
        <button
          onClick={() => setChecked(!checked)}
          style={{
            padding: '0.5rem 1rem',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Toggle from outside
        </button>
      </div>
    );
  },
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <h3 style={{ marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>
          Default Variant
        </h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <Checkbox variant="default" />
            <div style={{ fontSize: '0.75rem', marginTop: '0.25rem' }}>Unchecked</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Checkbox variant="default" defaultChecked />
            <div style={{ fontSize: '0.75rem', marginTop: '0.25rem' }}>Checked</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Checkbox variant="default" disabled />
            <div style={{ fontSize: '0.75rem', marginTop: '0.25rem' }}>Disabled</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Checkbox variant="default" disabled defaultChecked />
            <div style={{ fontSize: '0.75rem', marginTop: '0.25rem' }}>Disabled Checked</div>
          </div>
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>
          Error Variant
        </h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <Checkbox variant="error" />
            <div style={{ fontSize: '0.75rem', marginTop: '0.25rem' }}>Unchecked</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Checkbox variant="error" defaultChecked />
            <div style={{ fontSize: '0.75rem', marginTop: '0.25rem' }}>Checked</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Checkbox variant="error" disabled />
            <div style={{ fontSize: '0.75rem', marginTop: '0.25rem' }}>Disabled</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Checkbox variant="error" disabled defaultChecked />
            <div style={{ fontSize: '0.75rem', marginTop: '0.25rem' }}>Disabled Checked</div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const InteractiveDemo: Story = {
  render: function InteractiveDemo() {
    const [options, setOptions] = useState({
      feature1: false,
      feature2: true,
      feature3: false,
      hasError: false,
    });

    const handleChange = (key: keyof typeof options) => (checked: boolean) => {
      setOptions(prev => ({ ...prev, [key]: checked }));
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', minWidth: '300px' }}>
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>
          Select Features
        </h3>
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
          <Checkbox
            variant="default"
            checked={options.feature1}
            onCheckedChange={handleChange('feature1')}
          />
          <span>Enable feature 1</span>
        </label>
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
          <Checkbox
            variant="default"
            checked={options.feature2}
            onCheckedChange={handleChange('feature2')}
          />
          <span>Enable feature 2</span>
        </label>
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
          <Checkbox
            variant="default"
            checked={options.feature3}
            onCheckedChange={handleChange('feature3')}
          />
          <span>Enable feature 3</span>
        </label>
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
          <Checkbox
            variant={options.hasError ? 'error' : 'default'}
            checked={options.hasError}
            onCheckedChange={handleChange('hasError')}
          />
          <span style={{ color: options.hasError ? '#dc2626' : 'inherit' }}>
            Simulate error state
          </span>
        </label>
        <div
          style={{
            marginTop: '1rem',
            padding: '1rem',
            backgroundColor: '#f3f4f6',
            borderRadius: '4px',
            fontSize: '0.875rem',
          }}
        >
          <strong>Selected options:</strong>
          <ul style={{ margin: '0.5rem 0 0 0', paddingLeft: '1.5rem' }}>
            {Object.entries(options)
              .filter(([key, value]) => value && key !== 'hasError')
              .map(([key]) => (
                <li key={key}>{key}</li>
              ))}
          </ul>
          {Object.values(options).filter((v, i) => v && i < 3).length === 0 && (
            <p style={{ margin: '0.5rem 0 0 0' }}>No features selected</p>
          )}
        </div>
      </div>
    );
  },
};
