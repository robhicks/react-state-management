import isJson from './isJson'

const deserialize = (str, reviver) => {
  if (isJson(str)) {
    return typeof reviver === 'function' ? JSON.parse(str, reviver) : JSON.parse(str)
  }
  return str
}

export default deserialize
