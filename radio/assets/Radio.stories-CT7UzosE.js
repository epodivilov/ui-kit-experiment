import{i as e,l as t}from"./iframe-DNla4mPf.js";import{t as n}from"./jsx-runtime-BIE8cfDK.js";import"./react-dom-BPVL9wN0.js";import{t as r}from"./createRuntimeFn-62c9670f.esm-DKWA1Tvk.js";import{a as i,c as a,i as o,n as s,o as c,r as l,s as u,t as d}from"./createBaseUIEventDetails-spQxsMdC.js";import{c as f,d as p,g as m,h,l as g,m as _,o as v,p as y,s as b}from"./useLatestRef-CqQz6U7_.js";import{a as x,c as S,i as C,n as w,o as T,t as E,u as ee}from"./stateAttributesMapping-DdqitG6W.js";import{t as D}from"./useTransitionStatus-JMRpsd-Q.js";import{a as te,c as ne,n as re,o as O,s as k}from"./element-y6ApqZNI.js";function A(e){e.preventDefault(),e.stopPropagation()}var j=Math.floor;function M(e,t,n){return Math.floor(e/t)!==n}function N(e,t){return t<0||t>=e.current.length}function P(e,t){return I(e,{disabledIndices:t})}function F(e,t){return I(e,{decrement:!0,startingIndex:e.current.length,disabledIndices:t})}function I(e,{startingIndex:t=-1,decrement:n=!1,disabledIndices:r,amount:i=1}={}){let a=t;do a+=n?-i:i;while(a>=0&&a<=e.current.length-1&&z(e,a,r));return a}function L(e,{event:t,orientation:n,loop:r,rtl:i,cols:a,disabledIndices:o,minIndex:s,maxIndex:c,prevIndex:l,stopEvent:u=!1}){let d=l,f=[],p={},m=!1;{let t=null,n=-1;e.current.forEach((e,r)=>{if(e==null)return;let i=e.closest(`[role="row"]`);i&&(m=!0),(i!==t||n===-1)&&(t=i,n+=1,f[n]=[]),f[n].push(r),p[r]=n})}let h=m&&f.length>0&&f.some(e=>e.length!==a);function g(t){if(!h||l===-1)return;let n=p[l];if(n==null)return;let i=f[n].indexOf(l),a=t===`up`?n-1:n+1;r&&(a<0?a=f.length-1:a>=f.length&&(a=0));let s=new Set;for(;a>=0&&a<f.length&&!s.has(a);){s.add(a);let n=f[a];if(n.length===0){a=t===`up`?a-1:a+1;continue}let c=Math.min(i,n.length-1);for(let t=c;t>=0;--t){let r=n[t];if(!z(e,r,o))return r}a=t===`up`?a-1:a+1,r&&(a<0?a=f.length-1:a>=f.length&&(a=0))}}if(t.key===`ArrowUp`){let n=g(`up`);if(n!==void 0)u&&A(t),d=n;else{if(u&&A(t),l===-1)d=c;else if(d=I(e,{startingIndex:d,amount:a,decrement:!0,disabledIndices:o}),r&&(l-a<s||d<0)){let e=l%a,t=c%a,n=c-(t-e);d=t===e?c:t>e?n:n-a}N(e,d)&&(d=l)}}if(t.key===`ArrowDown`){let n=g(`down`);n===void 0?(u&&A(t),l===-1?d=s:(d=I(e,{startingIndex:l,amount:a,disabledIndices:o}),r&&l+a>c&&(d=I(e,{startingIndex:l%a-a,amount:a,disabledIndices:o}))),N(e,d)&&(d=l)):(u&&A(t),d=n)}if(n===`both`){let n=j(l/a);t.key===(i?`ArrowLeft`:`ArrowRight`)&&(u&&A(t),l%a===a-1?r&&(d=I(e,{startingIndex:l-l%a-1,disabledIndices:o})):(d=I(e,{startingIndex:l,disabledIndices:o}),r&&M(d,a,n)&&(d=I(e,{startingIndex:l-l%a-1,disabledIndices:o}))),M(d,a,n)&&(d=l)),t.key===(i?`ArrowRight`:`ArrowLeft`)&&(u&&A(t),l%a===0?r&&(d=I(e,{startingIndex:l+(a-l%a),decrement:!0,disabledIndices:o})):(d=I(e,{startingIndex:l,decrement:!0,disabledIndices:o}),r&&M(d,a,n)&&(d=I(e,{startingIndex:l+(a-l%a),decrement:!0,disabledIndices:o}))),M(d,a,n)&&(d=l));let s=j(c/a)===n;N(e,d)&&(d=r&&s?t.key===(i?`ArrowRight`:`ArrowLeft`)?c:I(e,{startingIndex:l-l%a-1,disabledIndices:o}):l)}return d}function ie(e,t,n){let r=[],i=0;return e.forEach(({width:e,height:a},o)=>{let s=!1;for(n&&(i=0);!s;){let n=[];for(let r=0;r<e;r+=1)for(let e=0;e<a;e+=1)n.push(i+r+e*t);i%t+e<=t&&n.every(e=>r[e]==null)?(n.forEach(e=>{r[e]=o}),s=!0):i+=1}}),[...r]}function R(e,t,n,r,i){if(e===-1)return-1;let a=n.indexOf(e),o=t[e];switch(i){case`tl`:return a;case`tr`:return o?a+o.width-1:a;case`bl`:return o?a+(o.height-1)*r:a;case`br`:return n.lastIndexOf(e);default:return-1}}function ae(e,t){return t.flatMap((t,n)=>e.includes(t)?[n]:[])}function z(e,t,n){if(typeof n==`function`)return n(t);if(n)return n.includes(t);let r=e.current[t];return r==null||r.hasAttribute(`disabled`)||r.getAttribute(`aria-disabled`)===`true`}var B=t(e());const V=B.createContext({register:()=>{},unregister:()=>{},subscribeMapChange:()=>()=>{},elementsRef:{current:[]},nextIndexRef:{current:0}});function H(){return B.useContext(V)}let oe=function(e){return e[e.None=0]=`None`,e[e.GuessFromOrder=1]=`GuessFromOrder`,e}({});function se(e={}){let{label:t,metadata:n,textRef:r,indexGuessBehavior:i,index:a}=e,{register:o,unregister:s,subscribeMapChange:c,elementsRef:l,labelsRef:u,nextIndexRef:d}=H(),f=B.useRef(-1),[p,m]=B.useState(a??(i===oe.GuessFromOrder?()=>{if(f.current===-1){let e=d.current;d.current+=1,f.current=e}return f.current}:-1)),h=B.useRef(null),g=B.useCallback(e=>{if(h.current=e,p!==-1&&e!==null&&(l.current[p]=e,u)){let n=t!==void 0;u.current[p]=n?t:r?.current?.textContent??e.textContent}},[p,l,u,t,r]);return y(()=>{if(a!=null)return;let e=h.current;if(e)return o(e,n),()=>{s(e)}},[a,o,s,n]),y(()=>{if(a==null)return c(e=>{let t=h.current?e.get(h.current)?.index:null;t!=null&&m(t)})},[a,c,m]),B.useMemo(()=>({ref:g,index:p}),[p,g])}function U(e={}){let{highlightItemOnHover:t,highlightedIndex:n,onHighlightedIndexChange:r}=T(),{ref:i,index:a}=se(e),o=n===a,s=B.useRef(null),c=_(i,s);return{compositeProps:B.useMemo(()=>({tabIndex:o?0:-1,onFocus(){r(a)},onMouseMove(){let e=s.current;if(!t||!e)return;let n=e.hasAttribute(`disabled`)||e.ariaDisabled===`true`;!o&&!n&&e.focus()}}),[o,r,a,t]),compositeRef:c,index:a}}function ce(e){let{render:t,className:n,state:r=f,props:i=b,refs:a=b,metadata:o,stateAttributesMapping:s,tag:c=`div`,...l}=e,{compositeProps:u,compositeRef:d}=U({metadata:o});return v(c,e,{state:r,ref:[...a,d],props:[u,...i,l],stateAttributesMapping:s})}let le=function(e){return e.checked=`data-checked`,e.unchecked=`data-unchecked`,e.disabled=`data-disabled`,e.readonly=`data-readonly`,e.required=`data-required`,e.valid=`data-valid`,e.invalid=`data-invalid`,e.touched=`data-touched`,e.dirty=`data-dirty`,e.filled=`data-filled`,e.focused=`data-focused`,e}({});const ue={checked(e){return e?{[le.checked]:``}:{[le.unchecked]:``}},...E,...u},de=B.createContext({disabled:void 0,readOnly:void 0,required:void 0,name:void 0,checkedValue:``,setCheckedValue:g,onValueChange:g,touched:!1,setTouched:g,registerControlRef:g});function fe(){return B.useContext(de)}const pe=B.createContext(void 0);function me(){let e=B.useContext(pe);if(e===void 0)throw Error(`Base UI: RadioRootContext is missing. Radio parts must be placed within <Radio.Root>.`);return e}var W=t(n());const he=B.forwardRef(function(e,t){let{render:n,className:r,disabled:a=!1,readOnly:o=!1,required:s=!1,value:l,inputRef:u,nativeButton:p=!0,...m}=e,{disabled:h,readOnly:b,required:x,checkedValue:S,setCheckedValue:w,touched:T,setTouched:E,fieldControlValidation:D,registerControlRef:te}=fe(),{state:ne,disabled:re}=i(),O=re||h||a,k=b||o,A=x||s,{setDirty:j,validityData:M,setTouched:N,setFilled:P}=i(),F=S===l,I=B.useRef(null),L=_(u,I);y(()=>{I.current?.checked&&P(!0)},[P]);let ie=B.useMemo(()=>({role:`radio`,"aria-checked":F,"aria-required":A||void 0,"aria-disabled":O||void 0,"aria-readonly":k||void 0,"data-composite-item-active":F?``:void 0,disabled:O,onKeyDown(e){e.key===`Enter`&&e.preventDefault()},onClick(e){e.defaultPrevented||O||k||(e.preventDefault(),I.current?.click())},onFocus(e){e.defaultPrevented||O||k||!T||(I.current?.click(),E(!1))}}),[F,A,O,k,T,E]),{getButtonProps:R,buttonRef:ae}=C({disabled:O,native:p}),z=c(),V=B.useMemo(()=>({type:`radio`,ref:L,id:z,tabIndex:-1,style:ee,"aria-hidden":!0,disabled:O,checked:F,required:A,readOnly:k,onChange(e){if(e.nativeEvent.defaultPrevented||O||k||l===void 0)return;let t=d(`none`,e.nativeEvent);t.isCanceled||(N(!0),j(l!==M.initialValue),P(!0),w(l,t))}}),[F,O,z,k,L,A,w,j,N,P,M.initialValue,l]),H=B.useMemo(()=>({...ne,required:A,disabled:O,readOnly:k,checked:F}),[ne,O,k,F,A]),oe=B.useMemo(()=>H,[H]),se=w!==g,U=[t,te,ae],le=[ie,D?.getValidationProps??f,m,R],de=v(`button`,e,{enabled:!se,state:H,ref:U,props:le,stateAttributesMapping:ue});return(0,W.jsxs)(pe.Provider,{value:oe,children:[se?(0,W.jsx)(ce,{tag:`button`,render:n,className:r,state:H,refs:U,props:le,stateAttributesMapping:ue}):de,(0,W.jsx)(`input`,{...V})]})}),ge=B.forwardRef(function(e,t){let{render:n,className:r,keepMounted:i=!1,...a}=e,o=me(),s=o.checked,{transitionStatus:c,setMounted:l}=D(s),u=B.useMemo(()=>({...o,transitionStatus:c}),[o,c]),d=B.useRef(null),f=i||s,p=v(`span`,e,{enabled:f,ref:[t,d],state:u,props:a,stateAttributesMapping:ue});return w({open:s,ref:d,onComplete(){s||l(!1)}}),f?p:null}),_e=`ArrowUp`,ve=`ArrowDown`,ye=`ArrowLeft`,be=`ArrowRight`,xe=`Home`,Se=new Set([ye,be]),Ce=new Set([ye,be,xe,`End`]),we=new Set([_e,ve]),Te=new Set([_e,ve,xe,`End`]),Ee=new Set([...Se,...we]),De=new Set([...Ee,xe,`End`]),Oe=`Shift`,ke=new Set([Oe,`Control`,`Alt`,`Meta`]);function Ae(e){return S(e)&&e.tagName===`INPUT`}function je(e){return!!(Ae(e)&&e.selectionStart!=null||S(e)&&e.tagName===`TEXTAREA`)}function Me(e,t,n,r){if(!e||!t||!t.scrollTo)return;let i=e.scrollLeft,a=e.scrollTop,o=e.clientWidth<e.scrollWidth,s=e.clientHeight<e.scrollHeight;if(o&&r!==`vertical`){let r=Ne(e,t,`left`),a=Pe(e),o=Pe(t);n===`ltr`&&(r+t.offsetWidth+o.scrollMarginRight>e.scrollLeft+e.clientWidth-a.scrollPaddingRight?i=r+t.offsetWidth+o.scrollMarginRight-e.clientWidth+a.scrollPaddingRight:r-o.scrollMarginLeft<e.scrollLeft+a.scrollPaddingLeft&&(i=r-o.scrollMarginLeft-a.scrollPaddingLeft)),n===`rtl`&&(r-o.scrollMarginRight<e.scrollLeft+a.scrollPaddingLeft?i=r-o.scrollMarginLeft-a.scrollPaddingLeft:r+t.offsetWidth+o.scrollMarginRight>e.scrollLeft+e.clientWidth-a.scrollPaddingRight&&(i=r+t.offsetWidth+o.scrollMarginRight-e.clientWidth+a.scrollPaddingRight))}if(s&&r!==`horizontal`){let n=Ne(e,t,`top`),r=Pe(e),i=Pe(t);n-i.scrollMarginTop<e.scrollTop+r.scrollPaddingTop?a=n-i.scrollMarginTop-r.scrollPaddingTop:n+t.offsetHeight+i.scrollMarginBottom>e.scrollTop+e.clientHeight-r.scrollPaddingBottom&&(a=n+t.offsetHeight+i.scrollMarginBottom-e.clientHeight+r.scrollPaddingBottom)}e.scrollTo({left:i,top:a,behavior:`auto`})}function Ne(e,t,n){let r=n===`left`?`offsetLeft`:`offsetTop`,i=0;for(;t.offsetParent&&(i+=t[r],t.offsetParent!==e);)t=t.offsetParent;return i}function Pe(e){let t=getComputedStyle(e);return{scrollMarginTop:parseFloat(t.scrollMarginTop)||0,scrollMarginRight:parseFloat(t.scrollMarginRight)||0,scrollMarginBottom:parseFloat(t.scrollMarginBottom)||0,scrollMarginLeft:parseFloat(t.scrollMarginLeft)||0,scrollPaddingTop:parseFloat(t.scrollPaddingTop)||0,scrollPaddingRight:parseFloat(t.scrollPaddingRight)||0,scrollPaddingBottom:parseFloat(t.scrollPaddingBottom)||0,scrollPaddingLeft:parseFloat(t.scrollPaddingLeft)||0}}function Fe(e){let{children:t,elementsRef:n,labelsRef:r,onMapChange:i}=e,a=B.useRef(0),o=m(Le).current,s=m(Ie).current,[c,l]=B.useState(f),u=B.useRef(c),d=h((e,t)=>{s.set(e,t??null),u.current={},l(u.current)}),p=h(e=>{s.delete(e),u.current={},l(u.current)}),g=B.useMemo(()=>{let e=new Map;return Array.from(s.keys()).sort(Re).forEach((t,n)=>{let r=s.get(t)??{};e.set(t,{...r,index:n})}),e},[s,c]);y(()=>{if(typeof MutationObserver!=`function`||g.size===0)return;let e=new MutationObserver(e=>{let t=new Set,n=e=>t.has(e)?t.delete(e):t.add(e);e.forEach(e=>{e.removedNodes.forEach(n),e.addedNodes.forEach(n)}),t.size===0&&(u.current={},l(u.current))});return g.forEach((t,n)=>{n.parentElement&&e.observe(n.parentElement,{childList:!0})}),()=>{e.disconnect()}},[g]),y(()=>{u.current===c&&(n.current.length!==g.size&&(n.current.length=g.size),r&&r.current.length!==g.size&&(r.current.length=g.size),a.current=g.size),i?.(g)},[i,g,n,r,c]);let _=h(e=>(o.add(e),()=>{o.delete(e)}));y(()=>{o.forEach(e=>e(g))},[o,g]);let v=B.useMemo(()=>({register:d,unregister:p,subscribeMapChange:_,elementsRef:n,labelsRef:r,nextIndexRef:a}),[d,p,_,n,r,a]);return(0,W.jsx)(V.Provider,{value:v,children:t})}function Ie(){return new Map}function Le(){return new Set}function Re(e,t){let n=e.compareDocumentPosition(t);return n&Node.DOCUMENT_POSITION_FOLLOWING||n&Node.DOCUMENT_POSITION_CONTAINED_BY?-1:n&Node.DOCUMENT_POSITION_PRECEDING||n&Node.DOCUMENT_POSITION_CONTAINS?1:0}function ze(e){return e==null||e.hasAttribute(`disabled`)||e.getAttribute(`aria-disabled`)===`true`}var Be=[];function Ve(e){let{itemSizes:t,cols:n=1,loop:r=!0,dense:i=!1,orientation:a=`both`,direction:o,highlightedIndex:s,onHighlightedIndexChange:c,rootRef:l,enableHomeAndEndKeys:u=!1,stopEventPropagation:d=!1,disabledIndices:f,modifierKeys:p=Be}=e,[m,g]=B.useState(0),v=n>1,y=B.useRef(null),b=_(y,l),x=B.useRef([]),S=B.useRef(!1),C=s??m,w=h((e,t=!1)=>{if((c??g)(e),t){let t=x.current[e];Me(y.current,t,o,a)}}),T=h(e=>{if(e.size===0||S.current)return;S.current=!0;let t=Array.from(e.keys()),n=t.find(e=>e?.hasAttribute(`data-composite-item-active`))??null,r=n?t.indexOf(n):-1;r!==-1&&w(r),Me(y.current,n,o,a)}),E=B.useMemo(()=>({"aria-orientation":a===`both`?void 0:a,ref:b,onFocus(e){!y.current||!je(e.target)||e.target.setSelectionRange(0,e.target.value.length??0)},onKeyDown(e){let s=u?De:Ee;if(!s.has(e.key)||He(e,p)||!y.current)return;let c=o===`rtl`,l=c?ye:be,m={horizontal:l,vertical:ve,both:l}[a],h=c?be:ye,g={horizontal:h,vertical:_e,both:h}[a];if(je(e.target)&&!ze(e.target)){let t=e.target.selectionStart,n=e.target.selectionEnd,r=e.target.value??``;if(t==null||e.shiftKey||t!==n||e.key!==g&&t<r.length||e.key!==m&&t>0)return}let _=C,b=P(x,f),S=F(x,f);if(v){let o=t||Array.from({length:x.current.length},()=>({width:1,height:1})),s=ie(o,n,i),l=s.findIndex(e=>e!=null&&!z(x,e,f)),u=s.reduce((e,t,n)=>t!=null&&!z(x,t,f)?n:e,-1);_=s[L({current:s.map(e=>e?x.current[e]:null)},{event:e,orientation:a,loop:r,cols:n,disabledIndices:ae([...f||x.current.map((e,t)=>z(x,t)?t:void 0),void 0],s),minIndex:l,maxIndex:u,prevIndex:R(C>S?b:C,o,s,n,e.key===`ArrowDown`?`bl`:e.key===`ArrowRight`?`tr`:`tl`),rtl:c})]}let T={horizontal:[l],vertical:[ve],both:[l,ve]}[a],E={horizontal:[h],vertical:[_e],both:[h,_e]}[a],ee=v?s:{horizontal:u?Ce:Se,vertical:u?Te:we,both:s}[a];u&&(e.key===`Home`?_=b:e.key===`End`&&(_=S)),_===C&&(T.includes(e.key)||E.includes(e.key))&&(_=r&&_===S&&T.includes(e.key)?b:r&&_===b&&E.includes(e.key)?S:I(x,{startingIndex:_,decrement:E.includes(e.key),disabledIndices:f})),_!==C&&!N(x,_)&&(d&&e.stopPropagation(),ee.has(e.key)&&e.preventDefault(),w(_,!0),queueMicrotask(()=>{x.current[_]?.focus()}))}}),[n,i,o,f,x,u,C,v,t,r,b,p,w,a,d]);return B.useMemo(()=>({props:E,highlightedIndex:C,onHighlightedIndexChange:w,elementsRef:x,disabledIndices:f,onMapChange:T}),[E,C,w,x,f,T])}function He(e,t){for(let n of ke.values()){if(t.includes(n))continue;if(e.getModifierState(n))return!0}return!1}const Ue=B.createContext(void 0);function We(e=!0){let t=B.useContext(Ue);if(t===void 0&&!e)throw Error(`Base UI: DirectionContext is missing.`);return t?.direction??`ltr`}function Ge(e){let{render:t,className:n,refs:r=b,props:i=b,state:a=f,stateAttributesMapping:o,highlightedIndex:s,onHighlightedIndexChange:c,orientation:l,dense:u,itemSizes:d,loop:p,cols:m,enableHomeAndEndKeys:g,onMapChange:_,stopEventPropagation:y=!0,rootRef:S,disabledIndices:C,modifierKeys:w,highlightItemOnHover:T=!1,tag:E=`div`,...ee}=e,D=We(),{props:te,highlightedIndex:ne,onHighlightedIndexChange:re,elementsRef:O,onMapChange:k}=Ve({itemSizes:d,cols:m,loop:p,dense:u,orientation:l,highlightedIndex:s,onHighlightedIndexChange:c,rootRef:S,stopEventPropagation:y,enableHomeAndEndKeys:g,direction:D,disabledIndices:C,modifierKeys:w}),A=h(e=>{_?.(e),k(e)}),j=v(E,e,{state:a,ref:r,props:[te,...i,ee],stateAttributesMapping:o}),M=B.useMemo(()=>({highlightedIndex:ne,onHighlightedIndexChange:re,highlightItemOnHover:T}),[ne,re,T]);return(0,W.jsx)(x.Provider,{value:M,children:(0,W.jsx)(Fe,{elementsRef:O,onMapChange:A,children:j})})}var Ke=[Oe];const qe=B.forwardRef(function(e,t){let{render:n,className:r,disabled:d,readOnly:f,required:m,onValueChange:g,value:v,defaultValue:b,name:x,inputRef:S,id:C,...w}=e,{labelId:T,setTouched:E,setFocused:D,validationMode:te,name:ne,disabled:O,state:k}=i(),A=l(),{clearErrors:j}=o(),M=O||d,N=ne??x,P=c(C),[F,I]=a({controlled:v,default:b,name:`RadioGroup`,state:`value`}),L=h(g),ie=h((e,t)=>{L(e,t),!t.isCanceled&&I(e)}),R=B.useRef(null),ae=h(e=>{R.current==null&&e!=null&&(R.current=e)});s({id:P,commitValidation:A.commitValidation,value:F,controlRef:R,name:N,getValue:()=>F??null});let z=B.useRef(F);y(()=>{z.current!==F&&(j(N),te===`onChange`?A.commitValidation(F):A.commitValidation(F,!0))},[N,j,te,F,A]),y(()=>{z.current=F},[F]);let[V,H]=B.useState(!1),oe=h(e=>{re(e.currentTarget,e.relatedTarget)||(E(!0),D(!1),te===`onBlur`&&A.commitValidation(F))}),se=h(e=>{e.key.startsWith(`Arrow`)&&(E(!0),H(!0),D(!0))}),U=B.useMemo(()=>F==null?``:typeof F==`string`?F:JSON.stringify(F),[F]),ce=_(A.inputRef,S),le=p({value:U,ref:ce,id:P,name:U?N:void 0,disabled:M,readOnly:f,required:m,"aria-hidden":!0,tabIndex:-1,style:ee,onFocus(){R.current?.focus()}},A.getInputValidationProps),ue=B.useMemo(()=>({...k,disabled:M??!1,required:m??!1,readOnly:f??!1}),[k,M,f,m]),fe=B.useMemo(()=>({...k,checkedValue:F,disabled:M,name:N,onValueChange:L,readOnly:f,registerControlRef:ae,required:m,setCheckedValue:ie,setTouched:H,touched:V}),[F,M,k,N,L,f,ae,m,ie,H,V]),pe={role:`radiogroup`,"aria-required":m||void 0,"aria-disabled":M||void 0,"aria-readonly":f||void 0,"aria-labelledby":T,onFocus(){D(!0)},onBlur:oe,onKeyDownCapture:se};return(0,W.jsxs)(de.Provider,{value:fe,children:[(0,W.jsx)(Ge,{render:n,className:r,state:ue,props:[pe,A.getValidationProps,w],refs:[t],stateAttributesMapping:u,enableHomeAndEndKeys:!1,modifierKeys:Ke}),(0,W.jsx)(`input`,{...le})]})});var Je=r({defaultClassName:`qsit130`,variantClassNames:{variant:{error:`qsit131`,default:`qsit132`}},defaultVariants:{variant:`default`},compoundVariants:[]}),Ye=r({defaultClassName:`qsit133`,variantClassNames:{orientation:{vertical:`qsit134`,horizontal:`qsit135`}},defaultVariants:{orientation:`vertical`},compoundVariants:[]}),Xe=r({defaultClassName:`qsit136`,variantClassNames:{variant:{error:`qsit137`,default:`qsit138`}},defaultVariants:{variant:`default`},compoundVariants:[]});const G=(0,B.forwardRef)(({orientation:e,children:t,...n},r)=>(0,W.jsx)(qe,{ref:r,className:Ye({orientation:e}),...n,children:t}));G.displayName=`RadioGroup`;const K=(0,B.forwardRef)(({variant:e,children:t,...n},r)=>(0,W.jsx)(he,{ref:r,className:Je({variant:e}),...n,children:t}));K.displayName=`Radio`;const q=(0,B.forwardRef)(({variant:e},t)=>(0,W.jsx)(ge,{ref:t,className:Xe({variant:e})}));q.displayName=`RadioIndicator`,G.__docgenInfo={description:`RadioGroup Component

Groups radio buttons together with shared state management.
Uses Base UI RadioGroup for accessibility and keyboard navigation.
No customization allowed - use as is with predefined variants.`,methods:[],displayName:`RadioGroup`,props:{name:{required:!1,tsType:{name:`string`},description:``},value:{required:!1,tsType:{name:`unknown`},description:``},defaultValue:{required:!1,tsType:{name:`unknown`},description:``},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(
  value: unknown,
  eventDetails: {
    reason: 'none';
    event: Event;
    cancel: () => void;
    allowPropagation: () => void;
    isCanceled: boolean;
    isPropagationAllowed: boolean;
  }
) => void`,signature:{arguments:[{type:{name:`unknown`},name:`value`},{type:{name:`signature`,type:`object`,raw:`{
  reason: 'none';
  event: Event;
  cancel: () => void;
  allowPropagation: () => void;
  isCanceled: boolean;
  isPropagationAllowed: boolean;
}`,signature:{properties:[{key:`reason`,value:{name:`literal`,value:`'none'`,required:!0}},{key:`event`,value:{name:`Event`,required:!0}},{key:`cancel`,value:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}},required:!0}},{key:`allowPropagation`,value:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}},required:!0}},{key:`isCanceled`,value:{name:`boolean`,required:!0}},{key:`isPropagationAllowed`,value:{name:`boolean`,required:!0}}]}},name:`eventDetails`}],return:{name:`void`}}},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},orientation:{required:!1,tsType:{name:`union`,raw:`'vertical' | 'horizontal'`,elements:[{name:`literal`,value:`'vertical'`},{name:`literal`,value:`'horizontal'`}]},description:``}}},K.__docgenInfo={description:`Radio Component

Accessible radio button component with theme system integration.
Uses Base UI Radio for accessibility and keyboard navigation.
No customization allowed - use as is with predefined variants.`,methods:[],displayName:`Radio`,props:{value:{required:!0,tsType:{name:`string`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``},inputRef:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLInputElement>`,elements:[{name:`HTMLInputElement`}]},description:``},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}},composes:[`RadioVariants`]},q.__docgenInfo={description:`RadioIndicator Component

Visual indicator that displays when a radio button is selected.
Automatically shows/hides based on radio state.
No customization allowed - use as is with predefined variants.`,methods:[],displayName:`RadioIndicator`,composes:[`RadioVariants`]};var Ze={title:`Components/Radio`,component:K,tags:[`autodocs`]};const J={render:()=>(0,W.jsxs)(G,{defaultValue:`option1`,children:[(0,W.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,cursor:`pointer`},children:[(0,W.jsx)(K,{value:`option1`,children:(0,W.jsx)(q,{})}),`Option 1`]}),(0,W.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,cursor:`pointer`},children:[(0,W.jsx)(K,{value:`option2`,children:(0,W.jsx)(q,{})}),`Option 2`]}),(0,W.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,cursor:`pointer`},children:[(0,W.jsx)(K,{value:`option3`,children:(0,W.jsx)(q,{})}),`Option 3`]})]})},Y={render:()=>(0,W.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,W.jsxs)(`div`,{children:[(0,W.jsx)(`h3`,{style:{marginBottom:`12px`},children:`Default Variant`}),(0,W.jsxs)(G,{defaultValue:`default1`,children:[(0,W.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,cursor:`pointer`},children:[(0,W.jsx)(K,{value:`default1`,variant:`default`,children:(0,W.jsx)(q,{variant:`default`})}),`Default Option 1`]}),(0,W.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,cursor:`pointer`},children:[(0,W.jsx)(K,{value:`default2`,variant:`default`,children:(0,W.jsx)(q,{variant:`default`})}),`Default Option 2`]})]})]}),(0,W.jsxs)(`div`,{children:[(0,W.jsx)(`h3`,{style:{marginBottom:`12px`},children:`Error Variant`}),(0,W.jsxs)(G,{defaultValue:`error1`,children:[(0,W.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,cursor:`pointer`},children:[(0,W.jsx)(K,{value:`error1`,variant:`error`,children:(0,W.jsx)(q,{variant:`error`})}),`Error Option 1`]}),(0,W.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,cursor:`pointer`},children:[(0,W.jsx)(K,{value:`error2`,variant:`error`,children:(0,W.jsx)(q,{variant:`error`})}),`Error Option 2`]})]})]})]})},X={render:()=>(0,W.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`32px`},children:[(0,W.jsxs)(`div`,{children:[(0,W.jsx)(`h3`,{style:{marginBottom:`12px`},children:`Vertical Orientation (Default)`}),(0,W.jsxs)(G,{orientation:`vertical`,defaultValue:`vertical1`,children:[(0,W.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,cursor:`pointer`},children:[(0,W.jsx)(K,{value:`vertical1`,children:(0,W.jsx)(q,{})}),`Vertical Option 1`]}),(0,W.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,cursor:`pointer`},children:[(0,W.jsx)(K,{value:`vertical2`,children:(0,W.jsx)(q,{})}),`Vertical Option 2`]}),(0,W.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,cursor:`pointer`},children:[(0,W.jsx)(K,{value:`vertical3`,children:(0,W.jsx)(q,{})}),`Vertical Option 3`]})]})]}),(0,W.jsxs)(`div`,{children:[(0,W.jsx)(`h3`,{style:{marginBottom:`12px`},children:`Horizontal Orientation`}),(0,W.jsxs)(G,{orientation:`horizontal`,defaultValue:`horizontal1`,children:[(0,W.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,cursor:`pointer`},children:[(0,W.jsx)(K,{value:`horizontal1`,children:(0,W.jsx)(q,{})}),`Horizontal 1`]}),(0,W.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,cursor:`pointer`},children:[(0,W.jsx)(K,{value:`horizontal2`,children:(0,W.jsx)(q,{})}),`Horizontal 2`]}),(0,W.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,cursor:`pointer`},children:[(0,W.jsx)(K,{value:`horizontal3`,children:(0,W.jsx)(q,{})}),`Horizontal 3`]})]})]})]})},Z={render:()=>(0,W.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,W.jsxs)(`div`,{children:[(0,W.jsx)(`h3`,{style:{marginBottom:`12px`},children:`Default State`}),(0,W.jsx)(G,{children:(0,W.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,cursor:`pointer`},children:[(0,W.jsx)(K,{value:`unchecked`,children:(0,W.jsx)(q,{})}),`Unchecked`]})})]}),(0,W.jsxs)(`div`,{children:[(0,W.jsx)(`h3`,{style:{marginBottom:`12px`},children:`Selected State`}),(0,W.jsx)(G,{defaultValue:`checked`,children:(0,W.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,cursor:`pointer`},children:[(0,W.jsx)(K,{value:`checked`,children:(0,W.jsx)(q,{})}),`Selected`]})})]}),(0,W.jsxs)(`div`,{children:[(0,W.jsx)(`h3`,{style:{marginBottom:`12px`},children:`Disabled State`}),(0,W.jsxs)(G,{disabled:!0,children:[(0,W.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,cursor:`not-allowed`,opacity:.5},children:[(0,W.jsx)(K,{value:`disabled1`,disabled:!0,children:(0,W.jsx)(q,{})}),`Disabled Unchecked`]}),(0,W.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,cursor:`not-allowed`,opacity:.5},children:[(0,W.jsx)(K,{value:`disabled2`,disabled:!0,children:(0,W.jsx)(q,{})}),`Disabled`]})]})]}),(0,W.jsxs)(`div`,{children:[(0,W.jsx)(`h3`,{style:{marginBottom:`12px`},children:`Disabled Selected State`}),(0,W.jsx)(G,{defaultValue:`disabledSelected`,disabled:!0,children:(0,W.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,cursor:`not-allowed`,opacity:.5},children:[(0,W.jsx)(K,{value:`disabledSelected`,disabled:!0,children:(0,W.jsx)(q,{})}),`Disabled Selected`]})})]})]})},Q={render:function(){let[e,t]=B.useState(`option2`);return(0,W.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,W.jsxs)(`div`,{children:[(0,W.jsx)(`strong`,{children:`Selected Value:`}),` `,String(e)]}),(0,W.jsxs)(G,{value:e,onValueChange:e=>t(e),children:[(0,W.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,cursor:`pointer`},children:[(0,W.jsx)(K,{value:`option1`,children:(0,W.jsx)(q,{})}),`Option 1`]}),(0,W.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,cursor:`pointer`},children:[(0,W.jsx)(K,{value:`option2`,children:(0,W.jsx)(q,{})}),`Option 2`]}),(0,W.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,cursor:`pointer`},children:[(0,W.jsx)(K,{value:`option3`,children:(0,W.jsx)(q,{})}),`Option 3`]})]})]})}},$={render:()=>(0,W.jsxs)(`form`,{onSubmit:e=>{e.preventDefault();let t=new FormData(e.currentTarget);alert(`Selected shipping: ${t.get(`shipping`)}`)},style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,W.jsxs)(`fieldset`,{style:{border:`1px solid #ccc`,padding:`16px`,borderRadius:`8px`},children:[(0,W.jsx)(`legend`,{style:{fontWeight:`bold`,padding:`0 8px`},children:`Shipping Method`}),(0,W.jsxs)(G,{name:`shipping`,defaultValue:`standard`,children:[(0,W.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,cursor:`pointer`},children:[(0,W.jsx)(K,{value:`standard`,children:(0,W.jsx)(q,{})}),`Standard Shipping (5-7 days)`]}),(0,W.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,cursor:`pointer`},children:[(0,W.jsx)(K,{value:`express`,children:(0,W.jsx)(q,{})}),`Express Shipping (2-3 days)`]}),(0,W.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,cursor:`pointer`},children:[(0,W.jsx)(K,{value:`overnight`,children:(0,W.jsx)(q,{})}),`Overnight Shipping (1 day)`]})]})]}),(0,W.jsx)(`button`,{type:`submit`,style:{padding:`8px 16px`},children:`Submit`})]})};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="option1">
      <label style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      cursor: 'pointer'
    }}>
        <Radio value="option1">
          <RadioIndicator />
        </Radio>
        Option 1
      </label>
      <label style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      cursor: 'pointer'
    }}>
        <Radio value="option2">
          <RadioIndicator />
        </Radio>
        Option 2
      </label>
      <label style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      cursor: 'pointer'
    }}>
        <Radio value="option3">
          <RadioIndicator />
        </Radio>
        Option 3
      </label>
    </RadioGroup>
}`,...J.parameters?.docs?.source},description:{story:`Default Radio

Basic radio button with default variant.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <div>
        <h3 style={{
        marginBottom: '12px'
      }}>Default Variant</h3>
        <RadioGroup defaultValue="default1">
          <label style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer'
        }}>
            <Radio value="default1" variant="default">
              <RadioIndicator variant="default" />
            </Radio>
            Default Option 1
          </label>
          <label style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer'
        }}>
            <Radio value="default2" variant="default">
              <RadioIndicator variant="default" />
            </Radio>
            Default Option 2
          </label>
        </RadioGroup>
      </div>

      <div>
        <h3 style={{
        marginBottom: '12px'
      }}>Error Variant</h3>
        <RadioGroup defaultValue="error1">
          <label style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer'
        }}>
            <Radio value="error1" variant="error">
              <RadioIndicator variant="error" />
            </Radio>
            Error Option 1
          </label>
          <label style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer'
        }}>
            <Radio value="error2" variant="error">
              <RadioIndicator variant="error" />
            </Radio>
            Error Option 2
          </label>
        </RadioGroup>
      </div>
    </div>
}`,...Y.parameters?.docs?.source},description:{story:`Variants

Demonstrates all available variants (default and error).`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }}>
      <div>
        <h3 style={{
        marginBottom: '12px'
      }}>Vertical Orientation (Default)</h3>
        <RadioGroup orientation="vertical" defaultValue="vertical1">
          <label style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer'
        }}>
            <Radio value="vertical1">
              <RadioIndicator />
            </Radio>
            Vertical Option 1
          </label>
          <label style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer'
        }}>
            <Radio value="vertical2">
              <RadioIndicator />
            </Radio>
            Vertical Option 2
          </label>
          <label style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer'
        }}>
            <Radio value="vertical3">
              <RadioIndicator />
            </Radio>
            Vertical Option 3
          </label>
        </RadioGroup>
      </div>

      <div>
        <h3 style={{
        marginBottom: '12px'
      }}>Horizontal Orientation</h3>
        <RadioGroup orientation="horizontal" defaultValue="horizontal1">
          <label style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer'
        }}>
            <Radio value="horizontal1">
              <RadioIndicator />
            </Radio>
            Horizontal 1
          </label>
          <label style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer'
        }}>
            <Radio value="horizontal2">
              <RadioIndicator />
            </Radio>
            Horizontal 2
          </label>
          <label style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer'
        }}>
            <Radio value="horizontal3">
              <RadioIndicator />
            </Radio>
            Horizontal 3
          </label>
        </RadioGroup>
      </div>
    </div>
}`,...X.parameters?.docs?.source},description:{story:`Orientation

Demonstrates vertical and horizontal orientation for RadioGroup.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <div>
        <h3 style={{
        marginBottom: '12px'
      }}>Default State</h3>
        <RadioGroup>
          <label style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer'
        }}>
            <Radio value="unchecked">
              <RadioIndicator />
            </Radio>
            Unchecked
          </label>
        </RadioGroup>
      </div>

      <div>
        <h3 style={{
        marginBottom: '12px'
      }}>Selected State</h3>
        <RadioGroup defaultValue="checked">
          <label style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer'
        }}>
            <Radio value="checked">
              <RadioIndicator />
            </Radio>
            Selected
          </label>
        </RadioGroup>
      </div>

      <div>
        <h3 style={{
        marginBottom: '12px'
      }}>Disabled State</h3>
        <RadioGroup disabled>
          <label style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'not-allowed',
          opacity: 0.5
        }}>
            <Radio value="disabled1" disabled>
              <RadioIndicator />
            </Radio>
            Disabled Unchecked
          </label>
          <label style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'not-allowed',
          opacity: 0.5
        }}>
            <Radio value="disabled2" disabled>
              <RadioIndicator />
            </Radio>
            Disabled
          </label>
        </RadioGroup>
      </div>

      <div>
        <h3 style={{
        marginBottom: '12px'
      }}>Disabled Selected State</h3>
        <RadioGroup defaultValue="disabledSelected" disabled>
          <label style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'not-allowed',
          opacity: 0.5
        }}>
            <Radio value="disabledSelected" disabled>
              <RadioIndicator />
            </Radio>
            Disabled Selected
          </label>
        </RadioGroup>
      </div>
    </div>
}`,...Z.parameters?.docs?.source},description:{story:`States

Demonstrates different states: default, selected, and disabled.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: function ControlledRadio() {
    const [value, setValue] = React.useState<unknown>('option2');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <div>
          <strong>Selected Value:</strong> {String(value)}
        </div>
        <RadioGroup value={value} onValueChange={newValue => setValue(newValue)}>
          <label style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer'
        }}>
            <Radio value="option1">
              <RadioIndicator />
            </Radio>
            Option 1
          </label>
          <label style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer'
        }}>
            <Radio value="option2">
              <RadioIndicator />
            </Radio>
            Option 2
          </label>
          <label style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer'
        }}>
            <Radio value="option3">
              <RadioIndicator />
            </Radio>
            Option 3
          </label>
        </RadioGroup>
      </div>;
  }
}`,...Q.parameters?.docs?.source},description:{story:`Controlled

Demonstrates controlled radio group with external state management.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <form onSubmit={e => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    alert(\`Selected shipping: \${formData.get('shipping')}\`);
  }} style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <fieldset style={{
      border: '1px solid #ccc',
      padding: '16px',
      borderRadius: '8px'
    }}>
        <legend style={{
        fontWeight: 'bold',
        padding: '0 8px'
      }}>Shipping Method</legend>
        <RadioGroup name="shipping" defaultValue="standard">
          <label style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer'
        }}>
            <Radio value="standard">
              <RadioIndicator />
            </Radio>
            Standard Shipping (5-7 days)
          </label>
          <label style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer'
        }}>
            <Radio value="express">
              <RadioIndicator />
            </Radio>
            Express Shipping (2-3 days)
          </label>
          <label style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer'
        }}>
            <Radio value="overnight">
              <RadioIndicator />
            </Radio>
            Overnight Shipping (1 day)
          </label>
        </RadioGroup>
      </fieldset>
      <button type="submit" style={{
      padding: '8px 16px'
    }}>
        Submit
      </button>
    </form>
}`,...$.parameters?.docs?.source},description:{story:`Form Integration

Demonstrates radio group usage in a form context.`,...$.parameters?.docs?.description}}};const Qe=[`Default`,`Variants`,`Orientation`,`States`,`Controlled`,`FormIntegration`];export{Q as Controlled,J as Default,$ as FormIntegration,X as Orientation,Z as States,Y as Variants,Qe as __namedExportsOrder,Ze as default};