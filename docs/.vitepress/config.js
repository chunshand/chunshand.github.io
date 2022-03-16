import { defineConfig } from 'vitepress'
export default defineConfig({
    title: "前端收藏家",
    description: "前端收藏家",
    themeConfig: {
        nav: [
            {
                text: "架构配置",
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
            {
                text: "关于",
                link: "/about/readme"
            }
        ],
        sidebar: false
        // sidebar: sidebarData,
    },
})