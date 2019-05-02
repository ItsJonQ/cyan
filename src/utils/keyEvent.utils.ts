import keyCode from 'keycode'
import fireEvent from '../fireEvent'
import { runAllTimers } from '../timers'
import { isDefined, isString } from './is.utils'

export { default as keyCode } from 'keycode'

export const simulateKeyEvent = (keyEvent: string, command, node): void => {
  if (!isString(command)) return

  const commands = command.split(/{(.*?)}/)
  /* istanbul ignore next */
  const targetNode = node || document

  commands
    .filter(cmd => cmd)
    .forEach(command => {
      const keyCodeValue = keyCode(command)
      if (isDefined(keyCodeValue)) {
        fireEvent[keyEvent](targetNode, { keyCode: keyCodeValue })
        runAllTimers()
      }
    })
}

export const typeCommand = (command: string, node = document): void => {
  simulateKeyEvent('keyDown', command, node)
  simulateKeyEvent('keyUp', command, node)
}
