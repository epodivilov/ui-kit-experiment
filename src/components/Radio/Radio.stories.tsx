import type { Meta, StoryObj } from '@storybook/react';

import { Radio, RadioGroup, RadioIndicator } from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Radio>;

/**
 * Default Radio
 *
 * Basic radio button with default variant.
 */
export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option1">
      <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
        <Radio value="option1">
          <RadioIndicator />
        </Radio>
        Option 1
      </label>
      <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
        <Radio value="option2">
          <RadioIndicator />
        </Radio>
        Option 2
      </label>
      <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
        <Radio value="option3">
          <RadioIndicator />
        </Radio>
        Option 3
      </label>
    </RadioGroup>
  ),
};

/**
 * Variants
 *
 * Demonstrates all available variants (default and error).
 */
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3 style={{ marginBottom: '12px' }}>Default Variant</h3>
        <RadioGroup defaultValue="default1">
          <label
            style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
          >
            <Radio value="default1" variant="default">
              <RadioIndicator variant="default" />
            </Radio>
            Default Option 1
          </label>
          <label
            style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
          >
            <Radio value="default2" variant="default">
              <RadioIndicator variant="default" />
            </Radio>
            Default Option 2
          </label>
        </RadioGroup>
      </div>

      <div>
        <h3 style={{ marginBottom: '12px' }}>Error Variant</h3>
        <RadioGroup defaultValue="error1">
          <label
            style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
          >
            <Radio value="error1" variant="error">
              <RadioIndicator variant="error" />
            </Radio>
            Error Option 1
          </label>
          <label
            style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
          >
            <Radio value="error2" variant="error">
              <RadioIndicator variant="error" />
            </Radio>
            Error Option 2
          </label>
        </RadioGroup>
      </div>
    </div>
  ),
};

/**
 * Orientation
 *
 * Demonstrates vertical and horizontal orientation for RadioGroup.
 */
export const Orientation: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h3 style={{ marginBottom: '12px' }}>Vertical Orientation (Default)</h3>
        <RadioGroup orientation="vertical" defaultValue="vertical1">
          <label
            style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
          >
            <Radio value="vertical1">
              <RadioIndicator />
            </Radio>
            Vertical Option 1
          </label>
          <label
            style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
          >
            <Radio value="vertical2">
              <RadioIndicator />
            </Radio>
            Vertical Option 2
          </label>
          <label
            style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
          >
            <Radio value="vertical3">
              <RadioIndicator />
            </Radio>
            Vertical Option 3
          </label>
        </RadioGroup>
      </div>

      <div>
        <h3 style={{ marginBottom: '12px' }}>Horizontal Orientation</h3>
        <RadioGroup orientation="horizontal" defaultValue="horizontal1">
          <label
            style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
          >
            <Radio value="horizontal1">
              <RadioIndicator />
            </Radio>
            Horizontal 1
          </label>
          <label
            style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
          >
            <Radio value="horizontal2">
              <RadioIndicator />
            </Radio>
            Horizontal 2
          </label>
          <label
            style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
          >
            <Radio value="horizontal3">
              <RadioIndicator />
            </Radio>
            Horizontal 3
          </label>
        </RadioGroup>
      </div>
    </div>
  ),
};

/**
 * States
 *
 * Demonstrates different states: default, selected, and disabled.
 */
export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3 style={{ marginBottom: '12px' }}>Default State</h3>
        <RadioGroup>
          <label
            style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
          >
            <Radio value="unchecked">
              <RadioIndicator />
            </Radio>
            Unchecked
          </label>
        </RadioGroup>
      </div>

      <div>
        <h3 style={{ marginBottom: '12px' }}>Selected State</h3>
        <RadioGroup defaultValue="checked">
          <label
            style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
          >
            <Radio value="checked">
              <RadioIndicator />
            </Radio>
            Selected
          </label>
        </RadioGroup>
      </div>

      <div>
        <h3 style={{ marginBottom: '12px' }}>Disabled State</h3>
        <RadioGroup disabled>
          <label
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'not-allowed',
              opacity: 0.5,
            }}
          >
            <Radio value="disabled1" disabled>
              <RadioIndicator />
            </Radio>
            Disabled Unchecked
          </label>
          <label
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'not-allowed',
              opacity: 0.5,
            }}
          >
            <Radio value="disabled2" disabled>
              <RadioIndicator />
            </Radio>
            Disabled
          </label>
        </RadioGroup>
      </div>

      <div>
        <h3 style={{ marginBottom: '12px' }}>Disabled Selected State</h3>
        <RadioGroup defaultValue="disabledSelected" disabled>
          <label
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'not-allowed',
              opacity: 0.5,
            }}
          >
            <Radio value="disabledSelected" disabled>
              <RadioIndicator />
            </Radio>
            Disabled Selected
          </label>
        </RadioGroup>
      </div>
    </div>
  ),
};

/**
 * Controlled
 *
 * Demonstrates controlled radio group with external state management.
 */
export const Controlled: Story = {
  render: function ControlledRadio() {
    const [value, setValue] = React.useState<unknown>('option2');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <strong>Selected Value:</strong> {String(value)}
        </div>
        <RadioGroup value={value} onValueChange={(newValue) => setValue(newValue)}>
          <label
            style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
          >
            <Radio value="option1">
              <RadioIndicator />
            </Radio>
            Option 1
          </label>
          <label
            style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
          >
            <Radio value="option2">
              <RadioIndicator />
            </Radio>
            Option 2
          </label>
          <label
            style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
          >
            <Radio value="option3">
              <RadioIndicator />
            </Radio>
            Option 3
          </label>
        </RadioGroup>
      </div>
    );
  },
};

/**
 * Form Integration
 *
 * Demonstrates radio group usage in a form context.
 */
export const FormIntegration: Story = {
  render: () => (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        alert(`Selected shipping: ${formData.get('shipping')}`);
      }}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <fieldset style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
        <legend style={{ fontWeight: 'bold', padding: '0 8px' }}>Shipping Method</legend>
        <RadioGroup name="shipping" defaultValue="standard">
          <label
            style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
          >
            <Radio value="standard">
              <RadioIndicator />
            </Radio>
            Standard Shipping (5-7 days)
          </label>
          <label
            style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
          >
            <Radio value="express">
              <RadioIndicator />
            </Radio>
            Express Shipping (2-3 days)
          </label>
          <label
            style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
          >
            <Radio value="overnight">
              <RadioIndicator />
            </Radio>
            Overnight Shipping (1 day)
          </label>
        </RadioGroup>
      </fieldset>
      <button type="submit" style={{ padding: '8px 16px' }}>
        Submit
      </button>
    </form>
  ),
};

// Add React import for Controlled story
import * as React from 'react';
