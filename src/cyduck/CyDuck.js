import { get } from '../get'
import { isDefined } from '../utils/is.utils'
import addCommands from './addCommands'

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

  getAttribute(attr) {
    return this.getNode()[attr]
  }

  getAttr(attr) {
    return this.getAttribute(attr)
  }

  getComputedStyle(prop) {
    const styles = window.getComputedStyle(this.getNode())
    return prop ? styles[prop] : styles
  }

  getStyle(prop) {
    return this.getComputedStyle(prop)
  }

  getId(id) {
    return this.getAttribute(id)
  }

  getValue() {
    return this.getAttribute('value')
  }

  // Setters
  eq(index) {
    this.el = this.el.length ? [this.el[index]] : []
    return this
  }

  first() {
    this.eq(0)
    return this
  }

  last() {
    this.eq(this.el.length - 1)
    return this
  }

  value(nextValue) {
    if (isDefined(nextValue)) {
      this.type(nextValue)
    }
    return this.getValue()
  }
}

addCommands(CyDuck)

export default CyDuck
