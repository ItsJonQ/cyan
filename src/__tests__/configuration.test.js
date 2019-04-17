import { getConfigState, setConfigState, resetConfig } from '../configuration'

describe('configuration', () => {
  test('Has useFakeTimers defaulting to false', () => {
    expect(getConfigState().useFakeTimers).toBe(false)
  })

  test('Can get/set/reset the configuration state', () => {
    expect(getConfigState().useFakeTimers).toBe(false)

    setConfigState()
    expect(getConfigState().useFakeTimers).toBe(false)

    setConfigState({ hello: 'there', useFakeTimers: true })
    expect(getConfigState().hello).toBe('there')
    expect(getConfigState().useFakeTimers).toBe(true)

    resetConfig()
    setConfigState({ hello: 'there' })
    expect(getConfigState().useFakeTimers).toBe(false)
  })
})
