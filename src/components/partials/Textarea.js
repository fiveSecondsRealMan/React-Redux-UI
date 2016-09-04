/**
  TextArea(多行输入框) | 不可再分组件
**/

'use strict';

import React, { Component, PropTypes } from 'react';
import { pick, cloneNode, computedStyle } from 'utils';

class Textarea extends Component {
  getHeight() {
    const el = this.el;
    const paddingTop = parseInt(computedStyle(el, 'paddingTop'));
    const paddingBottom = parseInt(computedStyle(el, 'paddingBottom'));

    return el.clientHeight - paddingTop - paddingBottom;
  }

  getScrollHeight() {
    return this.el.scrollHeight;
  }

  adaptHeight() {
    const { rows, textareaAdaptRows } = this.props;
    const height = this.getHeight();
    const scrollHeight = this.getScrollHeight();
    const changeRows = Math.floor(scrollHeight / height);
    // if (changeRows > rows) {
    //   this.el.style.height = scrollHeight + 'px';
    //   console.log(this.el.clientHeight, 'ggg');
    // }

    if (changeRows > rows) {
      textareaAdaptRows(changeRows);
      this.el.style.overflowY = 'auto';
    } else {
      this.el.style.overflowY = 'hidden';
    }

    //changeRows >= rows && textareaAdaptRows(changeRows);
  }

  handleChange(e) {
	  const { changeEventHandle, readOnly, defaultValue } = this.props;

		if (readOnly) {
      return;
    }

    this.adaptHeight();

    // setTimeout(() => {
    //   changeEventHandle.call(this, e.target.value);
    // }, 0);
	}

	render() {
		const textareaProps = [
      'className',
      'style',
      'defaultValue',
      'readOnly',
      'rows'
    ];

		return (
			<textarea
        ref={ el => this.el = el }
        { ...pick(this.props, textareaProps) }
        onChange={ this.handleChange.bind(this) }>
      </textarea>
		);
	}
}

Textarea.propTypes = {
  className: PropTypes.string,
	style: PropTypes.object,
  rows: PropTypes.number,
	defaultValue: PropTypes.string,
	readOnly: PropTypes.bool,
	changeEventHandle: PropTypes.func,
  textareaAdaptRows: PropTypes.func
};

Textarea.defaultProps = {
  defaultValue: '',
  style: { resize: 'none', outline: 'none', height: 'auto', overflow: 'hidden' },
	readOnly: false
};

export default Textarea;
