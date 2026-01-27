/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  components: [
    {
      type: 'category',
      label: 'UI',
      items: [
        'components/index',
        'components/button',
        'components/input',
   
      ],
    },

  ],
  hooks: [
    {
      type: 'category',
      label: 'Hooks',
      items: [
        'hooks/index',
        'hooks/useSetState',
        'hooks/usePrevious',
        'hooks/useIsFirstRender',
        'hooks/useInterval',
        'hooks/usePollingAI',
      ],
    },
  ],
  icons: [
    {
      type: 'category',
      label: 'Icons',
      items: ['icons/index'],
    },
  ],
  api: [
    {
      type: 'category',
      label: 'API',
      items: [
        'api/index',
        'api/algorithm/LRU',
        'api/algorithm/exponentialBackoff',
        'api/throttle',
        'api/debounce',
      ],
    },
  ],
};

module.exports = sidebars; 