import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{R as y,r as j}from"./index-l2PZgWEW.js";import{c as r}from"./cn-C-5SdYIA.js";import{L as N}from"./Logo-g9jF8_Ah.js";import{a as T}from"./spinner-D3uK0xOl.js";import{B as S}from"./Button-YSPy_GLC.js";import{I}from"./Icon-ev__gahW.js";import{T as R}from"./Text-UY6J7iD0.js";import{F as _}from"./home-BYFYJsES.js";import{F as q,a as k}from"./merchant-co-Qm86Z.js";import"./index-Cm6j2cFO.js";import"./styles-DsUnyYA6.js";import"./index-Bb4qSo10.js";import"./styles-BNEhTmYy.js";import"./chevron-down-jNWesQvo.js";const c=y.forwardRef(({className:t,children:s,...d},n)=>e.jsxs("div",{ref:n,className:r("w-[231px] min-w-[231px] shadow-md fixed bg-white h-screen z-20 flex flex-col",t),...d,children:[e.jsx("div",{className:"p-4",children:e.jsx(N,{})}),e.jsx("div",{className:"flex flex-col flex-1 px-3 pb-4 overflow-y-auto",children:s})]}));c.__docgenInfo={description:"",methods:[],displayName:"Sidebar"};const w=({title:t,className:s})=>e.jsx("div",{className:r("text-xs text-text-weaker font-[600] px-1",s),children:t});w.__docgenInfo={description:"",methods:[],displayName:"SidebarGroupTitle",props:{title:{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const i=j.forwardRef(({icon:t,text:s,disabled:d,active:n,children:x,badgeNumber:m,expanded:l,...p},b)=>{const g=!!x,v=!!m;return e.jsx(S,{variant:"unstyled",disabled:d,...p,asChild:!1,ref:b,className:r("grid w-full disabled:text-text-weaker group",p.className),children:e.jsxs("div",{className:"flex flex-col  w-full",children:[e.jsxs("div",{className:r("flex justify-between text-text-weak group-disabled:text-text-weaker text-xs items-center py-2 px-1  rounded-md hover:text-text-default",{"bg-divider":n}),children:[e.jsxs("div",{className:"flex items-center gap-2",children:[t,e.jsx("div",{children:s})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[v&&e.jsx("div",{className:"flex items-center justify-center h-6 text-xs text-white rounded-full bg-accent min-w-6",children:m}),g&&e.jsx("div",{className:r("transition-all duration-300 flex items-center",{"rotate-180":!l}),children:e.jsx(I,{size:"lg",icon:e.jsx(T,{})})})]})]}),e.jsx("div",{className:r("grid  transition-all opacity-0 duration-300 overflow-hidden",{"grid-rows-[0fr]":!l,"opacity-100 grid-rows-[1fr]":l}),children:e.jsx(R,{variant:"medium",className:"flex flex-col w-full items-start min-h-0 gap-1 text-text-weak",children:x})})]})})});i.__docgenInfo={description:"",methods:[],displayName:"SidebarItem",props:{icon:{required:!1,tsType:{name:"ReactNode"},description:""},text:{required:!0,tsType:{name:"ReactNode"},description:""},badgeNumber:{required:!1,tsType:{name:"number"},description:""},active:{required:!1,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""}},composes:["ButtonHTMLAttributes","PropsWithChildren"]};const o=({text:t,active:s})=>e.jsx("div",{className:r("px-7 ml-[1px] w-full text-left text-xs py-2 text-text-weak rounded-md cursor-pointer hover:text-text-default",{"bg-divider":s}),role:"button",children:t});o.__docgenInfo={description:"",methods:[],displayName:"SidebarSubItem",props:{text:{required:!0,tsType:{name:"string"},description:""},active:{required:!1,tsType:{name:"boolean"},description:""}}};const W={title:"Xenith UI/Components/Sidebar",component:c,tags:["autodocs"],render:()=>{const[t,s]=j.useState(!1);return e.jsx("div",{className:"h-screen",children:e.jsxs(c,{children:[e.jsx(w,{title:"Dashboard"}),e.jsx(i,{disabled:!0,active:!0,text:"Home",icon:e.jsx(_,{})}),e.jsx(i,{text:"Users",icon:e.jsx(q,{})}),e.jsxs(i,{text:"Merchant",icon:e.jsx(k,{}),expanded:t,onClick:()=>s(!t),children:[e.jsx(o,{text:"Pay Ins"}),e.jsx(o,{active:!0,text:"Pay Outs"}),e.jsx(o,{text:"Management"})]})]})})}},a={};var f,u,h;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const X=["Default"];export{a as Default,X as __namedExportsOrder,W as default};
