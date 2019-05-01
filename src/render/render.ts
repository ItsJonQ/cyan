import RenderWrapper from './RenderWrapper'

const render = (WrappedComponent = null) => {
  return new RenderWrapper(WrappedComponent)
}

export default render
