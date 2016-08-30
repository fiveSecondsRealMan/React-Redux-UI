/**
  部件
  CheckBox(单选按钮)
**/

'use strict';

import React, { Component, PropTypes } from 'react';

class CheckBox extends Component {
  handleChange() {
    const { readOnly, changeEventHandle } = this.props;

    if (readOnly)
      return;



  }

  render() {
    const {
      className,
      style,
      type,
      text,
      value,
      checked,
      readOnly
    } = this.props;

    return (
      <label className={ className } style={ style }>
        <input
          type={ type }
          value={ value }
          readonly={ readOnly }
          checked={ checked }
          onChange={ this.handleChange.bind(this) } />
        { text }
      </label>
    );
  }

  setValue() {
    const {  }
  }
}

CheckBox.propTypes = {
  cboxCheck: PropTypes.func,                        // 选中action
  cboxUnCheck: PropTypes.func,                      // 不选中action
  className: PropTypes.string,                      // class名
  style: PropTypes.object,                          // 样式对象
  text: PropTypes.string,                           // 文本
  value: PropTypes.string,                          // value
  changeEventHandle: PropTypes.func                 // 选中状态改变处理器
};

CheckBox.defaultProps = {
  type: 'checkbox',                                 // checkbox 单选框
  checked: false,                                   // 不选中
  readOnly: false                                   // 可进行选中操作
}

export default CheckBox;
