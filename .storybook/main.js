/** @type { import('@storybook/html-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    ({
      name: '@storybook/addon-styling-webpack',
      options: {
        rules: [
          {
            test: /\.(css|sass|scss)$/,
            use: [
              'style-loader',
              'css-loader',
              'sass-loader',
            ],
          }
        ]
      }
    })
  ],
  framework: {
    name: "@storybook/html-webpack5",
    options: {},
  },
};

export default config;
