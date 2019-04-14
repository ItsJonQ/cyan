import printMarkup from './printMarkup'

const debug = (...args) =>
  console.log(printMarkup(document.body.innerHTML), ...args)

export default debug
