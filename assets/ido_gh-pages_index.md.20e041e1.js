import{_ as e,c as t,o,a}from"./app.4c0653c6.js";const f='{"title":"gh-pages","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u5E38\u7528\u547D\u4EE4","slug":"\u5E38\u7528\u547D\u4EE4"}],"relativePath":"ido/gh-pages/index.md"}',d={},n=a(`<h1 id="gh-pages" tabindex="-1">gh-pages <a class="header-anchor" href="#gh-pages" aria-hidden="true">#</a></h1><blockquote><p><code>gh-pages</code>\u662F\u4E00\u4E2A\u5E2E\u52A9\u6211\u4EEC\uFF0C\u63A8\u9001<code>dist</code>\u5230\u8FDC\u7AEF\u5206\u652F(<code>gh-pages</code>)\u7684\u4E00\u4E2A\u5DE5\u5177</p></blockquote><p><a href="https://github.com/tschaub/gh-pages" target="_blank" rel="noopener noreferrer">gh-pages github</a></p><h3 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1">\u5E38\u7528\u547D\u4EE4 <a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a></h3><div class="language-"><pre><code>Usage: gh-pages [options]

Options:
  -V, --version            \u6253\u5370\u7248\u672C\u53F7
  -d, --dist &lt;dist&gt;        \u6307\u5B9A\u6765\u6E90\u6587\u4EF6\u5939\u5730\u5740
  -s, --src &lt;src&gt;          Pattern used to select which files to publish (default: &quot;**/*&quot;)
  -b, --branch &lt;branch&gt;    \u6307\u5B9A\u63A8\u9001\u7684\u5206\u652F \u9ED8\u8BA4\`gh-pages\`
  -e, --dest &lt;dest&gt;        Target directory within the destination branch (relative to the root) (default: &quot;.&quot;)
  -a, --add                Only add, and never remove existing files
  -x, --silent             Do not output the repository url
  -m, --message &lt;message&gt;  commit message (default: &quot;Updates&quot;)
  -g, --tag &lt;tag&gt;          add tag to commit
  --git &lt;git&gt;              Path to git executable (default: &quot;git&quot;)
  -t, --dotfiles           Include dotfiles
  -r, --repo &lt;repo&gt;        \u8BBE\u7F6E\u63A8\u9001\u7684\u8FDC\u7AEF\u5730\u5740
  -p, --depth &lt;depth&gt;      depth for clone (default: 1)
  -o, --remote &lt;name&gt;      The name of the remote (default: &quot;origin&quot;)
  -u, --user &lt;address&gt;     The name and email of the user (defaults to the git config).  Format is &quot;Your Name &lt;email@example.com&gt;&quot;.
  -v, --remove &lt;pattern&gt;   Remove files that match the given pattern (ignored if used together with --add). (default: &quot;.&quot;)
  -n, --no-push            Commit only (with no push)
  -f, --no-history         Push force new commit without parent history
  --before-add &lt;file&gt;      Execute the function exported by &lt;file&gt; before &quot;git add&quot;
  -h, --help               \u6253\u5370\u5E2E\u52A9

</code></pre></div><p>\u5728\u4E0A\u9762\u7684 <code>options</code> \u6211\u4EEC\u4F1A\u7528\u5230 <code>-d</code> <code>-r</code> <code>-b</code> \u5373\u53EF</p><p><strong>\u5F88\u7B80\u5355</strong></p><ul><li>\u6BD4\u5982\u8BF4 <code>./dist</code> \u662F\u6211\u4EEC\u7684\u7F51\u7AD9\u9875\u9762\u6587\u4EF6\u5939\u7684\u4F4D\u7F6E</li><li><code>gh-pages -d ./dist -r [\u4F60\u7684git\u8FDC\u7AEF\u5730\u5740] -b [\u8FDC\u7AEF\u5206\u652F\u540D\u79F0]</code></li></ul><p><strong>\u6700\u540E</strong></p><ul><li>\u4E0D\u8981\u518D <code>page</code> \u8BBE\u7F6E\u65F6\uFF0C\u8BBE\u7F6E\u5BF9\u5E94\u7684\u5206\u652F\u4F5C\u4E3A<code>page</code>\u7684\u5165\u53E3</li></ul>`,10),s=[n];function i(r,g,l,c,h,u){return o(),t("div",null,s)}var m=e(d,[["render",i]]);export{f as __pageData,m as default};
