const setupJSDOM = () => {
  beforeEach(() => {
    jest.spyOn(window, 'requestAnimationFrame').mockImplementation(cb => cb())

    window.getSelection = () => {
      return {
        addRange: () => ({}),
        removeAllRanges: () => ({}),
      }
    }
    document.createRange = () => ({
      setStart: () => {},
      setEnd: () => {},
      selectNodeContents: () => {},
      commonAncestorContainer: {
        nodeName: 'BODY',
        ownerDocument: document,
      },
    })

    document.execCommand = () => null
  })

  afterEach(() => {
    window.getSelection = undefined
    window.requestAnimationFrame.mockRestore()
    document.createRange = undefined
    document.execCommand = undefined
  })
}

export default setupJSDOM
