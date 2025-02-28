import { html } from './format';
import { describe, test, expect } from 'vitest';

describe('JS lib: Format', () => {

  describe('HTML', () => {

    test('Single line with story container wrapper', () => {

      const given = '<div class="story-container"><button></button></div>';
      const expected = `<button></button>
`;    
      expect(html(given)).toBe(expected);

    });

    test('Single line without story container wrapper', () => {

      const given = '<button></button>';
      const expected = `<button></button>
`;    
      expect(html(given)).toBe(expected);

    });

    test('Multiple lines with story container wrapper', () => {

      const given = '<div class="story-container"><button></button><button></button></div>';
      const expected = `<button></button>
<button></button>
`;    

      expect(html(given)).toBe(expected);

    });

    test('Multiple lines without story container wrapper', () => {

      const given = '<button></button><button></button>';
      const expected = `<button></button>
<button></button>
`;    

      expect(html(given)).toBe(expected);

    });

    test('Inner indentation with story container wrapper', () => {

      const given = '<div class="story-container"><div class="unibar theme-dark"><a href="https://www.jhu.edu">A Johns Hopkins University Website</a><ul><li><a href="https://hub.jhu.edu">Hub</a></li><li><a href="https://my.jh.edu/">myJH</a></li></ul></div></div>';
      const expected = `<div class="unibar theme-dark">
  <a href="https://www.jhu.edu">A Johns Hopkins University Website</a>
  <ul>
    <li><a href="https://hub.jhu.edu">Hub</a></li>
    <li><a href="https://my.jh.edu/">myJH</a></li>
  </ul>
</div>
`;

      expect(html(given)).toBe(expected);

    });

    test('Inner indentation without story container wrapper', () => {

      const given = '<div class="unibar theme-dark"><a href="https://www.jhu.edu">A Johns Hopkins University Website</a><ul><li><a href="https://hub.jhu.edu">Hub</a></li><li><a href="https://my.jh.edu/">myJH</a></li></ul></div>';
      const expected = `<div class="unibar theme-dark">
  <a href="https://www.jhu.edu">A Johns Hopkins University Website</a>
  <ul>
    <li><a href="https://hub.jhu.edu">Hub</a></li>
    <li><a href="https://my.jh.edu/">myJH</a></li>
  </ul>
</div>
`;

      expect(html(given)).toBe(expected);

    });

    test('Override options', () => {

      const given = '<a href="https://www.jhu.edu">A Johns Hopkins University Website</a>';
      const expected = `<a
  href="https://www.jhu.edu"
>
  A Johns
  Hopkins
  University
  Website
</a>
`;
      expect(html(given, { printWidth: 10 })).toBe(expected);

    });

  });

});
