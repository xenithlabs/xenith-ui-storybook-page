import{t as i}from"./constructFrom-rJN6zrQ_.js";const f=6048e5,l=864e5,d=6e4,m=36e5;function o(e){const t=i(e);return t.setHours(0,0,0,0),t}function a(e){const t=i(e),s=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return s.setUTCFullYear(t.getFullYear()),+e-+s}function g(e,t){const s=o(e),n=o(t),c=+s-a(s),r=+n-a(n);return Math.round((c-r)/l)}export{d as a,f as b,g as d,m,o as s};