import React from 'react'
import { cy } from '../index'

describe('cy', () => {
  describe('__getNode', () => {
    test('Throws error if commands based on getNode cannot be completed', () => {
      cy.render(<div />)

      expect(() => cy.get('ul').find('li')).toThrowError()
    })
  })
})
