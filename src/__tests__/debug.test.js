import React from 'react'
import { debug, debugByCy } from '../debug'
import { cy } from '../index'

describe('debug', () => {
  let spy
  let warnSpy

  beforeEach(() => {
    spy = jest.spyOn(global.console, 'log').mockImplementation(() => {})
    warnSpy = jest.spyOn(global.console, 'warn').mockImplementation(() => {})
  })

  afterEach(() => {
    spy.mockRestore()
    warnSpy.mockRestore()
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

  test('Can scope debug from a selector log', () => {
    cy.render(
      <main>
        <p>Hello</p>
      </main>,
    )

    debug('p')

    expect(spy).toHaveBeenCalledWith('<p>Hello</p>')
  })

  test('Logs entire HTML if scope selector cannot be found', () => {
    cy.render(
      <main>
        <p>Hello</p>
      </main>,
    )

    debug('span.className')

    expect(spy).toHaveBeenCalledWith('<main>\n  <p>Hello</p>\n</main>')
    expect(warnSpy).toHaveBeenCalled()
  })
})

describe('debugByCy', () => {
  let spy
  let warnSpy

  beforeEach(() => {
    spy = jest.spyOn(global.console, 'log').mockImplementation(() => {})
    warnSpy = jest.spyOn(global.console, 'warn').mockImplementation(() => {})
  })

  afterEach(() => {
    spy.mockRestore()
    warnSpy.mockRestore()
  })

  test('Logs HTML from a data-cy attribute', () => {
    cy.render(
      <main>
        <span data-cy="Hello">Hi</span>
      </main>,
    )
    debugByCy('Hello')

    expect(spy).toHaveBeenCalledWith('<span data-cy="Hello">Hi</span>')
  })

  test('Logs document.body if no selector', () => {
    cy.render(<span data-cy="Hello">Hi</span>)
    debugByCy()

    expect(spy).toHaveBeenCalledWith('<span data-cy="Hello">Hi</span>')
  })
})
