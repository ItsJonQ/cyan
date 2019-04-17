import cleanUp from './cleanUp'
import { completelyResetStore, resetStore } from './store'
import { resetConfig } from './configuration'

const setupTests = () => {
  beforeEach(() => {
    jest.spyOn(window, 'requestAnimationFrame').mockImplementation(cb => cb())
  })

  afterEach(() => {
    cleanUp()
    resetStore()
    window.requestAnimationFrame.mockRestore()
  })

  afterAll(() => {
    completelyResetStore()
    resetConfig()
  })
}

export default setupTests
