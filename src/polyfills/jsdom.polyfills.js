const setupJSDOM = () => {
  beforeEach(() => {
    window.getSelection = () => {
      return {
        addRange: () => ({}),
        removeAllRanges: () => ({}),
      }
    }
    window.scrollTo = () => null
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
    window.scrollTo = undefined
    document.createRange = undefined
    document.execCommand = undefined
  })
}

export default setupJSDOM
