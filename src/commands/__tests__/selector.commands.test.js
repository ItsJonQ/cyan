import React from 'react'
import { cy } from '../../index'

describe('commands/selector', () => {
  describe('children', () => {
    test('Can find children of a selector', () => {
      cy.render(
        <ul>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ul>,
      )

      const assert = cy.get('ul').children()

      expect(assert.length).toBe(3)
    })

    test('Returns empty collection if no children', () => {
      cy.render(<ul />)

      const assert = cy.get('ul').children()

      expect(assert.length).toBe(0)
    })
  })

  describe('closest', () => {
    test('Can find the closest element', () => {
      cy.render(
        <ul>
          <li>One</li>
          <li>Two</li>
          <li className="close">
            <button>Three</button>
          </li>
        </ul>,
      )

      const assert = cy.get('ul button').closest('li')

      expect(assert.hasClass('close')).toBe(true)
      expect(assert.matches('li.close')).toBe(true)
    })

    test('Can find the closest element beyond parent', () => {
      cy.render(
        <ul>
          <li>One</li>
          <li>Two</li>
          <li className="close">
            <button>Three</button>
          </li>
        </ul>,
      )

      const assert = cy.get('ul button').closest('ul')

      expect(assert.matches('ul')).toBe(true)
    })
  })

  describe('each', () => {
    test('Can modify each selector', () => {
      cy.render(
        <ul>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ul>,
      )

      const assert = cy.get('li').each(node => node.classList.add('list-item'))

      expect(assert.hasClass('list-item')).toBe(true)
    })
  })

  describe('eq', () => {
    test('Can retrieve a selector from an index value', () => {
      cy.render(
        <ul>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ul>,
      )

      const assert = cy.get('li').eq(1)

      expect(assert.text()).toEqual('Two')

      expect(
        cy
          .get('li')
          .eq(1)
          .prev()
          .text(),
      ).toEqual('One')

      expect(
        cy
          .get('li')
          .eq(1)
          .next()
          .text(),
      ).toEqual('Three')
    })
  })

  describe('filter', () => {
    test('Can filter matches', () => {
      cy.render(
        <ul>
          <li className="list-item">One</li>
          <li>Two</li>
          <li className="list-item">Three</li>
        </ul>,
      )

      const assert = cy.get('li').filter('.list-item')

      expect(assert.length).toBe(2)
      expect(assert.first().text()).toBe('One')
    })

    test('Can filter matches with empty results', () => {
      cy.render(
        <ul>
          <li className="list-item">One</li>
          <li>Two</li>
          <li className="list-item">Three</li>
        </ul>,
      )

      const assert = cy.get('li').filter('div')

      expect(assert.length).toBe(0)
    })
  })

  describe('find', () => {
    test('Can find matches', () => {
      cy.render(
        <ul>
          <li className="list-item">One</li>
          <li>Two</li>
          <li className="list-item">Three</li>
        </ul>,
      )

      const assert = cy.get('ul').find('.list-item')

      expect(assert.length).toBe(2)
      expect(assert.first().text()).toBe('One')
    })
  })

  describe('findByCy', () => {
    test('Can find matches', () => {
      cy.render(
        <ul>
          <li className="list-item">One</li>
          <li>Two</li>
          <li className="list-item" data-cy="Item">
            Three
          </li>
        </ul>,
      )

      const assert = cy.get('ul').findByCy('Item')

      expect(assert.length).toBe(1)
      expect(assert.first().text()).toBe('Three')
    })
  })

  describe('first', () => {
    test('Returns the first item', () => {
      cy.render(
        <ul>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ul>,
      )

      const assert = cy.get('ul > li').first()

      expect(assert.length).toBe(1)
      expect(assert.text()).toBe('One')
    })
  })

  describe('last', () => {
    test('Returns the last item', () => {
      cy.render(
        <ul>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ul>,
      )

      const assert = cy.get('ul > li').last()

      expect(assert.length).toBe(1)
      expect(assert.text()).toBe('Three')
    })
  })

  describe('next', () => {
    test('Returns the next item', () => {
      cy.render(
        <ul>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ul>,
      )

      const assert = cy
        .get('ul > li')
        .first()
        .next()

      expect(assert.length).toBe(1)
      expect(assert.text()).toBe('Two')
    })
  })

  describe('not', () => {
    test('Can filter non-matches', () => {
      cy.render(
        <ul>
          <li className="list-item">One</li>
          <li>Two</li>
          <li className="list-item">Three</li>
        </ul>,
      )

      const assert = cy.get('li').not('.list-item')

      expect(assert.length).toBe(1)
      expect(assert.text()).toBe('Two')
    })
  })

  describe('parent', () => {
    test('Can retrieve the parent', () => {
      cy.render(
        <ul>
          <li className="list-item">One</li>
          <li>Two</li>
          <li className="list-item">Three</li>
        </ul>,
      )

      const assert = cy.get('li').parent()

      expect(assert.length).toBe(1)
      expect(assert.tagName()).toBe('ul')
    })
  })

  describe('prev', () => {
    test('Returns the previous item', () => {
      cy.render(
        <ul>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ul>,
      )

      const assert = cy
        .get('ul > li')
        .eq(1)
        .prev()

      expect(assert.length).toBe(1)
      expect(assert.text()).toBe('One')
    })
  })
})
