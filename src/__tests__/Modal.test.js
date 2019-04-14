import React from 'react'
import Modal from '@helpscout/hsds-react/components/Modal'
import { cy, render } from '../index'

jest.useFakeTimers()

describe('Modal', () => {
  test('Can open/close a Modal', () => {
    render(
      <Modal trigger={<button>Open</button>}>
        <div className="content">Content</div>
      </Modal>,
    )

    expect(cy.get('.content').exists()).toBe(false)

    cy.get('button').click()

    expect(cy.get('.content').exists()).toBe(true)

    cy.getByCy('CloseButton').click()

    jest.runOnlyPendingTimers()

    expect(cy.get('.content').exists()).toBe(false)
  })

  test('Can render an opened Modal', () => {
    render(
      <Modal isOpen trigger={<button>Open</button>}>
        <div className="content">Content</div>
      </Modal>,
    )

    jest.runOnlyPendingTimers()

    expect(cy.get('.content').exists()).toBe(true)
  })
})
