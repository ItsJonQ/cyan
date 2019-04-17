import { setConfigState, shouldUseFakeTimers } from './configuration'

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

export const advanceTimersByTime = jest.advanceTimersByTime
export const clearAllTimers = jest.clearAllTimers
