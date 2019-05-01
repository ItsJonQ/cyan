import * as React from 'react'
import ReactDOM from 'react-dom'
import cleanUp from '../cleanUp'
import domCleanUp from '../domCleanUp'
import debug from '../debug'
import { runAllTimers } from '../timers'
import wrapWithProvider from './wrapWithProvider'
import { createRootNode, getDocumentHTML } from '../utils/render.utils'
import { isDefined } from '../utils/is.utils'

class RenderWrapper {
  Component: any
  WrappedComponent: any
  initialProps: any
  root: HTMLElement

  constructor(Component: any) {
    this.setComponent(Component)
    this.mount(Component)

    return this
  }

  setComponent(Component) {
    this.Component = Component && Component.type ? <Component.type /> : null
    this.initialProps = Component && Component.props ? Component.props : {}
  }

  mount(Component = this.Component) {
    this.cleanUp()
    this.setComponent(Component)
    // Create the root node for ReactDOM to mount to
    this.root = createRootNode()
    document.body.appendChild(this.root)

    // Render the WrappedComponent into the root node
    this.WrappedComponent = wrapWithProvider(this.Component)

    runAllTimers()
    this.render(this.initialProps)

    return this
  }

  setProps(props = this.initialProps) {
    this.render(props)
    return this
  }

  setProp(prop, value) {
    if (!isDefined(prop)) {
      return this
    }

    this.setProps({ [prop]: value })
    return this
  }

  debug() {
    debug()
    return this
  }

  html() {
    return getDocumentHTML()
  }

  cleanUp() {
    cleanUp()
    domCleanUp()
    return this
  }

  unmount() {
    this.cleanUp()
    return this
  }

  render(props) {
    const Component = this.WrappedComponent
    ReactDOM.render(<Component {...props} />, this.root)
    return this
  }
}

export default RenderWrapper
