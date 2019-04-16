import React from 'react'
import { cy } from '../../index'

describe('commands/assertion', () => {
  describe('contains', () => {
    test('Can check against innerHTML content', () => {
      cy.render(
        <div>
          <section>Hello</section>
        </div>,
      )

      const assert = cy.get('div')

      expect(assert.contains('section')).toBe(true)
      expect(assert.contains('Hello')).toBe(true)
      expect(assert.contains('Nope')).toBe(false)
    })
  })

  describe('exists', () => {
    test('Can check if node exists', () => {
      cy.render(
        <div>
          <section>Hello</section>
        </div>,
      )

      expect(cy.get('div').exists()).toBe(true)
      expect(cy.get('main').exists()).toBe(false)
    })
  })

  describe('hasAttribute', () => {
    test('Can check attribute of a node', () => {
      cy.render(<div id="hello" data-color="red" />)
      const assert = cy.get('div')

      expect(assert.hasAttribute('id')).toBe(true)
      expect(assert.hasAttribute('data-color')).toBe(true)
      expect(assert.hasAttribute('data-nope')).toBe(false)
    })
  })

  describe('hasAttribute', () => {
    test('Can check attribute of a node', () => {
      cy.render(<div id="hello" data-color="red" />)
      const assert = cy.get('div')

      expect(assert.hasAttribute('id')).toBe(true)
      expect(assert.hasAttribute('data-color')).toBe(true)
      expect(assert.hasAttribute('data-nope')).toBe(false)
    })

    test('Can check attribute of a node with .hasAttr', () => {
      cy.render(<div id="hello" data-color="red" />)
      const assert = cy.get('div')

      expect(assert.hasAttr('id')).toBe(true)
      expect(assert.hasAttr('data-color')).toBe(true)
      expect(assert.hasAttr('data-nope')).toBe(false)
    })
  })

  describe('hasClassName', () => {
    test('Can check className for node', () => {
      cy.render(<div className="one two three" />)
      const assert = cy.get('div')

      expect(assert.hasClassName('one')).toBe(true)
      expect(assert.hasClassName('two')).toBe(true)
      expect(assert.hasClassName('three')).toBe(true)
    })

    test('Can check className for node with .hasClass()', () => {
      cy.render(<div className="one two three" />)
      const assert = cy.get('div')

      expect(assert.hasClass('one')).toBe(true)
      expect(assert.hasClass('two')).toBe(true)
      expect(assert.hasClass('three')).toBe(true)
    })
  })

  describe('hasTagName', () => {
    test('Can check tagName for node', () => {
      cy.render(<div className="one two three" />)
      const assert = cy.get('div')

      expect(assert.hasTagName('div')).toBe(true)
      expect(assert.hasTagName('DIV')).toBe(true)
    })

    test('Can check tagName for node, with hasTag', () => {
      cy.render(<div className="one two three" />)
      const assert = cy.get('div')

      expect(assert.hasTag('div')).toBe(true)
      expect(assert.hasTag('DIV')).toBe(true)
    })
  })

  describe('isChecked', () => {
    test('Can check for the checked attribute', () => {
      const spy = jest.fn()
      cy.render(<input checked={true} onChange={spy} />)
      const assert = cy.get('input')

      expect(assert.isChecked()).toBe(true)
    })
  })

  describe('isDisabled', () => {
    test('Can check for the disabled attribute', () => {
      cy.render(<input disabled={true} />)
      const assert = cy.get('input')

      expect(assert.isDisabled()).toBe(true)
    })
  })

  describe('toContain', () => {
    let spy

    beforeEach(() => {
      spy = jest.spyOn(global.console, 'warn').mockImplementation(() => {})
    })

    afterEach(() => {
      spy.mockRestore()
    })

    test('Can check against innerHTML content, with a warning', () => {
      cy.render(
        <div>
          <section>Hello</section>
        </div>,
      )

      const assert = cy.get('div')

      expect(assert.toContain('section')).toBe(true)
      expect(assert.toContain('Hello')).toBe(true)
      expect(assert.toContain('Nope')).toBe(false)

      expect(spy).toHaveBeenCalled()
    })
  })

  describe('toExist', () => {
    let spy

    beforeEach(() => {
      spy = jest.spyOn(global.console, 'warn').mockImplementation(() => {})
    })

    afterEach(() => {
      spy.mockRestore()
    })

    test('Can check if node exists, with a warning', () => {
      cy.render(
        <div>
          <section>Hello</section>
        </div>,
      )

      expect(cy.get('div').toExist()).toBe(true)
      expect(cy.get('main').toExist()).toBe(false)

      expect(spy).toHaveBeenCalled()
    })
  })
})
