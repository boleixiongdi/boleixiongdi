import React, { Component, PropTypes } from 'react'
import { Link, IndexLink, browserHistory  } from 'react-router'

export default class MyCenter extends Component {

  render () {
    return (
      <div className="content-bg pd20">
        <h3>个人中心</h3>
        <div>世俗里的乌托邦，一群大爱无私，有梦想的人的聚集地</div>
      </div>
    )
  }

  constructor (props) {
    super(props)
  }
}
