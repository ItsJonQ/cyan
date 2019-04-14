# 🐱 Cyan

[![Build Status](https://travis-ci.org/ItsJonQ/cyan.svg?branch=master)](https://travis-ci.org/ItsJonQ/cyan)

> Cypress-like Testing for React + JSDOM

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Example](#example)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Example

```jsx
import React from 'react'
import { cy } from '@itsjonq/cyan'
import Modal from '../Modal'

test('Can open/close a Modal', () => {
  cy.render(
    <Modal trigger={<button>Open</button>}>
      <div className="content">Content</div>
    </Modal>,
  )

  expect(cy.get('.content').exists()).toBe(false)

  cy.get('button').click()

  expect(cy.get('.content').exists()).toBe(true)

  cy.getByCy('CloseButton').click()

  jest.runOnlyPendingTimers()

  expect(cy.get('.content').exists()).toBe(false)
})
```
