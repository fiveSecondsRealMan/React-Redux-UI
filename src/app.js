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

// 初始化state
const initialState = {
		buttonDisabled: false,
		checkboxChecked: false,
		radioChecked: false
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
			disabled={ state.buttonDisabled === void 0 ? false : state.buttonDisabled  }
			multied={ true }
			{ ...action }>
			下一步
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

//render();
//renderCheckbox();
renderRadio();

store.subscribe(renderRadio);
