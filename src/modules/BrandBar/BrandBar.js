import './brand-bar.scss';

class BrandBar {
  constructor(element) {
    this.element = element;
    this.element.addEventListener('click', (e) => {
      console.log('testing');
    })
  }
};

const create = ({ label }) => {

  const element = document.createElement('div');

  element.classList.add('brand-bar');
  element.innerText = label;

  new BrandBar(element);

  return element;
};

export { create, BrandBar };

