import{j as o}from"./jsx-runtime-DWbWqHZ-.js";import{r as a}from"./index-l2PZgWEW.js";import{c as C}from"./cn-C-5SdYIA.js";import{I as W}from"./useClickOutside-DQJK4-Xa.js";import{h as K}from"./Heading-B_Jl69qA.js";import"./styles-BNEhTmYy.js";import"./index-Bb4qSo10.js";import"./Icon-ev__gahW.js";import"./search-BceqokmR.js";import"./close-Bwe4q-Z3.js";import"./stringCase-DaZl3p-i.js";import"./spinner-D3uK0xOl.js";import"./chevron-down-jNWesQvo.js";import"./check-4u3gJW-P.js";import"./index-BgmTQNcy.js";import"./index-CaNG7YX3.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-fvTbNGom.js";import"./floating-ui.dom-BuxmzwbT.js";import"./Button--egxP2zT.js";import"./index-Cm6j2cFO.js";import"./styles-DsUnyYA6.js";import"./index-DjcUcJmE.js";import"./Checkbox-BePh-fpO.js";import"./index-CZsjDy6p.js";import"./index-BmdjtsoG.js";import"./index-DZOIkxWA.js";const b=({onComplete:l,errorMessage:i,className:q,disabled:m})=>{const P=C("w-[48px] h-[48px] flex items-center justify-center",{"bg-bg-weaker":m}),[t,V]=a.useState(["","","","","",""]),p=u=>{m||V(u)},n=[a.useRef(null),a.useRef(null),a.useRef(null),a.useRef(null),a.useRef(null),a.useRef(null)],L=" ",N=typeof i=="string"&&i.length>0;return a.useEffect(()=>{var u;n[0]&&((u=n[0].current)==null||u.focus())},[n[0]]),o.jsxs("div",{className:C("grid gap-2 min-w-[400px]",q),children:[o.jsx("div",{className:"flex justify-between",children:t.map((u,e)=>o.jsx(W,{value:u,ref:n[e],onKeyDown:r=>{var f;if(m){r.stopPropagation(),r.preventDefault();return}t[e]===""&&r.code.toLowerCase()==="backspace"&&e!==0&&((f=n[e-1].current)==null||f.focus(),p(t.map((g,d)=>d===e?"":g))),t[e]!==""&&r.code.toLowerCase()==="enter"&&e===t.length-1&&l(t.join(""))},onChange:r=>{var R,g,d,w,I;if(r.target.value.length&&!/^[0-9]+$/gim.test(r.target.value))return;if(r.target.value.length>1){if(e!==t.length-1){const s=r.target.value[r.target.value.length-1],c=t.map((j,M)=>M===e+1?s:j);p(c),(R=n[e+1].current)==null||R.focus(),t.filter(j=>j!=="").length===t.length-1&&l(c.join(""))}return}const f=t.filter(s=>s!=="").length;if(r.target.value.length&&f===t.length-1){const s=t.map((c,h)=>h===e?r.target.value:c);l(s.join("")),p(s);return}if(r.target.value.length>1&&e!==t.length-1){const s=r.target.value[r.target.value.length-1];p(t.map((h,D)=>D===e+1?s:h)),(g=n[e+1].current)==null||g.focus();return}if(r.target.value.length===1&&e!==t.length-1&&((d=n[e+1].current)==null||d.focus()),r.target.value.length<1&&e!==0&&((w=n[e-1].current)==null||w.focus()),t[e].length&&r.target.value.length&&e!==t.length-1){(I=n[e+1].current)==null||I.focus();return}p(t.map((s,c)=>e===c?r.target.value:s))},error:N,containerClassName:P,className:C("text-center",K({variant:"titleMd"}),{"bg-bg-weaker":m}),placeholder:L},e))}),N&&o.jsx("div",{children:o.jsx("p",{className:"text-text-critical",children:i})})]})};b.__docgenInfo={description:"",methods:[],displayName:"OtpInput",props:{onComplete:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: string) => void",signature:{arguments:[{type:{name:"string"},name:"values"}],return:{name:"void"}}},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};const me={title:"Xenith UI/Components/OtpInput",parameters:{layout:"centered",docs:{subtitle:"Displays a form input field or a component that looks like an input field."}},tags:["autodocs"]},v={render:()=>o.jsx("div",{className:"grid gap-1",children:o.jsx(b,{onComplete:l=>console.log("yey complete",l)})})},y={render:()=>{const[l,i]=a.useState(!1);return o.jsx("div",{className:"grid gap-1",children:o.jsx(b,{onComplete:()=>{i(!0),console.log("yey complete")},disabled:l,errorMessage:"OTP you have entered is incorrect"})})}};var O,E,S;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div className="grid gap-1">
      <OtpInput onComplete={v => console.log("yey complete", v)} />
    </div>
}`,...(S=(E=v.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var T,k,_;y.parameters={...y.parameters,docs:{...(T=y.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const [disabled, setDisabled] = useState(false);
    return <div className="grid gap-1">
        <OtpInput onComplete={() => {
        setDisabled(true);
        console.log("yey complete");
      }} disabled={disabled} errorMessage="OTP you have entered is incorrect" />
      </div>;
  }
}`,...(_=(k=y.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};const fe=["Default","WithError"];export{v as Default,y as WithError,fe as __namedExportsOrder,me as default};
