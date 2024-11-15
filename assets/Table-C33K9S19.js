import{j as t}from"./jsx-runtime-DWbWqHZ-.js";import{I as j}from"./Icon-ev__gahW.js";import{c as r}from"./cn-C-5SdYIA.js";import{F as v}from"./reset-DwhUhHkh.js";import{t as p}from"./styles-BNEhTmYy.js";import{r as i}from"./index-l2PZgWEW.js";import{T as f}from"./Text-sxDyydH3.js";import{B as b}from"./Button-BT-8gRS6.js";const u=i.forwardRef(({className:s,pagination:e,empty:a,...l},d)=>t.jsxs("div",{className:"w-full border rounded-md shadow-none",children:[t.jsx("div",{className:"relative w-full overflow-auto rounded-t-md [&:only-child]:rounded-b-md",children:t.jsx("table",{ref:d,className:r(p(),"w-full caption-bottom ",s),...l})}),a,e]}));u.displayName="Table";const x=i.forwardRef(({className:s,...e},a)=>t.jsx("thead",{ref:a,className:r(p({variant:"semiBold"}),"[&_tr]:border-b bg-bg-weak ",s),...e}));x.displayName="TableHeader";const h=i.forwardRef(({className:s,...e},a)=>t.jsx("tbody",{ref:a,className:r(p(),"[&_tr:last-child]:border-0",s),...e}));h.displayName="TableBody";const g=i.forwardRef(({className:s,...e},a)=>t.jsx("tfoot",{ref:a,className:r("border-t bg-bg-weak/50 font-medium [&>tr]:last:border-b-0",s),...e}));g.displayName="TableFooter";const y=i.forwardRef(({className:s,onClick:e,...a},l)=>t.jsx("tr",{ref:l,role:e?"button":void 0,onClick:e,className:r("border-b transition-colors hover:bg-bg-weaker data-[state=selected]:bg-bg-weak bg-white group",{"cursor-pointer":e},s),...a}));y.displayName="TableRow";const w=i.forwardRef(({className:s,stickyPosition:e,sticky:a,children:l,buttonProps:{className:d,...o}={},align:n="left",...m},c)=>t.jsx("th",{ref:c,className:r("pl-2 pr-4 py-2 text-left align-middle whitespace-nowrap font-medium bg-bg-weak  text-text-weak [&>[role=checkbox]]:translate-y-[2px] [&:has([role=checkbox])]:text-white",{"sticky ":a,"top-0 z-50":e==="top","bottom-0 z-50":e==="bottom","left-0 z-50":e==="left","right-[-2px] z-50":e==="right"},s),...m,children:t.jsx(b,{className:r("pl-1 pr-1 h-6 flex justify-end hover:bg-bg-weaker relative rounded-md w-full gap-1",{"justify-between":!!(o!=null&&o.icon)&&n==="left","justify-center":n==="center","justify-start":n==="right"},d),variant:"nude",theme:"neutral",iconPosition:"right",...o,children:l})}));w.displayName="TableHead";const T=i.forwardRef(({className:s,sticky:e,stickyPosition:a,children:l,action:d,align:o="left",innerClassName:n,...m},c)=>t.jsx("td",{ref:c,className:r("pl-2 pr-5 py-1 align-middle  [&>[role=checkbox]]:translate-y-[2px] text-text-weak bg-white group-hover:bg-bg-weaker ",{"sticky shadow-inner":e,"top-0 z-10":a==="top","bottom-0 z-10":a==="bottom","left-0 z-10":a==="left","right-[-2px] z-10":a==="right"},s),...m,children:t.jsxs("div",{className:r("flex items-center gap-1 pl-1 min-h-8",{"justify-start":o==="left","justify-center":o==="center","justify-end":o==="right"},n),children:[l,d&&t.jsx("div",{className:"relative top-[2px]",children:d})]})}));T.displayName="TableCell";const N=i.forwardRef(({className:s,...e},a)=>t.jsx("caption",{ref:a,className:r("mt-4 text-text-weak",s),...e}));N.displayName="TableCaption";const _=({title:s,subTitle:e,hasReset:a,resetText:l,className:d,onReset:o})=>t.jsxs("div",{className:r("flex flex-col justify-center items-center gap-2 h-[184px] shadow-container rounded-b-md",d),children:[t.jsx(f,{variant:"semiBold",className:"text-text-weak",children:s}),t.jsx(f,{variant:"regular",className:"text-text-weak",children:e}),a&&t.jsx(b,{variant:"link",icon:t.jsx(j,{icon:t.jsx(v,{})}),onClick:o,children:l})]});u.__docgenInfo={description:"",methods:[],displayName:"Table"};x.__docgenInfo={description:"",methods:[],displayName:"TableHeader"};h.__docgenInfo={description:"",methods:[],displayName:"TableBody"};g.__docgenInfo={description:"",methods:[],displayName:"TableFooter"};w.__docgenInfo={description:"",methods:[],displayName:"TableHead",props:{buttonProps:{defaultValue:{value:"{}",computed:!1},required:!1},align:{defaultValue:{value:'"left"',computed:!1},required:!1}}};y.__docgenInfo={description:"",methods:[],displayName:"TableRow"};T.__docgenInfo={description:"",methods:[],displayName:"TableCell",props:{align:{defaultValue:{value:'"left"',computed:!1},required:!1}}};N.__docgenInfo={description:"",methods:[],displayName:"TableCaption"};_.__docgenInfo={description:"",methods:[],displayName:"TableEmptyState",props:{title:{required:!0,tsType:{name:"string"},description:""},subTitle:{required:!1,tsType:{name:"string"},description:""},hasReset:{required:!1,tsType:{name:"boolean"},description:""},resetText:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},onReset:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{u as T,x as a,y as b,w as c,h as d,T as e,_ as f};
