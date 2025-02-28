/**
 * If any of the open or close triggers are links, give them a role of button (for screen readers)
 * and disable the default click event (prevents # being added to URI when clicked if href attribute is "#").
 * @param {arary} elements 
 * @returns Array of elements
 */
export default (elements) => elements.map(element => {
  if (element.nodeName === 'A' && !element.hasAttribute('href')) {
    // only modify links if they do not have an href attribute
    element.setAttribute('role', 'button');
    element.addEventListener('click', (e) => e.preventDefault());
  }
  return element;
});
