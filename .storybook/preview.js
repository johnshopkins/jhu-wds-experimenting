/** @type { import('@storybook/html').Preview } */

import '../src/shared/scss/styles.scss';
import { html } from './format';

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
        excludeDecorators: true,
        transform: html,
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
