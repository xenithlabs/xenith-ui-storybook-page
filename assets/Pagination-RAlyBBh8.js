import{j as t}from"./jsx-runtime-DWbWqHZ-.js";import{r as e}from"./index-l2PZgWEW.js";import{c as S}from"./cn-C-5SdYIA.js";import{F as N}from"./chevron-left-pR7E87oX.js";import{F as z}from"./chevron-right-Dd--vsx8.js";import{B as h}from"./Button-C--AkFFB.js";import{I as C}from"./Icon-ev__gahW.js";import{d as y}from"./useClickOutside-Dq7ofdnJ.js";const l=e.createContext({page:1,pageSize:10,total:1}),c=e.createContext({onPageChange:()=>{},onPageSizeChange:()=>{}}),_=({children:a,total:n=1,page:s=1,pageSize:o=10,onPageChange:i,onPageSizeChange:d,className:v,...P})=>{const[u,m]=e.useState(s),[g,p]=e.useState(o);e.useEffect(()=>{m(s)},[s]),e.useEffect(()=>{p(o)},[o]);const f=e.useCallback(r=>{m(r),i&&i(r)},[i]),x=e.useCallback(r=>{p(r),d&&d(r)},[d]),b=e.useMemo(()=>({page:u,pageSize:g,total:n}),[u,g,n]),j=e.useMemo(()=>({onPageChange:f,onPageSizeChange:x}),[f,x]);return t.jsx(l.Provider,{value:b,children:t.jsx(c.Provider,{value:j,children:t.jsx("div",{className:S("h-[40px] flex items-center justify-between px-3 border-t bg-white rounded-b-md",v),...P,children:a})})})},w=()=>{const{page:a}=e.useContext(l),{onPageChange:n}=e.useContext(c);return t.jsx(h,{variant:"link",size:"sm",iconOnly:!0,theme:"neutral",disabled:a===1,icon:t.jsx(C,{icon:t.jsx(N,{})}),onClick:()=>n(a-1)})},k=()=>{const{total:a,pageSize:n,page:s}=e.useContext(l),o=(s-1)*n+1,i=Math.min(o+n-1,a);return t.jsxs("div",{children:[o,"-",i," of ",a]})},I=({menuPlacement:a="top"})=>{const{onPageSizeChange:n,onPageChange:s}=e.useContext(c),{pageSize:o}=e.useContext(l);return t.jsxs("div",{className:"flex items-center gap-2 text-text-weak",children:[t.jsx("div",{children:"Rows per page:"}),t.jsx("div",{className:"w-20",children:t.jsx(y,{classNames:{control:()=>"border-0 shadow-none bg-transparent"},size:"sm",noBorder:!0,isOptionSearchable:!1,defaultValue:{label:o,value:o},options:[{label:"10",value:10},{label:"25",value:25},{label:"50",value:50},{label:"100",value:100}],onChange:i=>{s(1),n(i)},menuPlacement:a})})]})},M=()=>{const{page:a,total:n,pageSize:s}=e.useContext(l),{onPageChange:o}=e.useContext(c),i=Math.ceil(n/s);return t.jsx(h,{variant:"link",theme:"neutral",iconOnly:!0,size:"sm",disabled:a===i,icon:t.jsx(C,{icon:t.jsx(z,{})}),onClick:()=>o(a+1)})};_.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{total:{defaultValue:{value:"1",computed:!1},required:!1},page:{defaultValue:{value:"1",computed:!1},required:!1},pageSize:{defaultValue:{value:"10",computed:!1},required:!1}},composes:["PropsWithChildren","Partial","HTMLAttributes"]};w.__docgenInfo={description:"",methods:[],displayName:"PaginationPrev"};k.__docgenInfo={description:"",methods:[],displayName:"PaginationTotal"};I.__docgenInfo={description:"",methods:[],displayName:"PaginationSizeSetter",props:{menuPlacement:{required:!1,tsType:{name:"MenuPlacement"},description:"",defaultValue:{value:'"top"',computed:!1}}}};M.__docgenInfo={description:"",methods:[],displayName:"PaginationNext"};export{_ as P,I as a,k as b,w as c,M as d};
