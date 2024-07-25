import{j as c}from"./jsx-runtime-DWbWqHZ-.js";import{r as d,R as p,a as pe}from"./index-l2PZgWEW.js";import{S as D}from"./index-Cm6j2cFO.js";import"./index-CaNG7YX3.js";import{c as W,R as me,T as xe,C as Ce}from"./index-DjcUcJmE.js";import{c as L}from"./cn-C-5SdYIA.js";import{I as ve}from"./Icon-BVoV0EQW.js";import{F as he}from"./chevron-down-jNWesQvo.js";import{t as Ae}from"./styles-BNEhTmYy.js";import"./index-Bb4qSo10.js";function X(e,t=[]){let o=[];function n(r,a){const i=d.createContext(a),l=o.length;o=[...o,a];function u(f){const{scope:A,children:C,...m}=f,I=(A==null?void 0:A[e][l])||i,v=d.useMemo(()=>m,Object.values(m));return c.jsx(I.Provider,{value:v,children:C})}function h(f,A){const C=(A==null?void 0:A[e][l])||i,m=d.useContext(C);if(m)return m;if(a!==void 0)return a;throw new Error(`\`${f}\` must be used within \`${r}\``)}return u.displayName=r+"Provider",[u,h]}const s=()=>{const r=o.map(a=>d.createContext(a));return function(i){const l=(i==null?void 0:i[e])||r;return d.useMemo(()=>({[`__scope${e}`]:{...i,[e]:l}}),[i,l])}};return s.scopeName=e,[n,Ie(s,...t)]}function Ie(...e){const t=e[0];if(e.length===1)return t;const o=()=>{const n=e.map(s=>({useScope:s(),scopeName:s.scopeName}));return function(r){const a=n.reduce((i,{useScope:l,scopeName:u})=>{const f=l(r)[`__scope${u}`];return{...i,...f}},{});return d.useMemo(()=>({[`__scope${t.scopeName}`]:a}),[a])}};return o.scopeName=t.scopeName,o}function ge(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function be(...e){return t=>e.forEach(o=>ge(o,t))}function k(...e){return d.useCallback(be(...e),e)}function Re(e){const t=e+"CollectionProvider",[o,n]=X(t),[s,r]=o(t,{collectionRef:{current:null},itemMap:new Map}),a=C=>{const{scope:m,children:I}=C,v=p.useRef(null),g=p.useRef(new Map).current;return c.jsx(s,{scope:m,itemMap:g,collectionRef:v,children:I})};a.displayName=t;const i=e+"CollectionSlot",l=p.forwardRef((C,m)=>{const{scope:I,children:v}=C,g=r(i,I),x=k(m,g.collectionRef);return c.jsx(D,{ref:x,children:v})});l.displayName=i;const u=e+"CollectionItemSlot",h="data-radix-collection-item",f=p.forwardRef((C,m)=>{const{scope:I,children:v,...g}=C,x=p.useRef(null),_=k(m,x),R=r(u,I);return p.useEffect(()=>(R.itemMap.set(x,{ref:x,...g}),()=>void R.itemMap.delete(x))),c.jsx(D,{[h]:"",ref:_,children:v})});f.displayName=u;function A(C){const m=r(e+"CollectionConsumer",C);return p.useCallback(()=>{const v=m.collectionRef.current;if(!v)return[];const g=Array.from(v.querySelectorAll(`[${h}]`));return Array.from(m.itemMap.values()).sort((R,j)=>g.indexOf(R.ref.current)-g.indexOf(j.ref.current))},[m.collectionRef,m.itemMap])}return[{Provider:a,Slot:l,ItemSlot:f},A,n]}function _e(e,t,{checkForDefaultPrevented:o=!0}={}){return function(s){if(e==null||e(s),o===!1||!s.defaultPrevented)return t==null?void 0:t(s)}}function H(e){const t=d.useRef(e);return d.useEffect(()=>{t.current=e}),d.useMemo(()=>(...o)=>{var n;return(n=t.current)==null?void 0:n.call(t,...o)},[])}function J({prop:e,defaultProp:t,onChange:o=()=>{}}){const[n,s]=je({defaultProp:t,onChange:o}),r=e!==void 0,a=r?e:n,i=H(o),l=d.useCallback(u=>{if(r){const f=typeof u=="function"?u(e):u;f!==e&&i(f)}else s(u)},[r,e,s,i]);return[a,l]}function je({defaultProp:e,onChange:t}){const o=d.useState(e),[n]=o,s=d.useRef(n),r=H(t);return d.useEffect(()=>{s.current!==n&&(r(n),s.current=n)},[n,s,r]),o}var Se=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],Q=Se.reduce((e,t)=>{const o=d.forwardRef((n,s)=>{const{asChild:r,...a}=n,i=r?D:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),c.jsx(i,{...a,ref:s})});return o.displayName=`Primitive.${t}`,{...e,[t]:o}},{}),we=globalThis!=null&&globalThis.document?d.useLayoutEffect:()=>{},ye=pe.useId||(()=>{}),Ne=0;function Pe(e){const[t,o]=d.useState(ye());return we(()=>{o(n=>n??String(Ne++))},[e]),t?`radix-${t}`:""}var Ee=d.createContext(void 0);function Me(e){const t=d.useContext(Ee);return e||t||"ltr"}var b="Accordion",Oe=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[V,Te,De]=Re(b),[E,oo]=X(b,[De,W]),U=W(),Z=p.forwardRef((e,t)=>{const{type:o,...n}=e,s=n,r=n;return c.jsx(V.Provider,{scope:e.__scopeAccordion,children:o==="multiple"?c.jsx(Ve,{...r,ref:t}):c.jsx(Le,{...s,ref:t})})});Z.displayName=b;var[ee,ke]=E(b),[oe,$e]=E(b,{collapsible:!1}),Le=p.forwardRef((e,t)=>{const{value:o,defaultValue:n,onValueChange:s=()=>{},collapsible:r=!1,...a}=e,[i,l]=J({prop:o,defaultProp:n,onChange:s});return c.jsx(ee,{scope:e.__scopeAccordion,value:i?[i]:[],onItemOpen:l,onItemClose:p.useCallback(()=>r&&l(""),[r,l]),children:c.jsx(oe,{scope:e.__scopeAccordion,collapsible:r,children:c.jsx(te,{...a,ref:t})})})}),Ve=p.forwardRef((e,t)=>{const{value:o,defaultValue:n,onValueChange:s=()=>{},...r}=e,[a=[],i]=J({prop:o,defaultProp:n,onChange:s}),l=p.useCallback(h=>i((f=[])=>[...f,h]),[i]),u=p.useCallback(h=>i((f=[])=>f.filter(A=>A!==h)),[i]);return c.jsx(ee,{scope:e.__scopeAccordion,value:a,onItemOpen:l,onItemClose:u,children:c.jsx(oe,{scope:e.__scopeAccordion,collapsible:!0,children:c.jsx(te,{...r,ref:t})})})}),[Ue,M]=E(b),te=p.forwardRef((e,t)=>{const{__scopeAccordion:o,disabled:n,dir:s,orientation:r="vertical",...a}=e,i=p.useRef(null),l=k(i,t),u=Te(o),f=Me(s)==="ltr",A=_e(e.onKeyDown,C=>{var Y;if(!Oe.includes(C.key))return;const m=C.target,I=u().filter(T=>{var z;return!((z=T.ref.current)!=null&&z.disabled)}),v=I.findIndex(T=>T.ref.current===m),g=I.length;if(v===-1)return;C.preventDefault();let x=v;const _=0,R=g-1,j=()=>{x=v+1,x>R&&(x=_)},O=()=>{x=v-1,x<_&&(x=R)};switch(C.key){case"Home":x=_;break;case"End":x=R;break;case"ArrowRight":r==="horizontal"&&(f?j():O());break;case"ArrowDown":r==="vertical"&&j();break;case"ArrowLeft":r==="horizontal"&&(f?O():j());break;case"ArrowUp":r==="vertical"&&O();break}const fe=x%g;(Y=I[fe].ref.current)==null||Y.focus()});return c.jsx(Ue,{scope:o,disabled:n,direction:s,orientation:r,children:c.jsx(V.Slot,{scope:o,children:c.jsx(Q.div,{...a,"data-orientation":r,ref:l,onKeyDown:n?void 0:A})})})}),P="AccordionItem",[Ke,K]=E(P),ne=p.forwardRef((e,t)=>{const{__scopeAccordion:o,value:n,...s}=e,r=M(P,o),a=ke(P,o),i=U(o),l=Pe(),u=n&&a.value.includes(n)||!1,h=r.disabled||e.disabled;return c.jsx(Ke,{scope:o,open:u,disabled:h,triggerId:l,children:c.jsx(me,{"data-orientation":r.orientation,"data-state":le(u),...i,...s,ref:t,disabled:h,open:u,onOpenChange:f=>{f?a.onItemOpen(n):a.onItemClose(n)}})})});ne.displayName=P;var re="AccordionHeader",ce=p.forwardRef((e,t)=>{const{__scopeAccordion:o,...n}=e,s=M(b,o),r=K(re,o);return c.jsx(Q.h3,{"data-orientation":s.orientation,"data-state":le(r.open),"data-disabled":r.disabled?"":void 0,...n,ref:t})});ce.displayName=re;var $="AccordionTrigger",se=p.forwardRef((e,t)=>{const{__scopeAccordion:o,...n}=e,s=M(b,o),r=K($,o),a=$e($,o),i=U(o);return c.jsx(V.ItemSlot,{scope:o,children:c.jsx(xe,{"aria-disabled":r.open&&!a.collapsible||void 0,"data-orientation":s.orientation,id:r.triggerId,...i,...n,ref:t})})});se.displayName=$;var ie="AccordionContent",ae=p.forwardRef((e,t)=>{const{__scopeAccordion:o,...n}=e,s=M(b,o),r=K(ie,o),a=U(o);return c.jsx(Ce,{role:"region","aria-labelledby":r.triggerId,"data-orientation":s.orientation,...a,...n,ref:t,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}})});ae.displayName=ie;function le(e){return e?"open":"closed"}var Ye=Z,ze=ne,Be=ce,de=se,ue=ae;const B=Ye,S=d.forwardRef(({className:e,...t},o)=>c.jsx(ze,{ref:o,className:L("border-b",e),...t}));S.displayName="AccordionItem";const w=d.forwardRef(({className:e,children:t,...o},n)=>c.jsx(Be,{className:"flex",children:c.jsxs(de,{ref:n,className:L(Ae({variant:"medium"}),"flex flex-1 items-center justify-between py-4  transition-all hover:underline [&[data-state=open]>svg]:rotate-180",e),...o,children:[t,c.jsx(ve,{icon:c.jsx(he,{}),className:"h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"})]})}));w.displayName=de.displayName;const y=d.forwardRef(({className:e,children:t,...o},n)=>c.jsx(ue,{ref:n,className:"overflow-hidden  data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...o,children:c.jsx("div",{className:L("pb-4 pt-0",e),children:t})}));y.displayName=ue.displayName;S.__docgenInfo={description:"",methods:[],displayName:"AccordionItem"};w.__docgenInfo={description:"",methods:[]};y.__docgenInfo={description:"",methods:[]};const to={title:"Xenith UI/Components/Accordion",component:B,args:{type:"single",collapsible:!0,children:c.jsx("p",{children:"child"})},render:(...e)=>c.jsxs(B,{...e,className:"",type:"multiple",children:[c.jsxs(S,{value:"item-1",children:[c.jsx(w,{children:"Is it accessible?"}),c.jsx(y,{children:"Yes. It adheres to the WAI-ARIA design pattern."})]}),c.jsxs(S,{value:"item-2",children:[c.jsx(w,{children:"Is it styled?"}),c.jsx(y,{children:"Yes. It comes with default styles that matches the other components' aesthetic."})]}),c.jsxs(S,{value:"item-3",children:[c.jsx(w,{children:"Is it animated?"}),c.jsx(y,{children:"Yes. It's animated by default, but you can disable it if you prefer."})]})]})},N={};var F,G,q;N.parameters={...N.parameters,docs:{...(F=N.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(q=(G=N.parameters)==null?void 0:G.docs)==null?void 0:q.source}}};const no=["Default"];export{N as Default,no as __namedExportsOrder,to as default};