import fireEvent from '../fireEvent'
import { typeCommand } from '../utils/keyEvent.utils'

/**
 * Checks a DOM element. Typically used for `<input />`.
 *
 * @returns {Cyan} The Cyan instance.
 *
 * @example
 * cy.get('input[type=checkbox]').check()
 */
function check() {
  const node = this.__getNode('check')
  node.checked = true
  return this
}

/**
 * Clear the value of a DOM element. Typically used for `<input />`.
 *
 * @returns {Cyan} The Cyan instance.
 *
 * @example
 * cy.get('input[type=text]').clear()
 */
function clear() {
  const node = this.__getNode('clear')
  node.value = ''
  return this
}

/**
 * Triggers an Event for a DOM element.
 *
 * @returns {Cyan} The Cyan instance.
 *
 * @example
 * cy.get('textarea').trigger('focus')
 */
function trigger(event) {
  const node = this.__getNode('trigger')
  fireEvent[event](node)
  jest.runAllTimers()
  return this
}

/**
 * Types characters/commands into a DOM element. Typically used for `<input />`.
 *
 * @returns {Cyan} The Cyan instance.
 *
 * @example
 * cy.get('input[type=text]').type('Hello')
 */
function type(value) {
  const node = this.__getNode('type', value)
  node.value = value
  typeCommand(value)
  return this
}

/**
 * Unchecks a DOM element. Typically used for `<input />`.
 *
 * @returns {Cyan} The Cyan instance.
 *
 * @example
 * cy.get('input[type=checkbox]').uncheck()
 */
function uncheck() {
  const node = this.__getNode('uncheck')
  node.checked = false
  return this
}

function hover() {
  const node = this.__getNode('hover')
  fireEvent.mouseOver(node)
  jest.runAllTimers()
  return this
}

/**
 * @module Cyan
 * @name events
 *
 * @description Triggers an Event for a DOM element.
 *
 * Supported events include:
 *
 * ```
 * 'copy', 'cut', 'paste', 'compositionEnd', 'compositionStart',
 * 'compositionUpdate', 'keyDown', 'keyPress', 'keyUp', 'focus', 'blur',
 * 'focusIn', 'focusOut', 'change', 'hover', 'input', 'invalid', 'submit',
 * 'click', 'contextMenu', 'dblClick', 'drag', 'dragEnd', 'dragEnter',
 * 'dragExit', 'dragLeave', 'dragOver', 'dragStart', 'drop', 'mouseDown',
 * 'mouseEnter', 'mouseLeave', 'mouseMove', 'mouseOut', 'mouseOver',
 * 'mouseUp', 'select', 'touchCancel', 'touchEnd', 'touchMove', 'touchStart',
 * 'scroll', 'wheel', 'abort', 'canPlay', 'canPlayThrough', 'durationChange',
 * 'emptied', 'encrypted', 'ended', 'loadedData', 'loadedMetadata',
 * 'loadStart', 'pause', 'play', 'playing', 'progress', 'rateChange',
 * 'seeked', 'seeking', 'stalled', 'suspend', 'timeUpdate', 'volumeChange',
 * 'waiting', 'load', 'error', 'animationStart', 'animationEnd',
 * 'animationIteration', 'transitionEnd', 'doubleClick'
 * ```
 *
 * @returns {Cyan} The Cyan instance.
 *
 * @example
 * cy.get('textarea').hover()
 */

const commands = {
  check,
  clear,
  hover,
  trigger,
  type,
  uncheck,
}

export default commands
