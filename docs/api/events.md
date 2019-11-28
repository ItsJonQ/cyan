---
id: events
title: Events
sidebar_label: Events
hide_title: true
---

# Events

[Events](https://developer.mozilla.org/en-US/docs/Web/API/Event) can be triggered on the DOM Elements rendered by your React components.

Under the hood, Cyan uses [`@testing-library/dom`](https://testing-library.com/docs/dom-testing-library/api-events) to fire the events.

## Arguments

| Prop       | Type     | Required | Description                                                                                       |
| ---------- | -------- | -------- | ------------------------------------------------------------------------------------------------- |
| eventProps | `Object` |          | Properties to be passed into the [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event). |

#### Example

To fire an event, first `.get()` an HTML element, then call the event method you wish to trigger.

```jsx
test('SampleInput can be focused', () => {
	const spy = jest.fn();
	cy.render(<SampleInput onFocus={spy} />);

	cy.get('.SampleInput').focus();
});
```

---

## Supported Events

The following events can be triggered as methods with Cyan:

-   `abort`
-   `animationEnd`
-   `animationIteration`
-   `animationStart`
-   `blur`
-   `canPlay`
-   `canPlayThrough`
-   `change`
-   `click`
-   `compositionEnd`
-   `compositionStart`
-   `compositionUpdate`
-   `contextMenu`
-   `copy`
-   `cut`
-   `dblClick`
-   `doubleClick`
-   `drag`
-   `dragEnd`
-   `dragEnter`
-   `dragExit`
-   `dragLeave`
-   `dragOver`
-   `dragStart`
-   `drop`
-   `durationChange`
-   `emptied`
-   `encrypted`
-   `ended`
-   `error`
-   `focus`
-   `focusIn`
-   `focusOut`
-   `hover`
-   `input`
-   `invalid`
-   `keyDown`
-   `keyPress`
-   `keyUp`
-   `load`
-   `loadedData`
-   `loadedMetadata`
-   `loadStart`
-   `mouseDown`
-   `mouseEnter`
-   `mouseLeave`
-   `mouseMove`
-   `mouseOut`
-   `mouseOver`
-   `mouseUp`
-   `paste`
-   `pause`
-   `play`
-   `playing`
-   `progress`
-   `rateChange`
-   `scroll`
-   `seeked`
-   `seeking`
-   `select`
-   `stalled`
-   `submit`
-   `suspend`
-   `timeUpdate`
-   `touchCancel`
-   `touchEnd`
-   `touchMove`
-   `touchStart`
-   `transitionEnd`
-   `volumeChange`
-   `waiting`
-   `wheel`

## See Also

-   [Actions](./actions.md)
