import{_ as s,o as a,c as n,h as l}from"./app.9d98c03f.js";const u=JSON.parse('{"title":"\u514D\u8D39\u5F00\u6E90\u7684\u6295\u5C4F\u8F6F\u4EF6","description":"\u624B\u673A\u9879\u76EE\u9A8C\u6536\uFF0C\u5C55\u793A\u7684\u65F6\u5019\uFF0C\u4F7F\u7528\u624B\u673A\u6295\u5C4F\u8F6F\u4EF6\u6210\u4E3A\u4E86\u4E00\u4E2A\u5C34\u5C2C\u7684\u70B9\u4E86\u3002","frontmatter":{"date":"2022-11-12T00:00:00.000Z","title":"\u514D\u8D39\u5F00\u6E90\u7684\u6295\u5C4F\u8F6F\u4EF6","tags":["\u6295\u5C4F"],"description":"\u624B\u673A\u9879\u76EE\u9A8C\u6536\uFF0C\u5C55\u793A\u7684\u65F6\u5019\uFF0C\u4F7F\u7528\u624B\u673A\u6295\u5C4F\u8F6F\u4EF6\u6210\u4E3A\u4E86\u4E00\u4E2A\u5C34\u5C2C\u7684\u70B9\u4E86\u3002"},"headers":[{"level":2,"title":"\u4F7F\u7528\u65B9\u6CD5","slug":"\u4F7F\u7528\u65B9\u6CD5","link":"#\u4F7F\u7528\u65B9\u6CD5","children":[]},{"level":2,"title":"\u6700\u540E","slug":"\u6700\u540E","link":"#\u6700\u540E","children":[]}],"relativePath":"posts/0005.md"}'),e={name:"posts/0005.md"},c=l(`<h1 id="\u514D\u8D39\u5F00\u6E90\u7684\u6295\u5C4F\u8F6F\u4EF6" tabindex="-1">\u514D\u8D39\u5F00\u6E90\u7684\u6295\u5C4F\u8F6F\u4EF6 <a class="header-anchor" href="#\u514D\u8D39\u5F00\u6E90\u7684\u6295\u5C4F\u8F6F\u4EF6" aria-hidden="true">#</a></h1><p>scrcpy \u662F\u4E00\u4E2A\u5F00\u6E90\u514D\u8D39\u6295\u5C4F\u8F6F\u4EF6\uFF0C\u5B89\u5353\u6295\u5C4F\u795E\u5668\u3002</p><p>\u4F7F\u7528\u524D\u63D0</p><ul><li><strong>\u5B89\u5353</strong></li><li><strong>\u624B\u673A\u5F00\u542F\u4E86\u5F00\u53D1\u8005\u8C03\u8BD5</strong></li></ul><h2 id="\u4F7F\u7528\u65B9\u6CD5" tabindex="-1">\u4F7F\u7528\u65B9\u6CD5 <a class="header-anchor" href="#\u4F7F\u7528\u65B9\u6CD5" aria-hidden="true">#</a></h2><p>\u5B89\u88C5\u6216\u4E0B\u8F7D scrcpy</p><ul><li>linux <code>apt install scrcpy</code></li><li>macOS <code>brew install scrcpy</code></li><li>windows <ul><li>\u4E0B\u8F7D <a href="https://github.com/Genymobile/scrcpy/releases/download/v1.24/scrcpy-win64-v1.24.zip" target="_blank" rel="noreferrer">https://github.com/Genymobile/scrcpy/releases/download/v1.24/scrcpy-win64-v1.24.zip</a></li><li><code>choco install scrcpy choco install adb</code></li><li><code>scoop install scrcpy scoop install adb </code></li></ul></li></ul><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># !!! \u624B\u673A\u5F00\u542F\u4E86\u5F00\u53D1\u8005\u8C03\u8BD5\uFF08\u8BBE\u7F6E \u7248\u672C\u53F7 \u8FDE\u63097\u6B21\uFF09</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># windows \u4E0B\u8F7D\u4E3A\u4F8B</span></span>
<span class="line"><span style="color:#676E95;"># \u89E3\u538B\u4E0B\u8F7D\u7684\u6587\u4EF6 cd \u89E3\u538B\u76EE\u5F55</span></span>
<span class="line"><span style="color:#676E95;"># \u624B\u673A\u6709\u7EBF\u8FDE\u63A5</span></span>
<span class="line"><span style="color:#A6ACCD;">./adb tcpip 5555</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u65E0\u7EBF\u8FDE\u63A5 ip \u4E3A\u624B\u673Aip \u624B\u673A\u548C\u7535\u8111\u9700\u8981\u5728\u540C\u4E00\u5C40\u57DF\u7F51</span></span>
<span class="line"><span style="color:#676E95;"># \u624B\u673Aip \u53EF\u901A\u8FC7\u67E5\u770B\u65E0\u7EBF\u8BE6\u60C5</span></span>
<span class="line"><span style="color:#A6ACCD;">./adb connect ip:5555</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u8FDE\u63A5\u6210\u529F\u540E \u76F4\u63A5\u6253\u5F00 scrcpy.exe \u5373\u53EF</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="\u6700\u540E" tabindex="-1">\u6700\u540E <a class="header-anchor" href="#\u6700\u540E" aria-hidden="true">#</a></h2><ul><li>\u5173\u4E8E\u66F4\u591A\u7684\u4F7F\u7528\u65B9\u6CD5\u53EF\u67E5\u770B scrcpy github \u9875\u9762</li><li>\u5730\u5740\uFF1A<a href="https://github.com/Genymobile/scrcpy" target="_blank" rel="noreferrer">https://github.com/Genymobile/scrcpy</a></li></ul>`,10),p=[c];function i(t,o,r,d,h,_){return a(),n("div",null,p)}const b=s(e,[["render",i]]);export{u as __pageData,b as default};