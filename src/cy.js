import fireEvent from './fireEvent'
import debug from './debug'
import printMarkup from './printMarkup'
import keyCommands from './constants/keyCommands'

const assert = callback => {
  try {
    return callback()
  } catch (err) {
    console.warn(err)
    return false
  }
}

class CyDuck {
  root = null
  els = []
  length = 0

  // QuerySelectors
  get(selector) {
    this.els = document.querySelectorAll(selector)
    this.length = this.els.length

    return this
  }

  getByCy(selector) {
    this.get(`[data-cy=${selector}]`)

    return this
  }

  // Debuggers
  html() {
    return printMarkup(this.getNode().outerHTML)
  }

  debug() {
    debug()
  }

  // Getters
  getNodes() {
    return this.els
  }

  getNode() {
    return this.els[0]
  }

  getAttribute(attr) {
    return this.getNode()[attr]
  }

  getAttr(attr) {
    return this.getAttribute(attr)
  }

  getComputedStyle(prop) {
    const styles = window.getComputedStyle(this.getNode())

    return prop ? styles[prop] : styles
  }

  getStyle(prop) {
    return this.getComputedStyle(prop)
  }

  getId(id) {
    return this.getAttribute(id)
  }

  // Setters
  eq(index) {
    this.els = this.els.length ? [this.els[index]] : []

    return this
  }

  first() {
    this.eq(0)

    return this
  }

  last() {
    this.eq(this.els.length - 1)

    return this
  }

  // Assertions
  contains(content) {
    return assert(() => {
      return this.getNode().innerHTML.contains(content)
    })
  }

  exists() {
    return !!this.getNodes().length
  }

  hasAttribute(attr) {
    return assert(() => {
      const attrValue = this.getNode()[attr]
      return attrValue !== undefined && attrValue !== null
    })
  }

  hasAttr(attr) {
    return this.hasAttribute(attr)
  }

  hasClassName(className) {
    return assert(() => {
      return this.getNode().classList.contains(className)
    })
  }

  hasClass(className) {
    return this.hasClassName(className)
  }

  isChecked() {
    return assert(() => {
      return this.getAttribute('checked') === true
    })
  }

  isDisabled() {
    return assert(() => {
      return this.getAttribute('disabled') === true
    })
  }

  // Events
  click() {
    fireEvent.click(this.getNode())

    return this
  }

  simulateKeyEvent(keyEvent, command = '', node) {
    const commands = command.split(/{(.*?)}/)
    const targetNode = node || this.getNode()

    commands.forEach(command => {
      if (keyCommands[command]) {
        fireEvent[keyEvent](targetNode, { keyCode: keyCommands[command] })
      }
    })
  }

  keyDown(command, node) {
    this.simulateKeyEvent('keyDown', command, node)
  }

  keyUp(command, node) {
    this.simulateKeyEvent('keyUp', command, node)
  }

  keyPress(command, node) {
    this.simulateKeyEvent('keyUp', command, node)
  }
}

const cy = new CyDuck()

export default cy
