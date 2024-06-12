import remarkGfm from 'remark-gfm';

const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-a11y",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-links",
    {
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
    },
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            // enables parsing of markdown tables (among other things)
            // see: https://github.com/remarkjs/remark-gfm
            remarkPlugins: [remarkGfm],
          },
        },
      },
    }
  ],
  framework: {
    name: "@storybook/html-webpack5",
    options: {},
  },
};

export default config;
