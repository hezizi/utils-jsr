/**
 * 防抖
 * @param fn the func to debounce
 * @param delay milliseconds
 * @returns new debounced function
 */

export default function <T extends any[]>(
  fn: (...args: T) => void,
  delay: number = 300
): (...args: T) => void {
  let timer: ReturnType<typeof setTimeout>

  return (...args: T) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}
