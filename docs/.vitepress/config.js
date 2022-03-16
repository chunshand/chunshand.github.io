import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "前端打工人",
    description: "前端打工人",
    themeConfig: {
        // Type is `DefaultTheme.Config`
        nav: [
            {
                text: "架构配置",
                link: "/framework/"
            },
            {
                text: "功能库",
                link: "/function/"
            },
            {
                text: "疑难杂症",
                link: "/question/"
            }
        ]
    },
})