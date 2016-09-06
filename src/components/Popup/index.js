/**
  弹出框基类组件 | 容器组件
**/

'use strict';

import React, { Component, PropTypes } from 'react';
import './index.less';

class Popup extends Component {
  static propTypes = {
    /**
     * class
    */
    className: PropTypes.string,

    /**
     * 是否是模式弹出层
    */
    isModal: PropTypes.bool,

    /**
     * 是否延时自动关闭
    */
    isDelayAutoClose: PropTypes.bool
  };

  static defaultProps = {
    isModal: true,
    isDelayAutoClose: false
  };
}

export default Popup;
