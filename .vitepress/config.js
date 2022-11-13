const { getPosts, generatePaginationPages } = require('./theme/serverUtils')

async function config() {
    const pageSize = 10
    await generatePaginationPages(pageSize)
    return {

        title: 'blog',
        base: '/',
        description: '前端,博客,javascript,es6,vue,react',
        ignoreDeadLinks: true,
        themeConfig: {
            posts: await getPosts(),
            pageSize: pageSize,
            website: 'https://github.com/chunshand', //copyright link
            nav: [
                { text: 'Home', link: '/' },
                { text: 'Archives', link: '/pages/archives' },
                { text: 'Tags', link: '/pages/tags' },
                { text: 'links', link: '/pages/links' },
                { text: 'About', link: '/pages/about' }
                // { text: 'Airene', link: 'http://airene.net' }  -- External link test
            ],
            //outline:[2,3],
            outlineTitle: '文章摘要',
            socialLinks: [{ icon: 'github', link: 'https://github.com/chunshand' }],
        },
        srcExclude: ['README.md'], // exclude the README.md , needn't to compiler

        vite: {
            //build: { minify: false }
            server: { port: 5000 },
        },
        /*
      optimizeDeps: {
          keepNames: true
      }
      */
    }
}

module.exports = config()
