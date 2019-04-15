import ReactDOM from 'react-dom'
import { getRootNode } from './utils/render.utils'

const cleanUp = () => {
  const root = getRootNode()
  if (root) {
    ReactDOM.unmountComponentAtNode(root)
  }
  document.body.innerHTML = ''
}

export default cleanUp
