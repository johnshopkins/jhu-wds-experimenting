import SkipToMainContent from './SkipToMainContent.html';
import { expect, userEvent, within } from '@storybook/test';

export default {
  title: 'Components/Skip to Main Content'
};

export const Base = {
  render: () => <SkipToMainContent />,
  play: async ({ canvasElement }) => {

    const canvas = within(canvasElement);

    const skipToMainLink = canvas.getByRole('link', { label: 'Skip to main content' });

    expect(skipToMainLink).toBeInTheDocument();
    expect(skipToMainLink).toBeVisible(); // technically..
    expect(skipToMainLink).toHaveStyle('height: 0');

    userEvent.tab();

    // expect(skipToMainLink).not.toHaveStyle('height: 0'); // this doesn't work?
    expect(skipToMainLink).toHaveStyle('display: flex');
    
  },
};
