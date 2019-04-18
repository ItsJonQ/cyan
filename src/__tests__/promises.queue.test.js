import {
  useFakePromises,
  clearFakePromises,
  getPromiseQueue,
} from '../promises'

beforeEach(() => {
  useFakePromises()
})

afterEach(() => {
  clearFakePromises()
})

describe('Promise (Queue)', () => {
  describe('queue', () => {
    test('Adds a promise to the queue when a new Promise is created', () => {
      expect(getPromiseQueue().length).toBe(0)

      new Promise()
      new Promise()
      new Promise()

      expect(getPromiseQueue().length).toBe(3)
    })

    test('Promise queue is cleared after every test', () => {
      expect(getPromiseQueue().length).toBe(0)
    })
  })
})
