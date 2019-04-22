---
id: getters
title: Getters
sidebar_label: Getters
hide_title: true
---

# Getters

Getters retrieve attributes, properties, or content from your rendered React components.

## getAttribute

`Function(attribute: string): any`

Get a specific attribute/property from the rendered DOM Element.

#### Parameters

- `attribute` `{any}` The attribute/property to get.

#### Aliases

- `.getAttr()`
- `.attr()`

#### Example

```jsx
test('should have a specific data-text', () => {
  cy.render(<SomeComponent />)

  const el = cy.get('button')
  const attr = el.getAttribute('data-text')

  expect(attr).toBe('Hello')
})
```

## getComputedStyle

`Function(style?: string): any`

Get the (JSDOM) computed style from the rendered DOM Element. If the `style` argument is defined, Cyan will return the value for that specific style property.

#### Parameters

- `style` `{style}` A specific style property.

#### Aliases

- `.style()`

#### Example

```jsx
test('should render with bold text', () => {
  cy.render(<SomeComponent />)

  const el = cy.get('button')
  const style = el.getComputedStyle('font-weight')

  expect(style).toBe('bold')
})
```

## getId

`Function(): string | null`

Get the `id` property from the rendered DOM Element.

#### Aliases

- `.id()`

#### Example

```jsx
test('should render the correct id', () => {
  cy.render(<SomeComponent />)

  const el = cy.get('button')
  const id = el.getId('id')

  expect(id).toBe('SubmitButton')
})
```

## getTagName

`Function(): string`

Get the `tagName` (lowercase) property from the rendered DOM Element.

#### Aliases

- `.tagName()`
- `.tag()`

#### Example

```jsx
test('should render with the correct tag name', () => {
  cy.render(<SomeComponent />)

  const el = cy.getByCy('submit-button')
  const tag = el.getTagName()

  expect(tag).toBe('button')
})
```

## getValue

`Function(nextValue?: string | null): string | null`

Get the `value` property from the rendered DOM Element. This is typically used with form-based Elements like `input` or `textarea`.

If the `nextValue` argument is defined, it will update the `value` property of the rendered DOM Element.

#### Parameters

- `nextValue` `{string | null}` The value to update the DOM Element.

#### Aliases

- `.value()`

#### Example

```jsx
test('should render with the correct value', () => {
  cy.render(<SomeComponent />)

  const el = cy.get('input')
  const value = el.getValue()

  expect(value).toBe('Hello!')
})
```

## getText

`Function(): string`

Get the text content from the rendered DOM Element.

#### Aliases

- `.text()`

#### Example

```jsx
test('should render with the correct text', () => {
  cy.render(<SomeComponent />)

  const el = cy.get('.help-text')
  const text = el.getText()

  expect(text).toContain('Contact Us')
})
```

## See Also

- [Queries](./queries.md)
- [Traversing](./traversing.md)
- [Assertions](./assertions.md)
