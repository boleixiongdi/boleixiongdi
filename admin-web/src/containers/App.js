import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Login from './login/Login';
import { Link } from 'react-router';
import './App.scss';
import { Menu, Breadcrumb, Icon, Button } from 'antd';
const SubMenu = Menu.SubMenu;
import { logoutUser } from './../actions/auth';

class App extends Component {
  static propTypes = {
    children: PropTypes.element,
    isAuthenticated: React.PropTypes.bool,
    routing: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.renderAuthenticatedPage = this.renderAuthenticatedPage.bind(this);
    this.logoutUser = this.logoutUser.bind(this);
    this.onToggle = this.onToggle.bind(this);
    this.state = {
      collapse: false,
      current: '1',
      openKeys: ['sub1']
    };
  }

  componentDidMount() {
  }

  logoutUser(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(logoutUser());
  }

  onToggle(info) {
    this.setState({
      openKeys: info.open ? info.keyPath : info.keyPath.slice(1),
    });
  }

  renderAuthenticatedPage() {
    return (
      <div className="ant-layout-aside">
        <aside className="ant-layout-sider">
          <div className="ant-layout-logo"></div>
          <Menu mode="inline"
            theme="dark"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            openKeys={this.state.openKeys}
            onOpen={this.onToggle}
            onClose={this.onToggle}>
            <SubMenu key="sub1" title={<span><Icon type="user" />用户管理</span>}>
              <Menu.Item key="1">
                <Link to={'/users'}>
                  用户列表
                </Link>
              </Menu.Item>
              <Menu.Item key="2">角色配置</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="appstore" />文章管理</span>}>
              <Menu.Item key="3">
                <Link to={'/articles'}>
                  文章列表
                </Link>
              </Menu.Item>
              <Menu.Item key="4">主题管理</Menu.Item>
            </SubMenu>
          </Menu>
        </aside>
        <div className="ant-layout-main">
          <div className="ant-layout-header">
            <div className="ant-logout-btn">
              <Button onClick={this.logoutUser} type="primary">退出</Button>
            </div>
          </div>
          <div className="ant-layout-breadcrumb">
            <Breadcrumb>
              <Breadcrumb.Item>首页</Breadcrumb.Item>
              <Breadcrumb.Item>用户管理</Breadcrumb.Item>
              <Breadcrumb.Item>用户列表</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="ant-layout-container">
            <div className="ant-layout-content">
              <div style={{ height: 590 }}>
                {this.props.children}
              </div>
            </div>
          </div>
          <div className="ant-layout-footer">
          Ant Design 版权所有 © 2015 由蚂蚁金服体验技术部支持
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { isAuthenticated } = this.props;
    return (
      <div>
        {isAuthenticated? this.renderAuthenticatedPage() : <Login/>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  const { routing, auth: { isAuthenticated, user } } = state;
  return {
    isAuthenticated, user,routing
  };
}

export default connect(mapStateToProps)(App);
