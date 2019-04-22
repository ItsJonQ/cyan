---
id: actions
title: Actions
sidebar_label: Actions
hide_title: true
---

# Actions

Actions are methods that interact with the DOM Elements rendered by your React components. These are typically used with form based elements, like `input`, `button`, or `textarea`.

## check

`Function(): void`

Checks a DOM element. Typically used for `<input />`.

#### Example

```javascript
cy.get('input[type=checkbox]').check()
```

## clear

`Function(): void`

Clear the value of a DOM element. Typically used for `<input />`.

#### Example

```javascript
cy.get('input[type=text]').clear()
```

## trigger

Triggers an [Event](./events.md) for a DOM element.

#### Parameters

- `event` `{string}` The name of the event.

#### Example

```javascript
cy.get('textarea').trigger('focus')
```

## type

`Function(): void`

Types characters/commands into a DOM element. Typically used for `<input />`.
This method triggers `keyDown` and `keyUp` [events](./events.md).

#### Parameters

- `value` `{string}` The characters/commands to type.

#### Example

```javascript
cy.get('input[type=text]').type('Hello')
```

## uncheck

`Function(): void`

Unchecks a DOM element. Typically used for `<input />`.

#### Example

```javascript
cy.get('input[type=checkbox]').uncheck()
```

## See Also

- [Events](./events.md)
