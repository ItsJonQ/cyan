import { createStore, combineReducers } from 'redux'
import deepmerge from 'deepmerge'
import { isObject } from './utils/is.utils'

const mockReducer = (state = {}) => state
const mockStore = createStore(mockReducer, {})

let CYAN_STORE = mockStore
let CYAN_STORE_REDUCER = mockReducer
let CYAN_STORE_INITIAL_STATE = {}

export const getStore = () => CYAN_STORE
export const getStoreReducer = () => CYAN_STORE_REDUCER
export const getStoreState = () => getStore().getState()

export const setStore = (store = mockStore) => {
  CYAN_STORE = store
  CYAN_STORE_INITIAL_STATE = store.getState()

  return getStore()
}

export const setStoreState = (nextState = {}, callback = () => null) => {
  const state = deepmerge(getStoreState(), nextState)
  const store = createStore(getStoreReducer(), state)

  setStore(store)
  callback(state)
}

export const setInitialState = (initialState = {}) => {
  setStoreState(initialState)

  return getStoreState()
}

export const setStoreReducer = (reducer = mockReducer) => {
  CYAN_STORE_REDUCER = isObject(mockReducer)
    ? combineReducers(mockReducer)
    : reducer

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
