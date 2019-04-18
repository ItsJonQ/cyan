/**
 * Mock promise that immediately resolves.
 * Async/Await is not supported for Mock Promises.
 */
function MockPromise(callback) {
  const result = callback(MockPromise.resolve, MockPromise.reject)

  return {
    then: callback => new Resolved(result && result.value).then(callback),
    catch: callback => new Rejected(result && result.reason).catch(callback),
  }
}

MockPromise.resolve = value => new Resolved(value)
MockPromise.reject = reason => new Rejected(reason)

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
