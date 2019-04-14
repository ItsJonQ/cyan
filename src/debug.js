import pretty from './pretty'

const debug = (...args) => console.log(pretty(document.body.innerHTML), ...args)

export default debug
