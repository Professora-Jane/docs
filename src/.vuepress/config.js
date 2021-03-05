const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Vuepress Docs Boilerplate',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  base: '/docs/',
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'pt-BR',
      title: 'Professora Jane',
      description: 'Documentação do projeto professora Jane'
    },
    '/en/': {
      lang: 'en-US', // this will be set as the lang attribute on <html>
      title: 'VuePress',
      description: 'Vue-powered Static Site Generator'
    },
  },

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    sidebarDepth: 2,
    locales: {
      '/': {
        repo: '',
        // text for the language dropdown
        selectText: 'Linguas',
        // label for this locale in the language dropdown
        label: 'Português',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Línguas',
        // text for the edit-on-github link
        editLinkText: 'Edit this page on GitHub',
        editLinks: false,
        docsDir: 'src',
        editLinkText: '',
        lastUpdated: false,
        nav: [
          {
            text: 'Planejamento',
            link: '/planning/',
          },
          {
            text: 'VuePress',
            link: 'https://v1.vuepress.vuejs.org'
          }
        ],
        sidebar: {
          '/planning/': [
            {
              title: 'Planejamento',
              collapsable: false,
              children: [
                'features',
              ]
            }
          ],
        },
      },
      '/en/': {
        repo: '',
        // text for the language dropdown
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: 'English',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Languages',
        // text for the edit-on-github link
        editLinkText: 'Edit this page on GitHub',
        editLinks: false,
        docsDir: 'src/en',
        editLinkText: '',
        lastUpdated: false,
        nav: [
          {
            text: 'Guide',
            link: '/guide/',
          },
          {
            text: 'Config',
            link: '/config/'
          },
          {
            text: 'VuePress',
            link: 'https://v1.vuepress.vuejs.org'
          }
        ],
        sidebar: {
          '/guide/': [
            {
              title: 'Guide',
              collapsable: false,
              children: [
                '',
                'using-vue',
              ]
            }
          ],
        },
      },
    },  
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
