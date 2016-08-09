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

  componentWillUpdate(nextProps, nextState){
      console.log(this.props.isAuthenticated);
      console.log("sds");
  }

  componentDidUpdate(prevProps, prevState){
    console.log(this.props.isAuthenticated);
    console.log("sds");
  }

  componentWillReceiveProps(nextProps){
    console.log(this.props.isAuthenticated);
    console.log("sds");
  }

  render() {

    const { errorMessage, dispatch, isAuthenticated} = this.props;

    return (
      <div className="content-bg login">
        <input type='text' ref='username' className="login-input"  placeholder='admin@admin.com'/>
        <input type='password' ref='password' className="login-input" placeholder='12345678'/>
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
    const username = this.refs.username
    const password = this.refs.password
    const creds = { username: username.value.trim(), password: password.value.trim() }
    console.log(creds);
    this.props.actions.loginUser(creds);
    //this.props.history.push('/mycenter');
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
