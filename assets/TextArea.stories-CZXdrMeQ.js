import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{r as g}from"./index-l2PZgWEW.js";import{c as n}from"./cn-C-5SdYIA.js";import{t as w}from"./styles-BNEhTmYy.js";import{t as E}from"./stringCase-DaZl3p-i.js";import{L as d}from"./Label-FDaRk8P_.js";import"./index-Bb4qSo10.js";import"./index-CqnGoJLG.js";import"./index-CaNG7YX3.js";import"./index-Cm6j2cFO.js";const r=g.forwardRef(({containerClassName:f,error:N,className:j,...t},v)=>e.jsx("div",{className:n("border w-full gap-2 overflow-hidden rounded-md shadow-input relative  border-divider flex items-center focus-within:border-border-accent focus-within:ring-0 ring-offset-0",{"border-border-critical":N},f),children:e.jsx("textarea",{className:n(w(),"border-0 focus:outline-none w-full placeholder:text-text-weaker resize-none h-[72px] px-3 py-2 disabled:bg-bg-weaker disabled:cursor-not-allowed",j),ref:v,...t,placeholder:t.placeholder?E(t.placeholder):"Notes"})}));r.displayName="TextArea";r.__docgenInfo={description:"",methods:[],displayName:"TextArea"};const R={title:"Xenith UI/Components/Text Area",component:r,tags:["autodocs"],render:()=>e.jsxs("div",{children:[e.jsx(d,{className:"mb-1",children:"Notes"}),e.jsx(r,{placeholder:"Enter notes"})]})},s={},o={render:()=>e.jsxs("div",{children:[e.jsx(d,{className:"mb-1",children:"Notes"}),e.jsx(r,{error:!0,placeholder:"Enter notes"})]})},a={render:()=>e.jsxs("div",{children:[e.jsx(d,{className:"mb-1",children:"Notes"}),e.jsx(r,{disabled:!0,placeholder:"Enter notes"})]})};var l,c,i;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(i=(c=s.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var m,p,x;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div>
      <Label className="mb-1">Notes</Label>
      <TextArea error placeholder="Enter notes" />
    </div>
}`,...(x=(p=o.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var u,b,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div>
      <Label className="mb-1">Notes</Label>
      <TextArea disabled placeholder="Enter notes" />
    </div>
}`,...(h=(b=a.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const z=["Default","IsError","Disabled"];export{s as Default,a as Disabled,o as IsError,z as __namedExportsOrder,R as default};
