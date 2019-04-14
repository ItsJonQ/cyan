import fireEvent from './fireEvent'
import keycode from './keycode'
import { isDefined } from './utils/is.utils'

export const simulateKeyEvent = (keyEvent, command = '', node) => {
  const commands = command.split(/{(.*?)}/)
  const targetNode = node || this.getNode()

  commands.forEach(command => {
    const keyCodeValue = keycode(command)
    if (isDefined(keyCodeValue)) {
      fireEvent[keyEvent](targetNode, { keyCode: keyCodeValue })
    }
  })
}
