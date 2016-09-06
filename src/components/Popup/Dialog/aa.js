/**
  对话框组件 | 容器组件
**/

'use static';

import React, { Component, PropTypes } from 'react';
import Popup from 'components/Popup/';
import DialogHeader from 'components/'
import './dialog.less';

class Dialog extends Popup {
  handleClick(event) {
    const { hideFunc } = this.props;

    hideFunc && hideFunc();
  }

  render() {
    const {
      className,
      dialogHeaderClassName,
      dialogFooterClassName,
      clickEventHandle } = this.props;

    return (
      <div className={ className }>
        <DialogHeader
          className={ dialogHeaderClassName }
          isClose={ true }
          clickEventHandle={ this.handleClick.bind(this) }  >
        </DialogHeader>
      </div>
    );
  }
}

// 扩展Dialog静态属性propTypes
Object.assign(Dialog.propTypes, Popup.propTypes, {
  dialogHeaderClassName: PropTypes.string,
  dialogFooterClassName: PropTypes.string,
  hideFunc: PropTypes.func
});

// 扩展Dialog静态属性defaultProps
Object.assign(Dialog.defaultProps, Popup.defaultProps, {
  className: 'dialog',
  dialogHeaderClassName: 'dialog-header',
  dialogFooterClassName: 'dialog-footer'
});

export default Dialog;
