import ReactDOM from 'react-dom'
import cleanUp from './cleanUp'

const debug = () => document.body.innerHTML

const render = WrappedComponent => {
  // Create the root node for ReactDOM to mount to
  const root = document.createElement('div')
  root.id = 'CyanRoot'
  document.body.appendChild(root)

  // Render the WrappedComponent into the root node
  ReactDOM.render(WrappedComponent, root)

  // Migrate the node(s) from the rendered WrappedComponent
  Array.from(root.children).forEach(node => {
    document.body.appendChild(node)
  })

  // Remove the root node (no longer needed)
  document.body.removeChild(root)

  return {
    debug,
    html: debug,
    WrappedComponent,
    cleanUp,
  }
}

export default render
