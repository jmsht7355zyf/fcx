module.exports = {
    title: '凡尘轩',
    description: '凡尘若水，冷暖自知',
    base: '/blog/' ,
    // head头
    head:[
      ['mata ', {'http-equiv':"Pragma",content:"no-cache"}],
      ['mata ', {'http-equiv':"Cache-Control",content:"no-cache"}],
      ['mata  ', {'http-equiv':"Expires",content:"0"}],
    ],
    plugins: {
        "vuepress-plugin-auto-sidebar": {}
      },
    themeConfig: {
        // logo: '/public/logo.png',
        smoothScroll: true,
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