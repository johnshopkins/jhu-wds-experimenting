import React from 'react';
import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import OptionInput from './OptionInput.html';

describe('Shared Component: Option Input', () => {

  test('Checkbox', () => {

    const props = {
      type: 'checkbox',
      name: 'march-sisters',
      option: {
        displayValue: 'Jo',
        value: 'jo',
      }
    };

    const { getByRole } = render(<OptionInput {...props} />);

    const checkbox = getByRole('checkbox', { name: 'Jo' });
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveAttribute('id', 'jo');
    expect(checkbox).toHaveAttribute('name', 'march-sisters');
    expect(checkbox).toHaveAttribute('value', 'jo');

  });

  test('Checked checkbox', () => {

    const props = {
      type: 'checkbox',
      name: 'march-sisters',
      option: {
        checked: true,
        displayValue: 'Jo',
        value: 'jo',
      }
    };

    const { getByRole } = render(<OptionInput {...props} />);
    expect(getByRole('checkbox', { name: 'Jo' })).toHaveAttribute('checked', '');

  });

  test('Checkbox with description', () => {

    const props = {
      type: 'checkbox',
      name: 'march-sisters',
      option: {
        displayValue: 'Jo',
        value: 'jo',
        description: 'Option description',
      }
    };

    const { getByRole } = render(<OptionInput {...props} />);
    expect(getByRole('checkbox', { name: 'Jo Option description' })).toBeInTheDocument();

  });

  test('Radio', () => {

    const props = {
      type: 'radio',
      name: 'march-sisters',
      option: {
        displayValue: 'Jo',
        value: 'jo',
      }
    };

    const { getByRole } = render(<OptionInput {...props} />);

    const radio = getByRole('radio', { name: 'Jo' });
    expect(radio).toBeInTheDocument();
    expect(radio).toHaveAttribute('id', 'jo');
    expect(radio).toHaveAttribute('name', 'march-sisters');
    expect(radio).toHaveAttribute('value', 'jo');

  });

  test('Radio selected', () => {

    const props = {
      type: 'radio',
      name: 'march-sisters',
      option: {
        checked: true,
        displayValue: 'Jo',
        value: 'jo',
      }
    };

    const { getByRole } = render(<OptionInput {...props} />);
    expect(getByRole('radio', { name: 'Jo' })).toHaveAttribute('checked', '');

  });

  test('Radio with description', () => {

    const props = {
      type: 'radio',
      name: 'march-sisters',
      option: {
        displayValue: 'Jo',
        value: 'jo',
        description: 'Option description',
      }
    };

    const { getByRole } = render(<OptionInput {...props} />);
    expect(getByRole('radio', { name: 'Jo Option description' })).toBeInTheDocument();

  });

});
