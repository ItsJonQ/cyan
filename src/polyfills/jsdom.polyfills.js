const setupJSDOM = () => {
  beforeEach(() => {
    /**
     * window
     */
    window.IntersectionObserver = () => ({
      disconnect: () => null,
      observe: () => null,
      takeRecords: () => null,
      unobserve: () => null,
    })

    window.getSelection = () => {
      return {
        addRange: () => ({}),
        removeAllRanges: () => ({}),
      }
    }

    window.scrollTo = () => null

    /**
     * document
     */
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
    /**
     * window
     */
    window.IntersectionObserver = undefined
    window.getSelection = undefined
    window.scrollTo = undefined

    /**
     * document
     */
    document.createRange = undefined
    document.execCommand = undefined
  })
}

export default setupJSDOM
