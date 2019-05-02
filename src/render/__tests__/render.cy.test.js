import React from 'react'
import { cy } from '../../index'

describe('render/cy', () => {
  test('Rendered wrapper has Cyan methods', () => {
    const wrapper = cy.render(
      <div>
        <p>
          <strong>Hello</strong>
        </p>
      </div>,
    )

    expect(wrapper.get('strong').text()).toBe('Hello')
    expect(wrapper.get('p').exists()).toBeTruthy()
  })
})
