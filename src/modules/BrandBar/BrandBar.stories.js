import { create } from './BrandBar';
import { allModes } from "../../../.storybook/modes";

export default {
  title: 'Modules/Brand Bar',
  tags: ['autodocs'],
  render: create,
  argTypes: {
    label: { control: 'text' },
  },
  parameters: {
    chromatic: {
      modes: {
        mobile: allModes["hand"],
        tablet: allModes["desk"],
        desktop: allModes["wall"],
      },
    },
  },
};

export const Default = {
  args: {
    label: 'Brand Bar',
  },
};
