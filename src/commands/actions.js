import { simulateKeyEvent } from '../keyEvent'
import fireEvent from '../fireEvent'

function check() {
  this.getNode().checked = true
  return this
}

function clear() {
  this.getNode().value = ''
  return this
}

function hover() {
  fireEvent.mouseEnter(this.getNode())
  return this
}

function keyDown(command, node) {
  simulateKeyEvent('keyDown', command, node)
  return this
}

function keyUp(command, node) {
  simulateKeyEvent('keyUp', command, node)
  return this
}

function keyPress(command, node) {
  simulateKeyEvent('keyUp', command, node)
  return this
}

function type(value) {
  this.getNode().value = value
  return this
}

function uncheck() {
  this.getNode().checked = false
  return this
}

const commands = {
  check,
  clear,
  hover,
  keyDown,
  keyUp,
  keyPress,
  type,
  uncheck,
}

export default commands
