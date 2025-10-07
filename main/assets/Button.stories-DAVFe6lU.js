import{l as e}from"./iframe-DOd3Lpa1.js";import{t}from"./jsx-runtime-Bv32N4AW.js";import{t as n}from"./Button-BYYLpffM.js";import"./createRuntimeFn-62c9670f.esm-DKWA1Tvk.js";var r=e(t()),i={title:`Components/Button`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`primary`,`secondary`,`danger`]},size:{control:`select`,options:[`small`,`medium`,`large`]},fullWidth:{control:`boolean`},disabled:{control:`boolean`}}};const a={args:{variant:`primary`,children:`Primary Button`}},o={args:{variant:`secondary`,children:`Secondary Button`}},s={args:{variant:`danger`,children:`Delete`}},c={render:()=>(0,r.jsxs)(`div`,{style:{display:`flex`,gap:`1rem`,alignItems:`center`},children:[(0,r.jsx)(n,{size:`small`,children:`Small`}),(0,r.jsx)(n,{size:`medium`,children:`Medium`}),(0,r.jsx)(n,{size:`large`,children:`Large`})]})},l={render:()=>(0,r.jsxs)(`div`,{style:{display:`flex`,gap:`1rem`,alignItems:`center`},children:[(0,r.jsx)(n,{variant:`primary`,children:`Primary`}),(0,r.jsx)(n,{variant:`secondary`,children:`Secondary`}),(0,r.jsx)(n,{variant:`danger`,children:`Danger`})]})},u={render:()=>(0,r.jsxs)(`div`,{style:{display:`flex`,gap:`1rem`,alignItems:`center`},children:[(0,r.jsx)(n,{variant:`primary`,disabled:!0,children:`Primary Disabled`}),(0,r.jsx)(n,{variant:`secondary`,disabled:!0,children:`Secondary Disabled`}),(0,r.jsx)(n,{variant:`danger`,disabled:!0,children:`Danger Disabled`})]})},d={args:{variant:`primary`,fullWidth:!0,children:`Full Width Button`},parameters:{layout:`padded`}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary Button'
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary Button'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    children: 'Delete'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger</Button>
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>
      <Button variant="primary" disabled>
        Primary Disabled
      </Button>
      <Button variant="secondary" disabled>
        Secondary Disabled
      </Button>
      <Button variant="danger" disabled>
        Danger Disabled
      </Button>
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    fullWidth: true,
    children: 'Full Width Button'
  },
  parameters: {
    layout: 'padded'
  }
}`,...d.parameters?.docs?.source}}};const f=[`Primary`,`Secondary`,`Danger`,`Sizes`,`AllVariants`,`Disabled`,`FullWidth`];export{l as AllVariants,s as Danger,u as Disabled,d as FullWidth,a as Primary,o as Secondary,c as Sizes,f as __namedExportsOrder,i as default};