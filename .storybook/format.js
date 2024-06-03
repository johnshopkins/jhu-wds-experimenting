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

export const html = (src) => {

  // remove story-container div
  const storyContainerOpeningRegex = /^<div class="[^"]*?story-container[^"]*?">/;
  if (src.match(storyContainerOpeningRegex)) {
    src = src
      .replace(storyContainerOpeningRegex, '')
      .replace(/<\/div>$/, '');
  }

  return prettier.format(src, {
    parser: 'html',
    plugins: [HTMLParser],
    htmlWhitespaceSensitivity: 'ignore',
    tabWidth: 2,
    printWidth: 100
  });
};
