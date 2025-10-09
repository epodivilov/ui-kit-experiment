import{i as e,l as t}from"./iframe-DNla4mPf.js";import{t as n}from"./jsx-runtime-BIE8cfDK.js";import"./react-dom-BPVL9wN0.js";import{t as r}from"./createRuntimeFn-62c9670f.esm-DKWA1Tvk.js";import{a as i,f as a,h as o,n as s,o as c,p as l,t as u}from"./useLatestRef-CqQz6U7_.js";import{i as d,n as f,s as p,t as m,u as ee}from"./stateAttributesMapping-DdqitG6W.js";import{i as te,l as h,n as ne,r as g,t as re}from"./element-y6ApqZNI.js";function ie(e){return e?.ownerDocument||document}var _=0;function v(e){return _+=1,`${e}-${Math.random().toString(36).slice(2,6)}-${_}`}var y=t(e());const b=y.createContext(void 0);function x(){let e=y.useContext(b);if(!e)throw Error(`Base UI: useToast must be used within <Toast.Provider>.`);return e}function S(e,t){if(typeof e==`string`)return{description:e};if(typeof e==`function`){let n=e(t);return typeof n==`string`?{description:n}:n}return e}var C=t(n());const w=function(e){let{children:t,timeout:n=5e3,limit:r=3,toastManager:i}=e,[a,c]=y.useState([]),[l,d]=y.useState(!1),[f,p]=y.useState(!1),[m,ee]=y.useState(null);a.length===0&&(l&&d(!1),f&&p(!1));let h=l||f,g=y.useRef(new Map),_=y.useRef(null),x=y.useRef(!0),w=y.useRef(!1),T=u(l),E=u(f),ae=o(e=>{let t=re(ie(_.current));if(!_.current||!ne(_.current,t)||!te(t))return;let n=a.findIndex(t=>t.id===e),r=null,i=n+1;for(;i<a.length;){if(a[i].transitionStatus!==`ending`){r=a[i];break}i+=1}if(!r)for(i=n-1;i>=0;){if(a[i].transitionStatus!==`ending`){r=a[i];break}--i}r?r.ref?.current?.focus():m?.focus({preventScroll:!0})}),D=o(()=>{w.current||(w.current=!0,g.current.forEach(e=>{if(e.timeout){e.timeout.clear();let t=Date.now()-e.start,n=e.delay-t;e.remaining=n>0?n:0}}))}),oe=o(()=>{w.current&&(w.current=!1,g.current.forEach((e,t)=>{e.remaining=e.remaining>0?e.remaining:e.delay,e.timeout??=s.create(),e.timeout.start(e.remaining,()=>{g.current.delete(t),e.callback()}),e.start=Date.now()}))}),O=o(e=>{c(t=>{let n=t.map(t=>t.id===e?{...t,transitionStatus:`ending`,height:0}:t),i=n.filter(e=>e.transitionStatus!==`ending`);return n.map(e=>{if(e.transitionStatus===`ending`)return e;let t=i.indexOf(e)>=r;return{...e,limited:t}})});let t=g.current.get(e);t&&t.timeout&&(t.timeout.clear(),g.current.delete(e)),a.find(t=>t.id===e)?.onClose?.(),ae(e),a.length===1&&(T.current=!1,E.current=!1)}),k=o(e=>{c(t=>t.filter(t=>t.id!==e)),a.find(t=>t.id===e)?.onRemove?.()}),A=o((e,t,n)=>{let r=Date.now(),i=x.current&&!T.current&&!E.current,a=i?s.create():void 0;a?.start(t,()=>{g.current.delete(e),n()}),g.current.set(e,{timeout:a,start:i?r:0,delay:t,remaining:t,callback:n})}),j=o(e=>{let t=e.id||v(`toast`),i={...e,id:t,transitionStatus:`starting`};c(e=>{let t=[i,...e],n=t.filter(e=>e.transitionStatus!==`ending`);if(n.length>r){let e=n.length-r,i=n.slice(-e);return t.map(e=>i.some(t=>t.id===e.id)?{...e,limited:!0}:{...e,limited:!1})}return t.map(e=>({...e,limited:!1}))});let a=i.timeout??n;return i.type!==`loading`&&a>0&&A(t,a,()=>O(t)),(T.current||E.current||!x.current)&&D(),t}),M=o((e,t)=>{c(n=>n.map(n=>n.id===e?{...n,...t}:n))}),N=o((e,t)=>{let r=S(t.loading),i=j({...r,type:`loading`}),a=e.then(e=>{let r=S(t.success,e);M(i,{...r,type:`success`});let a=r.timeout??n;return a>0&&A(i,a,()=>O(i)),(T.current||E.current||!x.current)&&D(),e}).catch(e=>{let r=S(t.error,e);M(i,{...r,type:`error`});let a=r.timeout??n;return a>0&&A(i,a,()=>O(i)),(T.current||E.current||!x.current)&&D(),Promise.reject(e)});return{}.hasOwnProperty.call(t,`setPromise`)&&t.setPromise(a),a});y.useEffect(function(){if(i)return i[` subscribe`](({action:e,options:t})=>{let n=t.id;e===`promise`&&t.promise?N(t.promise,t):e===`update`&&n?M(n,t):e===`close`&&n?O(n):j(t)})},[j,M,A,n,i,N,O]);let P=y.useMemo(()=>({toasts:a,setToasts:c,hovering:l,setHovering:d,focused:f,setFocused:p,expanded:h,add:j,close:O,remove:k,update:M,promise:N,pauseTimers:D,resumeTimers:oe,prevFocusElement:m,setPrevFocusElement:ee,viewportRef:_,scheduleTimer:A,windowFocusedRef:x}),[j,O,f,l,h,D,m,N,k,oe,A,a,M]);return(0,C.jsx)(b.Provider,{value:P,children:t})},T=y.forwardRef(function(e,t){let[n,r]=y.useState();l(()=>{h&&r(`button`)},[]);let i={tabIndex:0,role:n};return(0,C.jsx)(`span`,{...e,ref:t,style:ee,"aria-hidden":n?void 0:!0,...i,"data-base-ui-focus-guard":``})}),E=y.createContext(void 0);let ae=function(e){return e.frontmostHeight=`--toast-frontmost-height`,e}({});const D=y.forwardRef(function(e,t){let{render:n,className:r,children:i,...a}=e,{toasts:o,pauseTimers:s,resumeTimers:l,hovering:d,setHovering:f,setFocused:m,viewportRef:h,windowFocusedRef:_,prevFocusElement:v,setPrevFocusElement:b,expanded:S,focused:w}=x(),D=y.useRef(!1),oe=u(w),O=u(d),k=o.length,A=o[0]?.height??0,j=y.useRef(!1),M=y.useMemo(()=>o.some(e=>e.transitionStatus===`ending`),[o]);y.useEffect(()=>{if(!h.current)return;function e(e){k!==0&&e.key===`F6`&&e.target!==h.current&&(e.preventDefault(),b(re(ie(h.current))),h.current?.focus(),s(),m(!0))}let t=p(h.current);return t.addEventListener(`keydown`,e),()=>{t.removeEventListener(`keydown`,e)}},[s,m,b,k,h]),y.useEffect(()=>{if(!h.current||!k)return;let e=p(h.current);function t(t){t.target===e&&(_.current=!1,s())}function n(t){if(t.relatedTarget||t.target===e)return;let n=g(t),r=re(ie(h.current));(!ne(h.current,n)||!te(r))&&l(),setTimeout(()=>{_.current=!0})}return e.addEventListener(`blur`,t,!0),e.addEventListener(`focus`,n,!0),()=>{e.removeEventListener(`blur`,t,!0),e.removeEventListener(`focus`,n,!0)}},[s,l,h,_,m,oe,k]),y.useEffect(()=>{let e=h.current;if(!e||k===0)return;let t=ie(e);function n(t){if(t.pointerType!==`touch`)return;let n=g(t);ne(e,n)||(l(),f(!1),m(!1))}return t.addEventListener(`pointerdown`,n,!0),()=>{t.removeEventListener(`pointerdown`,n,!0)}},[oe,O,k,l,m,f,h]);function N(e){h.current&&(D.current=!0,e.relatedTarget===h.current?o[0]?.ref?.current?.focus():v?.focus({preventScroll:!0}))}function P(e){e.key===`Tab`&&e.shiftKey&&e.target===h.current&&(e.preventDefault(),v?.focus({preventScroll:!0}),l())}y.useEffect(()=>{!_.current||M||!j.current||(l(),f(!1),j.current=!1)},[M,l,f,_]);function se(){s(),f(!0),j.current=!1}function ce(){o.some(e=>e.transitionStatus===`ending`)?j.current=!0:(l(),f(!1))}function le(){if(D.current){D.current=!1;return}w||te(ie(h.current).activeElement)&&(m(!0),s())}function F(e){!w||ne(h.current,e.relatedTarget)||(m(!1),l())}let ue={tabIndex:-1,role:`region`,"aria-live":`polite`,"aria-atomic":!1,"aria-relevant":`additions text`,"aria-label":`Notifications`,onMouseEnter:se,onMouseMove:se,onMouseLeave:ce,onFocus:le,onBlur:F,onKeyDown:P,onClick:le},I=y.useMemo(()=>({expanded:S}),[S]),de=c(`div`,e,{ref:[t,h],state:I,props:[ue,{style:{[ae.frontmostHeight]:A?`${A}px`:void 0}},a,{children:(0,C.jsxs)(y.Fragment,{children:[k>0&&v&&(0,C.jsx)(T,{onFocus:N}),i,k>0&&v&&(0,C.jsx)(T,{onFocus:N})]})}]}),fe=y.useMemo(()=>({viewportRef:h}),[h]),pe=y.useMemo(()=>o.filter(e=>e.priority===`high`),[o]);return(0,C.jsxs)(E.Provider,{value:fe,children:[k>0&&v&&(0,C.jsx)(T,{onFocus:N}),de,!w&&pe.length>0&&(0,C.jsx)(`div`,{style:ee,children:pe.map(e=>(0,C.jsxs)(`div`,{role:`alert`,"aria-atomic":!0,children:[(0,C.jsx)(`div`,{children:e.title}),(0,C.jsx)(`div`,{children:e.description})]},e.id))})]})});function oe(e){return a(19)?e:e?`true`:void 0}const O=y.createContext(void 0);function k(){let e=y.useContext(O);if(!e)throw Error(`Base UI: ToastRootContext is missing. Toast parts must be used within <Toast.Root>.`);return e}let A=function(e){return e.index=`--toast-index`,e.offsetY=`--toast-offset-y`,e.height=`--toast-height`,e.swipeMovementX=`--toast-swipe-movement-x`,e.swipeMovementY=`--toast-swipe-movement-y`,e}({});var j={...m,swipeDirection(e){return e?{"data-swipe-direction":e}:null}},M=40,N=10,P=.5,se=1;function ce(e,t,n){switch(e){case`up`:return-n;case`down`:return n;case`left`:return-t;case`right`:return t;default:return 0}}function le(e){let t=window.getComputedStyle(e).transform,n=0,r=0,i=1;if(t&&t!==`none`){let e=t.match(/matrix(?:3d)?\(([^)]+)\)/);if(e){let t=e[1].split(`, `).map(parseFloat);t.length===6?(n=t[4],r=t[5],i=Math.sqrt(t[0]*t[0]+t[1]*t[1])):t.length===16&&(n=t[12],r=t[13],i=t[0])}}return{x:n,y:r,scale:i}}const F=y.forwardRef(function(e,t){let{toast:n,render:r,className:i,swipeDirection:a=[`down`,`right`],...s}=e,u=Array.isArray(a)?a:[a],{toasts:d,focused:p,close:m,remove:ee,setToasts:te,pauseTimers:h,expanded:_,setHovering:v}=x(),[b,S]=y.useState(void 0),[w,T]=y.useState(!1),[E,ae]=y.useState(!1),[D,k]=y.useState(!1),[F,ue]=y.useState({x:0,y:0}),[I,de]=y.useState({x:0,y:0,scale:1}),[fe,pe]=y.useState(),[me,he]=y.useState(),[L,ge]=y.useState(null),R=y.useRef(null),z=y.useRef({x:0,y:0}),B=y.useRef({x:0,y:0,scale:1}),_e=y.useRef(void 0),V=y.useRef(0),H=y.useRef(!1),U=y.useRef({x:0,y:0}),W=y.useRef(!1),G=y.useMemo(()=>d.indexOf(n),[n,d]),K=y.useMemo(()=>d.filter(e=>e.transitionStatus!==`ending`).indexOf(n),[n,d]),q=y.useMemo(()=>d.slice(0,d.indexOf(n)).reduce((e,t)=>e+(t.height||0),0),[d,n]);f({open:n.transitionStatus!==`ending`,ref:R,onComplete(){n.transitionStatus===`ending`&&ee(n.id)}});let J=o(()=>{let e=R.current;if(!e)return;let t=e.style.height;e.style.height=`auto`;let r=e.offsetHeight;e.style.height=t,te(e=>e.map(e=>e.id===n.id?{...e,ref:R,height:r,transitionStatus:void 0}:e))});l(J,[J]);function Y(e,t){let n=e,r=t;return!u.includes(`left`)&&!u.includes(`right`)?n=e>0?e**P:-(Math.abs(e)**P):(!u.includes(`right`)&&e>0&&(n=e**P),!u.includes(`left`)&&e<0&&(n=-(Math.abs(e)**P))),!u.includes(`up`)&&!u.includes(`down`)?r=t>0?t**P:-(Math.abs(t)**P):(!u.includes(`down`)&&t>0&&(r=t**P),!u.includes(`up`)&&t<0&&(r=-(Math.abs(t)**P))),{x:n,y:r}}function X(e){if(e.button!==0)return;e.pointerType===`touch`&&h();let t=g(e.nativeEvent);if(!(t&&t.closest(`button,a,input,textarea,[role="button"],[data-swipe-ignore]`))){if(H.current=!1,_e.current=void 0,V.current=0,z.current={x:e.clientX,y:e.clientY},U.current=z.current,R.current){let e=le(R.current);B.current=e,de(e),ue({x:e.x,y:e.y})}v(!0),T(!0),ae(!1),ge(null),W.current=!0,R.current?.setPointerCapture(e.pointerId)}}function Z(e){if(!w)return;e.preventDefault(),W.current&&=(z.current={x:e.clientX,y:e.clientY},!1);let{clientY:t,clientX:n,movementX:r,movementY:i}=e;(i<0&&t>U.current.y||i>0&&t<U.current.y)&&(U.current={x:U.current.x,y:t}),(r<0&&n>U.current.x||r>0&&n<U.current.x)&&(U.current={x:n,y:U.current.y});let a=n-z.current.x,o=t-z.current.y,s=t-U.current.y,c=n-U.current.x;if(!E&&Math.sqrt(a*a+o*o)>=se&&(ae(!0),L===null)){let e=u.includes(`left`)||u.includes(`right`),t=u.includes(`up`)||u.includes(`down`);e&&t&&ge(Math.abs(a)>Math.abs(o)?`horizontal`:`vertical`)}let l;if(!_e.current)L===`vertical`?o>0?l=`down`:o<0&&(l=`up`):L===`horizontal`?a>0?l=`right`:a<0&&(l=`left`):l=Math.abs(a)>=Math.abs(o)?a>0?`right`:`left`:o>0?`down`:`up`,l&&u.includes(l)&&(_e.current=l,V.current=ce(l,a,o),S(l));else{let e=_e.current,t=ce(e,c,s);t>M?(H.current=!1,S(e)):V.current-t>=N&&(H.current=!0)}let d=Y(a,o),f=B.current.x,p=B.current.y;L===`horizontal`?(u.includes(`left`)||u.includes(`right`))&&(f+=d.x):(L===`vertical`||(u.includes(`left`)||u.includes(`right`))&&(f+=d.x),(u.includes(`up`)||u.includes(`down`))&&(p+=d.y)),ue({x:f,y:p})}function Q(e){if(!w)return;if(T(!1),ae(!1),ge(null),R.current?.releasePointerCapture(e.pointerId),H.current){ue({x:I.x,y:I.y}),S(void 0);return}let t=!1,r=F.x-I.x,i=F.y-I.y,a;for(let e of u){switch(e){case`right`:r>M&&(t=!0,a=`right`);break;case`left`:r<-M&&(t=!0,a=`left`);break;case`down`:i>M&&(t=!0,a=`down`);break;case`up`:i<-M&&(t=!0,a=`up`);break;default:break}if(t)break}t?(S(a),k(!0),m(n.id)):(ue({x:I.x,y:I.y}),S(void 0))}function ve(e){if(e.key===`Escape`){if(!R.current||!ne(R.current,re(ie(R.current))))return;m(n.id)}}y.useEffect(()=>{let e=R.current;if(!e)return;function t(t){ne(e,t.target)&&t.preventDefault()}return e.addEventListener(`touchmove`,t,{passive:!1}),()=>{e.removeEventListener(`touchmove`,t)}},[]);function ye(){if(!w&&F.x===I.x&&F.y===I.y&&!D)return{[A.swipeMovementX]:`0px`,[A.swipeMovementY]:`0px`};let e=F.x-I.x,t=F.y-I.y;return{transition:w?`none`:void 0,transform:w?`translateX(${F.x}px) translateY(${F.y}px) scale(${I.scale})`:void 0,[A.swipeMovementX]:`${e}px`,[A.swipeMovementY]:`${t}px`}}let be=n.priority===`high`,xe={role:be?`alertdialog`:`dialog`,tabIndex:0,"aria-modal":!1,"aria-labelledby":fe,"aria-describedby":me,"aria-hidden":be&&!p?!0:void 0,onPointerDown:X,onPointerMove:Z,onPointerUp:Q,onKeyDown:ve,inert:oe(n.limited),style:{...ye(),[A.index]:n.transitionStatus===`ending`?G:K,[A.offsetY]:`${q}px`,[A.height]:n.height?`${n.height}px`:void 0}},$=y.useMemo(()=>({rootRef:R,toast:n,titleId:fe,setTitleId:pe,descriptionId:me,setDescriptionId:he,swiping:w,swipeDirection:b,recalculateHeight:J,index:G,visibleIndex:K,expanded:_}),[n,fe,me,w,b,J,G,K,_]),Se=y.useMemo(()=>({transitionStatus:n.transitionStatus,expanded:_,limited:n.limited||!1,type:n.type,swiping:$.swiping,swipeDirection:$.swipeDirection}),[_,n.transitionStatus,n.limited,n.type,$.swiping,$.swipeDirection]),Ce=c(`div`,e,{ref:[t,$.rootRef],state:Se,stateAttributesMapping:j,props:[xe,s]});return(0,C.jsx)(O.Provider,{value:$,children:Ce})}),ue=y.forwardRef(function(e,t){let{render:n,className:r,id:a,children:o,...s}=e,{toast:u}=k(),d=o??u.description,f=!!d,p=i(a),{setDescriptionId:m}=k();l(()=>{if(f)return m(p),()=>{m(void 0)}},[f,p,m]);let ee=y.useMemo(()=>({type:u.type}),[u.type]),te=c(`p`,e,{ref:t,state:ee,props:{...s,id:p,children:d}});return f?te:null}),I=y.forwardRef(function(e,t){let{render:n,className:r,id:a,children:o,...s}=e,{toast:u}=k(),d=o??u.title,f=!!d,p=i(a),{setTitleId:m}=k();l(()=>{if(f)return m(p),()=>{m(void 0)}},[f,p,m]);let ee=y.useMemo(()=>({type:u.type}),[u.type]),te=c(`h2`,e,{ref:t,state:ee,props:{...s,id:p,children:d}});return f?te:null}),de=y.forwardRef(function(e,t){let{render:n,className:r,disabled:i,nativeButton:a=!0,...o}=e,{close:s,expanded:l}=x(),{toast:u}=k(),{getButtonProps:f,buttonRef:p}=d({disabled:i,native:a}),m=y.useMemo(()=>({type:u.type}),[u.type]);return c(`button`,e,{ref:[t,p],state:m,props:[{"aria-hidden":!l,onClick(){s(u.id)}},o,f]})});function fe(){let e=y.useContext(b);if(!e)throw Error(`Base UI: useToast must be used within <Toast.Provider>.`);let{toasts:t,add:n,close:r,update:i,promise:a}=e;return y.useMemo(()=>({toasts:t,add:n,close:r,update:i,promise:a}),[t,n,r,i,a])}var pe=r({defaultClassName:`l8vx343`,variantClassNames:{variant:{error:`l8vx344`,default:`l8vx345`,success:`l8vx346`,warning:`l8vx347`}},defaultVariants:{variant:`default`},compoundVariants:[]}),me=`l8vx348`,he=r({defaultClassName:`l8vx34c`,variantClassNames:{position:{"top-left":`l8vx34d`,"top-center":`l8vx34e`,"top-right":`l8vx34f`,"bottom-left":`l8vx34g`,"bottom-center":`l8vx34h`,"bottom-right":`l8vx34i`}},defaultVariants:{position:`bottom-right`},compoundVariants:[]});const L=({children:e,limit:t=3,timeout:n=5e3})=>(0,C.jsx)(w,{limit:t,timeout:n,children:e});L.displayName=`ToastProvider`;const ge=(0,y.forwardRef)(({position:e=`bottom-right`,...t},n)=>(0,C.jsx)(D,{ref:n,className:he({position:e}),...t}));ge.displayName=`ToastViewport`;const R=(0,y.forwardRef)(({toast:e,variant:t,swipeDirection:n=[`down`,`right`],showClose:r=!0,closeLabel:i=`Close notification`,...a},o)=>(0,C.jsxs)(F,{ref:o,toast:e,swipeDirection:n,className:pe({variant:t}),...a,children:[(0,C.jsxs)(`div`,{className:me,children:[e.title&&(0,C.jsx)(I,{className:`l8vx349`,children:e.title}),e.description&&(0,C.jsx)(ue,{className:`l8vx34a`,children:e.description})]}),r&&(0,C.jsx)(de,{className:`l8vx34b`,"aria-label":i,children:(0,C.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,children:(0,C.jsx)(`path`,{d:`M12 4L4 12M4 4L12 12`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})})})]}));R.displayName=`Toast`;const z=({position:e=`bottom-right`}={})=>{let{toasts:t}=fe();return(0,C.jsx)(ge,{position:e,children:t.map(e=>{let t={default:`default`,success:`success`,error:`error`,warning:`warning`}[e.type||`default`]||`default`;return(0,C.jsx)(R,{toast:e,variant:t},e.id)})})};z.displayName=`ToastRenderer`;const B=fe;L.__docgenInfo={description:`Toast Provider Component

Wraps the application to manage toast notifications.
Must wrap ToastViewport and any components using useToastManager.`,methods:[],displayName:`ToastProvider`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},limit:{required:!1,tsType:{name:`number`},description:`Maximum number of toasts displayed simultaneously
@default 3`,defaultValue:{value:`3`,computed:!1}},timeout:{required:!1,tsType:{name:`number`},description:`Auto-dismiss time in milliseconds (0 prevents auto-dismiss)
@default 5000`,defaultValue:{value:`5000`,computed:!1}}}},ge.__docgenInfo={description:`Toast Viewport Component

Container for toast notifications. Should be placed once in your app,
typically near the root component.`,methods:[],displayName:`ToastViewport`,props:{children:{required:!1,tsType:{name:`ReactNode`},description:``},position:{required:!1,tsType:{name:`union`,raw:`'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'`,elements:[{name:`literal`,value:`'top-left'`},{name:`literal`,value:`'top-center'`},{name:`literal`,value:`'top-right'`},{name:`literal`,value:`'bottom-left'`},{name:`literal`,value:`'bottom-center'`},{name:`literal`,value:`'bottom-right'`}]},description:`Position of the toast viewport
@default 'bottom-right'`,defaultValue:{value:`'bottom-right'`,computed:!1}}}},R.__docgenInfo={description:`Toast Component

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
@default "Close notification"`,defaultValue:{value:`'Close notification'`,computed:!1}}},composes:[`ToastVariants`]},z.__docgenInfo={description:`Toast Renderer Component

Renders all active toasts. Use this component once in your app,
typically near the root component inside ToastProvider.

@example
\`\`\`tsx
<ToastProvider>
  <App />
  <ToastRenderer position="top-right" />
</ToastProvider>
\`\`\``,methods:[],displayName:`ToastRenderer`};var _e={title:`Components/Toast`,component:R,parameters:{layout:`centered`},tags:[`autodocs`],decorators:[e=>(0,C.jsxs)(L,{children:[(0,C.jsx)(e,{}),(0,C.jsx)(z,{})]})]},V=({variant:e,title:t,description:n})=>{let{add:r}=B();return(0,C.jsxs)(`button`,{onClick:()=>{r({title:t,description:n,type:e})},style:{padding:`0.75rem 1.5rem`,border:`1px solid #ccc`,borderRadius:`6px`,cursor:`pointer`,fontSize:`14px`,backgroundColor:`#fff`,transition:`all 150ms`},onMouseEnter:e=>{e.currentTarget.style.backgroundColor=`#f3f4f6`},onMouseLeave:e=>{e.currentTarget.style.backgroundColor=`#fff`},children:[`Show `,e||`default`,` toast`]})};const H={render:()=>(0,C.jsx)(V,{variant:`default`,title:`Notification`,description:`This is a default toast notification.`})},U={render:()=>(0,C.jsx)(V,{variant:`success`,title:`Success!`,description:`Your changes have been saved successfully.`})},W={render:()=>(0,C.jsx)(V,{variant:`error`,title:`Error`,description:`Something went wrong. Please try again.`})},G={render:()=>(0,C.jsx)(V,{variant:`warning`,title:`Warning`,description:`Please review your changes before continuing.`})},K={render:()=>(0,C.jsx)(V,{variant:`default`,title:`Simple notification`})},q={render:()=>(0,C.jsx)(V,{variant:`default`,title:`Important Update Available`,description:`A new version of the application is available with important security updates and new features. Please update to continue using the application.`})},J={render:()=>{let{add:e}=B();return(0,C.jsx)(`button`,{onClick:()=>{e({title:`Default notification`,description:`This is a default toast.`,type:`default`}),setTimeout(()=>{e({title:`Success!`,description:`Operation completed successfully.`,type:`success`})},200),setTimeout(()=>{e({title:`Warning`,description:`Please review your input.`,type:`warning`})},400),setTimeout(()=>{e({title:`Error`,description:`Something went wrong.`,type:`error`})},600)},style:{padding:`0.75rem 1.5rem`,border:`1px solid #ccc`,borderRadius:`6px`,cursor:`pointer`,fontSize:`14px`,backgroundColor:`#fff`},children:`Show all variants`})}},Y={render:()=>(0,C.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,C.jsx)(`p`,{style:{margin:0,fontSize:`14px`,color:`#666`},children:`Toasts automatically dismiss after 5 seconds`}),(0,C.jsx)(V,{variant:`success`,title:`Auto-dismiss enabled`,description:`This toast will disappear in 5 seconds.`})]})},X={render:()=>{let{add:e}=B();return(0,C.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,C.jsx)(`p`,{style:{margin:0,fontSize:`14px`,color:`#666`},children:`Note: Configure timeout via ToastProvider to disable auto-dismiss`}),(0,C.jsx)(`button`,{onClick:()=>{e({title:`Important message`,description:`This toast will not auto-dismiss. Click the X to close.`,type:`default`})},style:{padding:`0.75rem 1.5rem`,border:`1px solid #ccc`,borderRadius:`6px`,cursor:`pointer`,fontSize:`14px`,backgroundColor:`#fff`},children:`Show persistent toast`})]})},decorators:[e=>(0,C.jsxs)(L,{timeout:0,children:[(0,C.jsx)(e,{}),(0,C.jsx)(z,{})]})]},Z={render:()=>{let{add:e}=B(),t=0;return(0,C.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,C.jsx)(`p`,{style:{margin:0,fontSize:`14px`,color:`#666`},children:`Maximum 3 toasts displayed at once (configurable via limit prop)`}),(0,C.jsx)(`button`,{onClick:()=>{let n=[`default`,`success`,`warning`,`error`];for(let r=0;r<5;r++)setTimeout(()=>{t++,e({title:`Toast #${t}`,description:`This is toast number ${t}`,type:n[Math.floor(Math.random()*4)]})},r*300)},style:{padding:`0.75rem 1.5rem`,border:`1px solid #ccc`,borderRadius:`6px`,cursor:`pointer`,fontSize:`14px`,backgroundColor:`#fff`},children:`Add 5 toasts`})]})}},Q={render:()=>{let{add:e}=B();return(0,C.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`,minWidth:`300px`},children:[(0,C.jsx)(`h3`,{style:{margin:0,fontSize:`16px`,fontWeight:600},children:`Common Actions`}),(0,C.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,C.jsx)(`button`,{onClick:()=>{e({title:`Changes saved`,description:`Your profile has been updated successfully.`,type:`success`})},style:{padding:`0.5rem 1rem`,border:`1px solid #10b981`,borderRadius:`6px`,cursor:`pointer`,fontSize:`14px`,backgroundColor:`#10b981`,color:`#fff`},children:`Save Changes`}),(0,C.jsx)(`button`,{onClick:()=>{e({title:`Item deleted`,description:`The item has been permanently removed.`,type:`default`})},style:{padding:`0.5rem 1rem`,border:`1px solid #ccc`,borderRadius:`6px`,cursor:`pointer`,fontSize:`14px`,backgroundColor:`#fff`},children:`Delete Item`}),(0,C.jsx)(`button`,{onClick:()=>{e({title:`Failed to upload`,description:`File size exceeds the maximum limit of 10MB.`,type:`error`})},style:{padding:`0.5rem 1rem`,border:`1px solid #ef4444`,borderRadius:`6px`,cursor:`pointer`,fontSize:`14px`,backgroundColor:`#ef4444`,color:`#fff`},children:`Upload File (Error)`}),(0,C.jsx)(`button`,{onClick:()=>{e({title:`Connection unstable`,description:`Your internet connection is slow. Some features may not work.`,type:`warning`})},style:{padding:`0.5rem 1rem`,border:`1px solid #f59e0b`,borderRadius:`6px`,cursor:`pointer`,fontSize:`14px`,backgroundColor:`#f59e0b`,color:`#fff`},children:`Check Connection`})]})]})}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <ToastDemo variant="default" title="Notification" description="This is a default toast notification." />
}`,...H.parameters?.docs?.source},description:{story:`Default variant - neutral background`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <ToastDemo variant="success" title="Success!" description="Your changes have been saved successfully." />
}`,...U.parameters?.docs?.source},description:{story:`Success variant - for successful operations`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <ToastDemo variant="error" title="Error" description="Something went wrong. Please try again." />
}`,...W.parameters?.docs?.source},description:{story:`Error variant - for error messages`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <ToastDemo variant="warning" title="Warning" description="Please review your changes before continuing." />
}`,...G.parameters?.docs?.source},description:{story:`Warning variant - for warning messages`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <ToastDemo variant="default" title="Simple notification" />
}`,...K.parameters?.docs?.source},description:{story:`Title only - minimal toast`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <ToastDemo variant="default" title="Important Update Available" description="A new version of the application is available with important security updates and new features. Please update to continue using the application." />
}`,...q.parameters?.docs?.source},description:{story:`Long content - test text wrapping`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source},description:{story:`All variants demo`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source},description:{story:`Auto-dismiss demo`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source},description:{story:`No auto-dismiss demo`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`Multiple toasts demo`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Interactive demo with real-world use case`,...Q.parameters?.docs?.description}}};const ve=[`Default`,`Success`,`Error`,`Warning`,`TitleOnly`,`LongContent`,`AllVariants`,`AutoDismiss`,`NoAutoDismiss`,`MultipleToasts`,`InteractiveDemo`];export{J as AllVariants,Y as AutoDismiss,H as Default,W as Error,Q as InteractiveDemo,q as LongContent,Z as MultipleToasts,X as NoAutoDismiss,U as Success,K as TitleOnly,G as Warning,ve as __namedExportsOrder,_e as default};