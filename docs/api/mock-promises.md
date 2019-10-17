---
id: mock-promises
title: Mock Promises
sidebar_label: Mock Promises
hide_title: true
---

# Mock Promises

Cyan provides some ways to make [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) easier to work with within Jest.
These mock Promises give you finer grain control, allowing you to fire Promises in a **synchronous** and **instant** manner!

#### Example

In the following example, we have an `AsyncComponent` that uses a Promise based fetch method which eventually allows the component to render it's content (once resolved).

```jsx
// AsyncComponent.js
import React from 'react'
import { someFetchMethod } from '../api'

class AsyncComponent extends React.Component {
  state = {
    isLoaded: false,
  }

  componentDidMount() {
    someFetchMethod().then(() => {
      this.setState({
        isLoaded: true,
      })
    })
  }

  render() {
    return this.state.isLoaded ? <div>Hello</div> : null
  }
}
```

In our test, we can set up mock Promises using `cy.useFakePromises()`, similar to Jest's [Timer Mocks](https://jestjs.io/docs/en/timer-mocks). This wraps all following Promises with our special mock Promise implementation.

```jsx
// __tests__/AsyncComponent.test.js
import React from 'react'
import { cy } from '@itsjonq/cyan'
import AsyncComponent from '../AsyncComponent'

test('It can load', () => {
  // Enable the mocking of Promises with cy.useFakePromises()
  cy.useFakePromises()

  // Render your Component
  cy.render(<AsyncComponent />)

  // By default, the (mocked) Promises do not run immediately.
  // To run it, you can use the cy.runNextPromise() method.
  cy.runNextPromise()

  // Great! Our Promise has executed
  // Let's make sure that our content rendered.
  expect(cy.get('div').text()).contains('Hello')
})
```

The original Promise implementation is automatically restored [after each](https://jestjs.io/docs/en/setup-teardown) test run.

Note: Cyan currently **does not** support `async`/`await` Promise implementations.

---

## useFakePromises

`Function(): void`

Implements Cyan's mock Promise for the next Jest test run. If you want all of your Promises to be mocked, add it to a `beforeEach` or `beforeAll` hook.

#### Example

```js
// Promises will be mocked for every test run.
beforeEach(() => {
  cy.useFakePromises()
})
```

Mock Promises are added to a special queue. Once there, they can be run immediately using [`cy.runPromisesImmediately()`](#runpromisesimmediately) or sequentially using [`cy.runNextPromise()`](#runnextpromise).

## clearFakePromises

`Function(): void`

Restores Promises back to the original implementation. This method is automatically run for you if you use `cy.setupTests()`.

#### Example

```js
test('My async test', () => {
  // Start mocking Promises.
  cy.useFakePromises()

  // Execute + assert against your function/component
  // ...

  // Restore the actual Promise implementation
  cy.clearFakePromises()

  // Continue to execute + assert against your
  // function/component, but, with real Promises.
})
```

## runPromisesImmediately

`Function(): void`

Forces all following mock Promises to be fired immediately. If you want all of your Promises to fire immediately, add it to a `beforeEach` or `beforeAll` hook.

#### Example

```js
beforeEach(() => {
  // Promises will be mocked for every test run.
  cy.useFakePromises()
  // Promises will also fire immediately.
  cy.runPromisesImmediately()
})
```

In the following example, let's pretend we have a `MultiPromiseComponent` component that runs 3 chained Promises when it renders.

```js
test('My multi-promise test', () => {
  // Start mocking Promises.
  cy.useFakePromises()
  cy.runPromisesImmediately()

  cy.render(<MultiPromiseComponent />)
  // All 3 Promises would have run on render.
})
```

## runNextPromise

`Function(): void`

Runs the next Promise from the mock Promise queue.

#### Example

Let's pretend we have a `MultiPromiseComponent` component that runs 3 chained Promises when it renders.

```js
test('My multi-promise test', () => {
  // Start mocking Promises.
  cy.useFakePromises()

  cy.render(<MultiPromiseComponent />)

  // Runs the first (1 of 3) Promise
  cy.runNextPromise()
  // Runs the second (2 of 3) Promise
  cy.runNextPromise()
  // Runs the third (3 of 3) Promise
  cy.runNextPromise()
})
```

## runAllPromises

`Function(): void`

Runs all of the following Promise from the mock Promise queue.

#### Example

Let's pretend we have a `MultiPromiseComponent` component that runs 3 chained Promises when it renders.

```js
test('My multi-promise test', () => {
  // Start mocking Promises.
  cy.useFakePromises()

  cy.render(<MultiPromiseComponent />)

  // Runs all (3) of the following Promise
  cy.runAllPromises()
})
```

## forceAllPromisesToResolve

`Function(callback?: Function<any>): void`

Forces all following mock Promises to `.resolve()`. This method accepts a callback, allowing you to transform the result of the `.resolve()` result.

#### Arguments

| Prop     | Type       | Required | Description                           |
| -------- | ---------- | -------- | ------------------------------------- |
| callback | `Function` |          | Can transform the `resolve()` result. |

#### Example

```js
test('My multi-promise test', () => {
  // Start mocking Promises.
  cy.useFakePromises()

  // Intercept and transform the `.resolve()` result
  const resolve = result => {
    return {
      status: 200,
      data: {
        message: 'Hello!',
        result,
      },
    }
  }

  // Make all of the following promises `.resolve()`
  cy.forceAllPromisesToResolve(resolve)

  cy.render(<FetchedComponent />)

  // Run the next Promise
  cy.runNextPromise()
})
```

## forceAllPromisesToReject

`Function(callback?: Function<any>): void`

Forces all following mock Promises to `.reject()`. This method accepts a callback, allowing you to transform the reason of the `.reject()` result.

#### Arguments

| Prop     | Type       | Required | Description                          |
| -------- | ---------- | -------- | ------------------------------------ |
| callback | `Function` |          | Can transform the `reject()` reason. |

#### Example

```js
test('My multi-promise test', () => {
  // Start mocking Promises.
  cy.useFakePromises()

  // Intercept and transform the `.reject()` result
  const reject = reason => {
    return {
      status: 200,
      data: {
        message: 'Hello!',
        reason,
      },
    }
  }

  // Make all of the following promises `.reject()`
  cy.forceAllPromisesToReject(reject)

  cy.render(<FetchedComponent />)

  // Run the next Promise
  cy.runNextPromise()
})
```

## See Also

- [Mock Timers](./mock-timers.md)
- [Installation](../introduction/installation.md)
