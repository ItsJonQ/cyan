import { useFakePromises, clearFakePromises, runNextPromise } from '../promises'
import {
  forceAllPromisesToResolve,
  forceAllPromisesToReject,
} from '../promises'

beforeEach(() => {
  useFakePromises()
})

afterEach(() => {
  clearFakePromises()
})

describe('promiseResolver', () => {
  test('Can force promises to reject', () => {
    forceAllPromisesToReject()

    const spy = jest.fn()
    const test = () =>
      new Promise((resolve, reject) => {
        resolve('ok')
        reject('nope')
      })

    runNextPromise()

    test()
      .then(spy)
      .catch(err => {
        expect(err).toBe('nope')
      })

    expect(spy).not.toBeCalled()
  })

  test('Can intercept reject callback', () => {
    forceAllPromisesToReject(reason => `${reason}, because!`)

    const spy = jest.fn()
    const test = () =>
      new Promise((resolve, reject) => {
        resolve('ok')
        reject('nope')
      })

    test()
      .then(spy)
      .catch(err => {
        expect(err).toBe('nope, because!')
      })

    runNextPromise()

    expect(spy).not.toBeCalled()
  })

  test('Can intercept resolve callback', () => {
    const spy = jest.fn()

    forceAllPromisesToResolve(value => ({
      value,
      status: 200,
    }))

    const test = () =>
      new Promise((resolve, reject) => {
        resolve('ok')
        reject('nope')
      })

    runNextPromise()

    test()
      .then(result => {
        expect(result).toEqual({
          value: 'ok',
          status: 200,
        })
      })
      .catch(spy)

    expect(spy).not.toBeCalled()
  })
})
