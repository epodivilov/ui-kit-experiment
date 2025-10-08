import{i as e,l as t}from"./iframe-C8COf8NS.js";import{t as n}from"./jsx-runtime-CL2MIzP5.js";import{t as r}from"./react-dom-DRdXbda-.js";import{t as i}from"./createRuntimeFn-62c9670f.esm-DKWA1Tvk.js";import{a,c as o,i as s,n as c,o as l,r as u,s as d,t as f}from"./createBaseUIEventDetails-fAJ9ern9.js";import{f as p,m,o as h,p as g,u as ee}from"./useLatestRef-CvNRVdmA.js";import{i as te,n as _,r as v,s as ne,t as y}from"./stateAttributesMapping-DA7Xcauz.js";let b=function(e){return e.checked=`data-checked`,e.unchecked=`data-unchecked`,e.disabled=`data-disabled`,e.readonly=`data-readonly`,e.required=`data-required`,e.valid=`data-valid`,e.invalid=`data-invalid`,e.touched=`data-touched`,e.dirty=`data-dirty`,e.filled=`data-filled`,e.focused=`data-focused`,e}({});var x=t(e());function S(e){return x.useMemo(()=>({checked(t){return e.indeterminate?{}:t?{[b.checked]:``}:{[b.unchecked]:``}},...d}),[e.indeterminate])}const re=x.createContext(void 0);function ie(e=!0){let t=x.useContext(re);if(t===void 0&&!e)throw Error(`Base UI: CheckboxGroupContext is missing. CheckboxGroup parts must be placed within <CheckboxGroup>.`);return t}const C=x.createContext(void 0);function w(){let e=x.useContext(C);if(e===void 0)throw Error(`Base UI: CheckboxRootContext is missing. Checkbox parts must be placed within <Checkbox.Root>.`);return e}var T=t(n()),ae={};const E=x.forwardRef(function(e,t){let{checked:n,className:r,defaultChecked:i=!1,disabled:d=!1,id:_,indeterminate:v=!1,inputRef:y,name:b,onCheckedChange:re,parent:w=!1,readOnly:E=!1,render:oe,required:D=!1,value:O,nativeButton:se=!0,...ce}=e,{clearErrors:le}=s(),{disabled:k,labelId:ue,name:A,setControlId:j,setDirty:M,setFilled:N,setFocused:P,setTouched:F,state:I,validationMode:L,validityData:R}=a(),z=ie(),B=z?.parent,V=B&&z.allValues,H=k||z?.disabled||d,U=A??b,W=O??U,G={};V&&(w?G=z.parent.getParentProps():W&&(G=z.parent.getChildProps(W)));let de=m(re),{checked:fe=n,indeterminate:K=v,onCheckedChange:pe,...me}=G,q=z?.value,he=z?.setValue,ge=z?.defaultValue,J=x.useRef(null),{getButtonProps:_e,buttonRef:ve}=te({disabled:H,native:se}),ye=u(),Y=z?.fieldControlValidation??ye,[X,be]=o({controlled:W&&q&&!w?q.includes(W):fe,default:W&&ge&&!w?ge.includes(W):i,name:`Checkbox`,state:`checked`}),Z=l(_);p(()=>{let e=J?.current;if(e)return z?j(_??null):e.closest(`label`)??j(Z),()=>{j(void 0)}},[z,Z,_,j]),c({enabled:!z,id:Z,commitValidation:Y.commitValidation,value:X,controlRef:J,name:U,getValue:()=>X});let Q=x.useRef(null),xe=g(y,Q,Y.inputRef);p(()=>{Q.current&&(Q.current.indeterminate=K,X&&N(!0))},[X,K,N]);let Se=m(()=>P(!0)),Ce=m(()=>{let e=Q.current;e&&(F(!0),P(!1),L===`onBlur`&&Y.commitValidation(z?q:e.checked))}),we=m(e=>{e.defaultPrevented||E||(e.preventDefault(),Q.current?.click())}),Te=ee({checked:X,disabled:H,name:w?void 0:U,id:`${Z}-input`,required:D,ref:xe,style:ne,tabIndex:-1,type:`checkbox`,"aria-hidden":!0,onChange(e){if(e.nativeEvent.defaultPrevented)return;let t=e.target.checked,n=f(`none`,e.nativeEvent);if(pe?.(t,n),de(t,n),!n.isCanceled&&(le(U),M(t!==R.initialValue),be(t),z||(N(t),L===`onChange`?Y.commitValidation(t):Y.commitValidation(t,!0)),W&&q&&he&&!w)){let e=t?[...q,W]:q.filter(e=>e!==W);he(e,n),N(e.length>0),L===`onChange`?Y.commitValidation(e):Y.commitValidation(e,!0)}},onFocus(){J.current?.focus()}},O===void 0?ae:{value:(z?X&&O:O)||``},z?Y.getValidationProps:Y.getInputValidationProps),Ee=V?!!fe:X,De=V&&K||v;x.useEffect(()=>{B&&W&&B.disabledStatesRef.current.set(W,H)},[B,H,W]);let $=x.useMemo(()=>({...I,checked:Ee,disabled:H,readOnly:E,required:D,indeterminate:De}),[I,Ee,H,E,D,De]),Oe=S($),ke=h(`button`,e,{state:$,ref:[ve,J,t,z?.registerControlRef],props:[{id:Z,role:`checkbox`,disabled:H,"aria-checked":K?`mixed`:X,"aria-readonly":E||void 0,"aria-required":D||void 0,"aria-labelledby":ue,"data-parent":w?``:void 0,onFocus:Se,onBlur:Ce,onClick:we},Y.getValidationProps,ce,me,_e],stateAttributesMapping:Oe});return(0,T.jsxs)(C.Provider,{value:$,children:[ke,!X&&!z&&e.name&&!w&&(0,T.jsx)(`input`,{type:`hidden`,name:e.name,value:`off`}),(0,T.jsx)(`input`,{...Te})]})});var oe=t(r());function D(e,t=!1,n=!1){let[r,i]=x.useState(e&&t?`idle`:void 0),[a,o]=x.useState(e);return e&&!a&&(o(!0),i(`starting`)),!e&&a&&r!==`ending`&&!n&&i(`ending`),!e&&!a&&r===`ending`&&i(void 0),p(()=>{if(!e&&a&&r!==`ending`&&n){let e=v.request(()=>{i(`ending`)});return()=>{v.cancel(e)}}},[e,a,r,n]),p(()=>{if(!e||t)return;let n=v.request(()=>{oe.flushSync(()=>{i(void 0)})});return()=>{v.cancel(n)}},[t,e]),p(()=>{if(!e||!t)return;e&&a&&r!==`idle`&&i(`starting`);let n=v.request(()=>{i(`idle`)});return()=>{v.cancel(n)}},[t,e,a,i,r]),x.useMemo(()=>({mounted:a,setMounted:o,transitionStatus:r}),[a,r])}const O=x.forwardRef(function(e,t){let{render:n,className:r,keepMounted:i=!1,...a}=e,o=w(),s=o.checked||o.indeterminate,{transitionStatus:c,setMounted:l}=D(s),u=x.useRef(null),f=x.useMemo(()=>({...o,transitionStatus:c}),[o,c]);_({open:s,ref:u,onComplete(){s||l(!1)}});let p=S(o),m=x.useMemo(()=>({...p,...y,...d}),[p]),g=i||s,ee=h(`span`,e,{enabled:g,ref:[t,u],state:f,stateAttributesMapping:m,props:a});return g?ee:null});var se=i({defaultClassName:`j0jx0b0`,variantClassNames:{variant:{default:`j0jx0b1`,error:`j0jx0b2`}},defaultVariants:{variant:`default`},compoundVariants:[]}),ce=`j0jx0b3`,le=`j0jx0b4`;const k=(0,x.forwardRef)(({variant:e,...t},n)=>(0,T.jsx)(E,{ref:n,className:se({variant:e}),...t,children:(0,T.jsx)(O,{className:ce,children:(0,T.jsx)(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,className:le,"aria-hidden":`true`,children:(0,T.jsx)(`path`,{d:`M13.3333 4L6 11.3333L2.66667 8`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})})})}));k.displayName=`Checkbox`,k.__docgenInfo={description:`Checkbox Component

Accessible checkbox component with theme system integration.
Uses Base UI for accessibility and keyboard navigation.
No customization allowed - use as is with predefined variants.`,methods:[],displayName:`Checkbox`,props:{name:{required:!1,tsType:{name:`string`},description:``},defaultChecked:{required:!1,tsType:{name:`boolean`},description:``},checked:{required:!1,tsType:{name:`boolean`},description:``},onCheckedChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(checked: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`checked`}],return:{name:`void`}}},description:``},indeterminate:{required:!1,tsType:{name:`boolean`},description:``},value:{required:!1,tsType:{name:`string`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``},readOnly:{required:!1,tsType:{name:`boolean`},description:``},required:{required:!1,tsType:{name:`boolean`},description:``},inputRef:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLInputElement>`,elements:[{name:`HTMLInputElement`}]},description:``}},composes:[`CheckboxVariants`]};var ue={title:`Components/Checkbox`,component:k,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`default`,`error`]},checked:{control:`boolean`},disabled:{control:`boolean`},readOnly:{control:`boolean`},required:{control:`boolean`},indeterminate:{control:`boolean`}}};const A={args:{variant:`default`}},j={args:{variant:`default`,defaultChecked:!0}},M={args:{variant:`error`}},N={args:{variant:`error`,defaultChecked:!0}},P={render:()=>(0,T.jsxs)(`div`,{style:{display:`flex`,gap:`1rem`,alignItems:`center`},children:[(0,T.jsx)(k,{variant:`default`,disabled:!0}),(0,T.jsx)(k,{variant:`default`,disabled:!0,defaultChecked:!0}),(0,T.jsx)(k,{variant:`error`,disabled:!0}),(0,T.jsx)(k,{variant:`error`,disabled:!0,defaultChecked:!0})]})},F={render:()=>(0,T.jsxs)(`div`,{style:{display:`flex`,gap:`1rem`,alignItems:`center`},children:[(0,T.jsx)(k,{variant:`default`}),(0,T.jsx)(k,{variant:`default`,defaultChecked:!0}),(0,T.jsx)(k,{variant:`error`}),(0,T.jsx)(k,{variant:`error`,defaultChecked:!0})]})},I={render:()=>(0,T.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,T.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`0.5rem`,cursor:`pointer`},children:[(0,T.jsx)(k,{variant:`default`,name:`terms`}),(0,T.jsx)(`span`,{children:`I agree to the terms and conditions`})]}),(0,T.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`0.5rem`,cursor:`pointer`},children:[(0,T.jsx)(k,{variant:`default`,name:`newsletter`,defaultChecked:!0}),(0,T.jsx)(`span`,{children:`Subscribe to newsletter`})]}),(0,T.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`0.5rem`,cursor:`pointer`},children:[(0,T.jsx)(k,{variant:`error`,name:`error-field`}),(0,T.jsx)(`span`,{style:{color:`#dc2626`},children:`This field has an error`})]}),(0,T.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`0.5rem`,cursor:`not-allowed`,opacity:.6},children:[(0,T.jsx)(k,{variant:`default`,name:`disabled`,disabled:!0}),(0,T.jsx)(`span`,{children:`Disabled option`})]})]})},L={render:function(){let[e,t]=(0,x.useState)(!1);return(0,T.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`,alignItems:`flex-start`},children:[(0,T.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`0.5rem`,cursor:`pointer`},children:[(0,T.jsx)(k,{variant:`default`,checked:e,onCheckedChange:t}),(0,T.jsx)(`span`,{children:`Controlled checkbox (click me!)`})]}),(0,T.jsxs)(`div`,{style:{fontSize:`0.875rem`,color:`#666`},children:[`Status: `,e?`Checked`:`Unchecked`]}),(0,T.jsx)(`button`,{onClick:()=>t(!e),style:{padding:`0.5rem 1rem`,border:`1px solid #ccc`,borderRadius:`4px`,cursor:`pointer`},children:`Toggle from outside`})]})}},R={render:()=>(0,T.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1.5rem`},children:[(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`h3`,{style:{marginBottom:`0.5rem`,fontSize:`0.875rem`,fontWeight:600},children:`Default Variant`}),(0,T.jsxs)(`div`,{style:{display:`flex`,gap:`1rem`,alignItems:`center`},children:[(0,T.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,T.jsx)(k,{variant:`default`}),(0,T.jsx)(`div`,{style:{fontSize:`0.75rem`,marginTop:`0.25rem`},children:`Unchecked`})]}),(0,T.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,T.jsx)(k,{variant:`default`,defaultChecked:!0}),(0,T.jsx)(`div`,{style:{fontSize:`0.75rem`,marginTop:`0.25rem`},children:`Checked`})]}),(0,T.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,T.jsx)(k,{variant:`default`,disabled:!0}),(0,T.jsx)(`div`,{style:{fontSize:`0.75rem`,marginTop:`0.25rem`},children:`Disabled`})]}),(0,T.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,T.jsx)(k,{variant:`default`,disabled:!0,defaultChecked:!0}),(0,T.jsx)(`div`,{style:{fontSize:`0.75rem`,marginTop:`0.25rem`},children:`Disabled Checked`})]})]})]}),(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`h3`,{style:{marginBottom:`0.5rem`,fontSize:`0.875rem`,fontWeight:600},children:`Error Variant`}),(0,T.jsxs)(`div`,{style:{display:`flex`,gap:`1rem`,alignItems:`center`},children:[(0,T.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,T.jsx)(k,{variant:`error`}),(0,T.jsx)(`div`,{style:{fontSize:`0.75rem`,marginTop:`0.25rem`},children:`Unchecked`})]}),(0,T.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,T.jsx)(k,{variant:`error`,defaultChecked:!0}),(0,T.jsx)(`div`,{style:{fontSize:`0.75rem`,marginTop:`0.25rem`},children:`Checked`})]}),(0,T.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,T.jsx)(k,{variant:`error`,disabled:!0}),(0,T.jsx)(`div`,{style:{fontSize:`0.75rem`,marginTop:`0.25rem`},children:`Disabled`})]}),(0,T.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,T.jsx)(k,{variant:`error`,disabled:!0,defaultChecked:!0}),(0,T.jsx)(`div`,{style:{fontSize:`0.75rem`,marginTop:`0.25rem`},children:`Disabled Checked`})]})]})]})]})},z={render:function(){let[e,t]=(0,x.useState)({feature1:!1,feature2:!0,feature3:!1,hasError:!1}),n=e=>n=>{t(t=>({...t,[e]:n}))};return(0,T.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`,minWidth:`300px`},children:[(0,T.jsx)(`h3`,{style:{margin:0,fontSize:`1rem`,fontWeight:600},children:`Select Features`}),(0,T.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`0.5rem`,cursor:`pointer`},children:[(0,T.jsx)(k,{variant:`default`,checked:e.feature1,onCheckedChange:n(`feature1`)}),(0,T.jsx)(`span`,{children:`Enable feature 1`})]}),(0,T.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`0.5rem`,cursor:`pointer`},children:[(0,T.jsx)(k,{variant:`default`,checked:e.feature2,onCheckedChange:n(`feature2`)}),(0,T.jsx)(`span`,{children:`Enable feature 2`})]}),(0,T.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`0.5rem`,cursor:`pointer`},children:[(0,T.jsx)(k,{variant:`default`,checked:e.feature3,onCheckedChange:n(`feature3`)}),(0,T.jsx)(`span`,{children:`Enable feature 3`})]}),(0,T.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`0.5rem`,cursor:`pointer`},children:[(0,T.jsx)(k,{variant:e.hasError?`error`:`default`,checked:e.hasError,onCheckedChange:n(`hasError`)}),(0,T.jsx)(`span`,{style:{color:e.hasError?`#dc2626`:`inherit`},children:`Simulate error state`})]}),(0,T.jsxs)(`div`,{style:{marginTop:`1rem`,padding:`1rem`,backgroundColor:`#f3f4f6`,borderRadius:`4px`,fontSize:`0.875rem`},children:[(0,T.jsx)(`strong`,{children:`Selected options:`}),(0,T.jsx)(`ul`,{style:{margin:`0.5rem 0 0 0`,paddingLeft:`1.5rem`},children:Object.entries(e).filter(([e,t])=>t&&e!==`hasError`).map(([e])=>(0,T.jsx)(`li`,{children:e},e))}),Object.values(e).filter((e,t)=>e&&t<3).length===0&&(0,T.jsx)(`p`,{style:{margin:`0.5rem 0 0 0`},children:`No features selected`})]})]})}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default'
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    defaultChecked: true
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error'
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    defaultChecked: true
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}};const B=[`Default`,`DefaultChecked`,`Error`,`ErrorChecked`,`Disabled`,`AllVariants`,`WithLabels`,`Controlled`,`States`,`InteractiveDemo`];export{F as AllVariants,L as Controlled,A as Default,j as DefaultChecked,P as Disabled,M as Error,N as ErrorChecked,z as InteractiveDemo,R as States,I as WithLabels,B as __namedExportsOrder,ue as default};