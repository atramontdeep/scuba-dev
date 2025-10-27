import { mergeConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

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
      plugins: [vue(), vueJsx()],
      esbuild: {
        loader: 'jsx',
        include: /src\/.*\.jsx?$/,
      },
      optimizeDeps: {
        esbuildOptions: {
          loader: {
            '.js': 'jsx',
            '.jsx': 'jsx',
          },
        },
      },
    });
  },
};

export default config;
