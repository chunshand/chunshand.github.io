import{g as n,o as l,c as p,a as s,e as t,b as r,f as c}from"./app.fb4cb436.js";const u={class:"bg-yellow-100 w-full h-24 flex justify-center items-center rounded-sm mt-2"},F=n({__name:"index",setup(e){const a=()=>{"share"in navigator?navigator.share({text:"\u4E0D\u5377\u884C\u4E0D\u884C\u554A",url:"https://chunshand.github.io/",title:"\u4E0D\u8981\u5377\u4E86-\u6D4B\u8BD5shareapi",files:[]}):alert("\u6D4F\u89C8\u5668\u4E0D\u652F\u6301share api")};return(o,h)=>(l(),p("div",u,[s("div",{class:"px-4 py-2 bg-blue-500 text-white rounded-md text-sm cursor-pointer",onClick:a}," \u70B9\u51FB\u5206\u4EAB ")]))}}),D=s("h1",{id:"\u5B9E\u73B0web\u5206\u4EAB",tabindex:"-1"},[r("\u5B9E\u73B0web\u5206\u4EAB "),s("a",{class:"header-anchor",href:"#\u5B9E\u73B0web\u5206\u4EAB","aria-hidden":"true"},"#")],-1),y=c(`<h3 id="\u5F00\u53D1" tabindex="-1">\u5F00\u53D1 <a class="header-anchor" href="#\u5F00\u53D1" aria-hidden="true">#</a></h3><p>\u6B64\u5904\u7528\u5230\u7684\u662F Web Share API\uFF0C\u8BE5api\u5B58\u5728\u7740\u4E00\u5B9A\u7684\u517C\u5BB9\u95EE\u9898\uFF0C\u662F\u9700\u8981\u6CE8\u610F\u7684</p><p><a href="https://caniuse.com/?search=Web%20Share%20API" target="_blank" rel="noopener noreferrer">https://caniuse.com/?search=Web Share API</a></p><p>\u5B9E\u73B0\u8D77\u6765\u975E\u5E38\u7B80\u5355</p><div class="language-vue"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#A6ACCD;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> handleShare </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// interface ShareData {</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//     files?: File[];</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//     text?: string;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//     title?: string;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//     url?: string;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">share</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">in</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">navigator</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">navigator</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">share</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            text</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u4E0D\u5377\u884C\u4E0D\u884C\u554A</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            url</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://chunshand.github.io/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            title</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u4E0D\u8981\u5377\u4E86-\u6D4B\u8BD5shareapi</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            files</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> []</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">alert</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u6D4F\u89C8\u5668\u4E0D\u652F\u6301share api</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h3 id="\u6700\u540E" tabindex="-1">\u6700\u540E <a class="header-anchor" href="#\u6700\u540E" aria-hidden="true">#</a></h3><p><code>share api</code>\u7684\u89E6\u53D1\u5FC5\u987B\u662F\u7528\u6237\u64CD\u4F5C\u884C\u4E3A\u89E6\u53D1\uFF0C\u4F8B\u5982\u70B9\u51FB\u3002</p>`,7),d=JSON.parse('{"title":"\u5B9E\u73B0web\u5206\u4EAB","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u5F00\u53D1","slug":"\u5F00\u53D1"},{"level":3,"title":"\u6700\u540E","slug":"\u6700\u540E"}],"relativePath":"forward/003.md"}'),i={name:"forward/003.md"},C=n({...i,setup(e){return(a,o)=>(l(),p("div",null,[D,t(F),y]))}});export{d as __pageData,C as default};