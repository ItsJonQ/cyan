import { isFunction } from '../utils/is.utils'

class PromiseResolver {
  handler: any = undefined
  method?: string = undefined

  addHandler(handler) {
    if (isFunction(handler)) {
      this.handler = handler
    }
  }

  process(value) {
    if (this.handler) {
      return this.handler(value)
    } else {
      return value
    }
  }

  processWith(method) {
    this.method = method
  }

  shouldResolve(): boolean {
    return this.method === 'resolve'
  }

  shouldReject(): boolean {
    return this.method === 'reject'
  }

  clearHandler() {
    this.handler = undefined
  }

  clearProcessMethod() {
    this.method = undefined
  }

  reset() {
    this.clearHandler()
    this.clearProcessMethod()
  }

  clear() {
    this.reset()
  }
}

const promiseResolver = new PromiseResolver()

export default promiseResolver
