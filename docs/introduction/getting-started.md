---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
hide_title: true
---

# Getting Started

Cyan is a testing library for React. It's simple [Cypress](https://www.cypress.io/) inspired API and can be used to test anything React from tiny components to complete applications.

Similar to testing workflows like [Enzyme](https://airbnb.io/enzyme/), Cyan runs with [Jest](https://jestjs.io/en/) and renders within [JSDOM](https://github.com/jsdom/jsdom).

## Installation

Cyan can be installed into your project by running:

```bash
npm install --save-dev @helpscout/cyan
```

For additional details, check out our [installation](./installation) guides.

## Basic Example

```jsx
// __tests__/RedRanger.test.js
import React from 'react'
import { cy } from '@helpscout/cyan'

/**
 * This is a very simple example component. Typically, your component would live
 * outside the test file, and imported.
 */
class RedRanger extends React.Component {
  state = {
    isMorphin: false,
  }

  toggleMorphin() {
    this.setState({
      isMorphin: !this.state.isMorphin,
    })
  }

  render() {
    return (
      <div className="red">
        <button onClick={this.toggleMorphin}>{`It's Morphin' Time!`}</button>
        <p>{this.state.isMorphin ? 'Red Ranger' : 'Jason Lee Scott'}</p>
      </div>
    )
  }
}

// Creating our test for the <RedRanger /> component with Jest
describe('RedRanger', () => {
  test('Can morph when button is clicked', () => {
    // We're rendering our <RedRanger /> component. This renders your component
    // with ReactDOM.render() and is injected into JSDOM's document.body
    // HTML node.
    cy.render(<RedRanger />)

    // Our first assertion!
    // We're finding our RedRanger DOM node using the '.red' selector.
    // We're testing to make sure that <RedRanger /> renders the text content
    // containing the word "Jason".
    //
    // Jason hasn't morphed yet.
    expect(cy.get('.red').text()).toContain('Jason')

    // We're checking to make sure we have our Morphin button!
    expect(cy.get('button').exists()).toBeTruthy()
    expect(cy.get('button').text()).toContain(`Morphin' Time!`)

    // It's Morphin' Time!
    // Let's click the button.
    cy.get('button').click()

    // Now we can test that our component renders a "Red Ranger"
    // "Red Ranger" has now replaced "Jason".
    expect(cy.get('.red').text()).toContain('Red Ranger')
    expect(cy.get('.red').text()).not.toContain('Jason')
  })
})
```

If you've test React with [Jest](https://jestjs.io/en/), or have used [Enzyme](https://airbnb.io/enzyme/), [Cypress](https://www.cypress.io/), or even [Q Unit](https://qunitjs.com/), this should feel some what familiar.
