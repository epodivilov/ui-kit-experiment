import{i as e,l as t}from"./iframe-O4H36LMs.js";import{t as n}from"./jsx-runtime-y1gBpnEU.js";import"./react-dom-TorLxs_g.js";import{t as r}from"./createRuntimeFn-62c9670f.esm-DKWA1Tvk.js";import{a as i,d as a,f as o,m as s,n as c,o as l,t as u}from"./useLatestRef-DgSz5-PF.js";import{a as d,i as f,n as p,o as m,s as ee,t as h}from"./stateAttributesMapping-CETnbpvV.js";var g=typeof navigator<`u`,_=te(),v=C(),y=S();typeof CSS>`u`||!CSS.supports||CSS.supports(`-webkit-backdrop-filter:none`),_.platform===`MacIntel`&&_.maxTouchPoints>1||/iP(hone|ad|od)|iOS/.test(_.platform),g&&/firefox/i.test(y);const b=g&&/apple/i.test(navigator.vendor);g&&/android/i.test(v)||/android/i.test(y),g&&v.toLowerCase().startsWith(`mac`)&&navigator.maxTouchPoints;const x=y.includes(`jsdom/`);function te(){if(!g)return{platform:``,maxTouchPoints:-1};let e=navigator.userAgentData;return e?.platform?{platform:e.platform,maxTouchPoints:navigator.maxTouchPoints}:{platform:navigator.platform??``,maxTouchPoints:navigator.maxTouchPoints??-1}}function S(){if(!g)return``;let e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(({brand:e,version:t})=>`${e}/${t}`).join(` `):navigator.userAgent}function C(){if(!g)return``;let e=navigator.userAgentData;return e?.platform?e.platform:navigator.platform??``}function ne(e){let t=e.activeElement;for(;t?.shadowRoot?.activeElement!=null;)t=t.shadowRoot.activeElement;return t}function w(e,t){if(!e||!t)return!1;let n=t.getRootNode?.();if(e.contains(t))return!0;if(n&&m(n)){let n=t;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function T(e){return`composedPath`in e?e.composedPath()[0]:e.target}function re(e){if(!e||x)return!0;try{return e.matches(`:focus-visible`)}catch{return!0}}function ie(e){return e?.ownerDocument||document}var E=0;function D(e){return E+=1,`${e}-${Math.random().toString(36).slice(2,6)}-${E}`}var O=t(e());const k=O.createContext(void 0);function A(){let e=O.useContext(k);if(!e)throw Error(`Base UI: useToast must be used within <Toast.Provider>.`);return e}function j(e,t){if(typeof e==`string`)return{description:e};if(typeof e==`function`){let n=e(t);return typeof n==`string`?{description:n}:n}return e}var M=t(n());const N=function(e){let{children:t,timeout:n=5e3,limit:r=3,toastManager:i}=e,[a,o]=O.useState([]),[l,d]=O.useState(!1),[f,p]=O.useState(!1),[m,ee]=O.useState(null);a.length===0&&(l&&d(!1),f&&p(!1));let h=l||f,g=O.useRef(new Map),_=O.useRef(null),v=O.useRef(!0),y=O.useRef(!1),b=u(l),x=u(f),te=s(e=>{let t=ne(ie(_.current));if(!_.current||!w(_.current,t)||!re(t))return;let n=a.findIndex(t=>t.id===e),r=null,i=n+1;for(;i<a.length;){if(a[i].transitionStatus!==`ending`){r=a[i];break}i+=1}if(!r)for(i=n-1;i>=0;){if(a[i].transitionStatus!==`ending`){r=a[i];break}--i}r?r.ref?.current?.focus():m?.focus({preventScroll:!0})}),S=s(()=>{y.current||(y.current=!0,g.current.forEach(e=>{if(e.timeout){e.timeout.clear();let t=Date.now()-e.start,n=e.delay-t;e.remaining=n>0?n:0}}))}),C=s(()=>{y.current&&(y.current=!1,g.current.forEach((e,t)=>{e.remaining=e.remaining>0?e.remaining:e.delay,e.timeout??=c.create(),e.timeout.start(e.remaining,()=>{g.current.delete(t),e.callback()}),e.start=Date.now()}))}),T=s(e=>{o(t=>{let n=t.map(t=>t.id===e?{...t,transitionStatus:`ending`,height:0}:t),i=n.filter(e=>e.transitionStatus!==`ending`);return n.map(e=>{if(e.transitionStatus===`ending`)return e;let t=i.indexOf(e)>=r;return{...e,limited:t}})});let t=g.current.get(e);t&&t.timeout&&(t.timeout.clear(),g.current.delete(e)),a.find(t=>t.id===e)?.onClose?.(),te(e),a.length===1&&(b.current=!1,x.current=!1)}),E=s(e=>{o(t=>t.filter(t=>t.id!==e)),a.find(t=>t.id===e)?.onRemove?.()}),A=s((e,t,n)=>{let r=Date.now(),i=v.current&&!b.current&&!x.current,a=i?c.create():void 0;a?.start(t,()=>{g.current.delete(e),n()}),g.current.set(e,{timeout:a,start:i?r:0,delay:t,remaining:t,callback:n})}),N=s(e=>{let t=e.id||D(`toast`),i={...e,id:t,transitionStatus:`starting`};o(e=>{let t=[i,...e],n=t.filter(e=>e.transitionStatus!==`ending`);if(n.length>r){let e=n.length-r,i=n.slice(-e);return t.map(e=>i.some(t=>t.id===e.id)?{...e,limited:!0}:{...e,limited:!1})}return t.map(e=>({...e,limited:!1}))});let a=i.timeout??n;return i.type!==`loading`&&a>0&&A(t,a,()=>T(t)),(b.current||x.current||!v.current)&&S(),t}),P=s((e,t)=>{o(n=>n.map(n=>n.id===e?{...n,...t}:n))}),ae=s((e,t)=>{let r=j(t.loading),i=N({...r,type:`loading`}),a=e.then(e=>{let r=j(t.success,e);P(i,{...r,type:`success`});let a=r.timeout??n;return a>0&&A(i,a,()=>T(i)),(b.current||x.current||!v.current)&&S(),e}).catch(e=>{let r=j(t.error,e);P(i,{...r,type:`error`});let a=r.timeout??n;return a>0&&A(i,a,()=>T(i)),(b.current||x.current||!v.current)&&S(),Promise.reject(e)});return{}.hasOwnProperty.call(t,`setPromise`)&&t.setPromise(a),a});O.useEffect(function(){if(i)return i[` subscribe`](({action:e,options:t})=>{let n=t.id;e===`promise`&&t.promise?ae(t.promise,t):e===`update`&&n?P(n,t):e===`close`&&n?T(n):N(t)})},[N,P,A,n,i,ae,T]);let oe=O.useMemo(()=>({toasts:a,setToasts:o,hovering:l,setHovering:d,focused:f,setFocused:p,expanded:h,add:N,close:T,remove:E,update:P,promise:ae,pauseTimers:S,resumeTimers:C,prevFocusElement:m,setPrevFocusElement:ee,viewportRef:_,scheduleTimer:A,windowFocusedRef:v}),[N,T,f,l,h,S,m,ae,E,C,A,a,P]);return(0,M.jsx)(k.Provider,{value:oe,children:t})},P=O.forwardRef(function(e,t){let[n,r]=O.useState();o(()=>{b&&r(`button`)},[]);let i={tabIndex:0,role:n};return(0,M.jsx)(`span`,{...e,ref:t,style:ee,"aria-hidden":n?void 0:!0,...i,"data-base-ui-focus-guard":``})}),ae=O.createContext(void 0);let oe=function(e){return e.frontmostHeight=`--toast-frontmost-height`,e}({});const se=O.forwardRef(function(e,t){let{render:n,className:r,children:i,...a}=e,{toasts:o,pauseTimers:s,resumeTimers:c,hovering:f,setHovering:p,setFocused:m,viewportRef:h,windowFocusedRef:g,prevFocusElement:_,setPrevFocusElement:v,expanded:y,focused:b}=A(),x=O.useRef(!1),te=u(b),S=u(f),C=o.length,E=o[0]?.height??0,D=O.useRef(!1),k=O.useMemo(()=>o.some(e=>e.transitionStatus===`ending`),[o]);O.useEffect(()=>{if(!h.current)return;function e(e){C!==0&&e.key===`F6`&&e.target!==h.current&&(e.preventDefault(),v(ne(ie(h.current))),h.current?.focus(),s(),m(!0))}let t=d(h.current);return t.addEventListener(`keydown`,e),()=>{t.removeEventListener(`keydown`,e)}},[s,m,v,C,h]),O.useEffect(()=>{if(!h.current||!C)return;let e=d(h.current);function t(t){t.target===e&&(g.current=!1,s())}function n(t){if(t.relatedTarget||t.target===e)return;let n=T(t),r=ne(ie(h.current));(!w(h.current,n)||!re(r))&&c(),setTimeout(()=>{g.current=!0})}return e.addEventListener(`blur`,t,!0),e.addEventListener(`focus`,n,!0),()=>{e.removeEventListener(`blur`,t,!0),e.removeEventListener(`focus`,n,!0)}},[s,c,h,g,m,te,C]),O.useEffect(()=>{let e=h.current;if(!e||C===0)return;let t=ie(e);function n(t){if(t.pointerType!==`touch`)return;let n=T(t);w(e,n)||(c(),p(!1),m(!1))}return t.addEventListener(`pointerdown`,n,!0),()=>{t.removeEventListener(`pointerdown`,n,!0)}},[te,S,C,c,m,p,h]);function j(e){h.current&&(x.current=!0,e.relatedTarget===h.current?o[0]?.ref?.current?.focus():_?.focus({preventScroll:!0}))}function N(e){e.key===`Tab`&&e.shiftKey&&e.target===h.current&&(e.preventDefault(),_?.focus({preventScroll:!0}),c())}O.useEffect(()=>{!g.current||k||!D.current||(c(),p(!1),D.current=!1)},[k,c,p,g]);function se(){s(),p(!0),D.current=!1}function ce(){o.some(e=>e.transitionStatus===`ending`)?D.current=!0:(c(),p(!1))}function le(){if(x.current){x.current=!1;return}b||re(ie(h.current).activeElement)&&(m(!0),s())}function F(e){!b||w(h.current,e.relatedTarget)||(m(!1),c())}let I={tabIndex:-1,role:`region`,"aria-live":`polite`,"aria-atomic":!1,"aria-relevant":`additions text`,"aria-label":`Notifications`,onMouseEnter:se,onMouseMove:se,onMouseLeave:ce,onFocus:le,onBlur:F,onKeyDown:N,onClick:le},ue=O.useMemo(()=>({expanded:y}),[y]),L=l(`div`,e,{ref:[t,h],state:ue,props:[I,{style:{[oe.frontmostHeight]:E?`${E}px`:void 0}},a,{children:(0,M.jsxs)(O.Fragment,{children:[C>0&&_&&(0,M.jsx)(P,{onFocus:j}),i,C>0&&_&&(0,M.jsx)(P,{onFocus:j})]})}]}),de=O.useMemo(()=>({viewportRef:h}),[h]),R=O.useMemo(()=>o.filter(e=>e.priority===`high`),[o]);return(0,M.jsxs)(ae.Provider,{value:de,children:[C>0&&_&&(0,M.jsx)(P,{onFocus:j}),L,!b&&R.length>0&&(0,M.jsx)(`div`,{style:ee,children:R.map(e=>(0,M.jsxs)(`div`,{role:`alert`,"aria-atomic":!0,children:[(0,M.jsx)(`div`,{children:e.title}),(0,M.jsx)(`div`,{children:e.description})]},e.id))})]})});function ce(e){return a(19)?e:e?`true`:void 0}const le=O.createContext(void 0);function F(){let e=O.useContext(le);if(!e)throw Error(`Base UI: ToastRootContext is missing. Toast parts must be used within <Toast.Root>.`);return e}let I=function(e){return e.index=`--toast-index`,e.offsetY=`--toast-offset-y`,e.height=`--toast-height`,e.swipeMovementX=`--toast-swipe-movement-x`,e.swipeMovementY=`--toast-swipe-movement-y`,e}({});var ue={...h,swipeDirection(e){return e?{"data-swipe-direction":e}:null}},L=40,de=10,R=.5,fe=1;function pe(e,t,n){switch(e){case`up`:return-n;case`down`:return n;case`left`:return-t;case`right`:return t;default:return 0}}function me(e){let t=window.getComputedStyle(e).transform,n=0,r=0,i=1;if(t&&t!==`none`){let e=t.match(/matrix(?:3d)?\(([^)]+)\)/);if(e){let t=e[1].split(`, `).map(parseFloat);t.length===6?(n=t[4],r=t[5],i=Math.sqrt(t[0]*t[0]+t[1]*t[1])):t.length===16&&(n=t[12],r=t[13],i=t[0])}}return{x:n,y:r,scale:i}}const he=O.forwardRef(function(e,t){let{toast:n,render:r,className:i,swipeDirection:a=[`down`,`right`],...c}=e,u=Array.isArray(a)?a:[a],{toasts:d,focused:f,close:m,remove:ee,setToasts:h,pauseTimers:g,expanded:_,setHovering:v}=A(),[y,b]=O.useState(void 0),[x,te]=O.useState(!1),[S,C]=O.useState(!1),[re,E]=O.useState(!1),[D,k]=O.useState({x:0,y:0}),[j,N]=O.useState({x:0,y:0,scale:1}),[P,ae]=O.useState(),[oe,se]=O.useState(),[F,he]=O.useState(null),z=O.useRef(null),ge=O.useRef({x:0,y:0}),_e=O.useRef({x:0,y:0,scale:1}),ve=O.useRef(void 0),ye=O.useRef(0),be=O.useRef(!1),B=O.useRef({x:0,y:0}),xe=O.useRef(!1),Se=O.useMemo(()=>d.indexOf(n),[n,d]),V=O.useMemo(()=>d.filter(e=>e.transitionStatus!==`ending`).indexOf(n),[n,d]),Ce=O.useMemo(()=>d.slice(0,d.indexOf(n)).reduce((e,t)=>e+(t.height||0),0),[d,n]);p({open:n.transitionStatus!==`ending`,ref:z,onComplete(){n.transitionStatus===`ending`&&ee(n.id)}});let H=s(()=>{let e=z.current;if(!e)return;let t=e.style.height;e.style.height=`auto`;let r=e.offsetHeight;e.style.height=t,h(e=>e.map(e=>e.id===n.id?{...e,ref:z,height:r,transitionStatus:void 0}:e))});o(H,[H]);function we(e,t){let n=e,r=t;return!u.includes(`left`)&&!u.includes(`right`)?n=e>0?e**R:-(Math.abs(e)**R):(!u.includes(`right`)&&e>0&&(n=e**R),!u.includes(`left`)&&e<0&&(n=-(Math.abs(e)**R))),!u.includes(`up`)&&!u.includes(`down`)?r=t>0?t**R:-(Math.abs(t)**R):(!u.includes(`down`)&&t>0&&(r=t**R),!u.includes(`up`)&&t<0&&(r=-(Math.abs(t)**R))),{x:n,y:r}}function U(e){if(e.button!==0)return;e.pointerType===`touch`&&g();let t=T(e.nativeEvent);if(!(t&&t.closest(`button,a,input,textarea,[role="button"],[data-swipe-ignore]`))){if(be.current=!1,ve.current=void 0,ye.current=0,ge.current={x:e.clientX,y:e.clientY},B.current=ge.current,z.current){let e=me(z.current);_e.current=e,N(e),k({x:e.x,y:e.y})}v(!0),te(!0),C(!1),he(null),xe.current=!0,z.current?.setPointerCapture(e.pointerId)}}function W(e){if(!x)return;e.preventDefault(),xe.current&&=(ge.current={x:e.clientX,y:e.clientY},!1);let{clientY:t,clientX:n,movementX:r,movementY:i}=e;(i<0&&t>B.current.y||i>0&&t<B.current.y)&&(B.current={x:B.current.x,y:t}),(r<0&&n>B.current.x||r>0&&n<B.current.x)&&(B.current={x:n,y:B.current.y});let a=n-ge.current.x,o=t-ge.current.y,s=t-B.current.y,c=n-B.current.x;if(!S&&Math.sqrt(a*a+o*o)>=fe&&(C(!0),F===null)){let e=u.includes(`left`)||u.includes(`right`),t=u.includes(`up`)||u.includes(`down`);e&&t&&he(Math.abs(a)>Math.abs(o)?`horizontal`:`vertical`)}let l;if(!ve.current)F===`vertical`?o>0?l=`down`:o<0&&(l=`up`):F===`horizontal`?a>0?l=`right`:a<0&&(l=`left`):l=Math.abs(a)>=Math.abs(o)?a>0?`right`:`left`:o>0?`down`:`up`,l&&u.includes(l)&&(ve.current=l,ye.current=pe(l,a,o),b(l));else{let e=ve.current,t=pe(e,c,s);t>L?(be.current=!1,b(e)):ye.current-t>=de&&(be.current=!0)}let d=we(a,o),f=_e.current.x,p=_e.current.y;F===`horizontal`?(u.includes(`left`)||u.includes(`right`))&&(f+=d.x):(F===`vertical`||(u.includes(`left`)||u.includes(`right`))&&(f+=d.x),(u.includes(`up`)||u.includes(`down`))&&(p+=d.y)),k({x:f,y:p})}function G(e){if(!x)return;if(te(!1),C(!1),he(null),z.current?.releasePointerCapture(e.pointerId),be.current){k({x:j.x,y:j.y}),b(void 0);return}let t=!1,r=D.x-j.x,i=D.y-j.y,a;for(let e of u){switch(e){case`right`:r>L&&(t=!0,a=`right`);break;case`left`:r<-L&&(t=!0,a=`left`);break;case`down`:i>L&&(t=!0,a=`down`);break;case`up`:i<-L&&(t=!0,a=`up`);break;default:break}if(t)break}t?(b(a),E(!0),m(n.id)):(k({x:j.x,y:j.y}),b(void 0))}function K(e){if(e.key===`Escape`){if(!z.current||!w(z.current,ne(ie(z.current))))return;m(n.id)}}O.useEffect(()=>{let e=z.current;if(!e)return;function t(t){w(e,t.target)&&t.preventDefault()}return e.addEventListener(`touchmove`,t,{passive:!1}),()=>{e.removeEventListener(`touchmove`,t)}},[]);function q(){if(!x&&D.x===j.x&&D.y===j.y&&!re)return{[I.swipeMovementX]:`0px`,[I.swipeMovementY]:`0px`};let e=D.x-j.x,t=D.y-j.y;return{transition:x?`none`:void 0,transform:x?`translateX(${D.x}px) translateY(${D.y}px) scale(${j.scale})`:void 0,[I.swipeMovementX]:`${e}px`,[I.swipeMovementY]:`${t}px`}}let J=n.priority===`high`,Y={role:J?`alertdialog`:`dialog`,tabIndex:0,"aria-modal":!1,"aria-labelledby":P,"aria-describedby":oe,"aria-hidden":J&&!f?!0:void 0,onPointerDown:U,onPointerMove:W,onPointerUp:G,onKeyDown:K,inert:ce(n.limited),style:{...q(),[I.index]:n.transitionStatus===`ending`?Se:V,[I.offsetY]:`${Ce}px`,[I.height]:n.height?`${n.height}px`:void 0}},X=O.useMemo(()=>({rootRef:z,toast:n,titleId:P,setTitleId:ae,descriptionId:oe,setDescriptionId:se,swiping:x,swipeDirection:y,recalculateHeight:H,index:Se,visibleIndex:V,expanded:_}),[n,P,oe,x,y,H,Se,V,_]),Z=O.useMemo(()=>({transitionStatus:n.transitionStatus,expanded:_,limited:n.limited||!1,type:n.type,swiping:X.swiping,swipeDirection:X.swipeDirection}),[_,n.transitionStatus,n.limited,n.type,X.swiping,X.swipeDirection]),Q=l(`div`,e,{ref:[t,X.rootRef],state:Z,stateAttributesMapping:ue,props:[Y,c]});return(0,M.jsx)(le.Provider,{value:X,children:Q})}),z=O.forwardRef(function(e,t){let{render:n,className:r,id:a,children:s,...c}=e,{toast:u}=F(),d=s??u.description,f=!!d,p=i(a),{setDescriptionId:m}=F();o(()=>{if(f)return m(p),()=>{m(void 0)}},[f,p,m]);let ee=O.useMemo(()=>({type:u.type}),[u.type]),h=l(`p`,e,{ref:t,state:ee,props:{...c,id:p,children:d}});return f?h:null}),ge=O.forwardRef(function(e,t){let{render:n,className:r,id:a,children:s,...c}=e,{toast:u}=F(),d=s??u.title,f=!!d,p=i(a),{setTitleId:m}=F();o(()=>{if(f)return m(p),()=>{m(void 0)}},[f,p,m]);let ee=O.useMemo(()=>({type:u.type}),[u.type]),h=l(`h2`,e,{ref:t,state:ee,props:{...c,id:p,children:d}});return f?h:null}),_e=O.forwardRef(function(e,t){let{render:n,className:r,disabled:i,nativeButton:a=!0,...o}=e,{close:s,expanded:c}=A(),{toast:u}=F(),{getButtonProps:d,buttonRef:p}=f({disabled:i,native:a}),m=O.useMemo(()=>({type:u.type}),[u.type]);return l(`button`,e,{ref:[t,p],state:m,props:[{"aria-hidden":!c,onClick(){s(u.id)}},o,d]})});function ve(){let e=O.useContext(k);if(!e)throw Error(`Base UI: useToast must be used within <Toast.Provider>.`);let{toasts:t,add:n,close:r,update:i,promise:a}=e;return O.useMemo(()=>({toasts:t,add:n,close:r,update:i,promise:a}),[t,n,r,i,a])}var ye=r({defaultClassName:`l8vx343`,variantClassNames:{variant:{error:`l8vx344`,default:`l8vx345`,success:`l8vx346`,warning:`l8vx347`}},defaultVariants:{variant:`default`},compoundVariants:[]}),be=`l8vx348`,B=r({defaultClassName:`l8vx34c`,variantClassNames:{position:{"top-left":`l8vx34d`,"top-center":`l8vx34e`,"top-right":`l8vx34f`,"bottom-left":`l8vx34g`,"bottom-center":`l8vx34h`,"bottom-right":`l8vx34i`}},defaultVariants:{position:`bottom-right`},compoundVariants:[]});const xe=({children:e,limit:t=3,timeout:n=5e3})=>(0,M.jsx)(N,{limit:t,timeout:n,children:e});xe.displayName=`ToastProvider`;const Se=(0,O.forwardRef)(({position:e=`bottom-right`,...t},n)=>(0,M.jsx)(se,{ref:n,className:B({position:e}),...t}));Se.displayName=`ToastViewport`;const V=(0,O.forwardRef)(({toast:e,variant:t,swipeDirection:n=[`down`,`right`],showClose:r=!0,closeLabel:i=`Close notification`,...a},o)=>(0,M.jsxs)(he,{ref:o,toast:e,swipeDirection:n,className:ye({variant:t}),...a,children:[(0,M.jsxs)(`div`,{className:be,children:[e.title&&(0,M.jsx)(ge,{className:`l8vx349`,children:e.title}),e.description&&(0,M.jsx)(z,{className:`l8vx34a`,children:e.description})]}),r&&(0,M.jsx)(_e,{className:`l8vx34b`,"aria-label":i,children:(0,M.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,children:(0,M.jsx)(`path`,{d:`M12 4L4 12M4 4L12 12`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})})})]}));V.displayName=`Toast`;const Ce=({position:e=`bottom-right`}={})=>{let{toasts:t}=ve();return(0,M.jsx)(Se,{position:e,children:t.map(e=>{let t={default:`default`,success:`success`,error:`error`,warning:`warning`}[e.type||`default`]||`default`;return(0,M.jsx)(V,{toast:e,variant:t},e.id)})})};Ce.displayName=`ToastRenderer`;const H=ve;xe.__docgenInfo={description:`Toast Provider Component

Wraps the application to manage toast notifications.
Must wrap ToastViewport and any components using useToastManager.`,methods:[],displayName:`ToastProvider`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},limit:{required:!1,tsType:{name:`number`},description:`Maximum number of toasts displayed simultaneously
@default 3`,defaultValue:{value:`3`,computed:!1}},timeout:{required:!1,tsType:{name:`number`},description:`Auto-dismiss time in milliseconds (0 prevents auto-dismiss)
@default 5000`,defaultValue:{value:`5000`,computed:!1}}}},Se.__docgenInfo={description:`Toast Viewport Component

Container for toast notifications. Should be placed once in your app,
typically near the root component.`,methods:[],displayName:`ToastViewport`,props:{children:{required:!1,tsType:{name:`ReactNode`},description:``},position:{required:!1,tsType:{name:`union`,raw:`'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'`,elements:[{name:`literal`,value:`'top-left'`},{name:`literal`,value:`'top-center'`},{name:`literal`,value:`'top-right'`},{name:`literal`,value:`'bottom-left'`},{name:`literal`,value:`'bottom-center'`},{name:`literal`,value:`'bottom-right'`}]},description:`Position of the toast viewport
@default 'bottom-right'`,defaultValue:{value:`'bottom-right'`,computed:!1}}}},V.__docgenInfo={description:`Toast Component

Accessible toast notification component with theme system integration.
Uses Base UI for accessibility and keyboard navigation.
No customization allowed - use as is with predefined variants.

@example
\`\`\`tsx
const { addToast } = BaseToast.useToastManager();

<button onClick={() => addToast({ title: 'Success!', description: 'Your changes have been saved.' })}>
  Show Toast
</button>

<ToastRenderer />
\`\`\``,methods:[],displayName:`Toast`,props:{toast:{required:!0,tsType:{name:`ToastObjectBase`},description:`Toast object from useToastManager`},swipeDirection:{required:!1,tsType:{name:`union`,raw:`'up' | 'down' | 'left' | 'right' | Array<'up' | 'down' | 'left' | 'right'>`,elements:[{name:`literal`,value:`'up'`},{name:`literal`,value:`'down'`},{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`},{name:`Array`,elements:[{name:`union`,raw:`'up' | 'down' | 'left' | 'right'`,elements:[{name:`literal`,value:`'up'`},{name:`literal`,value:`'down'`},{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`}]}],raw:`Array<'up' | 'down' | 'left' | 'right'>`}]},description:`Swipe directions for dismissal
@default ['down', 'right']`,defaultValue:{value:`['down', 'right']`,computed:!1}},showClose:{required:!1,tsType:{name:`boolean`},description:`Whether to show a close button
@default true`,defaultValue:{value:`true`,computed:!1}},closeLabel:{required:!1,tsType:{name:`string`},description:`aria-label for close button
@default "Close notification"`,defaultValue:{value:`'Close notification'`,computed:!1}}},composes:[`ToastVariants`]},Ce.__docgenInfo={description:`Toast Renderer Component

Renders all active toasts. Use this component once in your app,
typically near the root component inside ToastProvider.

@example
\`\`\`tsx
<ToastProvider>
  <App />
  <ToastRenderer position="top-right" />
</ToastProvider>
\`\`\``,methods:[],displayName:`ToastRenderer`};var we={title:`Components/Toast`,component:V,parameters:{layout:`centered`},tags:[`autodocs`],decorators:[e=>(0,M.jsxs)(xe,{children:[(0,M.jsx)(e,{}),(0,M.jsx)(Ce,{})]})]},U=({variant:e,title:t,description:n})=>{let{add:r}=H();return(0,M.jsxs)(`button`,{onClick:()=>{r({title:t,description:n,type:e})},style:{padding:`0.75rem 1.5rem`,border:`1px solid #ccc`,borderRadius:`6px`,cursor:`pointer`,fontSize:`14px`,backgroundColor:`#fff`,transition:`all 150ms`},onMouseEnter:e=>{e.currentTarget.style.backgroundColor=`#f3f4f6`},onMouseLeave:e=>{e.currentTarget.style.backgroundColor=`#fff`},children:[`Show `,e||`default`,` toast`]})};const W={render:()=>(0,M.jsx)(U,{variant:`default`,title:`Notification`,description:`This is a default toast notification.`})},G={render:()=>(0,M.jsx)(U,{variant:`success`,title:`Success!`,description:`Your changes have been saved successfully.`})},K={render:()=>(0,M.jsx)(U,{variant:`error`,title:`Error`,description:`Something went wrong. Please try again.`})},q={render:()=>(0,M.jsx)(U,{variant:`warning`,title:`Warning`,description:`Please review your changes before continuing.`})},J={render:()=>(0,M.jsx)(U,{variant:`default`,title:`Simple notification`})},Y={render:()=>(0,M.jsx)(U,{variant:`default`,title:`Important Update Available`,description:`A new version of the application is available with important security updates and new features. Please update to continue using the application.`})},X={render:()=>{let{add:e}=H();return(0,M.jsx)(`button`,{onClick:()=>{e({title:`Default notification`,description:`This is a default toast.`,type:`default`}),setTimeout(()=>{e({title:`Success!`,description:`Operation completed successfully.`,type:`success`})},200),setTimeout(()=>{e({title:`Warning`,description:`Please review your input.`,type:`warning`})},400),setTimeout(()=>{e({title:`Error`,description:`Something went wrong.`,type:`error`})},600)},style:{padding:`0.75rem 1.5rem`,border:`1px solid #ccc`,borderRadius:`6px`,cursor:`pointer`,fontSize:`14px`,backgroundColor:`#fff`},children:`Show all variants`})}},Z={render:()=>(0,M.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,M.jsx)(`p`,{style:{margin:0,fontSize:`14px`,color:`#666`},children:`Toasts automatically dismiss after 5 seconds`}),(0,M.jsx)(U,{variant:`success`,title:`Auto-dismiss enabled`,description:`This toast will disappear in 5 seconds.`})]})},Q={render:()=>{let{add:e}=H();return(0,M.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,M.jsx)(`p`,{style:{margin:0,fontSize:`14px`,color:`#666`},children:`Note: Configure timeout via ToastProvider to disable auto-dismiss`}),(0,M.jsx)(`button`,{onClick:()=>{e({title:`Important message`,description:`This toast will not auto-dismiss. Click the X to close.`,type:`default`})},style:{padding:`0.75rem 1.5rem`,border:`1px solid #ccc`,borderRadius:`6px`,cursor:`pointer`,fontSize:`14px`,backgroundColor:`#fff`},children:`Show persistent toast`})]})},decorators:[e=>(0,M.jsxs)(xe,{timeout:0,children:[(0,M.jsx)(e,{}),(0,M.jsx)(Ce,{})]})]},Te={render:()=>{let{add:e}=H(),t=0;return(0,M.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,M.jsx)(`p`,{style:{margin:0,fontSize:`14px`,color:`#666`},children:`Maximum 3 toasts displayed at once (configurable via limit prop)`}),(0,M.jsx)(`button`,{onClick:()=>{let n=[`default`,`success`,`warning`,`error`];for(let r=0;r<5;r++)setTimeout(()=>{t++,e({title:`Toast #${t}`,description:`This is toast number ${t}`,type:n[Math.floor(Math.random()*4)]})},r*300)},style:{padding:`0.75rem 1.5rem`,border:`1px solid #ccc`,borderRadius:`6px`,cursor:`pointer`,fontSize:`14px`,backgroundColor:`#fff`},children:`Add 5 toasts`})]})}},$={render:()=>{let{add:e}=H();return(0,M.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`,minWidth:`300px`},children:[(0,M.jsx)(`h3`,{style:{margin:0,fontSize:`16px`,fontWeight:600},children:`Common Actions`}),(0,M.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,M.jsx)(`button`,{onClick:()=>{e({title:`Changes saved`,description:`Your profile has been updated successfully.`,type:`success`})},style:{padding:`0.5rem 1rem`,border:`1px solid #10b981`,borderRadius:`6px`,cursor:`pointer`,fontSize:`14px`,backgroundColor:`#10b981`,color:`#fff`},children:`Save Changes`}),(0,M.jsx)(`button`,{onClick:()=>{e({title:`Item deleted`,description:`The item has been permanently removed.`,type:`default`})},style:{padding:`0.5rem 1rem`,border:`1px solid #ccc`,borderRadius:`6px`,cursor:`pointer`,fontSize:`14px`,backgroundColor:`#fff`},children:`Delete Item`}),(0,M.jsx)(`button`,{onClick:()=>{e({title:`Failed to upload`,description:`File size exceeds the maximum limit of 10MB.`,type:`error`})},style:{padding:`0.5rem 1rem`,border:`1px solid #ef4444`,borderRadius:`6px`,cursor:`pointer`,fontSize:`14px`,backgroundColor:`#ef4444`,color:`#fff`},children:`Upload File (Error)`}),(0,M.jsx)(`button`,{onClick:()=>{e({title:`Connection unstable`,description:`Your internet connection is slow. Some features may not work.`,type:`warning`})},style:{padding:`0.5rem 1rem`,border:`1px solid #f59e0b`,borderRadius:`6px`,cursor:`pointer`,fontSize:`14px`,backgroundColor:`#f59e0b`,color:`#fff`},children:`Check Connection`})]})]})}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <ToastDemo variant="default" title="Notification" description="This is a default toast notification." />
}`,...W.parameters?.docs?.source},description:{story:`Default variant - neutral background`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <ToastDemo variant="success" title="Success!" description="Your changes have been saved successfully." />
}`,...G.parameters?.docs?.source},description:{story:`Success variant - for successful operations`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <ToastDemo variant="error" title="Error" description="Something went wrong. Please try again." />
}`,...K.parameters?.docs?.source},description:{story:`Error variant - for error messages`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <ToastDemo variant="warning" title="Warning" description="Please review your changes before continuing." />
}`,...q.parameters?.docs?.source},description:{story:`Warning variant - for warning messages`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <ToastDemo variant="default" title="Simple notification" />
}`,...J.parameters?.docs?.source},description:{story:`Title only - minimal toast`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <ToastDemo variant="default" title="Important Update Available" description="A new version of the application is available with important security updates and new features. Please update to continue using the application." />
}`,...Y.parameters?.docs?.source},description:{story:`Long content - test text wrapping`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      add
    } = useToastManager();
    const showAllToasts = () => {
      add({
        title: 'Default notification',
        description: 'This is a default toast.',
        type: 'default'
      });
      setTimeout(() => {
        add({
          title: 'Success!',
          description: 'Operation completed successfully.',
          type: 'success'
        });
      }, 200);
      setTimeout(() => {
        add({
          title: 'Warning',
          description: 'Please review your input.',
          type: 'warning'
        });
      }, 400);
      setTimeout(() => {
        add({
          title: 'Error',
          description: 'Something went wrong.',
          type: 'error'
        });
      }, 600);
    };
    return <button onClick={showAllToasts} style={{
      padding: '0.75rem 1.5rem',
      border: '1px solid #ccc',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '14px',
      backgroundColor: '#fff'
    }}>
        Show all variants
      </button>;
  }
}`,...X.parameters?.docs?.source},description:{story:`All variants demo`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <p style={{
      margin: 0,
      fontSize: '14px',
      color: '#666'
    }}>
        Toasts automatically dismiss after 5 seconds
      </p>
      <ToastDemo variant="success" title="Auto-dismiss enabled" description="This toast will disappear in 5 seconds." />
    </div>
}`,...Z.parameters?.docs?.source},description:{story:`Auto-dismiss demo`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      add
    } = useToastManager();
    const showPersistentToast = () => {
      add({
        title: 'Important message',
        description: 'This toast will not auto-dismiss. Click the X to close.',
        type: 'default'
      });
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
        <p style={{
        margin: 0,
        fontSize: '14px',
        color: '#666'
      }}>
          Note: Configure timeout via ToastProvider to disable auto-dismiss
        </p>
        <button onClick={showPersistentToast} style={{
        padding: '0.75rem 1.5rem',
        border: '1px solid #ccc',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '14px',
        backgroundColor: '#fff'
      }}>
          Show persistent toast
        </button>
      </div>;
  },
  decorators: [Story => <ToastProvider timeout={0}>
        <Story />
        <ToastRenderer />
      </ToastProvider>]
}`,...Q.parameters?.docs?.source},description:{story:`No auto-dismiss demo`,...Q.parameters?.docs?.description}}},Te.parameters={...Te.parameters,docs:{...Te.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      add
    } = useToastManager();
    let counter = 0;
    const addMultipleToasts = () => {
      const types: Array<'default' | 'success' | 'warning' | 'error'> = ['default', 'success', 'warning', 'error'];
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          counter++;
          add({
            title: \`Toast #\${counter}\`,
            description: \`This is toast number \${counter}\`,
            type: types[Math.floor(Math.random() * 4)]
          });
        }, i * 300);
      }
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
        <p style={{
        margin: 0,
        fontSize: '14px',
        color: '#666'
      }}>
          Maximum 3 toasts displayed at once (configurable via limit prop)
        </p>
        <button onClick={addMultipleToasts} style={{
        padding: '0.75rem 1.5rem',
        border: '1px solid #ccc',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '14px',
        backgroundColor: '#fff'
      }}>
          Add 5 toasts
        </button>
      </div>;
  }
}`,...Te.parameters?.docs?.source},description:{story:`Multiple toasts demo`,...Te.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      add
    } = useToastManager();
    const handleSave = () => {
      add({
        title: 'Changes saved',
        description: 'Your profile has been updated successfully.',
        type: 'success'
      });
    };
    const handleDelete = () => {
      add({
        title: 'Item deleted',
        description: 'The item has been permanently removed.',
        type: 'default'
      });
    };
    const handleError = () => {
      add({
        title: 'Failed to upload',
        description: 'File size exceeds the maximum limit of 10MB.',
        type: 'error'
      });
    };
    const handleWarning = () => {
      add({
        title: 'Connection unstable',
        description: 'Your internet connection is slow. Some features may not work.',
        type: 'warning'
      });
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      minWidth: '300px'
    }}>
        <h3 style={{
        margin: 0,
        fontSize: '16px',
        fontWeight: 600
      }}>
          Common Actions
        </h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
      }}>
          <button onClick={handleSave} style={{
          padding: '0.5rem 1rem',
          border: '1px solid #10b981',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '14px',
          backgroundColor: '#10b981',
          color: '#fff'
        }}>
            Save Changes
          </button>
          <button onClick={handleDelete} style={{
          padding: '0.5rem 1rem',
          border: '1px solid #ccc',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '14px',
          backgroundColor: '#fff'
        }}>
            Delete Item
          </button>
          <button onClick={handleError} style={{
          padding: '0.5rem 1rem',
          border: '1px solid #ef4444',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '14px',
          backgroundColor: '#ef4444',
          color: '#fff'
        }}>
            Upload File (Error)
          </button>
          <button onClick={handleWarning} style={{
          padding: '0.5rem 1rem',
          border: '1px solid #f59e0b',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '14px',
          backgroundColor: '#f59e0b',
          color: '#fff'
        }}>
            Check Connection
          </button>
        </div>
      </div>;
  }
}`,...$.parameters?.docs?.source},description:{story:`Interactive demo with real-world use case`,...$.parameters?.docs?.description}}};const Ee=[`Default`,`Success`,`Error`,`Warning`,`TitleOnly`,`LongContent`,`AllVariants`,`AutoDismiss`,`NoAutoDismiss`,`MultipleToasts`,`InteractiveDemo`];export{X as AllVariants,Z as AutoDismiss,W as Default,K as Error,$ as InteractiveDemo,Y as LongContent,Te as MultipleToasts,Q as NoAutoDismiss,G as Success,J as TitleOnly,q as Warning,Ee as __namedExportsOrder,we as default};