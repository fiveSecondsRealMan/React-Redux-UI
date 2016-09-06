/**
  图标组件 | 不可划分组件
**/

'use strict';

import React, { Component, PropTypes } from 'react';
import { parseAnyToString } from 'utils';
import 'themes/icon.less';

class IconButton extends Component {
  static propTypes = {
    /**
     * 传递普通文本或不传递文本作为组件的children
    */
    children: PropTypes.any,

    /**
     * 大小
    */
    size: PropTypes.number,

    /**
     * 字体名
    */
    font: PropTypes.string,

    /**
     * 是否旋转
    */
    isRotate: PropTypes.bool,

    /**
     * click事件触发后调用的方法，通常是父组件传递的
    */
    clickEventHandle: PropTypes.bool,

    /**
     * 是否含背景图片
    */
    isBackgroundImage: PropTypes.bool,

    /**
     * 背景图片地址
    */
    backgroundImageUrl: PropTypes.string,

    /**
     * 水平对齐方向
    */
    horizontalAlign: PropTypes.oneOf([
      'left',
      'center',
      'right'
    ]),

    /**
     * 垂直对齐方向
    */
    verticalAlign: PropTypes.oneOf([
      'top',
      'middle',
      'bottom'
    ])

  };

  static defaultProps = {
    isRotate: false,
    isBackgroundImage: false,
    size: 16,
    horizontalAlign: 'right',
    verticalAlign: 'middle'
  };

  handleClick(event) {
    const { clickEventHandle } = this.props;
    clickEventHandle && clickEventHandle(event);
  }

  render() {
    const classes = ['icon'];
    const { size, font, children, clickEventHandle } = this.props;

    if (size) {
      classes.push('icon-' + size);
    }

    if (font) {
      classes.push('icon-' + font);
    }

    return (
      <i
        className={ parseAnyToString(classes) }
        onClick={ this.handleClick.bind(this) }>
        { children }
      </i>
    );

  }
}

export default IconButton;
