class PromiseQueue {
  queue: Array<unknown> = []
  runImmediately: boolean = false
  length: number = 0

  add(promise) {
    this.queue = [...this.queue, promise]
    this.length = this.queue.length

    if (this.runImmediately) {
      promise.process()
    }
  }

  remove(promise) {
    this.queue = this.queue.filter(p => p !== promise)
    this.length = this.queue.length
  }

  clear() {
    this.queue = []
    this.length = 0
    this.runImmediately = false
  }

  debug() {
    console.log(this.queue)
  }

  getNextPromise() {
    return this.queue[0]
  }

  runNextPromise() {
    const promise = this.getNextPromise()
    if (promise) {
      // @ts-ignore
      promise.process()
    }
  }

  runAllPromises() {
    this.queue.forEach(promise => {
      // @ts-ignore
      promise.process()
    })
  }

  runPromisesImmediately() {
    this.runImmediately = true
  }
}

const promiseQueue = new PromiseQueue()

export default promiseQueue
