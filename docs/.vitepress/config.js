import { defineConfig } from 'vitepress'
export default defineConfig({
    title: "前端收藏家",
    description: "前端收藏家",
    markdown: {

    },
    themeConfig: {
        nav: [
            // {
            //     text: "架构配置(暂无)",
            //     link: "/framework/",

            // },
            {
                text: "功能库",
                link: "/function/"
            },
            {
                text: "常遇问题",
                link: "/question/"
            },
            {
                text: "随笔",
                link: "/blog/"
            },
            {
                text: "我想开发一个那什么",
                link: "/ido/"
            },
            {
                text: "分享",
                link: "/share/index"
            },
            {
                text: "学习笔记",
                items: [
                    {
                        text: "CSS新世界",
                        link: "/learn-notes/css-new-word/index"
                    },
                    {
                        text: "Vue的设计与实现",
                        link: "/learn-notes/vue-design-and-create/index"
                    },
                ]
            },
            // {
            //     text: "关于ME",
            //     link: "/about/readme"
            // },
            {
                text: "Github",
                link: "https://github.com/chunshand"
            }
        ],
        sidebar: false
        // sidebar: sidebarData,


    },
})