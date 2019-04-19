import promiseQueue from '../promiseQueue'
import { useFakePromises, clearFakePromises } from '../promises'
import { noop } from '../../utils/other.utils'

beforeEach(() => {
  useFakePromises()
})

afterEach(() => {
  clearFakePromises()
})

describe('Promise (Queue)', () => {
  describe('queue', () => {
    test('Adds a promise to the queue when a new Promise is created', () => {
      expect(promiseQueue.length).toBe(0)
      new Promise(noop)
      new Promise(noop)
      new Promise(noop)
      expect(promiseQueue.length).toBe(3)
    })

    test('Can manually remove a promise from the queue', () => {
      expect(promiseQueue.length).toBe(0)

      const p = new Promise(noop)
      expect(promiseQueue.length).toBe(1)

      promiseQueue.remove(p)
      expect(promiseQueue.length).toBe(0)
    })

    test('Promise queue is cleared after every test', () => {
      expect(promiseQueue.length).toBe(0)
    })

    test('Logs queue with debug', () => {
      const spy = jest.spyOn(global.console, 'log').mockImplementation(() => {})
      const p = new Promise(noop)

      promiseQueue.debug()

      expect(spy).toHaveBeenCalledWith([p])
      spy.mockRestore()
    })
  })
})
