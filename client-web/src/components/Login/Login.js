import React, { Component, PropTypes } from 'react'
import { connect,dispatch } from 'react-redux';
import { bindActionCreators } from 'redux'
import { push } from 'react-router-redux';
import * as ItemsActions from '../../actions/actions'
import MyCenter from '../MyCenter/MyCenter'

class Login extends Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("this.props");
    console.log(this.props);
  }

  render() {

    const { errorMessage, dispatch, isAuthenticated} = this.props;

    return (
      <div className="content-bg login">
        <input type='text' ref='username' className="login-input"  placeholder='gonto'/>
        <input type='password' ref='password' className="login-input" placeholder='gonto'/>
        <button onClick={(event) => this.handleClick(event)} className="bl-btn">
          登录
        </button>
        {errorMessage &&
          <p style={{color:'red'}}>{errorMessage}</p>
        }
      </div>
    )
  }

  handleClick(event) {
    console.log(event);
    const username = this.refs.username
    const password = this.refs.password
    console.log(username);
    console.log(password);
    const creds = { username: username.value.trim(), password: password.value.trim() }
    console.log(creds);
    console.log(this.props);
    console.log(this.store);
    console.log(this.props.dispatch);
    this.props.actions.loginUser(creds);
    this.props.history.push('/mycenter');
  }
}

Login.propTypes = {
  errorMessage: PropTypes.string
}


//将state上的数据绑定到props上
function mapStateToProps(state) {
  console.log(state)
  //rootReducer 这个名字跟store里一致
  var _thisState = state.rootReducer;
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
export default connect(mapStateToProps, mapDispatchToProps)(Login)