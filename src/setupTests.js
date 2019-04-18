import cleanUp from './cleanUp'
import { completelyResetStore, resetStore } from './store'
import { resetConfig } from './configuration'
import setupJSDOM from './polyfills/jsdom.polyfills'

const setupTests = () => {
  setupJSDOM()

  afterEach(() => {
    cleanUp()
    resetStore()
  })

  afterAll(() => {
    completelyResetStore()
    resetConfig()
  })
}

export default setupTests
