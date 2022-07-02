import{H as l,z as n}from"./app.8bd6da0a.js";const i=l({storageKey:"el-theme-appearance"});n(i);const h=(o,s)=>{let e,a=!1;return()=>{e&&clearTimeout(e),a?e=setTimeout(o,s):(o(),a=!0,setTimeout(()=>{a=!1},s))}};function d(o){var e,a,r;Array.from((r=(a=(e=o.value)==null?void 0:e.$el)==null?void 0:a.querySelectorAll("a:not(.header-anchor)"))!=null?r:[]).forEach(t=>{t.classList.add("vp-link"),!t.href.startsWith(window.origin)&&!t.innerHTML.includes("<img")&&(t.innerHTML=`
        ${t.innerHTML}
        <svg class="link-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
          <path
            d="
              M853.333333 469.333333a42.666667 42.666667 0 0 0-42.666666
              42.666667v256a42.666667 42.666667 0 0 1-42.666667 42.666667H256a42.666667
              42.666667 0 0 1-42.666667-42.666667V256a42.666667
              42.666667 0 0 1 42.666667-42.666667h256a42.666667 42.666667
              0 0 0 0-85.333333H256a128 128 0 0 0-128 128v512a128 128
              0 0 0 128 128h512a128 128 0 0 0 128-128v-256a42.666667
              42.666667 0 0 0-42.666667-42.666667z
            "
            fill="currentColor">
          </path>
          <path
            d="
              M682.666667 213.333333h67.413333l-268.373333 267.946667a42.666667
              42.666667 0 0 0 0 60.586667 42.666667 42.666667
              0 0 0 60.586666 0L810.666667 273.92V341.333333a42.666667
              42.666667 0 0 0 42.666666 42.666667 42.666667 42.666667 0 0 0
              42.666667-42.666667V170.666667a42.666667 42.666667 0 0
              0-42.666667-42.666667h-170.666666a42.666667
              42.666667 0 0 0 0 85.333333z
            "
            fill="currentColor"
          >
          </path>
        </svg>
        `)})}function p(o){var e,a;Array.from((a=(e=o.value)==null?void 0:e.$el.querySelectorAll("table:not(.el-table__body):not(.el-table__header)"))!=null?a:[]).forEach(r=>{const t=document.createElement("div");t.classList.add("vp-table"),r.parentNode.insertBefore(t,r),r.parentNode.removeChild(r),t.appendChild(r)})}export{p as a,d as i,h as t};
