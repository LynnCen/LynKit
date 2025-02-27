/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'intro',
    {
      type: 'category',
      label: '组件',
      items: [
        'components/index',
        'components/button',
        'components/input',
        'components/select',
      ],
    },
    {
      type: 'category',
      label: 'Hooks',
      items: ['hooks/index'],
    },
    {
      type: 'category',
      label: '图标',
      items: ['icons/index'],
    },
    {
      type: 'category',
      label: 'API',
      items: ['api/index'],
    },
  ],
};

module.exports = sidebars; 