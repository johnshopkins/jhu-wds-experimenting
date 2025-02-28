import React from 'react';
import { describe, test, expect } from 'vitest';
import { userEvent } from '@vitest/browser/context';
import { render } from '@testing-library/react';

import { ButtonComponent, ModalComponent } from './test-components';
require('../dist/main.umd');

describe('ECMAScript Module (ESM)', () => {

  test('Modal class can be instantiated', async () => {

    const { getByRole } = render(
      <div>
        <ButtonComponent />
        <ModalComponent />
      </div>
    );

    const button = getByRole('button');
    const modal = getByRole('dialog');
    
    new jhuwds.Modal(modal);
    expect(modal).toHaveClass('jhu-modal')

    await userEvent.click(button);
    expect(modal).toHaveClass('jhu-modal open')

  });

});
