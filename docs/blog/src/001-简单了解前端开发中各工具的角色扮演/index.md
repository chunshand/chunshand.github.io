# 001-简单了解前端开发中各工具的角色扮演



> 我们在使用脚手架 `(vue-cli,create-react-app,vite)` 或模板的时候，本身会自带一些配置文件，那这些的配置文件对应的着什么，功能又是什么呢？通过这个角度来进一步了解背后的了库 都做了什么？



> 描述的内容并不会很细，只是作为了解入门，为了了解更多每个内容下 我都会添加参考地址 可供参考学习使用

[[toc]]

## `package.json` 包配置

`package.json` 使用 `npm` 的配置文件，也是一个`node`项目的项目设置。里面有着很多的字段。

 - `package.json`可通过 `npm init` 或 `npm init -y` 前者需要一步一步手动设置
 - 常用字段了解
   - `name` 项目名称
   - `version` 项目版本
   - `license` 项目协议
   - `scripts` 项目脚本命令，比如开发启动，生产启动，编译，代码检查等等
   - `devDependencies` 开发中使用的依赖
   - `dependencies` 生产中使用依赖

可以开看:https://blog.csdn.net/qq_34703156/article/details/121401990

## `.gitignore` git忽略

我们的项目，基本上都会用到`git`进行版本控制，让我们有了可以吃`后悔药`的能力。而`.gitignore`文件的配置则是描述了，哪些文件不被`git`关心。
- 例如我们的 `node_modules` 文件夹 则会在`.gitignore`里书写 `/node_modules`，协同开发的小伙伴在拉取代码的时候则不会下载到这个文件夹里的内容。注：每个书写的设置 独占一行

## `.eslintrc.{js,yml,json}` 代码检查

`eslint`会让我们的代码有了规范性的约束。例如：函数名后必须有一个空格、函数名首字母大写、函数内容逻辑复杂度不能超过10 等等

那`.eslintrc.{js,yml,json}` 则是设置了这些规则，也就是 `rules`

例子： 可通过`eslint --init `创建 `.eslintrc` 文件
```json
{
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    }
}
```
`rules` 的 `key` 则为规则名称，`value` 则是针对规则的配置

`value` 可以是数组，也可以是字符串

### **规则等级**
- `off` 关闭 
- `warn` 警告
- `error` 错误


### **规则参数**
- 默认，当`value`为字符时，规则参数则是默认值
- 自定义，自定义时`value`为数组，数组的0+下标则是规则的参数

关于规则参考：https://eslint.bootcss.com/docs/rules/

### **还有`extends`字段**

```js
{
    extends: [
        'plugin:vue/vue3-recommended',
        'standard',
        'prettier',
        'plugin:prettier/recommended',
  ],
}

```
`eslint` 有着一些常用的预设规则，但是对于类似`vue` `jsx` 等情况，则可以通过 `extends` 拓展规则，例如 `vue` 的 `plugin:vue/essential` 

### **命令行**
我们既然有了规则，那就需要检查啊，怎么去检查代码的正确的书写

- 全局安装 `npm i -g eslint`
- `eslint -c 配置文件`

参考：https://eslint.bootcss.com/docs/user-guide/command-line-interface


## `.prettierrc` 代码格式化

代码格式化`prettierrc`，需要配合代码检查，也就是`eslint`,共同完成。

因为我们的代码检查有很多规则，但是我们在书写的时候，并不会是完全按照规则书写，在检查前，或者我们触发格式化命令时，将我们的代码，格式化我们代码检查规则指定的格式，来减少我们书写代码的工作量。

此时的步骤则是：
- 书写代码
- `prettierrc`格式化代码
- `eslint`代码检查
- 进行下一步操作

是不是就很`nice`


## `tsconfig.config` TS配置

作为一个前端，你是否开始了 `ts` 项目代码的编写。那`ts`也有配置文件

vscode 针对`tsconfig.config`配置项目，也有着良好的代码提示

### **安装**

`npm install -g typescript`

### **创建 config**

`tsc --init`

**常用字段**
- `include` 和 `exclude` 指定一个文件glob匹配模式列表
- `compilerOptions` 可以被忽略 [完整编译选项](https://www.tslang.cn/docs/handbook/compiler-options.html)
  - `target` 指定目标版本 例如 `es2015 es2016 esnext`
  - `types` 类型生命文件列表,设置后，方便我们开发时更快速的了解指定的声明信息 例如：`vite/client`:vite的声明 `node`:标准库的声明 `element-plus/global`:elementUI组件库声明。声明后，大大提升了使用体验，提示飞起
  - `paths` 声明映射，你有没有遇到，我在`vite`里 `webpack`里设置了别名，但是我在`vscode`还是报错提示。那是因为 `ts` 中`paths`没有设置


参考：https://www.tslang.cn/docs/handbook/tsconfig-json.html

## `.postcss` 编译CSS

`postcss` 是`css`的编译工具，类似于`babel`对`js`的处理。不同浏览器对于`js`的兼容不同，所以需要使用`babel`对`js`进行进一步的加工，达到浏览器指定的`js`代码。那`css`也会有这样的问题，不同浏览器对于同一种效果有着不同的写法，属性之类的。那就需要`postcss`来处理`css`了。

具体它可以做什么？
- 语法转换
- px转rem
- 自动补全浏览器前缀
- 代码压缩
- 等等

参考：https://www.postcss.com.cn/


<!-- ## `.vscode`

回到我们使用的`vscode` 编辑器了。

- `.vscode` 只对当前项目起作用
  - `settings.json` 配置文件 -->





