import * as React from 'react'
import { MemoryRouter as Router } from 'react-router'
import { Provider } from 'react-redux'
import { getStore } from '../store'

function wrapWithProvider(WrappedComponent) {
  const store = getStore()

  class WrappedWithProvider extends React.Component<any> {
    render() {
      if (!WrappedComponent) return null

      return (
        <Provider store={store}>
          <Router>{React.cloneElement(WrappedComponent, this.props)}</Router>
        </Provider>
      )
    }
  }

  return WrappedWithProvider as any
}

export default wrapWithProvider
