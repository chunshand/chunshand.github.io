# gh-pages



> `gh-pages`是一个帮助我们，推送`dist`到远端分支(`gh-pages`)的一个工具


[gh-pages github](https://github.com/tschaub/gh-pages)

### 常用命令

```
Usage: gh-pages [options]

Options:
  -V, --version            打印版本号
  -d, --dist <dist>        指定来源文件夹地址
  -s, --src <src>          Pattern used to select which files to publish (default: "**/*")
  -b, --branch <branch>    指定推送的分支 默认`gh-pages`
  -e, --dest <dest>        Target directory within the destination branch (relative to the root) (default: ".")
  -a, --add                Only add, and never remove existing files
  -x, --silent             Do not output the repository url
  -m, --message <message>  commit message (default: "Updates")
  -g, --tag <tag>          add tag to commit
  --git <git>              Path to git executable (default: "git")
  -t, --dotfiles           Include dotfiles
  -r, --repo <repo>        设置推送的远端地址
  -p, --depth <depth>      depth for clone (default: 1)
  -o, --remote <name>      The name of the remote (default: "origin")
  -u, --user <address>     The name and email of the user (defaults to the git config).  Format is "Your Name <email@example.com>".
  -v, --remove <pattern>   Remove files that match the given pattern (ignored if used together with --add). (default: ".")
  -n, --no-push            Commit only (with no push)
  -f, --no-history         Push force new commit without parent history
  --before-add <file>      Execute the function exported by <file> before "git add"
  -h, --help               打印帮助

```


在上面的 `options` 我们会用到 `-d` `-r` `-b` 即可


**很简单**

 - 比如说 `./dist` 是我们的网站页面文件夹的位置
 - `gh-pages -d ./dist -r [你的git远端地址] -b [远端分支名称]`


**最后**

- 不要再 `page` 设置时，设置对应的分支作为`page`的入口

