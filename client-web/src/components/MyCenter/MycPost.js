import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Link, IndexLink, browserHistory  } from 'react-router'

export default class MycPost extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var textbox = ReactDOM.findDOMNode(this.refs.textarea);
    this.editor = new Simditor({
      textarea: $(textbox),
      toolbar: ['title', 'bold', 'italic', 'underline', 'strikethrough', 'fontScale', 'color',
        'ol', 'ul', 'blockquote', 'code', 'table', 'link', 'image', 'indent', 'outdent', 'alignment', 'hr']
    });
    this.editor.on("valuechanged", (e, src) => {
      //监听到编辑器的变化，获取到内容保存到数据库
      console.info("this.editor.getValue()",this.editor.getValue());
    });
  }

  componentDidUpdate (prevProps) {
    if(prevProps.body !== this.props.body) {
      this.editor.setValue(this.props.body);
    }
  }

  render() {

    return (
      <div className="ant-layout-aside">
        <h3>写文章</h3>
        <form className="form-horizontal" >
          <div className="form-group form-group-sm" style={{marginLeft: 0}} >
            <label style={{textAlign: 'center',color: '#696969'}} className="col-sm-2 control-label search-btn" >标题</label>
            <div className="col-sm-10">
              <input className="form-control" type="text" placeholder="文章标题" />
            </div>
          </div>
        </form>
        <div>
          <textarea className="form-control" ref='textarea' rows="50" />
        </div>
        <div className="align-ct">
          <button className="bl-btn">保存</button>
        </div>
      </div>
    )
  }

}

MycPost.propTypes = {
}
