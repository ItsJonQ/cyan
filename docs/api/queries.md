---
id: queries
title: Queries
sidebar_label: Queries
hide_title: true
---

# Queries

Gets a collection of matched DOM Elements rendered by `cy.render()`. Cyan's traversal methods were designed to emulate [Cypress's commands](https://docs.cypress.io/api/api/table-of-contents.html).

#### Example

```js
test('Can render nested list with items', () => {
  // Rendering a sample list component.
  cy.render(<SomeListComponent />)

  // Using Cyan's travesal methods, we'll:
  // Find all of the child <li> Elements of `<ul>`.
  const el = cy.get('ul > li')

  // Assert against the Elements
  expect(el.length).toBe(3)
})
```

## get

`Function(selector: string | Element | NodeList ): Cyan instance`

Gets a collection of matched DOM Elements.

#### Parameters

- `selector` `{string|Element|NodeList}` A selector used to match a set of rendered Elements.

#### Example

```javascript
cy.get('main nav a')

// The above query would find all of the <a> Elements within
// the main nav.
//
// <main>
//   <nav>
//     <a>...</a> <-- Matched
//     <a>...</a> <-- Matched
//     <a>...</a> <-- Matched
//   </nav>
// </main>
```

## getByCy

`Function(selector: string): Cyan instance`

Gets a collection of matched DOM Elements matching a `data-cy` HTML attribute.

#### Parameters

- `selector` `{string}` A `data-cy` selector used to match a set of rendered Elements.

#### Example

```javascript
cy.getByCy('Button')

// The above query would find all Elements with
// data-cy="Button".
//
// <main>
//   ...
//   <button data-cy="Button">Go</button> <-- Matched
//   <button>Back</button> <-- Not Matched
//   ...
// </main>
```

## getByText

`Function(text: string): Cyan instance`

Gets a matched DOM Element based on it's text content. Under the hood, Cyan uses the [`getByText()`](https://testing-library.com/docs/dom-testing-library/api-queries#bytext) method from [DOM testing library](https://testing-library.com/).

#### Parameters

- `string` `{string}` Text to match a set of rendered Elements.

#### Example

```javascript
cy.getByText('Settings')

// The above query would find the first Element with
// the text content of "Settings".
//
// <main>
//   ...
//   <h1>Settings</h1> <-- Matched
//   ...
// </main>
```

For more information, check out the complete `getByText` [documentation](https://testing-library.com/docs/dom-testing-library/api-queries#bytext).

## See Also

- [Traversing](./traversing)
- [Assertions](./assertions)
