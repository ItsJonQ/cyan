import commandList from '../commands'

const addCommands = baseClass => {
  const commands = Object.keys(commandList)
  commands.forEach(key => {
    baseClass.prototype[key] = commandList[key]
  })
}

export default addCommands
