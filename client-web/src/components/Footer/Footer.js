import React, { Component, PropTypes } from 'react'
import { Link, IndexLink, browserHistory  } from 'react-router'

export default class Footer extends Component {

  render () {
    return (
      <div>
        <div className="footer">© 2012-2015 博羸兄弟 - 保留所有权利</div>
    	</div>
    )
  }

  constructor (props) {
    super(props)
  }
}
