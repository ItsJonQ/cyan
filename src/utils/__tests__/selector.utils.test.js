import { get, getByText } from '../selector.utils'

describe('utils/selector', () => {
  describe('get', () => {
    test('Returns a NodeList as an Array', () => {
      document.body.innerHTML = '<ul><li></li><li></li></ul>'
      const el = document.querySelectorAll('li')
      const nodes = get(el)

      expect(Array.isArray(nodes)).toBeTruthy()
      expect(nodes.length).toBe(2)
      expect(nodes[0] instanceof Element).toBeTruthy()
    })

    test('Returns an Array of DOM Nodes as is', () => {
      document.body.innerHTML = '<ul><li></li><li></li></ul>'
      const el = document.querySelectorAll('li')
      // Converts it to an array
      const nodes = Array.from(get(el))

      expect(Array.isArray(nodes)).toBeTruthy()
      expect(nodes.length).toBe(2)
      expect(nodes[0] instanceof Element).toBeTruthy()
    })

    test('Returns a querySelector (string) of multiple Nodes as an Array', () => {
      document.body.innerHTML = '<ul><li></li><li></li></ul>'
      const nodes = get('li')

      expect(Array.isArray(nodes)).toBeTruthy()
      expect(nodes.length).toBe(2)
      expect(nodes[0] instanceof Element).toBeTruthy()
    })

    test('Returns a single DOM Node as an array', () => {
      document.body.innerHTML = '<ul><li></li><li></li></ul>'
      const el = document.querySelectorAll('ul')
      // Converts it to an array
      const nodes = get(el)

      expect(Array.isArray(nodes)).toBeTruthy()
      expect(nodes.length).toBe(1)
      expect(nodes[0] instanceof Element).toBeTruthy()
    })

    test('Returns a querySelector (string) of multiple Nodes as an Array', () => {
      document.body.innerHTML = '<ul><li></li><li></li></ul>'
      const nodes = get('ul')

      expect(Array.isArray(nodes)).toBeTruthy()
      expect(nodes.length).toBe(1)
      expect(nodes[0] instanceof Element).toBeTruthy()
    })

    test('Returns an empty Array by default', () => {
      const nodes = get()

      expect(Array.isArray(nodes)).toBeTruthy()
      expect(nodes.length).toBe(0)
    })
  })

  describe('getByText', () => {
    test('Can get node by text content', () => {
      document.body.innerHTML =
        '<ul><li class="one">Hello</li><li class="two">There</li></ul>'

      expect(getByText('Hello')).toBeTruthy()
      expect(getByText('There')).toBeTruthy()
      expect(getByText('Hello')).not.toBe(getByText('There'))
    })
  })
})
