import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as S,R as s}from"./index-DRjF_FHU.js";import{c as i}from"./cn-C-5SdYIA.js";import{c as M}from"./index-Bb4qSo10.js";import{T as Y,a as X,d as z,c as G}from"./Tooltip-ByR2nsEC.js";import{L as H}from"./Label-DUDV6PD_.js";import{T as J}from"./Text-BYjIVLkz.js";import{I as v}from"./Icon-Bs9G1Rwk.js";import{F as w}from"./trash-9lS3Swao.js";import{B as F}from"./Button-X8fnom3X.js";import"./index-DuXoWBk8.js";import"./index-CxRLcT2J.js";import"./index-DdILnG7L.js";import"./index-qtGI3euC.js";import"./index-CxZrjbHI.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-KY2xTor3.js";import"./index-BhXpUKZt.js";import"./index-BXQDTo2X.js";import"./index-_lyfCmBZ.js";import"./index-HZDBD2ik.js";import"./styles-BNEhTmYy.js";import"./spinner-fxOeMmbK.js";import"./chevron-down-DqISSPB-.js";const K=M(i("flex flex-col p-4 gap-4 border rounded-radius-container"),{variants:{theme:{neutral:"border-border-default bg-bg-weaker",accent:"border-border-accent bg-accent-weak",critical:"border-border-critical bg-bg-weaker"}},defaultVariants:{theme:"neutral"}}),E=S.createContext({}),d=s.forwardRef(({className:t,readonly:n=!0,theme:r,children:o,error:c,...y},I)=>{const[l,N]=s.useState(!1);return e.jsx(E.Provider,{value:{readonly:n,dragOver:l,setDragOver:N},children:e.jsx("div",{ref:I,className:K({className:t,theme:l?"accent":c?"critical":r}),...y,children:o})})});d.displayName="FileUploader";const U=s.forwardRef(({className:t,subTitle:n="You can upload a maximum of 3 files, 5MB each.",onFilesAdded:r,name:o,multiple:c=!0,...y},I)=>{const{setDragOver:l}=S.useContext(E),N=a=>{a.preventDefault(),a.stopPropagation(),l(!0)},$=a=>{a.preventDefault(),a.stopPropagation(),l(!1)},V=a=>{a.preventDefault(),a.stopPropagation(),l(!0)},W=a=>{if(a.preventDefault(),a.stopPropagation(),l(!1),a.dataTransfer.files&&a.dataTransfer.files.length>0){const b=Array.from(a.dataTransfer.files);r(b),a.dataTransfer.clearData()}},q=a=>{if(a.target.files&&a.target.files.length>0){const b=Array.from(a.target.files);r(b),a.target.value="",a.target.type="",a.target.type="file"}};return e.jsxs("div",{onDragEnter:N,onDragLeave:$,onDragOver:V,onDrop:W,className:i("flex flex-col items-center gap-2 px-[50.5px] py-4 ",t),children:[e.jsx("input",{...y,ref:I,id:`FileUploaderInput-${o}`,name:o,multiple:c,type:"file",onChange:q,className:"hidden"}),e.jsxs("div",{className:"text-xs font-medium text-text-default",children:["Drag your file",c?"(s)":""," or"," ",e.jsx(H,{htmlFor:`FileUploaderInput-${o}`,className:"cursor-pointer text-text-accent",children:"browse"})]}),e.jsx("div",{className:"text-xs text-text-weaker",children:n})]})});U.displayName="FileUploaderInput";const m=s.forwardRef(({className:t,children:n,...r},o)=>e.jsx("div",{ref:o,className:i("flex flex-col gap-2",t),...r,children:n}));m.displayName="AttachmentList";const p=s.forwardRef(({className:t,children:n,...r},o)=>e.jsx("div",{ref:o,className:i("flex gap-2 items-center bg-bg-weak p-2 rounded-radius-container",t),...r,children:n}));p.displayName="AttachmentItem";const h=s.forwardRef(({className:t,...n},r)=>e.jsx("img",{ref:r,alt:"Thumbnail",className:i("object-cover w-6 h-6 rounded-radius-container shrink-0",t),...n}));h.displayName="AttachmentImage";const f=s.forwardRef(({className:t,children:n,...r},o)=>e.jsx("div",{ref:o,className:i("flex-1 overflow-hidden flex justify-between",t),...r,children:n}));f.displayName="AttachmentInner";const u=s.forwardRef(({className:t,children:n,tooltip:r,...o},c)=>e.jsx("div",{ref:c,className:i("flex-1 overflow-hidden",t),...o,children:e.jsx(Y,{children:e.jsxs(X,{children:[e.jsx(z,{asChild:!0,disabled:!r,children:e.jsx("div",{className:"w-full max-w-full overflow-hidden font-semibold text-text-default overflow-ellipsis whitespace-nowrap",children:e.jsx(J,{children:n})})}),e.jsx(G,{side:"top",align:"start",children:r})]})})}));u.displayName="AttachmentName";const x=s.forwardRef(({className:t,children:n,...r},o)=>e.jsx("div",{ref:o,className:i("flex items-center gap-2 shrink-0",t),...r,children:n}));x.displayName="AttachmentActions";d.__docgenInfo={description:"",methods:[],displayName:"FileUploader",props:{readonly:{defaultValue:{value:"true",computed:!1},required:!1}}};U.__docgenInfo={description:"",methods:[],displayName:"FileUploaderInput",props:{subTitle:{defaultValue:{value:'"You can upload a maximum of 3 files, 5MB each."',computed:!1},required:!1},multiple:{defaultValue:{value:"true",computed:!1},required:!1}}};m.__docgenInfo={description:"",methods:[],displayName:"AttachmentList"};p.__docgenInfo={description:"",methods:[],displayName:"AttachmentItem"};h.__docgenInfo={description:"",methods:[],displayName:"AttachmentImage"};f.__docgenInfo={description:"",methods:[],displayName:"AttachmentInner"};u.__docgenInfo={description:"",methods:[],displayName:"AttachmentName"};x.__docgenInfo={description:"",methods:[],displayName:"AttachmentActions"};const _=[{id:"1",thumbnail:"https://via.placeholder.com/150",name:"image1.png"},{id:"2",thumbnail:"https://via.placeholder.com/150",name:"image2_overninethousandtextlettersincludedhere.png"}],Ne={title:"Xenith UI/Components/File Uploader",component:d,tags:["autodocs"],argTypes:{readonly:{type:"boolean",control:"boolean"},error:{type:"boolean",control:"boolean"}},render:t=>e.jsx(d,{...t,children:e.jsx(m,{children:_.map(n=>e.jsxs(p,{children:[e.jsx(h,{src:n.thumbnail}),e.jsxs(f,{children:[e.jsx(u,{tooltip:n.name,children:n.name}),e.jsx(x,{children:e.jsx(F,{variant:"unstyled",iconOnly:!0,icon:e.jsx(v,{icon:e.jsx(w,{})})})})]})]},n.id))})})},g={},A={render:()=>e.jsxs(d,{readonly:!1,children:[e.jsx(U,{name:"halo",onFilesAdded:t=>console.log("files added",t)}),e.jsx(m,{children:_.map(t=>e.jsxs(p,{children:[e.jsx(h,{src:t.thumbnail}),e.jsxs(f,{children:[e.jsx(u,{tooltip:t.name,children:t.name}),e.jsx(x,{children:e.jsx(F,{variant:"unstyled",iconOnly:!0,icon:e.jsx(v,{icon:e.jsx(w,{})})})})]})]},t.id))})]})},j={render:()=>e.jsx(d,{children:e.jsx(m,{children:_.map(t=>e.jsxs(p,{children:[e.jsx(h,{src:t.thumbnail}),e.jsxs(f,{children:[e.jsx(u,{tooltip:t.name,children:t.name}),e.jsx(x,{children:e.jsx(F,{variant:"unstyled",iconOnly:!0,icon:e.jsx(v,{icon:e.jsx(w,{})})})})]})]},t.id))})})};var D,T,R;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:"{}",...(R=(T=g.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var L,O,k;A.parameters={...A.parameters,docs:{...(L=A.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <FileUploader readonly={false}>
      <FileUploaderInput name="halo" onFilesAdded={files => console.log("files added", files)} />
      <AttachmentList>
        {attachments.map(attachment => <AttachmentItem key={attachment.id}>
            <AttachmentImage src={attachment.thumbnail} />
            <AttachmentInner>
              <AttachmentName tooltip={attachment.name}>
                {attachment.name}
              </AttachmentName>
              <AttachmentActions>
                <Button variant="unstyled" iconOnly icon={<Icon icon={<TrashIcon />} />} />
              </AttachmentActions>
            </AttachmentInner>
          </AttachmentItem>)}
      </AttachmentList>
    </FileUploader>
}`,...(k=(O=A.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var C,B,P;j.parameters={...j.parameters,docs:{...(C=j.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <FileUploader>
      <AttachmentList>
        {attachments.map(attachment => <AttachmentItem key={attachment.id}>
            <AttachmentImage src={attachment.thumbnail} />
            <AttachmentInner>
              <AttachmentName tooltip={attachment.name}>
                {attachment.name}
              </AttachmentName>
              <AttachmentActions>
                <Button variant="unstyled" iconOnly icon={<Icon icon={<TrashIcon />} />} />
              </AttachmentActions>
            </AttachmentInner>
          </AttachmentItem>)}
      </AttachmentList>
    </FileUploader>
}`,...(P=(B=j.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};const be=["Default","WithUploader","WithAttachmentAction"];export{g as Default,j as WithAttachmentAction,A as WithUploader,be as __namedExportsOrder,Ne as default};
