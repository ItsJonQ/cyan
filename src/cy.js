import Cyan from './cyan'
import { get, getByCy } from './utils/selector.utils'
import { typeCommand } from './utils/keyEvent.utils'
import debug from './debug'
import * as timerFunctions from './timers'
import render from './render'

const cy = {
  get: selector => {
    return new Cyan(get(selector))
  },
  getByCy: selector => {
    return new Cyan(getByCy(selector))
  },
  find: selector => {
    console.warn('Use cy.get() instead of cy.find().')
    return new Cyan(get(selector))
  },
  type: typeCommand,
  debug,
  render,
  ...timerFunctions,
}

export default cy
