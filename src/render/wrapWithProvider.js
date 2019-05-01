import * as React from 'react'
import { MemoryRouter as Router } from 'react-router'
import { Provider } from 'react-redux'
import { getStore } from '../store'

const wrapWithProvider = WrappedComponent => {
  const store = getStore()

  class WrappedWithProvider extends React.Component {
    render() {
      if (!WrappedComponent) return null

      return (
        <Provider store={store}>
          <Router>{React.cloneElement(WrappedComponent, this.props)}</Router>
        </Provider>
      )
    }
  }

  return WrappedWithProvider
}

export default wrapWithProvider
