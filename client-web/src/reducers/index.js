import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from './auth';
import quotes from './quotes';

const rootReducer = combineReducers({
  routing: routerReducer,
  auth,
  quotes
});

export default rootReducer;
