import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LynKit',
  tagline: '轻量级 React 组件库',
  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'your-org',
  projectName: 'lynkit',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/your-org/lynkit/edit/main/docs/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      image: 'img/social-card.png',
      navbar: {
        title: 'LynKit',
        logo: {
          alt: 'LynKit Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '文档',
          },
          {
            type: 'doc',
            docId: 'components/index',
            position: 'left',
            label: '组件',
          },
          {
            type: 'dropdown',
            label: '更多',
            position: 'left',
            items: [
              {
                label: 'Hooks',
                to: '/docs/hooks',
              },
              {
                label: '图标',
                to: '/docs/icons',
              },
              {
                label: 'API',
                to: '/docs/api',
              },
            ],
          },
          {
            href: 'https://github.com/your-org/lynkit',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '快速开始',
                to: '/docs/intro',
              },
              {
                label: '组件',
                to: '/docs/components',
              },
            ],
          },
          {
            title: '资源',
            items: [
              {
                label: 'Hooks',
                to: '/docs/hooks',
              },
              {
                label: '图标',
                to: '/docs/icons',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/your-org/lynkit',
              },
              {
                label: 'Issues',
                href: 'https://github.com/your-org/lynkit/issues',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} LynKit. 基于 Docusaurus 构建。`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

  plugins: [
    async function tailwindPlugin() {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require('tailwindcss'))
          postcssOptions.plugins.push(require('autoprefixer'))
          return postcssOptions
        },
      }
    },
  ],
}

export default config 