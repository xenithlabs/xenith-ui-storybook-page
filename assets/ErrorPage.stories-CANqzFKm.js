import{j as r}from"./jsx-runtime-DR9Q75dM.js";import{I as P}from"./Icon-Bs9G1Rwk.js";import{F as x}from"./error-BY9kHruH.js";import{H as h}from"./Heading-BbwmavmP.js";import{T as f}from"./Text-BYjIVLkz.js";import{B as j}from"./Button-X8fnom3X.js";import"./index-DRjF_FHU.js";import"./cn-C-5SdYIA.js";import"./index-Bb4qSo10.js";import"./index-HZDBD2ik.js";import"./styles-BNEhTmYy.js";import"./spinner-fxOeMmbK.js";import"./chevron-down-DqISSPB-.js";const a=({children:e})=>r.jsx(h,{variant:"titleSm",className:"text-text-weak",children:e}),s=({children:e})=>r.jsx(f,{variant:"medium",className:"text-text-weak",children:e}),c=({children:e})=>r.jsx("div",{className:"mb-4 flex flex-col items-center gap-2",children:e}),i=()=>r.jsx(P,{icon:r.jsx(x,{})}),d=j;d.displayName="ErrorPageButton";const n=({children:e})=>r.jsx("div",{className:"flex flex-col items-center justify-center",children:e});a.__docgenInfo={description:"",methods:[],displayName:"ErrorPageTitle"};s.__docgenInfo={description:"",methods:[],displayName:"ErrorPageSubtitle"};c.__docgenInfo={description:"",methods:[],displayName:"ErrorPageContent"};i.__docgenInfo={description:"",methods:[],displayName:"ErrorPageIcon"};n.__docgenInfo={description:"",methods:[],displayName:"ErrorPage"};const F={title:"Xenith UI/Components/ErrorPage",component:n,tags:["autodocs"],args:{children:"label"}},o={render:()=>r.jsxs(n,{children:[r.jsx(i,{}),r.jsxs(c,{children:[r.jsx(a,{children:"Oops! Something went wrong."}),r.jsx(s,{children:"An unexpected error occurred. Please refresh the page or contact our support."})]}),r.jsx(d,{children:"Refresh the page"})]})},t={render:()=>r.jsxs(n,{children:[r.jsx(i,{}),r.jsxs(c,{children:[r.jsx(a,{children:"404"}),r.jsx(s,{children:"Oops! This page could not be found."})]}),r.jsx(d,{children:"Back to Home"})]})};var m,g,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <ErrorPage>
      <ErrorPageIcon />
      <ErrorPageContent>
        <ErrorPageTitle>Oops! Something went wrong.</ErrorPageTitle>
        <ErrorPageSubtitle>
          An unexpected error occurred. Please refresh the page or contact our
          support.
        </ErrorPageSubtitle>
      </ErrorPageContent>
      <ErrorPageButton>Refresh the page</ErrorPageButton>
    </ErrorPage>
}`,...(p=(g=o.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var l,u,E;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <ErrorPage>
      <ErrorPageIcon />
      <ErrorPageContent>
        <ErrorPageTitle>404</ErrorPageTitle>
        <ErrorPageSubtitle>
          Oops! This page could not be found.
        </ErrorPageSubtitle>
      </ErrorPageContent>
      <ErrorPageButton>Back to Home</ErrorPageButton>
    </ErrorPage>
}`,...(E=(u=t.parameters)==null?void 0:u.docs)==null?void 0:E.source}}};const H=["Default","NotFound"];export{o as Default,t as NotFound,H as __namedExportsOrder,F as default};
