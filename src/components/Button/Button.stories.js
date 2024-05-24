// import { fn } from '@storybook/test';
import { create } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Components/Button',
  // tags: ['autodocs'],
  render: create,
  // render: ({ label, ...args }) => {
  //   console.log('label', label);
  //   console.log('args', args);
  //   // You can either use a function to create DOM elements or use a plain html string!
  //   // return `<div>${label}</div>`;
  //   return create({ label, ...args });
  // },
  argTypes: {
    backgroundColor: { control: 'color' },
    label: { control: 'text' },
    primary: { control: 'boolean' },
    size: {
      control: { type: 'radio' },
      options: ['small', 'large'],
    },
  },
  // // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    label: 'Button',
  },
};

export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
