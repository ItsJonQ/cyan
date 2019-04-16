import React from 'react'
import debug from '../debug'
import { cy } from '../index'

describe('debug', () => {
  let spy

  beforeEach(() => {
    spy = jest.spyOn(global.console, 'log').mockImplementation(() => {})
  })

  afterEach(() => {
    spy.mockRestore()
  })

  test('Does not include mount root node in log', () => {
    cy.render(<span />)
    debug()

    expect(spy).toHaveBeenCalledWith('<span></span>')
  })

  test('Includes document.body sibling notes in log', () => {
    cy.render(<div />)
    const node = document.createElement('main')
    document.body.appendChild(node)

    debug()

    expect(spy).toHaveBeenCalledWith('<div></div>\n<main></main>')
  })
})
