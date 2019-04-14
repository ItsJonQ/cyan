export const addCommands = (baseClass, commandList) => {
  const commands = Object.keys(commandList)
  commands.forEach(key => {
    baseClass.prototype[key] = commandList[key]
  })
}

export const combineCommands = commandList => {
  return Object.keys(commandList).reduce((commands, key) => {
    return { ...commands, ...commandList[key] }
  }, {})
}
