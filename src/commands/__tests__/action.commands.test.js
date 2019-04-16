import React from 'react'
import { cy } from '../../index'

describe('commands/action', () => {
  describe('check', () => {
    test('Can check an input', () => {
      const spy = jest.fn()

      cy.render(<input type="radio" checked={false} onChange={spy} />)
      const node = cy.get('input')

      node.check()

      expect(node.isChecked()).toBe(true)
    })
  })

  describe('clear', () => {
    test('Can clear an input value', () => {
      const spy = jest.fn()

      cy.render(<input value="hello!" onChange={spy} />)
      const node = cy.get('input')

      node.clear()

      expect(node.value()).toBe('')
    })
  })

  describe('hover', () => {
    test('Can trigger a hover', () => {
      const spy = jest.fn()

      cy.render(<input onMouseEnter={spy} />)
      const node = cy.get('input')

      node.hover()

      expect(spy).toHaveBeenCalled()
    })
  })

  describe('keyDown', () => {
    test('Can trigger a keyDown', () => {
      const spy = jest.fn()

      cy.render(<input onKeyDown={spy} />)
      const node = cy.get('input')

      node.keyDown('{enter}')

      expect(spy).toHaveBeenCalled()
    })
  })

  describe('keyUp', () => {
    test('Can trigger a keyUp', () => {
      const spy = jest.fn()

      cy.render(<input onKeyUp={spy} />)
      const node = cy.get('input')

      node.keyUp('{enter}')

      expect(spy).toHaveBeenCalled()
    })
  })

  describe('trigger', () => {
    test('Can trigger an event', () => {
      const spy = jest.fn()

      cy.render(<input onBlur={spy} />)
      const node = cy.get('input')

      node.trigger('blur')

      expect(spy).toHaveBeenCalled()
    })
  })

  describe('type', () => {
    test('Can enter a value', () => {
      const spy = jest.fn()

      cy.render(<input onChange={spy} />)
      const node = cy.get('input')

      node.type('Hello There!')

      expect(node.value()).toBe('Hello There!')
    })
  })

  describe('uncheck', () => {
    test('Can uncheck an input', () => {
      const spy = jest.fn()

      cy.render(<input type="radio" checked={true} onChange={spy} />)
      const node = cy.get('input')

      node.uncheck()

      expect(node.isChecked()).toBe(false)
    })
  })
})
