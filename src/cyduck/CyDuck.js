import commands from '../commands'
import { get } from '../utils/selector.utils'
import { addCommands } from '../utils/command.utils'

export class CyDuck {
  constructor(el) {
    this.el = el
    this.length = el.length
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
  getNodes() {
    return this.el
  }

  getNode() {
    return this.el[0]
  }
}

addCommands(CyDuck, commands)

export default CyDuck
