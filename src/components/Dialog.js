/**
  Dialog(对话框) | 容器组件
**/

'use strict';

import React, { Component, PropTypes } from 'react';
import { pick } from 'utils';
import 'themes/dialog';

class Dialog extends Component {
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
