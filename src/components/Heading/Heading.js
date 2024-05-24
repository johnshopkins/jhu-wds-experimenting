import './heading.scss';

const create = ({ label }) => {

  // return `<div>${label}</div>`;

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;

  if (primary) {
    btn.classList.add('primary');
  }

  btn.classList.add(`size-${size}`);

  btn.style.backgroundColor = backgroundColor;

  new Button(btn);


  return btn;
};

export { create };

