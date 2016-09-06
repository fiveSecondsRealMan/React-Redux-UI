/**
  Dialog 头部 | 容器组件
**/

'use strict';

import React, { Component, PropTypes } from 'react';
import IconButton from 'partials/IconButton';

class DialogHeader extends Component {
  static propTypes = {
    /**
     * class
    */
    className: PropTypes.string,

    /**
     * 是否含关闭按钮
    */
    isClose: PropTypes.bool,

    /**
     * click事件触发后调用的方法，通常是父组件传递的
    */
    clickEventHandle: PropTypes.func
  };

  static defaultProps = {
    isClose: false
  };

  getIconButton() {
    const { isClose } = this.props;

    if (isClose) {
      return (
        <IconButton
          size={ 32 }
          font='arial'
          clickEventHandle={ this.handleClick.bind(this) }>
        </IconButton>
      );
    }
  }

  handleClick(event) {
    const { clickEventHandle } = this.props;

    clickEventHandle && clickEventHandle(event);
  }

  render () {
    const { className, isClose, children } = this.props;

    <div className={ className }
      <IconButton />
      { children }
    </div>
  }
}

export default DialogHeader;
