/**
 * Get the children DOM elements from the main DOM element.
 *
 * @returns {Cyan} The Cyan instance.
 *
 * @example
 * cy.get('ul').children()
 */
function children() {
  const node = this.__getNode('children')
  this.get(node.children)
  return this
}

/**
 * Get the first closest DOM element with a matching selector from the main DOM element.
 *
 * @param {string} selector A selector used to find a matching DOM element.
 * @returns {Cyan} The Cyan instance.
 *
 * @example
 * cy.get('div').closest('main')
 */
function closest(selector) {
  const node = this.__getNode('closest', selector)
  this.get(node.closest(selector))
  return this
}

/**
 * Iterate through the main DOM elements.
 *
 * @param {Function<Element>} callback A callback invoked with the iterating DOM elements.
 * @returns {Cyan} The Cyan instance.
 *
 * @example
 * cy.get('div').each((node, index) => {
 *   node.classList.add(`item-${index}`)
 * })
 */
function each(callback) {
  this.getNodes().forEach(callback)
  return this
}

/**
 * Get a DOM element based on it's index number.
 *
 * @param {number} index A number indicating the index of the element to get.
 * @returns {Cyan} The Cyan instance.
 *
 * @example
 * cy.get('ul > li').eq(2)
 */
function eq(index) {
  this.get(this.getNodes()[index])
  return this
}

/**
 * Get the DOM elements that match a specific selector.
 *
 * @param {string} selector A selector used for filter matching.
 * @returns {Cyan} The Cyan instance.
 *
 * @example
 * cy.get('ul > li').filter('.item')
 */
function filter(selector) {
  this.get(this.getNodes().filter(el => el.matches(selector)))
  return this
}

/**
 * Get descendent DOM elements that match a specific selector.
 *
 * @param {string} selector A selector used for descendent matching.
 * @returns {Cyan} The Cyan instance.
 *
 * @example
 * cy.get('ul').find('li.item')
 */
function find(selector) {
  const node = this.__getNode('find', selector)
  this.get(node.querySelectorAll(selector))
  return this
}

/**
 * Get the first DOM element from the main DOM elements.
 *
 * @returns {Cyan} The Cyan instance.
 *
 * @example
 * cy.get('ul > li').first()
 */
function first() {
  this.eq(0)
  return this
}

/**
 * Get the last DOM element from the main DOM elements.
 *
 * @returns {Cyan} The Cyan instance.
 *
 * @example
 * cy.get('ul > li').last()
 */
function last() {
  this.eq(this.getNodes().length - 1)
  return this
}

/**
 * Get the next sibling DOM element from the main DOM element.
 *
 * @returns {Cyan} The Cyan instance.
 *
 * @example
 * cy.get('ul > li').eq(3).next()
 */
function next() {
  const node = this.__getNode('next')
  this.get(node.nextElementSibling)
  return this
}

/**
 * Filter DOM elements from the main DOM elements.
 *
 * @param {string} selector A selector used for filter matching.
 * @returns {Cyan} The Cyan instance.
 *
 * @example
 * cy.get('ul > li').not('.item')
 */
function not(selector) {
  this.get(this.getNodes().filter(el => !el.matches(selector)))
  return this
}

/**
 * Get the parent DOM element from the main DOM element.
 *
 * @returns {Cyan} The Cyan instance.
 *
 * @example
 * cy.get('li').parent()
 */
function parent() {
  const node = this.__getNode('parent')
  this.get(node.parentElement)
  return this
}

/**
 * Get the previous sibling DOM element from the main DOM element.
 *
 * @returns {Cyan} The Cyan instance.
 *
 * @example
 * cy.get('ul > li').eq(3).prev()
 */
function prev() {
  const node = this.__getNode('next')
  this.get(node.previousElementSibling)
  return this
}

const commands = {
  children,
  closest,
  each,
  eq,
  filter,
  find,
  first,
  last,
  next,
  not,
  parent,
  prev,
}

export default commands
