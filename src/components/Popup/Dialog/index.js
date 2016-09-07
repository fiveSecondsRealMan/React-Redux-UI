/**
  对话框组件 | 容器组件
**/

'use static';

import React, { Component, PropTypes } from 'react';
import Popup from 'components/Popup/';
import DialogHeader from './DialogHeader'
import './dialog.less';

class Dialog extends Popup {
  render() {
    const {
      className,
      style,
      dialogHeaderClassName,
      dialogFooterClassName,
      clickEventHandle } = this.props;

    return (
      <div ref={ el => this.el = el } className={ className } style={ style }>
        <div className='dialog-inner'>
          <DialogHeader
            className={ dialogHeaderClassName }
            isClose={ true }
            clickEventHandle={ this.hide.bind(this) }  >
            分享设置
          </DialogHeader>
        </div>
      </div>
    );
  }
}

// 扩展Dialog静态属性propTypes
Object.assign(Dialog.propTypes = {}, Popup.propTypes, {
  dialogHeaderClassName: PropTypes.string,
  dialogFooterClassName: PropTypes.string,
  hideFunc: PropTypes.func
});

// 扩展Dialog静态属性defaultProps
Object.assign(Dialog.defaultProps = {}, Popup.defaultProps, {
  className: 'dialog',
  dialogHeaderClassName: 'dialog-header',
  dialogFooterClassName: 'dialog-footer'
});

export default Dialog;
