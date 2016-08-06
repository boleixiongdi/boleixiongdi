import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import Simditor from 'simditor'
import $ from 'jquery'

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
      console.info("this.props.fields",this.props.fields);
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
        <div>
          <div>写文章界面</div>
          <textarea className="form-control" ref='textarea' rows="50" />
        </div>
      </div>
    )
  }

}

MycPost.propTypes = {
}
