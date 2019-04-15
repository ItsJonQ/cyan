import ReactDOM from 'react-dom'
import cleanUp from './cleanUp'
import debug from './debug'
import { createRootNode } from './utils/render.utils'

const render = WrappedComponent => {
  // Create the root node for ReactDOM to mount to
  const root = createRootNode()
  document.body.appendChild(root)

  // Render the WrappedComponent into the root node
  ReactDOM.render(WrappedComponent, root)

  jest.runAllTimers()

  return {
    debug,
    html: debug,
    WrappedComponent,
    cleanUp,
  }
}

export default render
