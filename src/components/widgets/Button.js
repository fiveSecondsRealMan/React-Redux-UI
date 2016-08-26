/**
  部件
  Button(按钮)
**/

'use strict';

import React, { Component, PropTypes } from 'react';
import 'styles/button';

class Button extends Component {
  disable() {

  }

  agentRequest() {

  }

  render() {
    
  }
}

/**
  组件接收的props
**/
Button.propTypes = {
  action: PropTypes.object,               // 组件发生交互动作
  children: PropTypes.string,             // 显示信息
  className: PropTypes.string,            // class名
  disabled: PropTypes.bool,               // 是否禁用
  eventName: PropTypes.string,            // 事件名
  eventHandle: PropTypes.func,            // 事件处理程序
  style: PropTypes.object                 // css样式
};

export default Button;
