function children() {
  const node = this.__getNode('children')
  this.get(node.children)
  return this
}

function closest(selector) {
  const node = this.__getNode('closest', selector)
  this.get(node.closest(selector))
  return this
}

function each(callback) {
  this.getNodes().forEach(callback)
  return this
}

function eq(index) {
  this.get(this.getNodes()[index])
  return this
}

function filter(selector) {
  this.get(this.getNodes().filter(el => el.matches(selector)))
  return this
}

function find(selector) {
  const node = this.__getNode('find', selector)
  this.get(node.querySelectorAll(selector))
  return this
}

function first() {
  this.eq(0)
  return this
}

function last() {
  this.eq(this.getNodes().length - 1)
  return this
}

function next() {
  const node = this.__getNode('next')
  this.get(node.nextElementSibling)
  return this
}

function not(selector) {
  this.get(this.getNodes().filter(el => !el.matches(selector)))
  return this
}

function parent() {
  const node = this.__getNode('parent')
  this.get(node.parentElement)
  return this
}

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
