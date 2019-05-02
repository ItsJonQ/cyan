const mockImplementation = () => {
  // Cache the mock implementation in scope
  let raf

  beforeEach(() => {
    raf = jest
      .spyOn(window, 'requestAnimationFrame')
      .mockImplementation(function(cb) {
        // Handle edge-case where the callback is a Function: schedule.
        // Otherwise, a maximum callstack issue happens, and Jest blows up.
        if (cb.name !== 'schedule') {
          return cb()
        }
      })
  })

  afterEach(() => {
    // Restore and reset
    raf && raf.mockRestore()
    raf = null
  })
}

export default mockImplementation
