import{j as e}from"./jsx-runtime-BhBAkL08.js";import{c as l}from"./cn-C-5SdYIA.js";import{a as b}from"./index-caxmlYbZ.js";import{S as j}from"./index-D09aQd82.js";import{c as B}from"./index-Bb4qSo10.js";import{t as N}from"./styles-BNEhTmYy.js";import{F as S,a as F}from"./spinner-ByTSIKau.js";import{F as R}from"./chevron-down-mN_p2z2a.js";import{I,a as z}from"./Icon-7BdkfswG.js";const E=B(N({variant:"medium",class:"inline-flex items-center justify-center whitespace-nowrap rounded-md gap-2 font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:bg-bg-weaker disabled:text-text-weaker"}),{variants:{buttonState:{active:"",disabled:""},variant:{solid:"bg-accent text-white hover:bg-accent-hover focus-visible:ring-accent",outline:"bg-transparent disabled:bg-transparent disabled:text-text-weaker border disabled:border-border-default shadow-input",nude:"bg-transparent border-0",link:"bg-transparent border-0 hover:bg-transparent hover:underline p-0",unstyled:""},theme:{primary:"bg-accent text-white hover:bg-accent-hover focus-visible:ring-accent",destructive:"bg-critical hover:bg-critical-hover ",neutral:"bg-transparent hover:bg-bg-weak text-text-default"},size:{md:"h-10",sm:"h-8",xs:"h-5 max-w-5"},buttonType:{iconButton:"px-2",button:" px-4 "}},compoundVariants:[{variant:"outline",theme:"primary",class:"bg-transparent border-border-accent text-accent hover:bg-accent-weak"},{variant:"outline",theme:"destructive",class:"bg-transparent border-critical text-critical hover:bg-critical-weak"},{variant:"nude",theme:"primary",class:"bg-transparent border-0 text-accent hover:bg-accent-weak"},{variant:"nude",theme:"destructive",class:"bg-transparent border-0 text-critical hover:bg-critical-weak"},{variant:"link",theme:"primary",class:"bg-transparent text-accent hover:bg-transparent hover:underline"},{variant:"link",theme:"neutral",class:"bg-transparent text-text-default hover:bg-transparent hover:underline"},{variant:"link",theme:"destructive",class:"bg-transparent text-critical hover:bg-transparent hover:underline"},{variant:"link",size:["sm","md","xs"],class:"h-fit px-0"},{size:"sm",class:"px-0"},{variant:"nude",buttonState:"disabled",class:"disabled:bg-transparent disabled:text-text-weaker"}],defaultVariants:{variant:"solid",theme:"primary",size:"md",buttonType:"button",buttonState:"active"}}),s=b.forwardRef(({children:t,className:a,icon:i,iconPosition:u,size:m,variant:o,theme:x,asChild:v,iconOnly:c,loading:r,buttonType:g=c?"iconButton":"button",innerComp:d,innerClassName:h,...n},f)=>{const w=v?j:"button",y=d||"span",k=o==="unstyled"?a:l(E({variant:o,theme:x,size:m,buttonType:g,className:a,buttonState:n.disabled?"disabled":"active"}),{"flex-row-reverse":u==="right"});return e.jsxs(w,{...n,ref:f,className:k,disabled:r||n.disabled,children:[r&&e.jsx(e.Fragment,{children:e.jsx(I,{spin:!0,size:"md",icon:e.jsx(S,{}),className:"animate-spin"})}),!r&&e.jsxs(e.Fragment,{children:[!!i&&e.jsx("span",{className:"inline-flex",children:i}),!c&&e.jsx(y,{className:l("inline-flex",h),children:t})]})]})});s.displayName="Button";const p=b.forwardRef((t,a)=>e.jsx(s,{...t,ref:a,icon:e.jsx(z,{"aria-expanded":t["aria-expanded"],icon:e.jsx(F,{}),closed:e.jsx(R,{})})}));p.displayName="ExpandableButton";s.__docgenInfo={description:"",methods:[],displayName:"Button",props:{buttonType:{defaultValue:{value:'iconOnly ? "iconButton" : "button"',computed:!1},required:!1}}};p.__docgenInfo={description:"",methods:[],displayName:"ExpandableButton"};export{s as B,E as b};