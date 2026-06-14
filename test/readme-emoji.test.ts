import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

describe('README emoji', () => {
  it('README.md contains at least one emoji character', () => {
    const readme = readFileSync(resolve(process.cwd(), 'README.md'), 'utf8');
    expect(readme).toMatch(/\p{Extended_Pictographic}/u);
  });
});
