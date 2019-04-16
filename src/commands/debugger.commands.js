import { pretty } from '../utils/pretty.utils'

function debug(...args) {
  console.log(pretty(this.getNode().outerHTML), ...args)
}

function html() {
  return pretty(this.getNode().outerHTML)
}

const commands = {
  debug,
  html,
}

export default commands
