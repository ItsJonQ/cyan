import { pretty } from '../utils/pretty.utils'

function debug(...args) {
  const node = this.__getNode('debug')
  console.log(pretty(node.outerHTML), ...args)
}

function html() {
  const node = this.__getNode('html')
  return pretty(node.outerHTML)
}

const commands = {
  debug,
  html,
}

export default commands
