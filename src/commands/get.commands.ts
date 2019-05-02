import { isDefined } from '../utils/is.utils'

function getAttribute(attr) {
  const node = this.__getNode('getAttribute', attr)
  return node.getAttribute(attr)
}

function getComputedStyle(prop) {
  const node = this.__getNode('getComputedStyle')
  const styles = window.getComputedStyle(node)
  return prop ? styles[prop] : styles
}

function getId() {
  return this.getAttribute('id')
}

function getTagName() {
  const node = this.__getNode('getTagName')
  return node.tagName.toLowerCase()
}

function getValue(nextValue) {
  if (isDefined(nextValue)) {
    this.type(nextValue)
  }
  const node = this.__getNode('getValue', nextValue)
  return node.value
}

function getText() {
  const node = this.__getNode('getText')
  return node.textContent || ''
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
  attr: getAttribute,
  id: getId,
  style: getComputedStyle,
  tagName: getTagName,
  tag: getTagName,
  text: getText,
  value: getValue,
}

export default commands
