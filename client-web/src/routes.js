import React from 'react'
import { Route, IndexRoute, Link } from 'react-router'

/* container components */
import App from './containers/App'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import AboutUs from './components/AboutUs/AboutUs'
import MyCenter from './components/MyCenter/MyCenter'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register}/>
    <Route path="/about" component={AboutUs}/>
    <Route path="/mycenter" component={MyCenter}/>
  </Route>
)

export default routes
