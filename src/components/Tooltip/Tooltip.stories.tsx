import React from 'react';


import { Button } from '../Button';

import { Tooltip } from './Tooltip';

import type { TooltipProps } from './Tooltip.types';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Overlay/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A tooltip component built with Base UI for accessibility and positioning. Displays helpful information when hovering over or focusing on elements.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: { type: 'text' },
      description: 'Content to display in the tooltip',
    },
    placement: {
      control: { type: 'select' },
      options: [
        'top',
        'bottom',
        'left',
        'right',
        'top-start',
        'top-end',
        'bottom-start',
        'bottom-end',
        'left-start',
        'left-end',
        'right-start',
        'right-end',
      ],
      description: 'Placement of the tooltip relative to its trigger',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the tooltip',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the tooltip is disabled',
    },
    delay: {
      control: { type: 'number' },
      description: 'Delay before showing the tooltip (in milliseconds)',
    },
    showArrow: {
      control: { type: 'boolean' },
      description: 'Whether to show an arrow pointing to the trigger',
    },
    maxWidth: {
      control: { type: 'number' },
      description: 'Maximum width of the tooltip',
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<TooltipProps>;

/**
 * Default tooltip
 */
export const Default: Story = {
  args: {
    content: 'This is a helpful tooltip',
    children: <Button>Hover me</Button>,
  },
};

/**
 * Different tooltip placements
 */
export const Placements: Story = {
  render: () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '24px',
      padding: '100px',
      justifyItems: 'center'
    }}>
      <Tooltip content="Top tooltip" placement="top">
        <Button size="small">Top</Button>
      </Tooltip>
      <Tooltip content="Top-start tooltip" placement="top-start">
        <Button size="small">Top Start</Button>
      </Tooltip>
      <Tooltip content="Top-end tooltip" placement="top-end">
        <Button size="small">Top End</Button>
      </Tooltip>
      <Tooltip content="Right tooltip" placement="right">
        <Button size="small">Right</Button>
      </Tooltip>

      <Tooltip content="Left tooltip" placement="left">
        <Button size="small">Left</Button>
      </Tooltip>
      <Tooltip content="Bottom tooltip" placement="bottom">
        <Button size="small">Bottom</Button>
      </Tooltip>
      <Tooltip content="Bottom-start tooltip" placement="bottom-start">
        <Button size="small">Bottom Start</Button>
      </Tooltip>
      <Tooltip content="Bottom-end tooltip" placement="bottom-end">
        <Button size="small">Bottom End</Button>
      </Tooltip>

      <Tooltip content="Left-start tooltip" placement="left-start">
        <Button size="small">Left Start</Button>
      </Tooltip>
      <Tooltip content="Left-end tooltip" placement="left-end">
        <Button size="small">Left End</Button>
      </Tooltip>
      <Tooltip content="Right-start tooltip" placement="right-start">
        <Button size="small">Right Start</Button>
      </Tooltip>
      <Tooltip content="Right-end tooltip" placement="right-end">
        <Button size="small">Right End</Button>
      </Tooltip>
    </div>
  ),
};

/**
 * Different tooltip sizes
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', padding: '50px' }}>
      <Tooltip content="Small tooltip with less padding" size="small">
        <Button size="small">Small</Button>
      </Tooltip>
      <Tooltip content="Medium tooltip with standard padding and text" size="medium">
        <Button>Medium</Button>
      </Tooltip>
      <Tooltip content="Large tooltip with more padding and larger text for better readability" size="large">
        <Button size="large">Large</Button>
      </Tooltip>
    </div>
  ),
};

/**
 * Tooltip without arrow
 */
export const WithoutArrow: Story = {
  args: {
    content: 'This tooltip has no arrow',
    showArrow: false,
    children: <Button>No Arrow</Button>,
  },
};

/**
 * Tooltip with custom delay
 */
export const CustomDelay: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', padding: '50px' }}>
      <Tooltip content="Fast tooltip (100ms delay)" delay={100}>
        <Button>Fast (100ms)</Button>
      </Tooltip>
      <Tooltip content="Normal tooltip (500ms delay)" delay={500}>
        <Button>Normal (500ms)</Button>
      </Tooltip>
      <Tooltip content="Slow tooltip (1500ms delay)" delay={1500}>
        <Button>Slow (1500ms)</Button>
      </Tooltip>
    </div>
  ),
};

/**
 * Disabled tooltip
 */
export const Disabled: Story = {
  args: {
    content: 'This tooltip is disabled',
    disabled: true,
    children: <Button>Disabled Tooltip</Button>,
  },
};

/**
 * Tooltip with rich content
 */
export const RichContent: Story = {
  args: {
    content: (
      <div>
        <strong>Rich Content Tooltip</strong>
        <br />
        This tooltip contains <em>formatted text</em> and multiple lines.
        <br />
        <small>It can handle complex content structures.</small>
      </div>
    ),
    size: 'large',
    maxWidth: 250,
    children: <Button>Rich Content</Button>,
  },
};

/**
 * Tooltip with very long content
 */
export const LongContent: Story = {
  args: {
    content: 'This is a very long tooltip content that demonstrates how the tooltip handles text wrapping and maximum width constraints. The text should wrap nicely within the specified maximum width.',
    maxWidth: 200,
    children: <Button>Long Content</Button>,
  },
};

/**
 * Interactive tooltip example with state
 */
export const Interactive: Story = {
  render: () => {
    const [count, setCount] = React.useState(0);

    return (
      <div style={{ display: 'flex', gap: '24px', padding: '50px' }}>
        <Tooltip content={`Button clicked ${count} times`}>
          <Button onClick={() => setCount(count + 1)}>
            Click me ({count})
          </Button>
        </Tooltip>

        <Tooltip content="This tooltip updates dynamically" placement="bottom">
          <Button variant="secondary">
            Current time: {new Date().toLocaleTimeString()}
          </Button>
        </Tooltip>
      </div>
    );
  },
};

/**
 * Controlled tooltip
 */
export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '50px' }}>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button onClick={() => setOpen(true)}>Show Tooltip</button>
          <button onClick={() => setOpen(false)}>Hide Tooltip</button>
          <button onClick={() => setOpen(!open)}>Toggle Tooltip</button>
        </div>

        <Tooltip
          content="This is a controlled tooltip"
          open={open}
          onOpenChange={setOpen}
        >
          <Button>Controlled Tooltip Target</Button>
        </Tooltip>

        <p>Tooltip is currently: {open ? 'Open' : 'Closed'}</p>
      </div>
    );
  },
};

/**
 * Tooltips on different elements
 */
export const DifferentElements: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '50px' }}>
      <Tooltip content="Tooltip on a button">
        <Button>Button</Button>
      </Tooltip>

      <Tooltip content="Tooltip on a text input">
        <input
          type="text"
          placeholder="Hover over me"
          style={{
            padding: '8px 12px',
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}
        />
      </Tooltip>

      <Tooltip content="Tooltip on a span element">
        <span style={{
          padding: '8px 12px',
          border: '1px dashed #999',
          borderRadius: '4px',
          cursor: 'help'
        }}>
          Hover over this text
        </span>
      </Tooltip>

      <Tooltip content="Tooltip on an icon">
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          backgroundColor: '#e5e5e5',
          cursor: 'help'
        }}>
          ?
        </div>
      </Tooltip>
    </div>
  ),
};