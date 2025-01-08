import{j as r}from"./jsx-runtime-BhBAkL08.js";import{r as d,a as p,R as ve}from"./index-caxmlYbZ.js";import{S as k}from"./index-D09aQd82.js";import"./index-DIE_uK0V.js";import{c as Q,R as Ae,T as Ie,C as ge}from"./index-C1NPOm8g.js";import{c as Y}from"./cn-C-5SdYIA.js";import{F as be}from"./chevron-down-mN_p2z2a.js";import{t as Re}from"./styles-BNEhTmYy.js";import{I as Z}from"./Icon-7BdkfswG.js";import{F as je}from"./secure_payment-D17PzJB2.js";import"./index-Bb4qSo10.js";function ee(e,o=[]){let t=[];function n(c,a){const i=d.createContext(a),l=t.length;t=[...t,a];function u(f){const{scope:A,children:h,...m}=f,I=(A==null?void 0:A[e][l])||i,C=d.useMemo(()=>m,Object.values(m));return r.jsx(I.Provider,{value:C,children:h})}function v(f,A){const h=(A==null?void 0:A[e][l])||i,m=d.useContext(h);if(m)return m;if(a!==void 0)return a;throw new Error(`\`${f}\` must be used within \`${c}\``)}return u.displayName=c+"Provider",[u,v]}const s=()=>{const c=t.map(a=>d.createContext(a));return function(i){const l=(i==null?void 0:i[e])||c;return d.useMemo(()=>({[`__scope${e}`]:{...i,[e]:l}}),[i,l])}};return s.scopeName=e,[n,we(s,...o)]}function we(...e){const o=e[0];if(e.length===1)return o;const t=()=>{const n=e.map(s=>({useScope:s(),scopeName:s.scopeName}));return function(c){const a=n.reduce((i,{useScope:l,scopeName:u})=>{const f=l(c)[`__scope${u}`];return{...i,...f}},{});return d.useMemo(()=>({[`__scope${o.scopeName}`]:a}),[a])}};return t.scopeName=o.scopeName,t}function ye(e,o){typeof e=="function"?e(o):e!=null&&(e.current=o)}function Se(...e){return o=>e.forEach(t=>ye(t,o))}function $(...e){return d.useCallback(Se(...e),e)}function _e(e){const o=e+"CollectionProvider",[t,n]=ee(o),[s,c]=t(o,{collectionRef:{current:null},itemMap:new Map}),a=h=>{const{scope:m,children:I}=h,C=p.useRef(null),g=p.useRef(new Map).current;return r.jsx(s,{scope:m,itemMap:g,collectionRef:C,children:I})};a.displayName=o;const i=e+"CollectionSlot",l=p.forwardRef((h,m)=>{const{scope:I,children:C}=h,g=c(i,I),x=$(m,g.collectionRef);return r.jsx(k,{ref:x,children:C})});l.displayName=i;const u=e+"CollectionItemSlot",v="data-radix-collection-item",f=p.forwardRef((h,m)=>{const{scope:I,children:C,...g}=h,x=p.useRef(null),j=$(m,x),R=c(u,I);return p.useEffect(()=>(R.itemMap.set(x,{ref:x,...g}),()=>void R.itemMap.delete(x))),r.jsx(k,{[v]:"",ref:j,children:C})});f.displayName=u;function A(h){const m=c(e+"CollectionConsumer",h);return p.useCallback(()=>{const C=m.collectionRef.current;if(!C)return[];const g=Array.from(C.querySelectorAll(`[${v}]`));return Array.from(m.itemMap.values()).sort((R,_)=>g.indexOf(R.ref.current)-g.indexOf(_.ref.current))},[m.collectionRef,m.itemMap])}return[{Provider:a,Slot:l,ItemSlot:f},A,n]}function Ne(e,o,{checkForDefaultPrevented:t=!0}={}){return function(s){if(e==null||e(s),t===!1||!s.defaultPrevented)return o==null?void 0:o(s)}}function oe(e){const o=d.useRef(e);return d.useEffect(()=>{o.current=e}),d.useMemo(()=>(...t)=>{var n;return(n=o.current)==null?void 0:n.call(o,...t)},[])}function te({prop:e,defaultProp:o,onChange:t=()=>{}}){const[n,s]=Pe({defaultProp:o,onChange:t}),c=e!==void 0,a=c?e:n,i=oe(t),l=d.useCallback(u=>{if(c){const f=typeof u=="function"?u(e):u;f!==e&&i(f)}else s(u)},[c,e,s,i]);return[a,l]}function Pe({defaultProp:e,onChange:o}){const t=d.useState(e),[n]=t,s=d.useRef(n),c=oe(o);return d.useEffect(()=>{s.current!==n&&(c(n),s.current=n)},[n,s,c]),t}var Ee=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],ne=Ee.reduce((e,o)=>{const t=d.forwardRef((n,s)=>{const{asChild:c,...a}=n,i=c?k:o;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),r.jsx(i,{...a,ref:s})});return t.displayName=`Primitive.${o}`,{...e,[o]:t}},{}),Me=globalThis!=null&&globalThis.document?d.useLayoutEffect:()=>{},Te=ve.useId||(()=>{}),Oe=0;function De(e){const[o,t]=d.useState(Te());return Me(()=>{t(n=>n??String(Oe++))},[e]),o?`radix-${o}`:""}var ke=d.createContext(void 0);function $e(e){const o=d.useContext(ke);return e||o||"ltr"}var b="Accordion",Le=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[B,Ve,Ye]=_e(b),[M,io]=ee(b,[Ye,Q]),U=Q(),re=p.forwardRef((e,o)=>{const{type:t,...n}=e,s=n,c=n;return r.jsx(B.Provider,{scope:e.__scopeAccordion,children:t==="multiple"?r.jsx(Fe,{...c,ref:o}):r.jsx(We,{...s,ref:o})})});re.displayName=b;var[ce,Be]=M(b),[se,Ue]=M(b,{collapsible:!1}),We=p.forwardRef((e,o)=>{const{value:t,defaultValue:n,onValueChange:s=()=>{},collapsible:c=!1,...a}=e,[i,l]=te({prop:t,defaultProp:n,onChange:s});return r.jsx(ce,{scope:e.__scopeAccordion,value:i?[i]:[],onItemOpen:l,onItemClose:p.useCallback(()=>c&&l(""),[c,l]),children:r.jsx(se,{scope:e.__scopeAccordion,collapsible:c,children:r.jsx(ie,{...a,ref:o})})})}),Fe=p.forwardRef((e,o)=>{const{value:t,defaultValue:n,onValueChange:s=()=>{},...c}=e,[a=[],i]=te({prop:t,defaultProp:n,onChange:s}),l=p.useCallback(v=>i((f=[])=>[...f,v]),[i]),u=p.useCallback(v=>i((f=[])=>f.filter(A=>A!==v)),[i]);return r.jsx(ce,{scope:e.__scopeAccordion,value:a,onItemOpen:l,onItemClose:u,children:r.jsx(se,{scope:e.__scopeAccordion,collapsible:!0,children:r.jsx(ie,{...c,ref:o})})})}),[Ke,T]=M(b),ie=p.forwardRef((e,o)=>{const{__scopeAccordion:t,disabled:n,dir:s,orientation:c="vertical",...a}=e,i=p.useRef(null),l=$(i,o),u=Ve(t),f=$e(s)==="ltr",A=Ne(e.onKeyDown,h=>{var F;if(!Le.includes(h.key))return;const m=h.target,I=u().filter(D=>{var K;return!((K=D.ref.current)!=null&&K.disabled)}),C=I.findIndex(D=>D.ref.current===m),g=I.length;if(C===-1)return;h.preventDefault();let x=C;const j=0,R=g-1,_=()=>{x=C+1,x>R&&(x=j)},O=()=>{x=C-1,x<j&&(x=R)};switch(h.key){case"Home":x=j;break;case"End":x=R;break;case"ArrowRight":c==="horizontal"&&(f?_():O());break;case"ArrowDown":c==="vertical"&&_();break;case"ArrowLeft":c==="horizontal"&&(f?O():_());break;case"ArrowUp":c==="vertical"&&O();break}const Ce=x%g;(F=I[Ce].ref.current)==null||F.focus()});return r.jsx(Ke,{scope:t,disabled:n,direction:s,orientation:c,children:r.jsx(B.Slot,{scope:t,children:r.jsx(ne.div,{...a,"data-orientation":c,ref:l,onKeyDown:n?void 0:A})})})}),E="AccordionItem",[qe,W]=M(E),ae=p.forwardRef((e,o)=>{const{__scopeAccordion:t,value:n,...s}=e,c=T(E,t),a=Be(E,t),i=U(t),l=De(),u=n&&a.value.includes(n)||!1,v=c.disabled||e.disabled;return r.jsx(qe,{scope:t,open:u,disabled:v,triggerId:l,children:r.jsx(Ae,{"data-orientation":c.orientation,"data-state":me(u),...i,...s,ref:o,disabled:v,open:u,onOpenChange:f=>{f?a.onItemOpen(n):a.onItemClose(n)}})})});ae.displayName=E;var le="AccordionHeader",de=p.forwardRef((e,o)=>{const{__scopeAccordion:t,...n}=e,s=T(b,t),c=W(le,t);return r.jsx(ne.h3,{"data-orientation":s.orientation,"data-state":me(c.open),"data-disabled":c.disabled?"":void 0,...n,ref:o})});de.displayName=le;var L="AccordionTrigger",ue=p.forwardRef((e,o)=>{const{__scopeAccordion:t,...n}=e,s=T(b,t),c=W(L,t),a=Ue(L,t),i=U(t);return r.jsx(B.ItemSlot,{scope:t,children:r.jsx(Ie,{"aria-disabled":c.open&&!a.collapsible||void 0,"data-orientation":s.orientation,id:c.triggerId,...i,...n,ref:o})})});ue.displayName=L;var fe="AccordionContent",pe=p.forwardRef((e,o)=>{const{__scopeAccordion:t,...n}=e,s=T(b,t),c=W(fe,t),a=U(t);return r.jsx(ge,{role:"region","aria-labelledby":c.triggerId,"data-orientation":s.orientation,...a,...n,ref:o,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}})});pe.displayName=fe;function me(e){return e?"open":"closed"}var ze=re,Ge=ae,Xe=de,xe=ue,he=pe;const V=ze,w=d.forwardRef(({className:e,showBorder:o=!0,...t},n)=>r.jsx(Ge,{ref:n,className:Y({"border-b":o},e),...t}));w.displayName="AccordionItem";const y=d.forwardRef(({className:e,rightComponent:o,children:t,...n},s)=>r.jsxs(Xe,{className:"flex justify-between items-center",children:[r.jsxs(xe,{ref:s,className:Y(Re({variant:"medium"}),"flex gap-2 items-center justify-between py-4  transition-all  [&[data-state=open]>.icon]:rotate-180",{"flex-1":!o},e),...n,children:[t,r.jsx(Z,{icon:r.jsx(be,{}),className:"h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"})]}),o]}));y.displayName=xe.displayName;const S=d.forwardRef(({className:e,children:o,...t},n)=>r.jsx(he,{ref:n,className:"overflow-hidden  data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...t,children:r.jsx("div",{className:Y("pb-4 pt-0",e),children:o})}));S.displayName=he.displayName;w.__docgenInfo={description:"",methods:[],displayName:"AccordionItem",props:{showBorder:{defaultValue:{value:"true",computed:!1},required:!1}}};y.__docgenInfo={description:"",methods:[]};S.__docgenInfo={description:"",methods:[]};const ao={title:"Xenith UI/Components/Accordion",component:V,args:{type:"single",collapsible:!0},render:(...e)=>r.jsxs(V,{...e,type:"single",children:[r.jsxs(w,{value:"item-1",children:[r.jsx(y,{children:"Is it accessible?"}),r.jsx(S,{children:"Yes. It adheres to the WAI-ARIA design pattern."})]}),r.jsxs(w,{value:"item-2",children:[r.jsx(y,{children:"Is it styled?"}),r.jsx(S,{children:"Yes. It comes with default styles that matches the other components' aesthetic."})]}),r.jsxs(w,{value:"item-3",children:[r.jsx(y,{children:"Is it animated?"}),r.jsx(S,{children:"Yes. It's animated by default, but you can disable it if you prefer."})]})]})},N={},P={render:(...e)=>r.jsx(V,{...e,type:"single",collapsible:!0,children:r.jsxs(w,{value:"item-1",showBorder:!1,children:[r.jsx(y,{rightComponent:r.jsx(Z,{icon:r.jsx(je,{})}),children:"Is it accessible?"}),r.jsx(S,{children:"Yes. It adheres to the WAI-ARIA design pattern."})]})})};var q,z,G;N.parameters={...N.parameters,docs:{...(q=N.parameters)==null?void 0:q.docs,source:{originalSource:"{}",...(G=(z=N.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var X,H,J;P.parameters={...P.parameters,docs:{...(X=P.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: (...args) => {
    return <Accordion {...args} type="single" collapsible>
        <AccordionItem value="item-1" showBorder={false}>
          <AccordionTrigger rightComponent={<Icon icon={<SecurePaymentIcon />} />}>
            Is it accessible?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>;
  }
}`,...(J=(H=P.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};const lo=["Default","WithRightComponent"];export{N as Default,P as WithRightComponent,lo as __namedExportsOrder,ao as default};