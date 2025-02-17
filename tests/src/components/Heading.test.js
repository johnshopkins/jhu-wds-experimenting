/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom'
import { getByRole, screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'

import { createHeading } from '../../../src/components/Heading/Heading';


describe('Compiled library', () => {

  afterEach(() => {
    // clean up DOM elements
    document.getElementsByTagName('html')[0].innerHTML = ''; 
  });

  describe('Heading levels', () => {

    test('Default (1)', () => {

      document.body.appendChild(createHeading());

      const heading = getByRole(document.body, 'heading', { level: 1 });

      expect(heading).toBeInTheDocument();

    });

    [1, 2, 3, 4, 5, 6].map(level => {

      test(level, () => {

        document.body.appendChild(createHeading({ level: level }));

        const heading = getByRole(document.body, 'heading', { level: level });

        expect(heading).toBeInTheDocument();

      });

    });

  });

  test('Can change heading label', () => {

    document.body.appendChild(createHeading({ label: 'this is a custom label' }));

    const heading = getByRole(document.body, 'heading');

    expect(heading).toHaveTextContent('this is a custom label');

  });

  test('Can change heading label', () => {

    document.body.appendChild(createHeading({ label: 'this is a <strong>custom label</strong>' }));

    const heading = getByRole(document.body, 'heading');

    expect(heading).toContainHTML('this is a <strong>custom label</strong>');

  });

});
