import React from 'react'
import { connect } from 'react-redux'
import { cy, setStoreState } from '../../index'

describe('render/redux', () => {
  test('Can render a Redux connected component, without setup', () => {
    const Base = () => <div>Hello</div>
    const Connected = connect()(Base)

    cy.render(<Connected />)

    expect(cy.get('div').text()).toBe('Hello')
  })

  test('Can render a Redux connected with store state, without setup', () => {
    setStoreState({ title: 'Hello' })

    const Base = ({ title }) => <div>{title}</div>
    const mapStateToProps = state => state
    const Connected = connect(mapStateToProps)(Base)

    cy.render(<Connected />)

    expect(cy.get('div').text()).toBe('Hello')
  })
})
