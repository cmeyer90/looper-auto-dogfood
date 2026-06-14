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
