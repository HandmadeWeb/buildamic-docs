module.exports = {
  // site config
  lang: 'en-US',
  title: 'Buildamic Documentation',
  description: 'This is my first VuePress site',

  // theme and its config
  theme: '@vuepress/theme-default',
  themeConfig: {
    docsDir: 'docs',
    repo: 'HandmadeWeb/buildamic-docs',
    logo: 'https://www.handmadeweb.com.au/wp-content/uploads/2015/04/Handmade-Web-and-Design-Logo-Black-200px.png',
    sidebar: [
      '/',
      '/getting-started',
      '/common-modules',
      '/advanced-modules',
      '/global-modules',
    ],
    nav: [
      {
        text: 'Admin',
        link: '/admin/#/',
      }
    ]
  },
}