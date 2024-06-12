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
      // expect(button).toHaveAttribute('type', 'button');
      // expect(button).not.toHaveAttribute('class');

    });

    [1, 2, 3, 4, 5, 6].map(level => {

      test(level, () => {

        document.body.appendChild(createHeading({ level: level }));

        const heading = getByRole(document.body, 'heading', { level: level });

        expect(heading).toBeInTheDocument();

      });

    });

  });

  // test('Can change heading label', () => {

  //   document.body.appendChild(createButton({ label: 'this is a custom label' }));

  //   const button = getByRole(document.body, 'button');

  //   expect(button).toBeInTheDocument();
  //   expect(button).toHaveAttribute('type', 'button');
  //   expect(button).toHaveTextContent('this is a custom label');
  //   expect(button).not.toHaveAttribute('class');

  // });

  // test('Can add inline elements within heading label', () => {

  //   document.body.appendChild(createButton({ label: 'this is a custom label' }));

  //   const button = getByRole(document.body, 'button');

  //   expect(button).toBeInTheDocument();
  //   expect(button).toHaveAttribute('type', 'button');
  //   expect(button).toHaveTextContent('this is a custom label');
  //   expect(button).not.toHaveAttribute('class');

  // });

});
