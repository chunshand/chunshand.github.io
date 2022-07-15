import{_ as t,o as e,c as a,l as o,T as r,F as c,a as s,e as D,f as l}from"./app.838d77cc.js";var i="/assets/teleporetTo.001.f1a59f14.png",F="/assets/teleporetTo.002.745d924a.png";const y={},d=s("div",{class:"w-full h-32 flex justify-center items-center text-white bg-teal-200"},[s("p",null,"\u7EC4\u4EF6\u5185\u5BB9")],-1),_=s("br",null,null,-1),u=s("div",{class:"w-32 h-32 text-center text-white bg-yellow-400 fixed z-30 right-10 top-20"},[s("p",null,"\u6D4F\u89C8\u5668\u6D6E\u52A8\u7684 teleport \u5185\u5BB9")],-1);function h(n,p){return e(),a(c,null,[d,_,(e(),o(r,{to:"#app"},[u]))],64)}var b=t(y,[["render",h]]);const g=l('<h1 id="teleport-to" tabindex="-1">Teleport to <a class="header-anchor" href="#teleport-to" aria-hidden="true">#</a></h1><p>Teleport \u63D0\u4F9B\u4E86\u4E00\u79CD\u5E72\u51C0\u7684\u65B9\u6CD5\uFF0C\u5141\u8BB8\u6211\u4EEC\u63A7\u5236\u5728 DOM \u4E2D\u54EA\u4E2A\u7236\u8282\u70B9\u4E0B\u6E32\u67D3\u4E86 HTML\uFF0C\u800C\u4E0D\u5FC5\u6C42\u52A9\u4E8E\u5168\u5C40\u72B6\u6001\u6216\u5C06\u5176\u62C6\u5206\u4E3A\u4E24\u4E2A\u7EC4\u4EF6\u3002</p><ul><li>props <ul><li>to string \u6307\u4EE3\u5B50\u7EC4\u4EF6\u79FB\u52A8\u6E32\u67D3\u5230\u54EA\u4E2A\u7236\u7EC4\u4EF6\u53BB \u4E00\u822C\u4F1A\u5199:body #id\u9009\u62E9\u5668\u5B57\u7B26</li><li>disabled bool \u662F\u5426\u53EF\u4EE5\u79FB\u52A8</li></ul></li></ul><p><a href="https://v3.cn.vuejs.org/guide/teleport.html#teleport" target="_blank" rel="noopener noreferrer">https://v3.cn.vuejs.org/guide/teleport.html#teleport</a></p><h2 id="\u5C1D\u8BD5\u4E0B" tabindex="-1">\u5C1D\u8BD5\u4E0B <a class="header-anchor" href="#\u5C1D\u8BD5\u4E0B" aria-hidden="true">#</a></h2>',5),m=l(`<div class="language-vue line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"> w-full h-32  flex justify-center items-center text-white bg-teal-200</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u7EC4\u4EF6\u5185\u5BB9</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">br</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">teleport</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">to</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">w-32 h-32 text-center text-white  bg-yellow-400 fixed z-30 right-10 top-20</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u6D4F\u89C8\u5668\u6D6E\u52A8\u7684 teleport \u5185\u5BB9</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">teleport</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><code> teleport \u5185\u5BB9</code> \u5176\u5B9E\u5DF2\u7ECF\u4E0D\u5728 <code>\u7EC4\u4EF6\u5185\u5BB9</code>\u540E\u8FB9\u4E86\uFF0C\u4E3A\u4E86\u65B9\u4FBF\u89C2\u770B\uFF0C\u5C06 <code>teleport \u5185\u5BB9</code>\u8BBE\u7F6E\u6210\u4E86\u6D4F\u89C8\u5668\u5B9A\u4F4D\uFF0C\u63A5\u4E0B\u6765\u770B\u4E0B <code>dom \u6811\u7ED3\u6784</code></p><p><img src="`+i+'" alt="./assets/teleporetTo.001.png"></p><p>\u53EF\u4EE5\u770B\u5230 <code>br</code> \u540E\u8FB9\u6CA1\u6709\u4E1C\u897F\u4E86\uFF0C\u53BB\u4E86\u54EA\u91CC\u4E86\u5462\uFF1F</p><p><img src="'+F+'" alt="./assets/teleporetTo.001.png"></p><p>\u56E0\u4E3A\u6211\u4EEC\u8BBE\u7F6E <code>to</code> \u4E3A <code>#app</code></p><h2 id="\u6CE8" tabindex="-1">\u6CE8 <a class="header-anchor" href="#\u6CE8" aria-hidden="true">#</a></h2><p>teleport \u6267\u884C\u7684 to \u7684\u5143\u7D20\uFF0C\u786E\u4FDD\u80FD\u591F\u5728\u5F53\u524D\u7EC4\u4EF6\u751F\u6210\u524D\u524D\u80FD\u83B7\u53D6\u5230\uFF0C\u5426\u5219\u4E0D\u751F\u6548\u3002</p>',8),v=JSON.parse('{"title":"Teleport to","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5C1D\u8BD5\u4E0B","slug":"\u5C1D\u8BD5\u4E0B"},{"level":2,"title":"\u6CE8","slug":"\u6CE8"}],"relativePath":"base/vue/001.md"}'),C={name:"base/vue/001.md"},T=Object.assign(C,{setup(n){return(p,A)=>(e(),a("div",null,[g,D(b),m]))}});export{v as __pageData,T as default};