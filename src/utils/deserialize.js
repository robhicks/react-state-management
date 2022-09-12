import isJson from './isJson'

const deserialize = (str) => isJson(str) || {}

export default deserialize
