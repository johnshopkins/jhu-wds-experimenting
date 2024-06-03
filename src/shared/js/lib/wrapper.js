export default (elements, classNames = []) => {

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
