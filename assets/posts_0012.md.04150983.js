import{_ as s,o as n,c as a,O as l}from"./chunks/framework.cc2ec653.js";const d=JSON.parse('{"title":"了解unplugin体系，以及简单使用","description":"unplugin 是一个为 Vite、Rollup、Webpack 等构建工具开发的统一插件系统，nice。","frontmatter":{"date":"2022-12-13T00:00:00.000Z","title":"了解unplugin体系，以及简单使用","tags":["unplugin","plugin"],"description":"unplugin 是一个为 Vite、Rollup、Webpack 等构建工具开发的统一插件系统，nice。"},"headers":[],"relativePath":"posts/0012.md"}'),o={name:"posts/0012.md"},p=l(`<h1 id="了解unplugin体系-以及简单使用" tabindex="-1">了解unplugin体系，以及简单使用 <a class="header-anchor" href="#了解unplugin体系-以及简单使用" aria-label="Permalink to &quot;了解unplugin体系，以及简单使用&quot;">​</a></h1><p>unplugin 是一个为 Vite、Rollup、Webpack 等构建工具开发的统一插件系统，nice。可以直接生成针对多个平台的插件系统，可谓是一劳永逸。</p><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createUnplugin</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">unplugin</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> unplugin </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createUnplugin</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">options</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">UserOptions</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">unplugin-prefixed-name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// webpack&#39;s id filter is outside of loader logic,</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// an additional hook is needed for better perf on webpack</span></span>
<span class="line"><span style="color:#F07178;">    transformInclude </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">id</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">endsWith</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// just like rollup transform</span></span>
<span class="line"><span style="color:#F07178;">    transform </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">code</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">code</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">replace</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">&lt;template&gt;</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">&lt;template&gt;&lt;div&gt;Injected&lt;/div&gt;</span><span style="color:#89DDFF;">\`</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// more hooks coming</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> vitePlugin </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> unplugin</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vite</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> rollupPlugin </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> unplugin</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">rollup</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> webpackPlugin </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> unplugin</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">webpack</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> esbuildPlugin </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> unplugin</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">esbuild</span></span></code></pre></div><p>原文：unplugin extends the excellent Rollup plugin API as the unified plugin interface and provides a compatible layer base on the build tools used with.</p><p>翻译：unplugin扩展了出色的Rollup插件API作为统一的插件接口，并提供了一个兼容的构建工具层。</p><p>所以说是在Rollup插件API基础上进行的兼容，所以如果了解Rollup插件的话对于unplugin更加得心应手。</p><p>可以先来看看 Rollup 官方文档上的流程图，加深印象。</p><img src="https://rollupjs.org/graphs/build-hooks.svg"><h2 id="name" tabindex="-1">name <a class="header-anchor" href="#name" aria-label="Permalink to &quot;name&quot;">​</a></h2><p>插件名称，不过使用 unplugin 开发的插件，建议添加unplugin-前缀，以及package.json添加unplugin关键词。</p><h2 id="enforce" tabindex="-1">enforce <a class="header-anchor" href="#enforce" aria-label="Permalink to &quot;enforce&quot;">​</a></h2><p>插件执行顺序</p><p>&quot;pre&quot; | &quot;post&quot; | null</p><h2 id="buildstart" tabindex="-1">buildStart <a class="header-anchor" href="#buildstart" aria-label="Permalink to &quot;buildStart&quot;">​</a></h2><p>构建开始</p><h2 id="resolveid" tabindex="-1">resolveId <a class="header-anchor" href="#resolveid" aria-label="Permalink to &quot;resolveId&quot;">​</a></h2><h2 id="loadinclude" tabindex="-1">loadInclude <a class="header-anchor" href="#loadinclude" aria-label="Permalink to &quot;loadInclude&quot;">​</a></h2><h2 id="transforminclude" tabindex="-1">transformInclude <a class="header-anchor" href="#transforminclude" aria-label="Permalink to &quot;transformInclude&quot;">​</a></h2><h2 id="transform" tabindex="-1">transform <a class="header-anchor" href="#transform" aria-label="Permalink to &quot;transform&quot;">​</a></h2><p>转换</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * code 代码内容</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * id 文件地址</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#82AAFF;">transform</span><span style="color:#A6ACCD;"> (code</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">id) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">code</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">replace</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">&lt;template&gt;</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">&lt;template&gt;&lt;div&gt;Injected&lt;/div&gt;</span><span style="color:#89DDFF;">\`</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">},</span></span></code></pre></div><h2 id="buildend" tabindex="-1">buildEnd <a class="header-anchor" href="#buildend" aria-label="Permalink to &quot;buildEnd&quot;">​</a></h2><p>构建结束</p>`,24),e=[p];function t(c,r,i,y,D,F){return n(),a("div",null,e)}const A=s(o,[["render",t]]);export{d as __pageData,A as default};
