/**
 * A small, dependency-free collection of string helpers.
 *
 * This library exists to dogfood loopdog: issues filed against this repo are
 * groomed, implemented, reviewed, and merged by autonomous loops.
 */

/**
 * Convert an arbitrary string into a URL-friendly slug.
 *
 * Lowercases, trims, collapses any run of non-alphanumeric characters into a
 * single hyphen, and strips leading/trailing hyphens.
 */
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Capitalize the first character of a string, leaving the rest untouched.
 */
export function capitalize(input: string): string {
  if (input.length === 0) return input;
  return input[0]!.toUpperCase() + input.slice(1);
}

/**
 * Shorten a string to at most `maxLength` characters. When the input exceeds
 * the limit the result is sliced and a Unicode ellipsis (…) is appended;
 * the ellipsis counts toward `maxLength`. Returns '' when maxLength <= 0.
 */
export function truncate(input: string, maxLength: number): string {
  if (maxLength <= 0) return '';
  if (input.length <= maxLength) return input;
  return input.slice(0, maxLength - 1) + '…';
}

/**
 * Return true when the string is empty or contains only whitespace characters.
 */
export function isBlank(input: string): boolean {
  return input.trim().length === 0;
}
