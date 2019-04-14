function getAttribute(attr) {
  return this.getNode()[attr]
}

function getComputedStyle(prop) {
  const styles = window.getComputedStyle(this.getNode())
  return prop ? styles[prop] : styles
}

function getId(id) {
  return this.getAttribute(id)
}

function getValue() {
  return this.getAttribute('value')
}

const commands = {
  getAttribute,
  getAttr: getAttribute,
  getComputedStyle,
  getStyle: getComputedStyle,
  getId,
  getValue,
}

export default commands
