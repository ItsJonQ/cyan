import { useFakeTimers, runOnlyPendingTimers, fastForward } from '../timers'

describe('timers', () => {
  describe('runOnlyPendingTimers', () => {
    test('Can fire without errors', () => {
      useFakeTimers()
      runOnlyPendingTimers()
    })
  })

  describe('fastForward', () => {
    test('Can fire without errors', () => {
      useFakeTimers()
      fastForward()
    })
  })
})
