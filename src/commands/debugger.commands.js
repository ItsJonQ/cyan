import { pretty } from '../utils/pretty.utils'
import debug from '../debug'

function html() {
  return pretty(this.getNode().outerHTML)
}

const commands = {
  debug,
  html,
}

export default commands
