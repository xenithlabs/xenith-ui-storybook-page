import{j as m}from"./jsx-runtime-BhBAkL08.js";import{r as p}from"./index-caxmlYbZ.js";import{c as d}from"./cn-C-5SdYIA.js";import{t as b}from"./stringCase-DaZl3p-i.js";import{I as x}from"./useClickOutside-Cmz7BspW.js";import"./styles-BNEhTmYy.js";import"./index-Bb4qSo10.js";import"./Icon-Bh8OjlaW.js";import"./search-l0nYC1Ts.js";import"./close-CejhmAMe.js";import"./spinner-C2p9_Bgj.js";import"./chevron-down-mN_p2z2a.js";import"./check-CDvVW5im.js";import"./index-d7ziAqdJ.js";import"./index-DIE_uK0V.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-DBF0kSry.js";import"./floating-ui.dom-BuxmzwbT.js";import"./Button-DOZIFxSS.js";import"./index-D09aQd82.js";import"./index-C1NPOm8g.js";import"./Checkbox-CEELigyu.js";import"./index-BnmSys5K.js";import"./index-BPrjlVTu.js";import"./index-D1_gb_Tp.js";const R=({range:l,onChange:u,inputProps:e,leftInputProps:a,rightInputProps:n,className:f,...H})=>{const[t,c]=p.useState(l??[null,null]);return p.useEffect(()=>{c(l??[null,null])},[l]),m.jsxs("div",{className:d("flex items-center",f),...H,children:[m.jsx(x,{type:"number",leftComponent:m.jsx("span",{className:"ml-3 text-text-weak",children:"Min"}),value:t[0]??"",onChange:i=>{const r=i.target.value,s=[r?parseFloat(r):null,t[1]];c(s),u&&u(s)},min:0,max:t[1]??void 0,...e,...a,placeholder:a!=null&&a.placeholder?b(a.placeholder):"",className:d("appearance-none",e==null?void 0:e.className,a==null?void 0:a.className)}),m.jsx("span",{className:"mx-2",children:"-"}),m.jsx(x,{type:"number",leftComponent:m.jsx("span",{className:"ml-3 text-text-weak",children:"Max"}),value:t[1]??"",onChange:i=>{const r=i.target.value,s=[t[0],r?parseFloat(r):null];c(s),u&&u(s)},min:t[0]??0,...e,...n,placeholder:n!=null&&n.placeholder?b(n.placeholder):"",className:d("appearance-none",e==null?void 0:e.className,n==null?void 0:n.className)})]})};R.__docgenInfo={description:"",methods:[],displayName:"AmountRangeInput",props:{range:{required:!1,tsType:{name:"tuple",raw:"[number | null, number | null]",elements:[{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(range: [number | null, number | null]) => void",signature:{arguments:[{type:{name:"tuple",raw:"[number | null, number | null]",elements:[{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]}]},name:"range"}],return:{name:"void"}}},description:""},inputProps:{required:!1,tsType:{name:"ReactInputHTMLAttributes",raw:"React.InputHTMLAttributes<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:""},leftInputProps:{required:!1,tsType:{name:"ReactInputHTMLAttributes",raw:"React.InputHTMLAttributes<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:""},rightInputProps:{required:!1,tsType:{name:"ReactInputHTMLAttributes",raw:"React.InputHTMLAttributes<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:""}},composes:["Omit"]};const Q={title:"Xenith UI/Components/Amount Range Input",component:R,decorators:l=>m.jsx("div",{className:"py-10 w-[300px] h-[400px]  pb-40",children:m.jsx(l,{})}),tags:["autodocs"]},o={};var T,w,M;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:"{}",...(M=(w=o.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};const V=["Default"];export{o as Default,V as __namedExportsOrder,Q as default};
