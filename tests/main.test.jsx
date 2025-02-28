import React, { useEffect } from 'react';
import { afterEach, describe, test, expect } from 'vitest';
import { server, userEvent } from '@vitest/browser/context';
import { cleanup, renderHook, render } from '@testing-library/react';

import { ButtonComponent, ModalComponent } from './test-components';


const useScript = (scriptText, scriptId) => {
  useEffect(() => {
    if (document.getElementById(scriptId)) {
      return;
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.text = scriptText;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [scriptText, scriptId]);
};

describe('Drop-in JavaScript', () => {

  afterEach(() => {
    cleanup();
    document.body.innerHTML = '';
  });

  test('Modal class can be instantiated', async () => {

    const scriptContent = await server.commands.readFile('../dist/main.js')

    const scriptText = scriptContent;
    const scriptId = 'jhuwds';
    renderHook(() => useScript(scriptText, scriptId));

    const { getByRole } = render(
      <div>
        <ButtonComponent />
        <ModalComponent />
      </div>
    );

    const button = getByRole('button');
    const modal = getByRole('dialog');

    document.dispatchEvent(new Event('DOMContentLoaded'));
    expect(modal).toHaveClass('jhu-modal')

    await userEvent.click(button);
    expect(modal).toHaveClass('jhu-modal open')

  });

});
