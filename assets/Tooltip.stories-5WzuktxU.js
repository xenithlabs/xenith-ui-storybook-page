import{j as h,c as X}from"./cn-BTg03kWI.js";import{r as o}from"./index-l2PZgWEW.js";import{a as B,_ as g,b as Y}from"./index-q8uFWT42.js";import{a as W,b as J,$ as Q,c as y}from"./index-CeZp-NtI.js";import{$ as Z,a as ee}from"./index-B8PZdeOC.js";import{$ as te}from"./index-D9GVr0Dr.js";import{$ as U,a as oe,b as ne,c as re,d as ae}from"./index-BSA0mb7x.js";import{$ as V}from"./index-DeznNegx.js";import{$ as ce}from"./index-DDb-YjJF.js";import{T as se}from"./Text-CzgGQCQf.js";import"./index-CaNG7YX3.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-Vu1Slila.js";import"./styles-BBItLkJ7.js";import"./index-Bb4qSo10.js";const[R,Qe]=W("Tooltip",[U]),O=U(),ie="TooltipProvider",le=700,k="tooltip.open",[de,A]=R(ie),ue=t=>{const{__scopeTooltip:n,delayDuration:e=le,skipDelayDuration:r=300,disableHoverableContent:a=!1,children:s}=t,[i,d]=o.useState(!0),c=o.useRef(!1),u=o.useRef(0);return o.useEffect(()=>{const l=u.current;return()=>window.clearTimeout(l)},[]),o.createElement(de,{scope:n,isOpenDelayed:i,delayDuration:e,onOpen:o.useCallback(()=>{window.clearTimeout(u.current),d(!1)},[]),onClose:o.useCallback(()=>{window.clearTimeout(u.current),u.current=window.setTimeout(()=>d(!0),r)},[r]),isPointerInTransitRef:c,onPointerInTransitChange:o.useCallback(l=>{c.current=l},[]),disableHoverableContent:a},s)},L="Tooltip",[pe,P]=R(L),fe=t=>{const{__scopeTooltip:n,children:e,open:r,defaultOpen:a=!1,onOpenChange:s,disableHoverableContent:i,delayDuration:d}=t,c=A(L,t.__scopeTooltip),u=O(n),[l,p]=o.useState(null),m=te(),f=o.useRef(0),$=i??c.disableHoverableContent,b=d??c.delayDuration,x=o.useRef(!1),[T=!1,v]=J({prop:r,defaultProp:a,onChange:H=>{H?(c.onOpen(),document.dispatchEvent(new CustomEvent(k))):c.onClose(),s==null||s(H)}}),C=o.useMemo(()=>T?x.current?"delayed-open":"instant-open":"closed",[T]),E=o.useCallback(()=>{window.clearTimeout(f.current),x.current=!1,v(!0)},[v]),w=o.useCallback(()=>{window.clearTimeout(f.current),v(!1)},[v]),M=o.useCallback(()=>{window.clearTimeout(f.current),f.current=window.setTimeout(()=>{x.current=!0,v(!0)},b)},[b,v]);return o.useEffect(()=>()=>window.clearTimeout(f.current),[]),o.createElement(oe,u,o.createElement(pe,{scope:n,contentId:m,open:T,stateAttribute:C,trigger:l,onTriggerChange:p,onTriggerEnter:o.useCallback(()=>{c.isOpenDelayed?M():E()},[c.isOpenDelayed,M,E]),onTriggerLeave:o.useCallback(()=>{$?w():window.clearTimeout(f.current)},[w,$]),onOpen:E,onClose:w,disableHoverableContent:$},e))},j="TooltipTrigger",$e=o.forwardRef((t,n)=>{const{__scopeTooltip:e,...r}=t,a=P(j,e),s=A(j,e),i=O(e),d=o.useRef(null),c=B(n,d,a.onTriggerChange),u=o.useRef(!1),l=o.useRef(!1),p=o.useCallback(()=>u.current=!1,[]);return o.useEffect(()=>()=>document.removeEventListener("pointerup",p),[p]),o.createElement(ne,g({asChild:!0},i),o.createElement(Q.button,g({"aria-describedby":a.open?a.contentId:void 0,"data-state":a.stateAttribute},r,{ref:c,onPointerMove:y(t.onPointerMove,m=>{m.pointerType!=="touch"&&!l.current&&!s.isPointerInTransitRef.current&&(a.onTriggerEnter(),l.current=!0)}),onPointerLeave:y(t.onPointerLeave,()=>{a.onTriggerLeave(),l.current=!1}),onPointerDown:y(t.onPointerDown,()=>{u.current=!0,document.addEventListener("pointerup",p,{once:!0})}),onFocus:y(t.onFocus,()=>{u.current||a.onOpen()}),onBlur:y(t.onBlur,a.onClose),onClick:y(t.onClick,a.onClose)})))}),q="TooltipPortal",[me,xe]=R(q,{forceMount:void 0}),be=t=>{const{__scopeTooltip:n,forceMount:e,children:r,container:a}=t,s=P(q,n);return o.createElement(me,{scope:n,forceMount:e},o.createElement(V,{present:e||s.open},o.createElement(Z,{asChild:!0,container:a},r)))},_="TooltipContent",ve=o.forwardRef((t,n)=>{const e=xe(_,t.__scopeTooltip),{forceMount:r=e.forceMount,side:a="top",...s}=t,i=P(_,t.__scopeTooltip);return o.createElement(V,{present:r||i.open},i.disableHoverableContent?o.createElement(z,g({side:a},s,{ref:n})):o.createElement(he,g({side:a},s,{ref:n})))}),he=o.forwardRef((t,n)=>{const e=P(_,t.__scopeTooltip),r=A(_,t.__scopeTooltip),a=o.useRef(null),s=B(n,a),[i,d]=o.useState(null),{trigger:c,onClose:u}=e,l=a.current,{onPointerInTransitChange:p}=r,m=o.useCallback(()=>{d(null),p(!1)},[p]),f=o.useCallback(($,b)=>{const x=$.currentTarget,T={x:$.clientX,y:$.clientY},v=Ee(T,x.getBoundingClientRect()),C=we(T,v),E=_e(b.getBoundingClientRect()),w=De([...C,...E]);d(w),p(!0)},[p]);return o.useEffect(()=>()=>m(),[m]),o.useEffect(()=>{if(c&&l){const $=x=>f(x,l),b=x=>f(x,c);return c.addEventListener("pointerleave",$),l.addEventListener("pointerleave",b),()=>{c.removeEventListener("pointerleave",$),l.removeEventListener("pointerleave",b)}}},[c,l,f,m]),o.useEffect(()=>{if(i){const $=b=>{const x=b.target,T={x:b.clientX,y:b.clientY},v=(c==null?void 0:c.contains(x))||(l==null?void 0:l.contains(x)),C=!Pe(T,i);v?m():C&&(m(),u())};return document.addEventListener("pointermove",$),()=>document.removeEventListener("pointermove",$)}},[c,l,i,u,m]),o.createElement(z,g({},t,{ref:s}))}),[Te,ge]=R(L,{isInside:!1}),z=o.forwardRef((t,n)=>{const{__scopeTooltip:e,children:r,"aria-label":a,onEscapeKeyDown:s,onPointerDownOutside:i,...d}=t,c=P(_,e),u=O(e),{onClose:l}=c;return o.useEffect(()=>(document.addEventListener(k,l),()=>document.removeEventListener(k,l)),[l]),o.useEffect(()=>{if(c.trigger){const p=m=>{const f=m.target;f!=null&&f.contains(c.trigger)&&l()};return window.addEventListener("scroll",p,{capture:!0}),()=>window.removeEventListener("scroll",p,{capture:!0})}},[c.trigger,l]),o.createElement(ee,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:s,onPointerDownOutside:i,onFocusOutside:p=>p.preventDefault(),onDismiss:l},o.createElement(re,g({"data-state":c.stateAttribute},u,d,{ref:n,style:{...d.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"}}),o.createElement(Y,null,r),o.createElement(Te,{scope:e,isInside:!0},o.createElement(ce,{id:c.contentId,role:"tooltip"},a||r))))}),ye="TooltipArrow",Ce=o.forwardRef((t,n)=>{const{__scopeTooltip:e,...r}=t,a=O(e);return ge(ye,e).isInside?null:o.createElement(ae,g({},a,r,{ref:n}))});function Ee(t,n){const e=Math.abs(n.top-t.y),r=Math.abs(n.bottom-t.y),a=Math.abs(n.right-t.x),s=Math.abs(n.left-t.x);switch(Math.min(e,r,a,s)){case s:return"left";case a:return"right";case e:return"top";case r:return"bottom";default:throw new Error("unreachable")}}function we(t,n,e=5){const r=[];switch(n){case"top":r.push({x:t.x-e,y:t.y+e},{x:t.x+e,y:t.y+e});break;case"bottom":r.push({x:t.x-e,y:t.y-e},{x:t.x+e,y:t.y-e});break;case"left":r.push({x:t.x+e,y:t.y-e},{x:t.x+e,y:t.y+e});break;case"right":r.push({x:t.x-e,y:t.y-e},{x:t.x-e,y:t.y+e});break}return r}function _e(t){const{top:n,right:e,bottom:r,left:a}=t;return[{x:a,y:n},{x:e,y:n},{x:e,y:r},{x:a,y:r}]}function Pe(t,n){const{x:e,y:r}=t;let a=!1;for(let s=0,i=n.length-1;s<n.length;i=s++){const d=n[s].x,c=n[s].y,u=n[i].x,l=n[i].y;c>r!=l>r&&e<(u-d)*(r-c)/(l-c)+d&&(a=!a)}return a}function De(t){const n=t.slice();return n.sort((e,r)=>e.x<r.x?-1:e.x>r.x?1:e.y<r.y?-1:e.y>r.y?1:0),Re(n)}function Re(t){if(t.length<=1)return t.slice();const n=[];for(let r=0;r<t.length;r++){const a=t[r];for(;n.length>=2;){const s=n[n.length-1],i=n[n.length-2];if((s.x-i.x)*(a.y-i.y)>=(s.y-i.y)*(a.x-i.x))n.pop();else break}n.push(a)}n.pop();const e=[];for(let r=t.length-1;r>=0;r--){const a=t[r];for(;e.length>=2;){const s=e[e.length-1],i=e[e.length-2];if((s.x-i.x)*(a.y-i.y)>=(s.y-i.y)*(a.x-i.x))e.pop();else break}e.push(a)}return e.pop(),n.length===1&&e.length===1&&n[0].x===e[0].x&&n[0].y===e[0].y?n:n.concat(e)}const Oe=ue,ke=fe,Ae=$e,K=ve,Le=Ce,Ie=Oe,N=ke,Me=Ae,He=Le,I=o.forwardRef(({className:t,sideOffset:n=4,children:e,...r},a)=>h.jsxs(K,{ref:a,sideOffset:n,className:X("z-50 overflow-hidden rounded-md bg-bg-inverse px-3 py-1.5 text-xs left-0 text-white animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...r,children:[e,h.jsx(He,{})]}));I.displayName=K.displayName;I.__docgenInfo={description:"",methods:[],props:{sideOffset:{defaultValue:{value:"4",computed:!1},required:!1}}};const Ze={title:"Xenith UI/Components/Tooltip",component:N,tags:["autodocs"],render:()=>h.jsx("div",{className:"relative",children:h.jsx(Ie,{children:h.jsxs(N,{children:[h.jsx(Me,{asChild:!0,children:h.jsx(se,{children:"Hover me"})}),h.jsx(be,{children:h.jsx(I,{children:h.jsx("p",{children:"Add to library"})})})]})})})},D={};var S,G,F;D.parameters={...D.parameters,docs:{...(S=D.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(F=(G=D.parameters)==null?void 0:G.docs)==null?void 0:F.source}}};const et=["Default"];export{D as Default,et as __namedExportsOrder,Ze as default};
