/**
  部件
  CheckBox(单选按钮)
**/

'use strict';

import React, { Component, PropTypes } from 'react';

class CheckBox extends Component {
  handleChange(e) {
    const { readOnly, changeEventHandle, value } = this.props;

    if (readOnly)
      return;
		
		const checked = e.target.checked;
		this.check(checked);
		changeEventHandle && changeEventHandle.call(this, value, checked);
  }
	
	check(checked) {
		const { cboxCheck, cboxUnCheck } = this.props;
		checked ? cboxCheck(true) : cboxUnCheck(false);
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
          readOnly={ readOnly }
          checked={ checked }
          onChange={ this.handleChange.bind(this) } />
        { text }
      </label>
    );
  }
}

CheckBox.propTypes = {
	cboxCheck: PropTypes.func,												// 选中动作
	cboxUnCheck: PropTypes.func,										  // 取消选中动作
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
