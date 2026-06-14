import { describe, it, expect } from 'vitest';
import { slugify, capitalize } from '../src/index.js';

describe('slugify', () => {
  it('lowercases and hyphenates words', () => {
    expect(slugify('Hello World')).toBe('hello-world');
  });

  it('collapses punctuation and trims separators', () => {
    expect(slugify('  Foo & Bar!  ')).toBe('foo-bar');
  });
});

describe('capitalize', () => {
  it('capitalizes the first character', () => {
    expect(capitalize('loopdog')).toBe('Loopdog');
  });

  it('returns an empty string unchanged', () => {
    expect(capitalize('')).toBe('');
  });
});
