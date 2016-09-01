/**
  CheckboxGroup(复选框容器组件)
**/

'use strict';

import React, { Component, PropTypes } from 'react';
import Checkbox from 'partials/Checkbox';
import { class2type, objectDeal, stringDeal } from 'utils';

class CheckboxGroup extends Component {
	constructor() {
		this.data = this.formatData();
		this.values = {};
	}

  formatData() {
    let { 
			data, 
			textTpl, 
			valueTpl, 
			defaultCheckedValue,
			separator } = this.props;

		// 如果defaultCheckedValue为字符串
		if (class2type(defaultCheckedValue) === 'string')
			defaultCheckedValue = defaultCheckedValue.split(separator); 

    // 如果data是对象
    if (class2type(data) === 'object') 
			data = objectDeal.objectToArray(data, 'value', 'text');
		
		data = data.map((item, index) => {
			item.$text = stringDeal.replacePlaceholder(textTpl, item);
			item.$value = stringDeal.replacePlaceholder(valueTpl, item);
			item.$key = item.id || this.createID(index);
			item.$checked = defaultCheckedValue.indexOf(item.$value) >= 0; 
		});
		
		return data;
  }

	createID(index) {
		return 'c' + index;
	}

	setValues(value, checked, checkboxIndex) {
		if (checked) 
	  	this.values[checkboxIndex] = value;
		else
			delete this.values[checkboxIndex];
	}

	handleChange(value, checked, checkboxIndex) {
		const { changeEventHandle } = this.props;
		
		this.setValues.apply(this, arguments);
		changeEventHandle && changeEventHandle(this.values);
	}

  renderItems() {
		const { readOnly, cboxCheck, cboxUnCheck } = this.props;

		return this.data.map((item, index) => 
			<Checkbox
				key={ item.$key }
				readOnly={ readOnly }
				changeEventHandle={ this.handleChange.bind(this) }
				checked={ item.$checked }
				text={ item.$text }
				index={ index }
				value={ item.$value }
				cboxCheck={ cboxCheck }
				cboxUnCheck={ cboxUnCheck }>
			</Checkbox>	
		);
  }

  render() {
		const { className, style } = this.props;

		return (
			<div className={ className } style={ style }>
				{ this.renderItems() }
			</div>
		);
  }

}

CheckboxGroup.propTypes = {
  className: PropTypes.string,							// class名
  style: PropTypes.object,								  // 样式
  data: PropTypes.oneOfType([							  // 子checkbox数据
    PropTypes.array,
    PropTypes.object
  ]),
  fetch: PropTypes.object,									// 请求远程信息
  direction: PropTypes.oneOf([							// 子checkbox排列方向
    'horizontal',
    'vertical'
  ]),
	defaultCheckedValue: PropTypes.oneOfType([ // 默认选中value为defaultCheckedValue指定的值的checkbox
		PropTypes.string,
		PropTypes.array
	]), 
  changeEventHandle: PropTypes.func				  // change event trigger
};

CheckboxGroup.defaultProps = {
  data: [],
	defaultCheckedValue: [],
	separator: '|',
  order: 'horizontal',
  checked: false,
  readOnly: false,
	textTpl: '{text}',
	valueTpl: '{value}'
};

export default CheckboxGroup;
