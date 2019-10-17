---
id: simple-component
title: Simple Component
sidebar_label: Simple Component
hide_title: true
---

# Simple Component

In this guide, we're going to be walking through how we can test a simple React component with Cyan.

## Example Component

Here we have our very simple component called `SimpleComponent`:

```jsx
// SimpleComponent.js
const SimpleComponent = ({ title }) => (
  <div title={title}>{title}</div>
)
SimpleComponent.defaultProps = {
  title: 'Hello',
}

export default SimpleComponent
```

It accepts a `title` prop, which it renders as content, but also as an HTML attribute.

## Creating the Test

First, we're going to import everything that we need. Other than `React` and the component that we want to test (in this case, `SimpleComponent`), the only thing you need from Cyan is `cy`.

```jsx
// SimpleComponent.test.js
import React from 'react'
import { cy } from '@itsjonq/cyan'
import SimpleComponent from './SimpleComponent'
```

Let's set up our first test!

```jsx
// SimpleComponent.test.js
import React from 'react'
import { cy } from '@itsjonq/cyan'
import SimpleComponent from './SimpleComponent'

test('It should render', () => {
  const wrapper = cy.render(<SimpleComponent />)

  expect(wrapper.exists()).toBeTruthy()
})
```

Whoa! Already there's several things happening here.

If you have experience with [Enzyme](https://airbnb.io/enzyme/docs/api/), this workflow should feel very familiar.

#### `cy.render(<SimpleComponent />)`

`cy.render()` is the main method that we need to use to render your React component into the virtual test environment (aka. JSDOM).

#### `const wrapper = ...`

The `cy.render()` method does two things.

It's primary job is to render and mount your component into JSDOM. It also returns a special `Cyan` instance filled with a [bunch of methods](../api/api-reference.md) that allow you to interact your rendered component.

#### `wrapper.exists()`

For our `expect` assert, we're just checking to see if our `SimpleComponent` rendered into the DOM. For this test, we're using the [`.exists()`](../api/assertions#exists) method from Cyan.

## Setting Props

Our `SimpleComponent` has a defaultProp of `title` with the value of `Hello`. We can also pass it a different `title`. Let's make sure it can handle both cases.

```jsx
// SimpleComponent.test.js
test('It can render a different title', () => {
  const wrapper = cy.render(<SimpleComponent />)

  // Default Props
  expect(wrapper.text()).toBe('Hello')
  expect(wrapper.attr('title')).toBe('Hello')

  // Updating the props
  wrapper.setProps({ title: 'There' })

  // Checking for the prop change
  expect(wrapper.text()).toBe('Hello')
  expect(wrapper.attr('title')).toBe('Hello')
})
```

Using the `.setProps()` method, we can update our `SimpleComponent` with new props, [just like Enzyme](https://airbnb.io/enzyme/docs/api/ReactWrapper/setProps.html). This triggers a re-render for our component into the DOM.

## Conventions

Cyan supports either a Enzyme-like or Cypress-like workflow. Depending on your experiences, setup, and situation, one may be more preferable than the other. Use whatever works!

**Both workflows are valid**!

### Enzyme

Below is our simple test using conventions from [Enzyme](https://airbnb.io/enzyme/docs/api/).

```jsx
// SimpleComponent.test.js
import React from 'react'
import { cy } from '@itsjonq/cyan'
import SimpleComponent from './SimpleComponent'

test('It should render', () => {
  const wrapper = cy.render(<SimpleComponent />)

  expect(wrapper.exists()).toBeTruthy()
})
```

### Cypress

As an alternative, you can write your test like this:

```jsx
// SimpleComponent.test.js
import React from 'react'
import { cy } from '@itsjonq/cyan'
import SimpleComponent from './SimpleComponent'

test('It should render', () => {
  cy.render(<SimpleComponent />)

  expect(cy.get('div').exists()).toBeTruthy()
})
```

The above workflow resembles that of [Cypress](https://www.cypress.io/), where the rendering and query selecting parts are separate.

## Conclusion

That's it! You did it! You've created some Cyan tests for your very simple component.

## See Also

- [API Reference](../api/api-reference.md)
