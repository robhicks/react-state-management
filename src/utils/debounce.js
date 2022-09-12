/**
 * Debounces a function invoking the function after a wait in milliseconds.
 * @param  {[Function]}  func          Function to debounce
 * @param  {Number}  [wait=250]        Wait time in milliseconds
 * @param  {Boolean} [immediate=false] Boolean indicating whether function should be invoked immediately
 * @return {[type]}                    [description]
 */
export default (func, wait = 250, immediate = false) => {
  if (typeof func !== 'function') throw new Error('function required')
  let timeout
  return (...args) => {
    const context = this
    const later = () => {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}
