import fireEvent from '../fireEvent'
import { runAllTimers } from '../timers'

const commands = Object.keys(fireEvent).reduce((commands, key) => {
  return {
    ...commands,
    [key]: function(eventProps = {}) {
      const node = this.__getNode(key)
      fireEvent[key](node, eventProps)
      runAllTimers()

      return this
    },
  }
}, {})

export default commands
