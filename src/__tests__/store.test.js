import {
  mockReducer,
  getStore,
  getStoreReducer,
  getStoreState,
  setStoreReducer,
  setStoreState,
} from '../store'

describe('store', () => {
  describe('mockReducer', () => {
    test('Returns empty state by default', () => {
      expect(mockReducer()).toEqual({})
    })
  })

  describe('getStore', () => {
    test('Can retrieve a Redux store', () => {
      const store = getStore()

      expect(store.getState).toBeTruthy()
      expect(store.dispatch).toBeTruthy()
    })

    test('Can dispatch actions', () => {
      const store = getStore()

      store.dispatch({ type: 'Hello ' })

      expect(store.getState()).toEqual({})
    })
  })

  describe('setStoreState', () => {
    test('Can update the store state', () => {
      setStoreState({ hello: 'there' })

      expect(getStoreState()).toEqual({ hello: 'there' })
    })
  })

  describe('setStoreReducer', () => {
    test('Can set a flat reducer to store', () => {
      const reducer = () => {}
      setStoreReducer(reducer)

      expect(getStoreReducer()).toBe(reducer)
    })

    test('Automatically combines reducers for store', () => {
      const reducers = {
        one: () => ({}),
        two: () => ({}),
        three: () => ({}),
      }

      setStoreReducer(reducers)

      expect(typeof getStoreReducer()).toBe('function')
      expect(getStoreReducer()).not.toEqual(reducers)

      expect(getStoreState().one).toEqual({})
      expect(getStoreState().two).toEqual({})
      expect(getStoreState().three).toEqual({})
    })
  })
})
