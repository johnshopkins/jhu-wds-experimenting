import React from 'react';
import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import TrapTab from './trap-tab';

describe('JS lib: trap-tab', () => {

  test('Activation and deactivation traps tab to specified element', async () => {

    const { getByRole, getByTestId } = render(
      <>
        <button>Outside button</button>
        <div data-testid="trapped">
          <button>Inside button</button>
          <p><a href="#">Inside link 1</a></p>
          <p><a href="#">Inside link 2</a></p>
          <button disabled>Disabled button</button>
        </div>
        <button>Outside button 2</button>
      </>
    );

    const outsideButton1 = getByRole('button', { name: 'Outside button' });
    const insideButton = getByRole('button', { name: 'Inside button' });
    const insideLink1 = getByRole('link', { name: 'Inside link 1' });
    const insideLink2 = getByRole('link', { name: 'Inside link 2' });
    const outsideButton2 = getByRole('button', { name: 'Outside button 2' });

    // set element to trap tab to, but don't trap yet
    const toTrap = getByTestId('trapped');
    const trappedTab = new TrapTab(toTrap);

    // body starts out with focus
    expect(document.body).toHaveFocus();

    // as the user tabs, all tabbable elements should get focus applied in turn
    await userEvent.tab();
    expect(outsideButton1).toHaveFocus();

    await userEvent.tab();
    expect(insideButton).toHaveFocus();

    await userEvent.tab();
    expect(insideLink1).toHaveFocus();

    await userEvent.tab();
    expect(insideLink2).toHaveFocus();

    await userEvent.tab();
    expect(outsideButton2).toHaveFocus();

    // activate trapped tab
    outsideButton1.focus();
    trappedTab.activate();

    // first element inside the trapped element should receive focus
    expect(insideButton).toHaveFocus();

    // only elements within the trapped element get focus
    await userEvent.tab();
    expect(insideLink1).toHaveFocus();

    await userEvent.tab();
    expect(insideLink2).toHaveFocus();

    await userEvent.tab();
    expect(insideButton).toHaveFocus();

    await userEvent.tab();
    expect(insideLink1).toHaveFocus();

    await userEvent.tab({ shift: true });
    expect(insideButton).toHaveFocus();

    await userEvent.tab({ shift: true });
    expect(insideLink2).toHaveFocus();

    // deactivate tab trap
    trappedTab.deactivate();
    expect(insideLink2).toHaveFocus();

    // all elements are tabbable again
    await userEvent.tab();
    expect(outsideButton2).toHaveFocus();

    await userEvent.tab();
    expect(document.body).toHaveFocus();

    await userEvent.tab();
    expect(outsideButton1).toHaveFocus();

    await userEvent.tab();
    expect(insideButton).toHaveFocus();

    await userEvent.tab();
    expect(insideLink1).toHaveFocus();

    await userEvent.tab();
    expect(insideLink2).toHaveFocus();

  });

  test('<a>', async () => {

    const { getByTestId } = render(
      <div data-testid="trapped">
        <a href="https://www.jhu.edu" data-testid="tabbable">tabbable</a>
        <a name="anchor-link">not tabbable</a>
        <a href="https://www.jhu.edu" tabIndex="-1">not tabbable</a>
      </div>
    );

    const toTrap = getByTestId('trapped');
    const trappedTab = new TrapTab(toTrap);
    trappedTab.activate();

    const tabbable = getByTestId('tabbable');
    expect(tabbable).toHaveFocus();

    // stays on only tabbable element
    await userEvent.tab();
    expect(tabbable).toHaveFocus();

    await userEvent.tab({ shift: true });
    expect(tabbable).toHaveFocus();

    trappedTab.deactivate();

  });

  test('<input>', async () => {

    const { getByTestId } = render(
      <div data-testid="trapped">
        <input data-testid="tabbable" />
        <input disabled />
        <input type="hidden" />
        <input tabIndex="-1" />
      </div>
    );

    const toTrap = getByTestId('trapped');
    const trappedTab = new TrapTab(toTrap);
    trappedTab.activate();

    const tabbable = getByTestId('tabbable');
    expect(tabbable).toHaveFocus();

    // stays on only tabbable element
    await userEvent.tab();
    expect(tabbable).toHaveFocus();

    await userEvent.tab({ shift: true });
    expect(tabbable).toHaveFocus();

    trappedTab.deactivate();

  });

  test('<select>', async () => {

    const { getByTestId } = render(
      <div data-testid="trapped">
        <select data-testid="tabbable" />
        <select disabled />
        <select tabIndex="-1" />
      </div>
    );

    const toTrap = getByTestId('trapped');
    const trappedTab = new TrapTab(toTrap);
    trappedTab.activate();

    const tabbable = getByTestId('tabbable');
    expect(tabbable).toHaveFocus();

    // stays on only tabbable element
    await userEvent.tab();
    expect(tabbable).toHaveFocus();

    await userEvent.tab({ shift: true });
    expect(tabbable).toHaveFocus();

    trappedTab.deactivate();

  });

  test('<textarea>', async () => {

    const { getByTestId } = render(
      <div data-testid="trapped">
        <textarea data-testid="tabbable" />
        <textarea disabled />
        <textarea tabIndex="-1" />
      </div>
    );

    const toTrap = getByTestId('trapped');
    const trappedTab = new TrapTab(toTrap);
    trappedTab.activate();

    const tabbable = getByTestId('tabbable');
    expect(tabbable).toHaveFocus();

    // stays on only tabbable element
    await userEvent.tab();
    expect(tabbable).toHaveFocus();

    await userEvent.tab({ shift: true });
    expect(tabbable).toHaveFocus();

    trappedTab.deactivate();

  });

  test('<button>', async () => {

    const { getByTestId } = render(
      <div data-testid="trapped">
        <button data-testid="tabbable"></button>
        <button disabled></button>
        <button tabIndex="-1"></button>
      </div>
    );

    const toTrap = getByTestId('trapped');
    const trappedTab = new TrapTab(toTrap);
    trappedTab.activate();

    const tabbable = getByTestId('tabbable');
    expect(tabbable).toHaveFocus();

    // stays on only tabbable element
    await userEvent.tab();
    expect(tabbable).toHaveFocus();

    await userEvent.tab({ shift: true });
    expect(tabbable).toHaveFocus();

    trappedTab.deactivate();

  });

  test.skip('<iframe>', async () => {

    const { getByTestId } = render(
      <div data-testid="trapped">
        <button data-testid="tabbable"></button>
        <iframe>
          <button data-testid="tabbable2"></button>
        </iframe>
        <button data-testid="tabbable3"></button>
      </div>
    );

    const tabbable = getByTestId('tabbable');
    const tabbable2 = getByTestId('tabbable2');

    const toTrap = getByTestId('trapped');
    const trappedTab = new TrapTab(toTrap);
    trappedTab.activate();

    expect(tabbable).toHaveFocus();

    // goes into iframe
    await userEvent.tab();
    expect(tabbable2).toHaveFocus();

    // comes back out
    await userEvent.tab();
    expect(tabbable).toHaveFocus();

    trappedTab.deactivate();

  });

  test('[contenteditable]', async () => {

    const { getByTestId } = render(
      <div data-testid="trapped">
        <blockquote contentEditable="true" data-testid="tabbable" suppressContentEditableWarning={true}></blockquote>
        <blockquote contentEditable="false" suppressContentEditableWarning={true}>not tabbable</blockquote>
        <blockquote>not tabbable</blockquote>
      </div>
    );

    const toTrap = getByTestId('trapped');
    const trappedTab = new TrapTab(toTrap);
    trappedTab.activate();

    const tabbable = getByTestId('tabbable');
    expect(tabbable).toHaveFocus();

    // stays on only tabbable element
    await userEvent.tab();
    expect(tabbable).toHaveFocus();

    await userEvent.tab({ shift: true });
    expect(tabbable).toHaveFocus();

    trappedTab.deactivate();

  });

  test('tabindex', async () => {

    const { getByTestId } = render(
      <div data-testid="trapped">
        <blockquote tabIndex="0" data-testid="tabbable">
          <p>tabindex=0</p>
        </blockquote>
        <blockquote tabIndex="-1">
          <p>tabindex=-1</p>
        </blockquote>
      </div>
    );

    const toTrap = getByTestId('trapped');
    const trappedTab = new TrapTab(toTrap);
    trappedTab.activate();

    const tabbable = getByTestId('tabbable');
    expect(tabbable).toHaveFocus();

    // stays on only tabbable element
    await userEvent.tab();
    expect(tabbable).toHaveFocus();

    await userEvent.tab({ shift: true });
    expect(tabbable).toHaveFocus();

    trappedTab.deactivate();

  });

});
