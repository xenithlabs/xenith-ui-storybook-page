import{j as p}from"./jsx-runtime-BhBAkL08.js";import{r as t}from"./index-caxmlYbZ.js";import{d as S,a as B,e as D,b as y,_ as C,f as E}from"./index-d7ziAqdJ.js";import{$ as M}from"./index-BnmSys5K.js";import{$ as q}from"./index-BPrjlVTu.js";import{$ as O}from"./index-D1_gb_Tp.js";import{c as w}from"./cn-C-5SdYIA.js";import{I as A}from"./Icon-7BdkfswG.js";import{F}from"./check-CDvVW5im.js";const _="Checkbox",[K,oe]=S(_),[L,H]=K(_),T=t.forwardRef((r,f)=>{const{__scopeCheckbox:e,name:n,checked:b,defaultChecked:o,required:i,disabled:s,value:d="on",onCheckedChange:h,...v}=r,[c,m]=t.useState(null),N=B(f,a=>m(a)),x=t.useRef(!1),g=c?!!c.closest("form"):!0,[u=!1,k]=D({prop:b,defaultProp:o,onChange:h}),P=t.useRef(u);return t.useEffect(()=>{const a=c==null?void 0:c.form;if(a){const $=()=>k(P.current);return a.addEventListener("reset",$),()=>a.removeEventListener("reset",$)}},[c,k]),t.createElement(L,{scope:e,state:u,disabled:s},t.createElement(y.button,C({type:"button",role:"checkbox","aria-checked":l(u)?"mixed":u,"aria-required":i,"data-state":R(u),"data-disabled":s?"":void 0,disabled:s,value:d},v,{ref:N,onKeyDown:E(r.onKeyDown,a=>{a.key==="Enter"&&a.preventDefault()}),onClick:E(r.onClick,a=>{k($=>l($)?!0:!$),g&&(x.current=a.isPropagationStopped(),x.current||a.stopPropagation())})})),g&&t.createElement(G,{control:c,bubbles:!x.current,name:n,value:d,checked:u,required:i,disabled:s,style:{transform:"translateX(-100%)"}}))}),X="CheckboxIndicator",z=t.forwardRef((r,f)=>{const{__scopeCheckbox:e,forceMount:n,...b}=r,o=H(X,e);return t.createElement(O,{present:n||l(o.state)||o.state===!0},t.createElement(y.span,C({"data-state":R(o.state),"data-disabled":o.disabled?"":void 0},b,{ref:f,style:{pointerEvents:"none",...r.style}})))}),G=r=>{const{control:f,checked:e,bubbles:n=!0,...b}=r,o=t.useRef(null),i=M(e),s=q(f);return t.useEffect(()=>{const d=o.current,h=window.HTMLInputElement.prototype,c=Object.getOwnPropertyDescriptor(h,"checked").set;if(i!==e&&c){const m=new Event("click",{bubbles:n});d.indeterminate=l(e),c.call(d,l(e)?!1:e),d.dispatchEvent(m)}},[i,e,n]),t.createElement("input",C({type:"checkbox","aria-hidden":!0,defaultChecked:l(e)?!1:e},b,{tabIndex:-1,ref:o,style:{...r.style,...s,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function l(r){return r==="indeterminate"}function R(r){return l(r)?"indeterminate":r?"checked":"unchecked"}const j=T,J=z,I=t.forwardRef(({className:r,indeterminate:f,checked:e,...n},b)=>{const[o,i]=t.useState(!!e);return t.useEffect(()=>{e!==void 0&&i(!!e)},[e]),p.jsx(j,{ref:b,className:w("peer h-4 w-4 shrink-0 rounded-[4px] border bg-white border-border-strong hover:border-border-stronger ring-offset-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:border-border-default disabled:text-text-weaker disabled:bg-bg-weaker data-[state=checked]:bg-accent data-[state=indeterminate]:bg-accent data-[state=checked]:text-white data-[state=checked]:border-border-accent disabled:data-[state=checked]:bg-accent-disabled disabled:data-[state=checked]:border-0",r),...n,checked:o,onCheckedChange:s=>{n.onCheckedChange&&n.onCheckedChange(s),i(d=>f?d==="indeterminate"?!0:d===!0?!1:"indeterminate":s)},children:p.jsxs(J,{className:w("flex items-center justify-center text-current"),children:[o==="indeterminate"&&p.jsx("div",{className:"w-[7px]  border  border-white"}),o===!0&&p.jsx(A,{icon:p.jsx(F,{})})]})})});I.displayName=j.displayName;I.__docgenInfo={description:"",methods:[]};export{I as C};