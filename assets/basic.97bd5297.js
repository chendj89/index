import{_ as c,f as d,k as r,n as u,q as p,r as f,o as _,c as v,a as m,w as x,d as h,t as b,h as i,s as k}from"./app.8bd6da0a.js";const w=d({__name:"basic",setup(C){let a=r();const e=u({content:"\u5A01\u5A01\u5A01\u5A01\u7EF4\u74E6\u5C14\u554A\u6253\u53D1\u6253\u53D1\u5341\u5927\u5730\u65B9\u554A",active:!1,hide:!1});p(()=>{var s,t,o;console.log((s=a.value)==null?void 0:s.offsetWidth),a.value&&(e.hide=((t=a.value)==null?void 0:t.offsetWidth)>((o=a.value)==null?void 0:o.scrollWidth))});let l=()=>{e.active=!e.active,e.hide=!e.hide};return(s,t)=>{const o=f("el-tooltip");return _(),v("div",null,[m(o,{effect:"dark",content:e.content,placement:"top",disabled:e.hide},{default:x(()=>[h("div",{onClick:t[0]||(t[0]=(...n)=>i(l)&&i(l)(...n)),ref_key:"ele",ref:a,class:k(["example",{active:e.active}])},b(e.content),3)]),_:1},8,["content","disabled"])])}}});var A=c(w,[["__scopeId","data-v-7f4513c5"],["__file","basic.vue"]]);export{A as default};