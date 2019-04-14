function eq(index) {
  this.el = this.el.length ? [this.el[index]] : []
  return this
}

function first() {
  this.eq(0)
  return this
}

function last() {
  this.eq(this.el.length - 1)
  return this
}

const commands = {
  eq,
  first,
  last,
}

export default commands
