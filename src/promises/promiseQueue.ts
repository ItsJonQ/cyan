class PromiseQueue {
  queue: Array<unknown> = []
  length: number = 0

  add(promise) {
    this.queue = [...this.queue, promise]
    this.length = this.queue.length
  }

  remove(promise) {
    this.queue = this.queue.filter(p => p !== promise)
    this.length = this.queue.length
  }

  clear() {
    this.queue = []
    this.length = 0
  }

  debug() {
    console.log(this.queue)
  }
}

const promiseQueue = new PromiseQueue()

export default promiseQueue
