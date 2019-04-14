import actions from './actions'
import assertions from './assertions'
import debuggers from './debuggers'
import events from './events'
import get from './get'
import selectors from './selectors'
import { combineCommands } from '../utils/command.utils'

export default combineCommands({
  actions,
  assertions,
  debuggers,
  events,
  get,
  selectors,
})
