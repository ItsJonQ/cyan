import { getByText as baseGetByText } from 'dom-testing-library'
import {
  isArray,
  isElement,
  isNodeCollection,
  isNode,
  isString,
} from './is.utils'

export const get = selector => {
  if (isNodeCollection(selector)) {
    return Array.from(selector)
  }

  if (isNode(selector) || isElement(selector)) {
    return [selector]
  }

  if (isString(selector)) {
    return Array.from(document.querySelectorAll(selector))
  }

  if (isArray(selector)) {
    return selector
  }

  return []
}

export const getByCy = selector => get(`[data-cy=${selector}]`)

export const getByText = (text, node = document.body) => {
  return baseGetByText(node, text)
}
