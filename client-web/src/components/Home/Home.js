import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as ItemsActions from '../../actions/actions'
import Search from '../Search/Search'

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("this.props");
    console.log(this.props);
  }

  render() {
    const { name, status, priority } = this.props
    return (
        <div className ='content'>
          <Search />
          <div className="article">
            <div className='article-abstrat'>
              <p>文章标题</p>
              <p>这是一片优秀的文章</p>
            </div>
            <div className="article-foot">
              <span className="green"></span><span>雷继文</span>
              <span className="green">&nbsp; post at &nbsp;</span><span>2016-07-26 15:55:54</span>
            </div>
          </div>
          <div className="article">
            <div className='article-abstrat'>
              <p>文章标题</p>
              <p>这是一片优秀的文章</p>
            </div>
            <div className="article-foot">
              <span className="green"></span><span>雷继文</span>
              <span className="green">&nbsp; post at &nbsp;</span><span>2016-07-26 15:55:54</span>
            </div>
          </div>
          <div className="article">
            <div className='article-abstrat'>
              <p>文章标题</p>
              <p>这是一片优秀的文章</p>
            </div>
            <div className="article-foot">
              <span className="green"></span><span>雷继文</span>
              <span className="green">&nbsp; post at &nbsp;</span><span>2016-07-26 15:55:54</span>
            </div>
          </div>
          <div className="article">
            <div className='article-abstrat'>
              <p>文章标题</p>
              <p>这是一片优秀的文章</p>
            </div>
            <div className="article-foot">
              <span className="green"></span><span>雷继文</span>
              <span className="green">&nbsp; post at &nbsp;</span><span>2016-07-26 15:55:54</span>
            </div>
          </div>
          <div className="article">
            <div className='article-abstrat'>
              <p>文章标题</p>
              <p>这是一片优秀的文章</p>
            </div>
            <div className="article-foot">
              <span className="green"></span><span>雷继文</span>
              <span className="green">&nbsp; post at &nbsp;</span><span>2016-07-26 15:55:54</span>
            </div>
          </div>
          <div className="article">
            <div className='article-abstrat'>
              <p>文章标题</p>
              <p>这是一片优秀的文章</p>
            </div>
            <div className="article-foot">
              <span className="green"></span><span>雷继文</span>
              <span className="green">&nbsp; post at &nbsp;</span><span>2016-07-26 15:55:54</span>
            </div>
          </div>
        </div>
    );
  }
};

//将state上的数据绑定到props上
function mapStateToProps(state) {
  console.log(state)
  //rootReducer 这个名字跟store里一致
  var _thisState = state.rootReducer;
  return {
      state
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
export default connect(mapStateToProps, mapDispatchToProps)(Home)
