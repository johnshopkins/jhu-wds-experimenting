/**
 * Wrap HTML elements in a container so we can control the display
 * @param  {array} elements   HTML elements to wrap
 * @param  {array} classNames Classes to add to the wrapper. Supported classnames:
 *                            - flex: aligns items next to each other (ex: Button component)
 * @return {HTMLElement} The wrapper HTML element
 */
export default (elements = [], classNames = []) => {

  const wrapper = document.createElement('div');
  wrapper.classList.add('story-container');

  if (classNames) {
    wrapper.classList.add(...classNames);
  }

  for (const element of elements) {
    wrapper.appendChild(element);
  }

  return wrapper;
};
