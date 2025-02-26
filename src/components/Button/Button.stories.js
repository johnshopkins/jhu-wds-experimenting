import { createButton } from './Button';
import wrap from '../../shared/js/lib/wrapper';

export default {
  title: 'Components/Button',
  render: createButton,
  argTypes: {
    label: {
      control: 'text'
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'large'],
      if: { arg: 'variant', neq: 'tertiary' },
    },
    style: {
      control: { type: 'radio' },
      options: ['fill', 'outline'],
      if: { arg: 'variant', neq: 'tertiary' },
    },
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'tertiary', 'success', 'warning', 'danger', 'disabled'],
    },
  },
};

const getVariations = (args = {}) => {
  const variations = ['Primary', 'Secondary', 'Success', 'Danger', 'Warning', 'Disabled'];
  return wrap(variations.map((v) => createButton({ label: v, variant: v.toLowerCase(), ...args })), ['flex']);
};

export const Base = {
  args: {
    label: 'Default',
  },
};

export const Variations = {
  render: getVariations
};

export const Outlined = {
  render: () => getVariations({ style: 'outline' })
};

export const Large = {
  render: () => getVariations({ size: 'large' })
};

export const LargeOutlined = {
  render: () => getVariations({ size: 'large', style: 'outline' })
};

export const Small = {
  render: () => getVariations({ size: 'small' })
};

export const SmallOutlined = {
  render: () => getVariations({ size: 'small', style: 'outline' })
};
