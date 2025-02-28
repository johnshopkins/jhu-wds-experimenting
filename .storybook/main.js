const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  staticDirs: ['../static'],

  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-viewport',
    '@whitespace/storybook-addon-html',
    '@storybook/experimental-addon-test',
    '@storybook/addon-a11y'
  ],

  core: {
    builder: '@storybook/builder-vite',
  },

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  docs: {}
};

export default config;
