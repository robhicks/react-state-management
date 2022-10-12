import { isObject } from './index'

export const reducer = (p, c, key) => {
  let pVal = 0
  let cVal = 0
  if (isObject(p)) {
    pVal = Number(p[key] || 0)
    cVal = Number(c[key] || 0)
  } else {
    pVal = Number(p || 0)
    cVal = Number(c[key] || 0)
  }

  const results = pVal + cVal
  // console.log('results', results)
  return Number.isNaN(results) ? 0 : results
}
