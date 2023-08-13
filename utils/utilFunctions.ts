/**
 * @callback func
 * @param {number} wait
 * @return {Function}
 */
export function throttle(func: Function, wait: number = 0) {
  let shouldThrottle = false;

  return function (...args: Array<any>) {
    if (shouldThrottle) {
      return;
    }

    shouldThrottle = true;
    setTimeout(function () {
      shouldThrottle = false;
    }, wait);

    // 'this' variable was replaced for null because of Typescript
    func.apply(null, args);
  };
}
