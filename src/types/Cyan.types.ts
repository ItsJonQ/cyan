import CyanEvents from './Cyan.event.types'

export type Selector = any
export type CySelector = string
export type StyleOrStyleProp = Object | string | number | null

export interface Cyan extends CyanEvents {
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
   * Get the DOM elements the main DOM element collection.
   *
   * @returns {Array<Element>} Collection of DOM elements.
   *
   * @example
   * cy.get('ul > li').getNodes()
   */
  getNodes(): Array<Element>

  /**
   * Get the first DOM element from the main DOM element collection.
   *
   * @returns {Element} A single DOM element.
   *
   * @example
   * cy.get('li').getNode()
   */
  getNode(): Element

  //////////////////////////////////////////////////////////////////////////////
  // Actions
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Checks a DOM element. Typically used for `<input />`.
   *
   * @returns {Cyan} The Cyan instance.
   *
   * @example
   * cy.get('input[type=checkbox]').check()
   */
  check(): Cyan

  /**
   * Clear the value of a DOM element. Typically used for `<input />`.
   *
   * @returns {Cyan} The Cyan instance.
   *
   * @example
   * cy.get('input[type=text]').clear()
   */
  clear(): Cyan

  /**
   * Triggers an Event for a DOM element.
   *
   * @param {string} event The name of the event.
   * @returns {Cyan} The Cyan instance.
   *
   * @example
   * cy.get('textarea').trigger('focus')
   */
  trigger(event: string): Cyan

  /**
   * Types characters/commands into a DOM element. Typically used for `<input />`.
   *
   * @param {string} value The characters/commands to type.
   * @returns {Cyan} The Cyan instance.
   *
   * @example
   * cy.get('input[type=text]').type('Hello')
   */
  type(command: string): Cyan

  /**
   * Unchecks a DOM element. Typically used for `<input />`.
   *
   * @returns {Cyan} The Cyan instance.
   *
   * @example
   * cy.get('input[type=checkbox]').uncheck()
   */
  uncheck(): Cyan

  //////////////////////////////////////////////////////////////////////////////
  // Assertions
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Check if DOM element contains specified content.
   *
   * @param {string} content Content to check within the DOM element innerHTML.
   * @returns {boolean} The result.
   *
   * @example
   * cy.get('section').content('Hello')
   */
  contains(content: string): boolean

  /**
   * Check if DOM element exists.
   *
   * @returns {boolean} The result.
   *
   * @example
   * cy.get('section').exists()
   */
  exists(): boolean

  /**
   * Check if an attribute/property from the main DOM element exists.
   *
   * @alias hasAttr
   * @param {string} attribute Attribute to check from the DOM element.
   * @returns {boolean} The result.
   *
   * @example
   * cy.get('section').hasAttribute('id')
   */
  hasAttribute(attribute: string): boolean

  /**
   * Check if an attribute/property from the main DOM element exists.
   *
   * @param {string} attribute Attribute to check from the DOM element.
   * @returns {boolean} The result.
   *
   * @example
   * cy.get('section').hasAttr('id')
   */
  hasAttr(attribute: string): boolean

  /**
   * Check if a className from the main DOM element exists.
   *
   * @alias hasClass
   * @param {string} className Class name to check from the DOM element.
   * @returns {boolean} The result.
   *
   * @example
   * cy.get('section').hasClassName('hello')
   */
  hasClassName(className: string): boolean

  /**
   * Check if a className from the main DOM element exists.
   *
   * @param {string} className Class name to check from the DOM element.
   * @returns {boolean} The result.
   *
   * @example
   * cy.get('section').hasClass('hello')
   */
  hasClass(className: string): boolean

  /**
   * Check if the main DOM element's tagName matches.
   *
   * @alias isTag
   * @param {string} tagName Tag name to match against the DOM element.
   * @returns {boolean} The result.
   *
   * @example
   * cy.get('.hello').isTagName('section')
   */
  isTagName(tagName: string): boolean

  /**
   * Check if the main DOM element's tagName matches.
   *
   * @param {string} tagName Tag name to match against the DOM element.
   * @returns {boolean} The result.
   *
   * @example
   * cy.get('.hello').isTag('section')
   */
  isTag(tagName: string): boolean

  /**
   * Check if the main DOM element's checked property is true.
   *
   * @returns {boolean} The result.
   *
   * @example
   * cy.get('input').isChecked()
   */
  isChecked(): boolean

  /**
   * Check if the main DOM element's is disabled.
   *
   * @returns {boolean} The result.
   *
   * @example
   * cy.get('input').isDisabled()
   */
  isDisabled(): boolean

  /**
   * Check if the main DOM element matches a selector.
   *
   * @param {string} selector The selector to used for matching.
   * @returns {boolean} The result.
   *
   * @example
   * cy.get('input').matches('.input.is-main')
   */
  matches(): boolean

  //////////////////////////////////////////////////////////////////////////////
  // Debuggers
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Logs the outerHTML of main DOM element.
   *
   * @example
   * cy.get('section').debug()
   */
  debug(): void

  /**
   * Get the outerHTML of main DOM element.
   *
   * @example
   * cy.get('section').html()
   */
  html(): string

  //////////////////////////////////////////////////////////////////////////////
  // Get
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Get an attribute/property from the main DOM element.
   *
   * @alias getAttr
   * @param {string} attribute The attribute to get.
   * @returns {any} The attribute/property.
   *
   * @example
   * cy.get('section').getAttribute('id')
   */
  getAttribute(attribute: string)

  /**
   * Get an attribute/property from the main DOM element.
   *
   * @param {string} attribute The attribute to get.
   * @returns {any} The attribute/property.
   *
   * @example
   * cy.get('section').getAttr('id')
   */
  getAttr(attribute: string)

  /**
   * Get the computed styles from the main DOM element.
   *
   * @alias style
   * @param {string} style The style property to get.
   * @returns {Object | string | number | null} The style Object, or style value.
   *
   * @example
   * cy.get('section').getComputedStyle()
   */
  getComputedStyle(style?: string): StyleOrStyleProp

  /**
   * Get the computed styles from the main DOM element.
   *
   * @param {string} style The style property to get.
   * @returns {Object | string | number | null} The style Object, or style value.
   *
   * @example
   * cy.get('section').style()
   */
  style(style?: string): StyleOrStyleProp

  /**
   * Get the id from the main DOM element.
   *
   * @returns {string | null} The id.
   *
   * @example
   * cy.get('section').getId()
   */
  getId(): string | null

  /**
   * Get the tagName (lowercase) from the main DOM element.
   *
   * @alias getTag
   * @returns {string} The tagName.
   *
   * @example
   * cy.get('.hello').getTagName()
   */
  getTagName(): string

  /**
   * Get the tagName (lowercase) from the main DOM element.
   *
   *
   * @example
   * cy.get('.hello').getTag()
   */
  getTag(): string

  /**
   * Get the value from the main DOM element. Typically used for form elements.
   *
   * @returns {string | null} The value.
   *
   * @example
   * cy.get('.hello').getTagName()
   */
  getValue(): string | null

  /**
   * Get the text content from the main DOM element.
   *
   * @returns {string | null} The text content.
   *
   * @example
   * cy.get('.hello').getText()
   */
  getText(): string | null

  //////////////////////////////////////////////////////////////////////////////
  // Selectors
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Get the children DOM elements from the main DOM element.
   *
   * @returns {Cyan} The Cyan instance.
   *
   * @example
   * cy.get('ul').children()
   */
  children(): Cyan

  /**
   * Get the first closest DOM element with a matching selector from the main DOM element.
   *
   * @param {string} selector A selector used to find a matching DOM element.
   * @returns {Cyan} The Cyan instance.
   *
   * @example
   * cy.get('div').closest('main')
   */
  closest(): Cyan

  /**
   * Iterate through the main DOM elements.
   *
   * @param {Function<Element, number>} callback A callback invoked with the iterating DOM elements.
   * @returns {Cyan} The Cyan instance.
   *
   * @example
   * cy.get('div').each((node, index) => {
   *   node.classList.add(`item-${index}`)
   * })
   */
  each(callback: (element: Element, index: number) => void): Cyan

  /**
   * Get a DOM element based on it's index number.
   *
   * @param {number} index A number indicating the index of the element to get.
   * @returns {Cyan} The Cyan instance.
   *
   * @example
   * cy.get('ul > li').eq(2)
   */
  eq(index: number): Cyan

  /**
   * Get the DOM elements that match a specific selector.
   *
   * @param {string} selector A selector used for filter matching.
   * @returns {Cyan} The Cyan instance.
   *
   * @example
   * cy.get('ul > li').filter('.item')
   */
  filter(selector: string): Cyan

  /**
   * Get descendent DOM elements that match a specific selector.
   *
   * @param {string} selector A selector used for descendent matching.
   * @returns {Cyan} The Cyan instance.
   *
   * @example
   * cy.get('ul').find('li.item')
   */
  find(selector: string): Cyan

  /**
   * Get the first DOM element from the main DOM elements.
   *
   * @returns {Cyan} The Cyan instance.
   *
   * @example
   * cy.get('ul > li').first()
   */
  first(): Cyan

  /**
   * Get the last DOM element from the main DOM elements.
   *
   * @returns {Cyan} The Cyan instance.
   *
   * @example
   * cy.get('ul > li').last()
   */
  last(): Cyan

  /**
   * Get the next sibling DOM element from the main DOM element.
   *
   * @returns {Cyan} The Cyan instance.
   *
   * @example
   * cy.get('ul > li').eq(3).next()
   */
  next(): Cyan

  /**
   * Filter DOM elements from the main DOM elements.
   *
   * @param {string} selector A selector used for filter matching.
   * @returns {Cyan} The Cyan instance.
   *
   * @example
   * cy.get('ul > li').not('.item')
   */
  not(selector: string): Cyan

  /**
   * Get the parent DOM element from the main DOM element.
   *
   * @returns {Cyan} The Cyan instance.
   *
   * @example
   * cy.get('li').parent()
   */
  parent(): Cyan

  /**
   * Get the previous sibling DOM element from the main DOM element.
   *
   * @returns {Cyan} The Cyan instance.
   *
   * @example
   * cy.get('ul > li').eq(3).prev()
   */
  prev(): Cyan
}

export default Cyan
