/**
 * @jest-environment jsdom
 */

// Tests the very basic usage of the distributed JS file:
// Can it be used with both CJS and ESM?

import { getByRole } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
// import { log } from "console";

import { Button } from '../dist/main';  // esm
const jhuwds = require('../dist/main'); // cjs

describe('Compiled library', () => {

  describe('CommonJS (CJS)', () => {

    test('Button class can be instantiated', async () => {

      // mock console.log function
      console.log = jest.fn();

      // create button in DOM
      const div = document.createElement('div')
      div.innerHTML = '<button></button>';
      new jhuwds.Button(div.querySelector('button'));

      // test button click
      await userEvent.click(getByRole(div, 'button'));
      expect(console.log).toHaveBeenCalledWith('testing');

    });

  });

  describe('ECMAScript Module (ESM)', () => {

    test('Button class can be instantiated', async () => {

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

});
