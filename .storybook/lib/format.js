/**
 * Cannot use prettier3 (installed with storybook8) because prettier3
 * is async and storybook expects a string response (not a promise).
 * Also, it is not possible to make synchronous prettier work in the browser:
 * https://github.com/prettier/prettier-synchronized/issues/15
 * 
 * Solution: Install prettier 2 alongside prettier 3:
 * npm install prettier2@npm:prettier@2 --save-dev
 */
import prettier from 'prettier2';
import HTMLParser from 'prettier2/parser-html';

/**
 * Format a HTML string
 * @param {string} src     HTML source code
 * @param {object} options Prettier options - will override defaults
 * @returns string Formatted HTML
 */
export const html = (src, options = {}) => {

  // remove <link> tags. example:
  // <link rel="preload" as="image" href="https://ui-avatars.com/api/?size=128&amp;name=Jane+Austen" />
  src = src.replace(/<link[^>]+>/g, '');

  // remove story-container div
  const storyContainerOpeningRegex = /^<div class="[^"]*?story-container[^"]*?">/;
  if (src.match(storyContainerOpeningRegex)) {
    src = src
      .replace(storyContainerOpeningRegex, '')
      .replace(/<\/div>$/, '');
  }

  // format remaining html
  const formatted = prettier.format(src, {
    parser: 'html',
    plugins: [HTMLParser],
    htmlWhitespaceSensitivity: 'ignore',
    tabWidth: 2,
    printWidth: 80,
    ...options
  });

  // remove empty attributes like `disabled=""`
  return formatted.replace(/(\s+[A-Za-z0-9-_]+)=(""|'')/g, '$1');
};
