import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{R as c}from"./index-l2PZgWEW.js";import{c as d}from"./cn-C-5SdYIA.js";import{f as y}from"./format-BEMO4FpZ.js";const a=c.forwardRef(({className:i,...r},l)=>e.jsx("div",{ref:l,className:d("flex flex-col gap-7",i),...r}));a.displayName="Timeline";const t=c.forwardRef(({className:i,date:r,dateFormat:l="dd MMM yyyy hh:mm a",pointClassName:p="bg-accent",eventTitle:f,children:x,...u},h)=>e.jsxs("div",{ref:h,className:d("flex gap-2",i),...u,children:[e.jsxs("div",{className:"flex flex-col items-center shrink-0",children:[e.jsx("div",{className:d("mt-0.5 w-3 h-3 shrink-0 rounded-full",p)}),e.jsx("div",{className:"mt-0.5 w-0 border-l border-border-strong border-solid h-full bg-primary"})]}),e.jsxs("div",{className:"flex-1 leading-[16px]",children:[e.jsxs("div",{className:"flex justify-between w-full",children:[e.jsx("div",{className:"font-semibold text-text-default",children:f}),e.jsx("div",{className:"text-text-weak",children:y(new Date(r),l)})]}),e.jsx("div",{className:"mt-2 text-text-weak",children:x})]})]}));a.__docgenInfo={description:"",methods:[],displayName:"Timeline"};t.__docgenInfo={description:"",methods:[],displayName:"TimelineItem",props:{dateFormat:{defaultValue:{value:'"dd MMM yyyy hh:mm a"',computed:!1},required:!1},pointClassName:{defaultValue:{value:'"bg-accent"',computed:!1},required:!1}}};const w={title:"Xenith UI/Components/Timeline",component:a,tags:["autodocs"],render:()=>e.jsxs(a,{children:[e.jsx(t,{eventTitle:"Payment created",date:new Date().toISOString(),children:"The payment process is initiated"}),e.jsx(t,{eventTitle:"Payment processed",date:new Date().toISOString(),children:"The payment is processed"}),e.jsx(t,{eventTitle:"Payment completed",date:new Date().toISOString(),pointClassName:"bg-bg-success",children:"The payment is completed"})]})},s={};var n,o,m;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(m=(o=s.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const T=["Default"];export{s as Default,T as __namedExportsOrder,w as default};
