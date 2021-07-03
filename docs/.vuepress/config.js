module.exports = {
    title: '凡尘轩',
    description: '凡尘若水，冷暖自知',
    plugins: {
        "vuepress-plugin-auto-sidebar": {}
      },
    themeConfig: {
        // logo: '/public/logo.png',
        displayAllHeaders: true ,
        sidebar: 'auto',
        '/zh/': {
            sidebar: 'auto'
          },
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Note', link: '/Note/' },
            { text: 'Technology', link: '/Technology/' },
            {
                text: 'about',
                items: [
                  { text: 'github', link: 'https://github.com/jmsht7355zyf' },
                  { text: 'gitee', link: 'https://gitee.com/jmsht7355' }
                ]
              }
          ],
      }
  }