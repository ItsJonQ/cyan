import commands from '../commands'
import { get } from '../utils/selector.utils'
import { addCommands } from '../utils/command.utils'

export class Cyan {
  constructor(el) {
    this.get(el)
  }

  // QuerySelectors
  get(selector) {
    this.el = get(selector)
    this.length = this.el.length
    return this
  }

  getByCy(selector) {
    this.get(`[data-cy=${selector}]`)
    return this
  }

  // (Base) Getters
  getEl() {
    return this.el
  }

  getNodes() {
    return this.getEl()
  }

  getNode() {
    return this.getEl()[0]
  }
}

addCommands(Cyan, commands)

export default Cyan
