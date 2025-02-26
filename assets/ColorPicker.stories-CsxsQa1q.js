import{j as m}from"./jsx-runtime-DR9Q75dM.js";import{R as f,r as u}from"./index-DRjF_FHU.js";import{c as Y}from"./cn-C-5SdYIA.js";import{P as W,a as Z,b as ee}from"./Popover-jvvk1f8v.js";import{T as re}from"./Text-BYjIVLkz.js";import{I as te}from"./useClickOutside-D93SOS73.js";import"./index-DuXoWBk8.js";import"./index-CxRLcT2J.js";import"./index-DdILnG7L.js";import"./index-CWbDPhO_.js";import"./index-qtGI3euC.js";import"./index-CxZrjbHI.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-KY2xTor3.js";import"./index-BhXpUKZt.js";import"./index-HZDBD2ik.js";import"./styles-BNEhTmYy.js";import"./index-Bb4qSo10.js";import"./search-CWRmq9WO.js";import"./close-CAN3cq4E.js";import"./stringCase-DaZl3p-i.js";import"./spinner-fxOeMmbK.js";import"./chevron-down-DqISSPB-.js";import"./check-rKbD1QKS.js";import"./Button-iG-w-ZO3.js";import"./Icon-Bs9G1Rwk.js";import"./index-CAHntWCK.js";import"./Heading-BbwmavmP.js";import"./Checkbox-CY4DEde6.js";import"./index-Bu1UD4WD.js";function C(){return(C=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function R(e,r){if(e==null)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r.indexOf(t=o[n])>=0||(a[t]=e[t]);return a}function N(e){var r=u.useRef(e),t=u.useRef(function(n){r.current&&r.current(n)});return r.current=e,t.current}var w=function(e,r,t){return r===void 0&&(r=0),t===void 0&&(t=1),e>t?t:e<r?r:e},y=function(e){return"touches"in e},O=function(e){return e&&e.ownerDocument.defaultView||self},B=function(e,r,t){var n=e.getBoundingClientRect(),a=y(r)?function(o,s){for(var c=0;c<o.length;c++)if(o[c].identifier===s)return o[c];return o[0]}(r.touches,t):r;return{left:w((a.pageX-(n.left+O(e).pageXOffset))/n.width),top:w((a.pageY-(n.top+O(e).pageYOffset))/n.height)}},K=function(e){!y(e)&&e.preventDefault()},P=f.memo(function(e){var r=e.onMove,t=e.onKey,n=R(e,["onMove","onKey"]),a=u.useRef(null),o=N(r),s=N(t),c=u.useRef(null),l=u.useRef(!1),i=u.useMemo(function(){var j=function(g){K(g),(y(g)?g.touches.length>0:g.buttons>0)&&a.current?o(B(a.current,g,c.current)):b(!1)},k=function(){return b(!1)};function b(g){var d=l.current,v=O(a.current),E=g?v.addEventListener:v.removeEventListener;E(d?"touchmove":"mousemove",j),E(d?"touchend":"mouseup",k)}return[function(g){var d=g.nativeEvent,v=a.current;if(v&&(K(d),!function(J,Q){return Q&&!y(J)}(d,l.current)&&v)){if(y(d)){l.current=!0;var E=d.changedTouches||[];E.length&&(c.current=E[0].identifier)}v.focus(),o(B(v,d,c.current)),b(!0)}},function(g){var d=g.which||g.keyCode;d<37||d>40||(g.preventDefault(),s({left:d===39?.05:d===37?-.05:0,top:d===40?.05:d===38?-.05:0}))},b]},[s,o]),p=i[0],x=i[1],_=i[2];return u.useEffect(function(){return _},[_]),f.createElement("div",C({},n,{onTouchStart:p,onMouseDown:p,className:"react-colorful__interactive",ref:a,onKeyDown:x,tabIndex:0,role:"slider"}))}),S=function(e){return e.filter(Boolean).join(" ")},z=function(e){var r=e.color,t=e.left,n=e.top,a=n===void 0?.5:n,o=S(["react-colorful__pointer",e.className]);return f.createElement("div",{className:o,style:{top:100*a+"%",left:100*t+"%"}},f.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:r}}))},h=function(e,r,t){return r===void 0&&(r=0),t===void 0&&(t=Math.pow(10,r)),Math.round(t*e)/t},ne=function(e){return se(T(e))},T=function(e){return e[0]==="#"&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?h(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:e.length===8?h(parseInt(e.substring(6,8),16)/255,2):1}},oe=function(e){return ce(ae(e))},V=function(e){var r=e.s,t=e.v,n=e.a,a=(200-r)*t/100;return{h:h(e.h),s:h(a>0&&a<200?r*t/100/(a<=100?a:200-a)*100:0),l:h(a/2),a:h(n,2)}},D=function(e){var r=V(e);return"hsl("+r.h+", "+r.s+"%, "+r.l+"%)"},H=function(e){var r=V(e);return"hsla("+r.h+", "+r.s+"%, "+r.l+"%, "+r.a+")"},ae=function(e){var r=e.h,t=e.s,n=e.v,a=e.a;r=r/360*6,t/=100,n/=100;var o=Math.floor(r),s=n*(1-t),c=n*(1-(r-o)*t),l=n*(1-(1-r+o)*t),i=o%6;return{r:h(255*[n,c,s,s,l,n][i]),g:h(255*[l,n,n,c,s,s][i]),b:h(255*[s,s,l,n,n,c][i]),a:h(a,2)}},I=function(e){var r=e.toString(16);return r.length<2?"0"+r:r},ce=function(e){var r=e.r,t=e.g,n=e.b,a=e.a,o=a<1?I(h(255*a)):"";return"#"+I(r)+I(t)+I(n)+o},se=function(e){var r=e.r,t=e.g,n=e.b,a=e.a,o=Math.max(r,t,n),s=o-Math.min(r,t,n),c=s?o===r?(t-n)/s:o===t?2+(n-r)/s:4+(r-t)/s:0;return{h:h(60*(c<0?c+6:c)),s:h(o?s/o*100:0),v:h(o/255*100),a}},le=f.memo(function(e){var r=e.hue,t=e.onChange,n=S(["react-colorful__hue",e.className]);return f.createElement("div",{className:n},f.createElement(P,{onMove:function(a){t({h:360*a.left})},onKey:function(a){t({h:w(r+360*a.left,0,360)})},"aria-label":"Hue","aria-valuenow":h(r),"aria-valuemax":"360","aria-valuemin":"0"},f.createElement(z,{className:"react-colorful__hue-pointer",left:r/360,color:D({h:r,s:100,v:100,a:1})})))}),ie=f.memo(function(e){var r=e.hsva,t=e.onChange,n={backgroundColor:D({h:r.h,s:100,v:100,a:1})};return f.createElement("div",{className:"react-colorful__saturation",style:n},f.createElement(P,{onMove:function(a){t({s:100*a.left,v:100-100*a.top})},onKey:function(a){t({s:w(r.s+100*a.left,0,100),v:w(r.v-100*a.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+h(r.s)+"%, Brightness "+h(r.v)+"%"},f.createElement(z,{className:"react-colorful__saturation-pointer",top:1-r.v/100,left:r.s/100,color:D(r)})))}),G=function(e,r){if(e===r)return!0;for(var t in e)if(e[t]!==r[t])return!1;return!0},ue=function(e,r){return e.toLowerCase()===r.toLowerCase()||G(T(e),T(r))};function fe(e,r,t){var n=N(t),a=u.useState(function(){return e.toHsva(r)}),o=a[0],s=a[1],c=u.useRef({color:r,hsva:o});u.useEffect(function(){if(!e.equal(r,c.current.color)){var i=e.toHsva(r);c.current={hsva:i,color:r},s(i)}},[r,e]),u.useEffect(function(){var i;G(o,c.current.hsva)||e.equal(i=e.fromHsva(o),c.current.color)||(c.current={hsva:o,color:i},n(i))},[o,e,n]);var l=u.useCallback(function(i){s(function(p){return Object.assign({},p,i)})},[]);return[o,l]}var pe=typeof window<"u"?u.useLayoutEffect:u.useEffect,de=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0},$=new Map,me=function(e){pe(function(){var r=e.current?e.current.ownerDocument:document;if(r!==void 0&&!$.has(r)){var t=r.createElement("style");t.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,$.set(r,t);var n=de();n&&t.setAttribute("nonce",n),r.head.appendChild(t)}},[])},he=function(e){var r=e.className,t=e.hsva,n=e.onChange,a={backgroundImage:"linear-gradient(90deg, "+H(Object.assign({},t,{a:0}))+", "+H(Object.assign({},t,{a:1}))+")"},o=S(["react-colorful__alpha",r]),s=h(100*t.a);return f.createElement("div",{className:o},f.createElement("div",{className:"react-colorful__alpha-gradient",style:a}),f.createElement(P,{onMove:function(c){n({a:c.left})},onKey:function(c){n({a:w(t.a+c.left)})},"aria-label":"Alpha","aria-valuetext":s+"%","aria-valuenow":s,"aria-valuemin":"0","aria-valuemax":"100"},f.createElement(z,{className:"react-colorful__alpha-pointer",left:t.a,color:H(t)})))},ge=function(e){var r=e.className,t=e.colorModel,n=e.color,a=n===void 0?t.defaultColor:n,o=e.onChange,s=R(e,["className","colorModel","color","onChange"]),c=u.useRef(null);me(c);var l=fe(t,a,o),i=l[0],p=l[1],x=S(["react-colorful",r]);return f.createElement("div",C({},s,{ref:c,className:x}),f.createElement(ie,{hsva:i,onChange:p}),f.createElement(le,{hue:i.h,onChange:p}),f.createElement(he,{hsva:i,onChange:p,className:"react-colorful__last-control"}))},ve={defaultColor:"0001",toHsva:ne,fromHsva:oe,equal:ue},xe=function(e){return f.createElement(ge,C({},e,{colorModel:ve}))},_e=/^#?([0-9A-F]{3,8})$/i,be=function(e){var r=e.color,t=r===void 0?"":r,n=e.onChange,a=e.onBlur,o=e.escape,s=e.validate,c=e.format,l=e.process,i=R(e,["color","onChange","onBlur","escape","validate","format","process"]),p=u.useState(function(){return o(t)}),x=p[0],_=p[1],j=N(n),k=N(a),b=u.useCallback(function(d){var v=o(d.target.value);_(v),s(v)&&j(l?l(v):v)},[o,l,s,j]),g=u.useCallback(function(d){s(d.target.value)||_(o(t)),k(d)},[t,o,s,k]);return u.useEffect(function(){_(o(t))},[t,o]),f.createElement("input",C({},i,{value:c?c(x):x,spellCheck:"false",onChange:b,onBlur:g}))},A=function(e){return"#"+e},we=function(e){var r=e.prefixed,t=e.alpha,n=R(e,["prefixed","alpha"]),a=u.useCallback(function(s){return s.replace(/([^0-9A-F]+)/gi,"").substring(0,t?8:6)},[t]),o=u.useCallback(function(s){return function(c,l){var i=_e.exec(c),p=i?i[1].length:0;return p===3||p===6||!!l&&p===4||!!l&&p===8}(s,t)},[t]);return f.createElement(be,C({},n,{escape:a,format:r?A:void 0,process:A,validate:o}))};const q=e=>{let r=e;e.length===3&&(r=e.split("").map(o=>o+o).join(""));const[t,n,a]=r.replace(/^#/,"").match(/.{2}/g).map(o=>parseInt(o,16));return{r:t,g:n,b:a}},Ce=e=>`#${e.r.toString(16).padStart(2,"0")}${e.g.toString(16).padStart(2,"0")}${e.b.toString(16).padStart(2,"0")}`,Ee=(e,r)=>{if(!e.r||!e.g||!e.b)return!1;const t=q(r);return e.r===t.r&&e.g===t.g&&e.b===t.b},L=({color:e,onChange:r,className:t})=>{const[n,a]=u.useState(!1);return m.jsxs(W,{open:n,onOpenChange:a,children:[m.jsx(Z,{children:m.jsxs("div",{className:Y("flex items-center gap-2 border border-border-default rounded-radius-md shadow-input min-h-10 px-3 py-2.5 bg-bg-default",{"border-border-accent":n},t),children:[m.jsx("div",{className:"w-5 h-5 rounded-full border-[1.5px] shadow-container border-white",style:{backgroundColor:e||"transparent"}}),m.jsx(re,{children:e?e.toUpperCase():"Choose color"})]})}),m.jsx(ee,{children:m.jsxs("div",{children:[m.jsx("div",{className:`[&_.react-colorful\\_\\_hue]:my-2
              [&_.react-colorful\\_\\_hue]:h-2.5 [&_.react-colorful\\_\\_alpha]:h-2.5
              [&_.react-colorful\\_\\_hue]:rounded-full [&_.react-colorful\\_\\_alpha]:rounded-full
              [&_.react-colorful\\_\\_pointer]:w-3.5 [&_.react-colorful\\_\\_pointer]:h-3.5 [&_.react-colorful\\_\\_pointer]:shadow-dropdown
              [&_.react-colorful\\_\\_saturation]:rounded-radius-sm`,children:m.jsx(xe,{color:e,onChange:r,className:"w-[176px]"})}),m.jsxs("div",{className:"flex justify-between gap-2 mt-2",children:[m.jsxs("div",{className:"grid gap-1",children:[m.jsx("span",{className:"text-[8px] leading-[10px] font-medium",children:"HEX"}),m.jsx(we,{color:e==null?void 0:e.toUpperCase(),onChange:r,prefixed:!0,className:`border border-border-default bg-bg-default
                focus:border-border-accent focus:ring-0 focus:outline-none ring-offset-0
                rounded-radius-md h-7 px-[7px] py-1 w-[61px]
                text-[10px] leading-5 tracking-[0.4%]`})]}),m.jsx(ye,{color:e,onChange:r})]})]})})]})},ye=({color:e,onChange:r})=>{const[t,n]=u.useState(e?q(e):{}),a="^(25[0-5]|2[0-4][0-9]|1?[0-9]{1,2})$",o=l=>{n(l),l.r&&l.g&&l.b&&(r==null||r(Ce(l)))},s=l=>i=>{if(i.target.value===""){o({...t,[l]:void 0});return}const p=parseInt(i.target.value,10);p>=0&&p<=255&&o({...t,[l]:p})},c=l=>m.jsx(te,{type:"number",min:0,max:255,pattern:a,maxLength:3,value:t[l],onChange:s(l),className:"appearance-none text-[10px] leading-5 tracking-[0.4%] text-center",containerClassName:Y("h-7 min-h-7 w-[35px] px-[7px] py-1",{"rounded-r-none border-r-transparent":l==="r","rounded-none":l==="g","rounded-l-none border-l-transparent":l==="b"}),placeholder:" "});return u.useEffect(()=>{e&&!Ee(t,e)&&n(q(e))},[e]),m.jsxs("div",{className:"grid grid-cols-3 gap-y-1",children:[m.jsx("span",{className:"text-[8px] leading-[10px] font-medium",children:"R"}),m.jsx("span",{className:"text-[8px] leading-[10px] font-medium",children:"G"}),m.jsx("span",{className:"text-[8px] leading-[10px] font-medium",children:"B"}),c("r"),c("g"),c("b")]})};L.__docgenInfo={description:"",methods:[],displayName:"ColorPicker",props:{color:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(color: string) => void",signature:{arguments:[{type:{name:"string"},name:"color"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const rr={title:"Xenith UI/Components/ColorPicker",component:L,tags:["autodocs"],render:()=>{const[e,r]=u.useState();return m.jsx(L,{color:e,onChange:r,className:"w-40"})}},M={};var X,F,U;M.parameters={...M.parameters,docs:{...(X=M.parameters)==null?void 0:X.docs,source:{originalSource:"{}",...(U=(F=M.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};const tr=["Default"];export{M as Default,tr as __namedExportsOrder,rr as default};
