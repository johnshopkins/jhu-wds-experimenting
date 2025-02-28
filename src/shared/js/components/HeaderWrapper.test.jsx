import React from 'react';
import { describe, test, expect } from 'vitest';
import { render, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeaderWrapper from './HeaderWrapper.html';

describe('Shared Component: Header Wrapper', () => {

  test('Verify order of top-level elements', () => {

    const { container, getByRole } = render(<HeaderWrapper />);

    const skip = getByRole('link', { name: 'Skip to main content' });
    expect(skip).toBeInTheDocument();

    const header = getByRole('banner');
    expect(header).toBeInTheDocument();

    // verify order of elements inside <header>
    const headerElements = container.querySelectorAll('.story-container > *');
    expect(headerElements[0]).toBe(skip);
    expect(headerElements[1]).toBe(header);

  });

  test('With children', () => {

    const { container } = render(
      <HeaderWrapper>
        <p>child element</p>
      </HeaderWrapper>
    );
    
    const child = within(container.querySelector('header')).getByRole('paragraph');
    expect(child).toBeInTheDocument();
    expect(child).toHaveTextContent('child element');

  });

});
