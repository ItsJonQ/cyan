import fireEvent from '../fireEvent'

const commands = Object.keys(fireEvent).reduce((commands, key) => {
  return {
    ...commands,
    [key]: function() {
      fireEvent[key](this.getNode())
      return this
    },
  }
}, {})

export default commands
