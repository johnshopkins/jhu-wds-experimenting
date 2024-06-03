/** @type { import('@storybook/html').Preview } */

import '../src/shared/scss/styles.scss';

/**
 * Cannot use prettier3 (installed with storybook) because prettier3
 * is async and storybook expects a string response (not a promise).
 * It is not possible to make synchronous prettier work in the browser:
 * https://github.com/prettier/prettier-synchronized/issues/15
 * 
 * Install prettier 2 alongside prettier 3:
 * npm install prettier2@npm:prettier@2 --save-dev
 */
import prettier from 'prettier2';
import HTMLParser from 'prettier2/parser-html';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      source: {
        transform: (src) => prettier.format(src, {
          parser: 'html',
          plugins: [HTMLParser],
          htmlWhitespaceSensitivity: 'ignore',
          tabWidth: 2,
          printWidth: 100
        }),
      }
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
    /**
     * I'm using our breakpoints for now, but we can also add specific devices:
     * https://storybook.js.org/docs/essentials/viewport#use-a-detailed-set-of-devices
     */
    viewport: {
      viewports: {
        hand: {
          name: "Hand",
          styles: {
            width: "576px",
            height: "384px"
          }
        },
        desk: {
          name: "Desk",
          styles: {
            width: "864px",
            height: "576px"
          }
        },
        wall: {
          name: "Wall",
          styles: {
            width: "1296px",
            height: "768px"
          }
        },
        jumbotron: {
          name: "Jumbotron",
          styles: {
            width: "1728px",
            height: "960px"
          }
        },
      }
    },
  },
};

export default preview;
