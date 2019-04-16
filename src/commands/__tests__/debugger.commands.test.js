import React from 'react'
import { cy } from '../../index'

describe('commands/debugger', () => {
  let spy

  beforeEach(() => {
    spy = jest.spyOn(global.console, 'log').mockImplementation(() => {})
  })

  afterEach(() => {
    spy.mockRestore()
  })

  describe('html', () => {
    test('Outputs the (pretty) HTML from the rendered component', () => {
      cy.render(
        <div>
          <p />
        </div>,
      )

      expect(cy.get('div').html()).toBe('<div>\n  <p></p>\n</div>')
    })
  })

  describe('debug', () => {
    test('Logs the (pretty) HTML from the rendered component', () => {
      cy.render(
        <div>
          <p />
        </div>,
      )

      cy.get('div').debug()

      expect(spy).toHaveBeenCalledWith('<div>\n  <p></p>\n</div>')
    })
  })
})
