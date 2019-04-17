import {
  ReactInstance,
  Component,
  ComponentState,
  ReactElement,
  SFCElement,
  CElement,
  DOMAttributes,
  DOMElement,
} from 'react'
import Cyan from './Cyan'

export type Selector = any
export type CySelector = string
export type ReactComponent = ReactElement | Component

export const cy: {
  /**
   * Get the DOM elements with a selector.
   *
   * @returns {Cyan} The Cyan instance.
   *
   * @example
   * cy.get('ul')
   */
  get(selector: Selector): Cyan

  /**
   * Get the DOM elements with a [data-cy] selector.
   *
   * @returns {Cyan} The Cyan instance.
   *
   * @example
   * cy.getByCy('ul')
   */
  getByCy(selector: CySelector): Cyan

  /**
   * Get the DOM elements with a text match.
   *
   * @returns {Cyan} The Cyan instance.
   *
   * @example
   * cy.getByText('Hello')
   */
  getByText(text: string): Cyan

  /**
   * Logs the html of document.body.
   *
   * @example
   * cy.debug()
   */
  debug(): void

  /**
   * Renders a React component into the DOM.
   *
   * @param {ReactComponent} component The component to render into the document.
   *
   * @example
   * cy.render(<div />)
   */
  render(component: ReactComponent): void

  /**
   * Types characters/commands into the document.
   *
   * @param {string} value The characters/commands to type.
   *
   * @example
   * cy.type('{esc}')
   */
  type(command: string): void

  /**
   * (Async) Wait for a specified time.
   *
   * @param {number} time Amount of time (ms) to wait.
   *
   * @example
   * cy.wait(1000)
   */
  wait(time: number): void

  /**
   * Use fake timers with Jest. Allows for cy actions to automatically increment timers when fired.
   * Add this to the beginning of your test file.
   *
   * @example
   * cy.useFakeTimers()
   */
  useFakeTimers(): void
}

//////////////////////////////////////////////////////////////////////////////
// Configuration
//////////////////////////////////////////////////////////////////////////////

/**
 * Sets the state for Cyan's configuration.
 * @param {any} state The state for the configuration.
 * @param {Function<any>} callback Callback after the configuration state has been set.
 */
export function setConfigState(
  state: any,
  callback?: (state: any) => void,
): void

/**
 * Resets the state for the configuration. Useful for clean up.
 */
export function resetConfig(): void

//////////////////////////////////////////////////////////////////////////////
// Store
//////////////////////////////////////////////////////////////////////////////

/**
 * Sets a (Redux) store for components that render.
 * @param {any} reduxStore The Redux store to set.
 */
export function setStore(reduxStore: any): void

/**
 * Sets a (Redux) reducer for the store used to render.
 * @param {Object | Function} reducer The reducer for the store.
 */
export function setStoreReducer(reducer: Object | Function): void

/**
 * Sets the initialState for the store used to render.
 * @param {any} state The initial state for the store.
 */
export function setInitialState(state: any): void

/**
 * Sets the state for the store used to render.
 * @param {any} state The state for the store.
 * @param {Function<any>} callback Callback after the store state has been set.
 */
export function setStoreState(state: any, callback?: (state: any) => void): void

/**
 * Resets the state for the store. Useful for clean up.
 */
export function resetStore(): void
