import keyCode from 'keycode'
import fireEvent from '../fireEvent'
import { isDefined } from './is.utils'

export { default as keyCode } from 'keycode'

export const simulateKeyEvent = (keyEvent, command = '', node) => {
  const commands = command.split(/{(.*?)}/)
  const targetNode = node || this.getNode()

  commands.forEach(command => {
    const keyCodeValue = keyCode(command)
    if (isDefined(keyCodeValue)) {
      fireEvent[keyEvent](targetNode, { keyCode: keyCodeValue })
      jest.runAllTimers()
    }
  })
}

export const typeCommand = (command = '', node = document) => {
  simulateKeyEvent('keyDown', command, node)
  simulateKeyEvent('keyUp', command, node)
}
