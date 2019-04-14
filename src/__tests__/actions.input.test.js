import React from 'react'
import { cy, render } from '../index'

jest.useFakeTimers()

describe('Actions/input', () => {
  test('Can type into an input', () => {
    render(<input />)
    const el = cy.get('input')

    el.type('Hello')

    expect(el.value()).toBe('Hello')
  })

  test('Can check an input[type="checkbox"]', () => {
    const spy = jest.fn()
    render(<input type="checkbox" checked={false} onChange={spy} />)
    const el = cy.get('input')

    el.check()

    expect(el.isChecked()).toBe(true)
  })

  test('Can uncheck an input[type="checkbox"]', () => {
    const spy = jest.fn()
    render(<input type="checkbox" checked={true} onChange={spy} />)
    const el = cy.get('input')

    el.uncheck()

    expect(el.isChecked()).toBe(false)
  })

  test('Can uncheck an input[type="checkbox"]', () => {
    const spy = jest.fn()
    render(<input type="checkbox" checked={true} onChange={spy} />)
    const el = cy.get('input')

    el.uncheck()

    expect(el.isChecked()).toBe(false)
  })
})
