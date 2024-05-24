import './heading.scss';

const create = ({ level = 1, label }) => {

  const element = document.createElement(`h${level}`);
  element.innerText = label;

  return element;
  
};

export { create };

