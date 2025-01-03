import{j as a}from"./jsx-runtime-BhBAkL08.js";import{a as s}from"./index-caxmlYbZ.js";import{c as n}from"./cn-C-5SdYIA.js";import{F as q,a as M,b as F,c as j}from"./warning-aj3Awnfw.js";import{t as A}from"./stringCase-DaZl3p-i.js";import{f as H}from"./format-DftyYaBh.js";import{C}from"./CopyButton-DkoraAaH.js";import{A as O,b as $}from"./Avatar-B4ZJkN7B.js";import{t as U}from"./styles-BNEhTmYy.js";import{I as c}from"./Icon-7BdkfswG.js";import{T as V}from"./Text-D-wIA97j.js";import{S as b}from"./Skeleton-DegGPell.js";import{F as J}from"./close-circle-D_W7qxaL.js";import"./differenceInCalendarDays-Do9CeC6b.js";import"./constructFrom-rJN6zrQ_.js";import"./Button-JbOjmgRu.js";import"./index-D09aQd82.js";import"./index-Bb4qSo10.js";import"./spinner-C2p9_Bgj.js";import"./chevron-down-mN_p2z2a.js";import"./check-CDvVW5im.js";import"./copy-Dm2rCmc6.js";import"./Tooltip-C8FBoUVo.js";import"./index-d7ziAqdJ.js";import"./index-DIE_uK0V.js";import"./index-CoQPK225.js";import"./index-9ELtA30B.js";import"./index-CEEY2n4j.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-BPrjlVTu.js";import"./index-D1_gb_Tp.js";import"./index-CIZp6xOi.js";const B=g=>Array.isArray(g)?g.length===0?"-":g.join(", "):g||"-",v=g=>{const e=g.split("@")[0];return A(e.split(".").join(" ").split("+")[0])},L=g=>g.split(" ").map(e=>e[0]).filter((e,r)=>r<2).join(""),h=s.forwardRef(({className:g,...e},r)=>a.jsx("div",{ref:r,className:n("flex flex-col gap-2",g),...e}));h.displayName="Timeline";const i=s.forwardRef(({className:g,pointClassName:e="bg-accent",icon:r,disableVerticalLine:o,children:m,...y},u)=>a.jsxs("div",{ref:u,className:n("flex gap-2",g),...y,children:[a.jsxs("div",{className:"flex flex-col items-center shrink-0 min-w-4",children:[r||a.jsx("div",{className:n("mt-0.5 w-3 h-3 shrink-0 rounded-full",e)}),a.jsx("div",{className:n("mt-0.5 w-0 border-l border-solid h-full bg-primary",{"border-border-strong":!o,"border-transparent":o})})]}),a.jsx("div",{className:"flex flex-col gap-2 flex-1 leading-[16px] pb-3",children:m})]}));i.displayName="TimelineItem";const t=s.forwardRef(({className:g,children:e,...r},o)=>a.jsx("div",{ref:o,className:n("flex flex-col w-full gap-2",g),...r,children:e}));t.displayName="TimelineHeader";const l=s.forwardRef(({className:g,children:e,...r},o)=>a.jsx("div",{ref:o,className:n("font-semibold text-text-default",g),...r,children:e}));l.displayName="TimelineTitle";const d=s.forwardRef(({children:g,className:e,date:r,dateFormat:o="dd MMM yyyy HH:mm",...m},y)=>a.jsx("div",{ref:y,className:n("overflow-hidden text-text-weak whitespace-nowrap overflow-ellipsis shrink-0",e),...m,children:g||r&&H(new Date(r),o)}));d.displayName="TimelineDate";const p=s.forwardRef(({className:g,children:e,...r},o)=>a.jsx("div",{ref:o,className:n("px-4 py-3 border border-border-default rounded-radius-container whitespace-pre-wrap break-all",g),...r,children:e}));p.displayName="TimelineDescription";const N=s.forwardRef(({className:g,description:e,hasCopyButton:r=!0,copyText:o,...m},y)=>a.jsxs(p,{ref:y,className:n("bg-bg-weaker flex gap-2 items-start",g),...m,children:[a.jsx("div",{className:"grid  gap-2 flex-1",children:a.jsx("div",{className:n(U({variant:"paragraph"})," text-text-weak leading-5 whitespace-pre-wrap"),children:e})}),r&&a.jsx(C,{variant:"solid",theme:"neutral",text:o||e,className:"shrink-0 bg-white w-8 h-8 border border-border-default shadow-input"})]}));N.displayName="TimelineErrorDescriptionJSON";const T=s.forwardRef(({className:g,title:e,description:r,hasCopyButton:o=!0,copyText:m,...y},u)=>a.jsxs(p,{ref:u,className:n("bg-bg-weaker flex gap-2 items-start",g),...y,children:[a.jsx(c,{icon:a.jsx(q,{}),className:"text-text-critical shrink-0"}),a.jsxs("div",{className:"flex flex-col gap-2 flex-1",children:[a.jsx("span",{className:"leading-[14px] text-text-default font-medium",children:e}),a.jsx("span",{className:"font-normal text-text-default leading-5",children:r})]}),o&&a.jsx(C,{variant:"solid",theme:"neutral",text:m||`${e}${r?`
${r}`:""}`,className:"shrink-0 bg-white w-8 h-8 border border-border-default shadow-input"})]}));T.displayName="TimelineErrorDescription";const w=s.forwardRef(({className:g,user:e,shouldNameify:r=!0,remarks:o,...m},y)=>a.jsx(p,{ref:y,className:n("bg-bg-weaker flex gap-2 items-start",g),...m,children:a.jsxs("div",{className:"grid gap-3",children:[a.jsxs("div",{className:"flex gap-2 items-center",children:[a.jsx(O,{className:"bg-[#1ABC9C]",children:a.jsx($,{className:"text-white font-heading text-[10px] uppercase",children:L(r?v(e):e)})}),a.jsx(V,{variant:"badge",children:r?v(e):e})]}),a.jsx("div",{children:B(o)})]})}));w.displayName="TimelineNotesDescription";const E=()=>a.jsxs("div",{className:"flex flex-col gap-2",children:[a.jsx(b,{className:"w-[200px] h-4"}),a.jsx(b,{className:"w-[140px] h-4"})]});h.__docgenInfo={description:"",methods:[],displayName:"Timeline"};i.__docgenInfo={description:"",methods:[],displayName:"TimelineItem",props:{pointClassName:{defaultValue:{value:'"bg-accent"',computed:!1},required:!1}}};t.__docgenInfo={description:"",methods:[],displayName:"TimelineHeader"};l.__docgenInfo={description:"",methods:[],displayName:"TimelineTitle"};d.__docgenInfo={description:"",methods:[],displayName:"TimelineDate",props:{dateFormat:{defaultValue:{value:'"dd MMM yyyy HH:mm"',computed:!1},required:!1}}};p.__docgenInfo={description:"",methods:[],displayName:"TimelineDescription"};T.__docgenInfo={description:"",methods:[],displayName:"TimelineErrorDescription",props:{hasCopyButton:{defaultValue:{value:"true",computed:!1},required:!1}}};N.__docgenInfo={description:"",methods:[],displayName:"TimelineErrorDescriptionJSON",props:{hasCopyButton:{defaultValue:{value:"true",computed:!1},required:!1}}};w.__docgenInfo={description:"",methods:[],displayName:"TimelineNotesDescription",props:{shouldNameify:{defaultValue:{value:"true",computed:!1},required:!1}}};E.__docgenInfo={description:"",methods:[],displayName:"TimelineSkeleton"};const z=[{eventTitle:"Payment processed",date:new Date().toISOString(),description:"The payment is processed",icon:a.jsx(c,{size:"md",icon:a.jsx(J,{})})},{eventTitle:"Payment completed",date:new Date().toISOString(),description:"The payment is completed",pointClassName:"bg-bg-success",icon:a.jsx(c,{size:"md",icon:a.jsx(M,{})})}],va={title:"Xenith UI/Components/Timeline",component:h,tags:["autodocs"],render:()=>a.jsx("div",{className:"",children:a.jsxs(h,{children:[a.jsxs(i,{icon:a.jsx(c,{icon:a.jsx(F,{})}),children:[a.jsxs(t,{children:[a.jsx(l,{children:"Transaction request created."}),a.jsx(d,{children:"14 May 2024 16:40 UTC"})]}),a.jsx(w,{user:"John Doe",shouldNameify:!1,remarks:"This is a note"})]}),z.map((g,e)=>a.jsxs(i,{icon:g.icon,children:[a.jsxs(t,{children:[a.jsx(l,{children:g.eventTitle}),a.jsx(d,{date:g.date})]}),g.description&&a.jsx(p,{children:g.description})]},e)),a.jsxs(i,{icon:a.jsx(c,{icon:a.jsx(j,{})}),children:[a.jsxs(t,{children:[a.jsx(l,{children:"Transaction request failed."}),a.jsx(d,{children:"14 May 2024 16:40 UTC"})]}),a.jsx(p,{children:"ayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgorengayamgoreng"})]}),a.jsxs(i,{icon:a.jsx(c,{icon:a.jsx(j,{})}),children:[a.jsxs(t,{children:[a.jsx(l,{children:"Transaction request failed."}),a.jsx(d,{children:"14 May 2024 16:40 UTC"})]}),a.jsx(T,{title:"Error Code: Server Error",description:"An unexpected server error occurred. Wait briefly and retry. If the error persists after multiple attempts, contact support."})]}),a.jsxs(i,{disableVerticalLine:!0,icon:a.jsx(c,{icon:a.jsx(j,{})}),children:[a.jsxs(t,{children:[a.jsx(l,{children:"Transaction request failed."}),a.jsx(d,{children:"14 May 2024 16:40 UTC"})]}),a.jsx(N,{description:JSON.stringify({error:{code:"INVALID_REQUEST",message:"There are something wrong with the request There are something wrong with the request There are something wrong with the request"}},null,4)})]})]})})},x={},f={render:()=>a.jsx(E,{})};var _,D,I;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:"{}",...(I=(D=x.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var k,S,R;f.parameters={...f.parameters,docs:{...(k=f.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <TimelineSkeleton />
}`,...(R=(S=f.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};const _a=["Default","TimelineLoadingSkeleton"];export{x as Default,f as TimelineLoadingSkeleton,_a as __namedExportsOrder,va as default};
