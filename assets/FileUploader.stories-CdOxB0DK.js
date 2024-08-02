import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{R as l}from"./index-l2PZgWEW.js";import{c as m}from"./cn-C-5SdYIA.js";import{c as w}from"./index-Bb4qSo10.js";import{a as y,T as N,d as A,c as I}from"./Tooltip-r6aCk8b0.js";import{I as _}from"./Icon-ev__gahW.js";import{F}from"./trash-Dzdi0b-N.js";import{B as U}from"./Button-DoE0C3eO.js";import"./index-BgmTQNcy.js";import"./index-CaNG7YX3.js";import"./index-C76mvIvD.js";import"./index-DPMSfDr2.js";import"./index-CIGe9IjL.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-BmdjtsoG.js";import"./index-DZOIkxWA.js";import"./index-vMKBQQL5.js";import"./index-Cm6j2cFO.js";import"./styles-BRwXF_yu.js";import"./styles-BNEhTmYy.js";import"./spinner-D3uK0xOl.js";import"./chevron-down-jNWesQvo.js";const R=w(m("flex flex-col p-4 gap-4 border rounded-radius-container"),{variants:{theme:{neutral:"border-border-default bg-bg-weaker",accent:"border-border-accent bg-accent-weak"}},defaultVariants:{theme:"neutral"}}),o=l.forwardRef(({className:t,readonly:a=!0,theme:r,children:d,...g},b)=>e.jsxs("div",{ref:b,className:R({className:t,theme:r}),...g,children:[!a&&null,d]}));o.displayName="FileUploader";const n=l.forwardRef(({className:t,children:a,...r})=>e.jsx("div",{className:m("flex flex-col gap-2",t),...r,children:a}));n.displayName="AttachmentList";const c=l.forwardRef(({className:t,attachment:a,actions:r,...d})=>e.jsxs("div",{className:m("flex gap-2 items-center bg-bg-weak p-2 rounded-radius-container",t),...d,children:[e.jsx("img",{src:a.thumbnail,alt:"Thumbnail",className:"object-cover w-6 h-6 rounded-radius-container shrink-0"}),e.jsxs("div",{className:"flex justify-between flex-1 overflow-hidden",children:[e.jsx("div",{className:"flex-1 overflow-hidden",children:e.jsx(y,{children:e.jsxs(N,{children:[e.jsx(A,{asChild:!0,children:e.jsx("div",{className:"w-full max-w-full overflow-hidden font-semibold text-text-default overflow-ellipsis whitespace-nowrap",children:a.name})}),e.jsx(I,{side:"top",align:"start",children:a.name})]})})}),e.jsx("div",{className:"shrink-0",children:r})]})]}));c.displayName="AttachmentItem";o.__docgenInfo={description:"",methods:[],displayName:"FileUploader",props:{readonly:{defaultValue:{value:"true",computed:!1},required:!1}}};n.__docgenInfo={description:"",methods:[],displayName:"AttachmentList"};c.__docgenInfo={description:"",methods:[],displayName:"AttachmentItem"};const v=[{id:"1",thumbnail:"https://via.placeholder.com/150",name:"image1.png"},{id:"2",thumbnail:"https://via.placeholder.com/150",name:"image2_overninethousandtextlettersincludedhere.png"}],Y={title:"Xenith UI/Components/File Uploader",component:o,tags:["autodocs"],render:()=>e.jsx(o,{children:e.jsx(n,{children:v.map(t=>e.jsx(c,{attachment:t},t.id))})})},s={},i={render:()=>e.jsx(o,{children:e.jsx(n,{children:v.map(t=>e.jsx(c,{attachment:t,actions:e.jsx(U,{variant:"unstyled",iconOnly:!0,icon:e.jsx(_,{icon:e.jsx(F,{})})})},t.id))})})};var p,h,f;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var u,x,j;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <FileUploader>
      <AttachmentList>
        {attachments.map(attachment => <AttachmentItem key={attachment.id} attachment={attachment} actions={<Button variant="unstyled" iconOnly icon={<Icon icon={<TrashIcon />} />} />} />)}
      </AttachmentList>
    </FileUploader>
}`,...(j=(x=i.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};const Z=["Default","WithAttachmentAction"];export{s as Default,i as WithAttachmentAction,Z as __namedExportsOrder,Y as default};