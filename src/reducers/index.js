/**
 reducer入口
**/

 'use strict';

import { combineReducers } from 'redux';
import buttonDisabled from './buttonDisabled';
import checkboxChecked from './checkboxChecked';
import radioChecked from './radioChecked';
import checkboxGroupDefaultValues from './checkboxGroupDefaultValues';
import inputGetValue from './inputGetValue';
import textareaAdaptRows from './textareaAdaptRows';

export default combineReducers({
	buttonDisabled,
	checkboxChecked,
	radioChecked,
  checkboxGroupDefaultValues,
  inputGetValue,
  textareaAdaptRows
});
