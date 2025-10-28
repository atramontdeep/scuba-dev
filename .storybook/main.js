const { mergeConfig } = require('vite');

/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@storybook/addon-docs'
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  features: {
    buildStoriesJson: true
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [
        (await import('@vitejs/plugin-vue')).default(),
        (await import('@vitejs/plugin-vue-jsx')).default()
      ],
      define: {
        'process.env': {},
        global: 'globalThis',
      },
      resolve: {
        alias: {
          '@': '/src',
        },
      },
      optimizeDeps: {
        include: ['vue'],
      },
    });
  },
};

module.exports = config;