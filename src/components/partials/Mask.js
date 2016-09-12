/**
  Mask (遮罩) | 不可再分组件
**/

import React, { Component, PropTypes } from 'react';
import { replaceTemplate } from 'utils';

function getStyles(props) {
  return {
    root: {
      position: 'fixed',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      zIndex: 999,
      backgroundColor: 'rgba(0,0,0,.75)',
    }
  }
}

export default class Mask extends Component {
  render() {
    const { root } = getStyles(this.props);
    const { className } = this.props;

    return (
      <div className={ className } style={ root }></div>
    );
  }
}

Mask.propTypes = {
  /**
   * class
  */
  className: PropTypes.string
}

Mask.defaultProps = {
  className: 'mask'
};
