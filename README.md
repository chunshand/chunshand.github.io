### 前端收藏家


#### 使用


```
yarn run dev 开发启动
yarn run build 编译
yarn run deploy 编译并推送到 git page
yarn run glob config更新

```

#### 目录结构

```
+---docs
    +---framework 框架配置
    +---function  功能库
    +---question  功能库
        +---src
            +---[name]
                +---index.md    正文内容
                +---config.json 配置参数
        +---index.md
        +---type.json
        +---data.json 自动生成 无需关注
    +---public 公共目录
    +---about 关于
+---scripts 脚本
```

