export function capitalizeFirstLetter(
  str: string,
  locale: string = navigator.language
): string {
  return str.replace(/^\p{CWU}/u, (char) => char.toLocaleUpperCase(locale));
}
