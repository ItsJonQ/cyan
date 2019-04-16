import { assert } from '../utils/assert.utils'
import { isDefined } from '../utils/is.utils'

function contains(content) {
  return assert(() => {
    return this.getNode().innerHTML.contains(content)
  })
}

function exists() {
  return !!this.getNodes().length
}

function hasAttribute(attr) {
  return assert(() => {
    const attrValue = this.getNode()[attr]
    return isDefined(attrValue)
  })
}

function hasClassName(className) {
  return assert(() => {
    return this.getNode().classList.contains(className)
  })
}

function hasTagName(tagName) {
  return assert(() => {
    return this.getNode().tagName.toLowerCase() === tagName.toLowerCase()
  })
}

function isChecked() {
  return assert(() => {
    return !!this.getNode().checked
  })
}

function isDisabled() {
  return assert(() => {
    return !!this.getNode().disabled
  })
}

function matches(selector) {
  return assert(() => {
    return this.getNode().matches(selector)
  })
}

function toContain(content) {
  console.warn('Use .contains() instead to .toContain()')
  return this.contains(content)
}

function toExist() {
  console.warn('Use .contains() instead to .toExist()')
  return this.exists()
}

const commands = {
  contains,
  exists,
  hasAttribute,
  hasAttr: hasAttribute,
  hasClassName,
  hasClass: hasClassName,
  hasTagName,
  hasTag: hasTagName,
  isChecked,
  isDisabled,
  matches,
  toContain,
  toExist,
}

export default commands
