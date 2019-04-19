import Cyan, { Selector, CySelector } from './Cyan.types'

export type Cy = {
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
   * Runs all immediates, ticks, and timers.
   *
   * @example
   * cy.fastForward()
   */
  fastForward(): void

  /**
   * Renders a React component into the DOM.
   *
   * @param {ReactComponent} component The component to render into the document.
   *
   * @example
   * cy.render(<div />)
   */
  render(component: any): void

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
   * cy.delay(1000)
   */
  delay(time: number): void

  /**
   * Use fake timers with Jest. Allows for cy actions to automatically increment timers when fired.
   * Add this to the beginning of your test file.
   *
   * @example
   * cy.useFakeTimers()
   */
  useFakeTimers(): void

  /**
   * Mocks the global Promise. Ensures that all Promises immediately resolve synchronously.
   * This is typically added to beforeEach. The mock promises are automatically restored afterEach test.
   *
   * Async/Await is not supported for Mock Promises.
   *
   * @example
   * cy.useFakePromises()
   */
  useFakePromises(): void

  /**
   * Restores the mocked global Promise to the original Promise implementation. Used for clean up after.
   * The mock promises are automatically restored afterEach test.
   *
   * @example
   * cy.clearFakePromises()
   */
  clearFakePromises(): void

  /**
   * Forces mock promises (set with cy.useFakePromises) to resolve.
   * @param {Function<any>} callback Optional. Used to adjust the resolve value.
   * @example
   * cy.forceAllPromisesToResolve(value => `${value} works!`)
   */
  forceAllPromisesToResolve(callback?: (value: any) => any): void

  /**
   * Forces mock promises (set with cy.useFakePromises) to reject.
   * @param {Function<any>} callback Optional. Used to adjust the reject value.
   * @example
   * cy.forceAllPromisesToReject(reason => `${reason} failed!`)
   */
  forceAllPromisesToReject(callback?: (reason: any) => any): void
}
