import Cyan from './cyan'
import { get, getByCy } from './utils/selector.utils'
import { typeCommand } from './utils/keyEvent.utils'
import debug from './debug'
import render from './render'

const cy = {
  get: selector => {
    return new Cyan(get(selector))
  },
  getByCy: selector => {
    return new Cyan(getByCy(selector))
  },
  type: typeCommand,
  debug,
  render,
}

export default cy
