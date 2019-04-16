import React from 'react'
import Dropdown from '@helpscout/hsds-react/components/Dropdown/DropdownV2'
import { cy } from '../../index'

describe('Dropdown', () => {
  test('Can open a Dropdown', () => {
    const props = {
      items: [{ value: 'one' }, { value: 'two' }],
    }
    cy.render(<Dropdown {...props} />)

    expect(cy.getByCy('DropdownMenu').exists()).toBe(false)

    cy.getByCy('DropdownTrigger').click()

    expect(cy.getByCy('DropdownMenu').exists()).toBe(true)
    expect(cy.getByCy('DropdownItem').length).toBe(2)
  })

  test('Can render an opened Dropdown', () => {
    const props = {
      items: [{ value: 'one' }, { value: 'two' }],
      isOpen: true,
    }
    cy.render(<Dropdown {...props} />)

    expect(cy.getByCy('DropdownMenu').exists()).toBe(true)
    expect(cy.getByCy('DropdownItem').length).toBe(2)
  })

  test('Calls a spy on click of an item', () => {
    const spy = jest.fn()
    const props = {
      items: [{ value: 'one' }, { value: 'two' }],
      onSelect: spy,
      isOpen: true,
    }
    cy.render(<Dropdown {...props} />)

    cy.getByCy('DropdownItem')
      .first()
      .click()

    cy.type('{esc}')

    expect(spy).toHaveBeenCalled()
  })

  test('Can close a Dropdown with {esc} press', () => {
    const props = {
      items: [{ value: 'one' }, { value: 'two' }],
      isOpen: true,
    }
    cy.render(<Dropdown {...props} />)

    expect(cy.getByCy('DropdownMenu').exists()).toBe(true)

    cy.type('{esc}')

    expect(cy.getByCy('DropdownMenu').exists()).toBe(false)
  })
})
