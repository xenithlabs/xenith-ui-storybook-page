import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{I as o}from"./Icon-BVoV0EQW.js";import{B as r}from"./Button-vat5KHQw.js";import{F as Y}from"./check-4u3gJW-P.js";import{F as Z}from"./copy-BLYJhKYu.js";import{r as B}from"./index-l2PZgWEW.js";import{a as ee,T as te,b as re,c as oe}from"./Tooltip-iU5alxBT.js";import{F as X}from"./edit-BuOM16EU.js";import{F as J}from"./close-Bwe4q-Z3.js";import{C as ne}from"./Card-B2YQq99h.js";import{T as se}from"./Text-UY6J7iD0.js";import{h as ae}from"./Heading-B_Jl69qA.js";import"./cn-C-5SdYIA.js";import"./index-Bb4qSo10.js";import"./index-Cm6j2cFO.js";import"./styles-BRwXF_yu.js";import"./styles-BNEhTmYy.js";import"./spinner-DNNsglCv.js";import"./index-BgmTQNcy.js";import"./index-CaNG7YX3.js";import"./index-C76mvIvD.js";import"./index-DPMSfDr2.js";import"./index-CfbDgQ9C.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-BmdjtsoG.js";import"./index-DZOIkxWA.js";import"./index-vMKBQQL5.js";const K=t=>{const[g,f]=B.useState("copy"),[Q,x]=B.useState(!1);return e.jsx(ee,{children:e.jsxs(te,{open:Q,onOpenChange:x,children:[e.jsx(re,{asChild:!0,children:e.jsx(r,{...t,variant:"unstyled",iconOnly:!0,onClick:()=>{navigator.clipboard.writeText(t.text),f("Copied"),x(!0),setTimeout(()=>{x(!1),setTimeout(()=>{f("copy")},150)},1e3)},icon:e.jsx(o,{icon:e.jsx(Z,{})})})}),e.jsx(oe,{children:e.jsxs("div",{className:"flex items-center gap-1",children:[g,g==="Copied"&&e.jsx(o,{icon:e.jsx(Y,{})})]})})]})})};K.__docgenInfo={description:"",methods:[],displayName:"CopyButton",props:{icon:{required:!1,tsType:{name:"ReactNode"},description:""},iconOnly:{required:!1,tsType:{name:"boolean"},description:""},iconPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:""},asChild:{required:!1,tsType:{name:"boolean"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},text:{required:!0,tsType:{name:"string"},description:""}},composes:["ButtonHTMLAttributes","VariantProps"]};const ze={title:"Xenith UI/Components/Button",component:r,tags:["autodocs"],args:{},argTypes:{variant:{control:"select",options:["solid","outline","nude","link"]},icon:{},children:{},disabled:{control:"boolean"},iconPosition:{control:"select",options:["left","right"]},iconOnly:{control:"boolean"},size:{control:"select",options:["sm","md","xs"]},theme:{control:"select",options:["neutral","destructive","primary"]}},render:t=>e.jsx(r,{...t,children:"Button"})},n={render:t=>e.jsx(r,{...t,icon:e.jsx(o,{icon:e.jsx(J,{}),size:"md"}),children:"Button"})},s={render:t=>e.jsx(r,{...t,variant:"link",children:"Reset All"})},a={render:t=>e.jsx(r,{...t,icon:e.jsx(o,{icon:e.jsx(X,{}),size:"lg"}),iconOnly:!0})},i={render:t=>e.jsx(r,{...t,loading:!0,children:"Button"})},c={render:()=>e.jsxs("div",{className:"bg-bg-weaker gap-1 w-fit flex items-center rounded-md pl-2 py-1 pr-1",children:[e.jsx(se,{variant:"badge",children:"Label"}),e.jsx(r,{size:"xs",variant:"nude",theme:"neutral",iconOnly:!0,icon:e.jsx(J,{})})]})},d={render:()=>e.jsx(r,{variant:"outline",children:"Button"})},l={render:()=>e.jsx(r,{variant:"unstyled",icon:e.jsx(o,{icon:e.jsx(X,{})})})},p={render:()=>e.jsxs(ne,{className:ae({variant:"titleMd",className:"flex items-center justify-between w-[200px]"}),children:[e.jsx("span",{children:"Heading"})," ",e.jsx(r,{variant:"link",children:"Link"})]})},m={render:()=>e.jsx(K,{text:"this text is copied from CopyButton"})},u={};var h,y,j;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <Button {...args} icon={<Icon icon={<CloseIcon />} size="md" />}>
      Button
    </Button>
}`,...(j=(y=n.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var v,T,b;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <Button {...args} variant="link">
      Reset All
    </Button>
}`,...(b=(T=s.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var C,I,S;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <Button {...args} icon={<Icon icon={<Edit />} size="lg" />} iconOnly />
}`,...(S=(I=a.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var k,w,L;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <Button {...args} loading>
      Button
    </Button>
}`,...(L=(w=i.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var O,N,F;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div className="bg-bg-weaker gap-1 w-fit flex items-center rounded-md pl-2 py-1 pr-1">
      <Text variant="badge">Label</Text>
      <Button size="xs" variant="nude" theme="neutral" iconOnly icon={<CloseIcon />} />
    </div>
}`,...(F=(N=c.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var R,z,q;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <Button variant="outline">Button</Button>
}`,...(q=(z=d.parameters)==null?void 0:z.docs)==null?void 0:q.source}}};var A,E,H;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <Button variant="unstyled" icon={<Icon icon={<EditIcon />} />} />
}`,...(H=(E=l.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var P,W,_;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Card className={headingStyles({
    variant: "titleMd",
    className: "flex items-center justify-between w-[200px]"
  })}>
      <span>Heading</span> <Button variant="link">Link</Button>
    </Card>
}`,...(_=(W=p.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var M,U,$;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <CopyButton text="this text is copied from CopyButton" />
}`,...($=(U=m.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var D,G,V;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:"{}",...(V=(G=u.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};const qe=["WithIcon","LinkButton","IconOnly","Loading","WithLabel","ButtonAccent","GhostButton","ButtonLinkInsideHeadingStyle","UsingCopyButton","Default"];export{d as ButtonAccent,p as ButtonLinkInsideHeadingStyle,u as Default,l as GhostButton,a as IconOnly,s as LinkButton,i as Loading,m as UsingCopyButton,n as WithIcon,c as WithLabel,qe as __namedExportsOrder,ze as default};