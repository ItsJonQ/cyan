import CyDuck from './cyduck'
import { get, getByCy } from './utils/selector.utils'
import debug from './debug'
import render from './render'

const cy = {
  get: selector => {
    return new CyDuck(get(selector))
  },
  getByCy: selector => {
    return new CyDuck(getByCy(selector))
  },
  debug,
  render,
}

export default cy
