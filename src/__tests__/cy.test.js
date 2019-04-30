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

      expect(cy.getByCy('hello').isTagName('aside')).toBe(true)
    })

    test('Can get a DOM Node by data-cy with special characters inside', () => {
      cy.render(
        <main>
          <section />
          <aside data-cy="hello.you" />
        </main>,
      )

      expect(cy.getByCy('hello.you').isTagName('aside')).toBe(true)
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
          .isTagName('aside'),
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

  describe('getByText', () => {
    test('Can get an DOM Node by text content', () => {
      cy.render(
        <main>
          <section>
            <ul>
              <li>Hello</li>
            </ul>
          </section>
        </main>,
      )

      expect(cy.getByText('Hello').getTagName()).toBe('li')
    })

    test('Can chain getByText', () => {
      cy.render(
        <main>
          <p>Hello</p>
          <section>
            <ul>
              <li>Hello</li>
            </ul>
          </section>
        </main>,
      )

      expect(
        cy
          .get('main')
          .get('section')
          .getByText('Hello')
          .getTagName(),
      ).toBe('li')
    })
  })
})
