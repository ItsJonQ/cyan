import React from 'react'
import { cy } from '../../index'

describe('commands/get', () => {
  describe('getAttribute', () => {
    test('Can retrieve HTML attributes', () => {
      cy.render(<div data-item="hello" title="there" />)

      const assert = cy.get('div')
      expect(assert.getAttribute('data-item')).toBe('hello')
      expect(assert.getAttribute('title')).toBe('there')
    })

    test('getAttr alias works', () => {
      cy.render(<div data-item="hello" title="there" />)

      const assert = cy.get('div')
      expect(assert.getAttr('data-item')).toBe('hello')
      expect(assert.getAttr('title')).toBe('there')
    })
  })

  describe('getComputedStyle', () => {
    test('Can retrieve computed style', () => {
      cy.render(<div style={{ display: 'inline-block' }} />)

      const assert = cy.get('div')
      expect(typeof assert.getComputedStyle()).toBe('object')
      expect(assert.getComputedStyle('display')).toBe('inline-block')
    })

    test('style alias works', () => {
      cy.render(<div style={{ display: 'inline-block' }} />)

      const assert = cy.get('div')
      expect(typeof assert.style()).toBe('object')
      expect(assert.style('display')).toBe('inline-block')
    })
  })

  describe('getId', () => {
    test('Can retrieve id', () => {
      cy.render(<div id="hello" />)

      const assert = cy.get('div')
      expect(assert.getId()).toBe('hello')
    })
  })

  describe('getTagName', () => {
    test('Can retrieve tagName', () => {
      cy.render(<div id="hello" />)

      const assert = cy.get('div')
      expect(assert.getTagName()).toBe('div')
    })

    test('tagName alias works', () => {
      cy.render(<div id="hello" />)

      const assert = cy.get('div')
      expect(assert.tagName()).toBe('div')
    })
  })

  describe('getValue', () => {
    test('Can get the value', () => {
      const spy = jest.fn()
      cy.render(<input value="hello" onChange={spy} />)

      const assert = cy.get('input')
      expect(assert.getValue()).toBe('hello')
    })

    test('Can set the value', () => {
      const spy = jest.fn()
      cy.render(<input value="hello" onChange={spy} />)

      const assert = cy.get('input')
      assert.getValue('there')

      expect(assert.getValue()).toBe('there')
    })

    test('value alias works', () => {
      const spy = jest.fn()
      cy.render(<input value="hello" onChange={spy} />)

      const assert = cy.get('input')
      expect(assert.value()).toBe('hello')

      assert.value('there')
      expect(assert.value()).toBe('there')
    })
  })

  describe('getText', () => {
    test('Can retrieve text content', () => {
      cy.render(
        <div>
          <p>
            <a>Hello</a>
          </p>
        </div>,
      )

      const assert = cy.get('div')

      expect(assert.getText()).toBe('Hello')
    })

    test('Returns an empty string if no text content', () => {
      cy.render(
        <div>
          <p />
        </div>,
      )

      const assert = cy.get('div')

      expect(assert.getText()).toBe('')
    })

    test('text alias works', () => {
      cy.render(
        <div>
          <p>
            <a>Hello</a>
          </p>
        </div>,
      )

      const assert = cy.get('div')

      expect(assert.text()).toBe('Hello')
    })
  })
})
