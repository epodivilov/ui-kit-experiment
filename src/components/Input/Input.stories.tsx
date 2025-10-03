import { useState } from 'react';
import { Input } from './Input';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'error'],
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'tel', 'url', 'search', 'number'],
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
    placeholder: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    placeholder: 'Enter text...',
  },
};

export const WithValue: Story = {
  args: {
    variant: 'default',
    defaultValue: 'Default value',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    placeholder: 'Invalid input',
  },
};

export const ErrorWithValue: Story = {
  args: {
    variant: 'error',
    defaultValue: 'Invalid value',
  },
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', minWidth: '300px' }}>
      <Input variant="default" placeholder="Disabled empty" disabled />
      <Input variant="default" defaultValue="Disabled with value" disabled />
      <Input variant="error" placeholder="Error disabled" disabled />
      <Input variant="error" defaultValue="Error disabled with value" disabled />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', minWidth: '300px' }}>
      <Input variant="default" placeholder="Default variant" />
      <Input variant="error" placeholder="Error variant" />
    </div>
  ),
};

export const WithLabels: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', minWidth: '300px' }}>
      <div>
        <label
          htmlFor="name"
          style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}
        >
          Name
        </label>
        <Input
          id="name"
          name="name"
          variant="default"
          placeholder="Enter your name"
          aria-label="Name"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}
        >
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          variant="default"
          placeholder="Enter your email"
          aria-label="Email address"
        />
      </div>
      <div>
        <label
          htmlFor="error-field"
          style={{
            display: 'block',
            marginBottom: '0.5rem',
            fontSize: '0.875rem',
            fontWeight: 500,
            color: '#dc2626',
          }}
        >
          Field with error
        </label>
        <Input
          id="error-field"
          name="error-field"
          variant="error"
          placeholder="This field has an error"
          aria-invalid={true}
          aria-describedby="error-message"
        />
        <div
          id="error-message"
          style={{ marginTop: '0.25rem', fontSize: '0.75rem', color: '#dc2626' }}
        >
          This field is required
        </div>
      </div>
      <div>
        <label
          htmlFor="disabled-field"
          style={{
            display: 'block',
            marginBottom: '0.5rem',
            fontSize: '0.875rem',
            fontWeight: 500,
            opacity: 0.6,
          }}
        >
          Disabled field
        </label>
        <Input
          id="disabled-field"
          name="disabled-field"
          variant="default"
          defaultValue="Cannot edit this"
          disabled
        />
      </div>
    </div>
  ),
};

export const Controlled: Story = {
  render: function ControlledInput() {
    const [value, setValue] = useState('');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', minWidth: '300px' }}>
        <label
          htmlFor="controlled-input"
          style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500 }}
        >
          Controlled input (type something!)
        </label>
        <Input
          id="controlled-input"
          variant="default"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type here..."
        />
        <div style={{ fontSize: '0.875rem', color: '#666' }}>
          Current value: <strong>{value || '(empty)'}</strong>
        </div>
        <div style={{ fontSize: '0.875rem', color: '#666' }}>
          Length: <strong>{value.length}</strong> characters
        </div>
        <button
          onClick={() => setValue('')}
          style={{
            padding: '0.5rem 1rem',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer',
            backgroundColor: '#fff',
          }}
        >
          Clear input
        </button>
      </div>
    );
  },
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', minWidth: '300px' }}>
      <div>
        <h3 style={{ marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>
          Default Variant
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div>
            <Input variant="default" placeholder="Default state" />
            <div style={{ fontSize: '0.75rem', marginTop: '0.25rem', color: '#666' }}>
              Default
            </div>
          </div>
          <div>
            <Input variant="default" defaultValue="With value" />
            <div style={{ fontSize: '0.75rem', marginTop: '0.25rem', color: '#666' }}>
              With value
            </div>
          </div>
          <div>
            <Input variant="default" placeholder="Hover me" />
            <div style={{ fontSize: '0.75rem', marginTop: '0.25rem', color: '#666' }}>
              Hover state (interactive)
            </div>
          </div>
          <div>
            <Input variant="default" placeholder="Focus on me" />
            <div style={{ fontSize: '0.75rem', marginTop: '0.25rem', color: '#666' }}>
              Focus state (interactive)
            </div>
          </div>
          <div>
            <Input variant="default" placeholder="Disabled" disabled />
            <div style={{ fontSize: '0.75rem', marginTop: '0.25rem', color: '#666' }}>
              Disabled
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>
          Error Variant
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div>
            <Input variant="error" placeholder="Error state" />
            <div style={{ fontSize: '0.75rem', marginTop: '0.25rem', color: '#666' }}>
              Error
            </div>
          </div>
          <div>
            <Input variant="error" defaultValue="Invalid value" />
            <div style={{ fontSize: '0.75rem', marginTop: '0.25rem', color: '#666' }}>
              Error with value
            </div>
          </div>
          <div>
            <Input variant="error" placeholder="Hover me" />
            <div style={{ fontSize: '0.75rem', marginTop: '0.25rem', color: '#666' }}>
              Error hover (interactive)
            </div>
          </div>
          <div>
            <Input variant="error" placeholder="Focus on me" />
            <div style={{ fontSize: '0.75rem', marginTop: '0.25rem', color: '#666' }}>
              Error focus (interactive)
            </div>
          </div>
          <div>
            <Input variant="error" placeholder="Disabled" disabled />
            <div style={{ fontSize: '0.75rem', marginTop: '0.25rem', color: '#666' }}>
              Error disabled
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const InputTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', minWidth: '300px' }}>
      <div>
        <label style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.75rem' }}>
          Text
        </label>
        <Input type="text" variant="default" placeholder="Enter text" />
      </div>
      <div>
        <label style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.75rem' }}>
          Email
        </label>
        <Input type="email" variant="default" placeholder="email@example.com" />
      </div>
      <div>
        <label style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.75rem' }}>
          Password
        </label>
        <Input type="password" variant="default" placeholder="Enter password" />
      </div>
      <div>
        <label style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.75rem' }}>
          Telephone
        </label>
        <Input type="tel" variant="default" placeholder="+1 (555) 000-0000" />
      </div>
      <div>
        <label style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.75rem' }}>
          URL
        </label>
        <Input type="url" variant="default" placeholder="https://example.com" />
      </div>
      <div>
        <label style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.75rem' }}>
          Search
        </label>
        <Input type="search" variant="default" placeholder="Search..." />
      </div>
      <div>
        <label style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.75rem' }}>
          Number
        </label>
        <Input type="number" variant="default" placeholder="123" />
      </div>
    </div>
  ),
};

export const FormExample: Story = {
  render: function FormExample() {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const newErrors: Record<string, string> = {};

      if (!formData.firstName) newErrors.firstName = 'First name is required';
      if (!formData.lastName) newErrors.lastName = 'Last name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      if (!formData.password) newErrors.password = 'Password is required';

      setErrors(newErrors);

      if (Object.keys(newErrors).length === 0) {
        setSubmitted(true);
      }
    };

    const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field]) {
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors[field];
          return newErrors;
        });
      }
    };

    if (submitted) {
      return (
        <div
          style={{
            padding: '2rem',
            backgroundColor: '#f0fdf4',
            borderRadius: '8px',
            minWidth: '300px',
          }}
        >
          <h3 style={{ margin: '0 0 1rem 0', color: '#166534' }}>Form submitted successfully!</h3>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({ firstName: '', lastName: '', email: '', password: '' });
            }}
            style={{
              padding: '0.5rem 1rem',
              border: '1px solid #166534',
              borderRadius: '4px',
              cursor: 'pointer',
              backgroundColor: '#fff',
            }}
          >
            Reset form
          </button>
        </div>
      );
    }

    return (
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: '1rem', minWidth: '300px' }}
      >
        <div>
          <label
            htmlFor="firstName"
            style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.875rem', fontWeight: 500 }}
          >
            First Name *
          </label>
          <Input
            id="firstName"
            name="firstName"
            variant={errors.firstName ? 'error' : 'default'}
            value={formData.firstName}
            onChange={handleChange('firstName')}
            placeholder="John"
            required
            aria-invalid={!!errors.firstName}
            aria-describedby={errors.firstName ? 'firstName-error' : undefined}
          />
          {errors.firstName && (
            <div id="firstName-error" style={{ marginTop: '0.25rem', fontSize: '0.75rem', color: '#dc2626' }}>
              {errors.firstName}
            </div>
          )}
        </div>

        <div>
          <label
            htmlFor="lastName"
            style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.875rem', fontWeight: 500 }}
          >
            Last Name *
          </label>
          <Input
            id="lastName"
            name="lastName"
            variant={errors.lastName ? 'error' : 'default'}
            value={formData.lastName}
            onChange={handleChange('lastName')}
            placeholder="Doe"
            required
            aria-invalid={!!errors.lastName}
            aria-describedby={errors.lastName ? 'lastName-error' : undefined}
          />
          {errors.lastName && (
            <div id="lastName-error" style={{ marginTop: '0.25rem', fontSize: '0.75rem', color: '#dc2626' }}>
              {errors.lastName}
            </div>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.875rem', fontWeight: 500 }}
          >
            Email *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            variant={errors.email ? 'error' : 'default'}
            value={formData.email}
            onChange={handleChange('email')}
            placeholder="john.doe@example.com"
            required
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <div id="email-error" style={{ marginTop: '0.25rem', fontSize: '0.75rem', color: '#dc2626' }}>
              {errors.email}
            </div>
          )}
        </div>

        <div>
          <label
            htmlFor="password"
            style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.875rem', fontWeight: 500 }}
          >
            Password *
          </label>
          <Input
            id="password"
            name="password"
            type="password"
            variant={errors.password ? 'error' : 'default'}
            value={formData.password}
            onChange={handleChange('password')}
            placeholder="Enter password"
            required
            aria-invalid={!!errors.password}
            aria-describedby={errors.password ? 'password-error' : undefined}
          />
          {errors.password && (
            <div id="password-error" style={{ marginTop: '0.25rem', fontSize: '0.75rem', color: '#dc2626' }}>
              {errors.password}
            </div>
          )}
        </div>

        <button
          type="submit"
          style={{
            marginTop: '0.5rem',
            padding: '0.75rem',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            backgroundColor: '#3b82f6',
            color: '#fff',
            fontSize: '0.875rem',
            fontWeight: 600,
          }}
        >
          Submit Form
        </button>
      </form>
    );
  },
};
