import { getConfigState, setConfigState } from './configuration'
import MockPromise from './mocks/Promise.mock'

const CYAN_PROMISE_QUEUE: Array<any> = []

export const getPromiseQueue = () => CYAN_PROMISE_QUEUE

export const addToPromiseQueue = promise => {
  getPromiseQueue().push(promise)
  return getPromiseQueue()
}

export const clearPromiseQueue = () => {
  getPromiseQueue().length = 0
}

export const useFakePromises = () => {
  setConfigState({ useFakePromises: true })
  global.Promise = MockPromise
}

export const clearFakePromises = () => {
  global.Promise = getConfigState().Promise
  setConfigState({ useFakePromises: false })
  clearPromiseQueue()
}
