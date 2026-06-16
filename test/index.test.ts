import { describe, it, expect } from 'vitest';
import { slugify, capitalize, truncate, isBlank } from '../src/index.js';

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

describe('truncate', () => {
  it('truncates and appends ellipsis when input exceeds maxLength', () => {
    expect(truncate('hello world', 8)).toBe('hello w…');
  });

  it('returns input unchanged when within limit', () => {
    expect(truncate('hi', 8)).toBe('hi');
  });

  it('returns input unchanged when exactly at maxLength', () => {
    expect(truncate('abc', 3)).toBe('abc');
  });

  it('truncates at limit when input is one over', () => {
    expect(truncate('abcd', 3)).toBe('ab…');
  });

  it('returns empty string for empty input', () => {
    expect(truncate('', 5)).toBe('');
  });

  it('returns empty string when maxLength is zero', () => {
    expect(truncate('hello', 0)).toBe('');
  });
});

describe('isBlank', () => {
  it('returns true for an empty string', () => {
    expect(isBlank('')).toBe(true);
  });

  it('returns true for a string of spaces', () => {
    expect(isBlank('   ')).toBe(true);
  });

  it('returns true for a string of tab and newline', () => {
    expect(isBlank('\t\n')).toBe(true);
  });

  it('returns false for a single non-whitespace character', () => {
    expect(isBlank('a')).toBe(false);
  });

  it('returns false for a string with non-whitespace surrounded by spaces', () => {
    expect(isBlank('  x  ')).toBe(false);
  });
});
