import cleanUp from './cleanUp'
import { completelyResetStore, resetStore } from './store'
import { resetConfig } from './configuration'
import { clearFakePromises } from './promises'
import setupJSDOM from './polyfills/jsdom.polyfills'

const setupTests = () => {
  setupJSDOM()

  afterEach(() => {
    cleanUp()
    resetStore()
  })

  afterAll(() => {
    clearFakePromises()
    completelyResetStore()
    resetConfig()
  })
}

export default setupTests
