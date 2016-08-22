import React, { Component, PropTypes } from 'react'

export default class Article extends Component {

  render() {

    return (
      <div className="content-bg pd20">
        <h3>博客详情也</h3>
        <div>哲学三问</div>
        <h3>你所不知道的存在</h3>
        <div>不要为了不必要的事情烦恼</div>
      </div>
    )
  }

}

Article.propTypes = {
}
