import React from 'react'
import { cy } from '../../index'

describe('commands/action', () => {
  describe('check', () => {
    test('Can check an input', () => {
      const spy = jest.fn()

      cy.render(<input type="radio" checked={false} onChange={spy} />)
      const assert = cy.get('input')

      assert.check()

      expect(assert.isChecked()).toBe(true)
    })
  })

  describe('clear', () => {
    test('Can clear an input value', () => {
      const spy = jest.fn()

      cy.render(<input value="hello!" onChange={spy} />)
      const assert = cy.get('input')

      assert.clear()

      expect(assert.value()).toBe('')
    })
  })

  describe('hover', () => {
    test('Can trigger a hover', () => {
      const spy = jest.fn()

      cy.render(<input onMouseEnter={spy} />)
      const assert = cy.get('input')

      assert.hover()

      expect(spy).toHaveBeenCalled()
    })
  })

  describe('type', () => {
    test('Can enter a value', () => {
      const spy = jest.fn()

      cy.render(<input onChange={spy} />)
      const assert = cy.get('input')

      assert.type('Hello There!')

      expect(assert.value()).toBe('Hello There!')
    })
  })

  describe('uncheck', () => {
    test('Can uncheck an input', () => {
      const spy = jest.fn()

      cy.render(<input type="radio" checked={true} onChange={spy} />)
      const assert = cy.get('input')

      assert.uncheck()

      expect(assert.isChecked()).toBe(false)
    })
  })
})
