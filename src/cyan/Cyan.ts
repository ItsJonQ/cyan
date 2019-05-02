import invariant from 'invariant'
import commands from '../commands'
import CyanInterface from '../types/Cyan.interface.types'
import { get, getByText } from '../utils/selector.utils'
import { withCommands } from '../utils/command.utils'

interface Cyan extends CyanInterface {}

class Cyan {
  el: Array<any> = []
  length: number = 0

  constructor(el?: any) {
    if (el) {
      this.get(el)
    }
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

  getByText(text) {
    this.get(getByText(text, this.getNode()))
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

  __getNode(fn, selector) {
    const el = this.getNode()
    if (selector) {
      invariant(el, `Base selector does not exist to .${fn}('${selector}')`)
    } else {
      invariant(el, `Base selector does not exist for .(${fn})`)
    }
    return el
  }
}

withCommands(commands)(Cyan)

export default Cyan
