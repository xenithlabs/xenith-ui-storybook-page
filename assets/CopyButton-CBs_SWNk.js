import{j as e}from"./jsx-runtime-BhBAkL08.js";import{B as l}from"./Button-DOZIFxSS.js";import{I as s}from"./Icon-Bh8OjlaW.js";import{F as d}from"./check-CDvVW5im.js";import{F as c}from"./copy-Dm2rCmc6.js";import{r as n}from"./index-caxmlYbZ.js";import{T as m,a as u,b as f,c as x}from"./Tooltip-C8FBoUVo.js";const T=o=>{const[i,r]=n.useState("Copy"),[a,t]=n.useState(!1);return e.jsx(m,{children:e.jsxs(u,{open:a,onOpenChange:t,children:[e.jsx(f,{asChild:!0,children:e.jsx(l,{variant:"unstyled",...o,iconOnly:!0,onClick:p=>{p.stopPropagation(),navigator.clipboard.writeText(o.text),r("Copied"),t(!0),setTimeout(()=>{t(!1),setTimeout(()=>{r("Copy")},150)},1e3)},icon:e.jsx(s,{icon:e.jsx(c,{})})})}),e.jsx(x,{children:e.jsxs("div",{className:"flex items-center gap-1",children:[i,i==="Copied"&&e.jsx(s,{icon:e.jsx(d,{})})]})})]})})};T.__docgenInfo={description:"",methods:[],displayName:"CopyButton",props:{icon:{required:!1,tsType:{name:"ReactNode"},description:""},iconOnly:{required:!1,tsType:{name:"boolean"},description:""},iconPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:""},asChild:{required:!1,tsType:{name:"boolean"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},text:{required:!0,tsType:{name:"string"},description:""}},composes:["ButtonHTMLAttributes","VariantProps"]};export{T as C};