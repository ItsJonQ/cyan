import { setConfigState, shouldUseFakeTimers } from './configuration'
import { runAllPromises } from './promises'

export const useFakeTimers = () => {
  setConfigState({ useFakeTimers: true })
  jest.useFakeTimers()
}

export const runOnlyPendingTimers = () => {
  /* istanbul ignore next */
  if (shouldUseFakeTimers()) {
    jest.runOnlyPendingTimers()
  }
}

export const runAllTimers = () => {
  if (shouldUseFakeTimers()) {
    jest.runAllTimers()
  }
}

export const fastForward = () => {
  jest.runAllImmediates()
  jest.runAllTimers()
  runAllPromises()
}

export const advanceTimersByTime = jest.advanceTimersByTime
export const clearAllTimers = jest.clearAllTimers
