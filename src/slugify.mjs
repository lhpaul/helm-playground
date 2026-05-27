/**
 * Convert an arbitrary string into a URL-safe slug.
 *
 * The result is lowercase, hyphen-separated, and contains only the characters
 * `[a-z0-9-]`. Runs of any non-alphanumeric characters (whitespace,
 * punctuation, symbols) collapse into a single hyphen, and leading/trailing
 * hyphens are trimmed.
 *
 * Note: Unicode normalisation is out of scope — accented characters and emoji
 * are treated as non-alphanumeric and collapse to hyphens.
 *
 * @param {string} text - The input string to slugify.
 * @returns {string} The URL-safe slug (empty string for empty/blank input).
 */
export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
