import { pretty } from './utils/pretty.utils'

const debug = (...args) => console.log(pretty(document.body.innerHTML), ...args)

export default debug
