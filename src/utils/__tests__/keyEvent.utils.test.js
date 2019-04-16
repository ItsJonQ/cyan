import React from 'react'
import { cy } from '../../index'
import { simulateKeyEvent } from '../keyEvent.utils'

describe('utils/keyEvent', () => {
  describe('simulateKeyEvent', () => {
    test('Can fire an event from a node', () => {
      const spy = jest.fn()
      cy.render(<input onKeyDown={spy} />)

      const el = cy.get('input').getNode()

      simulateKeyEvent('keyDown', '{esc}', el)

      expect(spy).toHaveBeenCalled()
    })

    test('Does not fire an event if command is not defined', () => {
      const spy = jest.fn()
      cy.render(<input onKeyDown={spy} />)

      const el = cy.get('input').getNode()

      simulateKeyEvent('keyDown', null, el)

      expect(spy).not.toHaveBeenCalled()
    })
  })
})
