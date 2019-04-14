import pretty from '../pretty'
import debug from '../debug'

function html() {
  return pretty(this.getNode().outerHTML)
}

const commands = {
  debug,
  html,
}

export default commands
