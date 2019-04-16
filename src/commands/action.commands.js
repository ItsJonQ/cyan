import fireEvent from '../fireEvent'
import { simulateKeyEvent, typeCommand } from '../utils/keyEvent.utils'

function check() {
  const node = this.__getNode('check')
  node.checked = true
  return this
}

function clear() {
  const node = this.__getNode('clear')
  node.value = ''
  return this
}

function hover() {
  const node = this.__getNode('hover')
  fireEvent.mouseOver(node)
  jest.runAllTimers()
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

function trigger(event) {
  const node = this.__getNode('trigger')
  fireEvent[event](node)
  jest.runAllTimers()
  return this
}

function type(value) {
  const node = this.__getNode('type', value)
  node.value = value
  typeCommand(value)
  return this
}

function uncheck() {
  const node = this.__getNode('uncheck')
  node.checked = false
  return this
}

const commands = {
  check,
  clear,
  hover,
  keyDown,
  keyUp,
  keyPress,
  trigger,
  type,
  uncheck,
}

export default commands
