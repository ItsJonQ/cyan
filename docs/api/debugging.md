---
id: debugging
title: Debugging
sidebar_label: Debugging
hide_title: true
---

# Debugging

Cyan has a couple of helpful APIs for debugging during test development.

These methods are also available on the Cyan instance.

#### Example

```jsx
const SampleComponent = () => (
  <main>
    <div className="sample-component">
      <div>Hello</div>
    </div>
  </main>
)

test('My component can render', () => {
  cy.render(<SampleComponent />)

  // Debugging the selected DOM Element from cy.get()
  cy.get('.sample-component').debug()
  // The following is logged in your Jest test runner:
  // <div className="sample-component">
  //   <div>Hello</div>
  // </div>

  // Debugging the entire document.body
  cy.debug()
  // The following is logged in your Jest test runner:
  // <main>
  //   <div className="sample-component">
  //     <div>Hello</div>
  //   </div>
  // </main>
})
```

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
