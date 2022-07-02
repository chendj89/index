import{_ as n,o as s,c as a,b as t}from"./app.8bd6da0a.js";const p={},o=t(`<h2 id="\u6536\u85CF\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u6536\u85CF\u4EE3\u7801" aria-hidden="true">#</a> \u6536\u85CF\u4EE3\u7801</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/**
 * \u6536\u85CF\u7684\u94FE\u63A5
 */</span>
<span class="token keyword">let</span> blog <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">&quot;Vue3\uFF01ElementPlus\uFF01\u66F4\u52A0\u4F18\u96C5\u7684\u4F7F\u7528Icon&quot;</span><span class="token punctuation">,</span>
    link<span class="token operator">:</span> <span class="token string">&quot;https://blog.csdn.net/wang_yu_shun/article/details/123650469&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> code <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">&quot;vue2\u5B98\u65B9\u6587\u6863&quot;</span><span class="token punctuation">,</span>
    link<span class="token operator">:</span> <span class="token string">&quot;https://cn.vuejs.org/&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">&quot;vue3\u5B98\u65B9\u6587\u6863&quot;</span><span class="token punctuation">,</span>
    link<span class="token operator">:</span> <span class="token string">&quot;https://staging-cn.vuejs.org/&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> good <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">&quot;\u5728\u7EBF\u9884\u89C8\u5236\u4F5Cxmind&quot;</span><span class="token punctuation">,</span>
    link<span class="token operator">:</span> <span class="token string">&quot;https://xiaojuzi.fun/Xminder/edit.html&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">&quot;BEJSON2011&quot;</span><span class="token punctuation">,</span>
    link<span class="token operator">:</span> <span class="token string">&quot;https://www.bejson.com/&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">&quot;cnpm&quot;</span><span class="token punctuation">,</span>
    link<span class="token operator">:</span> <span class="token string">&quot;https://npmmirror.com/&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">&quot;\u534E\u4E3A\u955C\u50CF&quot;</span><span class="token punctuation">,</span>
    link<span class="token operator">:</span> <span class="token string">&quot;https://mirrors.huaweicloud.com/&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">&quot;tldraw&quot;</span><span class="token punctuation">,</span>
    link<span class="token operator">:</span> <span class="token string">&quot;https://www.tldraw.com/&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span><span class="token string">&quot;\u4E00\u7BC7\u8BA9\u4F60\u5B8C\u5168\u591F\u7528TS\u7684\u6307\u5357&quot;</span><span class="token punctuation">,</span>
    link<span class="token operator">:</span><span class="token string">&quot;https://juejin.cn/post/7088304364078497800&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> interest <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">&quot;Five\u52A8\u6F2B&quot;</span><span class="token punctuation">,</span>
  link<span class="token operator">:</span> <span class="token string">&quot;https://www.fivedongman.com/&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> work<span class="token operator">=</span><span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  title<span class="token operator">:</span><span class="token string">&quot;\u8F6F2&quot;</span><span class="token punctuation">,</span>
  link<span class="token operator">:</span><span class="token string">&quot;http://www.xmsoft.com/pzt/fg/index.html?parkCd=02&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  blog<span class="token punctuation">,</span>
  code<span class="token punctuation">,</span>
  good<span class="token punctuation">,</span>
  interest<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,2),c=[o];function e(u,l){return s(),a("div",null,c)}var k=n(p,[["render",e],["__file","data.html.vue"]]);export{k as default};
