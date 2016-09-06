/**
  Dialog 头部 | 容器组件
**/

'use strict';

import React, { Component, PropTypes } from 'react';
import IconButton from 'partials/IconButton';

class DialogHeader extends Component {
  getIconButton() {
    const { isClose } = this.props;

    return isClose
      ? ( <IconButton size={ 32 } font='arial' clickEventHandle={ this.handleClick.bind(this) }>×</IconButton> )
      : void 0;
  }

  handleClick() {
    const { clickEventHandle } = this.props;

    clickEventHandle && clickEventHandle();
  }

  render () {
    const { className, children } = this.props;

    return (
      <div className={ className }>
        { this.getIconButton() }
        { children }
      </div>
    );
  }
}

DialogHeader.propTypes = {
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

DialogHeader.defaultProps = {
  isClose: false
};

export default DialogHeader;
