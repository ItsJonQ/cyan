import cleanUp from './cleanUp'
import { completelyResetStore, resetStore } from './store'
import { resetConfig } from './configuration'
import { mockRequestAnimationFrame } from './mocks'
import { clearFakePromises } from './promises'
import promiseQueue from './promises/promiseQueue'
import promiseResolver from './promises/promiseResolver'
import setupJSDOM from './polyfills/jsdom.polyfills'

const setupTests = () => {
  setupJSDOM()
  mockRequestAnimationFrame()

  beforeEach(() => {
    promiseResolver.clear()
    promiseQueue.clear()
  })

  afterEach(() => {
    cleanUp()
    clearFakePromises()
    promiseResolver.clear()
    promiseQueue.clear()
    resetStore()
  })

  afterAll(() => {
    completelyResetStore()
    resetConfig()
  })
}

export default setupTests
