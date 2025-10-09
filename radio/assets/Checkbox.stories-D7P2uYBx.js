import{i as e,l as t}from"./iframe-DNla4mPf.js";import{t as n}from"./jsx-runtime-BIE8cfDK.js";import"./react-dom-BPVL9wN0.js";import{t as ee}from"./createRuntimeFn-62c9670f.esm-DKWA1Tvk.js";import{a as te,c as ne,i as r,n as i,o as a,r as re,s as o,t as s}from"./createBaseUIEventDetails-spQxsMdC.js";import{d as ie,h as c,m as l,o as u,p as d}from"./useLatestRef-CqQz6U7_.js";import{i as f,n as p,t as m,u as ae}from"./stateAttributesMapping-DdqitG6W.js";import{t as h}from"./useTransitionStatus-JMRpsd-Q.js";let g=function(e){return e.checked=`data-checked`,e.unchecked=`data-unchecked`,e.disabled=`data-disabled`,e.readonly=`data-readonly`,e.required=`data-required`,e.valid=`data-valid`,e.invalid=`data-invalid`,e.touched=`data-touched`,e.dirty=`data-dirty`,e.filled=`data-filled`,e.focused=`data-focused`,e}({});var _=t(e());function oe(e){return _.useMemo(()=>({checked(t){return e.indeterminate?{}:t?{[g.checked]:``}:{[g.unchecked]:``}},...o}),[e.indeterminate])}const se=_.createContext(void 0);function ce(e=!0){let t=_.useContext(se);if(t===void 0&&!e)throw Error(`Base UI: CheckboxGroupContext is missing. CheckboxGroup parts must be placed within <CheckboxGroup>.`);return t}const v=_.createContext(void 0);function y(){let e=_.useContext(v);if(e===void 0)throw Error(`Base UI: CheckboxRootContext is missing. Checkbox parts must be placed within <Checkbox.Root>.`);return e}var b=t(n()),le={};const x=_.forwardRef(function(e,t){let{checked:n,className:ee,defaultChecked:o=!1,disabled:p=!1,id:m,indeterminate:h=!1,inputRef:g,name:se,onCheckedChange:y,parent:x=!1,readOnly:S=!1,render:ue,required:C=!1,value:w,nativeButton:T=!0,...E}=e,{clearErrors:D}=r(),{disabled:O,labelId:k,name:A,setControlId:j,setDirty:M,setFilled:N,setFocused:P,setTouched:F,state:I,validationMode:L,validityData:de}=te(),R=ce(),z=R?.parent,B=z&&R.allValues,V=O||R?.disabled||p,H=A??se,U=w??H,W={};B&&(x?W=R.parent.getParentProps():U&&(W=R.parent.getChildProps(U)));let fe=c(y),{checked:G=n,indeterminate:K=h,onCheckedChange:pe,...me}=W,q=R?.value,he=R?.setValue,ge=R?.defaultValue,J=_.useRef(null),{getButtonProps:_e,buttonRef:ve}=f({disabled:V,native:T}),ye=re(),Y=R?.fieldControlValidation??ye,[X,be]=ne({controlled:U&&q&&!x?q.includes(U):G,default:U&&ge&&!x?ge.includes(U):o,name:`Checkbox`,state:`checked`}),Z=a(m);d(()=>{let e=J?.current;if(e)return R?j(m??null):e.closest(`label`)??j(Z),()=>{j(void 0)}},[R,Z,m,j]),i({enabled:!R,id:Z,commitValidation:Y.commitValidation,value:X,controlRef:J,name:H,getValue:()=>X});let Q=_.useRef(null),xe=l(g,Q,Y.inputRef);d(()=>{Q.current&&(Q.current.indeterminate=K,X&&N(!0))},[X,K,N]);let Se=c(()=>P(!0)),Ce=c(()=>{let e=Q.current;e&&(F(!0),P(!1),L===`onBlur`&&Y.commitValidation(R?q:e.checked))}),we=c(e=>{e.defaultPrevented||S||(e.preventDefault(),Q.current?.click())}),Te=ie({checked:X,disabled:V,name:x?void 0:H,id:`${Z}-input`,required:C,ref:xe,style:ae,tabIndex:-1,type:`checkbox`,"aria-hidden":!0,onChange(e){if(e.nativeEvent.defaultPrevented)return;let t=e.target.checked,n=s(`none`,e.nativeEvent);if(pe?.(t,n),fe(t,n),!n.isCanceled&&(D(H),M(t!==de.initialValue),be(t),R||(N(t),L===`onChange`?Y.commitValidation(t):Y.commitValidation(t,!0)),U&&q&&he&&!x)){let e=t?[...q,U]:q.filter(e=>e!==U);he(e,n),N(e.length>0),L===`onChange`?Y.commitValidation(e):Y.commitValidation(e,!0)}},onFocus(){J.current?.focus()}},w===void 0?le:{value:(R?X&&w:w)||``},R?Y.getValidationProps:Y.getInputValidationProps),Ee=B?!!G:X,De=B&&K||h;_.useEffect(()=>{z&&U&&z.disabledStatesRef.current.set(U,V)},[z,V,U]);let $=_.useMemo(()=>({...I,checked:Ee,disabled:V,readOnly:S,required:C,indeterminate:De}),[I,Ee,V,S,C,De]),Oe=oe($),ke=u(`button`,e,{state:$,ref:[ve,J,t,R?.registerControlRef],props:[{id:Z,role:`checkbox`,disabled:V,"aria-checked":K?`mixed`:X,"aria-readonly":S||void 0,"aria-required":C||void 0,"aria-labelledby":k,"data-parent":x?``:void 0,onFocus:Se,onBlur:Ce,onClick:we},Y.getValidationProps,E,me,_e],stateAttributesMapping:Oe});return(0,b.jsxs)(v.Provider,{value:$,children:[ke,!X&&!R&&e.name&&!x&&(0,b.jsx)(`input`,{type:`hidden`,name:e.name,value:`off`}),(0,b.jsx)(`input`,{...Te})]})}),S=_.forwardRef(function(e,t){let{render:n,className:ee,keepMounted:te=!1,...ne}=e,r=y(),i=r.checked||r.indeterminate,{transitionStatus:a,setMounted:re}=h(i),s=_.useRef(null),ie=_.useMemo(()=>({...r,transitionStatus:a}),[r,a]);p({open:i,ref:s,onComplete(){i||re(!1)}});let c=oe(r),l=_.useMemo(()=>({...c,...m,...o}),[c]),d=te||i,f=u(`span`,e,{enabled:d,ref:[t,s],state:ie,stateAttributesMapping:l,props:ne});return d?f:null});var ue=ee({defaultClassName:`j0jx0b0`,variantClassNames:{variant:{default:`j0jx0b1`,error:`j0jx0b2`}},defaultVariants:{variant:`default`},compoundVariants:[]}),C=`j0jx0b3`,w=`j0jx0b4`;const T=(0,_.forwardRef)(({variant:e,...t},n)=>(0,b.jsx)(x,{ref:n,className:ue({variant:e}),...t,children:(0,b.jsx)(S,{className:C,children:(0,b.jsx)(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,className:w,"aria-hidden":`true`,children:(0,b.jsx)(`path`,{d:`M13.3333 4L6 11.3333L2.66667 8`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})})})}));T.displayName=`Checkbox`,T.__docgenInfo={description:`Checkbox Component

Accessible checkbox component with theme system integration.
Uses Base UI for accessibility and keyboard navigation.
No customization allowed - use as is with predefined variants.`,methods:[],displayName:`Checkbox`,props:{name:{required:!1,tsType:{name:`string`},description:``},defaultChecked:{required:!1,tsType:{name:`boolean`},description:``},checked:{required:!1,tsType:{name:`boolean`},description:``},onCheckedChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(checked: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`checked`}],return:{name:`void`}}},description:``},indeterminate:{required:!1,tsType:{name:`boolean`},description:``},value:{required:!1,tsType:{name:`string`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``},readOnly:{required:!1,tsType:{name:`boolean`},description:``},required:{required:!1,tsType:{name:`boolean`},description:``},inputRef:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLInputElement>`,elements:[{name:`HTMLInputElement`}]},description:``}},composes:[`CheckboxVariants`]};var E={title:`Components/Checkbox`,component:T,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`default`,`error`]},checked:{control:`boolean`},disabled:{control:`boolean`},readOnly:{control:`boolean`},required:{control:`boolean`},indeterminate:{control:`boolean`}}};const D={args:{variant:`default`}},O={args:{variant:`default`,defaultChecked:!0}},k={args:{variant:`error`}},A={args:{variant:`error`,defaultChecked:!0}},j={render:()=>(0,b.jsxs)(`div`,{style:{display:`flex`,gap:`1rem`,alignItems:`center`},children:[(0,b.jsx)(T,{variant:`default`,disabled:!0}),(0,b.jsx)(T,{variant:`default`,disabled:!0,defaultChecked:!0}),(0,b.jsx)(T,{variant:`error`,disabled:!0}),(0,b.jsx)(T,{variant:`error`,disabled:!0,defaultChecked:!0})]})},M={render:()=>(0,b.jsxs)(`div`,{style:{display:`flex`,gap:`1rem`,alignItems:`center`},children:[(0,b.jsx)(T,{variant:`default`}),(0,b.jsx)(T,{variant:`default`,defaultChecked:!0}),(0,b.jsx)(T,{variant:`error`}),(0,b.jsx)(T,{variant:`error`,defaultChecked:!0})]})},N={render:()=>(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,b.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`0.5rem`,cursor:`pointer`},children:[(0,b.jsx)(T,{variant:`default`,name:`terms`}),(0,b.jsx)(`span`,{children:`I agree to the terms and conditions`})]}),(0,b.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`0.5rem`,cursor:`pointer`},children:[(0,b.jsx)(T,{variant:`default`,name:`newsletter`,defaultChecked:!0}),(0,b.jsx)(`span`,{children:`Subscribe to newsletter`})]}),(0,b.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`0.5rem`,cursor:`pointer`},children:[(0,b.jsx)(T,{variant:`error`,name:`error-field`}),(0,b.jsx)(`span`,{style:{color:`#dc2626`},children:`This field has an error`})]}),(0,b.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`0.5rem`,cursor:`not-allowed`,opacity:.6},children:[(0,b.jsx)(T,{variant:`default`,name:`disabled`,disabled:!0}),(0,b.jsx)(`span`,{children:`Disabled option`})]})]})},P={render:function(){let[e,t]=(0,_.useState)(!1);return(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`,alignItems:`flex-start`},children:[(0,b.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`0.5rem`,cursor:`pointer`},children:[(0,b.jsx)(T,{variant:`default`,checked:e,onCheckedChange:t}),(0,b.jsx)(`span`,{children:`Controlled checkbox (click me!)`})]}),(0,b.jsxs)(`div`,{style:{fontSize:`0.875rem`,color:`#666`},children:[`Status: `,e?`Checked`:`Unchecked`]}),(0,b.jsx)(`button`,{onClick:()=>t(!e),style:{padding:`0.5rem 1rem`,border:`1px solid #ccc`,borderRadius:`4px`,cursor:`pointer`},children:`Toggle from outside`})]})}},F={render:()=>(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1.5rem`},children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`h3`,{style:{marginBottom:`0.5rem`,fontSize:`0.875rem`,fontWeight:600},children:`Default Variant`}),(0,b.jsxs)(`div`,{style:{display:`flex`,gap:`1rem`,alignItems:`center`},children:[(0,b.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,b.jsx)(T,{variant:`default`}),(0,b.jsx)(`div`,{style:{fontSize:`0.75rem`,marginTop:`0.25rem`},children:`Unchecked`})]}),(0,b.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,b.jsx)(T,{variant:`default`,defaultChecked:!0}),(0,b.jsx)(`div`,{style:{fontSize:`0.75rem`,marginTop:`0.25rem`},children:`Checked`})]}),(0,b.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,b.jsx)(T,{variant:`default`,disabled:!0}),(0,b.jsx)(`div`,{style:{fontSize:`0.75rem`,marginTop:`0.25rem`},children:`Disabled`})]}),(0,b.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,b.jsx)(T,{variant:`default`,disabled:!0,defaultChecked:!0}),(0,b.jsx)(`div`,{style:{fontSize:`0.75rem`,marginTop:`0.25rem`},children:`Disabled Checked`})]})]})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`h3`,{style:{marginBottom:`0.5rem`,fontSize:`0.875rem`,fontWeight:600},children:`Error Variant`}),(0,b.jsxs)(`div`,{style:{display:`flex`,gap:`1rem`,alignItems:`center`},children:[(0,b.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,b.jsx)(T,{variant:`error`}),(0,b.jsx)(`div`,{style:{fontSize:`0.75rem`,marginTop:`0.25rem`},children:`Unchecked`})]}),(0,b.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,b.jsx)(T,{variant:`error`,defaultChecked:!0}),(0,b.jsx)(`div`,{style:{fontSize:`0.75rem`,marginTop:`0.25rem`},children:`Checked`})]}),(0,b.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,b.jsx)(T,{variant:`error`,disabled:!0}),(0,b.jsx)(`div`,{style:{fontSize:`0.75rem`,marginTop:`0.25rem`},children:`Disabled`})]}),(0,b.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,b.jsx)(T,{variant:`error`,disabled:!0,defaultChecked:!0}),(0,b.jsx)(`div`,{style:{fontSize:`0.75rem`,marginTop:`0.25rem`},children:`Disabled Checked`})]})]})]})]})},I={render:function(){let[e,t]=(0,_.useState)({feature1:!1,feature2:!0,feature3:!1,hasError:!1}),n=e=>n=>{t(t=>({...t,[e]:n}))};return(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`,minWidth:`300px`},children:[(0,b.jsx)(`h3`,{style:{margin:0,fontSize:`1rem`,fontWeight:600},children:`Select Features`}),(0,b.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`0.5rem`,cursor:`pointer`},children:[(0,b.jsx)(T,{variant:`default`,checked:e.feature1,onCheckedChange:n(`feature1`)}),(0,b.jsx)(`span`,{children:`Enable feature 1`})]}),(0,b.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`0.5rem`,cursor:`pointer`},children:[(0,b.jsx)(T,{variant:`default`,checked:e.feature2,onCheckedChange:n(`feature2`)}),(0,b.jsx)(`span`,{children:`Enable feature 2`})]}),(0,b.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`0.5rem`,cursor:`pointer`},children:[(0,b.jsx)(T,{variant:`default`,checked:e.feature3,onCheckedChange:n(`feature3`)}),(0,b.jsx)(`span`,{children:`Enable feature 3`})]}),(0,b.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`0.5rem`,cursor:`pointer`},children:[(0,b.jsx)(T,{variant:e.hasError?`error`:`default`,checked:e.hasError,onCheckedChange:n(`hasError`)}),(0,b.jsx)(`span`,{style:{color:e.hasError?`#dc2626`:`inherit`},children:`Simulate error state`})]}),(0,b.jsxs)(`div`,{style:{marginTop:`1rem`,padding:`1rem`,backgroundColor:`#f3f4f6`,borderRadius:`4px`,fontSize:`0.875rem`},children:[(0,b.jsx)(`strong`,{children:`Selected options:`}),(0,b.jsx)(`ul`,{style:{margin:`0.5rem 0 0 0`,paddingLeft:`1.5rem`},children:Object.entries(e).filter(([e,t])=>t&&e!==`hasError`).map(([e])=>(0,b.jsx)(`li`,{children:e},e))}),Object.values(e).filter((e,t)=>e&&t<3).length===0&&(0,b.jsx)(`p`,{style:{margin:`0.5rem 0 0 0`},children:`No features selected`})]})]})}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    defaultChecked: true
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    defaultChecked: true
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>
      <Checkbox variant="default" disabled />
      <Checkbox variant="default" disabled defaultChecked />
      <Checkbox variant="error" disabled />
      <Checkbox variant="error" disabled defaultChecked />
    </div>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>
      <Checkbox variant="default" />
      <Checkbox variant="default" defaultChecked />
      <Checkbox variant="error" />
      <Checkbox variant="error" defaultChecked />
    </div>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <label style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      cursor: 'pointer'
    }}>
        <Checkbox variant="default" name="terms" />
        <span>I agree to the terms and conditions</span>
      </label>
      <label style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      cursor: 'pointer'
    }}>
        <Checkbox variant="default" name="newsletter" defaultChecked />
        <span>Subscribe to newsletter</span>
      </label>
      <label style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      cursor: 'pointer'
    }}>
        <Checkbox variant="error" name="error-field" />
        <span style={{
        color: '#dc2626'
      }}>This field has an error</span>
      </label>
      <label style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      cursor: 'not-allowed',
      opacity: 0.6
    }}>
        <Checkbox variant="default" name="disabled" disabled />
        <span>Disabled option</span>
      </label>
    </div>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: function ControlledCheckbox() {
    const [checked, setChecked] = useState(false);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      alignItems: 'flex-start'
    }}>
        <label style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        cursor: 'pointer'
      }}>
          <Checkbox variant="default" checked={checked} onCheckedChange={setChecked} />
          <span>Controlled checkbox (click me!)</span>
        </label>
        <div style={{
        fontSize: '0.875rem',
        color: '#666'
      }}>
          Status: {checked ? 'Checked' : 'Unchecked'}
        </div>
        <button onClick={() => setChecked(!checked)} style={{
        padding: '0.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>
          Toggle from outside
        </button>
      </div>;
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
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
        gap: '1rem',
        alignItems: 'center'
      }}>
          <div style={{
          textAlign: 'center'
        }}>
            <Checkbox variant="default" />
            <div style={{
            fontSize: '0.75rem',
            marginTop: '0.25rem'
          }}>Unchecked</div>
          </div>
          <div style={{
          textAlign: 'center'
        }}>
            <Checkbox variant="default" defaultChecked />
            <div style={{
            fontSize: '0.75rem',
            marginTop: '0.25rem'
          }}>Checked</div>
          </div>
          <div style={{
          textAlign: 'center'
        }}>
            <Checkbox variant="default" disabled />
            <div style={{
            fontSize: '0.75rem',
            marginTop: '0.25rem'
          }}>Disabled</div>
          </div>
          <div style={{
          textAlign: 'center'
        }}>
            <Checkbox variant="default" disabled defaultChecked />
            <div style={{
            fontSize: '0.75rem',
            marginTop: '0.25rem'
          }}>Disabled Checked</div>
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
        gap: '1rem',
        alignItems: 'center'
      }}>
          <div style={{
          textAlign: 'center'
        }}>
            <Checkbox variant="error" />
            <div style={{
            fontSize: '0.75rem',
            marginTop: '0.25rem'
          }}>Unchecked</div>
          </div>
          <div style={{
          textAlign: 'center'
        }}>
            <Checkbox variant="error" defaultChecked />
            <div style={{
            fontSize: '0.75rem',
            marginTop: '0.25rem'
          }}>Checked</div>
          </div>
          <div style={{
          textAlign: 'center'
        }}>
            <Checkbox variant="error" disabled />
            <div style={{
            fontSize: '0.75rem',
            marginTop: '0.25rem'
          }}>Disabled</div>
          </div>
          <div style={{
          textAlign: 'center'
        }}>
            <Checkbox variant="error" disabled defaultChecked />
            <div style={{
            fontSize: '0.75rem',
            marginTop: '0.25rem'
          }}>Disabled Checked</div>
          </div>
        </div>
      </div>
    </div>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: function InteractiveDemo() {
    const [options, setOptions] = useState({
      feature1: false,
      feature2: true,
      feature3: false,
      hasError: false
    });
    const handleChange = (key: keyof typeof options) => (checked: boolean) => {
      setOptions(prev => ({
        ...prev,
        [key]: checked
      }));
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      minWidth: '300px'
    }}>
        <h3 style={{
        margin: 0,
        fontSize: '1rem',
        fontWeight: 600
      }}>
          Select Features
        </h3>
        <label style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        cursor: 'pointer'
      }}>
          <Checkbox variant="default" checked={options.feature1} onCheckedChange={handleChange('feature1')} />
          <span>Enable feature 1</span>
        </label>
        <label style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        cursor: 'pointer'
      }}>
          <Checkbox variant="default" checked={options.feature2} onCheckedChange={handleChange('feature2')} />
          <span>Enable feature 2</span>
        </label>
        <label style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        cursor: 'pointer'
      }}>
          <Checkbox variant="default" checked={options.feature3} onCheckedChange={handleChange('feature3')} />
          <span>Enable feature 3</span>
        </label>
        <label style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        cursor: 'pointer'
      }}>
          <Checkbox variant={options.hasError ? 'error' : 'default'} checked={options.hasError} onCheckedChange={handleChange('hasError')} />
          <span style={{
          color: options.hasError ? '#dc2626' : 'inherit'
        }}>
            Simulate error state
          </span>
        </label>
        <div style={{
        marginTop: '1rem',
        padding: '1rem',
        backgroundColor: '#f3f4f6',
        borderRadius: '4px',
        fontSize: '0.875rem'
      }}>
          <strong>Selected options:</strong>
          <ul style={{
          margin: '0.5rem 0 0 0',
          paddingLeft: '1.5rem'
        }}>
            {Object.entries(options).filter(([key, value]) => value && key !== 'hasError').map(([key]) => <li key={key}>{key}</li>)}
          </ul>
          {Object.values(options).filter((v, i) => v && i < 3).length === 0 && <p style={{
          margin: '0.5rem 0 0 0'
        }}>No features selected</p>}
        </div>
      </div>;
  }
}`,...I.parameters?.docs?.source}}};const L=[`Default`,`DefaultChecked`,`Error`,`ErrorChecked`,`Disabled`,`AllVariants`,`WithLabels`,`Controlled`,`States`,`InteractiveDemo`];export{M as AllVariants,P as Controlled,D as Default,O as DefaultChecked,j as Disabled,k as Error,A as ErrorChecked,I as InteractiveDemo,F as States,N as WithLabels,L as __namedExportsOrder,E as default};