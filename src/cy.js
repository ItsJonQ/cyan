import CyDuck from './cyduck/CyDuck'
import { get, getByCy } from './get'
import debug from './debug'

const cy = {
  get: selector => {
    return new CyDuck(get(selector))
  },
  getByCy: selector => {
    return new CyDuck(getByCy(selector))
  },
  debug: debug,
}

export default cy
