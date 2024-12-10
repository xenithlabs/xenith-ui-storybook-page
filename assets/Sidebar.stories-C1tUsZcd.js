import{j as e}from"./jsx-runtime-BhBAkL08.js";import{a as w,r as j}from"./index-caxmlYbZ.js";import{c as r}from"./cn-C-5SdYIA.js";import{L as y}from"./Logo-BkSN3Kn1.js";import{a as T}from"./spinner-C2p9_Bgj.js";import{I as S}from"./Icon-Bh8OjlaW.js";import{B as I}from"./Button-DOZIFxSS.js";import{T as q}from"./Text-D-wIA97j.js";import{F as R}from"./home-D3aIP_nw.js";import{F as _,a as k}from"./merchant-DrRac9Jb.js";import{T as C,a as F,b as B,c as P}from"./Tooltip-C8FBoUVo.js";import"./index-Bb4qSo10.js";import"./index-D09aQd82.js";import"./styles-BNEhTmYy.js";import"./chevron-down-mN_p2z2a.js";import"./index-d7ziAqdJ.js";import"./index-DIE_uK0V.js";import"./index-CoQPK225.js";import"./index-9ELtA30B.js";import"./index-CEEY2n4j.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-BPrjlVTu.js";import"./index-D1_gb_Tp.js";import"./index-CIZp6xOi.js";const l=w.forwardRef(({className:t,children:s,...i},a)=>e.jsxs("div",{ref:a,className:r("w-[231px] min-w-[231px] shadow-sidebar fixed bg-white h-screen z-20 flex flex-col",t),...i,children:[e.jsx("div",{className:"p-4",children:e.jsx(y,{})}),e.jsx("div",{className:"flex flex-col flex-1 px-3 pb-4 overflow-y-auto",children:s})]}));l.displayName="Sidebar";l.__docgenInfo={description:"",methods:[],displayName:"Sidebar"};const b=({title:t,className:s})=>e.jsx("div",{className:r("text-xs text-text-weaker font-[600] px-1",s),children:t});b.__docgenInfo={description:"",methods:[],displayName:"SidebarGroupTitle",props:{title:{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const o=j.forwardRef(({icon:t,text:s,disabled:i,active:a,children:m,badgeNumber:x,expanded:c,...p},v)=>{const g=!!m,N=!!x;return e.jsx(I,{variant:"unstyled",disabled:i,...p,asChild:!1,ref:v,className:r("grid w-full disabled:text-text-weaker group font-medium",p.className),children:e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsxs("div",{className:r("flex justify-between text-text-weak group-disabled:text-text-weaker text-xs items-center py-2 px-1  rounded-md hover:text-text-default",{"text-text-default bg-divider":a}),children:[e.jsxs("div",{className:"flex items-center gap-2",children:[t,e.jsx("div",{children:s})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[N&&e.jsx("div",{className:"flex items-center justify-center h-6 text-xs text-white rounded-full bg-accent min-w-6",children:x}),g&&e.jsx("div",{className:r("transition-all duration-300 flex items-center",{"rotate-180":!c}),children:e.jsx(S,{size:"lg",icon:e.jsx(T,{})})})]})]}),e.jsx("div",{className:r("grid  transition-all opacity-0 duration-300 overflow-hidden",{"grid-rows-[0fr]":!c,"opacity-100 grid-rows-[1fr]":c}),children:e.jsx(q,{variant:"medium",className:"flex flex-col w-full min-h-0 gap-1 text-text-weak",children:m})})]})})});o.displayName="SidebarItem";o.__docgenInfo={description:"",methods:[],displayName:"SidebarItem",props:{icon:{required:!1,tsType:{name:"ReactNode"},description:""},text:{required:!0,tsType:{name:"ReactNode"},description:""},badgeNumber:{required:!1,tsType:{name:"number"},description:""},active:{required:!1,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""}},composes:["ButtonHTMLAttributes","PropsWithChildren"]};const d=({text:t,active:s,disabled:i,className:a})=>e.jsx("div",{className:r("px-7 ml-[1px] w-full text-left text-xs py-2 text-text-weak rounded-md cursor-pointer hover:text-text-default",{"bg-divider text-text-default":s,"text-text-weaker":i},a),role:"button",children:t});d.__docgenInfo={description:"",methods:[],displayName:"SidebarSubItem",props:{text:{required:!0,tsType:{name:"string"},description:""},active:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const ae={title:"Xenith UI/Components/Sidebar",component:l,tags:["autodocs"],render:()=>{const[t,s]=j.useState(!1);return e.jsx("div",{className:"h-screen",children:e.jsxs(l,{children:[e.jsx(b,{title:"Dashboard"}),e.jsx(o,{disabled:!0,text:"Home",icon:e.jsx(R,{})}),e.jsx("a",{href:"#",className:"pointer-events-none",children:e.jsx(o,{text:"Users",icon:e.jsx(_,{}),active:!0})}),e.jsxs(o,{text:"Merchant",icon:e.jsx(k,{}),expanded:t,onClick:()=>s(!t),children:[e.jsx(C,{children:e.jsxs(F,{children:[e.jsx(B,{children:e.jsx("a",{href:"#",className:"pointer-events-none",children:e.jsx(d,{text:"Pay Ins",disabled:!0})})}),e.jsx(P,{children:"Please contact your Admin for access"})]})}),e.jsx("a",{href:"#",className:"pointer-events-none",children:e.jsx(d,{active:!0,text:"Pay Outs"})}),e.jsx(d,{text:"Management"})]})]})})}},n={};var f,u,h;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(h=(u=n.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const oe=["Default"];export{n as Default,oe as __namedExportsOrder,ae as default};
