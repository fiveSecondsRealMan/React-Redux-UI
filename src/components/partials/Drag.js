/**
  元素拖拽组件
**/

import React, { Component, PropTypes } from 'react';
import { replaceTemplate } from 'utils';

export default class Drag extends Component {
	constructor(props) {
		super(props);

		this.onDragStart = this.handleDragStart.bind(this);
		this.onDrag = this.handleDrag.bind(this);
		this.onDragEnd = this.handleDragEnd.bind(this);
	}

	handleDragStart() {
		console.log('刚要触发');
	}

	handleDrag() {
    console.log('拖拽中');
	}

	handleDragEnd() {
    console.log('拖拽结束');
	}

  render() {
		return (
			<div
			  draggable={ true }
				onDragStart={ this.onDragStart }
				onDrag={ this.onDrag }
				onDragEnd={ this.onDragEnd }
				style={{ width: '100px', height: '100px', border: '1px solid red' }}>
				1
			</div>
		)
	}
}

Drag.propTypes = {
	/**
   * class
	*/
	className: PropTypes.string,


};

Drag.defaultProps = {};
