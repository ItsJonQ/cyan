import { isDefined } from '../utils/is.utils'

function getAttribute(attr) {
  return this.getNode().getAttribute(attr)
}

function getComputedStyle(prop) {
  const styles = window.getComputedStyle(this.getNode())
  return prop ? styles[prop] : styles
}

function getId() {
  return this.getAttribute('id')
}

function getTagName() {
  return this.getNode().tagName.toLowerCase()
}

function getValue(nextValue) {
  if (isDefined(nextValue)) {
    this.type(nextValue)
  }
  return this.getNode().value
}

function getText() {
  return this.getNode().textContent || ''
}

const commands = {
  getAttribute,
  getAttr: getAttribute,
  getComputedStyle,
  getId,
  getTagName,
  getValue,
  getText,
  // Aliases
  style: getComputedStyle,
  tagName: getTagName,
  text: getText,
  value: getValue,
}

export default commands
