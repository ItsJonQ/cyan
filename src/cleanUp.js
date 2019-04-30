import ReactDOM from 'react-dom'
import { getRootNode } from './utils/render.utils'

const cleanUp = () => {
  const root = getRootNode()
  if (root) {
    ReactDOM.unmountComponentAtNode(root)
  }
}

export default cleanUp
