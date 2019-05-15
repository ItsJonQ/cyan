import CyanInterface, { Selector, CySelector } from './Cyan.interface.types'
import RenderWrapperInterface from './RenderWrapper.interface.types'

export type Cy = {
  /**
   * Get the DOM elements with a selector.
   *
   * @returns {Cyan} The Cyan instance.
   *
   * @example
   * cy.get('ul')
   */
  get(selector: Selector): CyanInterface

  /**
   * Use cy.get() instead!
   * Get the DOM elements with a selector.
   *
   * @returns {Cyan} The Cyan instance.
   *
   * @example
   * cy.find('ul')
   */
  find(selector: Selector): CyanInterface

  /**
   * Get the DOM elements with a [data-cy] selector.
   *
   * @returns {Cyan} The Cyan instance.
   *
   * @example
   * cy.getByCy('ul')
   */
  getByCy(selector: CySelector): CyanInterface

  /**
   * Get the DOM elements with a text match.
   *
   * @returns {Cyan} The Cyan instance.
   *
   * @example
   * cy.getByText('Hello')
   */
  getByText(text: string): CyanInterface

  /**
   * Renders the Component into the DOM.
   *
   * @param {any} Component The Component to render.
   * @returns {CyanInterface} The Cyan instance.
   *
   * @example
   * cy.render(<div>Hello</div>)
   */
  render(component: any): RenderWrapperInterface

  /**
   * Unmounts the rendered React component.
   *
   * @example
   * cy.cleanUp()
   */
  cleanUp(): void

  /**
   * Resets the document.body.
   *
   * @example
   * cy.domCleanUp()
   */
  domCleanUp(): void

  /**
   * Logs the html of document.body.
   *
   * @param {string} selector A DOM selector to query and debug.
   * @param {Object} options Options for printing (js-beautify).
   *
   * @example
   * cy.debug()
   */
  debug(selector?: string, options?: any): void

  /**
   * Runs all immediates, ticks, timers, and Mock Promises.
   *
   * @example
   * cy.fastForward()
   */
  fastForward(): void

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
   * Runs only pending ticks and timers queued by Jest.
   *
   * @example
   * cy.runOnlyPendingTimers()
   */
  runOnlyPendingTimers(): void

  /**
   * Runs all ticks and timers queued by Jest.
   *
   * @example
   * cy.runAllTimers()
   */
  runAllTimers(): void

  /**
   * Mocks the global Promise. Ensures that all Promises process synchronously.
   * Promisees do not immediately invoke. They are added to a Mock Promise queue.
   * This is typically added to beforeEach. The mock promises are automatically restored afterEach test.
   *
   * Async/Await is not supported for Mock Promises.
   *
   * @example
   * cy.useFakePromises()
   */
  useFakePromises(): void

  /**
   * Forces all Mock Promises to invoke immediately. Used with cy.useFakePromises()
   * Async/Await is not supported for Mock Promises.
   *
   * @example
   * cy.useFakePromises()
   * cy.runPromisesImmediately()
   */
  runPromisesImmediately(): void

  /**
   * Processes the next Promise immediately. Used with cy.useFakePromises.
   * Using cy.runPromisesImmediately() by-passes this method.
   *
   * Async/Await is not supported for Mock Promises.
   *
   * @example
   * cy.runNextPromise()
   */
  runNextPromise(): void

  /**
   * Processes the next Promise immediately. Used with cy.useFakePromises.
   * Using cy.runPromisesImmediately() by-passes this method.
   *
   * Async/Await is not supported for Mock Promises.
   *
   * @example
   * cy.runAllPromises()
   */
  runAllPromises(): void

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
   *
   * @param {Function<any>} callback Optional. Used to adjust the resolve value.
   *
   * @example
   * cy.forceAllPromisesToResolve(value => `${value} works!`)
   */
  forceAllPromisesToResolve(callback?: (value: any) => any): void

  /**
   * Forces mock promises (set with cy.useFakePromises) to reject.
   *
   * @param {Function<any>} callback Optional. Used to adjust the reject value.
   *
   * @example
   * cy.forceAllPromisesToReject(reason => `${reason} failed!`)
   */
  forceAllPromisesToReject(callback?: (reason: any) => any): void

  /**
   * EXPERIMENTAL FEATURE
   * Launches the Cyan Inspector in your default browser, with a snapshot of
   * the rendered HTML (and CSS). It is recommended that it is used with
   * async/await.
   *
   * @example
   * await cy.inspect()
   */
  inspect(): void
}
