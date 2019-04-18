import { pretty } from './utils/pretty.utils'
import { getRootNode } from './utils/render.utils'

const debug = (...args) => {
  const root = getRootNode() as Element
  const other = Array.from(document.body.children).filter(node => node !== root)

  const html = root.innerHTML + other.map(node => node.outerHTML).join('')

  console.log(pretty(html), ...args)
}

export default debug
