/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom'
import { getByRole, screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'

import { Button, createButton } from '../../../src/components/Button/Button';


describe('Compiled library', () => {

  afterEach(() => {
    // clean up DOM elements
    document.getElementsByTagName('html')[0].innerHTML = ''; 
  });

  describe('Button variants', () => {

    test('Default variant (none)', () => {

      document.body.appendChild(createButton());

      const button = getByRole(document.body, 'button');

      expect(button).toBeInTheDocument();
      expect(button).not.toHaveAttribute('class');

    });

    const variants = ['Primary', 'Secondary', 'Success', 'Danger', 'Warning', 'Disabled'];

    variants.map(variant => {

      test(variant, () => {

        document.body.appendChild(createButton({ variant: variant.toLowerCase() }));

        const button = getByRole(document.body, 'button');

        expect(button).toBeInTheDocument();
        expect(button).toHaveAttribute('class', variant.toLowerCase());


      });

    });

  });

  describe('Button styles', () => {

    test('Default style', () => {

      document.body.appendChild(createButton());

      const button = getByRole(document.body, 'button');

      expect(button).toBeInTheDocument();
      expect(button).not.toHaveAttribute('class');

    });

    const styles = ['Fill', 'Outline'];

    styles.map(style => {

      test(style, () => {

        document.body.appendChild(createButton({ style: style.toLowerCase() }));

        const button = getByRole(document.body, 'button');

        expect(button).toBeInTheDocument();
        expect(button).toHaveAttribute('class', 'style-' + style.toLowerCase());


      });

    });

  });

  describe('Button sizes', () => {

    test('Default size', () => {

      document.body.appendChild(createButton());

      const button = getByRole(document.body, 'button');

      expect(button).toBeInTheDocument();
      expect(button).not.toHaveAttribute('class');

    });

    const sizes = ['Small', 'Large'];

    sizes.map(size => {

      test(size, () => {

        document.body.appendChild(createButton({ size: size.toLowerCase() }));

        const button = getByRole(document.body, 'button');

        expect(button).toBeInTheDocument();
        expect(button).toHaveAttribute('class', 'size-' + size.toLowerCase());


      });

    });

  });

  describe('Combinations of label, variant, style, size', () => {

    test('Variant and style', () => {

      document.body.appendChild(createButton({
        label: 'this is a custom label',
        variant: 'secondary',
        style: 'fill',
      }));

      const button = getByRole(document.body, 'button');

      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent('this is a custom label');
      expect(button).toHaveAttribute('class', 'secondary style-fill');

    });

    test('Variant, style, and size', () => {

      document.body.appendChild(createButton({
        label: 'this is a custom label',
        variant: 'secondary',
        style: 'fill',
        size: 'small'
      }));

      const button = getByRole(document.body, 'button');

      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent('this is a custom label');
      expect(button).toHaveAttribute('class', 'secondary style-fill size-small');

    });

    test('Style and size', () => {

      document.body.appendChild(createButton({
        label: 'this is a custom label',
        style: 'fill',
        size: 'small'
      }));

      const button = getByRole(document.body, 'button');

      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent('this is a custom label');
      expect(button).toHaveAttribute('class', 'style-fill size-small');

    });

  });

  describe('Label', () => {

    test('Default button label', () => {

      document.body.appendChild(createButton());

      const button = getByRole(document.body, 'button');

      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent('Button');

    });

    test('Custom button label', () => {

      document.body.appendChild(createButton({ label: 'this is a custom label' }));

      const button = getByRole(document.body, 'button');

      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent('this is a custom label');

    });

  });

  test('Button interaction works', async () => {

    // mock console.log function
    console.log = jest.fn();

    // create button in DOM
    const div = document.createElement('div')
    div.innerHTML = '<button></button>';
    new Button(div.querySelector('button'));

    // test button click
    await userEvent.click(getByRole(div, 'button'));
    expect(console.log).toHaveBeenCalledWith('testing');

  });

});
