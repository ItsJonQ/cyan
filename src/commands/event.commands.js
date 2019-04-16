import fireEvent from '../fireEvent'

const commands = Object.keys(fireEvent).reduce((commands, key) => {
  return {
    ...commands,
    [key]: function() {
      const node = this.__getNode(key)
      fireEvent[key](node)
      jest.runAllTimers()

      return this
    },
  }
}, {})

export default commands
