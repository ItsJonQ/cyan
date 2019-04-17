import React from 'react'
import { cy } from '../../../index'
import BasicExample from '../../../__fixtures__/BasicExample'

describe('react-router', () => {
  test('Can render a React Router app', () => {
    cy.render(<BasicExample />)

    expect(cy.get('h2').contains('Home')).toBeTruthy()
  })

  test('Can change routes by clicking Links', () => {
    cy.render(<BasicExample />)

    cy.get('a[href="/about"]').click()

    expect(cy.get('h2').contains('About')).toBeTruthy()

    cy.get('a[href="/"]').click()
    expect(cy.get('h2').contains('Home')).toBeTruthy()
  })

  test('Can navigate to sub-routes', () => {
    cy.render(<BasicExample />)

    cy.get('a[href="/topics"]').click()

    expect(cy.get('h2').contains('Topics')).toBeTruthy()
    expect(cy.get('h3').contains('rendering')).toBeFalsy()

    cy.get('a[href="/topics/rendering"]').click()

    expect(cy.get('h3').contains('rendering')).toBeTruthy()
  })
})
