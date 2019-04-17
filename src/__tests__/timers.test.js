import { runOnlyPendingTimers } from '../timers'

describe('timers', () => {
  describe('runOnlyPendingTimers', () => {
    test('Can fire without errors', () => {
      runOnlyPendingTimers()
    })
  })
})
