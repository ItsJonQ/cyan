import setupTests from '../src/setupTests'

beforeEach(() => {
  jest.spyOn(window, 'requestAnimationFrame').mockImplementation(cb => cb())
})

afterEach(() => {
  window.requestAnimationFrame.mockRestore()
})

setupTests()
