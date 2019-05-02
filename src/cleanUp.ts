import ReactDOM from 'react-dom'
import { getRootNode } from './utils/render.utils'

const cleanUp = (): void => {
  const root = getRootNode()
  if (root) {
    ReactDOM.unmountComponentAtNode(root)
  }
}

export default cleanUp
