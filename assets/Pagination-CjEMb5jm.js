import{j as a}from"./jsx-runtime-DWbWqHZ-.js";import{r as o}from"./index-l2PZgWEW.js";import{I as u}from"./Icon-1nxh1SU0.js";import{F as x}from"./chevron-left-pR7E87oX.js";import{F as h}from"./chevron-right-Dd--vsx8.js";import{B as m}from"./Button-LQql__sa.js";import{S as P}from"./useClickOutside-hA2Zo3vC.js";const r=o.createContext({page:1,pageSize:10,total:1,onPageChange:()=>{},onPageSizeChange:()=>{}}),v=({children:e,total:t=1,page:n=1,pageSize:i=10,onPageChange:s,onPageSizeChange:c})=>{const[f,d]=o.useState(n),[p,g]=o.useState(i);return o.useEffect(()=>{d(n)},[n]),o.useEffect(()=>{g(i)},[i]),a.jsx(r.Provider,{value:{page:f,pageSize:p,total:t,onPageChange:l=>{d(l),s&&s(l)},onPageSizeChange:l=>{g(l),c&&c(l)}},children:e})},C=()=>{const{page:e,onPageChange:t}=o.useContext(r);return a.jsx(m,{variant:"link",iconOnly:!0,theme:"neutral",disabled:e===1,icon:a.jsx(u,{icon:a.jsx(x,{})}),onClick:()=>t(e-1)})},S=()=>{const{total:e,pageSize:t,page:n}=o.useContext(r),i=(n-1)*t+1,s=Math.min(i+t-1,e);return a.jsxs("div",{children:[i,"-",s," of ",e]})},j=()=>{const{onPageSizeChange:e,onPageChange:t}=o.useContext(r);return a.jsxs("div",{className:" flex  gap-2 items-center text-text-weak",children:[a.jsx("div",{children:"Rows per page:"}),a.jsx("div",{className:"w-20",children:a.jsx(P,{classNames:{control:()=>"border-0 shadow-none"},isOptionSearchable:!1,defaultValue:{label:"10",value:10},options:[{label:"10",value:10},{label:"25",value:25},{label:"50",value:50},{label:"100",value:100}],onChange:n=>{t(1),e(n)}})})]})},b=()=>{const{page:e,onPageChange:t,total:n,pageSize:i}=o.useContext(r),s=Math.ceil(n/i);return a.jsx(m,{variant:"link",theme:"neutral",iconOnly:!0,disabled:e===s,icon:a.jsx(u,{icon:a.jsx(h,{})}),onClick:()=>t(e+1)})};v.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{total:{defaultValue:{value:"1",computed:!1},required:!1},page:{defaultValue:{value:"1",computed:!1},required:!1},pageSize:{defaultValue:{value:"10",computed:!1},required:!1}},composes:["PropsWithChildren","Partial"]};C.__docgenInfo={description:"",methods:[],displayName:"PaginationPrev"};S.__docgenInfo={description:"",methods:[],displayName:"PaginationTotal"};j.__docgenInfo={description:"",methods:[],displayName:"PageinationSizeSetter"};b.__docgenInfo={description:"",methods:[],displayName:"PagniationNext"};export{v as P,j as a,S as b,C as c,b as d};
