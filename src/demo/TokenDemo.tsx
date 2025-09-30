/**
 * Token-Driven Components Demo
 *
 * Demonstrates the automatic design token → component styling pipeline
 */

import { ButtonNew } from '../components/Button/Button-new';
import { InputNew } from '../components/Input/Input-new';
import { ToastNew } from '../components/Toast/Toast-new';
import { CheckboxNew } from '../components/Checkbox/Checkbox-new';
import { demoContainer, demoSection, demoTitle, demoGrid, demoCard } from './TokenDemo.css';

export function TokenDemo() {
  return (
    <div className={demoContainer}>
      <h1>UI Kit PoC: Token-Driven Components</h1>
      <p style={{ marginBottom: '2rem', color: '#666' }}>
        All components below are automatically styled using design tokens processed through style-dictionary
      </p>

      {/* Button Component */}
      <section className={demoSection}>
        <h2 className={demoTitle}>Button Component</h2>
        <div className={demoGrid}>
          <div className={demoCard}>
            <h3>Primary</h3>
            <ButtonNew variant="primary">Primary Button</ButtonNew>
            <ButtonNew variant="primary" disabled>Disabled</ButtonNew>
          </div>

          <div className={demoCard}>
            <h3>Secondary</h3>
            <ButtonNew variant="secondary">Secondary Button</ButtonNew>
            <ButtonNew variant="secondary" disabled>Disabled</ButtonNew>
          </div>

          <div className={demoCard}>
            <h3>Destructive</h3>
            <ButtonNew variant="destructive">Destructive Button</ButtonNew>
            <ButtonNew variant="destructive" disabled>Disabled</ButtonNew>
          </div>

          <div className={demoCard}>
            <h3>Full Width</h3>
            <ButtonNew variant="primary" fullWidth>Full Width Button</ButtonNew>
          </div>
        </div>
      </section>

      {/* Input Component */}
      <section className={demoSection}>
        <h2 className={demoTitle}>Input Component</h2>
        <div className={demoGrid}>
          <div className={demoCard}>
            <h3>Default</h3>
            <InputNew placeholder="Enter text..." />
            <InputNew placeholder="Disabled" disabled />
          </div>

          <div className={demoCard}>
            <h3>Error State</h3>
            <InputNew variant="error" placeholder="Error state" />
            <InputNew variant="error" value="Invalid input" readOnly />
          </div>
        </div>
      </section>

      {/* Toast Component */}
      <section className={demoSection}>
        <h2 className={demoTitle}>Toast Component</h2>
        <div className={demoGrid}>
          <ToastNew variant="default">
            <strong>Default Toast</strong>
            <p>This is a default notification message</p>
          </ToastNew>

          <ToastNew variant="success">
            <strong>Success!</strong>
            <p>Your action completed successfully</p>
          </ToastNew>

          <ToastNew variant="error">
            <strong>Error</strong>
            <p>Something went wrong</p>
          </ToastNew>

          <ToastNew variant="warning">
            <strong>Warning</strong>
            <p>Please review before continuing</p>
          </ToastNew>

          <ToastNew variant="info">
            <strong>Info</strong>
            <p>Here's some helpful information</p>
          </ToastNew>
        </div>
      </section>

      {/* Checkbox Component */}
      <section className={demoSection}>
        <h2 className={demoTitle}>Checkbox Component</h2>
        <div className={demoGrid}>
          <div className={demoCard}>
            <h3>Default</h3>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckboxNew variant="default" />
              <span>Unchecked</span>
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckboxNew variant="default" defaultChecked />
              <span>Checked</span>
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckboxNew variant="default" disabled />
              <span>Disabled</span>
            </label>
          </div>

          <div className={demoCard}>
            <h3>Error State</h3>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckboxNew variant="error" />
              <span>Unchecked error</span>
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckboxNew variant="error" defaultChecked />
              <span>Checked error</span>
            </label>
          </div>
        </div>
      </section>

      {/* Token Information */}
      <section className={demoSection}>
        <h2 className={demoTitle}>Token Pipeline</h2>
        <div style={{ padding: '1.5rem', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
          <ol style={{ lineHeight: '1.8' }}>
            <li><strong>Design Tokens</strong> → JSON files define primitives, semantic, and component tokens</li>
            <li><strong>Style Dictionary</strong> → Transforms tokens to TypeScript and CSS</li>
            <li><strong>Vanilla-Extract</strong> → Consumes tokens to create type-safe CSS-in-JS</li>
            <li><strong>React Components</strong> → Use recipes with automatic styling from tokens</li>
          </ol>
        </div>
      </section>
    </div>
  );
}
