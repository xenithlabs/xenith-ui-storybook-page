import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{R as o}from"./index-l2PZgWEW.js";import{c as n}from"./cn-C-5SdYIA.js";import{f as g}from"./format-BEMO4FpZ.js";const l=o.forwardRef(({className:s,...i},t)=>e.jsx("div",{ref:t,className:n("flex flex-col gap-7",s),...i}));l.displayName="Timeline";const m=o.forwardRef(({className:s,pointClassName:i="bg-accent",disableVerticalLine:t,children:a,...r},N)=>e.jsxs("div",{ref:N,className:n("flex gap-2",s),...r,children:[e.jsxs("div",{className:"flex flex-col items-center shrink-0",children:[e.jsx("div",{className:n("mt-0.5 w-3 h-3 shrink-0 rounded-full",i)}),e.jsx("div",{className:n("mt-0.5 w-0 border-l border-solid h-full bg-primary",{"border-border-strong":!t,"border-transparent":t})})]}),e.jsx("div",{className:"flex-1 leading-[16px]",children:a})]}));m.displayName="TimelineItem";const c=o.forwardRef(({className:s,children:i,...t},a)=>e.jsx("div",{ref:a,className:n("flex justify-between w-full",s),...t,children:i}));c.displayName="TimelineHeader";const p=o.forwardRef(({className:s,children:i,...t},a)=>e.jsx("div",{ref:a,className:n("font-semibold text-text-default",s),...t,children:i}));p.displayName="TimelineTitle";const f=o.forwardRef(({className:s,date:i,dateFormat:t="dd MMM yyyy hh:mm a",...a},r)=>e.jsx("div",{ref:r,className:n("overflow-hidden text-text-weak whitespace-nowrap overflow-ellipsis shrink-0",s),...a,children:g(new Date(i),t)}));f.displayName="TimelineDate";const x=o.forwardRef(({className:s,children:i,...t},a)=>e.jsx("div",{ref:a,className:n("pt-2 pb-3 text-text-weak",s),...t,children:i}));x.displayName="TimelineDescription";l.__docgenInfo={description:"",methods:[],displayName:"Timeline"};m.__docgenInfo={description:"",methods:[],displayName:"TimelineItem",props:{pointClassName:{defaultValue:{value:'"bg-accent"',computed:!1},required:!1}}};c.__docgenInfo={description:"",methods:[],displayName:"TimelineHeader"};p.__docgenInfo={description:"",methods:[],displayName:"TimelineTitle"};f.__docgenInfo={description:"",methods:[],displayName:"TimelineDate",props:{dateFormat:{defaultValue:{value:'"dd MMM yyyy hh:mm a"',computed:!1},required:!1}}};x.__docgenInfo={description:"",methods:[],displayName:"TimelineDescription"};const h=[{eventTitle:"Payment created",date:new Date().toISOString(),description:"The payment process is initiated"},{eventTitle:"Payment processed",date:new Date().toISOString(),description:"The payment is processed"},{eventTitle:"Payment completed",date:new Date().toISOString(),description:"The payment is completed",pointClassName:"bg-bg-success"}],_={title:"Xenith UI/Components/Timeline",component:l,tags:["autodocs"],render:()=>e.jsx(l,{children:h.map((s,i)=>e.jsxs(m,{disableVerticalLine:i===h.length-1,children:[e.jsxs(c,{children:[e.jsx(p,{children:s.eventTitle}),e.jsx(f,{date:s.date})]}),e.jsx(x,{children:s.description})]},i))})},d={};var T,y,u;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:"{}",...(u=(y=d.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};const b=["Default"];export{d as Default,b as __namedExportsOrder,_ as default};