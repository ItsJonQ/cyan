import { getConfigState, setConfigState } from '../configuration'
import promiseQueue from './promiseQueue'
import promiseResolver from './promiseResolver'
import MockPromise from './mocks/Promise.mock'

export const useFakePromises = () => {
  setConfigState({ useFakePromises: true })
  global.Promise = MockPromise
}

export const clearFakePromises = () => {
  global.Promise = getConfigState().Promise
  setConfigState({ useFakePromises: false })
  promiseQueue.clear()
}

export const runNextPromise = () => promiseQueue.runNextPromise()
export const runAllPromises = () => promiseQueue.runAllPromises()

export const runPromisesImmediately = () =>
  promiseQueue.runPromisesImmediately()

export const forceAllPromisesToResolve = callback => {
  promiseResolver.processWith('resolve')
  promiseResolver.addHandler(callback)
}

export const forceAllPromisesToReject = callback => {
  promiseResolver.processWith('reject')
  promiseResolver.addHandler(callback)
}
