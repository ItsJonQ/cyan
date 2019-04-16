import cleanUp from './cleanUp'
import { completelyResetStore, resetStore } from './store'

const setupTests = () => {
  beforeAll(() => {
    jest.useFakeTimers()
  })

  beforeEach(() => {
    jest.spyOn(window, 'requestAnimationFrame').mockImplementation(cb => cb())
  })

  afterEach(() => {
    cleanUp()
    resetStore()
  })

  afterAll(() => {
    completelyResetStore()
  })
}

export default setupTests
