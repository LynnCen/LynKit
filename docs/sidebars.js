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
        'components/select',
      ],
    },

  ],
  hooks: [
    {
      type: 'category',
      label: 'Hooks',
      items: ['hooks/index'],
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
      items: ['api/index'],
    },
  ],
};

module.exports = sidebars; 