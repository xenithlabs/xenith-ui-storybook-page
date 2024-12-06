import{j as e}from"./jsx-runtime-BhBAkL08.js";import{c as f}from"./cn-C-5SdYIA.js";import{a as c}from"./index-caxmlYbZ.js";import{S as w}from"./index-D09aQd82.js";import{c as y}from"./index-Bb4qSo10.js";import{t as k}from"./styles-BNEhTmYy.js";import{I as j,a as B}from"./Icon-Bh8OjlaW.js";import{F as N,a as S}from"./spinner-C2p9_Bgj.js";import{F}from"./chevron-down-mN_p2z2a.js";const R=y(k({variant:"medium",class:"inline-flex items-center justify-center whitespace-nowrap rounded-md gap-2 font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:bg-bg-weaker disabled:text-text-weaker"}),{variants:{buttonState:{active:"",disabled:""},variant:{solid:"bg-accent text-white hover:bg-accent-hover focus-visible:ring-accent",outline:"bg-transparent disabled:bg-transparent disabled:text-text-weaker border disabled:border-border-default shadow-input",nude:"bg-transparent border-0",link:"bg-transparent border-0 hover:bg-transparent hover:underline p-0",unstyled:""},theme:{primary:"bg-accent text-white hover:bg-accent-hover focus-visible:ring-accent",destructive:"bg-critical hover:bg-critical-hover ",neutral:"bg-transparent hover:bg-bg-weak text-text-default"},size:{md:"h-10",sm:"h-8",xs:"h-5 max-w-5"},buttonType:{iconButton:"px-2",button:" px-4 "}},compoundVariants:[{variant:"outline",theme:"primary",class:"bg-transparent border-border-accent text-accent hover:bg-accent-weak"},{variant:"outline",theme:"destructive",class:"bg-transparent border-critical text-critical hover:bg-critical-weak"},{variant:"nude",theme:"primary",class:"bg-transparent border-0 text-accent hover:bg-accent-weak"},{variant:"nude",theme:"destructive",class:"bg-transparent border-0 text-critical hover:bg-critical-weak"},{variant:"link",theme:"primary",class:"bg-transparent text-accent hover:bg-transparent hover:underline"},{variant:"link",theme:"neutral",class:"bg-transparent text-text-default hover:bg-transparent hover:underline"},{variant:"link",theme:"destructive",class:"bg-transparent text-critical hover:bg-transparent hover:underline"},{variant:"link",size:["sm","md","xs"],class:"h-fit px-0"},{size:"sm",class:"px-0"},{variant:"nude",buttonState:"disabled",class:"disabled:bg-transparent disabled:text-text-weaker"}],defaultVariants:{variant:"solid",theme:"primary",size:"md",buttonType:"button",buttonState:"active"}}),s=c.forwardRef(({children:t,className:a,icon:i,iconPosition:b,size:p,variant:o,theme:u,asChild:m,iconOnly:d,loading:r,buttonType:x=d?"iconButton":"button",...n},v)=>{const g=m?w:"button",h=o==="unstyled"?a:f(R({variant:o,theme:u,size:p,buttonType:x,className:a,buttonState:n.disabled?"disabled":"active"}),{"flex-row-reverse":b==="right"});return e.jsxs(g,{...n,ref:v,className:h,disabled:r||n.disabled,children:[r&&e.jsx(e.Fragment,{children:e.jsx(j,{spin:!0,size:"md",icon:e.jsx(N,{}),className:"animate-spin"})}),!r&&e.jsxs(e.Fragment,{children:[!!i&&e.jsx("span",{className:"inline-flex",children:i}),!d&&e.jsx("span",{className:"inline-flex",children:t})]})]})});s.displayName="Button";const l=c.forwardRef((t,a)=>e.jsx(s,{...t,ref:a,icon:e.jsx(B,{"aria-expanded":t["aria-expanded"],icon:e.jsx(S,{}),closed:e.jsx(F,{})})}));l.displayName="ExpandableButton";s.__docgenInfo={description:"",methods:[],displayName:"Button",props:{buttonType:{defaultValue:{value:'iconOnly ? "iconButton" : "button"',computed:!1},required:!1}}};l.__docgenInfo={description:"",methods:[],displayName:"ExpandableButton"};export{s as B,R as b};
