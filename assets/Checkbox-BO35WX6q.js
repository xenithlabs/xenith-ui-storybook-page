import{j as p}from"./jsx-runtime-DWbWqHZ-.js";import{r as t}from"./index-l2PZgWEW.js";import{d as S,a as B,e as D,b as y,_ as C,f as E}from"./index-BgmTQNcy.js";import{$ as M}from"./index-CZsjDy6p.js";import{$ as q}from"./index-BmdjtsoG.js";import{$ as O}from"./index-DZOIkxWA.js";import{c as w}from"./cn-C-5SdYIA.js";import{I as A}from"./Icon-BVoV0EQW.js";import{F}from"./check-4u3gJW-P.js";const _="Checkbox",[K,oe]=S(_),[L,H]=K(_),T=t.forwardRef((r,f)=>{const{__scopeCheckbox:e,name:a,checked:b,defaultChecked:o,required:i,disabled:s,value:d="on",onCheckedChange:m,...v}=r,[c,h]=t.useState(null),N=B(f,n=>h(n)),x=t.useRef(!1),g=c?!!c.closest("form"):!0,[l=!1,k]=D({prop:b,defaultProp:o,onChange:m}),P=t.useRef(l);return t.useEffect(()=>{const n=c==null?void 0:c.form;if(n){const $=()=>k(P.current);return n.addEventListener("reset",$),()=>n.removeEventListener("reset",$)}},[c,k]),t.createElement(L,{scope:e,state:l,disabled:s},t.createElement(y.button,C({type:"button",role:"checkbox","aria-checked":u(l)?"mixed":l,"aria-required":i,"data-state":R(l),"data-disabled":s?"":void 0,disabled:s,value:d},v,{ref:N,onKeyDown:E(r.onKeyDown,n=>{n.key==="Enter"&&n.preventDefault()}),onClick:E(r.onClick,n=>{k($=>u($)?!0:!$),g&&(x.current=n.isPropagationStopped(),x.current||n.stopPropagation())})})),g&&t.createElement(G,{control:c,bubbles:!x.current,name:a,value:d,checked:l,required:i,disabled:s,style:{transform:"translateX(-100%)"}}))}),X="CheckboxIndicator",z=t.forwardRef((r,f)=>{const{__scopeCheckbox:e,forceMount:a,...b}=r,o=H(X,e);return t.createElement(O,{present:a||u(o.state)||o.state===!0},t.createElement(y.span,C({"data-state":R(o.state),"data-disabled":o.disabled?"":void 0},b,{ref:f,style:{pointerEvents:"none",...r.style}})))}),G=r=>{const{control:f,checked:e,bubbles:a=!0,...b}=r,o=t.useRef(null),i=M(e),s=q(f);return t.useEffect(()=>{const d=o.current,m=window.HTMLInputElement.prototype,c=Object.getOwnPropertyDescriptor(m,"checked").set;if(i!==e&&c){const h=new Event("click",{bubbles:a});d.indeterminate=u(e),c.call(d,u(e)?!1:e),d.dispatchEvent(h)}},[i,e,a]),t.createElement("input",C({type:"checkbox","aria-hidden":!0,defaultChecked:u(e)?!1:e},b,{tabIndex:-1,ref:o,style:{...r.style,...s,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function u(r){return r==="indeterminate"}function R(r){return u(r)?"indeterminate":r?"checked":"unchecked"}const j=T,J=z,I=t.forwardRef(({className:r,indeterminate:f,checked:e,...a},b)=>{const[o,i]=t.useState(!!e);return t.useEffect(()=>{e!==void 0&&i(!!e)},[e]),p.jsx(j,{ref:b,className:w("peer h-4 w-4 shrink-0 rounded-[4px] border bg-white border-border-strong hover:border-border-stronger ring-offset-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:border-border-default disabled:text-text-weaker disabled:bg-bg-weaker data-[state=checked]:bg-accent data-[state=indeterminate]:bg-accent data-[state=checked]:text-white data-[state=checked]:border-border-accent",r),...a,checked:o,onCheckedChange:s=>{a.onCheckedChange&&a.onCheckedChange(s),i(d=>f?d==="indeterminate"?!0:d===!0?!1:"indeterminate":s)},children:p.jsxs(J,{className:w("flex items-center justify-center text-current"),children:[o==="indeterminate"&&p.jsx("div",{className:"w-[7px]  border  border-white"}),o===!0&&p.jsx(A,{icon:p.jsx(F,{})})]})})});I.displayName=j.displayName;I.__docgenInfo={description:"",methods:[]};export{I as C};
