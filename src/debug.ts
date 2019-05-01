import { pretty } from './utils/pretty.utils'
import { getDocumentHTML } from './utils/render.utils'

const debug = (...args) => {
  console.log(pretty(getDocumentHTML()), ...args)
}

export default debug
