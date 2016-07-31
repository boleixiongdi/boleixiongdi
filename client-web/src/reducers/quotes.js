import { combineReducers } from 'redux'
import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS,
  QUOTE_REQUEST, QUOTE_SUCCESS, QUOTE_FAILURE
} from '../actions/actions'

import initialState from './initialState';

export default function quotes(state = {
    isFetching: false,
    quote: '',
    authenticated: false
  }, action) {
  switch (action.type) {
    case QUOTE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case QUOTE_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        quote: action.response,
        authenticated: action.authenticated || false
      })
    case QUOTE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      })
    default:
      return state
  }
}
