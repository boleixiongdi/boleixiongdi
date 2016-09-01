import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as ItemsActions from '../../actions/actions'
import Search from '../Search/Search'
import { Link　} from 'react-router'
import QueueAnim from 'rc-queue-anim';

import _ from 'lodash';
import { VelocityTransitionGroup, velocityHelpers } from 'velocity-react'

require('velocity-animate');
require('velocity-animate/velocity.ui');

var CATS = ['😸', '😹', '😺', '😻', '😼', '😽', '😾', '😿', '🙀'];
var FOODS = ['🍅', '🍆', '🍇', '🍈', '🍉', '🍊', '🍌', '🍍', '🍎', '🍏', '🍑', '🍒', '🍓', '🍔', '🍕', '🍖', '🍗'];

var Animations = {
  // Register these with UI Pack so that we can use stagger later.
  In: velocityHelpers.registerEffect({
    calls: [
      [{
        transformPerspective: [ 800, 800 ],
        transformOriginX: [ '50%', '50%' ],
        transformOriginY: [ '100%', '100%' ],
        marginBottom: 0,
        opacity: 1,
        rotateX: [0, 130],
      }, 1, {
        easing: 'ease-out',
        display: 'block',
      }]
    ],
  }),

  Out: velocityHelpers.registerEffect({
    calls: [
      [{
        transformPerspective: [ 800, 800 ],
        transformOriginX: [ '50%', '50%' ],
        transformOriginY: [ '0%', '0%' ],
        marginBottom: -30,
        opacity: 0,
        rotateX: -70,
      }, 1, {
        easing: 'ease-out',
        display: 'block',
      }]
    ],
  }),
};

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemCount: 0,
      items: [],
      duration: 500
    };
    this.addRows = this.addRows.bind(this);
    this.whenAddButtonClicked = this.whenAddButtonClicked.bind(this)
  }

  componentDidMount() {
    console.log("this.props");
    console.log(this.props);
    this.addRows(10);
  }

  whenAddButtonClicked () {
    this.addRows(1);
  }

  addRows (count) {
    var items = this.state.items;

    for (var i = 0; i < count; ++i) {
      var item = {
        title: [_.sample(CATS)].concat(_.sample(FOODS, _.random(1, 4))).join(' '),
        i: this.state.itemCount + i,
      };

      items = [item].concat(items);
    }

    this.setState({
      items: items.slice(0, 6),
      itemCount: this.state.itemCount + count,
    });
  }

  render() {
    const { name, status, priority } = this.props;

    var rows = this.state.items.map(function (item, i, arr) {
      var itemStyle = {
        width: 150,
        padding: '0 10px',
        lineHeight: '30px',
        backgroundColor: (item.i % 2 == 0) ? backColor : underneathColor,
      };

      return (
        <div key={item.i}>
          <div className="article">
            <div className='article-abstrat'>
              <Link to={`/article`}>
                <p>不要用以为我要上你的眼神看着我{item.i}</p>
                <p>这是一片优秀的文章{item.i}</p>
              </Link>
            </div>
            <div className="article-foot">
              <span className="green"></span><span>雷继文</span>
              <span className="green">&nbsp; post at &nbsp;</span><span>2016-07-26 15:55:54</span>
            </div>
          </div>
        </div>);
    });

    var groupStyle = {
      margin: '10px 0',
    };

    var backColor = {
      backColor: '#5797c0',
    };

    var underneathColor = {
      underneathColor: '#255175',
    };

    var enterAnimation = {
      animation: Animations.In,
      stagger: this.state.duration,
      duration: this.state.duration,
      backwards: true,
      display: 'block',
      style: {
        // Since we're staggering, we want to keep the display at "none" until Velocity runs
        // the display attribute at the start of the animation.
        display: 'none',
      },
    };

    var leaveAnimation = {
      animation: Animations.Out,
      stagger: this.state.duration,
      duration: this.state.duration,
      backwards: true,
    };

    return (
        <div className ='content'>
          <Search />
          <QueueAnim delay={500}>
            <div key="a">
              <div className="article">
                <div className='article-abstrat'>
                  <Link to={`/article`}>
                    <p>不要用以为我要上你的眼神看着我</p>
                    <p>这是一片优秀的文章</p>
                  </Link>
                </div>
                <div className="article-foot">
                  <span className="green"></span><span>雷继文</span>
                  <span className="green">&nbsp; post at &nbsp;</span><span>2016-07-26 15:55:54</span>
                </div>
              </div>
            </div>
            <div key="b">
              <div className="article">
                <div className='article-abstrat'>
                  <Link to={`/article`}>
                    <p>我习惯一个劲的让自己出丑直到习以为常</p>
                    <p>这是一片优秀的文章</p>
                  </Link>
                </div>
                <div className="article-foot">
                  <span className="green"></span><span>雷继文</span>
                  <span className="green">&nbsp; post at &nbsp;</span><span>2016-07-26 15:55:54</span>
                </div>
              </div>
            </div>
            <div key="c">
              <div className="article">
                <div className='article-abstrat'>
                  <Link to={`/article`}>
                    <p>你的智商远比你想象的要低</p>
                    <p>这是一片优秀的文章</p>
                  </Link>
                </div>
                <div className="article-foot">
                  <span className="green"></span><span>雷继文</span>
                  <span className="green">&nbsp; post at &nbsp;</span><span>2016-07-26 15:55:54</span>
                </div>
              </div>
            </div>
            <div key="d">
              <div className="article">
                <div className='article-abstrat'>
                  <Link to={`/article`}>
                    <p>我的优秀出乎你的意料</p>
                    <p>这是一片优秀的文章</p>
                  </Link>
                </div>
                <div className="article-foot">
                  <span className="green"></span><span>雷继文</span>
                  <span className="green">&nbsp; post at &nbsp;</span><span>2016-07-26 15:55:54</span>
                </div>
              </div>
            </div>
            <div key="e">
              <div className="article">
                <div className='article-abstrat'>
                  <Link to={`/article`}>
                    <p>文章标题</p>
                    <p>这是一片优秀的文章</p>
                  </Link>
                </div>
                <div className="article-foot">
                  <span className="green"></span><span>雷继文</span>
                  <span className="green">&nbsp; post at &nbsp;</span><span>2016-07-26 15:55:54</span>
                </div>
              </div>
            </div>
            <div key="f">
              <div className="article">
                <div className='article-abstrat'>
                  <Link to={`/article`}>
                    <p>文章标题</p>
                    <p>这是一片优秀的文章</p>
                  </Link>
                </div>
                <div className="article-foot">
                  <span className="green"></span><span>雷继文</span>
                  <span className="green">&nbsp; post at &nbsp;</span><span>2016-07-26 15:55:54</span>
                </div>
              </div>
            </div>
          </QueueAnim>

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
