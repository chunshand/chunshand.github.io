import{_ as s,o as a,c as n,O as t}from"./chunks/framework.cc2ec653.js";const u=JSON.parse('{"title":"github代码推送问题着实难受啊","description":"经常github仓库推送代码，难受的一匹，好像找到了解决办法，记录一下。","frontmatter":{"date":"2022-12-06T00:00:00.000Z","title":"github代码推送问题着实难受啊","tags":["git","github","ssh"],"description":"经常github仓库推送代码，难受的一匹，好像找到了解决办法，记录一下。"},"headers":[],"relativePath":"posts/0011.md"}'),l={name:"posts/0011.md"},e=t(`<h1 id="github代码推送问题" tabindex="-1">github代码推送问题 <a class="header-anchor" href="#github代码推送问题" aria-label="Permalink to &quot;github代码推送问题&quot;">​</a></h1><p>方案：https方式换成ssh方式</p><h2 id="git-ssh-生成" tabindex="-1">git ssh 生成 <a class="header-anchor" href="#git-ssh-生成" aria-label="Permalink to &quot;git ssh 生成&quot;">​</a></h2><p>假如已经生成的话，可以略过此步骤。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># </span></span>
<span class="line"><span style="color:#FFCB6B;">ssh-keygen</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rsa</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-C</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">你的邮箱</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 回车 后续步骤为：</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 确认rsa文件位置 回车</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 确认ssh文件地址 回车</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 两次 passphrase 输入 回车</span></span></code></pre></div><h2 id="github-配置ssh" tabindex="-1">github 配置ssh <a class="header-anchor" href="#github-配置ssh" aria-label="Permalink to &quot;github 配置ssh&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 1.打开github网站</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 2.进入setting页</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 3.选择 SSH and GPG keys 菜单</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 4.点击 new SSH key</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 5.title 位置自定义输入，key 为 id_rsa.pub文件内容（默认地址为c:/用户名/.ssh/下）</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 6.add SSH key</span></span></code></pre></div><h2 id="修改仓库远程地址" tabindex="-1">修改仓库远程地址 <a class="header-anchor" href="#修改仓库远程地址" aria-label="Permalink to &quot;修改仓库远程地址&quot;">​</a></h2><ul><li><strong>git 小乌龟</strong></li></ul><p>因为仓库下拉代码时，使用的是https方式，需要将远端地址，修改成ssh地址。</p><p>我是用的是git小乌龟，所以我直接在 <code>设置-&gt;git-&gt;远端-&gt;origin-&gt;URL</code>直接进行了修改保存。</p><p>对于小乌龟有一个问题需要注意。</p><p><code>设置-&gt;网络-&gt;SSH-&gt;SSH 客户端(S)</code></p><p>需要修改地址为 git安装位置下<code>usr/bin/ssh.exe</code>，默认的 ssh.exe 并不能正常完成推送。</p><ul><li><strong>命令行</strong></li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 删除远端地址</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 添加远端地址</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">ur</span><span style="color:#A6ACCD;">l</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># url 为ssh地址！！！</span></span></code></pre></div><h2 id="最后" tabindex="-1">最后 <a class="header-anchor" href="#最后" aria-label="Permalink to &quot;最后&quot;">​</a></h2><p>就可以正常玩耍了！</p>`,18),o=[e];function p(i,c,r,h,y,d){return a(),n("div",null,o)}const C=s(l,[["render",p]]);export{u as __pageData,C as default};