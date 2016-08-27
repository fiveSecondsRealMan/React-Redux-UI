/**
  部件
  Button(按钮)
**/

'use strict';

import React, { Component, PropTypes } from 'react';
import 'styles/button';

class Button extends Component {
  disable() {
		const { disableAction } = { this.props.action };
		disableAction.apply(this, true);
  }

	enable(...args) {
		const { enableAction } = { this.props.action };
		enableAction.apply(this, false);
	}

  fetch() {
		this.props.eventHandle();
  }

	interactive() {
		this.props.eventHandle();
	}

	handleClick() {
		if (this.multied) {
		  this.fetch();
			this.disable();
		} else {
			this.interactive();			
		}
	}

  render() {
		const { type, className, style, children, disabled } = this.props;

		return (
			<button type={ type } 
				className={ className }  
				style={ style }
				onClick={ this.handleClick  }
				disabled={ disabled }>

		  { children  }			

			</button> 
		);
				 
  }
}

/**
  组件接收的props
**/
Button.propTypes = {
  action: PropTypes.object,               										 // 组件发生交互的动作
  children: PropTypes.string,             										 // 显示信息
  className: PropTypes.string,            										 // class名
	style: PropTypes.object,																		 // 样式对象
 	type: PropTypes.oneOf(['submit', 'button']),                 // 按钮类型
	eventHandle: PropTypes.func,            										 // 事件处理程序
  disabled: PropTypes.bool,               										 // 是否禁用
	multied: PropTypes.bool																		   // 是否多次点击
};

export default Button;
