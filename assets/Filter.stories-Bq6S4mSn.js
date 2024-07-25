import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{r as i}from"./index-l2PZgWEW.js";import{I as $}from"./Icon-BVoV0EQW.js";import{F as D}from"./filter-BJuVaPw1.js";import{S as H,b as E,c as K,f as q,a as U}from"./Sheet-BL7fDXNY.js";import{h as W}from"./Heading-B_Jl69qA.js";import{B as f}from"./Button-DjkywwbK.js";import{T as X,a as z,b as v,c as u,d as G,e as h}from"./Table-DMzei0sz.js";import{d as J}from"./useClickOutside-D-47QnXF.js";import"./cn-C-5SdYIA.js";import"./index-Bb4qSo10.js";import"./index-Vudkywkh.js";import"./index-BgmTQNcy.js";import"./index-CaNG7YX3.js";import"./index-DPMSfDr2.js";import"./index-C76mvIvD.js";import"./index-Bel6ALHY.js";import"./index-DZOIkxWA.js";import"./close-Bwe4q-Z3.js";import"./index-Cm6j2cFO.js";import"./styles-KGZWQfzh.js";import"./spinner-DNNsglCv.js";import"./sort-down-CKv955Md.js";import"./styles-BNEhTmYy.js";import"./Text-UY6J7iD0.js";import"./search-Bt8qP1Fx.js";import"./chevron-down-jNWesQvo.js";import"./check-4u3gJW-P.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-fvTbNGom.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-DjcUcJmE.js";import"./Checkbox-BO35WX6q.js";import"./index-CZsjDy6p.js";import"./index-BmdjtsoG.js";const I=i.createContext({filter:{},open:!1,setOpen:()=>{},setFilter:()=>{},onApply:()=>{},onReset:()=>{}}),x=()=>{const{filter:r,setFilter:n,onApply:a,onReset:o}=i.useContext(I);return{filter:r,setFilterByKey:(t,m)=>{n(l=>({...l,[t]:m}))},onApply:a,onReset:o}},P=H;P.displayName="FilterSheet";const M=E;M.displayName="FilterSheetContent";const w=()=>{const{onReset:r,filter:n}=x(),a=Object.keys(n).length;return e.jsx(K,{children:e.jsxs("div",{className:W({variant:"titleMd",className:"text-text-default font-semibold justify-between flex items-center pr-4"}),children:[e.jsx("div",{children:a?`Filter (${a})`:"Filter"}),e.jsx(f,{variant:"link",theme:"primary",onClick:()=>r(),children:"Reset all"})]})})},B=()=>{const{onApply:r}=x();return e.jsxs(q,{children:[e.jsx(f,{theme:"neutral",variant:"outline",children:"Cancel"}),e.jsx(f,{onClick:()=>r(),children:"Apply Filter"})]})},V=()=>{const{filter:r}=x(),n=Object.keys(r).length;return e.jsx(U,{asChild:!0,children:e.jsx(f,{variant:"outline",icon:e.jsx($,{icon:e.jsx(D,{}),className:"text-text-weak"}),theme:n?"primary":"neutral",children:n?`Filter (${n})`:"Filter"})})};w.__docgenInfo={description:"",methods:[],displayName:"FilterHeader"};B.__docgenInfo={description:"",methods:[],displayName:"FilterFooter"};V.__docgenInfo={description:"",methods:[],displayName:"FilterTrigger"};const F=({children:r,onApply:n,open:a,onOpenChange:o})=>{const[s,t]=i.useState({}),[m,l]=i.useState(!!a),j=a||m,C=o||l,k=d=>()=>{n(d),C(!1)},O=d=>{const S=Object.keys(s),R=d?[d]:S,_=S.reduce((c,p)=>R.includes(p)?(c[p]=null,c):(c[p]=s[p],c),{});t(_)};return e.jsx(I.Provider,{value:{filter:s,setFilter:t,open:j,setOpen:C,onReset:O,onApply:k(s)},children:r})};F.__docgenInfo={description:"",methods:[],displayName:"FilterProvider",props:{onApply:{required:!0,tsType:{name:"signature",type:"function",raw:"(filter: FilterType) => void",signature:{arguments:[{type:{name:"Record",elements:[{name:"string"},{name:"union",raw:"null | string | string[]",elements:[{name:"null"},{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]}],raw:"Record<string, FilterValueType>"},name:"filter"}],return:{name:"void"}}},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(opened: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"opened"}],return:{name:"void"}}},description:""}},composes:["PropsWithChildren"]};const N=[{invoice:"INV001",paymentStatus:"Paid",totalAmount:"$250.00",paymentMethod:"Credit Card"},{invoice:"INV002",paymentStatus:"Pending",totalAmount:"$150.00",paymentMethod:"PayPal"},{invoice:"INV003",paymentStatus:"Unpaid",totalAmount:"$350.00",paymentMethod:"Bank Transfer"},{invoice:"INV004",paymentStatus:"Paid",totalAmount:"$450.00",paymentMethod:"Credit Card"},{invoice:"INV005",paymentStatus:"Paid",totalAmount:"$550.00",paymentMethod:"PayPal"},{invoice:"INV006",paymentStatus:"Pending",totalAmount:"$200.00",paymentMethod:"Bank Transfer"},{invoice:"INV007",paymentStatus:"Unpaid",totalAmount:"$300.00",paymentMethod:"Credit Card"}],g=[{label:"Credit Card",value:"Credit Card"},{label:"Bank Transfer",value:"Bank Transfer"},{label:"PayPal",value:"PayPal"}],L=({filteredData:r})=>{const{filter:n,setFilterByKey:a}=x(),[o,s]=i.useState(g.find(t=>t.value===n.paymentMethod));return i.useEffect(()=>{s(g.find(t=>t.value===n.paymentMethod))},[n]),console.log(o),e.jsxs("div",{children:[e.jsxs(P,{children:[e.jsx(V,{}),e.jsxs(M,{children:[e.jsx(w,{}),e.jsx(J,{options:g,defaultValue:o,onChange:t=>{a("paymentMethod",t.value),s(t)}}),e.jsx(B,{})]})]}),e.jsx("div",{className:"mt-4",children:e.jsxs(X,{children:[e.jsx(z,{children:e.jsxs(v,{children:[e.jsx(u,{className:"w-[100px]",children:"Invoice"}),e.jsx(u,{children:"Status"}),e.jsx(u,{children:"Method"}),e.jsx(u,{className:"text-right",children:"Amount"})]})}),e.jsx(G,{children:r.map(t=>e.jsxs(v,{children:[e.jsx(h,{className:"font-medium",children:t.invoice}),e.jsx(h,{children:t.paymentStatus}),e.jsx(h,{children:t.paymentMethod}),e.jsx(h,{className:"text-right",children:t.totalAmount})]},t.invoice))})]})})]})},we={title:"Xenith UI/Components/Filter",tags:["autodocs"],component:F,argTypes:{children:{type:"function",description:"`ReactNode`"}},args:{onApply:()=>{}},render:r=>{const[n,a]=i.useState(N);return e.jsx(F,{...r,onApply:o=>{const t=Object.keys(o).reduce((m,l)=>m.filter(j=>j[l]===o[l]),N);a(t)},children:e.jsx(L,{filteredData:n})})}},y={};var b,T,A;y.parameters={...y.parameters,docs:{...(b=y.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(A=(T=y.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};const Be=["Default"];export{y as Default,Be as __namedExportsOrder,we as default};
