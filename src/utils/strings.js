/**
 * Returns a kebab-cased string version of the input string.
 *
 * @param str - The input string to convert to kebab case.
 * @returns The kebab-cased version of the input string.
 */
export const toKebab = (str) => {
  return str
    .replace(/([a-z\d])([A-Z])/g, '$1-$2')
    .replace(/([^-])(\s+)([^-])/g, '$1-$3')
    .toLowerCase();
};

/**
 * Returns a camel-cased string version of the input string.
 *
 * @param str - The input string to convert to camel case.
 * @returns The camel-cased version of the input string.
 */
export const toCamel = (str) => {
  return toKebab(str).replace(/-([a-z])/g, (_, match) => match.toUpperCase());
};

/**
 * Returns a title-cased string version of the input string.
 *
 * @param str - The input string to convert to title case.
 * @returns The title-cased version of the input string.
 */
export const toTitle = (str) => {
  return toKebab(str)
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

/**
 * Returns a sentence-cased string version of the input string.
 *
 * @param str - The input string to convert to sentence case.
 * @returns The sentence-cased version of the input string.
 */
export const toSentence = (str) => {
  const interim = toKebab(str).replace(/-/g, ' ');
  return interim.charAt(0).toUpperCase() + interim.slice(1);
};
