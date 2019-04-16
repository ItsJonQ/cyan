export const isDefined = obj => {
  return obj !== null && obj !== undefined
}

export const isArray = obj => Array.isArray(obj)
export const isFunction = obj => typeof obj === 'function'
export const isObject = obj => typeof obj === 'object'
export const isString = obj => typeof obj === 'string'

export const isHTMLCollection = obj => obj instanceof HTMLCollection
export const isNodeList = obj => obj instanceof NodeList
export const isNode = obj => obj instanceof Node

export const isElement = obj => {
  return obj instanceof Element || obj instanceof HTMLDocument
}

export const isNodeCollection = obj => isHTMLCollection(obj) || isNodeList(obj)
