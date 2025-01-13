import{j as t}from"./jsx-runtime-BhBAkL08.js";import{r as l}from"./index-caxmlYbZ.js";import{g as K,s as L,a as P,f}from"./format-BTZPU_Wb.js";import{t as y}from"./constructFrom-rJN6zrQ_.js";import{e as E}from"./endOfMonth-CoG5-XNs.js";import{c as w}from"./cn-C-5SdYIA.js";import{a as Z}from"./spinner-ByTSIKau.js";import{F as ee}from"./chevron-right-C3e6g37q.js";import{F as C}from"./calendar-DWhiacmf.js";import{F as te}from"./check-CDvVW5im.js";import{B as u}from"./Button-3dGPhkPQ.js";import{T as h}from"./Text-D-wIA97j.js";import{I as g}from"./Icon-7BdkfswG.js";import{D as N}from"./Divider-rb-Rmumz.js";import{P as R,a as q,b as F}from"./Popover-Dr_kQcGi.js";import{C as se}from"./Calendar-DM-hT0Hq.js";import"./differenceInCalendarDays-Do9CeC6b.js";import"./index-D09aQd82.js";import"./index-Bb4qSo10.js";import"./styles-BNEhTmYy.js";import"./chevron-down-mN_p2z2a.js";import"./index-d7ziAqdJ.js";import"./index-DIE_uK0V.js";import"./index-CoQPK225.js";import"./index-D0ZzT1CX.js";import"./index-9ELtA30B.js";import"./index-CYGPaFfr.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-BPrjlVTu.js";import"./index-D1_gb_Tp.js";import"./chevron-left-BzZ3Cg5H.js";function z(s){const e=y(s),r=e.getMonth(),a=r-r%3;return e.setMonth(a,1),e.setHours(0,0,0,0),e}function H(s){const e=y(s);return e.setDate(1),e.setHours(0,0,0,0),e}function I(s){const e=y(s),r=e.getFullYear();return e.setFullYear(r+1,0,0),e.setHours(23,59,59,999),e}function A(s,e){var j,x;const r=K(),a=r.weekStartsOn??((x=(j=r.locale)==null?void 0:j.options)==null?void 0:x.weekStartsOn)??0,o=y(s),p=o.getDay(),m=(p<a?-7:0)+6-(p-a);return o.setDate(o.getDate()+m),o.setHours(23,59,59,999),o}function Q(s){const e=y(s),r=e.getMonth(),a=r-r%3+3;return e.setMonth(a,0),e.setHours(23,59,59,999),e}const re={"This week":ne,"This month":ae,"This quarter":oe,"This year":ie,"Last week":ce,"Last month":me,"Last quarter":le,"Last year":de};function ne(){const s=new Date,e=L(s),r=A(s);return{from:e,to:r}}function ae(){const s=new Date,e=H(s),r=E(s);return{from:e,to:r}}function oe(){const s=new Date,e=z(s),r=Q(s);return{from:e,to:r}}function ie(){const s=new Date,e=P(s),r=I(s);return{from:e,to:r}}function ce(){const s=new Date,e=L(s),r=A(s);return e.setDate(e.getDate()-7),r.setDate(r.getDate()-7),{from:e,to:r}}function me(){const s=new Date,e=H(s),r=E(s);return e.setMonth(e.getMonth()-1),r.setMonth(r.getMonth()-1),{from:e,to:r}}function le(){const s=new Date,e=z(s),r=Q(s);return e.setMonth(e.getMonth()-3),r.setMonth(r.getMonth()-3),{from:e,to:r}}function de(){const s=new Date,e=P(s),r=I(s);return e.setFullYear(e.getFullYear()-1),r.setFullYear(r.getFullYear()-1),{from:e,to:r}}const W=({label:s,startDate:e,endDate:r,startDateFormat:a="dd MMM",endDateFormat:o="dd MMM yyyy",selected:p,onClick:m})=>t.jsxs(u,{variant:"unstyled",size:"sm",className:"flex-1 p-2 hover:bg-bg-weaker rounded-radius-md",innerClassName:"flex justify-between flex-1",onClick:()=>m&&m({from:e,to:r}),children:[t.jsx(h,{variant:"regular",children:s}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsxs(h,{variant:"regular",className:"text-text-weak",children:[f(e,a)," - ",f(r,o)]}),p?t.jsx(g,{icon:t.jsx(te,{}),className:"text-text-accent"}):t.jsx("div",{className:"w-4 h-4"})]})]});W.__docgenInfo={description:"",methods:[],displayName:"DateRangeTemplate",props:{label:{required:!0,tsType:{name:"string"},description:""},startDate:{required:!0,tsType:{name:"Date"},description:""},endDate:{required:!0,tsType:{name:"Date"},description:""},startDateFormat:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"dd MMM"',computed:!1}},endDateFormat:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"dd MMM yyyy"',computed:!1}},selected:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(dateRange: DateRange) => void",signature:{arguments:[{type:{name:"DateRange"},name:"dateRange"}],return:{name:"void"}}},description:""}}};const $=({value:s,onChange:e,required:r,fromDate:a,toDate:o,error:p,dateFormat:m,...j})=>{const[x,T]=l.useState(!1),[c,k]=l.useState(s),[B,D]=l.useState(!1),[n,V]=l.useState({from:new Date,to:new Date}),G=l.useMemo(()=>{if(a&&o)return{before:a,after:o};if(a)return{before:a};if(o)return{after:o}},[a,o]),U=l.useMemo(()=>Object.entries(re).map(([i,d])=>({label:i,range:d()})),[]),X=i=>!(c!=null&&c.from)||!(c!=null&&c.to)?!1:f(c.from,"yyyy-MM-dd")===f(i.from,"yyyy-MM-dd")&&f(c.to,"yyyy-MM-dd")===f(i.to,"yyyy-MM-dd"),J=i=>m?Array.isArray(m)?m[i==="from"?0:1]:m:"dd MMM yyyy",M=(i,d)=>i?f(i,J(d)):"",O=i=>{k(i),e==null||e(i)};return l.useEffect(()=>{k(s)},[s]),t.jsxs(R,{open:x,onOpenChange:T,children:[t.jsx(q,{asChild:!0,children:t.jsx(u,{variant:"outline",theme:"neutral",className:w("justify-start text-left font-normal items-center px-3 gap-5",!c&&"text-muted-foreground",{"border-border-critical":p}),icon:t.jsx(g,{icon:t.jsx(Z,{}),size:"lg",className:w("text-text-weak",{"rotate-180":x})}),iconPosition:"right",children:c?t.jsxs(t.Fragment,{children:[M(c.from,"from")," -"," ",M(c.to,"to")]}):"Select Date Range"})}),t.jsx(F,{className:"p-1",align:"start",style:{width:"320px"},children:t.jsxs("div",{className:"flex flex-col",children:[U.map(({label:i,range:d},b)=>t.jsxs(l.Fragment,{children:[t.jsx(W,{label:i,startDate:d.from,endDate:d.to,onClick:O,selected:X(d)}),b===3&&t.jsx(N,{className:"my-1"})]},b)),t.jsx(N,{className:"my-1"}),t.jsxs(R,{open:B,onOpenChange:D,children:[t.jsx(q,{asChild:!0,children:t.jsxs(u,{variant:"unstyled",size:"sm",className:"flex-1 p-2 hover:bg-bg-weaker rounded-radius-md",innerClassName:"flex justify-between flex-1",children:[t.jsx(h,{variant:"regular",children:"Custom Range"}),t.jsx(g,{icon:t.jsx(ee,{}),className:"text-text-weak"})]})}),t.jsxs(F,{side:"right",sideOffset:8,className:"p-0",children:[t.jsxs("div",{className:"p-3 mb-1 space-y-1",children:[t.jsx(h,{variant:"medium",children:"Custom range"}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(u,{variant:"outline",theme:"neutral",className:w("justify-start text-left font-normal items-center flex-1",{"text-text-weaker":!(n!=null&&n.from)}),icon:t.jsx(g,{icon:t.jsx(C,{}),className:"text-text-weak"}),children:n!=null&&n.from?M(n.from,"from"):"Start Date"}),t.jsx(h,{variant:"medium",children:"-"}),t.jsx(u,{variant:"outline",theme:"neutral",className:w("justify-start text-left font-normal items-center flex-1",{"text-text-weaker":!(n!=null&&n.to)}),icon:t.jsx(g,{icon:t.jsx(C,{}),className:"text-text-weak"}),children:n!=null&&n.to?M(n.to,"to"):"End Date"})]})]}),t.jsx(se,{autoFocus:!0,mode:"range",selected:n,onSelect:V,required:r,disabled:G,startMonth:a,endMonth:o,numberOfMonths:2,className:"border-0 shadow-none",...j}),t.jsx(N,{className:"my-1"}),t.jsxs("div",{className:"flex justify-end gap-4 p-3",children:[t.jsx(u,{variant:"outline",theme:"neutral",size:"sm",className:"w-[70px]",onClick:()=>{D(!1)},children:"Cancel"}),t.jsx(u,{size:"sm",className:"w-[70px]",disabled:!(n!=null&&n.from)||!(n!=null&&n.to),onClick:()=>{O(n),D(!1),T(!1)},children:"Save"})]})]})]})]})})]})};$.__docgenInfo={description:"",methods:[],displayName:"DateRangePicker",props:{value:{required:!1,tsType:{name:"union",raw:"DateRange | undefined",elements:[{name:"DateRange"},{name:"undefined"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: DateRange | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"DateRange | undefined",elements:[{name:"DateRange"},{name:"undefined"}]},name:"value"}],return:{name:"void"}}},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},fromDate:{required:!1,tsType:{name:"Date"},description:""},toDate:{required:!1,tsType:{name:"Date"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},dateFormat:{required:!1,tsType:{name:"union",raw:"string | [string, string]",elements:[{name:"string"},{name:"tuple",raw:"[string, string]",elements:[{name:"string"},{name:"string"}]}]},description:""}}};const Qe={title:"Xenith UI/Components/Date Range Picker",component:$,decorators:s=>t.jsx("div",{className:"py-10 w-[600px] h-[400px]  pb-40",children:t.jsx(s,{})}),tags:["autodocs"]},v={args:{onChange:s=>console.log(s)}};var S,_,Y;v.parameters={...v.parameters,docs:{...(S=v.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    onChange: value => console.log(value)
  }
}`,...(Y=(_=v.parameters)==null?void 0:_.docs)==null?void 0:Y.source}}};const We=["Default"];export{v as Default,We as __namedExportsOrder,Qe as default};
