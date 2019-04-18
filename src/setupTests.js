import cleanUp from './cleanUp'
import { completelyResetStore, resetStore } from './store'
import { resetConfig } from './configuration'
import { clearFakePromises, clearPromiseQueue } from './promises'
import setupJSDOM from './polyfills/jsdom.polyfills'

const setupTests = () => {
  setupJSDOM()

  beforeEach(() => {
    clearPromiseQueue()
  })

  afterEach(() => {
    cleanUp()
    clearFakePromises()
    clearPromiseQueue()
    resetStore()
  })

  afterAll(() => {
    completelyResetStore()
    resetConfig()
  })
}

export default setupTests
