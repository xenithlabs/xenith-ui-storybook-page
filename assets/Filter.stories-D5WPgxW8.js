import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{r as l}from"./index-l2PZgWEW.js";import{I as R}from"./Icon-ev__gahW.js";import{F as $}from"./close-Bwe4q-Z3.js";import{S as k,b as D,c as H,f as E,a as q,g as K}from"./Sheet-DoFRuwKw.js";import{h as U}from"./Heading-B_Jl69qA.js";import{B as g}from"./Button-DoE0C3eO.js";import{T as z,a as W,b as v,c as h,d as X,e as y}from"./Table-Bjccpxs4.js";import{d as G}from"./useClickOutside-4GeKW3sl.js";import"./cn-C-5SdYIA.js";import"./index-Bb4qSo10.js";import"./index-Vudkywkh.js";import"./index-BgmTQNcy.js";import"./index-CaNG7YX3.js";import"./index-DPMSfDr2.js";import"./index-C76mvIvD.js";import"./index-Bel6ALHY.js";import"./index-DZOIkxWA.js";import"./index-Cm6j2cFO.js";import"./styles-BRwXF_yu.js";import"./styles-BNEhTmYy.js";import"./spinner-D3uK0xOl.js";import"./chevron-down-jNWesQvo.js";import"./reset-DwhUhHkh.js";import"./Text-UY6J7iD0.js";import"./search-BceqokmR.js";import"./check-4u3gJW-P.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-fvTbNGom.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-DjcUcJmE.js";import"./Checkbox-BePh-fpO.js";import"./index-CZsjDy6p.js";import"./index-BmdjtsoG.js";const P=l.createContext({filter:{},open:!1,setOpen:()=>{},setFilter:()=>{},onApply:()=>{},onReset:()=>{}}),S=()=>{const{filter:n,setFilter:r,onApply:s,onReset:a,setOpen:i,open:t}=l.useContext(P),m=(o,p)=>{r(x=>({...x,[o]:p}))},d=Object.keys(n).length;return{filter:n,setFilterByKey:m,onApply:s,onReset:a,setOpen:i,open:t,filterCount:d}},C=n=>{const{open:r,setOpen:s}=S();return e.jsx(k,{...n,open:r,onOpenChange:s})};C.displayName="FilterSheet";const I=D;I.displayName="FilterSheetContent";const M=K;M.displayName="FilterSheetClose";const O=({children:n})=>e.jsx(H,{children:e.jsxs("div",{className:U({variant:"titleMd",className:"text-text-default font-semibold justify-between flex items-center"}),children:[e.jsx("div",{children:n}),e.jsx("div",{className:"flex items-center gap-2",children:e.jsx(M,{asChild:!0,children:e.jsx(g,{iconOnly:!0,icon:e.jsx(R,{icon:e.jsx($,{})}),size:"xs",theme:"neutral",variant:"nude"})})})]})}),w=()=>{const{onApply:n,setOpen:r}=S();return e.jsxs(E,{children:[e.jsx(g,{theme:"neutral",variant:"outline",onClick:()=>r(!1),children:"Cancel"}),e.jsx(g,{onClick:()=>n(),children:"Apply Filter"})]})},V=q;V.displayName="SheetTrigger";C.__docgenInfo={description:"",methods:[],displayName:"FilterSheet"};O.__docgenInfo={description:"",methods:[],displayName:"FilterHeader"};w.__docgenInfo={description:"",methods:[],displayName:"FilterFooter"};const F=({children:n,onApply:r})=>{const[s,a]=l.useState({}),[i,t]=l.useState(!1),m=o=>()=>{r(o),t(!1)},d=o=>{const p=Object.keys(s),x=Array.isArray(o)?o:[o],B=o?x:p,_=p.reduce((c,u)=>B.includes(u)?(c[u]=null,c):(c[u]=s[u],c),{});a(_)};return e.jsx(P.Provider,{value:{filter:s,setFilter:a,open:i,setOpen:t,onReset:d,onApply:m(s)},children:n})};F.__docgenInfo={description:"",methods:[],displayName:"FilterProvider",props:{onApply:{required:!0,tsType:{name:"signature",type:"function",raw:"(filter: FilterType) => void",signature:{arguments:[{type:{name:"Record",elements:[{name:"string"},{name:"union",raw:"null | string | string[]",elements:[{name:"null"},{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]}],raw:"Record<string, FilterValueType>"},name:"filter"}],return:{name:"void"}}},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(opened: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"opened"}],return:{name:"void"}}},description:""}},composes:["PropsWithChildren"]};const N=[{invoice:"INV001",paymentStatus:"Paid",totalAmount:"$250.00",paymentMethod:"Credit Card"},{invoice:"INV002",paymentStatus:"Pending",totalAmount:"$150.00",paymentMethod:"PayPal"},{invoice:"INV003",paymentStatus:"Unpaid",totalAmount:"$350.00",paymentMethod:"Bank Transfer"},{invoice:"INV004",paymentStatus:"Paid",totalAmount:"$450.00",paymentMethod:"Credit Card"},{invoice:"INV005",paymentStatus:"Paid",totalAmount:"$550.00",paymentMethod:"PayPal"},{invoice:"INV006",paymentStatus:"Pending",totalAmount:"$200.00",paymentMethod:"Bank Transfer"},{invoice:"INV007",paymentStatus:"Unpaid",totalAmount:"$300.00",paymentMethod:"Credit Card"}],j=[{label:"Credit Card",value:"Credit Card"},{label:"Bank Transfer",value:"Bank Transfer"},{label:"PayPal",value:"PayPal"}],J=({filteredData:n})=>{const{filter:r,setFilterByKey:s}=S(),[a,i]=l.useState(j.find(t=>t.value===r.paymentMethod));return l.useEffect(()=>{i(j.find(t=>t.value===r.paymentMethod))},[r]),console.log(a),e.jsxs("div",{children:[e.jsxs(C,{children:[e.jsx(V,{}),e.jsxs(I,{children:[e.jsx(O,{}),e.jsx(G,{options:j,defaultValue:a,onChange:t=>{s("paymentMethod",t.value),i(t)}}),e.jsx(w,{})]})]}),e.jsx("div",{className:"mt-4",children:e.jsxs(z,{children:[e.jsx(W,{children:e.jsxs(v,{children:[e.jsx(h,{className:"w-[100px]",children:"Invoice"}),e.jsx(h,{children:"Status"}),e.jsx(h,{children:"Method"}),e.jsx(h,{className:"text-right",children:"Amount"})]})}),e.jsx(X,{children:n.map(t=>e.jsxs(v,{children:[e.jsx(y,{className:"font-medium",children:t.invoice}),e.jsx(y,{children:t.paymentStatus}),e.jsx(y,{children:t.paymentMethod}),e.jsx(y,{className:"text-right",children:t.totalAmount})]},t.invoice))})]})})]})},Ie={title:"Xenith UI/Components/Filter",tags:["autodocs"],component:F,argTypes:{children:{type:"function",description:"`ReactNode`"}},args:{onApply:()=>{}},render:n=>{const[r,s]=l.useState(N);return e.jsx(F,{...n,onApply:a=>{const t=Object.keys(a).reduce((m,d)=>m.filter(o=>o[d]===a[d]),N);s(t)},children:e.jsx(J,{filteredData:r})})}},f={};var A,T,b;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:"{}",...(b=(T=f.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};const Me=["Default"];export{f as Default,Me as __namedExportsOrder,Ie as default};
