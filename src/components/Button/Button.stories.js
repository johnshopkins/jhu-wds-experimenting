import { createButton } from './Button';

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
      options: ['primary', 'secondary', 'tertiary', 'success', 'warning', 'danger'],
    },
  },
};

const getVariations = (args = {}) => {

  // this breaks "show code"
  // const element = document.createDocumentFragment()
  const element = document.createElement('div');
  element.classList.add('buttons-story');
  
  element.appendChild(createButton({
    label: 'Primary button',
    variant: 'primary',
    ...args
  }));

  element.appendChild(createButton({
    label: 'Secondary button',
    variant: 'secondary',
    ...args
  }));

  element.appendChild(createButton({
    label: 'Success button',
    variant: 'success',
    ...args
  }));

  element.appendChild(createButton({
    label: 'Danger button',
    variant: 'danger',
    ...args
  }));

  element.appendChild(createButton({
    label: 'Warning button',
    variant: 'warning',
    ...args
  }));

  return element;
};

export const Base = {
  args: {
    label: 'Base button',
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
