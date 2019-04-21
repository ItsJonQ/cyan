---
id: traversing
title: Traversing
sidebar_label: Traversing
hide_title: true
---

# Traversing

Targeting DOM Elements from the main DOM element collection defined by a [selectors](./selectors) method like `cy.get()`. Cyan's traversal methods were designed to emulate [Cypress's commands](https://docs.cypress.io/api/api/table-of-contents.html).

## children

`Function(): Cyan`

Get the children DOM elements from the main DOM element.

#### Examples

```javascript
cy.get('ul').children()
```

## closest

`Function(selector: string): Cyan`

Get the first closest DOM element with a matching selector from the main DOM element.

#### Parameters

- `selector` `{string}` A selector used to find a matching DOM element.

#### Examples

```javascript
cy.get('div').closest('main')
```

## each

`Function(callback: Function<Element>): Cyan`

Iterate through the main DOM elements.

#### Parameters

- `callback` `{Function<Element>}` A callback invoked with the iterating DOM elements.

#### Examples

```javascript
cy.get('div').each((node, index) => {
  node.classList.add(`item-${index}`)
})
```

## eq

`Function(index: number): Cyan`

Get a DOM element based on it's index number.

#### Parameters

- `index` `{number}` A number indicating the index of the element to get.

#### Examples

```javascript
cy.get('ul > li').eq(2)
```

## filter

`Function(selector: string): Cyan`

Get the DOM elements that match a specific selector.

#### Parameters

- `selector` `{string}` A selector used for filter matching.

#### Examples

```javascript
cy.get('ul > li').filter('.item')
```

## find

`Function(selector: string): Cyan`

Get descendent DOM elements that match a specific selector.

#### Parameters

- `selector` `{string}` A selector used for descendent matching.

#### Examples

```javascript
cy.get('ul').find('li.item')
```

## first

Get the first DOM element from the main DOM elements.

#### Examples

```javascript
cy.get('ul > li').first()
```

## last

Get the last DOM element from the main DOM elements.

#### Examples

```javascript
cy.get('ul > li').last()
```

## next

Get the next sibling DOM element from the main DOM element.

#### Examples

```javascript
cy.get('ul > li')
  .eq(3)
  .next()
```

## not

`Function(selector: string): Cyan`

Filter DOM elements from the main DOM elements.

#### Parameters

- `selector` `{string}` A selector used for filter matching.

#### Examples

```javascript
cy.get('ul > li').not('.item')
```

## parent

Get the parent DOM element from the main DOM element.

#### Examples

```javascript
cy.get('li').parent()
```

## prev

Get the previous sibling DOM element from the main DOM element.

#### Examples

```javascript
cy.get('ul > li')
  .eq(3)
  .prev()
```
