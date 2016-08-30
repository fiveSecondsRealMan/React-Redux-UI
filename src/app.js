/**
  入口文件
**/

'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import storeCreator from 'store';
import * as actionCreator from 'action/actionCreator';
import Button from 'widgets/Button';

// 初始化state
const initialState = {
	buttonDisabled: false
};

// 定义store
const store = storeCreator(initialState);

// 定义绑定dispatch后的action
const action = bindActionCreators(actionCreator, store.dispatch);

const render = () => {
	const state = store.getState();

  ReactDOM.render(
		<Button
			type="button"
			className="btn"
			style={{ display: 'inline-block' }}
			eventHandle={ function () { alert('挖掘机');} }
			disabled={ state.buttonDisabled === void 0 ? false : state.buttonDisabled  }
			multied={ true }
			{ ...action }>
			primary
		</Button>,
		document.getElementById('app')
	)        
}

render();

store.subscribe(render);
