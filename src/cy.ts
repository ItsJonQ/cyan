import { Cy } from './types/Cy.types'
import Cyan from './cyan'
import { get, getByCy, getByText } from './utils/selector.utils'
import { typeCommand } from './utils/keyEvent.utils'
import debug from './debug'
import wait from './wait'
import * as timerFunctions from './timers'
import render from './render'

const cy: Cy = {
  get: selector => {
    return new Cyan(get(selector))
  },
  getByCy: selector => {
    return new Cyan(getByCy(selector))
  },
  getByText: text => {
    return new Cyan(getByText(text))
  },
  find: selector => {
    console.warn('Use cy.get() instead of cy.find().')
    return new Cyan(get(selector))
  },
  type: typeCommand,
  debug,
  wait,
  render,
  ...timerFunctions,
}

export default cy
