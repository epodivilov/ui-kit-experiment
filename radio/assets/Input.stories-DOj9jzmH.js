import{i as e,l as t}from"./iframe-DNla4mPf.js";import{t as n}from"./jsx-runtime-BIE8cfDK.js";import"./react-dom-BPVL9wN0.js";import{t as r}from"./createRuntimeFn-62c9670f.esm-DKWA1Tvk.js";import{a as i,c as a,n as o,o as s,r as c,s as l,t as u}from"./createBaseUIEventDetails-spQxsMdC.js";import{h as d,o as f,p}from"./useLatestRef-CqQz6U7_.js";var m=t(e());const h=m.forwardRef(function(e,t){let{render:n,className:r,id:h,name:g,value:_,disabled:v=!1,onValueChange:y,defaultValue:b,...x}=e,{state:S,name:C,disabled:w}=i(),T=w||v,E=C??g,D=m.useMemo(()=>({...S,disabled:T}),[S,T]),{setControlId:O,labelId:k,setTouched:A,setDirty:j,validityData:M,setFocused:N,setFilled:P,validationMode:F}=i(),{getValidationProps:I,getInputValidationProps:L,commitValidation:R,inputRef:z}=c(),B=s(h);p(()=>(O(B),()=>{O(void 0)}),[B,O]),p(()=>{let e=_!=null;z.current?.value||e&&_!==``?P(!0):e&&_===``&&P(!1)},[z,P,_]);let[V,H]=a({controlled:_,default:b,name:`FieldControl`,state:`value`}),U=_!==void 0,W=d((e,t)=>{y?.(e,t),!t.isCanceled&&H(e)});return o({id:B,name:E,commitValidation:R,value:V,getValue:()=>z.current?.value,controlRef:z}),f(`input`,e,{ref:t,state:D,props:[{id:B,disabled:T,name:E,ref:z,"aria-labelledby":k,...U?{value:V}:{defaultValue:b},onChange(e){let t=e.currentTarget.value;W(t,u(`none`,e.nativeEvent)),j(t!==M.initialValue),P(t!==``)},onFocus(){N(!0)},onBlur(e){A(!0),N(!1),F===`onBlur`&&R(e.currentTarget.value)},onKeyDown(e){e.currentTarget.tagName===`INPUT`&&e.key===`Enter`&&(A(!0),R(e.currentTarget.value))}},I(),L(),x],stateAttributesMapping:l})});var g=t(n());const _=m.forwardRef(function(e,t){return(0,g.jsx)(h,{ref:t,...e})});var v=r({defaultClassName:`owugrx0`,variantClassNames:{variant:{error:`owugrx1`,default:`owugrx2`}},defaultVariants:{variant:`default`},compoundVariants:[]});const y=(0,m.forwardRef)(({variant:e,type:t=`text`,...n},r)=>(0,g.jsx)(_,{ref:r,type:t,className:v({variant:e}),...n}));y.displayName=`Input`,y.__docgenInfo={description:`Input Component

Accessible input component with theme system integration.
Uses Base UI for accessibility and form integration.
No customization allowed - use as is with predefined variants.`,methods:[],displayName:`Input`,props:{name:{required:!1,tsType:{name:`string`},description:`Input name attribute`},type:{required:!1,tsType:{name:`union`,raw:`'text' | 'email' | 'password' | 'tel' | 'url' | 'search' | 'number'`,elements:[{name:`literal`,value:`'text'`},{name:`literal`,value:`'email'`},{name:`literal`,value:`'password'`},{name:`literal`,value:`'tel'`},{name:`literal`,value:`'url'`},{name:`literal`,value:`'search'`},{name:`literal`,value:`'number'`}]},description:`Input type attribute`,defaultValue:{value:`'text'`,computed:!1}},value:{required:!1,tsType:{name:`string`},description:`Input value (controlled)`},defaultValue:{required:!1,tsType:{name:`string`},description:`Default value (uncontrolled)`},onValueChange:{required:!1,tsType:{name:`BaseInput.Props['onValueChange']`,raw:`BaseInput.Props['onValueChange']`},description:`Callback fired when value changes (Base UI event)
@param value - The new input value
@param eventDetails - Base UI event details with reason, event, and control methods`},placeholder:{required:!1,tsType:{name:`string`},description:`Placeholder text`},disabled:{required:!1,tsType:{name:`boolean`},description:`Whether the input is disabled`},required:{required:!1,tsType:{name:`boolean`},description:`Whether the input is required`},readOnly:{required:!1,tsType:{name:`boolean`},description:`Whether the input is read-only`},"aria-label":{required:!1,tsType:{name:`string`},description:`aria-label for accessibility
@example
<Input aria-label="Email address" />`},"aria-labelledby":{required:!1,tsType:{name:`string`},description:`aria-labelledby for accessibility
@example
<label id="email-label">Email</label>
<Input aria-labelledby="email-label" />`},"aria-describedby":{required:!1,tsType:{name:`string`},description:`aria-describedby for accessibility
Use with error messages or helper text
@example
<Input aria-describedby="email-error" aria-invalid={true} variant="error" />
<span id="email-error">Please enter a valid email address</span>`},"aria-invalid":{required:!1,tsType:{name:`boolean`},description:`aria-invalid for error state
Indicates the input has a validation error
@example
<Input aria-invalid={true} variant="error" aria-describedby="email-error" />`}},composes:[`Omit`,`InputVariants`]};var b={title:`Components/Input`,component:y,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`default`,`error`]},type:{control:`select`,options:[`text`,`email`,`password`,`tel`,`url`,`search`,`number`]},disabled:{control:`boolean`},readOnly:{control:`boolean`},required:{control:`boolean`},placeholder:{control:`text`}}};const x={args:{variant:`default`,placeholder:`Enter text...`}},S={args:{variant:`default`,defaultValue:`Default value`}},C={args:{variant:`error`,placeholder:`Invalid input`}},w={args:{variant:`error`,defaultValue:`Invalid value`}},T={render:()=>(0,g.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`,minWidth:`300px`},children:[(0,g.jsx)(y,{variant:`default`,placeholder:`Disabled empty`,disabled:!0}),(0,g.jsx)(y,{variant:`default`,defaultValue:`Disabled with value`,disabled:!0}),(0,g.jsx)(y,{variant:`error`,placeholder:`Error disabled`,disabled:!0}),(0,g.jsx)(y,{variant:`error`,defaultValue:`Error disabled with value`,disabled:!0})]})},E={render:()=>(0,g.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`,minWidth:`300px`},children:[(0,g.jsx)(y,{variant:`default`,placeholder:`Default variant`}),(0,g.jsx)(y,{variant:`error`,placeholder:`Error variant`})]})},D={render:()=>(0,g.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1.5rem`,minWidth:`300px`},children:[(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`label`,{htmlFor:`name`,style:{display:`block`,marginBottom:`0.5rem`,fontSize:`0.875rem`,fontWeight:500},children:`Name`}),(0,g.jsx)(y,{id:`name`,name:`name`,variant:`default`,placeholder:`Enter your name`,"aria-label":`Name`})]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`label`,{htmlFor:`email`,style:{display:`block`,marginBottom:`0.5rem`,fontSize:`0.875rem`,fontWeight:500},children:`Email`}),(0,g.jsx)(y,{id:`email`,name:`email`,type:`email`,variant:`default`,placeholder:`Enter your email`,"aria-label":`Email address`})]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`label`,{htmlFor:`error-field`,style:{display:`block`,marginBottom:`0.5rem`,fontSize:`0.875rem`,fontWeight:500,color:`#dc2626`},children:`Field with error`}),(0,g.jsx)(y,{id:`error-field`,name:`error-field`,variant:`error`,placeholder:`This field has an error`,"aria-invalid":!0,"aria-describedby":`error-message`}),(0,g.jsx)(`div`,{id:`error-message`,style:{marginTop:`0.25rem`,fontSize:`0.75rem`,color:`#dc2626`},children:`This field is required`})]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`label`,{htmlFor:`disabled-field`,style:{display:`block`,marginBottom:`0.5rem`,fontSize:`0.875rem`,fontWeight:500,opacity:.6},children:`Disabled field`}),(0,g.jsx)(y,{id:`disabled-field`,name:`disabled-field`,variant:`default`,defaultValue:`Cannot edit this`,disabled:!0})]})]})},O={render:function(){let[e,t]=(0,m.useState)(``);return(0,g.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`,minWidth:`300px`},children:[(0,g.jsx)(`label`,{htmlFor:`controlled-input`,style:{display:`block`,fontSize:`0.875rem`,fontWeight:500},children:`Controlled input (type something!)`}),(0,g.jsx)(y,{id:`controlled-input`,variant:`default`,value:e,onChange:e=>t(e.target.value),placeholder:`Type here...`}),(0,g.jsxs)(`div`,{style:{fontSize:`0.875rem`,color:`#666`},children:[`Current value: `,(0,g.jsx)(`strong`,{children:e||`(empty)`})]}),(0,g.jsxs)(`div`,{style:{fontSize:`0.875rem`,color:`#666`},children:[`Length: `,(0,g.jsx)(`strong`,{children:e.length}),` characters`]}),(0,g.jsx)(`button`,{onClick:()=>t(``),style:{padding:`0.5rem 1rem`,border:`1px solid #ccc`,borderRadius:`4px`,cursor:`pointer`,backgroundColor:`#fff`},children:`Clear input`})]})}},k={render:()=>(0,g.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1.5rem`,minWidth:`300px`},children:[(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`h3`,{style:{marginBottom:`0.5rem`,fontSize:`0.875rem`,fontWeight:600},children:`Default Variant`}),(0,g.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,g.jsxs)(`div`,{children:[(0,g.jsx)(y,{variant:`default`,placeholder:`Default state`}),(0,g.jsx)(`div`,{style:{fontSize:`0.75rem`,marginTop:`0.25rem`,color:`#666`},children:`Default`})]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(y,{variant:`default`,defaultValue:`With value`}),(0,g.jsx)(`div`,{style:{fontSize:`0.75rem`,marginTop:`0.25rem`,color:`#666`},children:`With value`})]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(y,{variant:`default`,placeholder:`Hover me`}),(0,g.jsx)(`div`,{style:{fontSize:`0.75rem`,marginTop:`0.25rem`,color:`#666`},children:`Hover state (interactive)`})]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(y,{variant:`default`,placeholder:`Focus on me`}),(0,g.jsx)(`div`,{style:{fontSize:`0.75rem`,marginTop:`0.25rem`,color:`#666`},children:`Focus state (interactive)`})]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(y,{variant:`default`,placeholder:`Disabled`,disabled:!0}),(0,g.jsx)(`div`,{style:{fontSize:`0.75rem`,marginTop:`0.25rem`,color:`#666`},children:`Disabled`})]})]})]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`h3`,{style:{marginBottom:`0.5rem`,fontSize:`0.875rem`,fontWeight:600},children:`Error Variant`}),(0,g.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,g.jsxs)(`div`,{children:[(0,g.jsx)(y,{variant:`error`,placeholder:`Error state`}),(0,g.jsx)(`div`,{style:{fontSize:`0.75rem`,marginTop:`0.25rem`,color:`#666`},children:`Error`})]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(y,{variant:`error`,defaultValue:`Invalid value`}),(0,g.jsx)(`div`,{style:{fontSize:`0.75rem`,marginTop:`0.25rem`,color:`#666`},children:`Error with value`})]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(y,{variant:`error`,placeholder:`Hover me`}),(0,g.jsx)(`div`,{style:{fontSize:`0.75rem`,marginTop:`0.25rem`,color:`#666`},children:`Error hover (interactive)`})]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(y,{variant:`error`,placeholder:`Focus on me`}),(0,g.jsx)(`div`,{style:{fontSize:`0.75rem`,marginTop:`0.25rem`,color:`#666`},children:`Error focus (interactive)`})]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(y,{variant:`error`,placeholder:`Disabled`,disabled:!0}),(0,g.jsx)(`div`,{style:{fontSize:`0.75rem`,marginTop:`0.25rem`,color:`#666`},children:`Error disabled`})]})]})]})]})},A={render:()=>(0,g.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`,minWidth:`300px`},children:[(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`label`,{style:{display:`block`,marginBottom:`0.25rem`,fontSize:`0.75rem`},children:`Text`}),(0,g.jsx)(y,{type:`text`,variant:`default`,placeholder:`Enter text`})]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`label`,{style:{display:`block`,marginBottom:`0.25rem`,fontSize:`0.75rem`},children:`Email`}),(0,g.jsx)(y,{type:`email`,variant:`default`,placeholder:`email@example.com`})]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`label`,{style:{display:`block`,marginBottom:`0.25rem`,fontSize:`0.75rem`},children:`Password`}),(0,g.jsx)(y,{type:`password`,variant:`default`,placeholder:`Enter password`})]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`label`,{style:{display:`block`,marginBottom:`0.25rem`,fontSize:`0.75rem`},children:`Telephone`}),(0,g.jsx)(y,{type:`tel`,variant:`default`,placeholder:`+1 (555) 000-0000`})]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`label`,{style:{display:`block`,marginBottom:`0.25rem`,fontSize:`0.75rem`},children:`URL`}),(0,g.jsx)(y,{type:`url`,variant:`default`,placeholder:`https://example.com`})]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`label`,{style:{display:`block`,marginBottom:`0.25rem`,fontSize:`0.75rem`},children:`Search`}),(0,g.jsx)(y,{type:`search`,variant:`default`,placeholder:`Search...`})]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`label`,{style:{display:`block`,marginBottom:`0.25rem`,fontSize:`0.75rem`},children:`Number`}),(0,g.jsx)(y,{type:`number`,variant:`default`,placeholder:`123`})]})]})},j={render:function(){let[e,t]=(0,m.useState)({firstName:``,lastName:``,email:``,password:``}),[n,r]=(0,m.useState)({}),[i,a]=(0,m.useState)(!1),o=t=>{t.preventDefault();let n={};e.firstName||(n.firstName=`First name is required`),e.lastName||(n.lastName=`Last name is required`),e.email||(n.email=`Email is required`),e.password||(n.password=`Password is required`),r(n),Object.keys(n).length===0&&a(!0)},s=e=>i=>{t(t=>({...t,[e]:i.target.value})),n[e]&&r(t=>{let n={...t};return delete n[e],n})};return i?(0,g.jsxs)(`div`,{style:{padding:`2rem`,backgroundColor:`#f0fdf4`,borderRadius:`8px`,minWidth:`300px`},children:[(0,g.jsx)(`h3`,{style:{margin:`0 0 1rem 0`,color:`#166534`},children:`Form submitted successfully!`}),(0,g.jsx)(`button`,{onClick:()=>{a(!1),t({firstName:``,lastName:``,email:``,password:``})},style:{padding:`0.5rem 1rem`,border:`1px solid #166534`,borderRadius:`4px`,cursor:`pointer`,backgroundColor:`#fff`},children:`Reset form`})]}):(0,g.jsxs)(`form`,{onSubmit:o,style:{display:`flex`,flexDirection:`column`,gap:`1rem`,minWidth:`300px`},children:[(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`label`,{htmlFor:`firstName`,style:{display:`block`,marginBottom:`0.25rem`,fontSize:`0.875rem`,fontWeight:500},children:`First Name *`}),(0,g.jsx)(y,{id:`firstName`,name:`firstName`,variant:n.firstName?`error`:`default`,value:e.firstName,onChange:s(`firstName`),placeholder:`John`,required:!0,"aria-invalid":!!n.firstName,"aria-describedby":n.firstName?`firstName-error`:void 0}),n.firstName&&(0,g.jsx)(`div`,{id:`firstName-error`,style:{marginTop:`0.25rem`,fontSize:`0.75rem`,color:`#dc2626`},children:n.firstName})]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`label`,{htmlFor:`lastName`,style:{display:`block`,marginBottom:`0.25rem`,fontSize:`0.875rem`,fontWeight:500},children:`Last Name *`}),(0,g.jsx)(y,{id:`lastName`,name:`lastName`,variant:n.lastName?`error`:`default`,value:e.lastName,onChange:s(`lastName`),placeholder:`Doe`,required:!0,"aria-invalid":!!n.lastName,"aria-describedby":n.lastName?`lastName-error`:void 0}),n.lastName&&(0,g.jsx)(`div`,{id:`lastName-error`,style:{marginTop:`0.25rem`,fontSize:`0.75rem`,color:`#dc2626`},children:n.lastName})]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`label`,{htmlFor:`email`,style:{display:`block`,marginBottom:`0.25rem`,fontSize:`0.875rem`,fontWeight:500},children:`Email *`}),(0,g.jsx)(y,{id:`email`,name:`email`,type:`email`,variant:n.email?`error`:`default`,value:e.email,onChange:s(`email`),placeholder:`john.doe@example.com`,required:!0,"aria-invalid":!!n.email,"aria-describedby":n.email?`email-error`:void 0}),n.email&&(0,g.jsx)(`div`,{id:`email-error`,style:{marginTop:`0.25rem`,fontSize:`0.75rem`,color:`#dc2626`},children:n.email})]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`label`,{htmlFor:`password`,style:{display:`block`,marginBottom:`0.25rem`,fontSize:`0.875rem`,fontWeight:500},children:`Password *`}),(0,g.jsx)(y,{id:`password`,name:`password`,type:`password`,variant:n.password?`error`:`default`,value:e.password,onChange:s(`password`),placeholder:`Enter password`,required:!0,"aria-invalid":!!n.password,"aria-describedby":n.password?`password-error`:void 0}),n.password&&(0,g.jsx)(`div`,{id:`password-error`,style:{marginTop:`0.25rem`,fontSize:`0.75rem`,color:`#dc2626`},children:n.password})]}),(0,g.jsx)(`button`,{type:`submit`,style:{marginTop:`0.5rem`,padding:`0.75rem`,border:`none`,borderRadius:`4px`,cursor:`pointer`,backgroundColor:`#3b82f6`,color:`#fff`,fontSize:`0.875rem`,fontWeight:600},children:`Submit Form`})]})}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    placeholder: 'Enter text...'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    defaultValue: 'Default value'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    placeholder: 'Invalid input'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    defaultValue: 'Invalid value'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    minWidth: '300px'
  }}>
      <Input variant="default" placeholder="Disabled empty" disabled />
      <Input variant="default" defaultValue="Disabled with value" disabled />
      <Input variant="error" placeholder="Error disabled" disabled />
      <Input variant="error" defaultValue="Error disabled with value" disabled />
    </div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    minWidth: '300px'
  }}>
      <Input variant="default" placeholder="Default variant" />
      <Input variant="error" placeholder="Error variant" />
    </div>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    minWidth: '300px'
  }}>
      <div>
        <label htmlFor="name" style={{
        display: 'block',
        marginBottom: '0.5rem',
        fontSize: '0.875rem',
        fontWeight: 500
      }}>
          Name
        </label>
        <Input id="name" name="name" variant="default" placeholder="Enter your name" aria-label="Name" />
      </div>
      <div>
        <label htmlFor="email" style={{
        display: 'block',
        marginBottom: '0.5rem',
        fontSize: '0.875rem',
        fontWeight: 500
      }}>
          Email
        </label>
        <Input id="email" name="email" type="email" variant="default" placeholder="Enter your email" aria-label="Email address" />
      </div>
      <div>
        <label htmlFor="error-field" style={{
        display: 'block',
        marginBottom: '0.5rem',
        fontSize: '0.875rem',
        fontWeight: 500,
        color: '#dc2626'
      }}>
          Field with error
        </label>
        <Input id="error-field" name="error-field" variant="error" placeholder="This field has an error" aria-invalid={true} aria-describedby="error-message" />
        <div id="error-message" style={{
        marginTop: '0.25rem',
        fontSize: '0.75rem',
        color: '#dc2626'
      }}>
          This field is required
        </div>
      </div>
      <div>
        <label htmlFor="disabled-field" style={{
        display: 'block',
        marginBottom: '0.5rem',
        fontSize: '0.875rem',
        fontWeight: 500,
        opacity: 0.6
      }}>
          Disabled field
        </label>
        <Input id="disabled-field" name="disabled-field" variant="default" defaultValue="Cannot edit this" disabled />
      </div>
    </div>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: function ControlledInput() {
    const [value, setValue] = useState('');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      minWidth: '300px'
    }}>
        <label htmlFor="controlled-input" style={{
        display: 'block',
        fontSize: '0.875rem',
        fontWeight: 500
      }}>
          Controlled input (type something!)
        </label>
        <Input id="controlled-input" variant="default" value={value} onChange={e => setValue(e.target.value)} placeholder="Type here..." />
        <div style={{
        fontSize: '0.875rem',
        color: '#666'
      }}>
          Current value: <strong>{value || '(empty)'}</strong>
        </div>
        <div style={{
        fontSize: '0.875rem',
        color: '#666'
      }}>
          Length: <strong>{value.length}</strong> characters
        </div>
        <button onClick={() => setValue('')} style={{
        padding: '0.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        cursor: 'pointer',
        backgroundColor: '#fff'
      }}>
          Clear input
        </button>
      </div>;
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    minWidth: '300px'
  }}>
      <div>
        <h3 style={{
        marginBottom: '0.5rem',
        fontSize: '0.875rem',
        fontWeight: 600
      }}>
          Default Variant
        </h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
      }}>
          <div>
            <Input variant="default" placeholder="Default state" />
            <div style={{
            fontSize: '0.75rem',
            marginTop: '0.25rem',
            color: '#666'
          }}>
              Default
            </div>
          </div>
          <div>
            <Input variant="default" defaultValue="With value" />
            <div style={{
            fontSize: '0.75rem',
            marginTop: '0.25rem',
            color: '#666'
          }}>
              With value
            </div>
          </div>
          <div>
            <Input variant="default" placeholder="Hover me" />
            <div style={{
            fontSize: '0.75rem',
            marginTop: '0.25rem',
            color: '#666'
          }}>
              Hover state (interactive)
            </div>
          </div>
          <div>
            <Input variant="default" placeholder="Focus on me" />
            <div style={{
            fontSize: '0.75rem',
            marginTop: '0.25rem',
            color: '#666'
          }}>
              Focus state (interactive)
            </div>
          </div>
          <div>
            <Input variant="default" placeholder="Disabled" disabled />
            <div style={{
            fontSize: '0.75rem',
            marginTop: '0.25rem',
            color: '#666'
          }}>
              Disabled
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 style={{
        marginBottom: '0.5rem',
        fontSize: '0.875rem',
        fontWeight: 600
      }}>
          Error Variant
        </h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
      }}>
          <div>
            <Input variant="error" placeholder="Error state" />
            <div style={{
            fontSize: '0.75rem',
            marginTop: '0.25rem',
            color: '#666'
          }}>
              Error
            </div>
          </div>
          <div>
            <Input variant="error" defaultValue="Invalid value" />
            <div style={{
            fontSize: '0.75rem',
            marginTop: '0.25rem',
            color: '#666'
          }}>
              Error with value
            </div>
          </div>
          <div>
            <Input variant="error" placeholder="Hover me" />
            <div style={{
            fontSize: '0.75rem',
            marginTop: '0.25rem',
            color: '#666'
          }}>
              Error hover (interactive)
            </div>
          </div>
          <div>
            <Input variant="error" placeholder="Focus on me" />
            <div style={{
            fontSize: '0.75rem',
            marginTop: '0.25rem',
            color: '#666'
          }}>
              Error focus (interactive)
            </div>
          </div>
          <div>
            <Input variant="error" placeholder="Disabled" disabled />
            <div style={{
            fontSize: '0.75rem',
            marginTop: '0.25rem',
            color: '#666'
          }}>
              Error disabled
            </div>
          </div>
        </div>
      </div>
    </div>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    minWidth: '300px'
  }}>
      <div>
        <label style={{
        display: 'block',
        marginBottom: '0.25rem',
        fontSize: '0.75rem'
      }}>
          Text
        </label>
        <Input type="text" variant="default" placeholder="Enter text" />
      </div>
      <div>
        <label style={{
        display: 'block',
        marginBottom: '0.25rem',
        fontSize: '0.75rem'
      }}>
          Email
        </label>
        <Input type="email" variant="default" placeholder="email@example.com" />
      </div>
      <div>
        <label style={{
        display: 'block',
        marginBottom: '0.25rem',
        fontSize: '0.75rem'
      }}>
          Password
        </label>
        <Input type="password" variant="default" placeholder="Enter password" />
      </div>
      <div>
        <label style={{
        display: 'block',
        marginBottom: '0.25rem',
        fontSize: '0.75rem'
      }}>
          Telephone
        </label>
        <Input type="tel" variant="default" placeholder="+1 (555) 000-0000" />
      </div>
      <div>
        <label style={{
        display: 'block',
        marginBottom: '0.25rem',
        fontSize: '0.75rem'
      }}>
          URL
        </label>
        <Input type="url" variant="default" placeholder="https://example.com" />
      </div>
      <div>
        <label style={{
        display: 'block',
        marginBottom: '0.25rem',
        fontSize: '0.75rem'
      }}>
          Search
        </label>
        <Input type="search" variant="default" placeholder="Search..." />
      </div>
      <div>
        <label style={{
        display: 'block',
        marginBottom: '0.25rem',
        fontSize: '0.75rem'
      }}>
          Number
        </label>
        <Input type="number" variant="default" placeholder="123" />
      </div>
    </div>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: function FormExample() {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
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
      setFormData(prev => ({
        ...prev,
        [field]: e.target.value
      }));
      if (errors[field]) {
        setErrors(prev => {
          const newErrors = {
            ...prev
          };
          delete newErrors[field];
          return newErrors;
        });
      }
    };
    if (submitted) {
      return <div style={{
        padding: '2rem',
        backgroundColor: '#f0fdf4',
        borderRadius: '8px',
        minWidth: '300px'
      }}>
          <h3 style={{
          margin: '0 0 1rem 0',
          color: '#166534'
        }}>Form submitted successfully!</h3>
          <button onClick={() => {
          setSubmitted(false);
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            password: ''
          });
        }} style={{
          padding: '0.5rem 1rem',
          border: '1px solid #166534',
          borderRadius: '4px',
          cursor: 'pointer',
          backgroundColor: '#fff'
        }}>
            Reset form
          </button>
        </div>;
    }
    return <form onSubmit={handleSubmit} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      minWidth: '300px'
    }}>
        <div>
          <label htmlFor="firstName" style={{
          display: 'block',
          marginBottom: '0.25rem',
          fontSize: '0.875rem',
          fontWeight: 500
        }}>
            First Name *
          </label>
          <Input id="firstName" name="firstName" variant={errors.firstName ? 'error' : 'default'} value={formData.firstName} onChange={handleChange('firstName')} placeholder="John" required aria-invalid={!!errors.firstName} aria-describedby={errors.firstName ? 'firstName-error' : undefined} />
          {errors.firstName && <div id="firstName-error" style={{
          marginTop: '0.25rem',
          fontSize: '0.75rem',
          color: '#dc2626'
        }}>
              {errors.firstName}
            </div>}
        </div>

        <div>
          <label htmlFor="lastName" style={{
          display: 'block',
          marginBottom: '0.25rem',
          fontSize: '0.875rem',
          fontWeight: 500
        }}>
            Last Name *
          </label>
          <Input id="lastName" name="lastName" variant={errors.lastName ? 'error' : 'default'} value={formData.lastName} onChange={handleChange('lastName')} placeholder="Doe" required aria-invalid={!!errors.lastName} aria-describedby={errors.lastName ? 'lastName-error' : undefined} />
          {errors.lastName && <div id="lastName-error" style={{
          marginTop: '0.25rem',
          fontSize: '0.75rem',
          color: '#dc2626'
        }}>
              {errors.lastName}
            </div>}
        </div>

        <div>
          <label htmlFor="email" style={{
          display: 'block',
          marginBottom: '0.25rem',
          fontSize: '0.875rem',
          fontWeight: 500
        }}>
            Email *
          </label>
          <Input id="email" name="email" type="email" variant={errors.email ? 'error' : 'default'} value={formData.email} onChange={handleChange('email')} placeholder="john.doe@example.com" required aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} />
          {errors.email && <div id="email-error" style={{
          marginTop: '0.25rem',
          fontSize: '0.75rem',
          color: '#dc2626'
        }}>
              {errors.email}
            </div>}
        </div>

        <div>
          <label htmlFor="password" style={{
          display: 'block',
          marginBottom: '0.25rem',
          fontSize: '0.875rem',
          fontWeight: 500
        }}>
            Password *
          </label>
          <Input id="password" name="password" type="password" variant={errors.password ? 'error' : 'default'} value={formData.password} onChange={handleChange('password')} placeholder="Enter password" required aria-invalid={!!errors.password} aria-describedby={errors.password ? 'password-error' : undefined} />
          {errors.password && <div id="password-error" style={{
          marginTop: '0.25rem',
          fontSize: '0.75rem',
          color: '#dc2626'
        }}>
              {errors.password}
            </div>}
        </div>

        <button type="submit" style={{
        marginTop: '0.5rem',
        padding: '0.75rem',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        backgroundColor: '#3b82f6',
        color: '#fff',
        fontSize: '0.875rem',
        fontWeight: 600
      }}>
          Submit Form
        </button>
      </form>;
  }
}`,...j.parameters?.docs?.source}}};const M=[`Default`,`WithValue`,`Error`,`ErrorWithValue`,`Disabled`,`AllVariants`,`WithLabels`,`Controlled`,`States`,`InputTypes`,`FormExample`];export{E as AllVariants,O as Controlled,x as Default,T as Disabled,C as Error,w as ErrorWithValue,j as FormExample,A as InputTypes,k as States,D as WithLabels,S as WithValue,M as __namedExportsOrder,b as default};