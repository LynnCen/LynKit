import { defineConfig } from 'rspress/config';
import { pluginPreview } from '@rspress/plugin-preview';
import path from 'path';

export default defineConfig({
  root: 'docs',
  outDir: 'doc_build',
  title: 'LynKit',
  description: '轻量级 React 组件库',

  themeConfig: {
    darkMode: true,
    nav: [
      { text: '指南', link: '/guide/introduction' },
      { text: '组件', link: '/components/overview' },
      { text: 'Hooks', link: '/hooks/overview' },
      { text: 'API', link: '/api/overview' },
      { text: '图标', link: '/icons/index' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '介绍', link: '/guide/introduction' },
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '主题定制', link: '/guide/theming' },
            { text: '更新日志', link: '/guide/changelog' },
          ],
        },
      ],
      '/components/': [
        {
          text: '组件',
          items: [
            { text: '总览', link: '/components/overview' },
            { text: 'Button 按钮', link: '/components/button' },
            { text: 'Input 输入框', link: '/components/input' },
            { text: 'Select 选择器', link: '/components/select' },
          ],
        },
      ],
      '/hooks/': [
        {
          text: 'Hooks',
          items: [
            { text: '总览', link: '/hooks/overview' },
            { text: 'useSetState', link: '/hooks/use-set-state' },
            { text: 'usePrevious', link: '/hooks/use-previous' },
            { text: 'useInterval', link: '/hooks/use-interval' },
            { text: 'useIsFirstRender', link: '/hooks/use-is-first-render' },
            { text: 'usePollingAI', link: '/hooks/use-polling-ai' },
          ],
        },
      ],
      '/api/': [
        {
          text: 'API',
          items: [
            { text: '总览', link: '/api/overview' },
            { text: 'debounce', link: '/api/debounce' },
            { text: 'throttle', link: '/api/throttle' },
            { text: 'LRUCache', link: '/api/lru-cache' },
            { text: 'ExponentialBackoff', link: '/api/exponential-backoff' },
          ],
        },
      ],
      '/icons/': [
        {
          text: '图标',
          items: [{ text: '图标库', link: '/icons/index' }],
        },
      ],
    },
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/LynnCen/LynKit',
      },
    ],
    footer: {
      message: 'Copyright © 2024 LynKit. Built with Rspress.',
    },
  },

  plugins: [
    pluginPreview({
      defaultRenderMode: 'preview',
      previewLanguages: ['jsx', 'tsx'],
    }),
  ],

  builderConfig: {
    resolve: {
      alias: {
        '@lynkit/ui$': path.resolve(__dirname, '../../packages/ui/es/index.js'),
        '@lynkit/ui/': path.resolve(__dirname, '../../packages/ui/es/'),
        '@lynkit/hooks$': path.resolve(__dirname, '../../packages/hooks/es/index.js'),
        '@lynkit/hooks/': path.resolve(__dirname, '../../packages/hooks/es/'),
        '@lynkit/api$': path.resolve(__dirname, '../../packages/api/es/index.js'),
        '@lynkit/api/': path.resolve(__dirname, '../../packages/api/es/'),
        '@lynkit/icons$': path.resolve(__dirname, '../../packages/icons/es/index.js'),
        '@lynkit/icons/': path.resolve(__dirname, '../../packages/icons/es/'),
      },
    },
    server: {
      port: 3000,
    },
  },

  markdown: {
    showLineNumbers: true,
  },
});
