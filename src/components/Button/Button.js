import './button.scss';

class Button {
  constructor(element) {
    this.element = element;
    this.element.addEventListener('click', () => {
      console.log('testing');
    })
  }
};

const createButton = ({ label = 'Button', size, style, variant } = {}) => {

  const element = document.createElement('button');
  element.type = 'button';
  element.innerText = label;

  if (variant) {
    element.classList.add(variant);
  }

  if (style) {
    element.classList.add(`style-${style}`);
  }

  if (size) {
    element.classList.add(`size-${size}`);
  }

  // enable JS
  new Button(element);

  return element;
};

export { Button, createButton };

