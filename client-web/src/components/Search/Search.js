import React, { Component, PropTypes } from 'react'

export default class Search extends Component {

  render() {

    return (
      <div className="mt20 mb20">
        <input className="search-input" />
        <input className="search-btn" type="submit" value="搜索" />
      </div>
    )
  }

}

Search.propTypes = {
}
