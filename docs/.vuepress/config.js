module.exports = {
    title: '凡尘轩',
    description: '凡尘若水，冷暖自知',
    base: '/blog/' ,
    // head头
    head: [
      ['link',{rel:'icon',herf:'favicon.ico'}],
      ['mata ', {'http-equiv':"Pragma",content:"no-cache"}],
      ['mata ', {'http-equiv':"Cache-Control",content:"no-cache,must-revalidate"}],
      ['mata  ', {'http-equiv':"Expires",content:"0"}],
    ],
    plugins: {
        "vuepress-plugin-auto-sidebar": {}
      },
    heroImage: 'hero.png',
    themeConfig: {
        logo: 'logo.png',
        smoothScroll: true,
        displayAllHeaders: true ,
        sidebar: 'auto',
        '/zh/': {
            sidebar: 'auto'
          },
        nav: [
            { text: '首页', link: '/' },
            { text: '个人日记', link: '/Note/' },
            { text: '摘录笔记', link: '/Extract/' },
            { text: '中文文档', link: '/Doc/' },
            { text: '项目工程', link: '/Project/' },
            { text: '技术胶囊', link: '/Technology/' },
            {
              text: '关于本人',
                items: [
                  {text: '联系我', link: '/About/' },
                  { text: 'Github', link: 'https://github.com/jmsht7355zyf' },
                  { text: '码云', link: 'https://gitee.com/jmsht7355' },
                  { text: '掘金', link: 'https://juejin.cn/user/4424090522232510' },
                  { text: '知乎', link: 'https://www.zhihu.com/people/zheng-yi-fan-22' },
                  { text: '微博', link: 'https://weibo.com/jmsht7355/' },
                  { text: 'B站', link: 'https://space.bilibili.com/14080514' },
                ]
              }
          ],
      }
  }