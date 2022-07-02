import{_ as n,o as s,c as a,b as t}from"./app.8bd6da0a.js";const p={},o=t(`<h2 id="\u914D\u7F6Ewebpack" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6Ewebpack" aria-hidden="true">#</a> \u914D\u7F6Ewebpack</h2><div class="language-json ext-json"><pre class="language-json"><code><span class="token comment">//\u6307\u5B9A\u7248\u672C</span>
 <span class="token punctuation">{</span>
    <span class="token property">&quot;sass&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^1.52.3&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;sass-loader&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^10.1.1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;string-replace-loader&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.1.0&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u5F15\u5165\u6A21\u5757</span>
<span class="token keyword">const</span> StringReplacePlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;string-replace-loader&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u76F8\u5E94\u7684\u6253\u5305\u5DE5\u5177\u4E2D\u4F7F\u7528\u5DE5\u5177</span>
<span class="token function">chainWebpack</span><span class="token punctuation">(</span><span class="token parameter">config<span class="token punctuation">,</span> isServer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  config<span class="token punctuation">.</span>module
    <span class="token punctuation">.</span><span class="token function">rule</span><span class="token punctuation">(</span><span class="token string">&quot;strReplace&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.vue$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&quot;tring-replace-loader&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">loader</span><span class="token punctuation">(</span><span class="token string">&quot;string-replace-loader&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">options</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">search</span><span class="token operator">:</span> <span class="token string">&quot;/deep/&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">replace</span><span class="token operator">:</span> <span class="token string">&quot;::v-deep&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,3),e=[o];function c(u,l){return s(),a("div",null,e)}var i=n(p,[["render",c],["__file","webpack.html.vue"]]);export{i as default};
