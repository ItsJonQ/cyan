export const ROOT_ID = '__CYAN_ROOT_NODE__'

export const createRootNode = () => {
  const node = document.createElement('cyan-root-node')
  node.id = ROOT_ID

  return node
}

export const getRootNode = () => document.querySelector(`#${ROOT_ID}`)

export const getDocumentHTML = () => {
  const root = getRootNode() as Element
  const other = Array.from(document.body.children).filter(node => node !== root)

  return root.innerHTML + other.map(node => node.outerHTML).join('')
}
