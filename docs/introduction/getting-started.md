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
// __tests__/Sample.test.js
import React from 'react'
import { cy } from '@helpscout/cyan'

/**
 * This is a very simple example component. Typically, your
 * component would live outside the test file, and imported.
 */
class Sample extends React.Component {
  state = {
    isReady: false,
  }

  toggleMorphin() {
    this.setState({
      isReady: !this.state.isReady,
    })
  }

  render() {
    return (
      <div className="sample-content">
        <button onClick={this.toggleMorphin}>{`Load`}</button>
        <p>{this.state.isReady ? 'Ready!' : 'Not Ready'}</p>
      </div>
    )
  }
}

// Creating our test for the <Sample /> component with Jest
describe('Sample', () => {
  test('Can load when button is clicked', () => {
    // We're rendering our <Sample /> component.
    // This renders your component
    // with ReactDOM.render() and is injected into JSDOM's
    // document.body HTML node.
    cy.render(<Sample />)

    // Our first assertion!
    //
    // We're finding our Sample DOM node using the
    // '.sample-content' selector.
    //
    // We're testing to make sure that <Sample /> renders
    // the text content containing the word "Not Ready".
    //
    // Not Ready hasn't loaded yet.
    expect(cy.get('.sample-content').text()).toContain('Not Ready')

    // We're checking to make sure we have our Load button!
    expect(cy.get('button').exists()).toBeTruthy()

    // Let's click the button.
    cy.get('button').click()

    // Now we can test that our component renders a "Ready!"
    // "Ready!" has now replaced "Not Ready".
    expect(cy.get('.sample-content').text()).toContain('Ready!')
    expect(cy.get('.sample-content').text()).not.toContain('Not Ready')
  })
})
```

If you've test React with [Jest](https://jestjs.io/en/), or have used [Enzyme](https://airbnb.io/enzyme/), [Cypress](https://www.cypress.io/), or even [Q Unit](https://qunitjs.com/), this should feel some what familiar.
