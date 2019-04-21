---
id: debugging
title: Debugging
sidebar_label: Debugging
hide_title: true
---

# Debugging

Cyan has a couple of helpful APIs for debugging during test development.

## debug

`Function(): void`

[Logs](https://developer.mozilla.org/en-US/docs/Web/API/Console/log) the rendered within for `document.body`.<br />
No need to call `console.log`. The `debug()` method does this automatically!

#### Example

```jsx
const SampleComponent = () => <div className="sample-component" />

test('My component can render', () => {
  cy.render(<SampleComponent />)

  cy.debug()
  // The following is logged in your Jest test runner:
  // <div class="sample-component"></div>
})
```

## html

`Function(): string`

Returns the `document.body` as a `string`. Can be used for test assertions.<br />
For debugging, we recommend you use [`debug()`](#debug).

#### Example

```js
const SampleComponent = () => <div className="sample-component" />

test('My component can render', () => {
  cy.render(<SampleComponent />)

  cy.html()
  // <div class="sample-component"></div>
})
```
