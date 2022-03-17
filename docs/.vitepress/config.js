import { defineConfig } from 'vitepress'
export default defineConfig({
    title: "前端收藏家",
    description: "前端收藏家",
    themeConfig: {
        nav: [
            {
                text: "架构配置(暂无)",
                link: "/framework/",

            },
            {
                text: "功能库",
                link: "/function/"
            },
            {
                text: "疑难杂症",
                link: "/question/"
            },
            // {
            //     text: "我想开发一个 xxx",
            //     link: "/ido/"
            // },
            {
                text: "关于",
                link: "/about/readme"
            }
        ],
        sidebar: false
        // sidebar: sidebarData,
    },
})