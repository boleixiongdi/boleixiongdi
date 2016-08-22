import React from 'react'
import { Route, IndexRoute, Link } from 'react-router'

/* container components */
import App from './containers/App'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import AboutUs from './components/AboutUs/AboutUs'
import MyCenter from './components/MyCenter/MyCenter'
import Article from './components/Article/Article'

const isAuth= (nextState, replace) => {
    console.info('routerenter', nextState)
    var isLogin = localStorage.getItem('id_token') ? true : false;
    console.info("login flag",isLogin);
    if (!isLogin) {
      replace('/login');
    }
}

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register}/>
    <Route path="/about" component={AboutUs}/>
    <Route onEnter={isAuth} path="/mycenter" component={MyCenter}/>
    <Route path="/article" component={Article}/>
  </Route>
)

export default routes
