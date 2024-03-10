/**
 * 首字母大写
 * @param str the string to capitalize
 * @returns capitalized string
 *
 * capitalizeFirstLetter('yucihent') => 'Yucihent'
 */

export default function (str: string): string {
  return str.replace(/^\w/, (match) => match.toUpperCase())
}
