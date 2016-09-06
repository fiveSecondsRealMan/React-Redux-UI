/**
  Dialog(对话框) | 容器组件
**/

'use strict';

import React, { Component, PropTypes } from 'react';
import './dialog.less';
import DialogHeader from './DialogHeader';

class Dialog extends Component {
  static propTypes = {
    className: PropTypes.string,
    dialogHeaderClassName: PropTypes.string,
    dialogFooterClassName: PropTypes
  };

  static defaultProps = {
    className: 'dialog',
    dialogHeaderClassName: 'dialog-header',
    dialogFooterClassName: 'dialog-footer'
  };

  render() {
    const dialogProps = [
      'className'
    ];

    return (
      <div { ...pick(this.props, dialogProps) }>
        <span className='gs'>span</span>
        <h1 className='hs'>h1</h1>
      </div>
    );
  }
}

Dialog.propTypes = {
  className: PropTypes.string
};

Dialog.defaultProps = {};

export default Dialog;
