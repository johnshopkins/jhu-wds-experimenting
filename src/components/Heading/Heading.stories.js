import { createHeading } from './Heading';

export default {
  title: 'Components/Heading',
  render: createHeading,
};

const getVariations = (args = {}) => {

  const element = document.createElement('div');
  element.classList.add('story-container');

  element.appendChild(createHeading({
    label: 'Level 1',
    level: 1,
    ...args
  }));

  element.appendChild(createHeading({
    label: 'Level 2',
    level: 2,
    ...args
  }));

  element.appendChild(createHeading({
    label: 'Level 3',
    level: 3,
    ...args
  }));

  element.appendChild(createHeading({
    label: 'Level 4',
    level: 4,
    ...args
  }));

  element.appendChild(createHeading({
    label: 'Level 5',
    level: 5,
    ...args
  }));

  element.appendChild(createHeading({
    label: 'Level 6',
    level: 6,
    ...args
  }));

  return element;
};

export const Base = {
  render: getVariations
};
