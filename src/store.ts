import { createStore, combineReducers } from 'redux'
import invariant from 'invariant'
import deepmerge from 'deepmerge'
import { isObject, isFunction } from './utils/is.utils'

export const mockReducer = (state = {}) => state
export const mockStore = createStore(mockReducer, {})

let CYAN_STORE = mockStore
let CYAN_STORE_REDUCER: any = mockReducer
let CYAN_STORE_INITIAL_STATE = {}

export const getStore = () => CYAN_STORE
export const getStoreReducer = () => CYAN_STORE_REDUCER
export const getStoreState = () => getStore().getState()

export const setStore = (store = mockStore) => {
  invariant(
    isObject(store),
    'Provide setStore with a valid createStore() instance.',
  )
  CYAN_STORE = store
  CYAN_STORE_INITIAL_STATE = store.getState()

  return getStore()
}

export const setStoreState = (
  nextState = {},
  callback = (state: any) => null,
) => {
  invariant(
    isObject(nextState),
    'Provide setStoreState with a valid state (Object).',
  )
  const state = deepmerge(getStoreState(), nextState)
  const store = createStore(getStoreReducer(), state)

  setStore(store)

  invariant(
    isFunction(callback),
    'Provide setStoreState with a valid callback (Function).',
  )
  callback(state)
}

export const setInitialState = (initialState = {}) => {
  setStoreState(initialState)

  return getStoreState()
}

export const setStoreReducer = (reducer = mockReducer) => {
  invariant(
    isObject(reducer) || isFunction(reducer),
    'Provide setStoreReducer with a valid reducer (Object/Function).',
  )
  CYAN_STORE_REDUCER = isObject(reducer) ? combineReducers(reducer) : reducer

  setStoreState()

  return reducer
}

export const resetStore = () => {
  setInitialState(CYAN_STORE_INITIAL_STATE)

  return getStore()
}

export const completelyResetStore = () => {
  setStoreReducer()
  setStore()

  return getStore()
}
