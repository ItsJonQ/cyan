import actions from './action.commands'
import assertions from './assertion.commands'
import debuggers from './debugger.commands'
import events from './event.commands'
import get from './get.commands'
import selectors from './selector.commands'
import { combineCommands } from '../utils/command.utils'

export default combineCommands({
  actions,
  assertions,
  debuggers,
  events,
  get,
  selectors,
})
