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
  organizationName: 'lynkit',
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
          src: 'img/logo1.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'Introduce',
          },
          {
            type: 'doc',
            docId: 'components/index',
            position: 'right',
            label: 'UI',
          },
          {
            type: 'doc',
            docId: 'hooks/index',
            position: 'right',
            label: 'Hooks',
          },
           {
            type: 'doc',
            docId: 'api/index',
            position: 'right',
            label: 'API',
          },
          {
            type: 'doc',
            docId: 'icons/index',
            position: 'right',
            label: 'Icons',
          },
          {
            href: 'https://github.com/LynnCen/LynKit',
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
                href: 'https://github.com/LynnCen/LynKit',
              },
              {
                label: 'Issues',
                href: 'https://github.com/LynnCen/LynKit/issues',
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

  themes: ['@docusaurus/theme-live-codeblock'],

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
    function tailwindcssPlugin(context, options) {
      return {
        name: 'custom-webpack-plugin',
        configureWebpack(config, isServer, utils) {
          return {
            resolve: {
              alias: {
                '@lynkit/hooks': require.resolve('../packages/hooks/src'),
              },
            },
          };
        },
      };
    },
  ],
}

export default config 