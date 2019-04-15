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

const commands = {
  contains,
  exists,
  hasAttribute,
  hasAttr: hasAttribute,
  hasClassName,
  hasClass: hasClassName,
  isChecked,
  isDisabled,
  matches,
}

export default commands
