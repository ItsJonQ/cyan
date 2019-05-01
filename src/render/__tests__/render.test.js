import React from 'react'
import { cy } from '../../index'

describe('render', () => {
  let spy

  beforeEach(() => {
    spy = jest.spyOn(global.console, 'log').mockImplementation(() => {})
  })

  afterEach(() => {
    spy.mockRestore()
  })

  test('Can render null', () => {
    expect(cy.render()).toBeTruthy()
  })

  test('Can setProps after rendering', () => {
    const Base = ({ title }) => <span>{title}</span>
    const wrapper = cy.render(<Base title="Hello" />)

    expect(cy.get('span').text()).toBe('Hello')

    wrapper.setProps({ title: 'There' })

    expect(cy.get('span').text()).toBe('There')
  })

  test('Can setProps without props', () => {
    const Base = ({ title }) => <span>{title}</span>
    const wrapper = cy.render(<Base title="Hello" />)

    expect(cy.get('span').text()).toBe('Hello')

    wrapper.setProps()

    expect(cy.get('span').text()).toBe('Hello')
  })

  test('Can setProp without props', () => {
    const Base = ({ title }) => <span>{title}</span>
    const wrapper = cy.render(<Base title="Hello" />)

    expect(cy.get('span').text()).toBe('Hello')

    wrapper.setProp()

    cy.debug()

    expect(cy.get('span').text()).toBe('Hello')
  })

  test('Does not unmount previous Component', () => {
    const mountSpy = jest.fn()
    const unmountSpy = jest.fn()

    class Base extends React.Component {
      componentDidMount() {
        mountSpy()
      }

      componentWillUnmount() {
        unmountSpy()
      }

      render() {
        const { title } = this.props
        return <span>{title}</span>
      }
    }

    const wrapper = cy.render(<Base title="Hello" />)

    expect(mountSpy).toHaveBeenCalled()
    expect(unmountSpy).not.toHaveBeenCalled()
    expect(cy.get('span').text()).toBe('Hello')

    wrapper.setProps({ title: 'There' })
    expect(cy.get('span').text()).toBe('There')
    expect(unmountSpy).not.toHaveBeenCalled()

    wrapper.setProp('title', 'Howdy')
    expect(cy.get('span').text()).toBe('Howdy')
    expect(unmountSpy).not.toHaveBeenCalled()
  })

  test('Can retrieve document.body.innerHTML', () => {
    const wrapper = cy.render(<div>Hello</div>)

    expect(wrapper.html()).toBe('<div>Hello</div>')
  })

  test('Can log (debug) innerHTML', () => {
    const wrapper = cy.render(<div>Hello</div>)

    wrapper.debug()

    expect(spy).toHaveBeenCalledWith('<div>Hello</div>')
  })

  test('Can cleanUp document.body', () => {
    const wrapper = cy.render(<div>Hello</div>)

    expect(cy.get('div').exists()).toBeTruthy()

    wrapper.cleanUp()

    expect(cy.get('div').exists()).toBeFalsy()
  })

  test('Can unmount component', () => {
    const wrapper = cy.render(<div>Hello</div>)

    expect(cy.get('div').exists()).toBeTruthy()

    wrapper.unmount()

    expect(cy.get('div').exists()).toBeFalsy()
  })

  test('Can unmount + re-mount component', () => {
    const wrapper = cy.render(<div>Hello</div>)

    wrapper.unmount()
    expect(cy.get('div').exists()).toBeFalsy()

    wrapper.mount()
    expect(cy.get('div').exists()).toBeTruthy()
  })

  test('Can unmount + mount another component', () => {
    const wrapper = cy.render(<div>Hello</div>)

    wrapper.unmount()
    expect(cy.get('div').exists()).toBeFalsy()

    wrapper.mount(<span>There</span>)
    expect(cy.get('div').exists()).not.toBeTruthy()
    expect(cy.get('span').exists()).toBeTruthy()
  })
})
