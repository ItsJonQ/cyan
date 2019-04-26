/**
 * Forked + modified from:
 * https://github.com/taylorhakes/promise-polyfill
 */

import promiseFinally from './Promise.finally.mock'
import promiseQueue from '../promiseQueue'
import promiseResolver from '../promiseResolver'

const setTimeoutFunc = callback => callback()

/**
 * @constructor
 * @param {Function} fn
 */
function Promise(fn) {
  if (!(this instanceof Promise))
    throw new TypeError('Promises must be constructed via new')
  if (typeof fn !== 'function') throw new TypeError('not a function')
  /** @type {!number} */
  this._state = 0
  /** @type {!boolean} */
  this._handled = false
  /** @type {Promise|undefined} */
  this._value = undefined
  /** @type {!Array<!Function>} */
  this._deferreds = []

  this.process = function() {
    doResolve(fn, this)
  }

  if (!fn.isThen) {
    promiseQueue.add(this)
  }
}

function handle(self, deferred) {
  if (self._state === 0) {
    self._deferreds.push(deferred)
    return
  }
  self._handled = true
  Promise._immediateFn(function() {
    let cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected
    if (cb === null) {
      ;(self._state === 1 ? resolve : reject)(deferred.promise, self._value)
      return
    }
    let ret
    try {
      ret = cb(self._value)
    } catch (e) {
      reject(deferred.promise, e)
      return
    }
    resolve(deferred.promise, ret)
  })
}

function resolve(self, newValue) {
  try {
    // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
    if (newValue === self)
      throw new TypeError('A promise cannot be resolved with itself.')
    if (
      newValue &&
      (typeof newValue === 'object' || typeof newValue === 'function')
    ) {
      let then = newValue.then
      if (newValue instanceof Promise) {
        self._value = newValue
        finale(self)
        return
      } else if (typeof then === 'function') {
        doResolve(then(newValue).bind(self))
        return
      }
    }
    self._state = 1
    self._value = newValue
    finale(self)
  } catch (e) {
    reject(self, e)
  }
}

function reject(self, newValue) {
  self._state = 2
  self._value = newValue
  finale(self)
}

function finale(self) {
  if (self._state === 2 && self._deferreds.length === 0) {
    Promise._immediateFn(function() {
      if (!self._handled) {
        Promise._unhandledRejectionFn(self._value)
      }
    })
  }

  for (let i = 0, len = self._deferreds.length; i < len; i++) {
    handle(self, self._deferreds[i])
  }
  self._deferreds = []
}

/**
 * @constructor
 */
function Handler(onFulfilled, onRejected, promise) {
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null
  this.onRejected = typeof onRejected === 'function' ? onRejected : null
  this.promise = promise
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, self) {
  let done = false
  let resolveValue
  let rejectReason

  try {
    fn(
      function(value) {
        resolveValue = value
        if (done) return
        done = true
        resolve(self, promiseResolver.process(value))
      },
      function(reason) {
        rejectReason = reason
        if (done) return
        done = true
        reject(self, promiseResolver.process(reason))
      },
    )
    promiseQueue.remove(self)
  } catch (ex) {
    promiseQueue.remove(self)
    if (done) return
    done = true
    reject(self, promiseResolver.process(ex))
  }
  if (promiseResolver.shouldResolve()) {
    self._handled = true
    resolve(self, promiseResolver.process(resolveValue))
  }
  if (promiseResolver.shouldReject()) {
    self._handled = true
    reject(self, promiseResolver.process(rejectReason))
  }
  promiseQueue.remove(self)
}

Promise.prototype['catch'] = function(onRejected) {
  return this.then(null, onRejected)
}

Promise.prototype.then = function(onFulfilled, onRejected) {
  function noop() {
    return null
  }
  noop.isThen = true
  // @ts-ignore
  let prom = new this.constructor(noop)

  handle(this, new Handler(onFulfilled, onRejected, prom))
  return prom
}

Promise.prototype['finally'] = promiseFinally

Promise.all = function(arr) {
  return new Promise(function(resolve, reject) {
    if (!arr || typeof arr.length === 'undefined')
      throw new TypeError('Promise.all accepts an array')
    let args = Array.prototype.slice.call(arr)
    if (args.length === 0) return resolve([])
    let remaining = args.length

    function res(i, val) {
      try {
        if (val && (typeof val === 'object' || typeof val === 'function')) {
          let then = val.then
          if (typeof then === 'function') {
            then.call(
              val,
              function(val) {
                res(i, val)
              },
              reject,
            )
            return
          }
        }
        args[i] = val
        if (--remaining === 0) {
          resolve(args)
        }
      } catch (ex) {
        reject(ex)
      }
    }

    for (let i = 0; i < args.length; i++) {
      res(i, args[i])
    }
  })
}

Promise.resolve = function(value) {
  if (value && typeof value === 'object' && value.constructor === Promise) {
    return value
  }

  return new Promise(function(resolve) {
    resolve(value)
  })
}

Promise.reject = function(value) {
  return new Promise(function(resolve, reject) {
    reject(value)
  })
}

Promise.race = function(values) {
  return new Promise(function(resolve, reject) {
    for (let i = 0, len = values.length; i < len; i++) {
      values[i].then(resolve, reject)
    }
  })
}

// Use polyfill for setImmediate for performance gains
Promise._immediateFn =
  (typeof setImmediate === 'function' &&
    function(fn) {
      setImmediate(fn)
    }) ||
  function(fn) {
    setTimeoutFunc(fn, 0)
  }

Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
  if (typeof console !== 'undefined' && console) {
    console.warn('Possible Unhandled Promise Rejection:', err) // eslint-disable-line no-console
  }
}

export default Promise
