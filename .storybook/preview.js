/** @type { import('@storybook/html').Preview } */

import '../src/shared/scss/styles.scss';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          'Getting Started', 
          'System',
          'Components',
        ],
      },
    },
  },
};

export default preview;
