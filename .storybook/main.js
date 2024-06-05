/** @type { import('@storybook/html-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-a11y",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-links",
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
