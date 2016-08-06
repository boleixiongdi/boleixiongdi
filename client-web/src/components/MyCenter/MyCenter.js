import React, { Component, PropTypes } from 'react'
import { Link, IndexLink, browserHistory  } from 'react-router'
import MycPost from './MycPost'


export default class MyCenter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isArticles: true,
      other:'',
      articleActive: 'myc-active',
      messageActive: '',
      postActive: '',
      isPost: false
    };
    this.showArticle = this.showArticle.bind(this);
    this.showMessage = this.showMessage.bind(this);
    this.showPost = this.showPost.bind(this);
  }

  componentDidMount() {

  }

  componentDidUpdate (prevProps) {
    if(prevProps.body !== this.props.body) {
      this.editor.setValue(this.props.body);
    }
  }

  showArticle() {
    this.setState(
      {
        isArticles: true,
        articleActive: 'myc-active',
        messageActive: '',
        postActive: '',
        isPost: false
      }
    )
  }

  articles() {
    return (
      <div className="ant-layout-aside">
        <h3>已发表文章</h3>
        <div>
          <div>文章列表</div>
        </div>
      </div>
    );
  }

  showMessage(){
    console.log(this.messages())
    this.setState(
      {
        isArticles: false,
        other:this.messages(),
        articleActive: '',
        messageActive: 'myc-active',
        postActive: '',
        isPost: false
      }
    )
    console.log("this.state.other");
    console.log(this.state.other);
  }

  messages() {
    return (
      <div className="ant-layout-aside">
        <h3>我的消息</h3>
        <div>
          <div>消息列表</div>
        </div>
      </div>
    );
  }

  showPost() {
    this.setState(
      {
        isArticles: false,
        other:<MycPost/>,
        articleActive: '',
        messageActive: '',
        postActive: 'myc-active',
        isPost: true
      }
    )


  }

  post(){
    return (
      <div className="ant-layout-aside">
        <h3>写文章</h3>
        <div>
          <div>写文章界面</div>
        </div>
      </div>
    );
  }

  render () {
    return (
      <div className="content-bg pd20">
        <div className="mycenter-nav">
          <ul>
            <li><a className={this.state.articleActive+" tab-item"} onClick={this.showArticle}>文章</a></li>
            <li><a className={this.state.messageActive+" tab-item"} onClick={this.showMessage}>消息</a></li>
            <li><a className={this.state.postActive+" tab-item"} onClick={this.showPost}>写文章</a></li>
          </ul>
        </div>
        <div>{this.state.isArticles ? this.articles() : this.state.other }</div>
      </div>
    )
  }

}
