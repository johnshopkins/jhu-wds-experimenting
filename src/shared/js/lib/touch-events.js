const add = () => {
  const html = document.querySelector('html');
  html.classList.remove('no-touchevents');
  html.classList.add('touchevents');
};

const remove = () => {
  const html = document.querySelector('html');
  html.classList.remove('touchevents');
  html.classList.add('no-touchevents');
};

export { add, remove };
