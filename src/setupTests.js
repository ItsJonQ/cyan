import cleanUp from './cleanUp'

const setupTests = () => {
  beforeAll(() => {
    jest.useFakeTimers()
  })

  beforeEach(() => {
    jest.spyOn(window, 'requestAnimationFrame').mockImplementation(cb => cb())
  })

  afterEach(() => {
    cleanUp()
  })
}

export default setupTests
