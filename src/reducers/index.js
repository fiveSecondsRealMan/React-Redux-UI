/**
 reducer入口
 **/

 'use strict';

import { combineReducers } from 'redux';
import buttonDisabled from './buttonDisabled.js';
import checkboxChecked from './checkboxChecked.js';

export default combineReducers({ 
	buttonDisabled,
	checkboxChecked
});
