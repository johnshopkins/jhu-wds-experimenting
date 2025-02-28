import React from 'react';

/**
 * Wrap React components in a container so we can control the display
 * @param  {array} components React components to wrap
 * @param  {array} classNames Classes to add to the wrapper. Supported classnames:
 *                            - flex: aligns items next to each other (ex: Button component)
 * @return {ReactComponent} The wrapper React component
 */
export default (components = [], classNames = []) => {
  classNames.unshift('story-container');
  return <div className={classNames.join(' ')}>{components}</div>
};
