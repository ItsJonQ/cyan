import invariant from 'invariant'
import deepmerge from 'deepmerge'
import { isObject, isFunction } from './utils/is.utils'

const initialState = {
  Promise: global.Promise,
  useFakeTimers: false,
  useFakePromises: false,
}

let CYAN_CONFIGURATION_STATE = initialState

export const getConfigState = () => CYAN_CONFIGURATION_STATE

export const setConfigState = (
  nextState = {},
  callback = (state: any) => null,
) => {
  invariant(
    isObject(nextState),
    'Provide setStoreState with a valid state (Object).',
  )
  const state = deepmerge(getConfigState(), nextState)
  CYAN_CONFIGURATION_STATE = state

  invariant(
    isFunction(callback),
    'Provide setStoreState with a valid callback (Function).',
  )
  callback(state)
}

export const resetConfig = () => {
  CYAN_CONFIGURATION_STATE = initialState
}

export const shouldUseFakeTimers = () => !!getConfigState().useFakeTimers
