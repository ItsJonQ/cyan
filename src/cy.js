import Cyan from './cyan'
import { get, getByCy } from './utils/selector.utils'
import debug from './debug'
import render from './render'

const cy = {
  get: selector => {
    return new Cyan(get(selector))
  },
  getByCy: selector => {
    return new Cyan(getByCy(selector))
  },
  debug,
  render,
}

export default cy
