import { createHeading } from './Heading';
import wrap from '../../shared/js/lib/wrapper';

export default {
  title: 'Components/Heading',
  render: createHeading,
};

const getVariations = (args = {}) => {
  return wrap([
    createHeading({
      label: 'Level 1',
      level: 1,
      ...args
    }),
    createHeading({
      label: 'Level 2',
      level: 2,
      ...args
    }),
    createHeading({
      label: 'Level 3',
      level: 3,
      ...args
    }),
    createHeading({
      label: 'Level 4',
      level: 4,
      ...args
    }),
    createHeading({
      label: 'Level 5',
      level: 5,
      ...args
    }),
    createHeading({
      label: 'Level 6',
      level: 6,
      ...args
    })
  ]);
};

export const Base = {
  render: getVariations
};
