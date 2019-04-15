function children() {
  this.get(this.getNode().children)
  return this
}

function closest(selector) {
  this.get(this.getNode().closest(selector))
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
  this.get(this.getNode().querySelectorAll(selector))
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
  this.get(this.getNode().nextElementSibling)
  return this
}

function not(selector) {
  this.get(this.getNodes().filter(el => !el.matches(selector)))
  return this
}

function parent() {
  this.get(this.getNode().parentElement)
  return this
}

function prev() {
  this.get(this.getNode().previousElementSibling)
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
