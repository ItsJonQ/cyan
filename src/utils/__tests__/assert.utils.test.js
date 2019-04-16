import { assert } from '../assert.utils'

describe('utils/assert', () => {
  describe('assert', () => {
    test('Returns callback if no errors', () => {
      expect(assert(() => 'ok')).toBe('ok')
    })

    test('console.warn if error, and returns false', () => {
      const spy = jest
        .spyOn(global.console, 'warn')
        .mockImplementation(() => {})

      const t = () => {
        throw new TypeError()
      }

      expect(assert(t)).toBe(false)
      expect(spy).toHaveBeenCalled()

      spy.mockRestore()
    })
  })
})
