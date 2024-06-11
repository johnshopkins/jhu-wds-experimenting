import { createHeading } from './Heading';
import wrap from '../../shared/js/lib/wrapper';

export default {
  title: 'Components/Heading',
  render: createHeading,
};

const getVariations = (args = {}) => {
  return wrap([1, 2, 3, 4, 5, 6].map((n) => createHeading({ label: `Level ${n}`, level: n, ...args })));
};

export const Base = {
  render: getVariations
};
