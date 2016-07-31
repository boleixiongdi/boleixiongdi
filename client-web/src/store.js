import React from 'react'

import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'
import api from '../middleware/api'

export function configureStore(history, initialState) {

  const reducer = combineReducers({
    rootReducer,
    routing: routerReducer
  })

  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(
        thunkMiddleware,api,
        routerMiddleware(history)
      )
    )
  )

  return store
}
