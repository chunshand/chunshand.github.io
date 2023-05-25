import{_ as s,o as a,c as l,O as n}from"./chunks/framework.cc2ec653.js";const C=JSON.parse('{"title":"关于vue中style的scoped","description":"scoped属性的设置带来了什么？父组件与子组件设置与不设置的区别是什么？","frontmatter":{"date":"2022-11-09T00:00:00.000Z","title":"关于vue中style的scoped","tags":["vue"],"description":"scoped属性的设置带来了什么？父组件与子组件设置与不设置的区别是什么？"},"headers":[],"relativePath":"posts/0004.md"}'),o={name:"posts/0004.md"},p=n(`<h1 id="关于-vue中style的scoped" tabindex="-1">关于 vue中style的scoped <a class="header-anchor" href="#关于-vue中style的scoped" aria-label="Permalink to &quot;关于 vue中style的scoped&quot;">​</a></h1><p><strong>代码：</strong></p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">block</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">block</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">black</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p><code>&lt;style&gt;</code>标签设置<code>scoped</code>，当前组件元素内容均会添加<code>[data-v-xxx]</code>属性，形成作用域。样式编译后：</p><ul><li>未设置<code>scoped</code></li></ul><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">block</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">black</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><ul><li>设置<code>scoped</code></li></ul><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">block</span><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">data-v-xxx</span><span style="color:#89DDFF;">]{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">black</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>TODO</p>`,9),e=[p];function t(c,r,D,F,y,i){return a(),l("div",null,e)}const u=s(o,[["render",t]]);export{C as __pageData,u as default};
