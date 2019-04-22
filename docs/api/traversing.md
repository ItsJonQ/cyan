---
id: traversing
title: Traversing
sidebar_label: Traversing
hide_title: true
---

# Traversing

Targeting DOM Elements from the main DOM element collection defined by a [query](./queries/md) method like `cy.get()`. Cyan's traversal methods were designed to emulate [Cypress's commands](https://docs.cypress.io/api/api/table-of-contents.html).

Cyan's traversal methods are **chainable** (similar to [jQuery](https://api.jquery.com/category/traversing/)).

#### Example

```js
test('Can render nested non-active item links', () => {
  // Rendering a sample list component.
  cy.render(<SomeListComponent activeIndex={3} />)

  // Using Cyan's travesal methods, we'll:
  // 1. Find all of the <a> Elements from our <ul> component
  // 2. Filter out the active item
  // 3. Find the first Element
  const el = cy
    .get('ul > li a')
    .not('.active')
    .first()

  // Assert against the first Element
  expect(el.attr('data-index')).toEqual('0')
})
```

## children

`Function(): Cyan instance`

Get the children DOM elements from the main DOM element.

#### Example

```javascript
cy.get('ul').children()
```

## closest

`Function(selector: string): Cyan instance`

Get the first closest DOM element with a matching selector from the main DOM element.

#### Parameters

- `selector` `{string}` A selector used to find a matching DOM element.

#### Example

```javascript
cy.get('div').closest('main')
```

## each

`Function(callback: Function<Element>): Cyan instance`

Iterate through the main DOM elements.

#### Parameters

- `callback` `{Function<Element>}` A callback invoked with the iterating DOM elements.

#### Example

```javascript
cy.get('div').each((node, index) => {
  node.classList.add(`item-${index}`)
})
```

## eq

`Function(index: number): Cyan instance`

Get a DOM element based on it's index number.

#### Parameters

- `index` `{number}` A number indicating the index of the element to get.

#### Example

```javascript
cy.get('ul > li').eq(2)
```

## filter

`Function(selector: string): Cyan instance`

Get the DOM elements that match a specific selector.

#### Parameters

- `selector` `{string}` A selector used for filter matching.

#### Example

```javascript
cy.get('ul > li').filter('.item')
```

## find

`Function(selector: string): Cyan instance`

Get descendent DOM elements that match a specific selector.

#### Parameters

- `selector` `{string}` A selector used for descendent matching.

#### Example

```javascript
cy.get('ul').find('li.item')
```

## first

Get the first DOM element from the main DOM elements.

#### Example

```javascript
cy.get('ul > li').first()
```

## last

Get the last DOM element from the main DOM elements.

#### Example

```javascript
cy.get('ul > li').last()
```

## next

Get the next sibling DOM element from the main DOM element.

#### Example

```javascript
cy.get('ul > li')
  .eq(3)
  .next()
```

## not

`Function(selector: string): Cyan instance`

Filter DOM elements from the main DOM elements.

#### Parameters

- `selector` `{string}` A selector used for filter matching.

#### Example

```javascript
cy.get('ul > li').not('.item')
```

## parent

Get the parent DOM element from the main DOM element.

#### Example

```javascript
cy.get('li').parent()
```

## prev

Get the previous sibling DOM element from the main DOM element.

#### Example

```javascript
cy.get('ul > li')
  .eq(3)
  .prev()
```

## See Also

- [Queries](./queries.md)
- [Getters](./getters.md)
- [Assertions](./assertions.md)
