import React, { Component, PropTypes } from 'react'
import BannerBlxd from '../BannerBlxd'

export default class AboutUs extends Component {

  render() {

    return (
      <div className="content-bg pd20">
        <BannerBlxd />
        <h3>博羸兄弟</h3>
        <div>世俗里的乌托邦，一群大爱无私，有梦想的人的聚集地</div>
        <h3>我们的宗旨</h3>
        <div>世俗里的乌托邦，一群大爱无私，有梦想的人的聚集地</div>
      </div>
    )
  }

}

AboutUs.propTypes = {
}
