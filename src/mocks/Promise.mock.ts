import { addToPromiseQueue } from '../promises'
import { isFunction } from '../utils/is.utils'

/**
 * Mock promise that immediately resolves.
 * Async/Await is not supported for Mock Promises.
 */
function MockPromise(callback) {
  let resolved = null
  let rejected = null

  const resolveIntercepteor = value => {
    resolved = value
    return MockPromise.resolve(value)
  }

  const rejectedInterceptor = value => {
    resolved = value
    return MockPromise.reject(value)
  }

  let result = isFunction(callback)
    ? callback(resolveIntercepteor, rejectedInterceptor)
    : null

  const promise = {
    then: callback => new Resolved(result && result.value).then(callback),
    catch: callback => new Rejected(result && result.reason).catch(callback),
  }

  addToPromiseQueue({ ...promise, resolved, rejected })

  return promise
}

MockPromise.resolve = value => new Resolved(value)
MockPromise.reject = reason => new Rejected(reason)
MockPromise.all = mockPromiseAll

function mockPromiseAll(promises: Array<any> = []) {
  let values: any = []
  try {
    values = promises.map(promise => {
      const result = promise.then(v => v)
      return result.value
    })
  } catch (err) {
    /* istanbul ignore next */
    values = err
  }

  return {
    then: callback => callback(values),
    /* istanbul ignore next */
    catch: callback => callback(values),
  }
}

class Resolved {
  state: string
  value: any

  constructor(value: any) {
    this.state = 'fulfilled'
    this.value = value
  }

  then(callback) {
    try {
      const newValue = callback(this.value)
      if (isPromise(newValue)) {
        return newValue
      }
      return new Resolved(newValue)
    } catch (e) {
      return new Rejected(e)
    }
  }

  catch() {
    return this
  }
}

class Rejected {
  reason: any
  state: string

  constructor(reason) {
    this.state = 'rejected'
    this.reason = reason
  }

  then(resolve, reject) {
    if (typeof reject === 'function') {
      return new Resolved(reject(this.reason))
    }
    return this
  }

  catch(callback) {
    const newValue = callback(this.reason)
    return new Resolved(newValue)
  }
}

function isPromise(value) {
  return typeof value === 'object' && typeof value.then === 'function'
}

export default MockPromise
