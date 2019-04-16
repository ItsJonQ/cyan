import React from 'react'
import Input from '@helpscout/hsds-react/components/Input'
import { cy } from '../../index'

describe('Input', () => {
  test('Can update the value of an Input', () => {
    cy.render(<Input />)

    cy.get('input').type('Hello')

    expect(cy.get('input').value()).toBe('Hello')
  })
})
