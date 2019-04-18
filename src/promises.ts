import { getConfigState, setConfigState } from './configuration'
import MockPromise from './mocks/Promise.mock'

export const useFakePromises = () => {
  setConfigState({ useFakePromises: true })
  global.Promise = MockPromise
}

export const clearFakePromises = () => {
  global.Promise = getConfigState().Promise
  setConfigState({ useFakePromises: false })
}
