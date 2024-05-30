import './button.scss';

class Button {
  constructor(element) {
    this.element = element;
    this.element.addEventListener('click', () => {
      console.log('testing');
    })
  }
};

const create = ({ primary = false, size = 'medium', backgroundColor, label }) => {

  const element = document.createElement('button');
  element.type = 'button';
  element.innerText = label;

  if (primary) {
    element.classList.add('primary');
  }

  element.classList.add(`size-${size}`);

  element.style.backgroundColor = backgroundColor;

  // enable JS
  new Button(element);

  return element;
};

export { Button, create };

