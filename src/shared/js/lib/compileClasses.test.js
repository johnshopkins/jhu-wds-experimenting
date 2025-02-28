import { describe, test, expect } from 'vitest';
import compileClasses from './compileClasses';
import '@testing-library/jest-dom';

describe('JS lib: compileClasses', () => {

  test('No component classes', () => {
    const props = { className: '  one  two' };
    expect(compileClasses([], props)).toStrictEqual('one two');
    expect(props).toStrictEqual({});
  });

  test('No component classes, more than just className prop', () => {
    const props = { className: '  one  two', someOtherProp: 'test' };
    expect(compileClasses([], props)).toStrictEqual('one two');
    expect(props).toStrictEqual({ someOtherProp: 'test' });
  });

  test('Has component classes', () => {
    const props = { className: '  one  two' };
    expect(compileClasses(['component-class-one', 'component-class-two'], props)).toStrictEqual('component-class-one component-class-two one two');
    expect(props).toStrictEqual({});
  });

  test('Component classes should be first', () => {
    const props = { className: '  one  two' };
    expect(compileClasses(['component-class-one', 'component-class-two'], props, true)).toStrictEqual('one two component-class-one component-class-two');
    expect(props).toStrictEqual({});
  });

});
