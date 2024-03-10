/**
 * 节流
 * @param fn the function to throttle
 * @param delay milliseconds
 * @returns new throttled function
 */

const throttle = function <T extends any[]>(
  fn: (...args: T) => void,
  delay: number = 300
): (...args: T) => void {
  let throttle = false

  return (...args: T) => {
    if (throttle) return

    fn.apply(this, args)
    throttle = true

    setTimeout(() => {
      throttle = false
    }, delay)
  }
}

export default throttle
