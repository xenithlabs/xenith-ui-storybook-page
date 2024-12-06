import{j as l}from"./jsx-runtime-BhBAkL08.js";import{r as e,a as B}from"./index-caxmlYbZ.js";import{c as D}from"./cn-C-5SdYIA.js";import{I as H}from"./Icon-Bh8OjlaW.js";import{F as G}from"./calendar-DWhiacmf.js";import{_ as p,c as L,d as U,e as W,a as M,b as Z,f as x}from"./index-d7ziAqdJ.js";import{$ as X,a as J}from"./index-CoQPK225.js";import{h as Q,R as Y,$ as ee,a as te}from"./index-D0ZzT1CX.js";import{$ as oe}from"./index-9ELtA30B.js";import{$ as I,b as re,a as ce,c as ne}from"./index-CEEY2n4j.js";import{$ as N}from"./index-D1_gb_Tp.js";import{f as ae}from"./format-CCMfdAOQ.js";import{C as se}from"./Calendar-DxuSZMBt.js";import{B as ie}from"./Button-DOZIFxSS.js";import"./index-Bb4qSo10.js";import"./index-DIE_uK0V.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-BPrjlVTu.js";import"./constructFrom-rJN6zrQ_.js";import"./chevron-left-BzZ3Cg5H.js";import"./chevron-right-C3e6g37q.js";import"./styles-BNEhTmYy.js";import"./index-D09aQd82.js";import"./spinner-C2p9_Bgj.js";import"./chevron-down-mN_p2z2a.js";const j=e.forwardRef((t,n)=>{const{children:o,...r}=t,a=e.Children.toArray(o),c=a.find(le);if(c){const s=c.props.children,i=a.map(d=>d===c?e.Children.count(s)>1?e.Children.only(null):e.isValidElement(s)?s.props.children:null:d);return e.createElement(C,p({},r,{ref:n}),e.isValidElement(s)?e.cloneElement(s,void 0,i):null)}return e.createElement(C,p({},r,{ref:n}),o)});j.displayName="Slot";const C=e.forwardRef((t,n)=>{const{children:o,...r}=t;return e.isValidElement(o)?e.cloneElement(o,{...fe(r,o.props),ref:n?L(n,o.ref):o.ref}):e.Children.count(o)>1?e.Children.only(null):null});C.displayName="SlotClone";const de=({children:t})=>e.createElement(e.Fragment,null,t);function le(t){return e.isValidElement(t)&&t.type===de}function fe(t,n){const o={...n};for(const r in n){const a=t[r],c=n[r];/^on[A-Z]/.test(r)?a&&c?o[r]=(...i)=>{c(...i),a(...i)}:a&&(o[r]=a):r==="style"?o[r]={...a,...c}:r==="className"&&(o[r]=[a,c].filter(Boolean).join(" "))}return{...t,...o}}const T="Popover",[k,Qe]=U(T,[I]),E=I(),[pe,m]=k(T),ue=t=>{const{__scopePopover:n,children:o,open:r,defaultOpen:a,onOpenChange:c,modal:s=!1}=t,i=E(n),d=e.useRef(null),[f,b]=e.useState(!1),[v=!1,u]=W({prop:r,defaultProp:a,onChange:c});return e.createElement(re,i,e.createElement(pe,{scope:n,contentId:oe(),triggerRef:d,open:v,onOpenChange:u,onOpenToggle:e.useCallback(()=>u(P=>!P),[u]),hasCustomAnchor:f,onCustomAnchorAdd:e.useCallback(()=>b(!0),[]),onCustomAnchorRemove:e.useCallback(()=>b(!1),[]),modal:s},o))},me="PopoverTrigger",$e=e.forwardRef((t,n)=>{const{__scopePopover:o,...r}=t,a=m(me,o),c=E(o),s=M(n,a.triggerRef),i=e.createElement(Z.button,p({type:"button","aria-haspopup":"dialog","aria-expanded":a.open,"aria-controls":a.contentId,"data-state":q(a.open)},r,{ref:s,onClick:x(t.onClick,a.onOpenToggle)}));return a.hasCustomAnchor?i:e.createElement(ce,p({asChild:!0},c),i)}),S="PopoverPortal",[be,ve]=k(S,{forceMount:void 0}),he=t=>{const{__scopePopover:n,forceMount:o,children:r,container:a}=t,c=m(S,n);return e.createElement(be,{scope:n,forceMount:o},e.createElement(N,{present:o||c.open},e.createElement(X,{asChild:!0,container:a},r)))},$="PopoverContent",ge=e.forwardRef((t,n)=>{const o=ve($,t.__scopePopover),{forceMount:r=o.forceMount,...a}=t,c=m($,t.__scopePopover);return e.createElement(N,{present:r||c.open},c.modal?e.createElement(xe,p({},a,{ref:n})):e.createElement(Pe,p({},a,{ref:n})))}),xe=e.forwardRef((t,n)=>{const o=m($,t.__scopePopover),r=e.useRef(null),a=M(n,r),c=e.useRef(!1);return e.useEffect(()=>{const s=r.current;if(s)return Q(s)},[]),e.createElement(Y,{as:j,allowPinchZoom:!0},e.createElement(V,p({},t,{ref:a,trapFocus:o.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:x(t.onCloseAutoFocus,s=>{var i;s.preventDefault(),c.current||(i=o.triggerRef.current)===null||i===void 0||i.focus()}),onPointerDownOutside:x(t.onPointerDownOutside,s=>{const i=s.detail.originalEvent,d=i.button===0&&i.ctrlKey===!0,f=i.button===2||d;c.current=f},{checkForDefaultPrevented:!1}),onFocusOutside:x(t.onFocusOutside,s=>s.preventDefault(),{checkForDefaultPrevented:!1})})))}),Pe=e.forwardRef((t,n)=>{const o=m($,t.__scopePopover),r=e.useRef(!1),a=e.useRef(!1);return e.createElement(V,p({},t,{ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:c=>{var s;if((s=t.onCloseAutoFocus)===null||s===void 0||s.call(t,c),!c.defaultPrevented){var i;r.current||(i=o.triggerRef.current)===null||i===void 0||i.focus(),c.preventDefault()}r.current=!1,a.current=!1},onInteractOutside:c=>{var s,i;(s=t.onInteractOutside)===null||s===void 0||s.call(t,c),c.defaultPrevented||(r.current=!0,c.detail.originalEvent.type==="pointerdown"&&(a.current=!0));const d=c.target;((i=o.triggerRef.current)===null||i===void 0?void 0:i.contains(d))&&c.preventDefault(),c.detail.originalEvent.type==="focusin"&&a.current&&c.preventDefault()}}))}),V=e.forwardRef((t,n)=>{const{__scopePopover:o,trapFocus:r,onOpenAutoFocus:a,onCloseAutoFocus:c,disableOutsidePointerEvents:s,onEscapeKeyDown:i,onPointerDownOutside:d,onFocusOutside:f,onInteractOutside:b,...v}=t,u=m($,o),P=E(o);return ee(),e.createElement(te,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:a,onUnmountAutoFocus:c},e.createElement(J,{asChild:!0,disableOutsidePointerEvents:s,onInteractOutside:b,onEscapeKeyDown:i,onPointerDownOutside:d,onFocusOutside:f,onDismiss:()=>u.onOpenChange(!1)},e.createElement(ne,p({"data-state":q(u.open),role:"dialog",id:u.contentId},P,v,{ref:n,style:{...v.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}}))))});function q(t){return t?"open":"closed"}const Ce=ue,Ee=$e,Oe=he,K=ge,_e=Ce,Re=Ee,O=B.forwardRef(({className:t,align:n="center",sideOffset:o=4,...r},a)=>l.jsx(Oe,{children:l.jsx(K,{ref:a,align:n,sideOffset:o,className:D("z-50 rounded-md border bg-white p-2 text-text-default shadow-dropdown outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...r})}));O.displayName=K.displayName;O.__docgenInfo={description:"",methods:[],props:{align:{defaultValue:{value:'"center"',computed:!1},required:!1},sideOffset:{defaultValue:{value:"4",computed:!1},required:!1}}};const z=({date:t,fromDate:n,toDate:o,onChange:r,error:a,...c})=>{const[s,i]=e.useState(t),d=e.useMemo(()=>{if(n&&o)return{before:n,after:o};if(n)return{before:n};if(o)return{after:o}},[n,o]);return e.useEffect(()=>{i(t)},[t]),l.jsxs(_e,{children:[l.jsx(Re,{asChild:!0,children:l.jsx(ie,{variant:"outline",theme:"neutral",className:D("justify-start text-left font-normal items-center",!s&&"text-muted-foreground",{"border-border-critical":a}),icon:l.jsx(H,{icon:l.jsx(G,{})}),children:s?ae(s,"dd MMM yyy"):l.jsx("div",{className:"text-text-weaker",children:c.placeholder??"Pick a date"})})}),l.jsx(O,{className:"w-auto p-0",children:l.jsx(se,{mode:"single",disabled:d,startMonth:n,endMonth:o,selected:s,onSelect:f=>{i(f),r&&r(f)},autoFocus:!0})})]})};z.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{date:{required:!1,tsType:{name:"Date"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(date?: Date) => void",signature:{arguments:[{type:{name:"Date"},name:"date"}],return:{name:"void"}}},description:""},fromDate:{required:!1,tsType:{name:"Date"},description:""},toDate:{required:!1,tsType:{name:"Date"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""}},composes:["Omit"]};const Ye={title:"Xenith UI/Components/Date Picker",component:z,decorators:t=>l.jsx("div",{className:"py-10 w-[300px] h-[400px]  pb-40",children:l.jsx(t,{})}),tags:["autodocs"]},h={},g={args:{fromDate:new Date}};var _,R,y;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:"{}",...(y=(R=h.parameters)==null?void 0:R.docs)==null?void 0:y.source}}};var w,F,A;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    fromDate: new Date()
  }
}`,...(A=(F=g.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};const et=["Default","WithFromDate"];export{h as Default,g as WithFromDate,et as __namedExportsOrder,Ye as default};