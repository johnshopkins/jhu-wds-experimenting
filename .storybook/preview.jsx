import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { DocsContainer } from "@storybook/addon-docs";
import { Unstyled } from "@storybook/blocks";
import { SyntaxHighlighter } from '@storybook/components';
import scss from 'react-syntax-highlighter/dist/esm/languages/prism/scss';
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash';
import php from 'react-syntax-highlighter/dist/esm/languages/prism/php';
import { html } from './lib/format';
import viewports from './viewports';
import { remove as removeTouchEvents } from '../src/shared/js/lib/touch-events';

import '../src/shared/js/vendor/modernizr';
import Logger from '../src/shared/js/lib/logger';
window.logger = new Logger();

import '../src/styles.scss';
import '../src/preview.scss';

SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('php', php);
SyntaxHighlighter.registerLanguage('scss', scss)

export default {
  beforeEach() {
    document.body.focus();
    removeTouchEvents();
  },
  decorators: [
    /**
     * Figures out the background color a story in the documentation should be.
     * Why is this necessary? Background colors assigned to stories are not used
     * in documentation mode if the docs are written in MDX.
     * 
     * This hack is based on a solution given in an issue about this problem:
     * https://github.com/storybookjs/storybook/issues/13323#issuecomment-2561731630
     */
    (Story, context) => {

      // note: pageId will be null in the test environment
      const pageId = new URLSearchParams(window.location.search).get('id');
      
      if (typeof context.parameters.backgrounds === 'undefined' || (pageId && !pageId.endsWith('--docs'))) {
        // story did not request a specific background color or this is not a docs page
        return <Story />;
      }

      // find requested background
      const requestedBackgroundName = context.parameters.backgrounds.default; // ex: 'dark'
      const requestedBackground = context.parameters.backgrounds.values.find(value => value.name === requestedBackgroundName);
      if (requestedBackground === 'undefined') {
        return <Story />;
      }

      const style = `.docs-story:has(#${context.canvasElement?.id}) { background-color: ${requestedBackground.value}; }`;
      return <><style>{style}</style><Story /></>;
    }
  ],
  parameters: {
    args: {
      className: { control: 'text' },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#fff',
        },
        {
          name: 'dark',
          value: '#31261d',
        },
      ],
    },
    docs: {
      source: {
        /**
         * Transforms source code before being rendered.
         * Documentation: https://storybook.js.org/docs/api/doc-blocks/doc-block-source#transform
         * @param {string} code 
         * @param {object} storyContext 
         * @returns string
         */
        transform: (code, storyContext) => {
          if (storyContext.moduleExport.render) {
            // Transforms React components to HTML. Each story have a dedicated render() function.
            // Render function documentation: https://storybook.js.org/docs/api/csf#custom-render-functions
            return html(renderToStaticMarkup(storyContext.moduleExport.render()))
          }

          logger.log(`${storyContext.title}::${storyContext.story} does not have a render function.`);
          return html(code);
        },
      },
      container: ({ children, context }) => (
        <DocsContainer context={context}>
          <Unstyled>
              {children}
          </Unstyled>
        </DocsContainer>
      ),
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'Getting Started', 
          [
            'Introduction',
            'Quick Start',
            'Bundlers',
            [
              'Bundler Setup',
              'Bundling with Webpack',
              'Bundling with Vite',
            ],
            '*'],
          'Foundation',
          [
            'Design Tokens',
            '*'
          ],
          'Components',
          'Modules',
          'Appendix',
        ],
      },
    },
    viewport: {
      viewports: viewports,
      defaultViewport: 'reset',
    },
  },
  
  // a11y tests not included in the CLI by default in 8.5. this is a temporary
  // way to add them back, but will likely change in 8.6:
  // https://github.com/storybookjs/storybook/discussions/30281
  tags: ['a11y-test'],
};
