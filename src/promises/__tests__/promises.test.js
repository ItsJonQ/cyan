import { useFakePromises, clearFakePromises } from '../promises'
import promiseQueue from '../promiseQueue'
import MockPromise from '../mocks/Promise.mock'
import { noop } from '../../utils/other.utils'

describe('promises', () => {
  describe('Promise (then/catch)', () => {
    test('Can globally mock new Promises with useFakePromises', () => {
      useFakePromises()

      const resolvedPromise = () =>
        new Promise((resolve, reject) => {
          return resolve('Hello')
        })

      const rejectedPromise = () =>
        new Promise((resolve, reject) => {
          return reject('Nope')
        })

      resolvedPromise().then(result => {
        expect(result).toBe('Hello')
      })

      rejectedPromise().catch(reason => {
        expect(reason).toBe('Nope')
      })

      promiseQueue.runAllPromises()
    })

    test('Can clear mocked global Promise', () => {
      useFakePromises()

      expect(global.Promise).toBe(MockPromise)

      clearFakePromises()

      expect(global.Promise).not.toBe(MockPromise)
    })

    test('Can mock Promises.resolve', () => {
      useFakePromises()

      const testPromise = () => Promise.resolve('Hello')

      testPromise().then(result => {
        expect(result).toBe('Hello')
      })

      promiseQueue.runAllPromises()
    })

    test('Can mock Promises.reject', () => {
      useFakePromises()

      const testPromise = () => Promise.reject('OMG')

      testPromise().catch(result => {
        expect(result).toBe('OMG')
      })

      promiseQueue.runAllPromises()
    })

    test('Can be resolved with Jest expect', () => {
      useFakePromises()
      const testPromise = () =>
        new Promise((resolve, reject) => {
          return resolve('Hello')
        })

      expect(testPromise()).resolves.toBe('Hello')
    })

    test('Can be rejected with Jest expect', () => {
      useFakePromises()
      const testPromise = () =>
        new Promise((resolve, reject) => {
          return reject('Hello')
        })

      expect(testPromise()).rejects.toBe('Hello')
    })

    test('Can correctly handle throw', () => {
      useFakePromises()

      const testPromise = () => {
        return new Promise((resolve, reject) => {
          try {
            throw new Error('Error')
          } catch (err) {
            reject(err)
          }
        })
      }

      expect(testPromise()).rejects.toEqual(new Error('Error'))
    })

    test('Promise.resolve can correctly handle throw', () => {
      useFakePromises()

      const testPromise = () => {
        return Promise.resolve().then(() => {
          throw new Error('Error')
        })
      }

      testPromise().catch(result => {
        expect(result).toBeTruthy()
      })

      promiseQueue.runAllPromises()
    })

    test('Promise.resolve can correctly handle catch', () => {
      useFakePromises()

      const testPromise = () => {
        return Promise.resolve().catch(() => {
          throw new Error('Error')
        })
      }

      testPromise().catch(result => {
        expect(result).toBeTruthy()
      })

      promiseQueue.runAllPromises()
    })

    test('Promise.reject can correctly handle then', () => {
      useFakePromises()

      const testPromise = () => {
        return Promise.reject().then(() => {
          return 'Cool'
        })
      }

      testPromise()
        .then(result => {
          expect(result).toBeTruthy()
        })
        .catch(noop)

      promiseQueue.runAllPromises()
    })

    test('Promise.reject can correctly handle reject', () => {
      useFakePromises()

      const testPromise = () => {
        return Promise.reject().then(null, () => {
          return 'Error'
        })
      }

      testPromise().then(result => {
        expect(result).toBeTruthy()
      })

      promiseQueue.runAllPromises()
    })
  })

  describe('Promise.all', () => {
    beforeEach(() => {
      useFakePromises()
    })

    test('Can resolve all promises', () => {
      const one = new Promise(resolve => resolve('one'))
      const two = new Promise(resolve => resolve('two'))
      const three = new Promise(resolve => resolve('three'))

      Promise.all([one, two, three]).then(values => {
        expect(values).toEqual(['one', 'two', 'three'])
      })

      promiseQueue.runAllPromises()
    })

    test('Can catch results', () => {
      const one = new Promise(resolve => resolve('one'))
      const two = new Promise(resolve => resolve('two'))
      const three = new Promise((resolve, reject) => reject('three'))

      Promise.all([one, two, three]).catch(values => {
        expect(values).toEqual('three')
      })

      promiseQueue.runAllPromises()
    })
  })
})
