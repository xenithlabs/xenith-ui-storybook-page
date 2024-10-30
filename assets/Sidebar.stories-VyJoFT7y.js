import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{R as y,r as j}from"./index-l2PZgWEW.js";import{c as r}from"./cn-C-5SdYIA.js";import{L as N}from"./Logo-g9jF8_Ah.js";import{a as S}from"./spinner-D3uK0xOl.js";import{I as T}from"./Icon-ev__gahW.js";import{B as I}from"./Button-BT-8gRS6.js";import{T as R}from"./Text-sxDyydH3.js";import{F as _}from"./home-BYFYJsES.js";import{F as q,a as k}from"./merchant-co-Qm86Z.js";import"./index-Bb4qSo10.js";import"./index-Cm6j2cFO.js";import"./styles-Cs5Y1E_z.js";import"./styles-BNEhTmYy.js";import"./chevron-down-jNWesQvo.js";const d=y.forwardRef(({className:t,children:s,...n},l)=>e.jsxs("div",{ref:l,className:r("w-[231px] min-w-[231px] shadow-sidebar fixed bg-white h-screen z-20 flex flex-col",t),...n,children:[e.jsx("div",{className:"p-4",children:e.jsx(N,{})}),e.jsx("div",{className:"flex flex-col flex-1 px-3 pb-4 overflow-y-auto",children:s})]}));d.displayName="Sidebar";d.__docgenInfo={description:"",methods:[],displayName:"Sidebar"};const b=({title:t,className:s})=>e.jsx("div",{className:r("text-xs text-text-weaker font-[600] px-1",s),children:t});b.__docgenInfo={description:"",methods:[],displayName:"SidebarGroupTitle",props:{title:{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const a=j.forwardRef(({icon:t,text:s,disabled:n,active:l,children:x,badgeNumber:m,expanded:c,...p},w)=>{const g=!!x,v=!!m;return e.jsx(I,{variant:"unstyled",disabled:n,...p,asChild:!1,ref:w,className:r("grid w-full disabled:text-text-weaker group",p.className),children:e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsxs("div",{className:r("flex justify-between text-text-weak group-disabled:text-text-weaker text-xs items-center py-2 px-1  rounded-md hover:text-text-default",{"text-text-default bg-divider":l}),children:[e.jsxs("div",{className:"flex items-center gap-2",children:[t,e.jsx("div",{children:s})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[v&&e.jsx("div",{className:"flex items-center justify-center h-6 text-xs text-white rounded-full bg-accent min-w-6",children:m}),g&&e.jsx("div",{className:r("transition-all duration-300 flex items-center",{"rotate-180":!c}),children:e.jsx(T,{size:"lg",icon:e.jsx(S,{})})})]})]}),e.jsx("div",{className:r("grid  transition-all opacity-0 duration-300 overflow-hidden",{"grid-rows-[0fr]":!c,"opacity-100 grid-rows-[1fr]":c}),children:e.jsx(R,{variant:"medium",className:"flex flex-col items-start w-full min-h-0 gap-1 text-text-weak",children:x})})]})})});a.displayName="SidebarItem";a.__docgenInfo={description:"",methods:[],displayName:"SidebarItem",props:{icon:{required:!1,tsType:{name:"ReactNode"},description:""},text:{required:!0,tsType:{name:"ReactNode"},description:""},badgeNumber:{required:!1,tsType:{name:"number"},description:""},active:{required:!1,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""}},composes:["ButtonHTMLAttributes","PropsWithChildren"]};const o=({text:t,active:s})=>e.jsx("div",{className:r("px-7 ml-[1px] w-full text-left text-xs py-2 text-text-weak rounded-md cursor-pointer hover:text-text-default",{"bg-divider text-text-default":s}),role:"button",children:t});o.__docgenInfo={description:"",methods:[],displayName:"SidebarSubItem",props:{text:{required:!0,tsType:{name:"string"},description:""},active:{required:!1,tsType:{name:"boolean"},description:""}}};const W={title:"Xenith UI/Components/Sidebar",component:d,tags:["autodocs"],render:()=>{const[t,s]=j.useState(!1);return e.jsx("div",{className:"h-screen",children:e.jsxs(d,{children:[e.jsx(b,{title:"Dashboard"}),e.jsx(a,{disabled:!0,active:!0,text:"Home",icon:e.jsx(_,{})}),e.jsx(a,{text:"Users",icon:e.jsx(q,{})}),e.jsxs(a,{text:"Merchant",icon:e.jsx(k,{}),expanded:t,onClick:()=>s(!t),children:[e.jsx(o,{text:"Pay Ins"}),e.jsx(o,{active:!0,text:"Pay Outs"}),e.jsx(o,{text:"Management"})]})]})})}},i={};var f,u,h;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(h=(u=i.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const X=["Default"];export{i as Default,X as __namedExportsOrder,W as default};
