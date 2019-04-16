import React from 'react'
import { cy } from '../index'

describe('cy', () => {
  describe('__getNode', () => {
    test('Throws error if commands based on getNode cannot be completed', () => {
      cy.render(<div />)

      expect(() => cy.get('ul').find('li')).toThrowError()
    })
  })

  describe('get', () => {
    test('Can get an DOM Node by query selector', () => {
      cy.render(
        <main>
          <section />
          <aside />
        </main>,
      )

      expect(cy.get('section').exists()).toBe(true)
    })
  })

  describe('getByCy', () => {
    test('Can get an DOM Node by data-cy', () => {
      cy.render(
        <main>
          <section />
          <aside data-cy="hello" />
        </main>,
      )

      expect(cy.getByCy('hello').hasTagName('aside')).toBe(true)
    })

    test('Can get an DOM Node by data-cy by chaining', () => {
      cy.render(
        <main>
          <section />
          <aside data-cy="hello" />
        </main>,
      )

      expect(
        cy
          .get('main')
          .getByCy('hello')
          .hasTagName('aside'),
      ).toBe(true)
    })
  })

  describe('find', () => {
    test('Can find an DOM Node by data-cy, with a warning', () => {
      const spy = jest
        .spyOn(global.console, 'warn')
        .mockImplementation(() => {})

      cy.render(
        <main>
          <section />
          <aside />
        </main>,
      )

      expect(cy.find('section').exists()).toBe(true)
      expect(spy).toHaveBeenCalled()

      spy.mockRestore()
    })
  })
})
