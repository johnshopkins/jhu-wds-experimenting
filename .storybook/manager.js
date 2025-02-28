import { addons } from '@storybook/manager-api';
import theme from './theme';

addons.setConfig({
  theme
});

/**
 * Modifies the <title> tag on docs pages
 */
addons.register('ModifyTitle', api => {

  const siteName = 'Johns Hopkins University Web Design System'

  const getTitle = () => {

    try {

      const storyData = api.getCurrentStoryData();

      if (storyData && storyData.type === 'docs') {

        // ex: ['Getting Started', 'Bundlers', 'Bundling with Webpack']
        const titleParts = storyData.title.split('/');

        // use the last item as the page title
        return `${titleParts.pop()} | ${siteName}`;

      }

      return siteName;

    } catch (e) {
      return siteName;
    }
  }

  return new MutationObserver(() => {
    if (document.title.endsWith('Storybook')) {
      document.title = getTitle();
    }
  }).observe(document.querySelector('title'), {
    childList: true,
    subtree: true,
    characterData: true,
  });
})
