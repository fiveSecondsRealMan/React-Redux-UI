/**
  入口文件
**/

'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import storeCreator from 'store';
import * as actionCreator from 'action/actionCreator';
import Button from 'partials/Button';
import Checkbox from 'partials/Checkbox';
import Radio from 'partials/Radio';
import CheckboxGroup from 'components/CheckboxGroup';

// 初始化state
const initialState = {
		buttonDisabled: false,
		checkboxChecked: false,
		radioChecked: false,
		checkboxGroupDefaultValues: 'w|j|x'
};

// 定义store
const store = storeCreator(initialState);

// 定义绑定dispatch后的action
const action = bindActionCreators(actionCreator, store.dispatch);

const renderButton = () => {
	const state = store.getState();

  ReactDOM.render(
		<Button
			type='button'
			className='btn btn-info download'
			clickEventHandle={ function () { alert('挖掘机'); } }
			text='下一步'
			disabled={ state.buttonDisabled === void 0 ? false : state.buttonDisabled  }
			multied={ true }
			{ ...action }>
		</Button>,
		document.getElementById('app')
	)
}

const renderCheckbox = () => {
	const state = store.getState();

	ReactDOM.render(
		<Checkbox
			className='cbox'
			changeEventHandle={ function (value, checked) { console.log(value + ' : ' + checked); } }
			value='boy'
			text='男孩'
			checked={ state.checkboxChecked === void 0 ? false : state.checkboxChecked }
			{ ...action }>
		</Checkbox>,
		document.getElementById('app')
	);
};

const renderRadio = () => {
	const state = store.getState();

	ReactDOM.render(
		<Radio
			className="radio"
			changeEventHandle = { function (value, checked) { console.log(value + ' : ' + checked); } }
			value='girl'
			checked={ state.radioChecked === void 0 ? false : state.radioChecked }
			text='女孩'
			{ ...action } >
		</Radio>,
		document.getElementById('app')
	);
};

const renderCheckboxGroup = () => {
	const state = store.getState();

	ReactDOM.render(
		<CheckboxGroup
			changeEventHandle={ function (values) { console.log(values, '选中的value'); } }
			defaultCheckedValues={ state.checkboxGroupDefaultValues }
			textTpl='{text}({value})'
			{ ...action }
			data={ [
			  { value: 'w', text: '挖掘机1' },
				{ value: 'j', text: '挖掘机2' },
				{ value: 'x', text: '挖掘机3' },
				{ value: 'o', text: '挖掘机4' },
				{ value: 'b', text: '挖掘机5' }
			] }
			// data={ {
			// 	w: '挖掘机1',
			// 	j: '挖掘机2',
			// 	x: '挖掘机3',
			// 	o: '挖掘机4',
			// 	b: '挖掘机5'
			// } }
		>
		</CheckboxGroup>,
		document.getElementById('app')
	);
};
//render();
//renderCheckbox();
//renderRadio();
renderCheckboxGroup();

store.subscribe(renderCheckboxGroup);
