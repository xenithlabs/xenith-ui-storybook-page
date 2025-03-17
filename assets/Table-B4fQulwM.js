import{j as t}from"./jsx-runtime-DR9Q75dM.js";import{I}from"./Icon-Bs9G1Rwk.js";import{c as s}from"./cn-C-5SdYIA.js";import{F as q}from"./reset-B7P2r9As.js";import{t as c}from"./styles-BNEhTmYy.js";import{r as i}from"./index-DRjF_FHU.js";import{T as u}from"./Text-BYjIVLkz.js";import{B as x}from"./Button-X8fnom3X.js";const g=i.forwardRef(({className:r,pagination:e,empty:a,...l},d)=>t.jsxs("div",{className:"w-full border rounded-md shadow-none",children:[t.jsx("div",{className:"relative w-full overflow-auto rounded-t-md [&:only-child]:rounded-b-md",children:t.jsx("table",{ref:d,className:s(c(),"w-full caption-bottom ",r),...l})}),a,e]}));g.displayName="Table";const h=i.forwardRef(({className:r,...e},a)=>t.jsx("thead",{ref:a,className:s(c({variant:"semiBold"}),"[&_tr]:border-b bg-bg-weak ",r),...e}));h.displayName="TableHeader";const y=i.forwardRef(({className:r,...e},a)=>t.jsx("tbody",{ref:a,className:s(c(),"[&_tr:last-child]:border-0",r),...e}));y.displayName="TableBody";const w=i.forwardRef(({className:r,...e},a)=>t.jsx("tfoot",{ref:a,className:s("border-t bg-bg-weak/50 font-medium [&>tr]:last:border-b-0",r),...e}));w.displayName="TableFooter";const T=i.forwardRef(({className:r,onClick:e,...a},l)=>t.jsx("tr",{ref:l,role:e?"button":void 0,onClick:e,className:s("border-b transition-colors hover:bg-bg-weaker data-[state=selected]:bg-bg-weak bg-bg-default group",{"cursor-pointer":e},r),...a}));T.displayName="TableRow";const N=i.forwardRef(({className:r,stickyPosition:e,sticky:a,children:l,buttonProps:{className:d,...o}={},align:n="left",...m},p)=>t.jsx("th",{ref:p,className:s("pl-2 pr-4 py-2 text-left align-middle whitespace-nowrap font-semibold bg-bg-weak [&>[role=checkbox]]:translate-y-[2px] [&:has([role=checkbox])]:text-white",{"sticky ":a,"top-0 z-50":e==="top","bottom-0 z-50":e==="bottom","left-0 z-50":e==="left","right-[-2px] z-50":e==="right"},r),...m,children:t.jsx(x,{className:s("pl-1 pr-1 h-6 flex justify-end hover:bg-bg-weaker hover:text-text-default relative rounded-md w-full gap-1 text-text-weak font-semibold",{"justify-between":!!(o!=null&&o.icon)&&n==="left","justify-center":n==="center","justify-start":n==="right"},d),variant:"nude",theme:"neutral",iconPosition:"right",...o,children:l})}));N.displayName="TableHead";const j=i.forwardRef(({className:r,sticky:e,stickyPosition:a,children:l,action:d,align:o="left",href:n,hrefAs:m,linkProps:p={},innerClassName:_,...R},k)=>{let f="div",b={};return n&&(f=m||"a",b={...p,href:n}),t.jsx("td",{ref:k,className:s("pl-2 pr-5 py-1 align-middle  [&>[role=checkbox]]:translate-y-[2px] text-text-weak bg-bg-default group-hover:bg-bg-weaker whitespace-nowrap",{"sticky shadow-inner":e,"top-0 z-10":a==="top","bottom-0 z-10":a==="bottom","left-0 z-10":a==="left","right-[-2px] z-10":a==="right"},r),...R,children:t.jsxs(f,{...b,className:s("flex items-center gap-1 pl-1 min-h-8",{"justify-start":o==="left","justify-center":o==="center","justify-end":o==="right"},_),children:[l,d&&t.jsx("div",{className:"relative top-[2px]",children:d})]})})});j.displayName="TableCell";const v=i.forwardRef(({className:r,...e},a)=>t.jsx("caption",{ref:a,className:s("mt-4 text-text-weak",r),...e}));v.displayName="TableCaption";const z=({title:r,subTitle:e,hasReset:a,resetText:l,className:d,onReset:o})=>t.jsxs("div",{className:s("flex flex-col justify-center items-center gap-2 h-[184px] shadow-container rounded-b-md",d),children:[t.jsx(u,{variant:"semiBold",className:"text-text-weak",children:r}),t.jsx(u,{variant:"regular",className:"text-text-weak",children:e}),a&&t.jsx(x,{variant:"link",icon:t.jsx(I,{icon:t.jsx(q,{})}),onClick:o,children:l})]});g.__docgenInfo={description:"",methods:[],displayName:"Table"};h.__docgenInfo={description:"",methods:[],displayName:"TableHeader"};y.__docgenInfo={description:"",methods:[],displayName:"TableBody"};w.__docgenInfo={description:"",methods:[],displayName:"TableFooter"};N.__docgenInfo={description:"",methods:[],displayName:"TableHead",props:{buttonProps:{defaultValue:{value:"{}",computed:!1},required:!1},align:{defaultValue:{value:'"left"',computed:!1},required:!1}}};T.__docgenInfo={description:"",methods:[],displayName:"TableRow"};j.__docgenInfo={description:"",methods:[],displayName:"TableCell",props:{align:{defaultValue:{value:'"left"',computed:!1},required:!1},linkProps:{defaultValue:{value:"{}",computed:!1},required:!1}}};v.__docgenInfo={description:"",methods:[],displayName:"TableCaption"};z.__docgenInfo={description:"",methods:[],displayName:"TableEmptyState",props:{title:{required:!0,tsType:{name:"string"},description:""},subTitle:{required:!1,tsType:{name:"string"},description:""},hasReset:{required:!1,tsType:{name:"boolean"},description:""},resetText:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},onReset:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{g as T,h as a,T as b,N as c,y as d,j as e,z as f};
