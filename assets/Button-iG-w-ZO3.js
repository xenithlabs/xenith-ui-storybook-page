import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{c as l}from"./cn-C-5SdYIA.js";import{R as b}from"./index-DRjF_FHU.js";import{S as j}from"./index-HZDBD2ik.js";import{c as B}from"./index-Bb4qSo10.js";import{t as N}from"./styles-BNEhTmYy.js";import{F as R,a as S}from"./spinner-fxOeMmbK.js";import{F}from"./chevron-down-DqISSPB-.js";import{I,a as E}from"./Icon-Bs9G1Rwk.js";const z=B(N({variant:"medium",class:"inline-flex items-center justify-center whitespace-nowrap rounded-md gap-2 font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:bg-bg-weaker disabled:text-text-weaker"}),{variants:{buttonState:{active:"",disabled:""},variant:{solid:"bg-accent text-white hover:bg-accent-hover focus-visible:ring-accent",outline:"bg-transparent disabled:bg-transparent disabled:text-text-weaker border disabled:border-border-default shadow-input",nude:"bg-transparent border-0",link:"bg-transparent border-0 hover:bg-transparent hover:underline p-0",unstyled:""},theme:{primary:"bg-accent text-white hover:bg-accent-hover focus-visible:ring-accent",success:"bg-bg-success text-white hover:bg-bg-success-hover focus-visible: ring-bg-success",destructive:"bg-critical hover:bg-critical-hover ",neutral:"bg-transparent hover:bg-bg-weak text-text-default"},size:{md:"h-10",sm:"h-8",xs:"h-5 max-w-5"},buttonType:{iconButton:"px-2",button:" px-4 "}},compoundVariants:[{variant:"outline",theme:"primary",class:"bg-transparent border-border-accent text-accent hover:bg-accent-weak"},{variant:"outline",theme:"destructive",class:"bg-transparent border-critical text-critical hover:bg-critical-weak"},{variant:"nude",theme:"primary",class:"bg-transparent border-0 text-accent hover:bg-accent-weak"},{variant:"nude",theme:"destructive",class:"bg-transparent border-0 text-critical hover:bg-critical-weak"},{variant:"nude",theme:"success",class:"bg-transparent border-0 text-text-success hover:bg-bg-success-weak"},{variant:"link",theme:"primary",class:"bg-transparent text-accent hover:bg-transparent hover:underline"},{variant:"link",theme:"neutral",class:"bg-transparent text-text-default hover:bg-transparent hover:underline"},{variant:"link",theme:"destructive",class:"bg-transparent text-critical hover:bg-transparent hover:underline"},{variant:"link",size:["sm","md","xs"],class:"h-fit px-0"},{variant:"nude",buttonState:"disabled",class:"disabled:bg-transparent disabled:text-text-weaker"}],defaultVariants:{variant:"solid",theme:"primary",size:"md",buttonType:"button",buttonState:"active"}}),s=b.forwardRef(({children:t,className:a,icon:i,iconPosition:p,size:m,variant:o,theme:v,asChild:g,iconOnly:c,loading:r,buttonType:x=c?"iconButton":"button",innerComp:d,innerClassName:h,...n},f)=>{const w=g?j:"button",y=d||"span",k=o==="unstyled"?a:l(z({variant:o,theme:v,size:m,buttonType:x,className:a,buttonState:n.disabled?"disabled":"active"}),{"flex-row-reverse":p==="right"});return e.jsxs(w,{...n,ref:f,className:k,disabled:r||n.disabled,children:[r&&e.jsx(e.Fragment,{children:e.jsx(I,{spin:!0,size:"md",icon:e.jsx(R,{}),className:"animate-spin"})}),!r&&e.jsxs(e.Fragment,{children:[!!i&&e.jsx("span",{className:"inline-flex",children:i}),!c&&e.jsx(y,{className:l("inline-flex",h),children:t})]})]})});s.displayName="Button";const u=b.forwardRef((t,a)=>e.jsx(s,{...t,ref:a,icon:e.jsx(E,{"aria-expanded":t["aria-expanded"],icon:e.jsx(S,{}),closed:e.jsx(F,{})})}));u.displayName="ExpandableButton";s.__docgenInfo={description:"",methods:[],displayName:"Button",props:{buttonType:{defaultValue:{value:'iconOnly ? "iconButton" : "button"',computed:!1},required:!1}}};u.__docgenInfo={description:"",methods:[],displayName:"ExpandableButton"};export{s as B,z as b};
