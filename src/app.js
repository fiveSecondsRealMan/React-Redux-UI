/**
  入口文件
**/

'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { store } from 'store';
import { action } from 'action/actionCreator';

import Button from 'widgets/Button';

const render = () => {
  ReactDOM.render(
		<Button
			type="button"
			className="btn"
			style={{ display: 'inline-block' }},
			disabled={ false }
			onClick={ function () {alert('挖掘机');} }
			multied={ false }
			action={  }
		</Button>	
	)        
}

