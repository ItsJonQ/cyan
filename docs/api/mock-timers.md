---
id: mock-timers
title: Mock Timers
sidebar_label: Mock Timers
hide_title: true
---

# Mock Timers

Cyan provides some enhancements to Jest's [Mock Timer](https://jestjs.io/docs/en/timer-mocks) methods.

When used, any [action](./actions) or [event](./events) fired by Cyan will automatically [run all timers](https://jestjs.io/docs/en/timer-mocks#run-all-timers).

#### Example

Below is an out-of-the-box **Jest** example of how timers (e.g. `setTimeout`) can be handled.

```jsx
// __tests__/TimerBasedComponent.test.js
import React from 'react'
import TimerBasedComponent from '../TimerBasedComponent'

// Initialize the mock timer method
jest.useFakeTimers()

test('should render after clicking button', () => {
  cy.render(<TimerBasedComponent />)

  // Interact with the button
  cy.get('button').click()

  // Run the timer fired by the click interaction
  jest.runAllTimers()

  // Assert against the results
  expect(cy.get('.timer').text()).toContain('Rendered!')
})
```

Here is the same example, but with **Cyan**:

```jsx
// __tests__/TimerBasedComponent.test.js
import React from 'react'
import { cy } from '@helpscout/cyan'
import TimerBasedComponent from '../TimerBasedComponent'

// Initialize the mock timer method
// (with Cyan, instead of Jest)
cy.useFakeTimers()

test('should render after clicking button', () => {
  cy.render(<TimerBasedComponent />)

  // Interact with the button
  cy.get('button').click()
  // Timers are automatically run!

  // Assert against the results
  expect(cy.get('.timer').text()).toContain('Rendered!')
})
```

## useFakeTimers

`Function(): void`

Sets up Cyan's [actions](./actions) and [events](./events) to automatically run all timers when fired. Cyan's mock timers are automatically restored after each test, if Jest has been setup with [`setupTests()`](../introduction/installation#setup-with-jest).

#### Example

```jsx
// __tests__/TimerBasedComponent.test.js
import React from 'react'
import { cy } from '@helpscout/cyan'
import TimerBasedComponent from '../TimerBasedComponent'

// Initialize the mock timer methods
// (with Cyan, instead of Jest)
cy.useFakeTimers()

test('should render after clicking button', () => {
  cy.render(<TimerBasedComponent />)

  // Interact with the button
  cy.get('button').click()
  // Timers are automatically run!

  // Assert against the results
  expect(cy.get('.timer').text()).toContain('Rendered!')
})
```

## fastForward

`Function(): void`

Runs all [timers](https://jestjs.io/docs/en/jest-object#jestrunalltimers) and [immediates](https://jestjs.io/docs/en/jest-object#jestrunallimmediates) queued by Jest. This method does not require `cy.useFakeTimers()` to be used.

#### Example

```jsx
// __tests__/TimerBasedComponent.test.js
import React from 'react'
import { cy } from '@helpscout/cyan'
import TimerBasedComponent from '../TimerBasedComponent'

// Can be used with either Jest/Cyan useFakeTimers
jest.useFakeTimers()

test('should render after clicking button', () => {
  cy.render(<TimerBasedComponent />)

  cy.get('button').click()
  // Run all tickers, timers, and immediates
  cy.fastForward()

  // Assert against the results
  expect(cy.get('.timer').text()).toContain('Rendered!')
})
```

## See Also

- [Mock Promises](./mock-promises)
- [Installation](../introduction/installation)
