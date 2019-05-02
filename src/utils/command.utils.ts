export const withCommands = commandList => baseClass => {
  const commands = Object.keys(commandList)
  commands.forEach(key => {
    baseClass.prototype[key] = commandList[key]
  })

  return baseClass
}

export const combineCommands = commandList => {
  return Object.keys(commandList).reduce((commands, key) => {
    return { ...commands, ...commandList[key] }
  }, {})
}
