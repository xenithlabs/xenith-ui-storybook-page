import{j as e}from"./jsx-runtime-BhBAkL08.js";import{B as m}from"./Button-3dGPhkPQ.js";import{F as c}from"./check-CDvVW5im.js";import{F as u}from"./copy-Dm2rCmc6.js";import{r as s}from"./index-caxmlYbZ.js";import{T as f,a as T,b as x,c as y}from"./Tooltip-Clx9wCHb.js";import{I as n}from"./Icon-7BdkfswG.js";const C=({text:a,buttonText:o,...p})=>{const[i,r]=s.useState("Copy"),[l,t]=s.useState(!1);return e.jsx(f,{children:e.jsxs(T,{open:l,onOpenChange:t,children:[e.jsx(x,{asChild:!0,children:e.jsx(m,{variant:"unstyled",...p,iconOnly:!o,onClick:d=>{d.stopPropagation(),navigator.clipboard.writeText(a),r("Copied"),t(!0),setTimeout(()=>{t(!1),setTimeout(()=>{r("Copy")},150)},1e3)},icon:e.jsx(n,{icon:e.jsx(u,{})}),children:o})}),e.jsx(y,{children:e.jsxs("div",{className:"flex items-center gap-1",children:[i,i==="Copied"&&e.jsx(n,{icon:e.jsx(c,{})})]})})]})})};C.__docgenInfo={description:"",methods:[],displayName:"CopyButton",props:{icon:{required:!1,tsType:{name:"ReactNode"},description:""},iconOnly:{required:!1,tsType:{name:"boolean"},description:""},iconPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:""},asChild:{required:!1,tsType:{name:"boolean"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},innerComp:{required:!1,tsType:{name:"ElementType"},description:""},innerClassName:{required:!1,tsType:{name:"string"},description:""},text:{required:!0,tsType:{name:"string"},description:""},buttonText:{required:!1,tsType:{name:"string"},description:""}},composes:["ButtonHTMLAttributes","VariantProps"]};export{C};
