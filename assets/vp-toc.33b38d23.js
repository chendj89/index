import{t as L}from"./index.70fae9d3.js";import{q as S,M as b,N as H,A as q,G as T,_ as x,f as B,k as m,o as l,c as i,d as a,F as v,L as _,h as E,t as y,y as C}from"./app.8bd6da0a.js";function U(t,e){const n=L(r,150);function r(){const s=D(),o=F(s);if(o.length&&window.scrollY&&window.scrollY+window.innerHeight===document.body.offsetHeight){u(o[o.length-1].hash);return}for(let c=0;c<o.length;c++){const h=o[c],w=o[c+1],[A,p]=O(c,h,w);if(A){history.replaceState(null,document.title,p||" "),u(p);return}}}let d=null;function u(s){f(d);const o=d=s==null?null:t.value.querySelector(`.toc-item a[href="${decodeURIComponent(s)}"]`);o?(o.classList.add("active"),e.value.style.opacity="1",e.value.style.top=`${o.offsetTop+2}px`):(e.value.style.opacity="0",e.value.style.top="33px")}function f(s){s&&s.classList.remove("active")}S(()=>{window.requestAnimationFrame(r),window.addEventListener("scroll",n)}),b(()=>{u(location.hash)}),H(()=>{window.removeEventListener("scroll",n)})}function D(){return Array.from(document.querySelectorAll(".toc-content .toc-link"))}function F(t){return Array.from(document.querySelectorAll(".doc-content .header-anchor")).filter(e=>t.some(n=>n.hash===e.hash))}function N(){return document.querySelector(".navbar").offsetHeight}function g(t){const e=N();try{return t.parentElement.offsetTop-e-15}catch{return 0}}function O(t,e,n){const r=window.scrollY;return t===0&&r===0?[!0,null]:r<g(e)?[!1,null]:!n||r<g(n)?[!0,decodeURIComponent(e.hash)]:[!1,null]}const Y=()=>{const t=T();return q(()=>$(t.value.headers))},$=t=>k(I(t));function I(t){t=t.map(n=>Object.assign({},n));let e;return t.forEach(n=>{n.level===2?e=n:e&&(e.children||(e.children=[])).push(n)}),t.filter(n=>n.level===2)}function k(t){return t.map(e=>({text:e.title,link:`#${e.slug}`,children:e.children?k(e.children):void 0}))}const M={class:"toc-content"},P=a("h3",{class:"toc-content__heading"},"\u5185\u5BB9",-1),R={class:"toc-items"},V=["href","title"],j={key:0},G=["href","title"],z=B({__name:"vp-toc",setup(t){const e=m(),n=m(),r=Y();return U(n,e),(d,u)=>(l(),i("aside",{ref_key:"container",ref:n,class:"toc-wrapper"},[a("nav",M,[P,a("ul",R,[(l(!0),i(v,null,_(E(r),({link:f,text:s,children:o})=>(l(),i("li",{key:f,class:"toc-item"},[a("a",{class:"toc-link",href:f,title:s},y(s),9,V),o?(l(),i("ul",j,[(l(!0),i(v,null,_(o,({link:c,text:h})=>(l(),i("li",{key:c,class:"toc-item"},[a("a",{class:"toc-link subitem",href:c,title:s},y(h),9,G)]))),128))])):C("",!0)]))),128))]),a("div",{ref_key:"marker",ref:e,class:"toc-marker"},null,512)])],512))}});var Q=x(z,[["__file","vp-toc.vue"]]);export{Q as default};