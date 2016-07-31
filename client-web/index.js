import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import thunkMiddleware from 'redux-thunk'

import { Router, browserHistory, useRouterHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import useScroll from 'scroll-behavior/lib/useStandardScroll'
import createBrowserHistory from 'history/lib/createBrowserHistory'

import { configureStore } from './src/store'
import routes from './src/routes'

const initState = {

}

let rootElement = document.getElementById('root')

let state = initState || undefined
const store = configureStore(browserHistory, state)
const createScrollHistory = useScroll(createBrowserHistory)
const appHistory = useRouterHistory(createScrollHistory)()
const history = syncHistoryWithStore(appHistory, store)

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  rootElement
)
