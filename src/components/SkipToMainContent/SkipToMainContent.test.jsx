import React from 'react';
import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SkipToMainContent from './SkipToMainContent.html';

describe('Components: SkipToMainContent', () => {

  test('Default', () => {

    const { getByRole } = render(<SkipToMainContent />);
    const link = getByRole('link');

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '#main-content');
    expect(link).toHaveAttribute('class', 'jhu-skip-to-main');

  });

});
