---
id: assertions
title: Assertions
sidebar_label: Assertions
hide_title: true
---

# Assertions

Assertions check against your rendered React components for Jest's [`expect`](https://jestjs.io/docs/en/expect) test method. These assertions can be made after [querying](./queryies) for matching DOM elements.

## contains

`Function(content: string): boolean`

Checks to see if the selected DOM elements (`innerHTML`) contains certain content.

#### Parameters

- `content` `{string}` The content to check for.

#### Example

```jsx
test('should have "Submit" copy + icon in submit button', () => {
  cy.render(<SomeFormComponent />)

  const el = cy.get('button')

  expect(el.contains('icon-submit')).toBeTruthy()
  expect(el.contains('Submit')).toBeTruthy()
})
```

## exists

`Function(): boolean`

Checks to see if the selected DOM Element exists.

#### Example

```jsx
test('should render a Submit button', () => {
  cy.render(<SomeFormComponent />)

  const el = cy.get('button[type="submit"]')

  expect(el.exists()).toBeTruthy()
})
```

## hasAttribute

`Function(attribute: string): boolean`

Checks to see if the selected DOM Element has a specific HTML attribute/property.

#### Parameters

- `attribute` `{string}` The attribute/property to check for.

#### Aliases

- `.hasAttr()`

#### Example

```jsx
test('should render with a data-form attribute', () => {
  cy.render(<SomeFormComponent />)

  const el = cy.get('form')

  expect(el.hasAttribute('data-form')).toBeTruthy()
})
```

## hasClassName

`Function(className: string): boolean`

Checks to see if the selected DOM Element has a specific class name.

#### Parameters

- `className` `{string}` The class name to check for.

#### Aliases

- `.hasClass()`

#### Example

```jsx
test('should render with a contact className', () => {
  cy.render(<SomeFormComponent />)

  const el = cy.get('form')

  expect(el.hasClassName('contact')).toBeTruthy()
})
```

## isTagName

`Function(tagName: string): boolean`

Checks to see if the selected DOM Element has a specific HTML tag name.

#### Parameters

- `tagName` `{string}` The tag name to check for.

#### Aliases

- `.hasTag()`

#### Example

```jsx
test('should render a .contact form, with a <form /> tagName', () => {
  cy.render(<SomeFormComponent />)

  const el = cy.get('.contact')

  expect(el.hasTagName('form')).toBeTruthy()
})
```

## isChecked

`Function(): boolean`

Checks to see if the selected DOM Element is checked. Typically used with checkboxes or radios.

#### Example

```jsx
test('should render a .contact form, with a <form /> tagName', () => {
  cy.render(<SomeFormComponent />)

  const el = cy.get('input[type="checkbox"]')

  expect(el.isChecked()).toBeTruthy()
})
```

## isDisabled

`Function(): boolean`

Checks to see if the selected DOM Element is disabled. Typically used with form Elements, such as `input`, `textarea`, or `button`.

#### Example

```jsx
test('should render a .contact form, with a <form /> tagName', () => {
  cy.render(<SomeFormComponent disabled={true} />)

  const el = cy.get('input')

  expect(el.isDisabled()).toBeTruthy()
})
```

## matches

`Function(selector: string): boolean`

Checks to see if the selected DOM Element matches a specific selector.

#### Parameters

- `selector` `{string}` The selector to match against.

#### Aliases

- `.is()`

#### Example

```jsx
test('should render a form with a className + data attr', () => {
  cy.render(<SomeFormComponent />)

  const el = cy.get('form')
  const selector = 'form.contact[data-form="true"]'

  expect(el.matches(selector)).toBeTruthy()
})
```

## See Also

- [Queries](./queries.md)
- [Traversing](./traversing.md)
- [Getters](./getters.md)
