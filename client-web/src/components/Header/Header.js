import React, { Component, PropTypes } from 'react'
import { Link, IndexLink} from 'react-router'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { push } from 'react-router-redux';
import * as ItemsActions from '../../actions/actions'

class Header extends Component {

  render() {
    const {isAuthenticated} = this.props
    return (
      <header className="header">
        <div className="logo">
          <p className="title">博羸兄弟</p>
        </div>
        <nav className="bl_nav">
          <ul>
            <li>
              <IndexLink className="tab-item" to="/" activeClassName="active">
                首页
              </IndexLink>
            </li>

            {!isAuthenticated &&
              <li>
                <Link className="tab-item" to={`/login`} activeClassName="active">
                  登录
                </Link>
              </li>
           }
           {!isAuthenticated &&
              <li>
                <Link className="tab-item" to={`/register`} activeClassName="active">
                  注册
                </Link>
              </li>
            }
            {isAuthenticated &&
              <li>
                <Link className="tab-item" to={`/mycenter`} activeClassName="active">
                  个人中心
                </Link>
              </li>
            }
            {isAuthenticated &&
              <li>
                <a onClick={() => this.onLogoutClick()} className="tab-item">
                  Logout
                </a>
              </li>
            }

            <li>
              <Link className="tab-item" to={`/about`} activeClassName="active">
                关于我们
              </Link>
            </li>
          </ul>
        </nav>
        <div className="cb"></div>
      </header>
    )
  }

  onLogoutClick() {
    this.props.actions.logoutUser()
    this.props.history.push('/');
  }

};



//将state上的数据绑定到props上
function mapStateToProps(state) {
  console.log(state)
  //rootReducer 这个名字跟store里一致
  var _thisState = state.rootReducer;
  console.log(_thisState.auth.isAuthenticated);
  return {
      state,
      isAuthenticated:_thisState.auth.isAuthenticated
  }
}
//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators(ItemsActions, dispatch)
  }
}

/*export default connect(state => ({
    items: state.items,
    filter: state.filter
}), dispatch => ({
    actions: bindActionCreators(ItemsActions, dispatch)
}))(App) */

//写法等同于上面写法

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps, mapDispatchToProps)(Header)
